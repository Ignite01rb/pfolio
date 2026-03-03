import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const commands = [
  {
    cmd: "whoami",
    output: "Raaghav — Full Stack Developer",
  },
  {
    cmd: "skills",
    output: "React • Node • DSA • AI/ML • System Design",
  },
  {
    cmd: "status",
    output: "Building impactful projects 🚀",
  },
];

export default function DevTerminal() {
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (step >= commands.length) return;

    const text = commands[step].output;
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(typing);

        // wait before next command
        setTimeout(() => {
          setTypedText("");
          setStep((s) => s + 1);
        }, 1200);
      }
    }, 35); // typing speed

    return () => clearInterval(typing);
  }, [step]);

  return (
    <section className="py-16 px-5 md:px-20 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-4xl bg-black/70 border border-white/10 rounded-xl shadow-xl overflow-hidden"
      >
        {/* soft glow */}
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-cyan-500/10 blur-3xl"
        />

        {/* header */}
        <div className="flex gap-2 px-4 py-3 border-b border-white/10">
          <div className="w-3 h-3 bg-red-400 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-400 rounded-full" />
          <span className="ml-4 text-xs text-gray-500 font-mono">
            raaghav@portfolio ~
          </span>
        </div>

        {/* terminal body */}
        <div className="p-6 font-mono text-sm md:text-base text-gray-300 space-y-4">
          {commands.slice(0, step).map((c, i) => (
            <div key={i}>
              <p>
                <span className="text-cyan-400">$</span> {c.cmd}
              </p>
              <p className="text-green-400 ml-4">{c.output}</p>
            </div>
          ))}

          {step < commands.length && (
            <div>
              <p>
                <span className="text-cyan-400">$</span>{" "}
                {commands[step].cmd}
              </p>

              <p className="text-green-400 ml-4 inline">
                {typedText}
              </p>

              {/* blinking cursor */}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-[8px] h-[18px] bg-cyan-400 ml-1"
              />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}