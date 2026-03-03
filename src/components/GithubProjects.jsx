import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return res.json();
      })
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);

        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-center text-gray-400">Loading GitHub Projects...</div>
    );

  if (error)
    return (
      <div className="text-center text-red-400">Error: {error}</div>
    );

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-32 py-24">
      <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-20 text-center">
        GitHub Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 group"
          >
            <div className="absolute inset-0 rounded-3xl bg-indigo-500 opacity-0 group-hover:opacity-10 blur-2xl transition duration-300" />

            <h3 className="text-2xl font-semibold mb-4 relative z-10">
              {repo.name}
            </h3>

            <p className="text-gray-400 mb-6 relative z-10 leading-relaxed">
              {repo.description || "No description available."}
            </p>

            <div className="flex justify-between items-center relative z-10">
              <span className="text-sm text-gray-500">
                ⭐ {repo.stargazers_count}
              </span>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <FaGithub />
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
