import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { useState } from "react";
/* ===== ADD YOUR VIDEOS HERE ===== */

const videos = [
  {
    title: "Gaming Montage",
    src: "/videos/beggin.mov",
  },
  {
    title: "Promo Edit",
    src: "/videos/Timeline 1.mov",
  },
  {
    title: "Gaming Montage",
    src: "/videos/stay.mp4",
  },
];

export default function VideoProjects() {
    const [activeVideo, setActiveVideo] = useState(null);
  
    return (
      <section
        id="video-projects"
        className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-16 lg:px-20"
      >
        <SectionReveal>
  
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-14 text-center"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {"<VideoShowcase />"}
            </span>
          </motion.h2>
  
          {/* MAIN LAYOUT */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  
            {/* FEATURED BIG VIDEO */}
            <div className="lg:col-span-2 relative group rounded-2xl overflow-hidden border border-white/10">
              <video
                src={videos[0].src}
                muted
                autoPlay
                loop
                playsInline
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                onClick={() => setActiveVideo(videos[0].src)}
              />
  
              <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {videos[0].title}
              </div>
            </div>
  
            {/* SIDE VIDEOS */}
            <div className="flex flex-col gap-8">
              {videos.slice(1).map((video, index) => (
                <div
                  key={index}
                  className="relative group rounded-xl overflow-hidden border border-white/10"
                >
                  <video
                    src={video.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    onClick={() => setActiveVideo(video.src)}
                  />
  
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    {video.title}
                  </div>
                </div>
              ))}
            </div>
  
          </div>
  
        </SectionReveal>
  
        {/* FULLSCREEN MODAL PLAYER */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
              onClick={() => setActiveVideo(null)}
            >
              <motion.video
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                src={activeVideo}
                controls
                autoPlay
                className="max-w-5xl w-full rounded-xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  }