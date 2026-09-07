import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { skills } from "../../data/skills";

function SkillConstellation() {
  const [selectedId, setSelectedId] = useState(skills[0].id);

  const selectedSkill =
    skills.find((skill) => skill.id === selectedId) ?? skills[0];

  const positions = useMemo(
    () => [
      { x: "18%", y: "18%" },
      { x: "48%", y: "10%" },
      { x: "78%", y: "22%" },
      { x: "30%", y: "48%" },
      { x: "65%", y: "42%" },
      { x: "15%", y: "76%" },
      { x: "52%", y: "78%" },
    ],
    [],
  );

  return (
    <section
      id="skills"
      className="relative px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-7 sm:mb-16 sm:gap-8 lg:flex-row lg:items-end">
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-300 sm:text-[10px] sm:tracking-[0.3em]"
            >
              <span className="h-px w-6 bg-cyan-300/50" />
              03 / Skill Constellation
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.92] tracking-[-0.055em] text-zinc-100 sm:text-6xl"
            >
              The technologies
              <br />
              <span className="text-zinc-600">
                behind the systems.
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
            <p className="text-sm leading-6 text-zinc-600">
              Select a node to explore how different technologies
              connect across my engineering work.
            </p>

            <div className="mt-4 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-800">
              <span className="h-1 w-1 rounded-full bg-cyan-300/50" />
              Interactive Technology Network
            </div>
          </motion.div>
        </div>

        {/* Main constellation */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:gap-8">
          {/* Network */}
          <div className="relative min-h-[480px] overflow-hidden border border-white/10 bg-white/[0.015] sm:min-h-[560px]">
            {/* Technical corner markers */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-3 w-3 border-l border-t border-cyan-300/30" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-3 w-3 border-r border-t border-cyan-300/30" />
            <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-3 w-3 border-b border-l border-cyan-300/30" />
            <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-3 w-3 border-b border-r border-cyan-300/30" />

            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Connection network */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line
                x1="18%"
                y1="18%"
                x2="48%"
                y2="10%"
                stroke="rgba(125,211,252,0.12)"
              />

              <line
                x1="48%"
                y1="10%"
                x2="78%"
                y2="22%"
                stroke="rgba(125,211,252,0.12)"
              />

              <line
                x1="18%"
                y1="18%"
                x2="30%"
                y2="48%"
                stroke="rgba(125,211,252,0.12)"
              />

              <line
                x1="48%"
                y1="10%"
                x2="65%"
                y2="42%"
                stroke="rgba(125,211,252,0.12)"
              />

              <line
                x1="30%"
                y1="48%"
                x2="65%"
                y2="42%"
                stroke="rgba(125,211,252,0.12)"
              />

              <line
                x1="30%"
                y1="48%"
                x2="15%"
                y2="76%"
                stroke="rgba(125,211,252,0.12)"
              />

              <line
                x1="65%"
                y1="42%"
                x2="52%"
                y2="78%"
                stroke="rgba(125,211,252,0.12)"
              />

              <line
                x1="15%"
                y1="76%"
                x2="52%"
                y2="78%"
                stroke="rgba(125,211,252,0.12)"
              />
            </svg>

            {/* Network header */}
            <div className="absolute left-5 top-5 z-20 sm:left-6 sm:top-6">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300/70" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700 sm:text-[9px] sm:tracking-[0.25em]">
                  Technology Network
                </span>
              </div>

              <span className="mt-2 block font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800">
                {String(skills.length).padStart(2, "0")} ACTIVE NODES
              </span>
            </div>

            {/* Nodes */}
            {skills.map((skill, index) => {
              const position = positions[index % positions.length];
              const selected = skill.id === selectedId;

              return (
                <motion.button
                  key={skill.id}
                  type="button"
                  onClick={() => setSelectedId(skill.id)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  data-cursor-hover
                  aria-label={`Select ${skill.name}`}
                  aria-pressed={selected}
                  className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 text-left"
                  style={{
                    left: position.x,
                    top: position.y,
                  }}
                >
                  <div className="relative">
                    {/* Hover field */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: selected ? 0.14 : 0,
                        scale: selected ? 1 : 0.8,
                      }}
                      className="pointer-events-none absolute -inset-7 rounded-full bg-cyan-300/20 blur-xl transition-opacity duration-300 group-hover:opacity-10"
                    />

                    {/* Active pulse */}
                    {selected && (
                      <>
                        <motion.div
                          layoutId="skill-ring"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                          className="absolute -inset-3 rounded-full border border-cyan-300/30 sm:-inset-3.5"
                        />

                        <motion.div
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 0.5, scale: 1 }}
                          className="absolute -inset-5 rounded-full border border-cyan-300/10"
                        />
                      </>
                    )}

                    {/* Node */}
                    <div
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 sm:h-16 sm:w-16 ${
                        selected
                          ? "border-cyan-300/60 bg-cyan-300/[0.08] shadow-[0_0_25px_rgba(34,211,238,0.08)]"
                          : "border-white/10 bg-[#080a0d] hover:border-cyan-300/25 hover:bg-cyan-300/[0.025]"
                      }`}
                    >
                      {/* Inner node */}
                      <motion.span
                        animate={{
                          scale: selected ? 1.15 : 1,
                          opacity: selected ? 1 : 0.65,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className={`absolute h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                          selected
                            ? "bg-cyan-300"
                            : "bg-zinc-700 group-hover:bg-zinc-500"
                        }`}
                      />

                      <span
                        className={`font-mono text-[8px] uppercase tracking-wider transition-colors duration-300 sm:text-[9px] ${
                          selected
                            ? "text-cyan-300"
                            : "text-zinc-500 group-hover:text-zinc-300"
                        }`}
                      >
                        {skill.name === "Machine Learning"
                          ? "ML"
                          : skill.name === "Computer Vision"
                            ? "CV"
                            : skill.name === "Data Analytics"
                              ? "DA"
                              : skill.name === "Git / GitHub"
                                ? "GIT"
                                : skill.name.slice(0, 4)}
                      </span>
                    </div>

                    {/* Label */}
                    <span
                      className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.12em] transition-all duration-300 sm:mt-3 sm:text-[9px] sm:tracking-wider ${
                        selected
                          ? "translate-y-0 text-zinc-200"
                          : "translate-y-0 text-zinc-700 group-hover:text-zinc-400"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                </motion.button>
              );
            })}

            {/* Network footer */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800 sm:bottom-6 sm:left-6 sm:right-6">
              <span>NODE MAP / AK-03</span>

              <span className="hidden sm:block">
                SELECT NODE TO INSPECT
              </span>
            </div>
          </div>

          {/* Information panel */}
          <motion.div
            layout
            className="relative overflow-hidden border border-white/10 bg-white/[0.015] p-5 sm:p-8"
          >
            {/* Technical markers */}
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-cyan-300/30" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-cyan-300/30" />

            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-300 sm:text-[9px] sm:tracking-[0.25em]">
                    Selected Node
                  </span>
                </div>

                <motion.h3
                  key={selectedSkill.id}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 break-words text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl"
                >
                  {selectedSkill.name}
                </motion.h3>

                <p className="mt-2 font-mono text-[8px] uppercase tracking-wider text-zinc-700 sm:text-[9px]">
                  {selectedSkill.category} / {selectedSkill.level}
                </p>
              </div>

              <span className="shrink-0 font-mono text-xs text-zinc-700">
                03
              </span>
            </div>

            <motion.p
              key={`${selectedSkill.id}-description`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-7 text-sm leading-7 text-zinc-500 sm:mt-8"
            >
              {selectedSkill.description}
            </motion.p>

            {/* Connections */}
            <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10 sm:pt-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600 sm:text-[9px] sm:tracking-[0.25em]">
                  Connected Technologies
                </span>

                <span className="h-px flex-1 bg-white/5" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedSkill.connections.map((connection) => (
                  <motion.span
                    key={connection}
                    whileHover={{ y: -1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                    className="cursor-default border border-white/10 bg-white/[0.015] px-2.5 py-1.5 font-mono text-[8px] text-zinc-500 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.025] hover:text-zinc-300 sm:px-3 sm:py-2 sm:text-[9px]"
                  >
                    {connection}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10 sm:pt-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600 sm:text-[9px] sm:tracking-[0.25em]">
                  Used In
                </span>

                <span className="h-px flex-1 bg-white/5" />
              </div>

              <div className="mt-4 space-y-3">
                {selectedSkill.projects.map((project) => (
                  <motion.div
                    key={project}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.25 }}
                    className="group flex items-start gap-3"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300/60 transition-transform duration-300 group-hover:scale-150" />

                    <span className="text-xs leading-5 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
                      {project}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 font-mono text-[7px] uppercase tracking-[0.18em] text-zinc-800 sm:mt-10 sm:pt-7">
              <span>NODE STATUS / ACTIVE</span>

              <span>AK / 03</span>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-cyan-300/30" />
          </motion.div>
        </div>

        {/* Section footer */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-800">
          <span>
            SKILL CONSTELLATION / {String(skills.length).padStart(2, "0")}
          </span>

          <span>
            SELECTED / {selectedSkill.name}
          </span>
        </div>
      </div>
    </section>
  );
}

export default SkillConstellation;