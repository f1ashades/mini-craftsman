import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import mentor1 from "@/assets/mentor-1.jpg";

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6 text-body" />
        </button>
        <h1 className="text-lg font-semibold text-title">文章详情</h1>
      </header>

      {/* Content */}
      <article className="p-4">
        <h1 className="text-2xl font-bold text-title mb-4">
          从双非普本到字节跳动，我的互联网逆袭之路
        </h1>

        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
          <img
            src={mentor1}
            alt="张晨"
            className="w-12 h-12 rounded-full object-cover cursor-pointer"
            onClick={() => navigate("/mentor/mentor-1")}
          />
          <div>
            <p className="text-sm font-medium text-body">张晨</p>
            <p className="text-xs text-caption">字节跳动 · 高级工程师</p>
            <p className="text-xs text-caption mt-1">2024年3月15日</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none space-y-4 text-body">
          <p>
            大家好，我是张晨，目前在字节跳动担任高级工程师。今天想和大家分享我从一所双非普通本科院校到互联网大厂的完整经历。
          </p>

          <h2 className="text-xl font-semibold text-title mt-6 mb-3">背景</h2>
          <p>
            我本科就读于一所普通二本院校的计算机专业。在大学期间，我意识到学校的平台和资源相比名校确实有差距，但我相信通过自己的努力可以弥补这个差距。
          </p>

          <h2 className="text-xl font-semibold text-title mt-6 mb-3">准备阶段</h2>
          <p>
            大二开始，我就开始系统性地学习算法和数据结构。每天坚持刷LeetCode，从简单题开始，逐步提升难度。同时，我还参与了几个开源项目，积累实战经验。
          </p>

          <h2 className="text-xl font-semibold text-title mt-6 mb-3">面试经验</h2>
          <p>
            面试字节跳动总共经历了4轮技术面试和1轮HR面试。技术面试主要考察算法、系统设计和项目经验。我的建议是：
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body">
            <li>算法题至少刷300道以上，重点是中等难度</li>
            <li>项目经验要能深入讲解技术细节</li>
            <li>系统设计要有自己的思考</li>
            <li>保持谦虚和学习态度</li>
          </ul>

          <h2 className="text-xl font-semibold text-title mt-6 mb-3">总结</h2>
          <p>
            出身确实重要，但更重要的是你的努力和坚持。希望我的经历能给同样来自普通院校的同学一些信心和参考。
          </p>
        </div>
      </article>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 flex gap-3">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => navigate("/mentor/mentor-1")}
        >
          <FileText className="w-4 h-4 mr-2" />
          生成分析报告
        </Button>
        <Button
          className="flex-1 bg-accent hover:bg-accent/90"
          onClick={() => navigate("/chat/mentor-1")}
        >
          向TA提问
        </Button>
      </div>
    </div>
  );
};

export default ArticleDetail;
