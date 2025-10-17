import { useNavigate } from "react-router-dom";
import { ChevronRight, MessageSquare, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/BottomNav";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";

const Profile = () => {
  const navigate = useNavigate();

  const unlockedMentors = [
    {
      id: "mentor-1",
      name: "张晨",
      title: "字节跳动 · 高级工程师",
      avatar: mentor1,
    },
    {
      id: "mentor-2",
      name: "王悦",
      title: "麦肯锡 · 咨询顾问",
      avatar: mentor2,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
            👤
          </div>
          <div>
            <h2 className="text-lg font-semibold text-title">用户名</h2>
            <p className="text-sm text-caption">微信用户</p>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* My Mentors */}
        <Card className="p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => navigate("/my-mentors")}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-primary" />
              <div>
                <h3 className="text-base font-medium text-title">我的导师</h3>
                <p className="text-xs text-caption">已解锁 {unlockedMentors.length} 位导师</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-caption" />
          </div>

          {unlockedMentors.length > 0 && (
            <div className="mt-4 space-y-3">
              {unlockedMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="flex items-center gap-3 p-3 bg-background rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors"
                  onClick={() => navigate(`/chat/${mentor.id}`)}
                >
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-body">{mentor.name}</p>
                    <p className="text-xs text-caption">{mentor.title}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-caption" />
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* My Reports */}
        <Card className="p-4">
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-accent" />
              <div>
                <h3 className="text-base font-medium text-title">我的报告</h3>
                <p className="text-xs text-caption">查看生成的职业分析报告</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-caption" />
          </div>
        </Card>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
          <p className="text-xs text-caption text-center">
            💡 升级VIP会员，解锁更多导师和高级功能
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
