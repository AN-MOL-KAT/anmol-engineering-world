import { lazy, Suspense } from "react";

import EngineeringBackground from "./components/background/EngineeringBackground";
import CustomCursor from "./components/cursor/CustomCursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navigation/Navbar";
import SectionIndicator from "./components/navigation/SectionIndicator";
import SectionTransition from "./components/SectionTransition";

const CommandCenter = lazy(
  () => import("./components/command/CommandCenter"),
);

const ProjectLab = lazy(
  () => import("./components/projects/ProjectLab"),
);

const SkillConstellation = lazy(
  () => import("./components/skills/SkillConstellation"),
);

const EngineeringTimeline = lazy(
  () => import("./components/journey/EngineeringTimeline"),
);

const GithubActivity = lazy(
  () => import("./components/github/GithubActivity"),
);

const About = lazy(
  () => import("./components/about/About"),
);

const Contact = lazy(
  () => import("./components/contact/Contact"),
);

function SectionFallback() {
  return (
    <div
      aria-hidden="true"
      className="min-h-[20vh]"
    />
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050608]">
      <EngineeringBackground />

      <Navbar />
      <SectionIndicator />

      <Suspense fallback={null}>
        <CommandCenter />
      </Suspense>

      <CustomCursor />

      <main className="relative z-10">
        <Hero />

        <SectionTransition number="01" label="PROJECT SYSTEMS" />

        <Suspense fallback={<SectionFallback />}>
          <ProjectLab />
        </Suspense>

        <SectionTransition number="02" label="TECHNICAL STACK" />

        <Suspense fallback={<SectionFallback />}>
          <SkillConstellation />
        </Suspense>

        <SectionTransition number="03" label="ENGINEERING JOURNEY" />

        <Suspense fallback={<SectionFallback />}>
          <EngineeringTimeline />
        </Suspense>

        <SectionTransition number="04" label="PROOF OF WORK" />

        <Suspense fallback={<SectionFallback />}>
          <GithubActivity />
        </Suspense>

        <SectionTransition number="05" label="THE ENGINEER" />

        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <SectionTransition number="06" label="COMMUNICATION" />

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;