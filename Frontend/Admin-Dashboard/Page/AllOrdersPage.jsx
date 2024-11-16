import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar"; // تأكد من استيراد السايد بار

const AllOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/zos/DgetUserOrders",
          { withCredentials: true }
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await axios.put(
        `http://localhost:5001/api/zos/DcancelOrder/${orderId}`,
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, cancelled: true } : order
          )
        );
      }
      alert(response.data.message);
    } catch (error) {
      console.error("Error canceling order:", error);
      alert("حدث خطأ أثناء إلغاء الطلب.");
    }
  };

  const handleMarkAsDelivered = async (orderId) => {
    try {
      const response = await axios.put(
        `http://localhost:5001/api/zos/markAsDelivered/${orderId}`,
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, complete: true } : order
          )
        );
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error marking as delivered:", error);
      alert(error.response?.data?.message || "حدث خطأ أثناء تحديث حالة الطلب.");
    }
  };

  const filteredOrders = orders.filter((order) => {
    return order.customerName.toLowerCase().includes(searchTerm);
  });

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12">
      <div className="flex">
        <Sidebar className="w-1/4" /> {/* السايد بار على اليمين */}
        <div className="container mx-auto px-6 ml-auto w-3/4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center py-12">
              إدارة الطلبات
            </h1>

            <div className="bg-primary bg-opacity-90 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="البحث عن طلب باسم العميل..."
                  className="w-full md:w-96 px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                        المنتجات
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                        اسم العميل
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                        التاريخ
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                        الحالة
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                        المجموع
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                        الإجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredOrders.map((order) => (
                      <tr
                        key={order._id}
                        className="hover:bg-gray-50 transition duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            {order.cartItems.map((item, index) => (
                              <span key={item.productId}>
                                {item.productName}
                                {index < order.cartItems.length - 1 && (
                                  <span className="text-gray-300 mx-2">|</span>
                                )}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {order.customerName}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-4 py-1.5 rounded-full text-sm font-medium ${
                              order.complete
                                ? "bg-green-100 text-green-800"
                                : order.cancelled
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.complete
                              ? "تم التوصيل"
                              : order.cancelled
                              ? "ملغي"
                              : "قيد المعالجة"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          {order.totalAmount}JOD
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {!order.complete && !order.cancelled && (
                              <>
                                <button
                                  onClick={() =>
                                    handleMarkAsDelivered(order._id)
                                  }
                                  className="inline-flex items-center px-4 py-2 bg-primary text-custmblue text-sm font-medium rounded-lg  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
                                >
                                  تم التوصيل
                                </button>
                                <button
                                  onClick={() => handleCancelOrder(order._id)}
                                  className="inline-flex items-center px-4 py-2  text-red-600 text-sm font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
                                >
                                  إلغاء
                                </button>
                              </>
                            )}
                            {order.complete && (
                              <span className="text-custmblue font-medium">
                                تم التوصيل
                              </span>
                            )}
                            {order.cancelled && (
                              <span className="text-red-600 font-medium">
                                تم الإلغاء
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrdersPage;
