import React, { useState } from "react";
import ProductList from "../Page/Doctors/DoctorsDashboard";
import {
  Home,
  Users,
  BriefcaseMedical,
  Contact,
  LogOut,
  Menu,
  CalendarCog,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    navigate("/login");
  };

  const menuItems = [
    { icon: Home, text: "الرئيسية", path: "/Dashboard" },
    { icon: Users, text: "المستخدمين", path: "/Dashboard/users" },

    { icon: CalendarCog, text: "المنتجات", path: "/Dashboard/product" },
    { icon: Contact, text: "الدعم الفني ", path: "/Dashboard/ContactUS" },
  ];

  return (
    <>
      {/* زر القائمة للجوال */}
      <button
        className="md:hidden fixed top-4 left-4 z-20 bg-custmblue text-white p-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        onClick={toggleSidebar}
      >
        <Menu />
      </button>

      {/* الشريط الجانبي */}
      <div
        className={`bg-custmblue text-white h-screen w-64 fixed left-0 top-0 p-4 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-10 rtl shadow-lg`}
      >
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">لوحة التحكم</h2>
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-2 rounded transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "bg-[#0A00C7] text-white shadow-md"
                        : "hover:bg-[#0A00C7] text-gray-200"
                    }`}
                  >
                    <item.icon className="ml-2" /> {item.text}
                  </Link>
                </li>
              ))}
              <button
                onClick={handleLogout}
                className="flex items-center p-2 rounded transition-colors duration-200 hover:bg-red-600 text-gray-200 w-full text-left"
              >
                <LogOut className="ml-2" />
                تسجيل الخروج
              </button>
            </ul>
          </nav>
        </div>

        {/* قسم معلومات المسؤول */}
        <div className="pt-6 border-t border-primary">
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src="https://ui-avatars.com/api/?name=Admin&background=random"
                alt="Admin"
              />
            </div>
            <span className="font-semibold">المسؤول</span>
          </div>
        </div>
      </div>

      {/* محتوى الصفحة - للتأكد من عدم تداخل الشريط الجانبي */}
      <div
        className={`md:ml-64 p-4 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* محتوى الصفحة هنا */}
      </div>
    </>
  );
};

export default Sidebar;
