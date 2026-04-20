import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { useState } from "react";

const PracticeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [code, setCode] = useState(`def calculate_average(numbers):
    """计算列表中所有元素的平均值"""
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

# 测试示例
print(calculate_average([1, 2, 3, 4, 5]))
print(calculate_average([10, 20, 30]))`);
  const [output, setOutput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // 模拟实训任务数据
  const practice = {
    id: id,
    title: "Python语法练习",
    description: "编写一个函数，计算列表中所有元素的平均值",
    course: "Python基础回顾",
    difficulty: "简单",
    content: "请编写一个名为calculate_average的函数，接收一个数字列表作为参数，返回列表中所有元素的平均值。如果列表为空，返回0。",
    testCases: [
      { input: "[1, 2, 3, 4, 5]", expected: 3 },
      { input: "[10, 20, 30]", expected: 20 },
      { input: "[]", expected: 0 },
    ],
  };

  const runCode = () => {
    // 模拟代码运行
    setOutput("运行结果：\n3\n20\n0");
  };

  const submitCode = () => {
    // 模拟提交和评分
    setSubmitted(true);
    setScore(100);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <a href="/practice" className="text-[#4299e1] hover:underline mr-4">← 返回实训列表</a>
        <h1 className="text-3xl font-bold text-[#1a365d]">{practice.title}</h1>
      </div>
      
      <div className="flex flex-col gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600">所属课程: {practice.course}</p>
                <span className={`inline-block px-2 py-1 rounded text-xs mt-2 ${practice.difficulty === '简单' ? 'bg-green-100 text-green-800' : practice.difficulty === '中等' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                  {practice.difficulty}
                </span>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-4">任务描述</h2>
            <p className="text-gray-600 mb-6">{practice.content}</p>
            
            <h2 className="text-xl font-semibold mb-4">测试用例</h2>
            <div className="space-y-2 mb-6">
              {practice.testCases.map((testCase, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded">
                  <p className="font-medium">测试用例 {index + 1}</p>
                  <p className="text-sm text-gray-600">输入: {testCase.input}</p>
                  <p className="text-sm text-gray-600">预期输出: {testCase.expected}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">代码编辑器</h2>
            <div className="h-64 md:h-80 mb-4">
              <Editor
                height="100%"
                language="python"
                theme="vs-light"
                value={code}
                onChange={(value) => value && setCode(value)}
              />
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={runCode}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                运行代码
              </button>
              <button 
                onClick={submitCode}
                className="flex-1 px-4 py-2 bg-[#ed8936] text-white rounded hover:bg-[#f6ad55] transition-colors"
              >
                提交答案
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">运行结果</h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded h-40 overflow-auto font-mono text-sm">
              {output || "请运行代码查看结果..."}
            </div>
            
            {submitted && (
              <div className="mt-4 p-4 bg-green-100 rounded">
                <h3 className="font-semibold text-green-800">提交成功！</h3>
                <p className="mt-2">得分: <span className="font-bold text-xl">{score}</span>/100</p>
                <p className="mt-2 text-green-700">恭喜你完成了这个实训任务！</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeDetail;