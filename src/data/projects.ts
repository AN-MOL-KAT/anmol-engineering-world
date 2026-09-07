export interface Project {
    id: string;
    number: string;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    challenge: string;
    approach: string;
    outcome: string;
    featured?: boolean;
    github?: string;
  }

  export const projects: Project[] = [
    {
      id: "neurobehaviour",
      number: "01",
      title: "NeuroBehaviour-Analysis",
      category: "Computer Vision / AI",
      description:
        "A surveillance-video analysis system focused on behavioural analysis using computer vision and intelligent video processing.",

      technologies: [
        "Python",
        "YOLOv8",
        "ByteTrack",
        "MediaPipe",
        "OpenCV",
      ],

      challenge:
        "Building a reliable video-processing pipeline that can detect and track people across frames while integrating pose-based analysis.",

      approach:
        "The pipeline combines YOLOv8 person detection, ByteTrack tracking, MediaPipe-based pose processing, and OpenCV video handling.",

      outcome:
        "A working behavioural-analysis pipeline capable of processing surveillance footage and producing tracked person detections with IDs and visual annotations.",

      featured: true,
    },

    {
      id: "object-detection",
      number: "02",
      title: "YOLO Object Detection System",
      category: "Computer Vision",

      description:
        "An object detection system built around YOLO for visual recognition and analysis.",

      technologies: [
        "Python",
        "YOLO",
        "OpenCV",
      ],

      challenge:
        "Detecting visual objects reliably while keeping the processing pipeline simple enough for practical experimentation.",

      approach:
        "YOLO is used as the primary detection model with OpenCV handling image and video processing.",

      outcome:
        "A functional computer-vision system capable of detecting objects from visual input and displaying detection results.",

    },

    {
      id: "fake-news",
      number: "03",
      title: "Fake News Detection",
      category: "Machine Learning / NLP",

      description:
        "A machine-learning based system designed to classify and analyze news content.",

      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
      ],

      challenge:
        "Transforming unstructured textual news content into meaningful features that can be used for classification.",

      approach:
        "Natural language processing techniques are combined with machine-learning methods to analyze textual patterns.",

      outcome:
        "A prototype classification system for analyzing news content and identifying potentially misleading information.",

    },

    {
      id: "disaster-reporting",
      number: "04",
      title: "Disaster Reporting System",
      category: "Software / AI",

      description:
        "A system designed to support structured disaster reporting and information processing.",

      technologies: [
        "Python",
        "Web",
        "AI",
      ],

      challenge:
        "Organizing disaster-related information into a structured system that can support faster information processing.",

      approach:
        "The system combines web-based interaction with automated information processing concepts.",

      outcome:
        "A prototype platform for submitting and processing disaster-related reports.",

    },

    {
      id: "expert-discovery",
      number: "05",
      title: "Academic Expert Discovery",
      category: "AI / Search",

      description:
        "An intelligent platform for discovering academic experts and relevant research expertise.",

      technologies: [
        "Python",
        "NLP",
        "Search",
      ],

      challenge:
        "Connecting research topics and textual information with relevant academic expertise.",

      approach:
        "Natural language processing and search techniques are used to match queries with relevant research expertise.",

      outcome:
        "An intelligent discovery prototype that helps users locate researchers based on their areas of expertise.",

    },
  ];
