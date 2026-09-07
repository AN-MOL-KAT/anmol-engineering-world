import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

type ProjectSelectorProps = {
  selectedId: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
};

function ProjectSelector({
  selectedId,
  onSelect,
}: ProjectSelectorProps) {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => {
        const isActive = project.id === selectedId;

        return (
          <button
            key={project.id}
            type="button"
            onClick={() => onSelect(project.id)}
            data-cursor-hover
            aria-label={`View ${project.title}`}
            aria-pressed={isActive}
            className="group relative border-b border-white/[0.07] text-left"
          >
            <motion.div
              animate={{
                paddingLeft: isActive ? 18 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex items-center justify-between py-5 sm:py-6"
            >
              {/* Active indicator */}
              <motion.span
                initial={false}
                animate={{
                  width: isActive ? 3 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-0 top-0 h-full bg-cyan-300"
              />

              <div className="flex min-w-0 items-center gap-4">
                <span
                  className={`shrink-0 font-mono text-[8px] tracking-[0.15em] transition-colors duration-300 ${
                    isActive
                      ? "text-cyan-300"
                      : "text-zinc-800 group-hover:text-zinc-500"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <div
                    className={`truncate text-sm tracking-[-0.015em] transition-colors duration-300 sm:text-base ${
                      isActive
                        ? "text-zinc-100"
                        : "text-zinc-500 group-hover:text-zinc-300"
                    }`}
                  >
                    {project.title}
                  </div>

                  <div
                    className={`mt-1 font-mono text-[7px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive
                        ? "text-zinc-600"
                        : "text-zinc-800 group-hover:text-zinc-700"
                    }`}
                  >
                    {project.category}
                  </div>
                </div>
              </div>

              <motion.div
                animate={{
                  x: isActive ? 0 : -4,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="ml-4 shrink-0"
              >
                <ArrowUpRight
                  size={14}
                  className="text-cyan-300"
                />
              </motion.div>
            </motion.div>

            {/* Hover sweep */}
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
                isActive
                  ? "bg-cyan-300/[0.035]"
                  : "bg-cyan-300/[0.02] opacity-0 group-hover:opacity-100"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

export default ProjectSelector;