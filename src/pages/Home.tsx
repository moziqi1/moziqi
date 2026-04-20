import { Link } from "react-router-dom";

export default function Home() {
  // 模拟学习统计数据
  const stats = {
    totalCourses: 5,
    completedCourses: 0,
    totalPractices: 5,
    completedPractices: 0,
    totalHours: 0,
  };

  // 模拟最近实训数据
  const recentPractices = [
    { id: "1", title: "Python语法练习", course: "Python基础回顾", status: "未开始", progress: 0 },
    { id: "2", title: "网页爬取练习", course: "数据采集与处理", status: "未开始", progress: 0 },
  ];

  // 模拟推荐课程数据
  const recommendedCourses = [
    { id: "1", title: "Python基础回顾", description: "复习Python核心语法和数据结构", level: "初级" },
    { id: "2", title: "数据采集与处理", description: "学习网页爬取和数据清洗技术", level: "中级" },
  ];

  // 模拟成就数据
  const achievements = [
    { id: "1", name: "初学者", unlocked: false },
    { id: "2", name: "Python大师", unlocked: false },
    { id: "3", name: "数据分析师", unlocked: false },
    { id: "4", name: "可视化专家", unlocked: false },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#1a365d]">学习概览</h1>
      
      {/* 学习统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-sm text-gray-600">总课程数</p>
          <p className="text-2xl font-bold text-[#4299e1]">{stats.totalCourses}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-sm text-gray-600">已完成课程</p>
          <p className="text-2xl font-bold text-green-600">{stats.completedCourses}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-sm text-gray-600">总实训数</p>
          <p className="text-2xl font-bold text-yellow-600">{stats.totalPractices}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-sm text-gray-600">学习时长</p>
          <p className="text-2xl font-bold text-red-600">{stats.totalHours} 小时</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 最近实训 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">最近实训</h2>
          <div className="space-y-4">
            {recentPractices.map((practice) => (
              <div key={practice.id} className="border-b pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{practice.title}</h3>
                    <p className="text-sm text-gray-600">{practice.course}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${practice.status === '已完成' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {practice.status}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#4299e1] h-2 rounded-full" style={{ width: `${practice.progress}%` }}></div>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <Link to={`/practice/${practice.id}`} className="text-sm text-[#4299e1] hover:underline">
                    继续学习
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link to="/practice" className="text-[#4299e1] hover:underline">
              查看全部实训 →
            </Link>
          </div>
        </div>
        
        {/* 推荐课程 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">推荐课程</h2>
          <div className="space-y-4">
            {recommendedCourses.map((course) => (
              <div key={course.id} className="flex items-center p-3 bg-gray-50 rounded">
                <div className="w-12 h-12 rounded-full bg-[#4299e1] text-white flex items-center justify-center font-bold mr-4">
                  {course.id}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.description}</p>
                  <div className="mt-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{course.level}</span>
                  </div>
                </div>
                <Link to={`/courses/${course.id}`} className="text-[#4299e1] hover:underline">
                  查看
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link to="/courses" className="text-[#4299e1] hover:underline">
              查看全部课程 →
            </Link>
          </div>
        </div>
      </div>
      
      {/* 成就展示 */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">成就系统</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`p-4 rounded text-center ${achievement.unlocked ? 'bg-green-50' : 'bg-gray-50'}`}>
              <div className={`w-16 h-16 rounded-full mx-auto mb-2 ${achievement.unlocked ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
                {achievement.unlocked ? '✓' : '?'}
              </div>
              <p className={`font-medium ${achievement.unlocked ? 'text-green-800' : 'text-gray-600'}`}>{achievement.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right">
          <Link to="/profile" className="text-[#4299e1] hover:underline">
            查看成就详情 →
          </Link>
        </div>
      </div>
    </div>
  );
}