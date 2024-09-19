import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NEWlogo from "../../assets/NEWlogo.png";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { FiLogOut } from "react-icons/fi";
function Navbar() {
  const [bergr, setbergr] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  function Hndelhumberger() {
    setbergr(!bergr);
  }

  function Dropdown() {
    setDropdownOpen(!isDropdownOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Adjust scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check authentication status
    axios
      .get("http://localhost:5001/api/zos/checkAuth", {
        withCredentials: true,
      })
      .then((response) => {
        setIsAuthenticated(response.data.authenticated);
      })
      .catch((error) => {
        setIsAuthenticated(response.data.authenticated);
        console.error("Error checking authentication status", error);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5001/api/zos/logout",
        {},
        { withCredentials: true }
      ); // تأكد من تضمين الكوكيز مع الطلب
      // إعادة توجيه أو تحديث الحالة بعد تسجيل الخروج
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          scrolling
            ? "bg-[#f0f2f9] backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={NEWlogo} className="h-16" alt="Flowbite Logo" />
          </Link>
          <button
            onClick={Hndelhumberger}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={bergr}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${bergr ? "flex" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 dark:bg-black md:dark:bg-gray-900 dark:border-gray-700 justify-center">
              <li>
                <Link
                  to="/Ourstory"
                  className="py-2 px-3 text-custmblack border-b-2 border-transparent hover:border-white transition duration-300 ease-in-out ml-8"
                  aria-current="page"
                >
                  قصتنا
                </Link>
              </li>
              <li>
                <button
                  onClick={Dropdown}
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full py-2 px-3 text-custmblack rounded hover:text-custmblue md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  المتجر{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className={`${
                    isDropdownOpen ? "block absolute" : "hidden"
                  } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <Link
                        to="/Catalog"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        كتالوج المنتجات
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Myproduct"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        منتجاتي
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        طلباتي
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/ProfilePage"
                  className="block py-2 px-3 text-custmblack rounded hover:text-custmblue md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  اعدادات الحساب
                </Link>
              </li>
              <li>
                <Link
                  to="/Profil"
                  className="block py-2 px-3 text-custmblack rounded hover:text-custmblue md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  المحفضة المالية
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                type="button"
                className="text-white bg-red-500 hover:text-white border border-white  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                <FiLogOut style={{ transform: "rotate(180deg)" }} size={15} />{" "}
                {/* عكس الأيقونة */}
              </button>
            ) : (
              <Link
                to="/Signup"
                className="text-white bg-custmblue hover:text-white border border-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                تسجيل دخول
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
