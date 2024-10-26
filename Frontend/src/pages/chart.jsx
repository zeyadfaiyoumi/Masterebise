// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../componants/navbar/Navbar";

// function Chart() {
//   const getCartItems = () => {
//     const items = localStorage.getItem("cart");
//     return items ? JSON.parse(items) : [];
//   };

//   const [cartItems, setCartItems] = useState(getCartItems());

//   const updateSuggestedPrice = (index, value) => {
//     const updatedItems = [...cartItems];
//     updatedItems[index].suggestedPrice = value;
//     setCartItems(updatedItems);
//     localStorage.setItem("cart", JSON.stringify(updatedItems));
//   };

//   const updateQuantity = (index, value) => {
//     const updatedItems = [...cartItems];
//     updatedItems[index].quantity = value;
//     setCartItems(updatedItems);
//     localStorage.setItem("cart", JSON.stringify(updatedItems));
//   };

//   // دالة لحذف عنصر من السلة
//   const removeItem = (index) => {
//     const updatedItems = cartItems.filter((_, i) => i !== index); // حذف العنصر بناءً على الفهرس
//     setCartItems(updatedItems);
//     localStorage.setItem("cart", JSON.stringify(updatedItems)); // تحديث البيانات في localStorage
//   };

//   // حساب المبلغ المراد تحصيله
//   const totalAmount =
//     cartItems.reduce(
//       (total, item) => total + item.suggestedPrice * (item.quantity || 1),
//       0
//     ) + 3;

//   // حساب اجمالي سعر تكلفة المنتجات بعد اضافة تكلفة الشحن
//   const totalCost =
//     cartItems.reduce(
//       (total, item) => total + item.cost * (item.quantity || 1),
//       0
//     ) + 3; // إضافة تكلفة الشحن

//   // حساب الربح المتوقع
//   const expectedProfit = totalAmount - totalCost;

//   return (
//     <>
//       <Navbar />
//       <div className="pt-28 bg-primary">
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
//           <h2 className="text-2xl font-bold mb-6 text-gray-800">
//             سلة المشتريات
//           </h2>
//           <div className="grid grid-cols-6 gap-4 text-center border-b border-gray-300 pb-3 mb-4">
//             <span className="font-medium text-gray-600">الكمية</span>
//             <span className="font-medium text-gray-600">سعر البيع المطلوب</span>
//             <span className="font-medium text-gray-600">سعر التكلفة</span>
//             <span className="font-medium text-gray-600">الصورة</span>
//             <span className="font-medium text-gray-600">الاجمالي</span>
//           </div>

//           {/* عرض العناصر من localStorage */}
//           {cartItems.map((item, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-6 gap-4 items-center bg-white p-4 rounded-md shadow-sm mb-4"
//             >
//               {/* خانة الكمية */}
//               <input
//                 type="number"
//                 defaultValue={item.quantity || 1}
//                 min="1"
//                 onChange={(e) =>
//                   updateQuantity(index, parseInt(e.target.value))
//                 }
//                 className="text-gray-700 text-center border border-gray-300 rounded-md py-2 px-4"
//               />
//               {/* خانة سعر البيع المطلوب */}
//               <input
//                 type="number"
//                 value={item.suggestedPrice}
//                 min={item.cost}
//                 onChange={(e) =>
//                   updateSuggestedPrice(
//                     index,
//                     Math.max(e.target.value, item.cost)
//                   )
//                 }
//                 className="text-gray-700 text-center border border-gray-300 rounded-md py-2 px-4"
//               />
//               {/* خانة سعر التكلفة */}
//               <span className="text-custmblue text-center font-semibold">
//                 {item.cost} JD
//               </span>
//               {/* خانة الصورة */}
//               <div className="flex justify-center">
//                 <img
//                   aria-hidden="true"
//                   alt={item.productName}
//                   src={item.imageURL}
//                   className="w-14 h-14 rounded-full border border-gray-300 shadow-md"
//                 />
//               </div>
//               {/* خانة السعر الاجمالي */}
//               <span className="text-gray-700 text-center font-semibold">
//                 {(item.suggestedPrice * (item.quantity || 1)).toFixed(2)} JD
//               </span>
//               {/* زر الحذف */}
//               <button
//                 className="text-red-600 hover:bg-red-100 p-2 rounded-full"
//                 onClick={() => removeItem(index)}
//               >
//                 <i className="fas fa-trash-alt text-lg"></i>
//               </button>
//             </div>
//           ))}

