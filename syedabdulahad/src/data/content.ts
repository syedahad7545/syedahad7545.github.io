export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  category: 'cs' | 'math';
  downloadUrl: string;
  readOnlineUrl: string;
}

export interface VideoCourse {
  id: string;
  title: string;
  description: string;
  category: 'cs' | 'math';
  playlistUrl: string;
  thumbnailColor: string;
}

export interface ProfileInfo {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface ResumeSection {
  title: string;
  items: {
    title: string;
    subtitle?: string;
    date?: string;
    description?: string;
  }[];
}

export const profileInfo: ProfileInfo = {
  name: "Your Name",
  tagline: "Computer Science Student",
  bio: "I am a student at FAST NUCES Islamabad. I enjoy teaching and learning complex topics.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf"
};

export const resumeData: ResumeSection[] = [
  {
    title: "Education",
    items: [
      {
        title: "BS Computer Science",
        subtitle: "FAST NUCES Islamabad",
        date: "2021 - 2025",
        description: "CGPA: 3.5/4.0 • Dean's List"
      }
    ]
  },
  {
    title: "Experience",
    items: [
      {
        title: "Teaching Assistant",
        subtitle: "FAST NUCES",
        date: "2023 - Present",
        description: "Assisted in Data Structures and Algorithms courses. Conducted lab sessions and graded assignments."
      },
      {
        title: "Software Development Intern",
        subtitle: "Tech Company",
        date: "Summer 2023",
        description: "Developed REST APIs and contributed to frontend development using React."
      }
    ]
  },
  {
    title: "Skills",
    items: [
      { title: "Languages", description: "C++, Python, JavaScript, TypeScript, Java" },
      { title: "Frameworks", description: "React, Node.js, Express, Tailwind CSS" },
      { title: "Tools", description: "Git, Docker, PostgreSQL, MongoDB" }
    ]
  },
  {
    title: "Certifications",
    items: [
      { title: "AWS Certified Cloud Practitioner", date: "2023" },
      { title: "Meta Frontend Developer Certificate", date: "2023" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Algorithm Visualizer",
    description: "An interactive web application that visualizes various sorting and pathfinding algorithms with step-by-step animations.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/algo-visualizer"
  },
  {
    id: "2",
    title: "Code Compiler",
    description: "A lightweight online compiler supporting multiple programming languages with syntax highlighting and error detection.",
    techStack: ["Node.js", "Express", "Docker", "Monaco Editor"],
    githubUrl: "https://github.com/yourusername/code-compiler"
  },
  {
    id: "3",
    title: "Study Planner",
    description: "A productivity app designed for students to manage their study schedules, track assignments, and set reminders.",
    techStack: ["React Native", "Firebase", "Redux"],
    githubUrl: "https://github.com/yourusername/study-planner"
  },
  {
    id: "4",
    title: "ML Research Assistant",
    description: "A tool that helps researchers find and organize academic papers using natural language processing.",
    techStack: ["Python", "FastAPI", "Scikit-learn", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/ml-research-assistant"
  }
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Introduction to Data Structures",
    description: "A comprehensive guide covering arrays, linked lists, stacks, queues, trees, and graphs.",
    category: "cs",
    downloadUrl: "/articles/intro-to-ds.pdf",
    readOnlineUrl: "https://example.com/articles/intro-to-ds.pdf"
  },
  {
    id: "2",
    title: "Object-Oriented Programming Principles",
    description: "Deep dive into encapsulation, inheritance, polymorphism, and abstraction with practical examples.",
    category: "cs",
    downloadUrl: "/articles/oop-principles.pdf",
    readOnlineUrl: "https://example.com/articles/oop-principles.pdf"
  },
  {
    id: "3",
    title: "Database Design Fundamentals",
    description: "Learn about normalization, ER diagrams, and SQL query optimization techniques.",
    category: "cs",
    downloadUrl: "/articles/db-design.pdf",
    readOnlineUrl: "https://example.com/articles/db-design.pdf"
  },
  {
    id: "4",
    title: "Calculus for Computer Science",
    description: "Essential calculus concepts including limits, derivatives, and integrals with CS applications.",
    category: "math",
    downloadUrl: "/articles/calculus-cs.pdf",
    readOnlineUrl: "https://example.com/articles/calculus-cs.pdf"
  },
  {
    id: "5",
    title: "Linear Algebra Essentials",
    description: "Vectors, matrices, transformations, and eigenvalues explained for ML and graphics applications.",
    category: "math",
    downloadUrl: "/articles/linear-algebra.pdf",
    readOnlineUrl: "https://example.com/articles/linear-algebra.pdf"
  },
  {
    id: "6",
    title: "Discrete Mathematics",
    description: "Logic, sets, relations, combinatorics, and graph theory for CS students.",
    category: "math",
    downloadUrl: "/articles/discrete-math.pdf",
    readOnlineUrl: "https://example.com/articles/discrete-math.pdf"
  }
];

export const videoCourses: VideoCourse[] = [
  {
    id: "1",
    title: "Programming Fundamentals",
    description: "Complete course covering variables, loops, functions, and basic problem-solving in C++.",
    category: "cs",
    playlistUrl: "https://www.youtube.com/playlist?list=example1",
    thumbnailColor: "from-blue-500 to-blue-600"
  },
  {
    id: "2",
    title: "Object-Oriented Programming",
    description: "Master OOP concepts with practical projects in Java including design patterns.",
    category: "cs",
    playlistUrl: "https://www.youtube.com/playlist?list=example2",
    thumbnailColor: "from-emerald-500 to-emerald-600"
  },
  {
    id: "3",
    title: "Data Structures & Algorithms",
    description: "In-depth coverage of DSA with complexity analysis and LeetCode problem solving.",
    category: "cs",
    playlistUrl: "https://www.youtube.com/playlist?list=example3",
    thumbnailColor: "from-purple-500 to-purple-600"
  },
  {
    id: "4",
    title: "Calculus I & II",
    description: "Comprehensive calculus course with worked examples and practice problems.",
    category: "math",
    playlistUrl: "https://www.youtube.com/playlist?list=example4",
    thumbnailColor: "from-amber-500 to-amber-600"
  },
  {
    id: "5",
    title: "Linear Algebra",
    description: "Visual approach to understanding vectors, matrices, and linear transformations.",
    category: "math",
    playlistUrl: "https://www.youtube.com/playlist?list=example5",
    thumbnailColor: "from-rose-500 to-rose-600"
  }
];
