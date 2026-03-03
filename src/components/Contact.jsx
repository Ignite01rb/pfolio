import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionReveal from "./SectionReveal";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_puelj4i",   // <-- replace
        "template_1e55oga",  // <-- replace
        form.current,
        "3fMSSnbjYglvFRtjD"    // <-- replace
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 3000);
        },
        () => {
          setSending(false);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative pt-24 pb-28 md:pt-32 md:pb-36
px-5 sm:px-6 md:px-20
flex flex-col items-center"
    >
      <SectionReveal>

        {/* Background Grid */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-10 text-center"
        >
          Let’s Build Something Great
        </motion.h2>

        <p className="text-gray-400 text-lg text-center max-w-2xl mb-16">
          I'm always open to discussing opportunities, collaborations,
          or impactful projects. Feel free to reach out.
        </p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl
bg-white/5 backdrop-blur-xl border border-white/10
rounded-2xl
p-6 sm:p-8 md:p-12
shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT INFO */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400">
                Contact Information
              </h3>

              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-blue-400" />
                <span>raagee2005@example.com</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <FaLinkedin className="text-blue-400" />
                <span>linkedin.com/in/raaghav-bisht</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <FaGithub className="text-blue-400" />
                <span>github.com/Ignite01rb</span>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition"
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition resize-none"
              />

              <button
                type="submit"
                disabled={sending}
                className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:scale-105 transition"
              >
                {sending ? "Sending..." : "Send Message →"}
              </button>

              {success && (
                <p className="text-green-400 text-sm">
                  Message sent successfully ✅
                </p>
              )}
            </form>
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-16 text-gray-600 text-sm">
          © {new Date().getFullYear()} Raaghav Bisht. All rights reserved.
        </p>

      </SectionReveal>
    </section>
  );
}
