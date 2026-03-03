import { useEffect, useState } from "react";

const sections = ["home", "skills", "projects", "contact"];

export default function SectionIndicator() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-40">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            active === section
              ? "bg-indigo-500 scale-125"
              : "bg-white/30 hover:bg-white/60"
          }`}
        />
      ))}
    </div>
  );
}
