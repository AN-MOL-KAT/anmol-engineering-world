import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectDisplay from "./ProjectDisplay";
import ProjectSelector from "./ProjectSelector";

function ProjectLab() {
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const selectedProject =
    projects.find((project) => project.id === selectedId) ?? projects[0];

  return (
    <section
      id="projects"
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
              02 / Project Lab
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.92] tracking-[-0.055em] text-zinc-100 sm:text-6xl"
            >
              Systems I have
              <br />
              <span className="text-zinc-600">
                built and explored.
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
              Explore the projects individually. Each system represents a
              different problem, approach, and engineering challenge.
            </p>

            <div className="mt-4 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-800">
              <span className="h-1 w-1 rounded-full bg-cyan-300/50" />
              Interactive Project Explorer
            </div>
          </motion.div>
        </div>

        {/* Project explorer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr] lg:gap-8"
        >
          <ProjectSelector
            selectedId={selectedId}
            onSelect={setSelectedId}
          />

          <ProjectDisplay project={selectedProject} />
        </motion.div>

        {/* Section footer */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-800">
          <span>PROJECT LAB / {String(projects.length).padStart(2, "0")}</span>

          <span>
            SELECTED / {selectedProject.number}
          </span>
        </div>
      </div>
    </section>
  );
}

export default ProjectLab;