// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../../components/Sidebar";

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1); // الصفحة الحالية
//   const [usersPerPage] = useState(10); // عدد المستخدمين في كل صفحة

//   // جلب المستخدمين من الباك إند
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:5001/api/zos/users");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // تغيير حالة التفعيل
//   const toggleActivation = async (userId) => {
//     try {
//       await axios.post("http://localhost:5001/api/zos/activation", {
//         userId: userId, // إرسال الـ userId في جسم الطلب
//       });
//       fetchUsers(); // إعادة جلب المستخدمين بعد التحديث
//     } catch (error) {
//       console.error("Error toggling activation", error);
//     }
//   };

//   // تحديد المستخدمين الذين سيتم عرضهم بناءً على الصفحة الحالية
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   // تغيير الصفحة الحالية
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // حساب العدد الإجمالي للصفحات
//   const totalPages = Math.ceil(users.length / usersPerPage);

//   return (
//     <div className="min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-12">
//       <Sidebar />
//       <div className="max-w-5xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold text-gray-700">
//             لوحة تحكم المدير - إدارة المستخدمين
//           </h2>
//           <span className="text-lg font-medium text-gray-600">
//             عدد المستخدمين: {users.length}
//           </span>
//         </div>
//         <div className="bg-primary shadow-md rounded-lg overflow-hidden">
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr className="bg-custmblue text-gray-700 uppercase text-sm leading-normal">
//                 <th className="py-3 px-6 text-right text-white ">الاسم</th>
//                 <th className="py-3 px-6 text-right text-white ">
//                   البريد الإلكتروني
//                 </th>
//                 <th className="py-3 px-6 text-center text-white ">الحالة</th>
//                 <th className="py-3 px-6 text-center text-white ">الإجراءات</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700 text-sm font-light">
//               {currentUsers.map((user) => (
//                 <tr
//                   key={user._id}
//                   className="border-b border-gray-200 hover:bg-gray-100"
//                 >
//                   <td className="py-3 px-6 text-right whitespace-nowrap">
//                     <span className="font-medium">{user.name}</span>
//                   </td>
//                   <td className="py-3 px-6 text-right">
//                     <span>{user.email}</span>
//                   </td>
//                   <td className="py-3 px-6 text-center">
//                     {user.isActive ? (
//                       <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
//                         مفعل
//                       </span>
//                     ) : (
//                       <span className="bg-red-200 text-black py-1 px-3 rounded-full text-xs">
//                         غير مفعل
//                       </span>
//                     )}
//                   </td>
//                   <td className="py-3 px-6 text-center">
//                     <button
//                       className={`${
//                         user.isActive
//                           ? " text-red-400  font-extrabold "
//                           : "bg-green-600 text-white"
//                       } py-1 px-4 rounded-full text-xs`}
//                       onClick={() => toggleActivation(user._id)}
//                     >
//                       {user.isActive ? "إلغاء التفعيل" : "تفعيل"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* إضافة الباجينيشن بالأرقام */}
//           <div className="flex justify-center mt-6 pb-4">
//             <nav>
//               <ul className="flex space-x-2">
//                 {Array.from({ length: totalPages }, (_, index) => (
//                   <li key={index}>
//                     <button
//                       onClick={() => paginate(index + 1)}
//                       className={`${
//                         currentPage === index + 1
//                           ? "bg-blue-500 text-white"
//                           : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                       } px-4 py-2 rounded-full transition-all duration-300`}
//                     >
//                       {index + 1}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // الصفحة الحالية
  const [usersPerPage] = useState(10); // عدد المستخدمين في كل صفحة

  // جلب المستخدمين من الباك إند
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/zos/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // تغيير حالة التفعيل
  const toggleActivation = async (userId) => {
    try {
      await axios.post("http://localhost:5001/api/zos/activation", {
        userId: userId,
      });
      fetchUsers();
    } catch (error) {
      console.error("Error toggling activation", error);
    }
  };

  // تحديد المستخدمين الذين سيتم عرضهم بناءً على الصفحة الحالية
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // تغيير الصفحة الحالية
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // حساب العدد الإجمالي للصفحات
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-12">
      <Sidebar />
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            لوحة تحكم المدير - إدارة المستخدمين
          </h2>
          <span className="text-lg font-medium text-gray-600">
            عدد المستخدمين: {users.length}
          </span>
        </div>
        <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
          <div className="bg-custmblue text-white py-2 px-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">إدارة المستخدمين</h3>
            <p className="text-sm">
              يمكنك تفعيل أو إلغاء تفعيل المستخدمين من هنا
            </p>
          </div>
          <table className="min-w-full table-auto text-sm sm:text-base lg:text-lg">
            <thead>
              <tr className="bg-custmblue text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-right text-white">الاسم</th>
                <th className="py-3 px-6 text-right text-white">
                  البريد الإلكتروني
                </th>
                <th className="py-3 px-6 text-center text-white">الحالة</th>
                <th className="py-3 px-6 text-center text-white">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {currentUsers.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-right whitespace-nowrap">
                    <span className="font-medium">{user.name}</span>
                  </td>
                  <td className="py-3 px-6 text-right">
                    <span>{user.email}</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    {user.isActive ? (
                      <span className="flex items-center justify-center gap-2 bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                        <i className="fas fa-check-circle"></i> مفعل
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2 bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                        <i className="fas fa-times-circle"></i> غير مفعل
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button
                      className={`flex items-center justify-center gap-2 ${
                        user.isActive
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-green-600 text-white "
                      } py-1 px-4 rounded-full text-xs transition-all duration-300`}
                      onClick={() => toggleActivation(user._id)}
                    >
                      {user.isActive ? (
                        <>
                          <i className="fas fa-ban"></i> إلغاء التفعيل
                        </>
                      ) : (
                        <>
                          <i className="fas fa-check"></i> تفعيل
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-6 pb-4">
            <nav>
              <ul className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`${
                        currentPage === index + 1
                          ? "bg-custmblue text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      } px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
