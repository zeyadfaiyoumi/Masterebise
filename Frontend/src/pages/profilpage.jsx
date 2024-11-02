// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   FaCheckCircle,
//   FaMoneyBillWave,
//   FaEdit,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaLock,
//   FaImage, // أيقونة الصورة
// } from "react-icons/fa";
// import Navbar from "../componants/navbar/Navbar";

// const ProfilePage = () => {
//   const [userInfo, setUserInfo] = useState({});
//   const [formData, setFormData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [isPasswordEditing, setIsPasswordEditing] = useState(false);
//   const [isImageEditing, setIsImageEditing] = useState(false); // حالة لتحرير الصورة
//   const [imageUrl, setImageUrl] = useState(""); // حقل لرابط الصورة

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5001/api/zos/profil",
//           { withCredentials: true }
//         );
//         setUserInfo(response.data.Users[0]);
//         setFormData(response.data.Users[0]);
//         setImageUrl(response.data.Users[0].image || ""); // تعيين رابط الصورة
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUserInfo();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSave = async () => {
//     try {
//       // أضف هنا تحديث رابط الصورة إذا تم تعديله
//       await axios.put(
//         "http://localhost:5001/api/zos/updateUserprofil",
//         { ...formData, image: imageUrl }, // تضمين رابط الصورة
//         { withCredentials: true }
//       );
//       setUserInfo({ ...formData, image: imageUrl });
//       setIsEditing(false);
//       setIsPasswordEditing(false);
//       setIsImageEditing(false); // إغلاق تحرير الصورة
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   if (!userInfo) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pt-20">
//         <div className="container mx-auto px-4 py-8">
//           <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
//             <div className="md:flex">
//               <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
//                 <img
//                   src={userInfo.image || "https://via.placeholder.com/150"}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-4"
//                 />
//                 {/* أيقونة تعديل الصورة */}
//                 <div className="flex justify-center mb-4">
//                   <button
//                     onClick={() => setIsImageEditing(!isImageEditing)}
//                     className="text-white hover:text-blue-200"
//                   >
//                     <FaImage className="text-2xl" />
//                   </button>
//                 </div>

//                 {/* حقل إدخال رابط الصورة إذا كان في وضع التحرير */}
//                 {isImageEditing && (
//                   <div className="flex flex-col mb-4">
//                     <input
//                       type="text"
//                       placeholder="رابط الصورة"
//                       onChange={(e) => setImageUrl(e.target.value)}
//                       className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 )}

//                 <h2 className="text-2xl font-bold mb-2 text-center">
//                   {userInfo.name}
//                 </h2>
//                 <p className="text-blue-200 mb-4 text-center">
//                   {userInfo.email}
//                 </p>

//                 <div className="mt-8">
//                   <h3 className="text-lg font-semibold mb-4">لوحة الإنجازات</h3>
//                   <div className="flex items-center justify-between text-blue-200 mb-3">
//                     <span className="flex items-center">
//                       <FaCheckCircle className="ml-2" />
//                       المشاريع المكتملة
//                     </span>
//                     <span>23</span>
//                   </div>
//                   <div className="flex items-center justify-between text-blue-200">
//                     <span className="flex items-center">
//                       <FaMoneyBillWave className="ml-2" />
//                       المبيعات التي تمت
//                     </span>
//                     <span>15,000 $</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="md:w-2/3 p-8">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     معلومات الملف الشخصي
//                   </h3>
//                   <button
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center"
//                     onClick={() => setIsEditing(!isEditing)}
//                   >
//                     <FaEdit className="ml-2" />
//                     {isEditing ? "إلغاء التعديل" : "تعديل المعلومات"}
//                   </button>
//                 </div>

//                 <div className="space-y-6">
//                   {/* باقي حقول البيانات كما هي */}
//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       الاسم
//                     </label>
//                     <div className="relative">
//                       <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="text"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.name || ""}
//                         name="name"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       البريد الإلكتروني
//                     </label>
//                     <div className="relative">
//                       <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="email"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
//                         value={userInfo.email || ""}
//                         name="email"
//                         readOnly
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       رقم الهاتف
//                     </label>
//                     <div className="relative">
//                       <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="text"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.phonNum || ""}
//                         name="phonNum"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       الموقع
//                     </label>
//                     <div className="relative">
//                       <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="text"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.location || ""}
//                         name="location"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <div className="flex justify-between items-center mb-2">
//                       <label className="block text-gray-700 text-sm font-bold">
//                         كلمة المرور
//                       </label>
//                       <button
//                         className="text-blue-500 hover:text-blue-600 text-sm"
//                         onClick={() => setIsPasswordEditing(!isPasswordEditing)}
//                       >
//                         {" "}
//                         {isPasswordEditing ? "إخفاء" : "تعديل"}
//                       </button>
//                     </div>
//                     <div className="relative">
//                       <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="password"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={""}
//                         name="password"
//                         onChange={handleInputChange}
//                         readOnly={!isPasswordEditing}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <button
//                     onClick={handleSave}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
//                   >
//                     حفظ التعديلات
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfilePage;
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserProfile, updateUserProfile } from "../store/profileSlice";
// import {
//   FaCheckCircle,
//   FaMoneyBillWave,
//   FaEdit,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaLock,
//   FaImage,
// } from "react-icons/fa";
// import Navbar from "../componants/navbar/Navbar";

