import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { journey } from "../../data/journey";

function EngineeringTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-7 sm:mb-16 sm:gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-300 sm:text-[10px] sm:tracking-[0.3em]"
            >
              <span className="h-px w-6 bg-cyan-300/50" />
              04 / Engineering Journey
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.92] tracking-[-0.055em] text-zinc-100 sm:text-6xl"
            >
              From foundations
              <br />
              <span className="text-zinc-600">
                to intelligent systems.
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
              A timeline of the technologies, ideas, and engineering
              directions explored throughout the journey.
            </p>

            <div className="mt-4 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-800">
              <span className="h-1 w-1 rounded-full bg-cyan-300/50" />
              Continuous Engineering Progress
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Base line */}
          <div className="absolute left-[27px] top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          {/* Scroll progress */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] top-0 z-[1] w-px bg-cyan-300 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-16 sm:space-y-20">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === journey.length - 1;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative grid md:grid-cols-2 md:gap-16 lg:gap-20"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-[27px] top-1 z-10 -translate-x-1/2 md:left-1/2">
                    <motion.div
                      initial={false}
                      animate={{
                        scale: 1,
                      }}
                      whileHover={{
                        scale: 1.3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className={`flex h-4 w-4 items-center justify-center rounded-full border bg-[#050608] transition-all duration-500 ${
                        isLast
                          ? "border-cyan-300/70"
                          : "border-cyan-300/40 group-hover:border-cyan-300/70"
                      }`}
                    >
                      <motion.div
                        animate={{
                          scale: isLast ? 1.15 : 1,
                        }}
                        whileHover={{
                          scale: 1.4,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className={`rounded-full transition-all duration-500 ${
                          isLast
                            ? "h-1.5 w-1.5 bg-cyan-300"
                            : "h-1 w-1 bg-cyan-300/80 group-hover:bg-cyan-300"
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`min-w-0 pl-16 ${
                      isEven
                        ? "md:pr-16 md:text-right lg:pr-20"
                        : "md:col-start-2 md:pl-16 lg:pl-20"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className={`min-w-0 ${
                        isEven
                          ? "md:items-end"
                          : "md:items-start"
                      } flex flex-col`}
                    >
                      {/* Year + phase */}
                      <div
                        className={`flex items-end gap-4 ${
                          isEven
                            ? "md:flex-row-reverse"
                            : ""
                        }`}
                      >
                        <span className="font-mono text-4xl font-medium leading-none tracking-[-0.05em] text-zinc-700 transition-colors duration-300 group-hover:text-zinc-500 sm:text-5xl">
                          {item.year}
                        </span>

                        <span className="mb-1 font-mono text-[8px] uppercase tracking-[0.25em] text-cyan-300 transition-opacity duration-300 group-hover:opacity-80 sm:text-[9px] sm:tracking-[0.3em]">
                          {item.phase}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-zinc-200 transition-colors duration-300 group-hover:text-zinc-100 sm:text-2xl">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div
                        className={`mt-6 flex max-w-lg flex-wrap gap-2 ${
                          isEven
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        {item.technologies.map((technology) => (
                          <motion.span
                            key={technology}
                            whileHover={{ y: -2 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            }}
                            className="cursor-default border border-white/10 bg-white/[0.02] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-600 transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.025] hover:text-zinc-300 sm:px-3 sm:py-2 sm:text-[9px]"
                          >
                            {technology}
                          </motion.span>
                        ))}
                      </div>

                      {/* Event index */}
                      <span
                        className={`mt-5 font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-800 transition-colors duration-300 group-hover:text-zinc-700 ${
                          isEven ? "md:text-right" : ""
                        }`}
                      >
                        EVENT / {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-20 border-t border-white/10 pt-7 sm:mt-24 sm:pt-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-700 sm:text-[9px]">
                Journey Status
              </span>

              <p className="mt-2 text-sm text-zinc-500">
                Continuously building, experimenting, and learning.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600 sm:text-[9px]">
                System In Progress
              </span>
            </div>
          </div>
        </motion.div>

        {/* Section footer */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-800">
          <span>
            ENGINEERING JOURNEY /{" "}
            {String(journey.length).padStart(2, "0")}
          </span>

          <span>AK / 04</span>
        </div>
      </div>
    </section>
  );
}

export default EngineeringTimeline;