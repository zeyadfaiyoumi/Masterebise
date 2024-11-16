import React, { useState } from "react";
import ProductList from "../Page/Productlist/DoctorsDashboard";
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
    navigate("/AdminLogin");
  };

  const menuItems = [
    { icon: Home, text: "الرئيسية", path: "/Dashboard" },
    { icon: Users, text: "المستخدمين", path: "/Dashboard/users" },
    { icon: CalendarCog, text: "المنتجات", path: "/Dashboard/product" },
    { icon: Contact, text: "الدعم الفني ", path: "/Dashboard/ContactUS" },
    { icon: Menu, text: "الطلبات", path: "/Dashboard/AllOrdersPage" },
  ];

  return (
    <>
      {/* زر القائمة للجوال */}
      <button
        className="md:hidden fixed top-4 right-4 z-20 bg-custmblue text-white p-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        onClick={toggleSidebar}
      >
        <Menu />
      </button>

      {/* الشريط الجانبي */}
      <div
        className={`bg-custmblue text-white h-screen w-64 fixed right-0 top-0 p-4 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
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
      </div>

      <div
        className={`md:mr-64 p-4 transition-all duration-300 ${
          isOpen ? "mr-64" : "mr-0"
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
