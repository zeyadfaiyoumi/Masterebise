import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../componants/navbar/Navbar";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";

function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [filter, setFilter] = useState("تريند");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  // بيانات نموذجية للمنتجات
  const products = [...Array(8)].map((_, index) => ({
    id: index + 1,
    name: "ساعة Mi W02 الذكية",
    supplier: "ZOS",
    costPrice: "25 JD",
    expectedProfit: "6.5 JD",
    imageUrl:
      "https://tv-it.com/storage/shada/smart-watch/smart-watch-imilab-w02-watch.webp",
  }));

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <Navbar />
      <section
        className="py-24 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://afdalanalytics.com//storage/Blog_108_Internal_Design_2.jpg')",
          backgroundSize: "contain", // تصغير حجم الصورة
          backgroundPosition: "top left", // تغيير مكان الصورة من المركز إلى الزاوية العلوية اليسرى
          backgroundRepeat: "no-repeat", // عدم تكرار الصورة
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2  bg-primary md:grid-cols-3 lg:grid-cols-4 gap-6 p-12">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-primary border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to="/details">
              <img
                className="rounded-t-lg w-full h-64"
                src={product.imageUrl}
                alt={product.name}
              />
            </Link>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {product.name}
              </h5>
              <p className="mb-3 font-normal text-[#0A00C7] dark:text-gray-400">
                المورد: {product.supplier}
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="font-normal text-black dark:text-gray-400">
                    سعر التكلفة
                  </p>
                  <p className="font-bold text-scand dark:text-gray-400 text-center">
                    {product.costPrice}
                  </p>
                </div>
                <div>
                  <p className="font-normal text-black dark:text-gray-400">
                    الربح المتوقع
                  </p>
                  <p className="font-bold text-scand dark:text-gray-400 text-center">
                    {product.expectedProfit}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                className="mt-4 w-full text-white bg-[#0A00C7] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                اضافة الى منتجاتي
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-6">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === 1 && "cursor-not-allowed opacity-50"
                }`}
              >
                <FaArrowLeft />
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-2 leading-tight border ${
                    currentPage === index + 1
                      ? "text-white bg-[#0A00C7] border-[#0A00C7]"
                      : "text-gray-500 bg-white border-gray-300"
                  } hover:bg-gray-100 hover:text-gray-700`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === totalPages && "cursor-not-allowed opacity-50"
                }`}
              >
                <FaArrowRight />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Catalog;
