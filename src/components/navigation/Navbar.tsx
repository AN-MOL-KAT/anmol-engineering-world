import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { profile } from "../../data/profile";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-50 w-full px-5 py-5 sm:px-8 sm:py-7 lg:px-10">
      <div className="mx-auto flex max-w-[90rem] items-start justify-between">
        {/* Identity */}
        <button
          type="button"
          onClick={scrollToHome}
          data-cursor-hover
          className={`pointer-events-auto group flex items-center gap-3 transition-all duration-500 ${
            scrolled ? "opacity-70" : "opacity-100"
          }`}
          aria-label="Return to home"
        >
          <div className="flex h-9 w-9 items-center justify-center border border-cyan-300/30 bg-[#050608]/60 font-mono text-[10px] text-cyan-300 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-300/[0.06]">
            AK
          </div>

          <div className="hidden text-left sm:block">
            <div className="font-mono text-[10px] tracking-[0.15em] text-zinc-200">
              ANMOL
            </div>

            <div className="mt-0.5 font-mono text-[7px] tracking-[0.25em] text-zinc-700">
              ENGINEERING WORLD
            </div>
          </div>
        </button>

        {/* Minimal Status */}
        <div
          className={`pointer-events-auto flex items-center gap-4 transition-all duration-500 ${
            scrolled ? "opacity-60" : "opacity-100"
          }`}
        >
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />

            <span className="font-mono text-[8px] tracking-[0.2em] text-zinc-600">
              SYSTEM ONLINE
            </span>
          </div>

          <a
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="group flex h-9 items-center gap-2 border border-white/10 bg-[#050608]/60 px-3 font-mono text-[8px] tracking-[0.15em] text-zinc-500 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04] hover:text-cyan-300"
          >
            CONTACT

            <ArrowUpRight
              size={11}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;