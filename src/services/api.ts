// API服务
const API_BASE_URL = 'http://localhost:3001/api';

// 通用请求函数
async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

// 用户相关API
export const authApi = {
  // 登录
  login: async (email: string, password: string) => {
    return request<{ success: boolean; data: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  // 注册
  register: async (name: string, email: string, password: string) => {
    return request<{ success: boolean; data: any }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  },

  // 获取用户信息
  getUser: async () => {
    return request<{ success: boolean; data: any }>('/auth/user');
  },
};

// 课程相关API
export const coursesApi = {
  // 获取课程列表
  getCourses: async () => {
    return request<{ success: boolean; data: any[] }>('/courses');
  },

  // 获取课程详情
  getCourseById: async (id: string) => {
    return request<{ success: boolean; data: any }>(`/courses/${id}`);
  },

  // 获取课程相关实训
  getCoursePractices: async (courseId: string) => {
    return request<{ success: boolean; data: any[] }>(`/courses/${courseId}/practice`);
  },
};

// 实训相关API
export const practiceApi = {
  // 获取实训列表
  getPractices: async () => {
    return request<{ success: boolean; data: any[] }>('/practice');
  },

  // 获取实训详情
  getPracticeById: async (id: string) => {
    return request<{ success: boolean; data: any }>(`/practice/${id}`);
  },

  // 提交实训答案
  submitPractice: async (id: string, code: string, userId: string) => {
    return request<{ success: boolean; data: any }>(`/practice/${id}/submit`, {
      method: 'POST',
      body: JSON.stringify({ code, user_id: userId }),
    });
  },

  // 获取实训结果
  getPracticeResult: async (id: string, userId: string) => {
    return request<{ success: boolean; data: any }>(`/practice/${id}/result?user_id=${userId}`);
  },
};

// 进度相关API
export const progressApi = {
  // 获取学习进度
  getProgress: async (userId: string) => {
    return request<{ success: boolean; data: any[] }>(`/progress?user_id=${userId}`);
  },

  // 更新学习进度
  updateProgress: async (userId: string, courseId: string, progress: number, completed: boolean) => {
    return request<{ success: boolean; data: any }>('/progress', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, course_id: courseId, progress, completed }),
    });
  },

  // 获取成就列表
  getAchievements: async (userId: string) => {
    return request<{ success: boolean; data: any[] }>(`/progress/achievements?user_id=${userId}`);
  },

  // 解锁成就
  unlockAchievement: async (userId: string, name: string, description: string) => {
    return request<{ success: boolean; data: any }>('/progress/achievements', {
      method: 'POST',
      body: JSON.stringify({ user_id: userId, name, description }),
    });
  },
};