import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import NEWlogo from "../assets/NEWlogo.png";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/zos/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    }
  };
  const handleGoogleLoginSuccess = async (response) => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/zos/Googellogin",
        { id_token: response.credential },
        { withCredentials: true }
      );

      Swal.fire({
        icon: "success",
        title: "تم تسجيل الدخول بنجاح",
        text: "لقد تم تسجيل دخولك بنجاح باستخدام حساب جوجل!",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Google login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text:
          error.response?.data?.message ||
          "حدث خطأ أثناء تسجيل الدخول باستخدام جوجل. يرجى المحاولة مرة أخرى.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <section className="bg-[url('/src/assets/sign-bg.jpg')] bg-no-repeat bg-cover bg-center dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12">
        <Link to="/">
          <img
            src={NEWlogo}
            className="h-36 w-40 mb-6 transition-transform duration-300 hover:scale-110"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="w-full max-w-md p-6 bg-white bg-opacity-75 backdrop-blur-md rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700 mb-24 transition-shadow duration-300 hover:shadow-2xl">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-6 text-center">
            تسجيل الدخول
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={handleLogin}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@gmail.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 hover:scale-105"
            >
              تسجيل الدخول
            </button>
            {/* عرض رسالة الخطأ أسفل الفورم */}
            {errorMessage && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                {errorMessage}
              </div>
            )}
            <p className="text-sm font-normal text-gray-900 dark:text-gray-400 flex justify-center mt-4">
              ليس لديك حساب بالفعل؟{" "}
              <Link
                to="/Signup"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                إنشاء حساب
              </Link>
            </p>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={(error) => console.error("Google login error:", error)}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-[#4285F4] text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
              <FaGoogle className="text-xl" />
              Sign in with Google
            </GoogleLogin>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
