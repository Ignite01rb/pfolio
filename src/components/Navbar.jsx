import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 hidden md:flex gap-10 px-10 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full z-50 text-sm shadow-lg">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-cyan-400 transition duration-300"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* ================= Mobile Hamburger Button ================= */}
      <div className="fixed top-6 right-4 md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-white shadow-lg"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* ================= Centered Mobile Dropdown ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }} 
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] max-w-[230px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center gap-8 md:hidden z-40 shadow-xl"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-300 hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
