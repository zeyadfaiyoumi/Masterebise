import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Sidebar from "../../components/Sidebar";
import { FaArrowLeft, FaArrowRight, FaReply } from "react-icons/fa";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchContacts();
  }, [currentPage]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/zos/contacts?page=${currentPage}&limit=5`
      );
      setContacts(response.data.contacts);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (err) {
      setError("Error fetching contacts");
      setLoading(false);
    }
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const handleReply = (email) => {
    window.location.href = `mailto:${email}`; // يفتح الإيميل تلقائيًا عند الضغط على "رد"
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center text-xl mt-10">{error}</div>
    );
  }

  return (
    <>
    <div className="flex bg-primary">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="w-3/4 p-6 bg-gray-50 overflow-y-auto ml-16 flex justify-center items-center">
        {/* Table Wrapper */}
        <div className="bg-primary shadow-lg rounded-lg p-6 mb-6 border-t-4 border-[#0A00C7] w-full max-w-5xl">
          <table className="min-w-full table-auto">
            <thead className="bg-[#0A00C7] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  الاسم
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  البريد الإلكتروني
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  الرسالة
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  التاريخ
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  إجراء
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="px-6 py-4 text-md font-medium">
                    {contact.name}
                  </td>
                  <td className="px-6 py-4 text-md font-medium">
                    {contact.email}
                  </td>
                  <td className="px-6 py-4 text-md font-medium break-words">
                    {contact.message}
                  </td>
                  <td className="px-6 py-4 text-md font-medium">
                    {new Date(contact.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-md font-medium">
                    <button
                      onClick={() => handleReply(contact.email)}
                      className="px-4 py-2 bg-[#0A00C7] text-white rounded-full flex items-center gap-2"
                    >
                      <FaReply className="text-white" size={16} />{" "}
                      {/* الإيقونة باللون الأزرق الثابت */}
                      <span className="text-white">رد</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        
      </div>
    </div>
    {/* <div className="flex justify-center w-full mt-8">
          <ReactPaginate
            pageCount={totalPages}
            onPageChange={handlePageChange}
            containerClassName="flex space-x-4 items-center"
            pageClassName="px-6 py-2 rounded-lg border bg-[#0A00C7] text-white"
            activeClassName="bg-[#1a6960] font-semibold"
            disabledClassName="text-gray-400 cursor-not-allowed"
            previousLabel={<FaArrowLeft size={20} />}
            nextLabel={<FaArrowRight size={20} />}
            previousClassName="px-4 py-2 rounded-lg bg-[#0A00C7] text-white"
            nextClassName="px-4 py-2 rounded-lg bg-[#0A00C7] text-white"
          />
        </div> */}
        </>
  );
};

export default ContactList;
