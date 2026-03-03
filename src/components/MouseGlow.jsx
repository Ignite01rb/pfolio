import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-80 h-80 bg-indigo-500 opacity-20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
