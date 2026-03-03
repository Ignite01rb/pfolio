import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#06060b] overflow-hidden"
    >
      {/* Glow Background */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute w-72 h-72 bg-cyan-400 blur-[120px] opacity-20 rounded-full"
      />

      {/* RB Logo */}
      <motion.h1
        initial={{ opacity: 0, y: 40, letterSpacing: "0.2em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-7xl md:text-9xl font-bold tracking-widest
        bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500
        bg-clip-text text-transparent"
      >
        RB
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6] }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 text-gray-400 font-mono text-sm tracking-wider"
      >
        Initializing Portfolio...
      </motion.p>

      {/* Progress Bar */}
      <motion.div className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
        />
      </motion.div>
    </motion.div>
  );
}
