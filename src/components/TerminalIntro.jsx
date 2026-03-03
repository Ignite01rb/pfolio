import { useEffect, useState } from "react";

export default function TerminalIntro() {
  const [text, setText] = useState("");
  const full = "Booting Portfolio Engine v2.0...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(full.slice(0, i));
      i++;
      if (i > full.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-green-400 font-mono text-sm mb-4">
      $ {text}
    </div>
  );
}
