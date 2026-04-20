import { create } from 'zustand';

// 用户状态
interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  } | null;
  isLoggedIn: boolean;
  login: (user: { id: string; name: string; email: string; role: string }) => void;
  logout: () => void;
}

// 课程状态
interface CourseState {
  courses: any[];
  currentCourse: any | null;
  setCourses: (courses: any[]) => void;
  setCurrentCourse: (course: any) => void;
}

// 实训状态
interface PracticeState {
  practices: any[];
  currentPractice: any | null;
  submissions: any[];
  setPractices: (practices: any[]) => void;
  setCurrentPractice: (practice: any) => void;
  addSubmission: (submission: any) => void;
}

// 进度状态
interface ProgressState {
  progress: any[];
  achievements: any[];
  setProgress: (progress: any[]) => void;
  updateProgress: (courseId: string, progress: number, completed: boolean) => void;
  setAchievements: (achievements: any[]) => void;
  addAchievement: (achievement: any) => void;
}

// 创建用户状态管理
export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));

// 创建课程状态管理
export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  currentCourse: null,
  setCourses: (courses) => set({ courses }),
  setCurrentCourse: (course) => set({ currentCourse: course }),
}));

// 创建实训状态管理
export const usePracticeStore = create<PracticeState>((set) => ({
  practices: [],
  currentPractice: null,
  submissions: [],
  setPractices: (practices) => set({ practices }),
  setCurrentPractice: (practice) => set({ currentPractice: practice }),
  addSubmission: (submission) => set((state) => ({
    submissions: [...state.submissions, submission],
  })),
}));

// 创建进度状态管理
export const useProgressStore = create<ProgressState>((set) => ({
  progress: [],
  achievements: [],
  setProgress: (progress) => set({ progress }),
  updateProgress: (courseId, progress, completed) => set((state) => ({
    progress: state.progress.map((item) =>
      item.course_id === courseId
        ? { ...item, progress, completed, last_accessed: new Date().toISOString() }
        : item
    ),
  })),
  setAchievements: (achievements) => set({ achievements }),
  addAchievement: (achievement) => set((state) => ({
    achievements: [...state.achievements, achievement],
  })),
}));