import { motion } from "framer-motion";

export default function CodingCursor() {
  return (
    <motion.div
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="fixed bottom-5 right-5 w-2 h-6 bg-green-400 z-50"
    />
  );
}