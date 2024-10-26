import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false); // محاكاة للتحميل

  // بيانات محلية
  const patients = 120; // عدد المرضى بشكل ثابت
  const doctors = 25; // عدد الأطباء بشكل ثابت
  const appointments = 75; // عدد المواعيد بشكل ثابت
  const totalBillingAmount = 2500; // المبلغ الإجمالي ثابت

  const statistics = [
    {
      title: "Total Users",
      value: patients,
      color: "bg-[#1f7b6f]",
    },
    {
      title: "Total Doctors",
      value: doctors,
      color: "bg-[#232323]",
    },
    {
      title: "Appointments",
      value: appointments,
      color: "bg-[#1f7b6f]",
    },
    {
      title: "Profits",
      value: totalBillingAmount.toFixed(2) + " JOD",
      color: "bg-[#232323]",
    },
  ];

  const data = [
    { name: "Jan", Profits: 200 },
    { name: "Feb", Profits: 300 },
    { name: "Mar", Profits: 600 },
    { name: "Apr", Profits: 200 },
    { name: "May", Profits: 500 },
    { name: "Jun", Profits: 222 },
    { name: "Jul", Profits: 520 },
    { name: "Aug", Profits: 300 },
    { name: "Sep", Profits: totalBillingAmount.toFixed(2) },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col md:flex-row bg-primary min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 md:ml-64">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statistics.map((item, index) => (
            <div
              key={index}
              className={` bg-custmblue text-white p-4 rounded shadow`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Sales Analysis
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Profits" fill="#1f7b6f" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
