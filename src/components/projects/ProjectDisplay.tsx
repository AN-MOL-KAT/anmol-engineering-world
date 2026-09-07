import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../../data/projects";

interface ProjectDisplayProps {
  project: Project;
}

function ProjectDisplay({ project }: ProjectDisplayProps) {
  return (
    <div className="relative min-h-[560px] overflow-hidden border border-white/10 bg-white/[0.015]">
      {/* Technical corner markers */}
      <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-cyan-300/30" />
      <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-cyan-300/30" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-cyan-300/30" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-cyan-300/30" />

      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex h-full min-h-[560px] flex-col p-6 sm:p-8 lg:p-10"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-cyan-300/50" />

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-300">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-[0.95] tracking-[-0.04em] text-zinc-100 sm:text-4xl lg:text-5xl">
                {project.title}
              </h3>
            </div>

            <div className="shrink-0 text-right">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                System
              </span>

              <div className="mt-1 font-mono text-sm text-zinc-600">
                {project.number}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-3xl">
            <p className="text-sm leading-7 text-zinc-400 sm:text-[15px]">
              {project.description}
            </p>
          </div>

          {/* Technology stack */}
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-700">
                Technology Stack
              </span>

              <span className="h-px w-12 bg-white/10" />
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-zinc-500 transition-colors duration-300 hover:border-cyan-300/20 hover:text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering details */}
          <div className="mt-9 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-700">
                  Engineering Challenge
                </span>

                <span className="h-px flex-1 bg-white/5" />
              </div>

              <p className="mt-3 text-xs leading-6 text-zinc-500">
                {project.challenge}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-700">
                  Approach
                </span>

                <span className="h-px flex-1 bg-white/5" />
              </div>

              <p className="mt-3 text-xs leading-6 text-zinc-500">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Outcome */}
          <div className="mt-8 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-700">
                Current Outcome
              </span>

              <span className="h-px w-12 bg-white/5" />
            </div>

            <p className="mt-3 max-w-3xl text-xs leading-6 text-zinc-500">
              {project.outcome}
            </p>
          </div>

          {/* Bottom action */}
          <div className="mt-auto flex items-center justify-between gap-6 pt-9">
            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/60" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
                System Documented
              </span>
            </div>

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="group ml-auto inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04] hover:text-cyan-300"
              >
                View Repository

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ) : (
              <span className="ml-auto inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-700">
                <ExternalLink size={11} />
                Repository details coming soon
              </span>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ProjectDisplay;