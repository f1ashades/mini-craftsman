import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";
import mentor3 from "@/assets/mentor-3.jpg";

const mentorAvatars: Record<string, string> = {
  "mentor-1": mentor1,
  "mentor-2": mentor2,
  "mentor-3": mentor3,
};

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    tags: string[];
    author: {
      name: string;
      title: string;
      avatar: string;
    };
    views: number;
    excerpt: string;
  };
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="p-4 hover:shadow-elevated transition-shadow cursor-pointer border-border"
      onClick={() => navigate(`/article/${article.id}`)}
    >
      <h3 className="text-lg font-semibold text-title mb-3 line-clamp-2">
        {article.title}
      </h3>

      <div className="flex gap-2 mb-3">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <p className="text-sm text-caption mb-4 line-clamp-2">{article.excerpt}</p>

      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/mentor/${article.author.avatar}`);
          }}
        >
          <img
            src={mentorAvatars[article.author.avatar]}
            alt={article.author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-body">{article.author.name}</p>
            <p className="text-xs text-caption">{article.author.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-caption">
          <Eye className="w-4 h-4" />
          <span className="text-xs">{article.views.toLocaleString()}</span>
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;
