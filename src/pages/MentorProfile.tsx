import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, GraduationCap, MapPin, Briefcase, DollarSign, Heart, Star, Users } from "lucide-react";
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
    name: "S姐",
    education: "普通一本",
    major: "行政管理",
    graduatedYears: "12年",
    city: "深圳",
    position: "独角兽公司社群运营总监",
    salary: "年薪90W+期权",
    coreValues: "运营就是「把用户当人看」；数据驱动，感性落地；所有的「野路子」，背后都有可复用的方法论。",
    style: "热情、接地气，能瞬间和用户打成一片。精力极其旺盛，是团队的「主心骨」，口头禅是「我们再复盘一下」。",
    story: "毕业后在一家小创业公司做打杂的「新媒体小编」，每天追热点、写段子、搞抽奖。在用户只有几千人的情况下，她硬是靠着每天陪聊和组织线下活动，把一个QQ群做成了极度活跃的「铁杆粉丝群」。后来她开始总结自己做社群的SOP和方法论，并不断在各个项目中验证。因其出色的用户连接能力和从0到1的搭建经验，被现在这家公司高薪挖来，负责整个用户增长和私域流量体系。",
    consultedCount: 156,
    rating: 4.9,
    tags: ["社群运营", "私域流量", "用户增长"],
  },
  "mentor-2": {
    name: "王悦",
    education: "北京大学",
    major: "经济学",
    graduatedYears: "6年",
    city: "北京",
    position: "麦肯锡咨询顾问",
    salary: "年包120万+（含咨询项目奖金）",
    coreValues: "结构化思维、数据驱动决策、追求卓越。",
    style: "结构化思维、善于启发引导。",
    story: "从分析师做起，参与过多个500强企业的战略转型项目，擅长帮助迷茫的职场人找到清晰的职业发展路径。",
    consultedCount: 203,
    rating: 4.8,
    tags: ["战略咨询", "职业规划", "商业分析"],
  },
  "mentor-3": {
    name: "李思远",
    education: "复旦大学",
    major: "计算机科学",
    graduatedYears: "7年",
    city: "深圳",
    position: "腾讯高级产品经理",
    salary: "年包70万+（Base 55万 + 奖金 15万）",
    coreValues: "用户至上、数据驱动、快速迭代。",
    style: "用户导向、数据驱动、富有同理心。",
    story: "负责过多款亿级用户产品，从0到1孵化过3个成功项目，擅长产品规划和用户体验设计。",
    consultedCount: 187,
    rating: 4.9,
    tags: ["产品设计", "0-1孵化", "用户体验"],
  },
};

const MentorProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showPayment, setShowPayment] = useState(false);

  const mentor = mentorData[id || "mentor-1"];
  const avatar = mentorAvatars[id || "mentor-1"];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6 text-body" />
          </button>
          <h1 className="text-lg font-semibold text-title">导师主页</h1>
        </div>
        <button className="text-caption hover:text-primary transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </header>

      {/* Mentor Header */}
      <div className="p-4 bg-card border-b border-border">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img
              src={avatar}
              alt={mentor.name}
              className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
              <div className="w-2 h-2 bg-card rounded-full"></div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-title mb-1">{mentor.name}</h2>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-medium text-title">{mentor.rating}</span>
              </div>
              <span className="text-caption text-sm">·</span>
              <div className="flex items-center gap-1 text-caption text-sm">
                <Users className="w-4 h-4" />
                <span>已帮助{mentor.consultedCount}人</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {mentor.tags.map((tag: string) => (
                <Badge key={tag} className="bg-primary/10 text-primary border-0 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* 基本信息 */}
        <Card className="p-4 space-y-3">
          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-caption mb-1">学历背景</p>
              <p className="text-sm text-title font-medium">{mentor.education} · {mentor.major}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-caption mb-1">工作</p>
              <p className="text-sm text-title font-medium">{mentor.position}</p>
              <p className="text-xs text-caption mt-1">毕业{mentor.graduatedYears}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-caption mb-1">工作城市</p>
              <p className="text-sm text-title font-medium">{mentor.city}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-caption mb-1">薪资情况</p>
              <p className="text-sm text-title font-medium">{mentor.salary}</p>
            </div>
          </div>
        </Card>

        {/* 代表性经历 */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold text-title mb-2">⭐ 代表性经历</h3>
          <p className="text-sm text-body leading-relaxed">{mentor.story}</p>
        </Card>

        {/* 提示信息 */}
        <div className="mt-2 p-4 bg-secondary/50 rounded-lg">
          <p className="text-xs text-caption text-center">
            💡 此数字分身基于真实行业精英的深度访谈创建
          </p>
        </div>

        {/* 导师寄语 */}
        <Card className="p-4 bg-card/50">
          <p className="text-sm text-body leading-relaxed">
            你好，我是{mentor.name}。为了能将我的经验帮助到更多同学，我通过口袋导师复刻了我的认知体系，创造了独家「数字分身」。TA将7x24小时为你服务，分享我最真实的思考。
          </p>
        </Card>
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
