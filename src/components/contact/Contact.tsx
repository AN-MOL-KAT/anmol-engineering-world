import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Send,
  Code2,
} from "lucide-react";
import { profile } from "../../data/profile";

const contactLinks = [
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GITHUB",
    value: "github.com/AN-MOL-KAT",
    href: profile.github,
    icon: Code2,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/anmol-kathayat-41ab63418",
    href: profile.linkedin,
    icon: Code2,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-300 sm:text-[10px] sm:tracking-[0.3em]"
          >
            <span className="h-px w-6 bg-cyan-300/50" />
            07 / Communication
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.08 }}
            className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.92] tracking-[-0.055em] text-zinc-100 sm:text-6xl lg:text-7xl"
          >
            Let's build something
            <br />
            <span className="text-zinc-600">worth understanding.</span>
          </motion.h2>
        </div>

        {/* Main Contact Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            borderColor: "rgba(103, 232, 249, 0.16)",
          }}
          className="group relative overflow-hidden border border-white/10 bg-white/[0.015] transition-colors duration-500"
        >
          {/* Technical corners */}
          <div className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-cyan-300/30" />
          <div className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-cyan-300/30" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-cyan-300/30" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-cyan-300/30" />

          {/* Technical grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Primary Contact */}
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{
                      scale: 1.06,
                      rotate: -2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                    className="flex h-10 w-10 items-center justify-center border border-cyan-300/20 bg-cyan-300/[0.04]"
                  >
                    <Send size={15} className="text-cyan-300" />
                  </motion.div>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                      Direct Communication
                    </p>

                    <p className="mt-1 font-mono text-xs text-zinc-300">
                      Open for conversations
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800">
                  CONNECT / 07
                </span>
              </div>

              <div className="mt-14">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="font-mono text-[8px] uppercase tracking-[0.25em] text-cyan-300/70"
                >
                  Start a conversation
                </motion.p>

                <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-zinc-100 sm:text-5xl">
                  Ideas become better
                  <span className="text-zinc-600">
                    {" "}
                    when they are discussed.
                  </span>
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600">
                  Whether it is a project, collaboration, technical
                  discussion, or simply an interesting problem to explore,
                  feel free to reach out.
                </p>

                <motion.a
                  href={`mailto:${profile.email}`}
                  data-cursor-hover
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="group/email mt-8 inline-flex items-center gap-3 border border-cyan-300/20 bg-cyan-300/[0.04] px-5 py-3.5 font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07]"
                >
                  Send an Email

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover/email:-translate-y-0.5 group-hover/email:translate-x-0.5"
                  />
                </motion.a>
              </div>

              <div className="mt-14 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/30" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300/80" />
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                    {profile.status}
                  </span>
                </div>

                <p className="mt-3 max-w-md text-xs leading-5 text-zinc-700">
                  Currently open to opportunities, collaborations, and
                  technical conversations.
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-700">
                    Communication Channels
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    Choose a route.
                  </p>
                </div>

                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800">
                  03 CHANNELS
                </span>
              </div>

              <div className="divide-y divide-white/10">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={
                        link.label === "EMAIL" ? undefined : "_blank"
                      }
                      rel={
                        link.label === "EMAIL" ? undefined : "noreferrer"
                      }
                      data-cursor-hover
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.12 + index * 0.08,
                      }}
                      whileHover={{ x: 4 }}
                      className="group/channel relative flex items-center justify-between gap-5 py-7 transition-colors duration-300"
                    >
                      <div className="absolute left-0 top-0 h-px w-0 bg-cyan-300/30 transition-all duration-500 group-hover/channel:w-16" />

                      <div className="flex min-w-0 items-center gap-4">
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: -3,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                          className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-white/[0.02] transition-colors duration-300 group-hover/channel:border-cyan-300/20 group-hover/channel:bg-cyan-300/[0.03]"
                        >
                          <Icon
                            size={15}
                            className="text-zinc-600 transition-colors duration-300 group-hover/channel:text-cyan-300"
                          />
                        </motion.div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[7px] text-zinc-800">
                              0{index + 1}
                            </span>

                            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-300/60">
                              {link.label}
                            </span>
                          </div>

                          <p className="mt-2 truncate text-xs text-zinc-500 transition-colors duration-300 group-hover/channel:text-zinc-300 sm:text-sm">
                            {link.value}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-zinc-800 transition-all duration-300 group-hover/channel:-translate-y-0.5 group-hover/channel:translate-x-0.5 group-hover/channel:text-cyan-300"
                      />
                    </motion.a>
                  );
                })}
              </div>

              {/* Resume */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="group/resume mt-8 flex items-center justify-between border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.02] sm:p-6"
              >
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                    Professional Profile
                  </p>

                  <p className="mt-2 text-sm font-medium text-zinc-300 transition-colors duration-300 group-hover/resume:text-zinc-100">
                    View Resume
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="text-zinc-700 transition-all duration-300 group-hover/resume:-translate-y-0.5 group-hover/resume:translate-x-0.5 group-hover/resume:text-cyan-300"
                />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <span>ANMOL ENGINEERING WORLD</span>

          <div className="flex items-center gap-4">
            <span>BUILD / LEARN / REPEAT</span>
            <span className="text-cyan-300/30">/</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;