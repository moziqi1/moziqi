import express, { type Request, type Response, type NextFunction } from 'express';

const router = express.Router();

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

// 模拟提交数据
const submissions: any[] = [];

// 获取实训列表
router.get('/', (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: practices,
  });
});

// 获取实训详情
router.get('/:id', (req: Request, res: Response): void => {
  const { id } = req.params;
  const practice = practices.find((p) => p.id === id);
  
  if (!practice) {
    res.status(404).json({
      success: false,
      error: 'Practice not found',
    });
    return;
  }
  
  res.status(200).json({
    success: true,
    data: practice,
  });
});

// 提交实训答案
router.post('/:id/submit', (req: Request, res: Response): void => {
  const { id } = req.params;
  const { code, user_id } = req.body;
  
  if (!code || !user_id) {
    res.status(400).json({
      success: false,
      error: 'Code and user_id are required',
    });
    return;
  }
  
  // 模拟评分
  const score = 100;
  const passed = true;
  
  const submission = {
    id: Date.now().toString(),
    user_id,
    practice_id: id,
    code,
    score,
    passed,
    created_at: new Date().toISOString(),
  };
  
  submissions.push(submission);
  
  res.status(200).json({
    success: true,
    data: submission,
  });
});

// 获取实训结果
router.get('/:id/result', (req: Request, res: Response): void => {
  const { id } = req.params;
  const { user_id } = req.query;
  
  if (!user_id) {
    res.status(400).json({
      success: false,
      error: 'user_id is required',
    });
    return;
  }
  
  const submission = submissions.find((s) => s.practice_id === id && s.user_id === user_id);
  
  if (!submission) {
    res.status(404).json({
      success: false,
      error: 'Submission not found',
    });
    return;
  }
  
  res.status(200).json({
    success: true,
    data: submission,
  });
});

export default router;