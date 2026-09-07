import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { profile } from "../../data/profile";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const titleX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const titleY = useTransform(smoothY, [-1, 1], [-5, 5]);

  useEffect(() => {
    let animationFrameId: number | null = null;

    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;

      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = requestAnimationFrame(() => {
        mouseX.set(targetX);
        mouseY.set(targetY);

        animationFrameId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [mouseX, mouseY]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 py-28 sm:px-8 sm:py-32 lg:px-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* System Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700 sm:mb-16 sm:text-[9px] sm:tracking-[0.25em]"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-cyan-300/30" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-300" />
            </span>

            <span className="text-zinc-500">System Online</span>
          </div>

          <div className="hidden items-center gap-5 sm:flex">
            <span>Engineering World</span>
            <span className="text-zinc-800">/</span>
            <span>01</span>
          </div>

          <span className="sm:hidden">/ 01</span>
        </motion.div>

        {/* Main Hero */}
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="min-w-0">
            {/* Role */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mb-5 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-300 sm:mb-6 sm:text-[10px] sm:tracking-[0.3em]"
            >
              {profile.role}
            </motion.p>

            {/* Name */}
            <div className="overflow-visible">
              <motion.h1
                initial={{ opacity: 0, y: 70 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  x: titleX,
                  y: titleY,
                }}
                className="text-[16vw] font-semibold leading-[0.8] tracking-[-0.075em] text-zinc-100 sm:text-[13vw] lg:text-[10rem]"
              >
                ANMOL
              </motion.h1>
            </div>

            <div className="overflow-visible">
              <motion.h1
                initial={{ opacity: 0, y: 70 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  x: titleX,
                  y: titleY,
                }}
                className="text-[15.5vw] font-semibold leading-[0.85] tracking-[-0.075em] text-zinc-100 sm:text-[13vw] lg:text-[10rem]"
              >
                KATHAYAT
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="mt-8 max-w-2xl sm:mt-10"
            >
              <p className="text-base leading-relaxed text-zinc-400 sm:text-xl">
                {profile.tagline}
              </p>
            </motion.div>

            {/* Focus Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              className="mt-6 flex flex-wrap gap-2 sm:mt-8"
            >
              {profile.focus.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.75 + index * 0.06,
                  }}
                  className="border border-white/10 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-wider text-zinc-600 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/20 hover:text-zinc-400 sm:px-3 sm:py-2 sm:text-[9px]"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* System Information */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
          >
            <div className="mb-7 sm:mb-8">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700 sm:text-[9px] sm:tracking-[0.25em]">
                Current Position
              </span>

              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Computer Science Engineering student focused on AI,
                machine learning, computer vision, and software systems.
              </p>
            </div>

            <div className="mb-7 sm:mb-8">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700 sm:text-[9px] sm:tracking-[0.25em]">
                Education
              </span>

              <p className="mt-3 text-sm text-zinc-400">
                {profile.college}
              </p>

              <p className="mt-1 font-mono text-[10px] text-zinc-700">
                {profile.startYear} — {profile.graduationYear}
              </p>
            </div>

            <div>
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700 sm:text-[9px] sm:tracking-[0.25em]">
                Availability
              </span>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="font-mono text-[10px] tracking-[0.15em] text-zinc-500">
                  {profile.status}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom System Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="mt-14 flex flex-col gap-7 border-t border-white/10 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-700 sm:flex sm:flex-wrap sm:gap-x-8 sm:text-[9px] sm:tracking-[0.2em]">
            <span>{profile.location}</span>

            <span>
              CSE {profile.startYear}—{profile.graduationYear}
            </span>

            <span className="col-span-2 sm:col-span-1">
              CGPA {profile.cgpa}
            </span>
          </div>

          <button
            type="button"
            data-cursor-hover
            onClick={scrollToProjects}
            className="group flex w-fit items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-cyan-300 sm:text-[10px]"
          >
            Explore System

            <span className="flex h-8 w-8 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/[0.05]">
              <ArrowDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </span>
          </button>
        </motion.div>

        {/* Small Coordinate Marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="mt-8 hidden items-center justify-between font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-800 sm:flex"
        >
          <span>NODE / AK-01</span>

          <span className="flex items-center gap-3">
            <span>AI / SYSTEMS / VISION</span>
            <ArrowUpRight size={10} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;