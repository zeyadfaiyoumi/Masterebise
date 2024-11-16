import Butoon from "../componants/Butoon"; // تأكد من أن المسار واسم الملف صحيحين
import NEWlogo from "../assets/NEWlogo.png";
import { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    // تحقق من صحة البريد الإلكتروني
    if (!validateEmail(email)) {
      setEmailError("يرجى إدخال بريد إلكتروني صحيح.");
      return;
    } else {
      setEmailError("");
    }

    // تحقق من صحة كلمة المرور
    if (!validatePassword(password)) {
      setPasswordError("يجب أن تكون كلمة المرور على الأقل 8 أحرف.");
      return;
    } else {
      setPasswordError("");
    }

    // تحقق من تطابق كلمات المرور
    if (password !== confirmPassword) {
      setErrorMessage("كلمات المرور غير متطابقة.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/zos/signup",
        {
          name: username,
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      navigate("/"); // التوجيه إلى الصفحة الرئيسية بعد النجاح
    } catch (error) {
      // التحقق من الرسالة القادمة من الخادم وعرضها
      if (error.response && error.response.data.message) {
        // إذا كان هناك رسالة مخصصة من الخادم
        if (error.response.data.message === "Email already registered") {
          setErrorMessage("لديك حساب بالفعل، قم بتسجيل الدخول.");
        } else {
          setErrorMessage(error.response.data.message);
        }
      } else {
        setErrorMessage("فشل إنشاء الحساب. يرجى المحاولة مرة أخرى.");
      }
    }
  };
  const handleGoogleSignupSuccess = async (response) => {
    try {
      const idToken = response.credential;
      const res = await axios.post(
        "http://localhost:5001/api/zos/googleSignup",
        { id_token: idToken },
        { withCredentials: true }
      );

      if (res.data.token) {
        Swal.fire({
          icon: "success",
          title: "تم التسجيل بنجاح",
          text: "تم التسجيل بنجاح باستخدام جوجل!",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Error",
        text:
          error.response?.data?.message ||
          "There was an error during Google signup. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  const handleGoogleSignupError = () => {
    Swal.fire({
      icon: "error",
      title: "Signup Error",
      text: "There was an error during Google signup. Please try again.",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <section className="bg-[url('/src/assets/sign-bg.jpg')] bg-no-repeat bg-cover bg-center dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <Link to="/">
          <img
            src={NEWlogo}
            className="h-36 w-40 transition-transform duration-300 hover:scale-110"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="w-full max-w-md p-4 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700 mb-24 transition-shadow duration-300 hover:shadow-2xl">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-6 text-center">
            إنشاء حساب
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                اسم المستخدم
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
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
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                تأكيد كلمة المرور
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
            </div>
            <button
              type="submit" // غيرنا النوع إلى "submit"
              className="text-white w-full bg-[#0A00C7] hover:text-white border border-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              إنشاء حساب
            </button>
            <p className="text-sm font-normal text-gray-900 dark:text-gray-400 flex justify-center">
              لديك حساب بالفعل؟{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                تسجيل الدخول هنا
              </Link>
            </p>
            <div className="w-full mt-4">
              <GoogleLogin
                onSuccess={handleGoogleSignupSuccess}
                onError={handleGoogleSignupError}
                logo="Google"
                buttonText="Sign up with Google"
                className="w-full bg-[#4285F4] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center"
                icon={<FaGoogle className="mr-2" />}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Signup;
