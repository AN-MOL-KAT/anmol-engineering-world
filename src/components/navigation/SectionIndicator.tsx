import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "HOME", number: "01" },
  { id: "projects", label: "PROJECTS", number: "02" },
  { id: "skills", label: "SKILLS", number: "03" },
  { id: "journey", label: "JOURNEY", number: "04" },
  { id: "github", label: "GITHUB", number: "05" },
  { id: "about", label: "ABOUT", number: "06" },
  { id: "contact", label: "CONNECT", number: "07" },
];

function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter(
          (entry) => entry.isIntersecting,
        );

        if (visibleSections.length === 0) {
          return;
        }

        const mostVisibleSection = visibleSections.reduce(
          (current, candidate) =>
            candidate.intersectionRatio > current.intersectionRatio
              ? candidate
              : current,
        );

        setActiveSection(mostVisibleSection.target.id);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeIndex = sections.findIndex(
    (section) => section.id === activeSection,
  );

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="flex flex-col items-end gap-3">
        {sections.map((section) => {
          const isActive = section.id === activeSection;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              data-cursor-hover
              aria-label={`Go to ${section.label}`}
              aria-current={isActive ? "page" : undefined}
              className="group flex items-center gap-3"
            >
              {/* Label */}
              <span
                className={`origin-right font-mono text-[7px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive
                    ? "translate-x-0 text-cyan-300 opacity-100"
                    : "translate-x-2 text-zinc-700 opacity-0 group-hover:translate-x-0 group-hover:text-zinc-500 group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>

              {/* Number + Indicator */}
              <div className="flex items-center gap-2">
                <span
                  className={`font-mono text-[7px] transition-colors duration-300 ${
                    isActive
                      ? "text-cyan-300"
                      : "text-zinc-800 group-hover:text-zinc-600"
                  }`}
                >
                  {section.number}
                </span>

                <span
                  className={`block transition-all duration-300 ${
                    isActive
                      ? "h-px w-7 bg-cyan-300"
                      : "h-px w-3 bg-zinc-800 group-hover:w-5 group-hover:bg-zinc-600"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Progress Rail */}
      <div className="pointer-events-none absolute -right-2 top-0 hidden h-full w-px bg-white/[0.04] xl:block">
        <motion.div
          className="absolute right-0 top-0 w-px bg-cyan-300/30"
          animate={{
            height: `${((activeIndex + 1) / sections.length) * 100}%`,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </nav>
  );
}

export default SectionIndicator;