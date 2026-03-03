import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommandTerminal() {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([]);

  /* activate only in coding mode */
  useEffect(() => {
    const observer = () => {
      setActive(document.body.classList.contains("coding-mode"));
    };

    observer();
    const interval = setInterval(observer, 400);
    return () => clearInterval(interval);
  }, []);

  const runCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    let response = "";

    switch (command) {
      case "help":
        response =
          "Commands: about | skills | projects | contact | clear";
        break;

      case "about":
      case "skills":
      case "projects":
      case "contact":
        document
          .getElementById(command)
          ?.scrollIntoView({ behavior: "smooth" });
        response = `Opening ${command}...`;
        break;

      case "clear":
        setLogs([]);
        return;

      default:
        response = "Command not found. Type 'help'";
    }

    setLogs((prev) => [...prev, `> ${command}`, response]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input);
    setInput("");
  };

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4 }}
          className="
            fixed 
            bottom-4 sm:bottom-6 md:bottom-16
            left-1/2 -translate-x-1/2
            w-[94%] sm:w-[92%] md:w-auto
            max-w-md md:max-w-xl lg:max-w-2xl
            bg-black/90 backdrop-blur-xl
            border border-green-400/20
            rounded-xl
            p-4 sm:p-5
            font-mono text-xs sm:text-sm
            text-green-400
            z-50
            shadow-2xl
          "
        >
          {/* Logs */}
          <div className="max-h-32 sm:max-h-40 overflow-y-auto mb-3 space-y-1 pr-1">
            {logs.map((log, i) => (
              <div key={i} className="break-words">
                {log}
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2"
          >
            <span className="text-green-400">$</span>

            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="
                bg-transparent outline-none flex-1
                text-green-400 placeholder-green-500/50
              "
              placeholder="type 'help'..."
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}