import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEnvelope, FaLock } from "react-icons/fa"; // استيراد الأيقونات من react-icons

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/zos/admin/login",
        { email, password },
        { withCredentials: true }
      );
      if (response.data.success) {
        Swal.fire({
          title: "تسجيل الدخول ناجح",
          text: "سيتم توجيهك إلى لوحة التحكم.",
          icon: "success",
          confirmButtonText: "موافق",
        }).then(() => {
          // إعادة التوجيه بعد الضغط على "موافق"
          window.location.href = "/dashboard";
        });
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("حدث خطأ. الرجاء المحاولة مرة أخرى.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <form
        onSubmit={handleSubmit}
        className="bg-primary bg-opacity-80 p-8 rounded-lg shadow-lg w-96 border border-gray-300"
      >
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          تسجيل الدخول للمسؤول
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm mb-2">
            البريد الإلكتروني:
          </label>
          <div className="flex items-center border border-gray-300 rounded-md">
            <FaEnvelope className="ml-2 text-blue-600 text-xl" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-8 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm mb-2">
            كلمة المرور:
          </label>
          <div className="flex items-center border border-gray-300 rounded-md">
            <FaLock className="ml-2 text-blue-600 text-xl" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-8 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200"
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
