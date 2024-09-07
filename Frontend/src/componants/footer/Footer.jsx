import { Link } from "react-router-dom";
import NEWlogo from "../../assets/NEWlogo.png";

function Footer() {
  return (
    <footer className="bg-[#eaedfa] 100 rounded-t-lg  shadow-lg  dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={NEWlogo} className="h-24 w-36" alt="Flowbite Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                حولنا
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                سياسة الخصوصية
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                موقعنا
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                تواصل معنى
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <Link href="https://flowbite.com/" className="hover:underline">
            ZOS-2024 ©
          </Link>
          All Rights
        </span>
      </div>
    </footer>
  );
}

export default Footer;
