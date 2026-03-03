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
  {/* Watermark */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
    <h1 className="text-[80px] sm:text-[120px] md:text-[220px] font-bold text-white/5 tracking-widest">
      PROJECTS
    </h1>
  </div>

  {/* Title */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.15 }}
    className="relative text-4xl sm:text-5xl md:text-7xl font-bold mb-20 md:mb-28 tracking-tight text-center"
  >
    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      {"<ProjectList />"}
    </span>
  </motion.h2>

  <div className="relative max-w-7xl mx-auto space-y-20 md:space-y-28">

    {projects.map((project, index) => {
      const isReverse = index % 2 !== 0;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
            isReverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="relative w-full md:w-1/2 group">
            <img
              src={project.image}
              loading="lazy"
              alt={project.title}
              className="rounded-2xl md:rounded-3xl shadow-2xl w-full object-cover"
            />

            <div
              className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-tr ${project.accent} opacity-0 group-hover:opacity-20 transition`}
            />
          </div>

          {/* Content Card */}
          <div className="relative w-full md:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl group">
            <div
              className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${project.accent}`}
            />

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white group-hover:text-cyan-400 transition">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer" 
              className="inline-block mt-6 text-sm text-cyan-400 hover:text-white transition"
            >
              Visit Project →
            </a>
          </div>
        </motion.div>
      );
    })}

  </div>
</section>
  );
}