//           <div className="bg-gray-50 p-6 rounded-lg mt-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                   تفاصيل الشحن
//                 </h2>
//                 <form>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-600 mb-2"
//                       htmlFor="customer-name"
//                     >
//                       الاسم
//                     </label>
//                     <input
//                       className="w-full p-2 border border-gray-300 rounded"
//                       type="text"
//                       id="customer-name"
//                       placeholder="ادخل اسم العميل هنا"
//                     />
//                   </div>
//                   <div className="mb-4"></div>
//                   <div className="mb-4">
//                     <label className="block text-gray-600 mb-2" htmlFor="city">
//                       المدينة
//                     </label>
//                     <input
//                       className="w-full p-2 border border-gray-300 rounded"
//                       type="text"
//                       id="city"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-600 mb-2"
//                       htmlFor="phone-number"
//                     >
//                       رقم الهاتف
//                     </label>
//                     <input
//                       className="w-full p-2 border border-gray-300 rounded"
//                       type="text"
//                       id="phone-number"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-600 mb-2"
//                       htmlFor="store-name"
//                     >
//                       اسم متجرك
//                     </label>
//                     <input
//                       className="w-full p-2 border border-gray-300 rounded"
//                       type="text"
//                       id="store-name"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-600 mb-2"
//                       htmlFor="address"
//                     >
//                       العنوان
//                     </label>
//                     <input
//                       className="w-full p-2 border border-gray-300 rounded"
//                       type="text"
//                       id="address"
//                       placeholder="بالتفصيل (المنطقة،اسم الشارع،معلم مميز،رقم الشقة)"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-600 mb-2" htmlFor="notes">
//                       ملاحظاتك:
//                     </label>
//                     <textarea
//                       className="w-full p-2 border border-gray-300 rounded"
//                       id="notes"
//                       rows="3"
//                     ></textarea>
//                   </div>
//                 </form>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4 pt-5">
//                   ملخص الطلب
//                 </h3>
//                 <div className="mb-4">
//                   <p className="text-gray-600 mb-1">
//                     تكلفة شحن الطلب: <span className="font-bold">3JD</span>
//                   </p>
//                   <p className="text-gray-600 mb-1">
//                     اجمالي سعر تكلفة المنتجات: بعد اضافة تكلفة الشحن{" "}
//                     <span className="font-bold">{totalCost.toFixed(2)} JD</span>
//                   </p>

//                   <p className="text-scand mb-1">
//                     المبلغ المراد تحصيله{" "}
//                     <span className="font-bold">
//                       {totalAmount.toFixed(2)} JD
//                     </span>
//                   </p>

//                   <p className="text-scand">
//                     ارباحك من الطلب:{" "}
//                     <span className="font-bold">
//                       {expectedProfit.toFixed(2)} JD
//                     </span>
//                   </p>
//                 </div>
//                 <div className="p-5 border-t border-gray-300 mt-4">
//                   <p className="text-gray-600 mb-2">
//                     الرجاء لا تنسوا مراجعة جميع التفاصيل قبل تقديم الطلب.
//                   </p>
//                   <Link
//                     to="/payment"
//                     className="w-full inline-block text-center bg-custmblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                   >
//                     دفع
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Chart;
// Chart.js
// ______________
// ______________
// ______________
// ______________
// ______________
// ______________
// ______________
// ______________
// ______________

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../componants/navbar/Navbar";
// import axios from "axios"; // استيراد axios لإرسال الطلب

// function Chart() {
//   const getCartItems = () => {
//     const items = localStorage.getItem("cart");
//     return items ? JSON.parse(items) : [];
//   };

//   const [cartItems, setCartItems] = useState(getCartItems());

//   const updateSuggestedPrice = (index, value) => {
//     const updatedItems = [...cartItems];
//     updatedItems[index].suggestedPrice = value;
//     setCartItems(updatedItems);
//     localStorage.setItem("cart", JSON.stringify(updatedItems));
//   };

//   const updateQuantity = (index, value) => {
//     const updatedItems = [...cartItems];
//     updatedItems[index].quantity = value;
//     setCartItems(updatedItems);
//     localStorage.setItem("cart", JSON.stringify(updatedItems));
//   };

