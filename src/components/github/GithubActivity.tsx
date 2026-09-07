import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  GitBranch,
  Layers3,
  Terminal,
} from "lucide-react";

const proofItems = [
  {
    value: "05",
    label: "PROJECT SYSTEMS",
    description: "Built and documented across AI, ML, and software engineering.",
  },
  {
    value: "12+",
    label: "TECHNOLOGIES",
    description: "Languages, frameworks, libraries, and development tools.",
  },
  {
    value: "08",
    label: "EXPERIMENTS",
    description: "Iterations, prototypes, and technical explorations.",
  },
];

const focusAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Data Analytics",
  "Software Engineering",
];

function GithubActivity() {
  return (
    <section
      id="github"
      className="relative px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end">
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-300 sm:text-[10px] sm:tracking-[0.3em]"
            >
              <span className="h-px w-6 bg-cyan-300/50" />
              05 / GitHub Activity
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.92] tracking-[-0.055em] text-zinc-100 sm:text-6xl lg:text-7xl"
            >
              What I build
              <br />
              <span className="text-zinc-600">
                is the evidence.
              </span>
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
              Code, experiments, repositories, and unfinished ideas form the
              practical record behind my engineering journey.
            </p>

            <div className="mt-5 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-800">
              <span className="h-1 w-1 rounded-full bg-cyan-300/60" />
              Proof of Work
            </div>
          </motion.div>
        </div>

        {/* Main Proof-of-Work Panel */}
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
          {/* Technical Corners */}
          <div className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-cyan-300/30" />
          <div className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-cyan-300/30" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-cyan-300/30" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-cyan-300/30" />

          {/* Subtle Engineering Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          {/* Decorative Signal */}
          <div className="pointer-events-none absolute right-8 top-8 hidden h-24 w-24 sm:block">
            <div className="absolute right-0 top-0 h-px w-16 bg-cyan-300/20" />
            <div className="absolute right-0 top-0 h-16 w-px bg-cyan-300/20" />

            <motion.div
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300"
            />
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            {/* Repository Identity */}
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                    className="flex h-9 w-9 items-center justify-center border border-cyan-300/20 bg-cyan-300/[0.04]"
                  >
                    <Code2 size={16} className="text-cyan-300" />
                  </motion.div>

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-700">
                      Public Repository
                    </p>

                    <p className="mt-1 font-mono text-sm text-zinc-200 transition-colors duration-300 hover:text-cyan-300 sm:text-base">
                      github.com/AN-MOL-KAT
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/AN-MOL-KAT"
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="group/link inline-flex w-fit items-center gap-3 border border-white/10 bg-[#050608]/50 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04] hover:text-cyan-300"
              >
                View GitHub
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            </div>

            {/* Main Statement */}
            <div className="mt-16 max-w-4xl sm:mt-20">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="font-mono text-[8px] uppercase tracking-[0.25em] text-cyan-300/70 sm:text-[9px]"
              >
                Engineering Record / 2026
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-zinc-100 sm:text-5xl lg:text-6xl"
              >
                Building systems is a process of
                <span className="text-zinc-600">
                  {" "}
                  building understanding.
                </span>
              </motion.h3>
            </div>

            {/* Proof Metrics */}
            <div className="mt-14 grid border-y border-white/10 sm:mt-16 sm:grid-cols-3">
              {proofItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.12 + index * 0.08,
                  }}
                  whileHover={{ y: -3 }}
                  className={`group/metric relative py-7 sm:px-6 sm:py-8 ${
                    index !== proofItems.length - 1
                      ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-cyan-300/30 transition-transform duration-500 group-hover/metric:scale-x-100" />

                  <div className="font-mono text-3xl tracking-[-0.04em] text-zinc-100 transition-colors duration-300 group-hover/metric:text-cyan-300 sm:text-4xl">
                    {item.value}
                  </div>

                  <div className="mt-3 font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-300/70">
                    {item.label}
                  </div>

                  <p className="mt-3 max-w-xs text-xs leading-5 text-zinc-600 transition-colors duration-300 group-hover/metric:text-zinc-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Current Engineering Direction */}
            <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <Terminal
                    size={15}
                    className="text-cyan-300"
                  />

                  <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-700">
                    Current Direction
                  </span>
                </div>

                <h4 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-zinc-200 transition-colors duration-300 hover:text-zinc-100 sm:text-3xl">
                  Intelligent systems
                </h4>

                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
                  Exploring how software engineering, machine learning, and
                  computer vision can work together to solve practical
                  problems.
                </p>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                    Engineering Focus
                  </span>

                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800">
                    Active Areas
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((focus, index) => (
                    <motion.span
                      key={focus}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + index * 0.05,
                      }}
                      whileHover={{ y: -2 }}
                      data-cursor-hover
                      className="border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-500 transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.03] hover:text-zinc-300 sm:px-4 sm:py-2.5 sm:text-[9px]"
                    >
                      {focus}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600 sm:text-[9px]">
                  Engineering Work In Progress
                </span>
              </div>

              <div className="flex items-center gap-5 font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800 sm:text-[8px]">
                <span>BUILD</span>
                <span className="text-cyan-300/30">/</span>
                <span>COMMIT</span>
                <span className="text-cyan-300/30">/</span>
                <span>LEARN</span>
                <span className="text-cyan-300/30">/</span>
                <span>REPEAT</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting Cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden border border-white/10 bg-white/[0.015] p-6 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.025] sm:p-8"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-cyan-300/20" />

            <motion.div
              whileHover={{ scale: 1.06, rotate: -2 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="flex h-8 w-8 items-center justify-center border border-cyan-300/15 bg-cyan-300/[0.03]"
            >
              <GitBranch size={15} className="text-cyan-300" />
            </motion.div>

            <span className="absolute right-6 top-7 font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:right-8">
              PROCESS / ACTIVE
            </span>

            <h4 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-zinc-200 transition-colors duration-300 group-hover:text-zinc-100 sm:text-2xl">
              Experiment → build → refine
            </h4>

            <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-600 transition-colors duration-300 group-hover:text-zinc-500">
              Projects evolve through implementation, debugging, testing, and
              iteration rather than appearing fully formed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden border border-white/10 bg-white/[0.015] p-6 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.025] sm:p-8"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-cyan-300/20" />

            <motion.div
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="flex h-8 w-8 items-center justify-center border border-cyan-300/15 bg-cyan-300/[0.03]"
            >
              <Layers3 size={15} className="text-cyan-300" />
            </motion.div>

            <span className="absolute right-6 top-7 font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:right-8">
              ARCHIVE / OPEN
            </span>

            <h4 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-zinc-200 transition-colors duration-300 group-hover:text-zinc-100 sm:text-2xl">
              Repositories are the archive
            </h4>

            <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-600 transition-colors duration-300 group-hover:text-zinc-500">
              The GitHub profile contains the implementation details, project
              history, experiments, and code behind the work shown here.
            </p>

            <a
              href="https://github.com/AN-MOL-KAT"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="group/link mt-6 inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-500 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300 sm:text-[9px]"
            >
              Explore Repository
              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* Section Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-800">
          <span>GITHUB / PROOF OF WORK</span>
          <span>AK / 05</span>
        </div>
      </div>
    </section>
  );
}

export default GithubActivity;