import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import ArticleCard from "@/components/ArticleCard";
import BottomNav from "@/components/BottomNav";

const categories = ["推荐", "文章", "互联网", "金融", "咨询", "创业"];

const articles = [
  {
    id: "1",
    title: "从双非普本到字节跳动，我的互联网逆袭之路",
    tags: ["#计算机", "#逆袭"],
    author: {
      name: "张晨",
      title: "字节跳动 · 高级工程师",
      avatar: "mentor-1",
    },
    views: 8234,
    excerpt: "分享我从二本院校到互联网大厂的完整经历，以及面试准备的核心要点...",
  },
  {
    id: "2",
    title: "金融行业转行互联网，我用了一年时间",
    tags: ["#转行", "#金融"],
    author: {
      name: "李思远",
      title: "腾讯 · 产品经理",
      avatar: "mentor-3",
    },
    views: 6521,
    excerpt: "从券商分析师到互联网产品经理的转型经验，以及如何快速适应新行业...",
  },
  {
    id: "3",
    title: "投行女生的职业选择：为什么我最终选择了咨询",
    tags: ["#投行", "#咨询"],
    author: {
      name: "王悦",
      title: "麦肯锡 · 咨询顾问",
      avatar: "mentor-2",
    },
    views: 5892,
    excerpt: "对比投行和咨询的工作强度、成长路径和薪资待遇，帮你做出更明智的选择...",
  },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("推荐");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-caption" />
          <Input
            placeholder="搜索前辈、行业、公司..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background border-border"
          />
        </div>
      </header>

      {/* Categories */}
      <div className="sticky top-[57px] z-10 bg-card border-b border-border overflow-x-auto">
        <div className="flex gap-6 px-4 py-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap text-sm font-medium pb-1 transition-colors ${
                selectedCategory === category
                  ? "text-primary border-b-2 border-primary"
                  : "text-caption"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Article Feed */}
      <div className="p-4 space-y-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
