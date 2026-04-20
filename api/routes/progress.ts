import express, { type Request, type Response, type NextFunction } from 'express';

const router = express.Router();

// 模拟进度数据
const progress: any[] = [];

// 模拟成就数据
const achievements: any[] = [];

// 模拟课程数据
const courses = [
  { id: "1", title: "Python基础回顾" },
  { id: "2", title: "数据采集与处理" },
  { id: "3", title: "商务数据分析基础" },
  { id: "4", title: "数据可视化" },
  { id: "5", title: "商业智能分析" },
];

// 获取学习进度
router.get('/', (req: Request, res: Response): void => {
  const { user_id } = req.query;
  
  if (!user_id) {
    res.status(400).json({
      success: false,
      error: 'user_id is required',
    });
    return;
  }
  
  const userProgress = progress.filter((p) => p.user_id === user_id);
  
  // 如果用户没有进度数据，初始化所有课程的进度
  if (userProgress.length === 0) {
    const initialProgress = courses.map((course) => ({
      id: Date.now().toString() + Math.random(),
      user_id: user_id as string,
      course_id: course.id,
      completed: false,
      progress: 0,
      last_accessed: new Date().toISOString(),
    }));
    
    progress.push(...initialProgress);
    
    res.status(200).json({
      success: true,
      data: initialProgress,
    });
    return;
  }
  
  res.status(200).json({
    success: true,
    data: userProgress,
  });
});

// 更新学习进度
router.post('/', (req: Request, res: Response): void => {
  const { user_id, course_id, progress: newProgress, completed } = req.body;
  
  if (!user_id || !course_id) {
    res.status(400).json({
      success: false,
      error: 'user_id and course_id are required',
    });
    return;
  }
  
  const existingProgress = progress.find(
    (p) => p.user_id === user_id && p.course_id === course_id
  );
  
  if (existingProgress) {
    // 更新现有进度
    existingProgress.progress = newProgress || existingProgress.progress;
    existingProgress.completed = completed !== undefined ? completed : existingProgress.completed;
    existingProgress.last_accessed = new Date().toISOString();
    
    res.status(200).json({
      success: true,
      data: existingProgress,
    });
  } else {
    // 创建新进度
    const newProgressRecord = {
      id: Date.now().toString(),
      user_id,
      course_id,
      completed: completed || false,
      progress: newProgress || 0,
      last_accessed: new Date().toISOString(),
    };
    
    progress.push(newProgressRecord);
    
    res.status(200).json({
      success: true,
      data: newProgressRecord,
    });
  }
});

// 获取成就列表
router.get('/achievements', (req: Request, res: Response): void => {
  const { user_id } = req.query;
  
  if (!user_id) {
    res.status(400).json({
      success: false,
      error: 'user_id is required',
    });
    return;
  }
  
  const userAchievements = achievements.filter((a) => a.user_id === user_id);
  
  res.status(200).json({
    success: true,
    data: userAchievements,
  });
});

// 解锁成就
router.post('/achievements', (req: Request, res: Response): void => {
  const { user_id, name, description } = req.body;
  
  if (!user_id || !name) {
    res.status(400).json({
      success: false,
      error: 'user_id and name are required',
    });
    return;
  }
  
  // 检查成就是否已解锁
  const existingAchievement = achievements.find(
    (a) => a.user_id === user_id && a.name === name
  );
  
  if (existingAchievement) {
    res.status(200).json({
      success: true,
      data: existingAchievement,
    });
    return;
  }
  
  // 创建新成就
  const newAchievement = {
    id: Date.now().toString(),
    user_id,
    name,
    description: description || '',
    unlocked_at: new Date().toISOString(),
  };
  
  achievements.push(newAchievement);
  
  res.status(200).json({
    success: true,
    data: newAchievement,
  });
});

export default router;