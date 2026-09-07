export interface JourneyItem {
    year: string;
    phase: string;
    title: string;
    description: string;
    technologies: string[];
  }

  export const journey: JourneyItem[] = [
    {
      year: "2023",
      phase: "FOUNDATION",
      title: "Entering Computer Science",
      description:
        "Started the Computer Science Engineering journey at Cambridge Institute of Technology, building foundations in programming, problem solving, and software development.",
      technologies: [
        "Programming",
        "Data Structures",
        "Problem Solving",
      ],
    },

    {
      year: "2024",
      phase: "EXPLORATION",
      title: "Expanding the Engineering Stack",
      description:
        "Explored web development, software engineering concepts, databases, and different programming technologies while building practical projects.",
      technologies: [
        "Java",
        "JavaScript",
        "Web Development",
        "Git",
      ],
    },

    {
      year: "2025",
      phase: "INTELLIGENCE",
      title: "Moving Into AI and Data",
      description:
        "Focused increasingly on machine learning, natural language processing, data analysis, and intelligent software systems.",
      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
        "Data Analytics",
      ],
    },

    {
      year: "2026",
      phase: "COMPUTER VISION",
      title: "Building Vision-Based Systems",
      description:
        "Worked on computer-vision systems involving object detection, multi-object tracking, video processing, and behavioural analysis.",
      technologies: [
        "YOLOv8",
        "ByteTrack",
        "MediaPipe",
        "OpenCV",
      ],
    },

    {
      year: "2027",
      phase: "NEXT SYSTEM",
      title: "From Projects to Engineering",
      description:
        "The next stage is applying these foundations to larger real-world systems, professional software development, and continued exploration of intelligent technologies.",
      technologies: [
        "AI Engineering",
        "Software Systems",
        "Real-World Applications",
      ],
    },
  ];
