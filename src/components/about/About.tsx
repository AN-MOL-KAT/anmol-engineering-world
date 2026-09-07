import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  MapPin,
} from "lucide-react";
import { profile } from "../../data/profile";

const principles = [
  {
    icon: BrainCircuit,
    title: "Understand First",
    description:
      "Break complex problems into understandable systems before choosing an implementation.",
  },
  {
    icon: Code2,
    title: "Build Deliberately",
    description:
      "Prefer clear architecture, readable code, and solutions that can evolve over time.",
  },
  {
    icon: Cpu,
    title: "Learn Through Systems",
    description:
      "Use projects and experiments to connect concepts with practical engineering decisions.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-300 sm:text-[10px] sm:tracking-[0.3em]"
            >
              <span className="h-px w-6 bg-cyan-300/50" />
              06 / The Engineer
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 }}
              className="mt-5 text-4xl font-semibold leading-[0.92] tracking-[-0.055em] text-zinc-100 sm:text-6xl lg:text-7xl"
            >
              Behind the
              <br />
              <span className="text-zinc-600">systems.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15 }}
            className="max-w-sm"
          >
            <p className="text-sm leading-7 text-zinc-600">
              A computer science engineer interested in understanding how
              intelligent software systems are designed, built, and improved.
            </p>
          </motion.div>
        </div>

        {/* Main About Panel */}
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

          <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Identity Panel */}
            <div className="relative border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
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
                    <span className="font-mono text-[10px] text-cyan-300">
                      {profile.shortName}
                    </span>
                  </motion.div>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                      Engineer Profile
                    </p>

                    <p className="mt-1 font-mono text-xs text-zinc-300">
                      {profile.name}
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800">
                  PROFILE / 06
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
                  Computer Science / Engineering
                </motion.p>

                <h3 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-zinc-100 sm:text-4xl">
                  Building with curiosity,
                  <span className="text-zinc-600">
                    {" "}
                    precision, and persistence.
                  </span>
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-600">
                  I am interested in the intersection of software engineering
                  and intelligent systems. My work spans artificial
                  intelligence, machine learning, computer vision, and
                  data-driven applications.
                </p>

                <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600">
                  Rather than treating technology as a collection of tools, I
                  focus on understanding how the pieces connect — from data and
                  algorithms to implementation, testing, and user-facing
                  systems.
                </p>
              </div>

              {/* Location / Status */}
              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="group/meta border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.02]"
                >
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={13}
                      className="text-cyan-300 transition-transform duration-300 group-hover/meta:scale-110"
                    />

                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-700">
                      Location
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-zinc-400">
                    {profile.location}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="group/meta border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.02]"
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/30" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300/80" />
                    </span>

                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-700">
                      Status
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-xs text-zinc-400">
                    {profile.status}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Principles */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-700">
                    Engineering Principles
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    How I approach technical problems.
                  </p>
                </div>

                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800">
                  03 SYSTEMS
                </span>
              </div>

              <div className="divide-y divide-white/10">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;

                  return (
                    <motion.div
                      key={principle.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.12 + index * 0.08,
                      }}
                      whileHover={{ x: 4 }}
                      className="group/principle relative py-7 transition-colors duration-300"
                    >
                      <div className="absolute left-0 top-0 h-px w-0 bg-cyan-300/30 transition-all duration-500 group-hover/principle:w-16" />

                      <div className="flex gap-5">
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
                          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-white/[0.02] transition-colors duration-300 group-hover/principle:border-cyan-300/20 group-hover/principle:bg-cyan-300/[0.03]"
                        >
                          <Icon
                            size={15}
                            className="text-zinc-600 transition-colors duration-300 group-hover/principle:text-cyan-300"
                          />
                        </motion.div>

                        <div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[7px] text-zinc-800">
                              0{index + 1}
                            </span>

                            <h4 className="text-base font-medium text-zinc-300 transition-colors duration-300 group-hover/principle:text-zinc-100 sm:text-lg">
                              {principle.title}
                            </h4>
                          </div>

                          <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-600 transition-colors duration-300 group-hover/principle:text-zinc-500">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Direction */}
              <motion.div
                whileHover={{ y: -2 }}
                className="group/direction mt-8 border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.02] sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                    Current Direction
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-zinc-700 transition-all duration-300 group-hover/direction:-translate-y-0.5 group-hover/direction:translate-x-0.5 group-hover/direction:text-cyan-300"
                  />
                </div>

                <p className="mt-4 text-lg font-medium tracking-[-0.02em] text-zinc-300 transition-colors duration-300 group-hover/direction:text-zinc-100">
                  Intelligent software systems
                </p>

                <p className="mt-2 text-xs leading-5 text-zinc-600">
                  Exploring practical applications of AI, machine learning,
                  computer vision, and software engineering.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer metadata */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <span>THE ENGINEER / ABOUT</span>

          <span>
            {profile.college} / {profile.startYear}—{profile.graduationYear}
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;