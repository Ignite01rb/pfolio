import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-20"
    >
      <SectionReveal>
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-3 px-6 py-4 bg-[#0f172a] border-b border-white/10">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-sm text-gray-400 font-mono">
            Profile.json
          </span>
        </div>

        {/* Code Body */}
        <div className="p-8 font-mono text-sm md:text-base leading-relaxed text-gray-300 whitespace-pre-wrap">
          <span className="text-blue-400">const</span>{" "}
          <span className="text-cyan-400">Raaghav</span>{" "}
          <span>= </span>
          <span className="text-yellow-400">{`{`}</span>
          {"\n"}

          <span className="ml-4 text-purple-400">role</span>:{" "}
          <span className="text-green-400">"Aspiring Software Engineer"</span>,
          {"\n"}

          <span className="ml-4 text-purple-400">interests</span>:{" "}
          <span className="text-yellow-400">
          ["Data Structures & Algorithms", "Full-Stack Development", "AI/ML"]
          </span>,
          {"\n"}

          <span className="ml-4 text-purple-400">strength</span>:{" "}
          <span className="text-green-400">
          "Problem solving & building real-world applications"
          </span>,
          {"\n"}

          <span className="ml-4 text-purple-400">focus</span>:{" "}
          <span className="text-green-400">
            "Performance, UI precision & clean architecture"
          </span>,
          {"\n"}

          <span className="ml-4 text-purple-400">goal</span>:{" "}
          <span className="text-green-400">
            "Engineer impactful solutions at global scale"
          </span>
          {"\n"}

          <span className="text-yellow-400">{`}`}</span>;
        </div>
      </motion.div>
      </SectionReveal>
    </section>
  );
}
