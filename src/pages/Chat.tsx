import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";
import mentor3 from "@/assets/mentor-3.jpg";

const mentorAvatars: Record<string, string> = {
  "mentor-1": mentor1,
  "mentor-2": mentor2,
  "mentor-3": mentor3,
};

const mentorNames: Record<string, string> = {
  "mentor-1": "张晨",
  "mentor-2": "王悦",
  "mentor-3": "李思远",
};

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: `你好！我是${mentorNames[id || "mentor-1"]}的数字分身。很高兴能和你交流，我会尽我所能分享我的经验和见解。你可以问我关于职业发展、技术选择、面试准备等任何问题。`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(input, id || "mentor-1"),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (question: string, mentorId: string) => {
    // Simple response simulation
    const responses: Record<string, string[]> = {
      "mentor-1": [
        "这是一个很好的问题。从我在字节跳动的经验来看，",
        "在互联网行业，我建议你",
        "根据我的观察，",
      ],
      "mentor-2": [
        "从咨询的角度分析，",
        "这个问题需要系统性地思考，",
        "基于我在麦肯锡的项目经验，",
      ],
      "mentor-3": [
        "作为产品经理，我觉得",
        "从用户角度来看，",
        "在腾讯的工作中，我学到",
      ],
    };

    const mentorResponses = responses[mentorId] || responses["mentor-1"];
    const randomResponse =
      mentorResponses[Math.floor(Math.random() * mentorResponses.length)];

    return `${randomResponse}这个领域确实需要深入了解。建议你可以从这几个方面着手：1) 系统学习相关知识 2) 多实践积累经验 3) 保持持续学习的态度。如果你想了解更具体的建议，可以详细描述你的情况。`;
  };

  const avatar = mentorAvatars[id || "mentor-1"];
  const name = mentorNames[id || "mentor-1"];

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6 text-body" />
        </button>
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h1 className="text-base font-semibold text-title">{name}</h1>
          <p className="text-xs text-caption">数字分身在线</p>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {message.role === "assistant" && (
              <img
                src={avatar}
                alt={name}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
            )}
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-body"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <img
              src={avatar}
              alt={name}
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <div className="bg-card border border-border rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-caption rounded-full animate-bounce"></span>
                <span
                  className="w-2 h-2 bg-caption rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></span>
                <span
                  className="w-2 h-2 bg-caption rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-card border-t border-border p-4">
        <div className="flex gap-2">
          <Input
            placeholder="输入你的问题..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button
            size="icon"
            className="bg-primary hover:bg-primary/90 flex-shrink-0"
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
