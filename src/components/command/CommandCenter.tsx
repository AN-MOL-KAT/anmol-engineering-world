import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Command,
  FileText,
  Mail,
  Search,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const commands = [
  {
    id: "home",
    label: "Go to Home",
    description: "Return to the beginning",
    icon: Command,
    type: "SECTION",
  },
  {
    id: "projects",
    label: "Explore Projects",
    description: "View engineering projects",
    icon: Code2,
    type: "SECTION",
  },
  {
    id: "skills",
    label: "Explore Skills",
    description: "View technical capabilities",
    icon: Code2,
    type: "SECTION",
  },
  {
    id: "journey",
    label: "View Journey",
    description: "Explore the engineering timeline",
    icon: User,
    type: "SECTION",
  },
  {
    id: "github",
    label: "GitHub Activity",
    description: "View engineering activity",
    icon: Code2,
    type: "SECTION",
  },
  {
    id: "about",
    label: "About the Engineer",
    description: "Learn more about Anmol",
    icon: User,
    type: "SECTION",
  },
  {
    id: "contact",
    label: "Contact",
    description: "Start a conversation",
    icon: Mail,
    type: "SECTION",
  },
  {
    id: "resume",
    label: "View Resume",
    description: "Open engineering resume",
    icon: FileText,
    type: "ACTION",
  },
];

export default function CommandCenter() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = commands.filter((command) => {
    const searchText = `${command.label} ${command.description}`.toLowerCase();

    return searchText.includes(query.toLowerCase());
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  const executeCommand = (command: (typeof commands)[number]) => {
    if (command.id === "resume") {
      window.open("/resume.pdf", "_blank");
      setOpen(false);
      return;
    }

    const element = document.getElementById(command.id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  const handleCommandKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      setSelectedIndex((current) =>
        Math.min(current + 1, filteredCommands.length - 1),
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setSelectedIndex((current) => Math.max(current - 1, 0));
    }

    if (event.key === "Enter" && filteredCommands.length > 0) {
      event.preventDefault();
      executeCommand(filteredCommands[selectedIndex]);
    }
  };

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 hidden items-center gap-3 border border-white/10 bg-[#050608]/80 px-4 py-3 font-mono text-[10px] tracking-wider text-zinc-500 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-400 md:flex"
        aria-label="Open command center"
      >
        <Search size={13} />

        <span>COMMAND CENTER</span>

        <span className="border border-white/10 px-1.5 py-0.5 text-[9px] text-zinc-600">
          CTRL K
        </span>
      </button>

      {/* Command Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onMouseDown={(event) => event.stopPropagation()}
              className="w-full max-w-2xl overflow-hidden border border-white/10 bg-[#08090b] shadow-2xl"
            >
              {/* Search Header */}
              <div className="flex items-center border-b border-white/10 px-5">
                <Search
                  size={18}
                  className="mr-4 shrink-0 text-cyan-400"
                />

                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleCommandKeyDown}
                  placeholder="Search the engineering world..."
                  className="h-16 w-full bg-transparent font-mono text-sm text-white outline-none placeholder:text-zinc-600"
                />

                <button
                  onClick={() => setOpen(false)}
                  className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center border border-white/10 text-zinc-600 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                  aria-label="Close command center"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[55vh] overflow-y-auto p-2">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((command, index) => {
                    const Icon = command.icon;
                    const selected = selectedIndex === index;

                    return (
                      <button
                        key={command.id}
                        onClick={() => executeCommand(command)}
                        className={`flex w-full items-center gap-4 px-4 py-4 text-left transition-colors ${
                          selected
                            ? "bg-cyan-400/10"
                            : "hover:bg-white/[0.04]"
                        }`}
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center border ${
                            selected
                              ? "border-cyan-400/40 text-cyan-400"
                              : "border-white/10 text-zinc-600"
                          }`}
                        >
                          <Icon size={16} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div
                            className={`font-mono text-xs ${
                              selected ? "text-cyan-400" : "text-white"
                            }`}
                          >
                            {command.label}
                          </div>

                          <div className="mt-1 text-xs text-zinc-600">
                            {command.description}
                          </div>
                        </div>

                        <div className="font-mono text-[9px] text-zinc-700">
                          {command.type}
                        </div>

                        {selected && (
                          <ArrowUpRight
                            size={14}
                            className="text-cyan-400"
                          />
                        )}
                      </button>
                    );
                  })
                ) : (
                  <div className="px-4 py-12 text-center">
                    <div className="font-mono text-xs text-zinc-500">
                      NO COMMANDS FOUND
                    </div>

                    <div className="mt-2 text-xs text-zinc-700">
                      Try searching for projects, skills, GitHub, resume, or
                      contact.
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[9px] text-zinc-700">
                <div className="flex gap-4">
                  <span>↑↓ NAVIGATE</span>
                  <span>ENTER SELECT</span>
                </div>

                <span>ESC CLOSE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}