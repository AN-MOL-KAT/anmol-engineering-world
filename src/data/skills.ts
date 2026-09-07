export interface Skill {
    id: string;
    name: string;
    category: string;
    level: string;
    description: string;
    projects: string[];
    connections: string[];
  }
  export const skills: Skill[] = [
    {
      id: "python",
      name: "Python",
      category: "Programming",
      level: "Core",
      description:
        "Primary programming language used for AI, machine learning, computer vision, data processing, and experimentation.",
      projects: [
        "NeuroBehaviour-Analysis",
        "YOLO Object Detection System",
        "Fake News Detection",
        "Disaster Reporting System",
        "Academic Expert Discovery",
      ],
      connections: [
        "Machine Learning",
        "Computer Vision",
        "NLP",
        "Data Analytics",
      ],
    },
    {
      id: "java",
      name: "Java",
      category: "Programming",
      level: "Core",
      description:
        "Programming language used for problem solving, object-oriented programming, and software development.",
      projects: [
        "Algorithm Practice",
        "Software Development",
      ],
      connections: [
        "Data Structures",
        "Object-Oriented Programming",
      ],
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Web",
      level: "Working",
      description:
        "Used for interactive web development and building user-facing software systems.",
      projects: [
        "Portfolio Development",
        "Web Projects",
      ],
      connections: [
        "Web Development",
        "Frontend Engineering",
      ],
    },
    {
      id: "machine-learning",
      name: "Machine Learning",
      category: "AI",
      level: "Core",
      description:
        "Used to build systems that learn patterns from data and support intelligent classification and analysis.",
      projects: [
        "Fake News Detection",
        "Academic Expert Discovery",
        "NeuroBehaviour-Analysis",
      ],
      connections: [
        "Python",
        "NLP",
        "Computer Vision",
        "Data Analytics",
      ],
    },
    {
      id: "computer-vision",
      name: "Computer Vision",
      category: "AI",
      level: "Core",
      description:
        "Area of AI focused on extracting meaningful information from images and video.",
      projects: [
        "NeuroBehaviour-Analysis",
        "YOLO Object Detection System",
      ],
      connections: [
        "Python",
        "YOLOv8",
        "OpenCV",
        "ByteTrack",
        "MediaPipe",
      ],
    },
    {
      id: "data-analytics",
      name: "Data Analytics",
      category: "Data",
      level: "Working",
      description:
        "Focused on understanding data, identifying patterns, and presenting useful insights.",
      projects: [
        "Data Analysis Experiments",
        "AI Projects",
      ],
      connections: [
        "Python",
        "Machine Learning",
        "Data Processing",
      ],
    },
    {
      id: "git",
      name: "Git / GitHub",
      category: "Engineering",
      level: "Working",
      description:
        "Used for source control, project management, collaboration, and maintaining development history.",
      projects: [
        "NeuroBehaviour-Analysis",
        "Portfolio Development",
        "Software Projects",
      ],
      connections: [
        "Version Control",
        "Collaboration",
        "Software Engineering",
      ],
    },
  ];
