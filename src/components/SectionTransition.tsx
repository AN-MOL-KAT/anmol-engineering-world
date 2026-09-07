import { motion } from "framer-motion";

type SectionTransitionProps = {
  label?: string;
  number?: string;
};

function SectionTransition({
  label,
  number,
}: SectionTransitionProps) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex w-full max-w-7xl items-center px-5 sm:px-8 lg:px-16"
    >
      <div className="relative h-px flex-1 bg-white/[0.06]">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-cyan-300/30 via-cyan-300/10 to-transparent"
        />
      </div>

      {(number || label) && (
        <div className="mx-4 hidden items-center gap-3 font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-800 sm:flex">
          {number && <span>{number}</span>}

          {number && label && (
            <span className="text-cyan-300/20">/</span>
          )}

          {label && <span>{label}</span>}
        </div>
      )}

      <div className="relative h-px flex-1 bg-white/[0.06]">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 1,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-y-0 right-0 w-full origin-right bg-gradient-to-l from-cyan-300/30 via-cyan-300/10 to-transparent"
        />
      </div>
    </div>
  );
}

export default SectionTransition;