//   const removeItem = (index) => {
//     const updatedItems = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedItems);
//     localStorage.setItem("cart", JSON.stringify(updatedItems));
//   };

//   // تأكد من أن quantity موجودة
//   const totalAmount =
//     cartItems.reduce(
//       (total, item) => total + item.suggestedPrice * (item.quantity || 1),
//       0
//     ) + 3;

//   const totalCost =
//     cartItems.reduce(
//       (total, item) => total + item.cost * (item.quantity || 1),
//       0
//     ) + 3;

//   const expectedProfit = totalAmount - totalCost;

//   const [shippingDetails, setShippingDetails] = useState({
//     customerName: "",
//     city: "",
//     phoneNumber: "",
//     storeName: "",
//     address: "",
//     notes: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingDetails({
//       ...shippingDetails,
//       [name]: value,
//     });
//   };

//   const submitOrder = async () => {
//     const orderDetails = {
//       cartItems: cartItems.map((item) => ({
//         ...item,
//         quantity: item.quantity || 1, // تعيين قيمة افتراضية لـ quantity
//       })),
//       totalAmount,
//       totalCost,
//       expectedProfit,
//       ...shippingDetails,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/zos/Order",
//         orderDetails,
//         { withCredentials: true }
//       );
//       console.log("Order submitted successfully:", response.data);
//     } catch (error) {
//       console.error("Error submitting order:", error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="pt-28 bg-primary">
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
//           <h2 className="text-2xl font-bold mb-6 text-gray-800">
//             سلة المشتريات
//           </h2>
//           <div className="grid grid-cols-6 gap-4 text-center border-b border-gray-300 pb-3 mb-4">
//             <span className="font-medium text-gray-600">الكمية</span>
//             <span className="font-medium text-gray-600">سعر البيع المطلوب</span>
//             <span className="font-medium text-gray-600">سعر التكلفة</span>
//             <span className="font-medium text-gray-600">الصورة</span>
//             <span className="font-medium text-gray-600">الاجمالي</span>
//           </div>

//           {cartItems.map((item, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-6 gap-4 items-center bg-white p-4 rounded-md shadow-sm mb-4"
//             >
//               <input
//                 type="number"
//                 defaultValue={item.quantity || 1}
//                 min="1"
//                 onChange={(e) =>
//                   updateQuantity(index, parseInt(e.target.value))
//                 }
//                 className="text-gray-700 text-center border border-gray-300 rounded-md py-2 px-4"
//               />
//               <input
//                 type="number"
//                 value={item.suggestedPrice}
//                 min={item.cost}
//                 onChange={(e) =>
//                   updateSuggestedPrice(
//                     index,
//                     Math.max(e.target.value, item.cost)
//                   )
//                 }
//                 className="text-gray-700 text-center border border-gray-300 rounded-md py-2 px-4"
//               />
//               <span className="text-custmblue text-center font-semibold">
//                 {item.cost} JD
//               </span>
//               <div className="flex justify-center">
//                 <img
//                   aria-hidden="true"
//                   alt={item.productName}
//                   src={item.imageURL}
//                   className="w-14 h-14 rounded-full border border-gray-300 shadow-md"
//                 />
//               </div>
//               <span className="text-gray-700 text-center font-semibold">
//                 {(item.suggestedPrice * (item.quantity || 1)).toFixed(2)} JD
//               </span>
//               <button
//                 className="text-red-600 hover:bg-red-100 p-2 rounded-full"
//                 onClick={() => removeItem(index)}
//               >
//                 <i className="fas fa-trash-alt text-lg"></i>
//               </button>
//             </div>
//           ))}

