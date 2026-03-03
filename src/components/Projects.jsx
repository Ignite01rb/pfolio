import { motion } from "framer-motion";
import p1 from "../imagepacks/p1.png";
import p2 from "../imagepacks/p2.png";
import p3 from "../imagepacks/p3.png";
import p4 from "../imagepacks/p4.png";
import p5 from "../imagepacks/p5main.png";
import p6 from "../imagepacks/p6.png";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    image: p1,
    title: "Doctor Appointment Manager",
    description:
      "Full-stack healthcare platform enabling appointment scheduling, doctor availability management, ML-based enhancements and secure backend integration.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Python"],
    link: "https://doctorsite-qjri.vercel.app/",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    image: p2,
    title: "Finance Manager",
    description:
      "Personal finance tracker with expense monitoring, budgeting system, and interactive data visualization.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://667272d3edf85bc2caad5b89--silly-paprenjak-cd0be7.netlify.app/",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    image: p3,
    title: "Gym Website",
    description:
      "Modern responsive gym website showcasing memberships, trainers, schedules and user engagement features.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://66730b25dd68c85f09fd44ac--unique-kelpie-8c5474.netlify.app/",
    accent: "from-purple-400 to-indigo-500",
  },
  {
    image: p4,
    title: "React TODO Application",
    description:
      "Task management app with local storage persistence, editing features and completed task segregation.",
    tech: ["React", "CSS"],
    link: "https://669dfd7759d015c16460b482--ephemeral-medovik-909ca2.netlify.app/",
    accent: "from-yellow-400 to-orange-500",
  },
  {
    image: p5,
    title: "Hospital Management System",
    description:
      "Scalable hospital workflow management platform with department filtering, patient modules and responsive UI.",
    tech: ["React", "TailwindCSS"],
    link: "https://careconnect-1v6s.vercel.app/",
    accent: "from-pink-400 to-red-500",
  },
  {
    image: p6,
    title: "Sentiment Analysis",
    description:
      "Machine learning model to classify tweets as positive or negative.",
    tech: ["Python","NLTK", "Scikit-learn", "Pandas", "NumPy", "Matplotlib","Seaborn"],
    link: "https://sentimentanalysis6.streamlit.app/",
    accent: "from-pink-400 to-red-500",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative pt-24 pb-28 md:pt-32 md:pb-36 px-5 md:px-20"
    >
      <SectionReveal>
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[120px] md:text-[220px] font-bold text-white/5 tracking-widest">
          PROJECTS
        </h1>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true , amount:0.2 }}
        className="relative text-5xl md:text-7xl font-bold mb-32 tracking-tight"
      >
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {"<ProjectList />"}
        </span>
      </motion.h2>

      <div className="relative max-w-7xl mx-auto space-y-32">

        {projects.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-16 ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full md:w-1/2 group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-3xl shadow-2xl w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-tr ${project.accent} opacity-0 group-hover:opacity-20 transition`}
                ></div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ x: -20, y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-full md:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl group"
              >
                {/* Accent Strip */}
                <div
                  className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${project.accent}`}
                ></div>

                <h3 className="text-3xl font-semibold text-white group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-8 text-sm text-cyan-400 hover:text-white transition"
                >
                  Visit Project →
                </a>
              </motion.div>
            </motion.div>
          );
        })}

      </div>
      </SectionReveal>
    </section>
  );
}
