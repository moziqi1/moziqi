const Courses = () => {
  // 模拟课程数据
  const courses = [
    {
      id: "1",
      title: "Python基础回顾",
      description: "复习Python核心语法和数据结构",
      category: "基础",
      level: "初级",
      progress: 0,
    },
    {
      id: "2",
      title: "数据采集与处理",
      description: "学习网页爬取和数据清洗技术",
      category: "数据处理",
      level: "中级",
      progress: 0,
    },
    {
      id: "3",
      title: "商务数据分析基础",
      description: "掌握商务场景下的数据分析方法",
      category: "商务分析",
      level: "中级",
      progress: 0,
    },
    {
      id: "4",
      title: "数据可视化",
      description: "学习使用Python库进行数据可视化",
      category: "数据展示",
      level: "中级",
      progress: 0,
    },
    {
      id: "5",
      title: "商业智能分析",
      description: "应用数据分析解决实际商业问题",
      category: "高级应用",
      level: "高级",
      progress: 0,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#1a365d]">课程中心</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">学习路径</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
          <div className="relative flex justify-between">
            {courses.map((course, index) => (
              <div key={course.id} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#4299e1] text-white flex items-center justify-center font-bold z-10">
                  {index + 1}
                </div>
                <div className="mt-2 text-center w-40">
                  <p className="font-medium">{course.title}</p>
                  <p className="text-sm text-gray-600">{course.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">课程体系</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d]">{course.title}</h3>
                  <div className="flex space-x-2 mt-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{course.category}</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">{course.level}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">进度</p>
                  <p className="font-semibold">{course.progress}%</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-[#4299e1] h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
              <div className="mt-4">
                <a href={`/courses/${course.id}`} className="inline-block px-4 py-2 bg-[#4299e1] text-white rounded hover:bg-[#3182ce] transition-colors">
                  查看详情
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;