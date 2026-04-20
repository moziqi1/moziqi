import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // 模拟课程详情数据
  const course = {
    id: id,
    title: "Python基础回顾",
    description: "本课程旨在帮助学生复习Python核心语法和数据结构，为后续的数据分析课程打下坚实基础。",
    category: "基础",
    level: "初级",
    progress: 0,
    modules: [
      { id: "1", title: "Python语法基础", completed: false },
      { id: "2", title: "数据结构与算法", completed: false },
      { id: "3", title: "函数与模块", completed: false },
      { id: "4", title: "文件操作", completed: false },
      { id: "5", title: "异常处理", completed: false },
    ],
    practices: [
      { id: "1", title: "Python语法练习", difficulty: "简单", completed: false },
      { id: "2", title: "数据结构练习", difficulty: "中等", completed: false },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <a href="/courses" className="text-[#4299e1] hover:underline mr-4">← 返回课程列表</a>
        <h1 className="text-3xl font-bold text-[#1a365d]">{course.title}</h1>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex space-x-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{course.category}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">{course.level}</span>
                </div>
                <p className="text-gray-600">{course.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">学习进度</p>
                <p className="font-semibold text-xl">{course.progress}%</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
              <div className="bg-[#4299e1] h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
            <h2 className="text-xl font-semibold mb-4">课程模块</h2>
            <ul className="space-y-3">
              {course.modules.map((module) => (
                <li key={module.id} className="flex items-center p-3 bg-gray-50 rounded">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${module.completed ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
                    {module.completed ? '✓' : ''}
                  </div>
                  <span>{module.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">实训任务</h2>
            <ul className="space-y-4">
              {course.practices.map((practice) => (
                <li key={practice.id} className="border-b pb-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{practice.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${practice.difficulty === '简单' ? 'bg-green-100 text-green-800' : practice.difficulty === '中等' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {practice.difficulty}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className={`text-sm ${practice.completed ? 'text-green-600' : 'text-gray-600'}`}>
                      {practice.completed ? '已完成' : '未完成'}
                    </span>
                    <a href={`/practice/${practice.id}`} className="text-sm text-[#4299e1] hover:underline">
                      开始实训
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">学习资源</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2 text-[#4299e1]">📚</span>
                <a href="#" className="text-[#4299e1] hover:underline">Python基础教程.pdf</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#4299e1]">📚</span>
                <a href="#" className="text-[#4299e1] hover:underline">数据结构与算法笔记.pdf</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#4299e1]">💻</span>
                <a href="#" className="text-[#4299e1] hover:underline">示例代码.zip</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;