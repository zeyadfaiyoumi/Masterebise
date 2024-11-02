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
import {
  FiTrendingUp,
  FiActivity,
  FiClipboard,
  FiLayers,
} from "react-icons/fi";

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
          {
            title: "مجموع الطلبات",
            value: stats.appointments,
            color: "bg-custmblue",
          },
          { title: "المستخدمين", value: stats.patients, color: "bg-blue-600" },
          {
            title: "مجموع المنتجات",
            value: stats.doctors,
            color: "bg-green-600",
          },
          {
            title: "الأرباح",
            value: stats.totalBillingAmount.toFixed(2) + " JOD",
            color: "bg-custmblue",
          },
        ]);

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
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Sidebar />
      <div className="w-full max-w-5xl px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">لوحة التحكم</h1>
          <p className="text-gray-600">نظرة عامة على أداء المتجر</p>
        </div>

        {/* إحصائيات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statistics.map((item, index) => (
            <div
              key={index}
              className={`${item.color} rounded-lg shadow-lg transition-transform duration-300 hover:scale-105`}
            >
              <div className="p-6 text-white">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-3xl font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* الرسم البياني */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            إحصائيات الأداء
          </h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#374151" }}
                  axisLine={{ stroke: "#D1D5DB" }}
                />
                <YAxis
                  tick={{ fill: "#374151" }}
                  axisLine={{ stroke: "#D1D5DB" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFF",
                    border: "1px solid #D1D5DB",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Bar dataKey="Profits" fill="#16A34A" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* قسم إضافي للمعلومات الجمالية */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 rounded-lg shadow-lg p-6 flex items-center">
            <FiTrendingUp className="text-blue-600 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                إحصائيات النمو
              </h3>
              <p className="text-gray-600">نتطلع لتطوير اداء المتجر بسرعة عالية</p>
            </div>
          </div>
          <div className="bg-green-100 rounded-lg shadow-lg p-6 flex items-center">
            <FiActivity className="text-green-600 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                أداء الأنشطة
              </h3>
              <p className="text-gray-600">تحليل شامل لنشاط المستخدمين</p>
            </div>
          </div>
          <div className="bg-indigo-100 rounded-lg shadow-lg p-6 flex items-center">
            <FiClipboard className="text-indigo-600 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                تحديثات عامة
              </h3>
              <p className="text-gray-600">مراجعة عامة للمعلومات</p>
            </div>
          </div>
          <div className="bg-purple-100 rounded-lg shadow-lg p-6 flex items-center">
            <FiLayers className="text-purple-600 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                أفكار مستقبلية
              </h3>
              <p className="text-gray-600">التطلع لخطط جديدة وتحديثات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
