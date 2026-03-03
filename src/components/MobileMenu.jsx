import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 md:hidden z-50">
      <button onClick={() => setOpen(!open)}>
        <FaBars size={22} />
      </button>

      {open && (
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#achievements">Achievements</a>
    <a href="#contact">Contact</a>

        </div>
      )}
    </div>
  );
}
