import { useNavigate, useLocation } from "react-router-dom";
import { Home, User } from "lucide-react";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-20">
      <div className="flex items-center justify-around h-16">
        <button
          onClick={() => navigate("/home")}
          className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${
            isActive("/home") ? "text-primary" : "text-caption"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs">首页</span>
        </button>

        <button
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${
            isActive("/profile") ? "text-primary" : "text-caption"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs">我的</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
