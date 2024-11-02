import React, { useState, useEffect } from "react";
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
import axios from "axios";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [statistics, setStatistics] = useState({
    patients: 0,
    doctors: 0,
    appointments: 0,
    totalBillingAmount: 0,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/zos/dashboard/stats"
        );
        const stats = response.data;

        setStatistics([
          { title: "المستخدمين", value: stats.patients, color: "bg-[#1f7b6f]" },
          {
            title: "مجموع المنتجات",
            value: stats.doctors,
            color: "bg-[#232323]",
          },
          {
            title: "مجموع الطلبات",
            value: stats.appointments,
            color: "bg-[#1f7b6f]",
          },
          {
            title: "الأرباح",
            value: stats.totalBillingAmount.toFixed(2) + " JOD",
            color: "bg-[#232323]",
          },
        ]);

        // إعداد بيانات الرسم البياني
        setData([
          { name: "Jan", Profits: 200 },
          { name: "Feb", Profits: 300 },
          { name: "Mar", Profits: 600 },
          { name: "Apr", Profits: 200 },
          { name: "May", Profits: 500 },
          { name: "Jun", Profits: 222 },
          { name: "Jul", Profits: 520 },
          { name: "Aug", Profits: 300 },
          { name: "Sep", Profits: stats.totalBillingAmount },
        ]);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      }
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col md:flex-row bg-primary min-h-screen">
      <Sidebar />
      <div className="flex justify-center items-end  min-h-screen p-8 md:ml-64">
        <div className="w-full max-w-6xl ml-auto md:mr-16">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {statistics.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded shadow text-center ${item.color}`}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 rounded shadow mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
              تحليل المبيعات السنوي
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Profits" fill="#1a4f9e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
