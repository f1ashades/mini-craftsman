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
        {/* My Info */}
        <Card className="p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => navigate("/my-mentors")}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-primary" />
              <div>
                <h3 className="text-base font-medium text-title">我的信息</h3>
                <p className="text-xs text-caption">完善个人信息</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-caption" />
          </div>
        </Card>

        {/* Redeem Code */}
        <Card className="p-4">
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-accent" />
              <div>
                <h3 className="text-base font-medium text-title">兑换码</h3>
                <p className="text-xs text-caption">解锁更多导师</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-caption" />
          </div>
        </Card>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
          <p className="text-xs text-caption text-center">
            💡 一次链接，看见新的未来
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
