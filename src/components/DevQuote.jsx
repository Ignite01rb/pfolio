import { useEffect, useState } from "react";

const quotes = [
  "Code. Break. Fix. Repeat.",
  "First solve the problem, then write code.",
  "Ship fast, learn faster.",
  "Console.log is my best friend.",
];

export default function DevQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="text-center py-12 text-gray-400 font-mono">
      {'> "' + quote + '"'}
    </div>
  );
}