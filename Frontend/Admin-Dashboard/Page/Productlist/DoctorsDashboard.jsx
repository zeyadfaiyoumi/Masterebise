import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt, FaSearch, FaPlus } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import ReactPaginate from "react-paginate";

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
    imageURL: "",
    description: "",
    category: "",
  });
  const [editingProductId, setEditingProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(5);

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
      imageURL: product.imageURL,
      description: product.description,
      category: product.category,
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
      <div className="flex h-screen justify-center items-center" dir="rtl">
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
              className="w-2/3 md:w-1/2 mx-auto px-4 py-2 pr-10 rounded-lg border bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Add Product Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => {
                setEditingProductId(null);
                setProductForm({
                  productName: "",
                  cost: "",
                  suggestedPrice: "",
                  supplier: "",
                  imageURL: "",
                  description: "",
                  category: "",
                });
                setShowPopup(true);
              }}
              className="bg-custmblue text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-150 ease-in-out"
            >
              <FaPlus className="inline-block mr-2" /> إضافة منتج جديد
            </button>
          </div>

          {/* Products Table */}
          <div className="bg-primary rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-custmblue">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    اسم المنتج
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    التكلفة
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    السعر المقترح
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    المورد
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
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
                  className="w-full mb-4 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="التكلفة"
                  value={productForm.cost}
                  onChange={(e) =>
                    setProductForm({ ...productForm, cost: e.target.value })
                  }
                  className="w-full mb-4 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="السعر المقترح"
                  value={productForm.suggestedPrice}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      suggestedPrice: e.target.value,
                    })
                  }
                  className="w-full mb-4 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="المورد"
                  value={productForm.supplier}
                  onChange={(e) =>
                    setProductForm({ ...productForm, supplier: e.target.value })
                  }
                  className="w-full mb-4 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="رابط الصورة"
                  value={productForm.imageURL}
                  onChange={(e) =>
                    setProductForm({ ...productForm, imageURL: e.target.value })
                  }
                  className="w-full mb-4 p-2 border rounded"
                />
                <textarea
                  placeholder="الوصف"
                  value={productForm.description}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full mb-4 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="الفئة"
                  value={productForm.category}
                  onChange={(e) =>
                    setProductForm({ ...productForm, category: e.target.value })
                  }
                  className="w-full mb-4 p-2 border rounded"
                />
                <div className="flex justify-between">
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    حفظ
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    إلغاء
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
