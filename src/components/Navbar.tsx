import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "首页" },
    { path: "/courses", label: "课程中心" },
    { path: "/practice", label: "实训模块" },
    { path: "/profile", label: "个人中心" },
  ];

  return (
    <nav className="bg-[#1a365d] text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">商务数据分析实训平台</div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded hover:bg-[#2a4a6d] transition-colors"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2 py-1 rounded transition-colors ${location.pathname === item.path ? "bg-[#4299e1] text-white" : "hover:bg-[#2a4a6d]"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* 桌面端登录注册 */}
          <div className="hidden md:flex space-x-4">
            <Link to="/login" className="px-3 py-1 bg-[#ed8936] rounded hover:bg-[#f6ad55] transition-colors">
              登录
            </Link>
            <Link to="/register" className="px-3 py-1 border border-white rounded hover:bg-[#2a4a6d] transition-colors">
              注册
            </Link>
          </div>
        </div>
        
        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded transition-colors ${location.pathname === item.path ? "bg-[#4299e1] text-white" : "hover:bg-[#2a4a6d]"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex space-x-4 mt-4">
              <Link to="/login" className="flex-1 px-3 py-2 bg-[#ed8936] rounded hover:bg-[#f6ad55] transition-colors text-center">
                登录
              </Link>
              <Link to="/register" className="flex-1 px-3 py-2 border border-white rounded hover:bg-[#2a4a6d] transition-colors text-center">
                注册
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;