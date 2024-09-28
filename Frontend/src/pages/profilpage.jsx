import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaEdit,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaImage, // أيقونة الصورة
} from "react-icons/fa";
import Navbar from "../componants/navbar/Navbar";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const [isImageEditing, setIsImageEditing] = useState(false); // حالة لتحرير الصورة
  const [imageUrl, setImageUrl] = useState(""); // حقل لرابط الصورة

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/zos/profil",
          { withCredentials: true }
        );
        setUserInfo(response.data.Users[0]);
        setFormData(response.data.Users[0]);
        setImageUrl(response.data.Users[0].image || ""); // تعيين رابط الصورة
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      // أضف هنا تحديث رابط الصورة إذا تم تعديله
      await axios.put(
        "http://localhost:5001/api/zos/updateUserprofil",
        { ...formData, image: imageUrl }, // تضمين رابط الصورة
        { withCredentials: true }
      );
      setUserInfo({ ...formData, image: imageUrl });
      setIsEditing(false);
      setIsPasswordEditing(false);
      setIsImageEditing(false); // إغلاق تحرير الصورة
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

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
                <img
                  src={userInfo.image || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-4"
                />
                {/* أيقونة تعديل الصورة */}
                <div className="flex justify-center mb-4">
                  <button
                    onClick={() => setIsImageEditing(!isImageEditing)}
                    className="text-white hover:text-blue-200"
                  >
                    <FaImage className="text-2xl" />
                  </button>
                </div>

                {/* حقل إدخال رابط الصورة إذا كان في وضع التحرير */}
                {isImageEditing && (
                  <div className="flex flex-col mb-4">
                    <input
                      type="text"
                      placeholder="رابط الصورة"
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                <h2 className="text-2xl font-bold mb-2 text-center">
                  {userInfo.name}
                </h2>
                <p className="text-blue-200 mb-4 text-center">
                  {userInfo.email}
                </p>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">لوحة الإنجازات</h3>
                  <div className="flex items-center justify-between text-blue-200 mb-3">
                    <span className="flex items-center">
                      <FaCheckCircle className="ml-2" />
                      المشاريع المكتملة
                    </span>
                    <span>23</span>
                  </div>
                  <div className="flex items-center justify-between text-blue-200">
                    <span className="flex items-center">
                      <FaMoneyBillWave className="ml-2" />
                      المبيعات التي تمت
                    </span>
                    <span>15,000 $</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    معلومات الملف الشخصي
                  </h3>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <FaEdit className="ml-2" />
                    {isEditing ? "إلغاء التعديل" : "تعديل المعلومات"}
                  </button>
                </div>

                <div className="space-y-6">
                  {/* باقي حقول البيانات كما هي */}
                  <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      الاسم
                    </label>
                    <div className="relative">
                      <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.name || ""}
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
                        value={userInfo.email || ""}
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
                        value={formData.phonNum || ""}
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
                        value={formData.location || ""}
                        name="location"
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-gray-700 text-sm font-bold">
                        كلمة المرور
                      </label>
                      <button
                        className="text-blue-500 hover:text-blue-600 text-sm"
                        onClick={() => setIsPasswordEditing(!isPasswordEditing)}
                      >
                        {" "}
                        {isPasswordEditing ? "إخفاء" : "تعديل"}
                      </button>
                    </div>
                    <div className="relative">
                      <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        className="w-full p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={""}
                        name="password"
                        onChange={handleInputChange}
                        readOnly={!isPasswordEditing}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                  >
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
