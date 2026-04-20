import express, { type Request, type Response, type NextFunction } from 'express';

const router = express.Router();

// 模拟课程数据
const courses = [
  {
    id: "1",
    title: "Python基础回顾",
    description: "复习Python核心语法和数据结构",
    category: "基础",
    level: "初级",
    order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "数据采集与处理",
    description: "学习网页爬取和数据清洗技术",
    category: "数据处理",
    level: "中级",
    order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "商务数据分析基础",
    description: "掌握商务场景下的数据分析方法",
    category: "商务分析",
    level: "中级",
    order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "数据可视化",
    description: "学习使用Python库进行数据可视化",
    category: "数据展示",
    level: "中级",
    order: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    title: "商业智能分析",
    description: "应用数据分析解决实际商业问题",
    category: "高级应用",
    level: "高级",
    order: 5,
    created_at: new Date().toISOString(),
  },
];

// 模拟实训数据
const practices = [
  {
    id: "1",
    course_id: "1",
    title: "Python语法练习",
    description: "完成基本的Python语法和函数练习",
    difficulty: "简单",
    content: "编写一个函数，计算列表中所有元素的平均值",
    test_cases: JSON.stringify({
      test_cases: [
        { input: "[1, 2, 3, 4, 5]", expected: 3 },
        { input: "[10, 20, 30]", expected: 20 },
        { input: "[]", expected: 0 },
      ],
    }),
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    course_id: "2",
    title: "网页爬取练习",
    description: "使用requests和beautifulsoup爬取网页数据",
    difficulty: "中等",
    content: "爬取一个电商网站的商品信息并存储为CSV文件",
    test_cases: JSON.stringify({
      test_cases: [
        { input: "https://example.com/products", expected: "成功爬取至少10个商品" },
      ],
    }),
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    course_id: "3",
    title: "销售数据分析",
    description: "分析销售数据并生成报告",
    difficulty: "中等",
    content: "分析销售数据，计算月度销售额和增长率",
    test_cases: JSON.stringify({
      test_cases: [
        { input: "sales_data.csv", expected: "正确计算月度销售额和增长率" },
      ],
    }),
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    course_id: "4",
    title: "销售数据可视化",
    description: "使用matplotlib或seaborn创建销售数据图表",
    difficulty: "中等",
    content: "创建销售趋势图和地区分布图",
    test_cases: JSON.stringify({
      test_cases: [
        { input: "sales_data.csv", expected: "生成至少2个不同类型的图表" },
      ],
    }),
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    course_id: "5",
    title: "市场分析报告",
    description: "综合分析市场数据并提供商业建议",
    difficulty: "困难",
    content: "分析市场数据，识别趋势并提供商业建议",
    test_cases: JSON.stringify({
      test_cases: [
        { input: "market_data.csv", expected: "提供至少3条有价值的商业建议" },
      ],
    }),
    created_at: new Date().toISOString(),
  },
];

// 获取课程列表
router.get('/', (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: courses,
  });
});

// 获取课程详情
router.get('/:id', (req: Request, res: Response): void => {
  const { id } = req.params;
  const course = courses.find((c) => c.id === id);
  
  if (!course) {
    res.status(404).json({
      success: false,
      error: 'Course not found',
    });
    return;
  }
  
  res.status(200).json({
    success: true,
    data: course,
  });
});

// 获取课程相关实训
router.get('/:id/practice', (req: Request, res: Response): void => {
  const { id } = req.params;
  const coursePractices = practices.filter((p) => p.course_id === id);
  
  res.status(200).json({
    success: true,
    data: coursePractices,
  });
});

export default router;