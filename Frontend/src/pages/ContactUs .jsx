import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaComments, FaPaperPlane } from "react-icons/fa";
import Navbar from "../componants/navbar/Navbar";
import axios from "axios"; // استيراد Axios

const SupportPage = () => {
  // حالة لتخزين بيانات النموذج
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // دالة لمعالجة تغيير الحقول
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // دالة لإرسال البيانات
  const handleSubmit = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    try {
      const response = await axios.post(
        "http://localhost:5001/api/zos/ContactUs",
        formData,
        { withCredentials: true }
      );
      console.log(response.data); // يمكنك إضافة معالجة للنجاح هنا
      alert("تم إرسال الرسالة بنجاح!"); // رسالة تأكيد
      setFormData({ name: "", email: "", message: "" }); // إعادة تعيين النموذج
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال الرسالة:", error);
      alert("حدث خطأ أثناء إرسال الرسالة."); // رسالة خطأ
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary pt-16">
        <div className="bg-primary rounded-lg shadow-lg p-8 max-w-md w-full transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#1a6960]">
            دعم فني
          </h2>
          <p className="text-center text-gray-600 mb-6">
            نحن هنا لمساعدتك! يرجى استخدام النموذج أدناه أو تواصل معنا عبر
            الوسائل التالية.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name" // إضافة اسم الحقل
                value={formData.name}
                placeholder="الاسم الكامل"
                onChange={handleChange} // معالجة تغيير الحقل
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#1a6960] transition duration-200"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email" // إضافة اسم الحقل
                value={formData.email}
                placeholder="البريد الإلكتروني"
                onChange={handleChange} // معالجة تغيير الحقل
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#1a6960] transition duration-200"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message" // إضافة اسم الحقل
                value={formData.message}
                placeholder="تفاصيل المشكلة"
                onChange={handleChange} // معالجة تغيير الحقل
                rows="4"
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#1a6960] transition duration-200"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-custmblue text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-[#1f7b6f] transition duration-200 flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" /> إرسال
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-[#1a6960]">
            تواصل معنا عبر:
          </h3>
          <div className="flex justify-center space-x-10 mt-4">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-[#1a6960] text-2xl" />
              <span className="text-gray-700">0778094476</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#1a6960] text-2xl" />
              <span className="text-gray-700">support@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
