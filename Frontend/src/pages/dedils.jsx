import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../componants/navbar/Navbar";
import { FaTag, FaStore, FaShoppingCart } from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);

  // البحث عن المنتج الذي يتطابق مع الـ ID
  const productDetails = products.find((product) => product._id === id);
  if (!productDetails) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-12 bg-white rounded-lg shadow-lg">
          <svg
            className="animate-spin h-12 w-12 text-blue-500 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12c0-4.42 3.58-8 8-8s8 3.58-8 8h-4c0-2.21-1.79-4-4-4S4 9.79 4 12H0z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-gray-700">
            جاري التحميل...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-primary p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center items-start">
              <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
                <div className="flex items-center justify-between gap-6 mb-6">
                  <div className="text">
                    <h2 className="font-manrope font-bold text-4xl leading-10 text-gray-900 mb-2">
                      {productDetails.productName}
                    </h2>
                    <p className="font-normal text-base text-gray-500 flex items-center gap-2">
                      <FaStore className="text-custmblue" />
                      {productDetails.supplier}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <FaTag className="text-custmblue text-2xl" />
                  <h5 className="font-manrope font-semibold text-2xl text-gray-900">
                    {productDetails.suggestedPrice} JD
                  </h5>
                </div>

                <p className="font-medium text-base text-gray-700 mb-4">
                  {productDetails.description}
                </p>

                <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                  <button className="group py-3 px-5 rounded-full bg-custmblue text-white font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-lg transition-all duration-500 hover:bg-indigo-700">
                    <FaShoppingCart className="text-white" />
                    إضافة إلى منتجاتي
                  </button>
                </div>

                <Link to="/Cartt">
                  <button className="text-center w-full px-5 py-3 rounded-full bg-custmblue flex items-center justify-center font-semibold text-lg text-white shadow-lg transition-all duration-500 hover:bg-blue-700">
                    اشتري الآن
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={
                  productDetails.imageURL || "https://via.placeholder.com/300"
                }
                alt={productDetails.productName}
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
