// import React, { useState, useEffect } from "react";
// import { FaSearch, FaFilter } from "react-icons/fa";
// import Navbar from "../componants/navbar/Navbar";
// import axios from "axios";

// const MyOrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState("all");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5001/api/zos/getUserOrders",
//           { withCredentials: true }
//         );
//         setOrders(response.data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     setFilterStatus(e.target.value);
//   };

//   const handleCancelOrder = (orderId) => {
//     console.log(`Cancelling order ${orderId}`);
//   };

//   const filteredOrders = orders.filter((order) => {
//     return (
//       (filterStatus === "all" ||
//         (filterStatus === "processing" && !order.isCompleted) ||
//         (filterStatus === "delivered" && order.isCompleted)) &&
//       order._id.toString().includes(searchTerm)
//     );
//   });

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pt-20">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-8">طلباتي</h1>

//           <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//             <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//               <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
//                 <input
//                   type="text"
//                   placeholder="البحث عن طلب برقم الطلب"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={searchTerm}
//                   onChange={handleSearch}
//                 />
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               </div>

//               <div className="w-full md:w-1/3">
//                 <select
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={filterStatus}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="all">جميع الطلبات</option>
//                   <option value="processing">قيد المعالجة</option>
//                   <option value="delivered">تم التوصيل</option>
//                 </select>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full table-auto text-gray-700">
//                 <thead>
//                   <tr className="bg-gray-200">
//                     <th className="px-4 py-2 text-right font-semibold">
//                       اسم المنتج
//                     </th>
//                     <th className="px-4 py-2 text-right font-semibold">
//                       اسم العميل
//                     </th>
//                     <th className="px-4 py-2 text-right font-semibold">
//                       التاريخ
//                     </th>
//                     <th className="px-4 py-2 text-right font-semibold">
//                       الحالة
//                     </th>
//                     <th className="px-4 py-2 text-right font-semibold">
//                       المجموع
//                     </th>
//                     <th className="px-4 py-2 text-right font-semibold">
//                       الإجراءات
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredOrders.map((order) => (
//                     <tr key={order._id} className="border-b hover:bg-gray-50">
//                       <td className="px-4 py-2">
//                         {order.cartItems.map((item) => (
//                           <div key={item._id} className="text-sm text-gray-800">
//                             {item.productName}
//                           </div>
//                         ))}
//                       </td>
//                       <td className="px-4 py-2">{order.customerName}</td>
//                       <td className="px-4 py-2">
//                         {new Date(order.createdAt).toLocaleDateString()}
//                       </td>
//                       <td className="px-4 py-2">
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs ${
//                             order.isCompleted
//                               ? "bg-green-200 text-green-800"
//                               : "bg-yellow-200 text-yellow-800"
//                           }`}
//                         >
//                           {order.isCompleted ? "تم التوصيل" : "قيد المعالجة"}
//                         </span>
//                       </td>
//                       <td className="px-4 py-2">${order.totalAmount}</td>
//                       <td className="px-4 py-2">
//                         {!order.isCompleted && (
//                           <button
//                             onClick={() => handleCancelOrder(order._id)}
//                             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
//                           >
//                             إلغاء الطلب
//                           </button>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyOrdersPage;
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
// import React, { useState, useEffect } from "react";
// import { FaSearch, FaFilter, FaBox } from "react-icons/fa";
// import Navbar from "../componants/navbar/Navbar";
// import axios from "axios";

// const MyOrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState("all");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5001/api/zos/getUserOrders",
//           { withCredentials: true }
//         );
//         setOrders(response.data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     setFilterStatus(e.target.value);
//   };

//   const handleCancelOrder = (orderId) => {
//     console.log(`Cancelling order ${orderId}`);
//   };

//   const filteredOrders = orders.filter((order) => {
//     return (
//       (filterStatus === "all" ||
//         (filterStatus === "processing" && order.cartItems.length > 0) ||
//         (filterStatus === "delivered" && order.cartItems.length === 0)) &&
//       order._id.toString().includes(searchTerm)
//     );
//   });

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pt-20">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
//             طلباتي
//           </h1>

//           <div className="bg-white shadow-2xl rounded-lg p-6 mb-8">
//             <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
//               <div className="relative w-full md:w-1/3">
//                 <input
//                   type="text"
//                   placeholder="البحث عن طلب برقم الطلب"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                   value={searchTerm}
//                   onChange={handleSearch}
//                 />
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               </div>

//               <div className="w-full md:w-1/3">
//                 <select
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                   value={filterStatus}
//                   onChange={handleFilterChange}
//                 >
//                   <option value="all">جميع الطلبات</option>
//                   <option value="processing">قيد المعالجة</option>
//                   <option value="delivered">تم التوصيل</option>
//                 </select>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full table-auto text-gray-700">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-blue-100 to-indigo-100">
//                     <th className="px-4 py-3 text-right font-semibold">
//                       المنتجات
//                     </th>
//                     <th className="px-4 py-3 text-right font-semibold">
//                       اسم العميل
//                     </th>
//                     <th className="px-4 py-3 text-right font-semibold">
//                       التاريخ
//                     </th>
//                     <th className="px-4 py-3 text-right font-semibold">
//                       الحالة
//                     </th>
//                     <th className="px-4 py-3 text-right font-semibold">
//                       المجموع
//                     </th>
//                     <th className="px-4 py-3 text-right font-semibold">
//                       الإجراءات
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredOrders.map((order) => (
//                     <tr
//                       key={order._id}
//                       className="border-b hover:bg-gray-50 transition duration-300"
//                     >
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <FaBox className="text-blue-500 mr-2" />
//                           <div>
//                             {order.cartItems.map((item, index) => (
//                               <div
//                                 key={item.productId}
//                                 className="text-sm text-gray-800"
//                               >
//                                 {item.productName}
//                                 {index < order.cartItems.length - 1 && (
//                                   <span className="text-gray-400"> | </span>
//                                 )}
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">{order.customerName}</td>
//                       <td className="px-4 py-3">
//                         {new Date(order.createdAt).toLocaleDateString()}
//                       </td>
//                       <td className="px-4 py-3">
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs ${
//                             order.cartItems.length === 0
//                               ? "bg-green-200 text-green-800"
//                               : "bg-yellow-200 text-yellow-800"
//                           }`}
//                         >
//                           {order.cancelled ? "تم الغاء" : "قيد المعالجة"}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3 font-semibold">
//                         {order.totalAmount}
//                       </td>
//                       {!order.cancelled ? (
//                         <td className="px-4 py-3">
//                           {order.cartItems.length > 0 && (
//                             <button
//                               onClick={() => handleCancelOrder(order._id)}
//                               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
//                             >
//                               إلغاء الطلب
//                             </button>
//                           )}
//                         </td>
//                       ) : (
//                         <></>
//                       )}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyOrdersPage;
// _________________________
// _________________________
// _________________________
// _________________________
// _________________________
import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaBox } from "react-icons/fa";
import Navbar from "../componants/navbar/Navbar";
import axios from "axios";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/zos/getUserOrders",
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
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // تعديل دالة إلغاء الطلب
  const handleCancelOrder = async (orderId) => {
    try {
      // إرسال طلب POST مع معرّف الطلب عبر الرابط
      const response = await axios.post(
        `http://localhost:5001/api/zos/cancelOrder/${orderId}`,
        {}, // لا نحتاج إلى بيانات إضافية في الـ body
        { withCredentials: true }
      );

      console.log("Order cancelled successfully", response.data);

      // تحديث حالة الطلب في الواجهة الأمامية
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, cancelled: true } : order
        )
      );
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  };

  const filteredOrders = orders.filter((order) => {
    return (
      (filterStatus === "all" ||
        (filterStatus === "processing" && order.cartItems.length > 0) ||
        (filterStatus === "delivered" && order.cartItems.length === 0)) &&
      order._id.toString().includes(searchTerm)
    );
  });

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            طلباتي
          </h1>

          <div className="bg-white shadow-2xl rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="البحث عن طلب برقم الطلب"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="w-full md:w-1/3">
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  value={filterStatus}
                  onChange={handleFilterChange}
                >
                  <option value="all">جميع الطلبات</option>
                  <option value="processing">قيد المعالجة</option>
                  <option value="delivered">تم التوصيل</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full table-auto text-gray-700">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-100 to-indigo-100">
                    <th className="px-4 py-3 text-right font-semibold">
                      المنتجات
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      اسم العميل
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      التاريخ
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      الحالة
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      المجموع
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      الإجراءات
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr
                      key={order._id}
                      className="border-b hover:bg-gray-50 transition duration-300"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <FaBox className="text-blue-500 mr-2" />
                          <div>
                            {order.cartItems.map((item, index) => (
                              <div
                                key={item.productId}
                                className="text-sm text-gray-800"
                              >
                                {item.productName}
                                {index < order.cartItems.length - 1 && (
                                  <span className="text-gray-400"> | </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">{order.customerName}</td>
                      <td className="px-4 py-3">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            order.cancelled
                              ? "bg-green-200 text-green-800"
                              : "bg-yellow-200 text-yellow-800"
                          }`}
                        >
                          {order.cancelled ? "تم الغاء" : "قيد المعالجة"}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold">
                        {order.totalAmount}
                      </td>
                      {!order.cancelled ? (
                        <td className="px-4 py-3">
                          {!order.cancelled ? (
                            <button
                              onClick={() => handleCancelOrder(order._id)}
                              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
                            >
                              إلغاء الطلب
                            </button>
                          ) : (
                            <span className="text-green-500">تم الإلغاء</span>
                          )}
                        </td>
                      ) : (
                        <></>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrdersPage;
