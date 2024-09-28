import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/productslice";
import Swal from "sweetalert2";
import Navbar from "../componants/navbar/Navbar";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Catalog() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [filter, setFilter] = useState("تريند");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProduct()).catch((err) => {
        console.error("Failed to fetch products:", err);
      });
    }
  }, [status, dispatch]);

  const handleAddToCart = () => {
    Swal.fire({
      title: "🎉 تمت الإضافة إلى السلة بنجاح!",
      text: "هل تود الانتقال إلى منتجاتك الآن أو متابعة التسوق؟",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#0A00C7",
      cancelButtonColor: "#d33",
      confirmButtonText: "منتجاتي",
      cancelButtonText: "متابعة التسوق",
      background: "#f2f2f2",
      backdrop: `
        rgba(0,0,0,0.4)
        url("https://media.giphy.com/media/jt7bAtEijhurm/giphy.gif")
        left top
        no-repeat
      `,
      customClass: {
        title: "font-bold text-lg",
        confirmButton: "rounded-lg px-6 py-3",
        cancelButton: "rounded-lg px-6 py-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/Myproduct";
      }
    });
  };

  const totalPages = Math.ceil(
    (Array.isArray(products) ? products.length : 0) / itemsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const currentItems = Array.isArray(products)
    ? products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <Navbar />
      <section
        className="py-24 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://afdalanalytics.com//storage/Blog_108_Internal_Design_2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center font-bold text-2xl md:text-3xl text-white">
          <h1 className="pb-4 font-normal">ابحث عن منتجك المفضل</h1>
          <div className="flex justify-center items-center gap-4">
            <div className="relative text-base">
              <input
                type="text"
                placeholder="ابحث هنا..."
                className="shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full pr-10 bg-gray-100 text-gray-700"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                id="options-menu"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                {filter}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <button
                      onClick={() => {
                        setFilter("تريند");
                        toggleDropdown();
                      }}
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                    >
                      تريند
                    </button>
                    <button
                      onClick={() => {
                        setFilter("الأحدث");
                        toggleDropdown();
                      }}
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                    >
                      الأحدث
                    </button>
                    <button
                      onClick={() => {
                        setFilter("الأعلى مبيعاً");
                        toggleDropdown();
                      }}
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                    >
                      الأعلى مبيعاً
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-12">
        {currentItems.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-lg p-5 flex flex-col"
          >
            <Link to={`/details/${product._id}`}>
              <img
                src={product.imageURL || "https://via.placeholder.com/150"}
                alt={product.productName}
                className="w-full h-56 object-cover rounded-t-lg"
              />
            </Link>
            <div className="p-5 flex-1 flex flex-col">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {product.productName}
              </h5>
              <p className="mb-3 font-normal text-[#0A00C7] dark:text-gray-400 text-center">
                المورد: {product.supplier}
              </p>
              <div className="flex justify-between mb-4">
                <div className="text-center">
                  <p className="font-normal text-black dark:text-gray-400">
                    سعر التكلفة
                  </p>
                  <p className="font-bold text-scand dark:text-gray-400">
                    {product.cost} JD
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-normal text-black dark:text-gray-400">
                    السعر المقترح
                  </p>
                  <p className="font-bold text-scand dark:text-gray-400">
                    {product.suggestedPrice} JD
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                className="mt-auto w-full text-white bg-[#0A00C7] hover:bg-[#0A00C7] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                اضافة الى منتجاتي
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 p-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-[#0A00C7] text-white p-3 rounded-lg disabled:opacity-50 flex items-center gap-2"
        >
          <FaArrowRight />
        </button>
        <p className="text-lg">
          صفحة {currentPage} من {totalPages}
        </p>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="bg-[#0A00C7] text-white p-3 rounded-lg disabled:opacity-50 flex items-center gap-2"
        >
          <FaArrowLeft />
        </button>
      </div>
    </>
  );
}

export default Catalog;
