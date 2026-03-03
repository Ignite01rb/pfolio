import { useEffect, useState } from "react";

const statuses = [
  "🟢 Building AI Traffic Simulator",
  "⚡ Solving DSA Problems",
  "☕ Coffee Powered Coding",
  "🚀 Learning System Design",
];

export default function DevStatus() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % statuses.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block">
      <div className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm text-gray-300 shadow-lg">
        {statuses[index]}
      </div>
    </div>
  );
}