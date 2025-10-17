import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Briefcase, DollarSign, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";
import mentor3 from "@/assets/mentor-3.jpg";

const mentorAvatars: Record<string, string> = {
  "mentor-1": mentor1,
  "mentor-2": mentor2,
  "mentor-3": mentor3,
};

const mentorData: Record<string, any> = {
  "mentor-1": {
    name: "张晨",
    title: "字节跳动 · 高级工程师",
    tags: ["清华大学", "字节跳动", "P7"],
    bio: "专注于推荐系统和机器学习，5年互联网大厂经验",
    experience: [
      "2019-2024 字节跳动 高级工程师",
      "2017-2019 美团 算法工程师",
      "2013-2017 清华大学 计算机系",
    ],
    income: "年包80万+（Base 60万 + 股票 20万）",
    style: "理性、系统化、注重实战经验分享",
  },
  "mentor-2": {
    name: "王悦",
    title: "麦肯锡 · 咨询顾问",
    tags: ["北京大学", "麦肯锡", "Manager"],
    bio: "专注于战略咨询和企业转型，曾服务多家500强企业",
    experience: [
      "2021-至今 麦肯锡 咨询顾问",
      "2019-2021 BCG 分析师",
      "2015-2019 北京大学 经济学院",
    ],
    income: "年包120万+（含咨询项目奖金）",
    style: "结构化思维、善于启发引导",
  },
  "mentor-3": {
    name: "李思远",
    title: "腾讯 · 产品经理",
    tags: ["复旦大学", "腾讯", "高级产品经理"],
    bio: "负责亿级用户产品，擅长0-1产品孵化",
    experience: [
      "2020-至今 腾讯 高级产品经理",
      "2018-2020 阿里巴巴 产品经理",
      "2014-2018 复旦大学 计算机系",
    ],
    income: "年包70万+（Base 55万 + 奖金 15万）",
    style: "用户导向、数据驱动、富有同理心",
  },
};

const MentorProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("履历");
  const [showPayment, setShowPayment] = useState(false);

  const mentor = mentorData[id || "mentor-1"];
  const avatar = mentorAvatars[id || "mentor-1"];

  const tabs = ["履历", "收入", "风格"];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6 text-body" />
        </button>
        <h1 className="text-lg font-semibold text-title">导师主页</h1>
      </header>

      {/* Mentor Info */}
      <div className="p-4 bg-card border-b border-border">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={avatar}
            alt={mentor.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-title mb-2">{mentor.name}</h2>
            <p className="text-sm text-caption mb-3">{mentor.title}</p>
            <div className="flex flex-wrap gap-2">
              {mentor.tags.map((tag: string) => (
                <Badge key={tag} className="bg-primary/10 text-primary border-0">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-body">{mentor.bio}</p>
      </div>

      {/* Tabs */}
      <div className="bg-card border-b border-border">
        <div className="flex gap-8 px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab ? "text-primary" : "text-caption"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Card className="p-4">
          {activeTab === "履历" && (
            <div className="space-y-3">
              {mentor.experience.map((exp: string, index: number) => (
                <div key={index} className="flex gap-3">
                  <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-body">{exp}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "收入" && (
            <div className="flex gap-3">
              <DollarSign className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-sm text-body">{mentor.income}</p>
            </div>
          )}

          {activeTab === "风格" && (
            <div className="flex gap-3">
              <MessageCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-body">{mentor.style}</p>
            </div>
          )}
        </Card>

        <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
          <p className="text-xs text-caption text-center">
            💡 此数字分身基于真实行业精英的深度访谈创建
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <Button
          className="w-full bg-accent hover:bg-accent/90 h-12 text-base"
          onClick={() => setShowPayment(true)}
        >
          与TA的数字分身对话 (¥9.9)
        </Button>
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50 animate-fade-in">
          <div className="bg-card w-full rounded-t-2xl p-6 animate-slide-in-bottom">
            <h3 className="text-xl font-bold text-title mb-4 text-center">
              解锁对话权限
            </h3>

            <div className="bg-primary/5 rounded-lg p-4 mb-6">
              <p className="text-2xl font-bold text-primary text-center mb-2">¥9.9</p>
              <p className="text-sm text-caption text-center">
                原价 ¥1000+ 真人咨询
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-sm text-body">无限次数对话</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-sm text-body">24小时随时提问</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-sm text-body">个性化职业建议</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowPayment(false)}
              >
                取消
              </Button>
              <Button
                className="flex-1 bg-accent hover:bg-accent/90"
                onClick={() => {
                  setShowPayment(false);
                  navigate(`/chat/${id}`);
                }}
              >
                立即支付
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorProfile;
