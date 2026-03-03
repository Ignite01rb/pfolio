import { motion } from "framer-motion";

const items = [
  {
    icon: "🎬",
    title: "Video Editing",
    desc: "Cinematic storytelling & motion design",
  },
  {
    icon: "🎧",
    title: "Music & Focus",
    desc: "Deep work with the right vibes",
  },
  {
    icon: "💡",
    title: "Building Ideas",
    desc: "Turning thoughts into real products",
  },
];

export default function PersonalityCard() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-16 flex justify-center overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-4xl bg-white/5 backdrop-blur-xl
        border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl"
      >
        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Beyond Development
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={
                typeof window !== "undefined" && window.innerWidth > 768
                  ? { y: -6 }
                  : {}
              }
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 text-center
              hover:border-cyan-400/40 transition-all duration-300 active:scale-95"
            >
              {/* icon */}
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* title */}
              <p className="text-sm sm:text-base font-semibold text-white">
                {item.title}
              </p>

              {/* description */}
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                {item.desc}
              </p>

              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/0 group-hover:bg-cyan-400/5 transition" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}