// const ProfilePage = () => {
//   const dispatch = useDispatch();
//   const { userInfo, loading } = useSelector((state) => state.profile);

//   const [formData, setFormData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [isImageEditing, setIsImageEditing] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     dispatch(fetchUserProfile());
//   }, [dispatch]);

//   useEffect(() => {
//     if (userInfo) {
//       setFormData(userInfo);
//       setImageUrl(userInfo.image || "");
//     }
//   }, [userInfo]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     // التأكد من إرسال جميع البيانات بما في ذلك الهاتف وكلمة المرور
//     dispatch(updateUserProfile({ ...formData, image: imageUrl }));
//     setIsEditing(false);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pt-20">
//         <div className="container mx-auto px-4 py-8">
//           <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
//             <div className="md:flex">
//               <div className="md:w-1/3 bg-custmblue p-8 text-white">
//                 <img
//                   src={userInfo?.image || "https://via.placeholder.com/150"}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-4"
//                 />
//                 <div className="flex justify-center mb-4">
//                   <button
//                     onClick={() => setIsImageEditing(!isImageEditing)}
//                     className="text-white hover:text-blue-200"
//                   >
//                     <FaImage className="text-2xl" />
//                   </button>
//                 </div>

//                 {isImageEditing && (
//                   <div className="flex flex-col mb-4">
//                     <input
//                       type="text"
//                       placeholder="رابط الصورة"
//                       onChange={(e) => setImageUrl(e.target.value)}
//                       className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 )}

//                 <h2 className="text-2xl font-bold mb-2 text-center">
//                   {userInfo?.name}
//                 </h2>
//                 <p className="text-blue-200 mb-4 text-center">
//                   {userInfo?.email}
//                 </p>
//               </div>
//               <div className="md:w-2/3 p-4 bg-primary">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     معلومات الملف الشخصي
//                   </h3>
//                   <button
//                     className="bg-custmblue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
//                     onClick={() => setIsEditing(!isEditing)}
//                   >
//                     <FaEdit className="ml-2" />
//                     {isEditing ? "إلغاء التعديل" : "تعديل المعلومات"}
//                   </button>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       الاسم
//                     </label>
//                     <div className="relative">
//                       <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="text"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.name || "لا يتوفر اسم"}
//                         name="name"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       البريد الإلكتروني
//                     </label>
//                     <div className="relative">
//                       <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="email"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
//                         value={userInfo?.email || "لا يتوفر ايميل"}
//                         name="email"
//                         readOnly
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       رقم الهاتف
//                     </label>
//                     <div className="relative">
//                       <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="text"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.phonNum || "لا يتوفر رقم هاتف"}
//                         name="phonNum"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       الموقع
//                     </label>
//                     <div className="relative">
//                       <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="text"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.location || "لا يتوفر موقع "}
//                         name="location"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       كلمة المرور
//                     </label>
//                     <div className="relative">
//                       <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="password"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={""}
//                         name="password"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <button
//                     onClick={handleSave}
//                     className="bg-custmblue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
//                   >
//                     حفظ التعديلات
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfilePage;
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserProfile, updateUserProfile } from "../store/profileSlice";
// import { Link } from "react-router-dom";
// import {
//   FaCheckCircle,
//   FaMoneyBillWave,
//   FaEdit,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaLock,
//   FaImage,
//   FaShoppingBag,
// } from "react-icons/fa";
// import Navbar from "../componants/navbar/Navbar";

// const ProfilePage = () => {
//   const dispatch = useDispatch();
//   const { userInfo, loading } = useSelector((state) => state.profile);

//   const [formData, setFormData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [isImageEditing, setIsImageEditing] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     dispatch(fetchUserProfile());
//   }, [dispatch]);

//   useEffect(() => {
//     if (userInfo) {
//       setFormData(userInfo);
//       setImageUrl(userInfo.image || "");
//     }
//   }, [userInfo]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     dispatch(updateUserProfile({ ...formData, image: imageUrl }));
//     setIsEditing(false);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pt-20">
//         <div className="container mx-auto px-4 py-8">
//           <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
//             <div className="md:flex">
//               <div className="md:w-1/3 bg-custmblue p-8 text-white">
//                 <img
//                   src={userInfo?.image || "https://via.placeholder.com/150"}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-4"
//                 />
//                 <div className="flex justify-center mb-4">
//                   <button
//                     onClick={() => setIsImageEditing(!isImageEditing)}
//                     className="text-white hover:text-blue-200"
//                   >
//                     <FaImage className="text-2xl" />
//                   </button>
//                 </div>

