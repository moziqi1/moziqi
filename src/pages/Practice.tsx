const Practice = () => {
  // 模拟实训任务数据
  const practices = [
    {
      id: "1",
      title: "Python语法练习",
      description: "完成基本的Python语法和函数练习",
      course: "Python基础回顾",
      difficulty: "简单",
      completed: false,
    },
    {
      id: "2",
      title: "网页爬取练习",
      description: "使用requests和beautifulsoup爬取网页数据",
      course: "数据采集与处理",
      difficulty: "中等",
      completed: false,
    },
    {
      id: "3",
      title: "销售数据分析",
      description: "分析销售数据并生成报告",
      course: "商务数据分析基础",
      difficulty: "中等",
      completed: false,
    },
    {
      id: "4",
      title: "销售数据可视化",
      description: "使用matplotlib或seaborn创建销售数据图表",
      course: "数据可视化",
      difficulty: "中等",
      completed: false,
    },
    {
      id: "5",
      title: "市场分析报告",
      description: "综合分析市场数据并提供商业建议",
      course: "商业智能分析",
      difficulty: "困难",
      completed: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#1a365d]">实训模块</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {practices.map((practice) => (
          <div key={practice.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#1a365d]">{practice.title}</h3>
                <p className="text-sm text-gray-600 mt-1">所属课程: {practice.course}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs ${practice.difficulty === '简单' ? 'bg-green-100 text-green-800' : practice.difficulty === '中等' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                {practice.difficulty}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{practice.description}</p>
            <div className="flex justify-between items-center">
              <span className={`text-sm ${practice.completed ? 'text-green-600' : 'text-gray-600'}`}>
                {practice.completed ? '已完成' : '未完成'}
              </span>
              <a href={`/practice/${practice.id}`} className="px-4 py-2 bg-[#4299e1] text-white rounded hover:bg-[#3182ce] transition-colors">
                开始实训
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practice;