// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   FaEdit,
//   FaTrashAlt,
//   FaSearch,
//   FaBox,
//   FaTruck,
//   FaMoneyBillWave,
// } from "react-icons/fa";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5001/api/zos/products"
//       );
//       setProducts(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError("خطأ في جلب المنتجات");
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:5001/api/zos/products/${productId}`);
//       setProducts(products.filter((product) => product._id !== productId));
//     } catch (err) {
//       setError("خطأ في حذف المنتج");
//     }
//   };

//   const handleEdit = async (productId, updatedData) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5001/api/zos/products/${productId}`,
//         updatedData
//       );
//       setProducts(
//         products.map((product) =>
//           product._id === productId ? response.data : product
//         )
//       );
//     } catch (err) {
//       setError("خطأ في تعديل المنتج");
//     }
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.supplier.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-red-500 text-center text-xl mt-10">{error}</div>
//     );
//   }

//   return (
//     <div className="flex h-screen bg-gray-100" dir="rtl">
//       {/* Sidebar placeholder */}
//       <div className="w-64 bg-white shadow-md">
//         {/* Sidebar content goes here */}
//       </div>

//       {/* Main content */}
//       <div className="flex-1 overflow-auto p-6">
//         <h1 className="text-3xl font-bold mb-8 text-gray-800">
//           لوحة تحكم المنتجات
//         </h1>

//         {/* Quick Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white rounded-lg shadow p-6 flex items-center">
//             <FaBox className="text-blue-500 text-3xl ml-4" />
//             <div>
//               <p className="text-sm text-gray-600">إجمالي المنتجات</p>
//               <p className="text-2xl font-semibold">{products.length}</p>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow p-6 flex items-center">
//             <FaTruck className="text-green-500 text-3xl ml-4" />
//             <div>
//               <p className="text-sm text-gray-600">عدد الموردين</p>
//               <p className="text-2xl font-semibold">
//                 {new Set(products.map((p) => p.supplier)).size}
//               </p>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow p-6 flex items-center">
//             <FaMoneyBillWave className="text-yellow-500 text-3xl ml-4" />
//             <div>
//               <p className="text-sm text-gray-600">متوسط السعر</p>
//               <p className="text-2xl font-semibold">
//                 {(
//                   products.reduce((acc, p) => acc + p.suggestedPrice, 0) /
//                   products.length
//                 ).toFixed(2)}{" "}
//                 دينار
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="mb-6 relative">
//           <input
//             type="text"
//             placeholder="البحث عن منتج أو مورد..."
//             className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <FaSearch className="absolute right-3 top-3 text-gray-400" />
//         </div>

