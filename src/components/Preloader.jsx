import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  // ✅ Disable scroll while loading
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  // ✅ Auto hide after 1.5s
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black dark:bg-white flex items-center justify-center transition-opacity duration-500">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-t-transparent border-cyan-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-4 border-b-transparent border-purple-500 rounded-full animate-spin reverse-spin"></div>
      </div>
    </div>
  );
};

export default Preloader;
