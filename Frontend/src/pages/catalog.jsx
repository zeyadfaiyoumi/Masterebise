import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/productslice";
import Swal from "sweetalert2";
import Navbar from "../componants/navbar/Navbar";
import { FaSearch, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function Catalog() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // حقل الفئة الافتراضية فارغ

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProduct()).catch((err) => {
        console.error("Failed to fetch products:", err);
      });
    }
  }, [status, dispatch]);

  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/zos/Favorite",
        { product_id: productId },
        { withCredentials: true }
      );

      if (response.status === 201) {
        Swal.fire({
          title: "🎉 تمت الإضافة إلى السلة بنجاح!",
          text: "هل تود الانتقال إلى منتجاتك الآن أو متابعة التسوق؟",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#0A00C7",
          cancelButtonColor: "#d33",
          confirmButtonText: "منتجاتي",
          cancelButtonText: "متابعة التسوق",
          background: "#f8f9fa",
          customClass: {
            title: "font-bold text-xl",
            confirmButton: "rounded-lg px-6 py-3",
            cancelButton: "rounded-lg px-6 py-3",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/Myproduct";
          }
        });
      }
    } catch (error) {
      console.error("Failed to add product to favorites:", error);
      if (error.response && error.response.status === 400) {
        Swal.fire({
          title: "✅ المنتج موجود بالفعل في منتجاتي!",
          text: "يمكنك إضافة منتج آخر.",
          icon: "warning",
          confirmButtonColor: "#0A00C7",
        });
      } else {
        Swal.fire({
          title: "❌ فشل في إضافة المنتج إلى منتجاتي يجب تسجيل الدخول!",
          text: "يرجى المحاولة مرة أخرى.",
          icon: "error",
          confirmButtonColor: "#0A00C7",
        });
      }
    }
  };

  // للحصول على جميع الفئات الفريدة من المنتجات
  const uniqueCategories = [
    ...new Set(
      products.map((product) => {
        return product.category;
      })
    ),
  ];

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        const isNameMatch = product.productName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const isDateMatch =
          filterDate === "" ||
          new Date(product.createdAt).toISOString().split("T")[0] ===
            filterDate;
        const isCategoryMatch =
          selectedCategory === "" || product.category === selectedCategory; // يظهر كل المنتجات إذا كانت الفئة فارغة

        return isNameMatch && isDateMatch && isCategoryMatch;
      })
    : [];

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-28">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="relative w-full md:w-auto mb-4 md:mb-0">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-custmblue" />
                <input
                  type="text"
                  placeholder="ابحث عن منتج..."
                  className="w-full md:w-64 border-2 border-custmblue rounded-full pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-custmblue transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative flex items-center w-full md:w-auto">
                <FaFilter className="absolute left-3 text-custmblue" />
                <select
                  className="pl-10 w-full md:w-64 border-2 border-custmblue rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-custmblue transition-shadow"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">جميع الفئات</option>
                  {uniqueCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative flex items-center w-full md:w-auto">
                <input
                  type="date"
                  className="pl-10 w-full md:w-64 border-2 border-custmblue rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-custmblue transition-shadow"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentItems.map((product) => (
            <div
              key={product._id}
              className="bg-primary rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link to={`/details/${product._id}`}>
                <img
                  src={
                    product.imageURL || "https://via.placeholder.com/300x200"
                  }
                  alt={product.productName}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {product.productName}
                </h2>
                <p className="text-sm text-custmblue mb-3 text-center">
                  المورد: {product.supplier}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">سعر التكلفة</p>
                    <p className="text-lg font-bold text-scand">
                      {product.cost} JD
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">السعر المقترح</p>
                    <p className="text-lg font-bold text-scand">
                      {product.suggestedPrice} JD
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product._id)}
                  className="w-full bg-custmblue text-white py-2 rounded-lg hover:bg-custmblue transition-colors duration-300"
                >
                  إضافة إلى منتجاتي
                </button>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`mx-1 px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-custmblue text-white"
                    : "bg-white text-custmblue hover:bg-custmblue hover:text-white"
                } transition duration-300`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Catalog;
