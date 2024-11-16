import React, { useEffect, useState } from "react";
import Navbar from "../componants/navbar/Navbar";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faShoppingCart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom"; // استدعاء useNavigate
import axios from "axios";

function Myproduct() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const navigate = useNavigate(); // استخدام useNavigate

  // Fetch favorite products from the backend
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/zos/Favorite",
          { withCredentials: true }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching favorite products", error);

        navigate("/Signup");
      }
    };

    fetchFavorites();
  }, []);

  // دالة لحذف المنتج
  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:5001/api/zos/Favorite/${productId}`,
        { withCredentials: true }
      );
      // تحديث حالة المنتجات بعد الحذف
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productExists = currentCart.some((item) => item._id === product._id);

    if (productExists) {
      // استخدام SweetAlert لإظهار رسالة
      Swal.fire({
        title: `${product.productName} موجود بالفعل في السلة!`,
        icon: "warning",
        confirmButtonText: "موافق",
      });
    } else {
      currentCart.push(product);
      localStorage.setItem("cart", JSON.stringify(currentCart));

      // استخدام SweetAlert لإظهار رسالة النجاح
      Swal.fire({
        title: `${product.productName} تم إضافته إلى السلة!`,
        icon: "success",
        confirmButtonText: "موافق",
      });
    }
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <Navbar />
      <div className="pt-28 bg-primary pb-96">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
          <h2 className="text-lg font-bold mb-4">قائمة المنتجات</h2>
          <div className="my-4">
            <label
              htmlFor="product-search"
              className="block text-muted-foreground mb-2"
            >
              الوصول السريع للمنتج
            </label>
            <input
              type="text"
              id="product-search"
              placeholder="ادخل اسم المنتج"
              className="w-full p-2 border border-border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="p-2 border border-border">الصورة</th>
                <th className="p-2 border border-border">العنوان</th>
                <th className="p-2 border border-border">سعر البيع المقترح</th>
                <th className="p-2 border border-border">سعر التكلفة</th>
                <th className="p-2 border border-border">الحالة</th>
                <th className="p-2 border border-border">الاجراءات</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <tr key={product._id} className="border border-border">
                    <td className="p-2 border border-border">
                      <img
                        src={product.imageURL}
                        alt={product.productName}
                        className="rounded w-16 h-16 object-cover"
                        onClick={() => navigate(`/details/${product._id}`)} // نفس التنقل عند النقر على الصورة
                      />
                    </td>
                    <td className="p-2 border border-border">
                      {product.productName}
                    </td>
                    <td className="p-2 border border-border text-red-500">
                      {product.suggestedPrice} JD
                    </td>
                    <td className="p-2 border border-border text-scand">
                      {product.cost} JD
                    </td>
                    <td className="p-2 border border-border">
                      {product.isActive ? (
                        <button className="bg-scand text-white p-1 rounded">
                          فعال
                        </button>
                      ) : (
                        <button className="bg-red-500 text-white p-1 rounded">
                          غير فعال
                        </button>
                      )}
                    </td>
                    <td className="p-2 border border-border">
                      <div className="flex justify-around">
                        <button
                          className="text-blue-600 hover:bg-blue-100 p-1 rounded-full"
                          onClick={() => navigate(`/details/${product._id}`)} // التنقل عند النقر على الأيقونة
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>

                        {/* تعديل زر السلة ليتصل بدالة إضافة المنتج إلى السلة */}
                        <button
                          className="text-yellow-600 hover:bg-yellow-100 p-1 rounded-full"
                          onClick={() => addToCart(product)}
                        >
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </button>

                        <button
                          className="text-red-600 hover:bg-red-100 p-1 rounded-full"
                          onClick={() => handleDelete(product._id)} // استدعاء دالة الحذف
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-2">
                    لا توجد منتجات مفضلة.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded bg-gray-200 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              ❮ السابق
            </button>

            {/* <div className="flex">{renderPaginationButtons()}</div> */}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded bg-gray-200 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              التالي ❯
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myproduct;
