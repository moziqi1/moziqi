import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Profile = () => {
  // 模拟学习进度数据
  const learningData = [
    { name: "Python基础回顾", progress: 0 },
    { name: "数据采集与处理", progress: 0 },
    { name: "商务数据分析基础", progress: 0 },
    { name: "数据可视化", progress: 0 },
    { name: "商业智能分析", progress: 0 },
  ];

  // 模拟成就数据
  const achievements = [
    { id: "1", name: "初学者", description: "完成第一个实训任务", unlocked: false },
    { id: "2", name: "Python大师", description: "完成所有Python相关实训", unlocked: false },
    { id: "3", name: "数据分析师", description: "完成数据分析相关实训", unlocked: false },
    { id: "4", name: "可视化专家", description: "完成数据可视化实训", unlocked: false },
    { id: "5", name: "商业智能专家", description: "完成商业智能分析实训", unlocked: false },
  ];

  // 模拟学习统计数据
  const stats = {
    totalCourses: 5,
    completedCourses: 0,
    totalPractices: 5,
    completedPractices: 0,
    totalHours: 0,
    achievementsUnlocked: 0,
  };

  // 饼图数据
  const pieData = [
    { name: "已完成", value: stats.completedCourses },
    { name: "未完成", value: stats.totalCourses - stats.completedCourses },
  ];

  const COLORS = ["#4299e1", "#e2e8f0"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#1a365d]">个人中心</h1>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">学习进度</h2>
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={learningData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="progress" name="完成进度 (%)" fill="#4299e1" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">学习统计</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm text-gray-600">总课程数</p>
                  <p className="text-2xl font-bold text-[#4299e1]">{stats.totalCourses}</p>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <p className="text-sm text-gray-600">已完成课程</p>
                  <p className="text-2xl font-bold text-green-600">{stats.completedCourses}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded">
                  <p className="text-sm text-gray-600">总实训数</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.totalPractices}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded">
                  <p className="text-sm text-gray-600">已完成实训</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.completedPractices}</p>
                </div>
                <div className="bg-red-50 p-4 rounded">
                  <p className="text-sm text-gray-600">学习时长</p>
                  <p className="text-2xl font-bold text-red-600">{stats.totalHours} 小时</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded">
                  <p className="text-sm text-gray-600">获得成就</p>
                  <p className="text-2xl font-bold text-indigo-600">{stats.achievementsUnlocked}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">个人资料</h2>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#4299e1] text-white flex items-center justify-center text-3xl font-bold mb-4">
                  U
                </div>
                <h3 className="text-lg font-medium">用户名</h3>
                <p className="text-gray-600">user@example.com</p>
                <button className="mt-4 px-4 py-2 bg-[#4299e1] text-white rounded hover:bg-[#3182ce] transition-colors">
                  编辑资料
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">课程完成情况</h2>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">成就系统</h2>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={`flex items-center p-3 rounded ${achievement.unlocked ? 'bg-green-50' : 'bg-gray-50'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${achievement.unlocked ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
                      {achievement.unlocked ? '✓' : '?'}
                    </div>
                    <div>
                      <p className={`font-medium ${achievement.unlocked ? 'text-green-800' : 'text-gray-600'}`}>{achievement.name}</p>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;