//           <div className="bg-gray-50 p-6 rounded-lg mt-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                   تفاصيل الشحن
//                 </h2>
//                 <form>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-600 mb-2"
//                       htmlFor="customer-name"
//                     >
//                       الاسم
//                     </label>
//                     <input
//                       className="w-full p-2 border border-gray-300 rounded"
//                       type="text"
//                       name="customerName"
//                       value={shippingDetails.customerName}
//                       onChange={handleInputChange}
//                       placeholder="ادخل اسم العميل هنا"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-600 mb-2" htmlFor="city">
//                       المدينة
//                     </label>
//                     <input
//                       className="w-full p-2 border border-gray-300 rounded"
//                       type="text"
//                       name="city"
//                       value={shippingDetails.city}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-600 mb-2"
//                       htmlFor="phone-number"
//                     >
//                       رقم الهاتف
//                     </label>
//                     <input
//                       className="w-full p-2 border border-gray-300 rounded"
//                       type="text"
//                       name="phoneNumber"
//                       value={shippingDetails.phoneNumber}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-600 mb-2"
//                       htmlFor="store-name"
//                     >
//                       اسم متجرك
//                     </label>
//                     <input
//                       className="w-full p-2 border border-gray-300 rounded"
//                       type="text"
//                       name="storeName"
//                       value={shippingDetails.storeName}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       className="block text-gray-600 mb-2"
//                       htmlFor="address"
//                     >
//                       العنوان
//                     </label>
//                     <input
//                       className="w-full p-2 border border-gray-300 rounded"
//                       type="text"
//                       name="address"
//                       value={shippingDetails.address}
//                       onChange={handleInputChange}
//                       placeholder="بالتفصيل (المنطقة،اسم الشارع،معلم مميز،رقم الشقة)"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-600 mb-2" htmlFor="notes">
//                       ملاحظاتك:
//                     </label>
//                     <textarea
//                       className="w-full p-2 border border-gray-300 rounded"
//                       name="notes"
//                       value={shippingDetails.notes}
//                       onChange={handleInputChange}
//                       placeholder="هل لديك ملاحظات بخصوص الطلب؟"
//                     ></textarea>
//                   </div>
//                 </form>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4 pt-5">
//                   ملخص الطلب
//                 </h3>
//                 <div className="mb-4">
//                   <p className="text-gray-600 mb-1">
//                     تكلفة شحن الطلب: <span className="font-bold">3JD</span>
//                   </p>
//                   <p className="text-gray-600 mb-1">
//                     اجمالي سعر تكلفة المنتجات: بعد اضافة تكلفة الشحن{" "}
//                     <span className="font-bold">{totalCost.toFixed(2)} JD</span>
//                   </p>
//                   <p className="text-gray-600 mb-1">
//                     اجمالي المبيعات:{" "}
//                     <span className="font-bold">
//                       {totalAmount.toFixed(2)} JD
//                     </span>
//                   </p>
//                   <p className="text-gray-600 mb-1">
//                     الربح المتوقع:{" "}
//                     <span className="font-bold text-green-500">
//                       {expectedProfit.toFixed(2)} JD
//                     </span>
//                   </p>
//                 </div>
//                 <button
//                   className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 w-full"
//                   onClick={submitOrder}
//                 >
//                   تاكيد طلبك
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Chart;
// ___________
// ______________
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../componants/navbar/Navbar";
import axios from "axios"; // استيراد axios لإرسال الطلب
import Swal from "sweetalert2"; // استيراد SweetAlert2