//         {/* Products Table */}
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <table className="min-w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   اسم المنتج
//                 </th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   التكلفة
//                 </th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   السعر المقترح
//                 </th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   المورّد
//                 </th>
//                 <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   إجراءات
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredProducts.map((product) => (
//                 <tr key={product._id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {product.productName}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {product.cost} دينار
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {product.suggestedPrice} دينار
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {product.supplier}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-center">
//                     <button
//                       onClick={() =>
//                         handleEdit(product._id, {
//                           /* updated data */
//                         })
//                       }
//                       className="text-blue-600 hover:text-blue-800 mx-2 transition duration-150 ease-in-out"
//                       title="تعديل المنتج"
//                     >
//                       <FaEdit size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(product._id)}
//                       className="text-red-600 hover:text-red-800 mx-2 transition duration-150 ease-in-out"
//                       title="حذف المنتج"
//                     >
//                       <FaTrashAlt size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
// -------------------
// -------------------
// -------------------
// -------------------
// -------------------
// -------------------
// -------------------
// -------------------
// -------------------
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEdit, FaTrashAlt, FaSearch, FaPlus } from "react-icons/fa";
// import Sidebar from "../../components/Sidebar";
// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [productForm, setProductForm] = useState({
//     productName: "",
//     cost: "",
//     suggestedPrice: "",
//     supplier: "",
//   });
//   const [editingProductId, setEditingProductId] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5001/api/zos/products"
//       );
//       setProducts(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError("Error fetching products");
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:5001/api/zos/products/${productId}`);
//       setProducts(products.filter((product) => product._id !== productId));
//     } catch (err) {
//       setError("Error deleting product");
//     }
//   };

//   const handleEdit = (product) => {
//     setEditingProductId(product._id);
//     setProductForm({
//       productName: product.productName,
//       cost: product.cost,
//       suggestedPrice: product.suggestedPrice,
//       supplier: product.supplier,
//     });
//     setShowPopup(true);
//   };

//   const handleAddProduct = () => {
//     setEditingProductId(null);
//     setProductForm({
//       productName: "",
//       cost: "",
//       suggestedPrice: "",
//       supplier: "",
//     });
//     setShowPopup(true);
//   };

//   const handleSave = async () => {
//     if (editingProductId) {
//       // Update product
//       try {
//         const response = await axios.put(
//           `http://localhost:5001/api/zos/products/${editingProductId}`,
//           productForm
//         );
//         setProducts(
//           products.map((product) =>
//             product._id === editingProductId ? response.data : product
//           )
//         );
//       } catch (err) {
//         setError("Error updating product");
//       }
//     } else {
//       // Add new product
//       try {
//         const response = await axios.post(
//           "http://localhost:5001/api/zos/products",
//           productForm
//         );
//         setProducts([...products, response.data]);
//       } catch (err) {
//         setError("Error adding product");
//       }
//     }
//     setShowPopup(false);
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.supplier.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-red-500 text-center text-xl mt-10">{error}</div>
//     );
//   }

//   return (
//     <div className="bg-primary">
//       <Sidebar />
//       <div className="flex h-screen " dir="rtl">
//         {/* Sidebar placeholder */}
//         <div className="w-64 bg-primary shadow-md"></div>

//         {/* Main content */}
//         <div className="flex-1 overflow-auto p-6">
//           <h1 className="text-3xl font-bold mb-8 text-gray-800">
//             لوحة تحكم المنتجات
//           </h1>

//           {/* Search Bar */}
//           <div className="mb-6 relative">
//             <input
//               type="text"
//               placeholder="البحث عن منتج أو مورد..."
//               className="w-full px-4 py-2 pr-10 rounded-lg border bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <FaSearch className="absolute right-3 top-3 text-gray-400" />
//           </div>

//           {/* Add Product Button */}
//           <button
//             onClick={handleAddProduct}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-150 ease-in-out mb-6"
//           >
//             <FaPlus className="inline-block mr-2" /> إضافة منتج جديد
//           </button>

//           {/* Products Table */}
//           <div className="bg-primary rounded-lg shadow overflow-hidden">
//             <table className="min-w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     اسم المنتج
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     التكلفة
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     السعر المقترح
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     المورد
//                   </th>
//                   <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     إجراءات
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredProducts.map((product) => (
//                   <tr key={product._id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {product.productName}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {product.cost}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {product.suggestedPrice}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {product.supplier}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       <button
//                         onClick={() => handleEdit(product)}
//                         className="text-blue-600 hover:text-blue-800 mx-2 transition duration-150 ease-in-out"
//                       >
//                         <FaEdit size={18} />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(product._id)}
//                         className="text-red-600 hover:text-red-800 mx-2 transition duration-150 ease-in-out"
//                       >
//                         <FaTrashAlt size={18} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Popup for Add/Edit Product */}
//           {showPopup && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//               <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//                 <h2 className="text-xl mb-4">
//                   {editingProductId ? "تعديل المنتج" : "إضافة منتج جديد"}
//                 </h2>
//                 <input
//                   type="text"
//                   placeholder="اسم المنتج"
//                   value={productForm.productName}
//                   onChange={(e) =>
//                     setProductForm({
//                       ...productForm,
//                       productName: e.target.value,
//                     })
//                   }
//                   className="w-full mb-4 px-4 py-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="التكلفة"
//                   value={productForm.cost}
//                   onChange={(e) =>
//                     setProductForm({ ...productForm, cost: e.target.value })
//                   }
//                   className="w-full mb-4 px-4 py-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="السعر المقترح"
//                   value={productForm.suggestedPrice}
//                   onChange={(e) =>
//                     setProductForm({
//                       ...productForm,
//                       suggestedPrice: e.target.value,
//                     })
//                   }
//                   className="w-full mb-4 px-4 py-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="المورد"
//                   value={productForm.supplier}
//                   onChange={(e) =>
//                     setProductForm({ ...productForm, supplier: e.target.value })
//                   }
//                   className="w-full mb-4 px-4 py-2 border rounded"
//                 />
//                 <div className="flex justify-end space-x-2">
//                   <button
//                     onClick={() => setShowPopup(false)}
//                     className="px-4 py-2 bg-gray-400 text-white rounded"
//                   >
//                     إلغاء
//                   </button>
//                   <button
//                     onClick={handleSave}
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition duration-150 ease-in-out"
//                   >
//                     {editingProductId ? "حفظ التعديلات" : "إضافة المنتج"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
// ------------
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt, FaSearch, FaPlus } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import ReactPaginate from "react-paginate"; // تأكد من أنك مثبت مكتبة paginate

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [productForm, setProductForm] = useState({
    productName: "",
    cost: "",
    suggestedPrice: "",
    supplier: "",
  });
  const [editingProductId, setEditingProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(5); // يمكن تعديل هذا حسب الحاجة

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/zos/products"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching products");
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5001/api/zos/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (err) {
      setError("Error deleting product");
    }
  };

  const handleEdit = (product) => {
    setEditingProductId(product._id);
    setProductForm({
      productName: product.productName,
      cost: product.cost,
      suggestedPrice: product.suggestedPrice,
      supplier: product.supplier,
    });
    setShowPopup(true);
  };

  const handleAddProduct = () => {
    setEditingProductId(null);
    setProductForm({
      productName: "",
      cost: "",
      suggestedPrice: "",
      supplier: "",
    });
    setShowPopup(true);
  };

  const handleSave = async () => {
    if (editingProductId) {
      // Update product
      try {
        const response = await axios.put(
          `http://localhost:5001/api/zos/products/${editingProductId}`,
          productForm
        );
        setProducts(
          products.map((product) =>
            product._id === editingProductId ? response.data : product
          )
        );
      } catch (err) {
        setError("Error updating product");
      }
    } else {
      // Add new product
      try {
        const response = await axios.post(
          "http://localhost:5001/api/zos/products",
          productForm
        );
        setProducts([...products, response.data]);
      } catch (err) {
        setError("Error adding product");
      }
    }
    setShowPopup(false);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center text-xl mt-10">{error}</div>
    );
  }

  return (
    <div className="bg-primary">
      <Sidebar />
      <div className="flex h-screen" dir="rtl">
        <div className="w-64 bg-primary shadow-md"></div>

        <div className="flex-1 overflow-auto p-6">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            لوحة تحكم المنتجات
          </h1>

          {/* Search Bar */}
          <div className="mb-6 relative text-center">
            <input
              type="text"
              placeholder="البحث عن منتج أو مورد..."
              className="w-1/2 mx-auto px-4 py-2 pr-10 rounded-lg border bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>

          {/* Add Product Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleAddProduct}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-150 ease-in-out"
            >
              <FaPlus className="inline-block mr-2" /> إضافة منتج جديد
            </button>
          </div>

          {/* Products Table */}
          <div className="bg-primary rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    اسم المنتج
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    التكلفة
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    السعر المقترح
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    المورد
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    إجراءات
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentProducts.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.productName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.cost}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.suggestedPrice}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.supplier}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-blue-600 hover:text-blue-800 mx-2 transition duration-150 ease-in-out"
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="text-red-600 hover:text-red-800 mx-2 transition duration-150 ease-in-out"
                      >
                        <FaTrashAlt size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 text-center">
            <ReactPaginate
              pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
              onPageChange={handlePageChange}
              containerClassName="flex justify-center"
              pageClassName="px-4 py-2 mx-1 rounded-lg border bg-white text-gray-600"
              activeClassName="bg-blue-600 text-white"
              disabledClassName="text-gray-400"
              previousLabel="السابق"
              nextLabel="التالي"
            />
          </div>

          {/* Popup for Add/Edit Product */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-xl mb-4">
                  {editingProductId ? "تعديل المنتج" : "إضافة منتج جديد"}
                </h2>
                <input
                  type="text"
                  placeholder="اسم المنتج"
                  value={productForm.productName}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      productName: e.target.value,
                    })
                  }
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <input
                  type="number"
                  placeholder="التكلفة"
                  value={productForm.cost}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      cost: e.target.value,
                    })
                  }
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <input
                  type="number"
                  placeholder="السعر المقترح"
                  value={productForm.suggestedPrice}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      suggestedPrice: e.target.value,
                    })
                  }
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="المورد"
                  value={productForm.supplier}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      supplier: e.target.value,
                    })
                  }
                  className="w-full mb-4 px-4 py-2 border rounded-lg"
                />
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setShowPopup(false)}
                    className="px-4 py-2 mr-2 bg-gray-200 text-gray-800 rounded-lg"
                  >
                    إلغاء
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    حفظ
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
