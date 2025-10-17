import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex flex-col items-center justify-center px-8">
      <div
        className={`transition-all duration-700 transform ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-2xl font-semibold text-center mb-12 text-title">
          一次链接，看见新的未来
        </h1>

        <div className="space-y-4 text-center">
          <div
            className="animate-slide-up"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <p className="text-base text-body">· 与顶尖前辈"真人"对话</p>
          </div>
          <div
            className="animate-slide-up"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <p className="text-base text-body">· 探索职业的万种可能</p>
          </div>
          <div
            className="animate-slide-up"
            style={{ animationDelay: "0.9s", animationFillMode: "both" }}
          >
            <p className="text-base text-body">· 获得专属的成长路线</p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-16 h-1 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
