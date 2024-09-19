// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEdit } from "react-icons/fa";
// import Navbar from "../componants/navbar/Navbar";

// const ProfilePage = () => {
//   const [UserInfo, setUserInfo] = useState({});
//   const [isEditing, setIsEditing] = useState({
//     name: false,
//     phoneNum: false,
//     location: false,
//     password: false,
//   });

//   // حالات لتخزين القيم المعدلة
//   const [editFields, setEditFields] = useState({
//     name: "",
//     phoneNum: "",
//     location: "",
//     password: "",
//   });

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5001/api/zos/profil",
//           { withCredentials: true }
//         );
//         setUserInfo(response.data.Users[0]);
//         setEditFields({
//           name: response.data.Users[0].name || "",
//           phoneNum: response.data.Users[0].phonNum || "",
//           location: response.data.Users[0].location || "",
//           password: response.data.Users[0].password || "",
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUserInfo();
//   }, []);

//   const handleEditClick = (field) => {
//     setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditFields((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     try {
//       await axios.post(
//         "http://localhost:5001/api/zos/updateProfile",
//         editFields,
//         { withCredentials: true }
//       );
//       setUserInfo((prev) => ({
//         ...prev,
//         ...editFields,
//       }));
//       setIsEditing({
//         name: false,
//         phoneNum: false,
//         location: false,
//         password: false,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   if (!UserInfo) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="bg-primary mt-20">
//         <div className="flex min-h-screen  bg-primary">
//           <div className="flex-1 p-6">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <div className="flex flex-col mb-6">
//                 <img
//                   src={UserInfo.image}
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full border-4 border-[#0A00C7] shadow-md mb-4"
//                 />

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2">
//                     الاسم
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       className={`w-full p-2 border border-gray-300 rounded bg-gray-100 ${
//                         isEditing.name ? "cursor-text" : "cursor-not-allowed"
//                       }`}
//                       value={editFields.name}
//                       onChange={handleInputChange}
//                       readOnly={!isEditing.name}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick("name")}
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
//                     >
//                       <FaEdit />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2">
//                     البريد الإلكتروني
//                   </label>
//                   <input
//                     type="email"
//                     className="w-full p-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
//                     value={UserInfo.email || ""}
//                     readOnly
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2">
//                     رقم الهاتف
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="tel"
//                       name="phoneNum"
//                       className={`w-full p-2 border border-gray-300 rounded bg-gray-100 ${
//                         isEditing.phoneNum
//                           ? "cursor-text"
//                           : "cursor-not-allowed"
//                       }`}
//                       value={editFields.phoneNum}
//                       onChange={handleInputChange}
//                       readOnly={!isEditing.phoneNum}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick("phoneNum")}
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
//                     >
//                       <FaEdit />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2">
//                     الموقع
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="location"
//                       className={`w-full p-2 border border-gray-300 rounded bg-gray-100 ${
//                         isEditing.location
//                           ? "cursor-text"
//                           : "cursor-not-allowed"
//                       }`}
//                       value={editFields.location}
//                       onChange={handleInputChange}
//                       readOnly={!isEditing.location}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick("location")}
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
//                     >
//                       <FaEdit />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <label className="block text-gray-700 text-sm font-bold mb-2">
//                     كلمة المرور
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="password"
//                       name="password"
//                       className={`w-full p-2 border border-gray-300 rounded bg-gray-100 ${
//                         isEditing.password
//                           ? "cursor-text"
//                           : "cursor-not-allowed"
//                       }`}
//                       value={editFields.password || "********"}
//                       onChange={handleInputChange}
//                       readOnly={!isEditing.password}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick("password")}
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
//                     >
//                       <FaEdit />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex justify-center">
//                   <button
//                     type="button"
//                     className="px-4 py-2 bg-[#0A00C7] text-white rounded hover:bg-[#080a1f]"
//                     onClick={handleSave}
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
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaSave, FaTimes, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "../componants/navbar/Navbar";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isEditing, setIsEditing] = useState({
    name: false,
    phoneNum: false,
    location: false,
    password: false,
  });
  const [editFields, setEditFields] = useState({
    name: "",
    phoneNum: "",
    location: "",
    password: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/zos/profil",
          { withCredentials: true }
        );
        setUserInfo(response.data.Users[0]);
        setEditFields({
          name: response.data.Users[0].name || "",
          phoneNum: response.data.Users[0].phonNum || "",
          location: response.data.Users[0].location || "",
          password: response.data.Users[0].password || "",
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleEditClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.post(
        "http://localhost:5001/api/zos/updateProfile",
        editFields,
        { withCredentials: true }
      );
      setUserInfo((prev) => ({
        ...prev,
        ...editFields,
      }));
      setIsEditing({
        name: false,
        phoneNum: false,
        location: false,
        password: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const ProfileField = ({ label, name, value, isPassword, editable = true }) => (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <div className="relative">
        <input
          type={isPassword ? "password" : "text"}
          name={name}
          className={`w-full p-3 pr-12 border ${
            isEditing[name] ? "border-blue-500" : "border-gray-300"
          } rounded-lg bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          value={isEditing[name] ? editFields[name] : (isPassword ? "********" : value)}
          onChange={handleInputChange}
          readOnly={!isEditing[name] || !editable}
        />
        {editable && (
          <button
            onClick={() => handleEditClick(name)}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            {isEditing[name] ? <FaTimes size={20} /> : <FaEdit size={20} />}
          </button>
        )}
      </div>
    </div>
  );

  if (!userInfo) {
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
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
                <div className="text-center">
                  <img
                    src={userInfo.image || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-2">{userInfo.name}</h2>
                  <p className="text-blue-200 mb-4">{userInfo.email}</p>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">لوحة الإنجازات</h3>
                  <div className="flex items-center justify-between text-blue-200 mb-3">
                    <span className="flex items-center">
                      <FaCheckCircle className="mr-2" />
                      المشاريع المكتملة
                    </span>
                    <span>23</span>
                  </div>
                  <div className="flex items-center justify-between text-blue-200">
                    <span className="flex items-center">
                      <FaMoneyBillWave className="mr-2" />
                      المبيعات التي تمت
                    </span>
                    <span>15,000 $</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">معلومات الملف الشخصي</h3>
                <ProfileField label="الاسم" name="name" value={userInfo.name} />
                <ProfileField label="البريد الإلكتروني" name="email" value={userInfo.email} editable={false} />
                <ProfileField label="رقم الهاتف" name="phoneNum" value={userInfo.phonNum} />
                <ProfileField label="الموقع" name="location" value={userInfo.location} />
                <ProfileField label="كلمة المرور" name="password" value={userInfo.password} isPassword />
                
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center"
                  >
                    <FaSave className="mr-2" />
                    حفظ التعديلات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;