//                 {isImageEditing && (
//                   <div className="flex flex-col mb-4">
//                     <input
//                       type="text"
//                       placeholder="رابط الصورة"
//                       onChange={(e) => setImageUrl(e.target.value)}
//                       className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 )}

//                 <h2 className="text-2xl font-bold mb-2 text-center">
//                   {userInfo?.name}
//                 </h2>
//                 <p className="text-blue-200 mb-4 text-center">
//                   {userInfo?.email}
//                 </p>

//                 {/* New "My Orders" button */}
//                 <Link
//                   to="/my-orders"
//                   className="bg-white text-custmblue font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-100 transition duration-300 ease-in-out flex items-center justify-center mt-4"
//                 >
//                   <FaShoppingBag className="mr-2" />
//                   طلباتي
//                 </Link>
//               </div>
//               <div className="md:w-2/3 p-4 bg-primary">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     معلومات الملف الشخصي
//                   </h3>
//                   <button
//                     className="bg-custmblue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
//                     onClick={() => setIsEditing(!isEditing)}
//                   >
//                     <FaEdit className="ml-2" />
//                     {isEditing ? "إلغاء التعديل" : "تعديل المعلومات"}
//                   </button>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       الاسم
//                     </label>
//                     <div className="relative">
//                       <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="text"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.name || "لا يتوفر اسم"}
//                         name="name"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       البريد الإلكتروني
//                     </label>
//                     <div className="relative">
//                       <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="email"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
//                         value={userInfo?.email || "لا يتوفر ايميل"}
//                         name="email"
//                         readOnly
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       رقم الهاتف
//                     </label>
//                     <div className="relative">
//                       <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="text"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.phonNum || "لا يتوفر رقم هاتف"}
//                         name="phonNum"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       الموقع
//                     </label>
//                     <div className="relative">
//                       <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="text"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={formData.location || "لا يتوفر موقع "}
//                         name="location"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       كلمة المرور
//                     </label>
//                     <div className="relative">
//                       <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                       <input
//                         type="password"
//                         className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         value={""}
//                         name="password"
//                         onChange={handleInputChange}
//                         readOnly={!isEditing}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <button
//                     onClick={handleSave}
//                     className="bg-custmblue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
//                   >
//                     حفظ التعديلات
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfilePage;
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
// ___________________
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, updateUserProfile } from "../store/profileSlice";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaEdit,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaImage,
  FaShoppingBag,
} from "react-icons/fa";
import Navbar from "../componants/navbar/Navbar";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userInfo, loading } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo) {
      setFormData(userInfo);
    }
  }, [userInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSave = () => {
    const updatedFormData = new FormData();

    for (const key in formData) {
      updatedFormData.append(key, formData[key]);
    }

    if (imageFile) {
      updatedFormData.append("image", imageFile);
    }

    dispatch(updateUserProfile(updatedFormData));
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-custmblue p-8 text-white">
                <div className="relative w-32 h-32 mx-auto mb-4 group">
                  <img
                    src={`http://localhost:5001/${userInfo?.image}`}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                  <label
                    htmlFor="profile-image"
                    className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <div className="text-white text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-auto mb-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>تغيير الصورة</span>
                    </div>
                  </label>
                  <input
                    id="profile-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-2 text-center">
                  {userInfo?.name}
                </h2>
                <p className="text-blue-200 mb-4 text-center">
                  {userInfo?.email}
                </p>

                <Link
                  to="/my-orders"
                  className="bg-white text-custmblue font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-100 transition duration-300 ease-in-out flex items-center justify-center mt-4"
                >
                  <FaShoppingBag className="mr-2" />
                  طلباتي
                </Link>
              </div>
              <div className="md:w-2/3 p-4 bg-primary">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    معلومات الملف الشخصي
                  </h3>
                  <button
                    className="bg-custmblue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <FaEdit className="ml-2" />
                    {isEditing ? "إلغاء التعديل" : "تعديل المعلومات"}
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      الاسم
                    </label>
                    <div className="relative">
                      <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.name || "لا يتوفر اسم"}
                        name="name"
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      البريد الإلكتروني
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
                        value={userInfo?.email || "لا يتوفر ايميل"}
                        name="email"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      رقم الهاتف
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.phonNum || "لا يتوفر رقم هاتف"}
                        name="phonNum"
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      الموقع
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.location || "لا يتوفر موقع "}
                        name="location"
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      كلمة المرور
                    </label>
                    <div className="relative">
                      <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={""}
                        name="password"
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>

                  {/* عنصر لتحميل الصورة */}
                  {isEditing && (
                    <div className="flex flex-col">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        تحميل صورة
                      </label>
                    </div>
                  )}
                </div>

                {isEditing && (
                  <div className="mt-4">
                    <button
                      onClick={handleSave}
                      className="bg-custmblue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                      حفظ التعديلات
                      <FaCheckCircle className="ml-2" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