function Chart() {
  const getCartItems = () => {
    const items = localStorage.getItem("cart");
    return items ? JSON.parse(items) : [];
  };

  const [cartItems, setCartItems] = useState(getCartItems());

  const updateSuggestedPrice = (index, value) => {
    const updatedItems = [...cartItems];
    updatedItems[index].suggestedPrice = value;
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const updateQuantity = (index, value) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = value;
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  // تأكد من أن quantity موجودة
  const totalAmount =
    cartItems.reduce(
      (total, item) => total + item.suggestedPrice * (item.quantity || 1),
      0
    ) + 3;

  const totalCost =
    cartItems.reduce(
      (total, item) => total + item.cost * (item.quantity || 1),
      0
    ) + 3;

  const expectedProfit = totalAmount - totalCost;

  const [shippingDetails, setShippingDetails] = useState({
    customerName: "",
    city: "",
    phoneNumber: "",
    storeName: "",
    address: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  const submitOrder = async () => {
    const orderDetails = {
      cartItems: cartItems.map((item) => ({
        ...item,
        quantity: item.quantity || 1, // تعيين قيمة افتراضية لـ quantity
      })),
      totalAmount,
      totalCost,
      expectedProfit,
      ...shippingDetails,
    };

    try {
      const response = await axios.post(
        "http://localhost:5001/api/zos/Order",
        orderDetails,
        { withCredentials: true }
      );
      console.log("Order submitted successfully:", response.data);

      // استخدام SweetAlert2 لإظهار نافذة منبثقة
      Swal.fire({
        title: "تمت عملية الدفع بنجاح",
        text: "شكرًا لك على طلبك!",
        icon: "success",
        confirmButtonText: "موافق",
      });
    } catch (error) {
      console.error("Error submitting order:", error);
      // استخدام SweetAlert2 لإظهار رسالة خطأ
      Swal.fire({
        title: "حدث خطأ",
        text: "يرجى المحاولة مرة أخرى.",
        icon: "error",
        confirmButtonText: "موافق",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-28 bg-primary">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            سلة المشتريات
          </h2>
          <div className="grid grid-cols-6 gap-4 text-center border-b border-gray-300 pb-3 mb-4">
            <span className="font-medium text-gray-600">الكمية</span>
            <span className="font-medium text-gray-600">سعر البيع المطلوب</span>
            <span className="font-medium text-gray-600">سعر التكلفة</span>
            <span className="font-medium text-gray-600">الصورة</span>
            <span className="font-medium text-gray-600">الاجمالي</span>
          </div>

          {cartItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 gap-4 items-center bg-white p-4 rounded-md shadow-sm mb-4"
            >
              <input
                type="number"
                defaultValue={item.quantity || 1}
                min="1"
                onChange={(e) =>
                  updateQuantity(index, parseInt(e.target.value))
                }
                className="text-gray-700 text-center border border-gray-300 rounded-md py-2 px-4"
              />
              <input
                type="number"
                value={item.suggestedPrice}
                min={item.cost}
                onChange={(e) =>
                  updateSuggestedPrice(
                    index,
                    Math.max(e.target.value, item.cost)
                  )
                }
                className="text-gray-700 text-center border border-gray-300 rounded-md py-2 px-4"
              />
              <span className="text-custmblue text-center font-semibold">
                {item.cost} JD
              </span>
              <div className="flex justify-center">
                <img
                  aria-hidden="true"
                  alt={item.productName}
                  src={item.imageURL}
                  className="w-14 h-14 rounded-full border border-gray-300 shadow-md"
                />
              </div>
              <span className="text-gray-700 text-center font-semibold">
                {(item.suggestedPrice * (item.quantity || 1)).toFixed(2)} JD
              </span>
              <button
                className="text-red-600 hover:bg-red-100 p-2 rounded-full"
                onClick={() => removeItem(index)}
              >
                <i className="fas fa-trash-alt text-lg"></i>
              </button>
            </div>
          ))}

          <div className="bg-gray-50 p-6 rounded-lg mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  تفاصيل الشحن
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="customer-name"
                    >
                      الاسم
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      name="customerName"
                      value={shippingDetails.customerName}
                      onChange={handleInputChange}
                      placeholder="ادخل اسم العميل هنا"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2" htmlFor="city">
                      المدينة
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      name="city"
                      value={shippingDetails.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="phone-number"
                    >
                      رقم الهاتف
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      name="phoneNumber"
                      value={shippingDetails.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="store-name"
                    >
                      اسم متجرك
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      name="storeName"
                      value={shippingDetails.storeName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="address"
                    >
                      العنوان
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      name="address"
                      value={shippingDetails.address}
                      onChange={handleInputChange}
                      placeholder="بالتفصيل (المنطقة،اسم الشارع،معلم مميز،رقم الشقة)"
                    />
                  </div>
                </form>
              </div>
              <div className="border border-gray-300 p-2 rounded-md">
                <h1 className="text-2xl font-bold mb-4 text-custmblue pb-5 pt-5 text-center ">
                  ملخص الطلب
                </h1>
                <p className="text-gray-600 mb-1 text-center ">
                  التكلفة الإجمالية:
                  <span className="font-bold">{totalCost.toFixed(2)} JD</span>
                </p>
                <p className="text-gray-600 mb-1 text-center ">
                  المبلغ الكلي:
                  <span className="font-bold">{totalAmount.toFixed(2)} JD</span>
                </p>
                <p className="text-green-500 -600 mb-1 text-center pb-5 ">
                  الربح المتوقع:
                  <span className="font-bold">
                    {expectedProfit.toFixed(2)} JD
                  </span>
                </p>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="notes">
                    ملاحظات
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    name="notes"
                    value={shippingDetails.notes}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button
                  onClick={submitOrder}
                  className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  تأكيد طلبك
                </button>
                <Link to="/">
                  <button className="w-full bg-gray-300 text-gray-700 p-2 mt-3 rounded-lg hover:bg-gray-400 transition duration-200">
                    العودة للتسوق
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
