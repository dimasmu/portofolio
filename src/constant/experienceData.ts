export interface Skill {
  icon: string;
  name: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const experienceData: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      {
        icon: "⚛️",
        name: "React",
        level: "Experienced",
      },
      {
        icon: "🎨",
        name: "CSS/Tailwind",
        level: "Experienced",
      },
      {
        icon: "📱",
        name: "Responsive Design",
        level: "Experienced",
      },
      {
        icon: "📦",
        name: "Redux",
        level: "Intermediate",
      },
      {
        icon: "🎯",
        name: "TypeScript",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        icon: "🟢",
        name: "Node.js",
        level: "Experienced",
      },
      {
        icon: "🚀",
        name: "Express.js",
        level: "Experienced",
      },
      {
        icon: "🗄️",
        name: "PostgreSQL",
        level: "Intermediate",
      },
      {
        icon: "🔐",
        name: "Authentication",
        level: "Intermediate",
      },
      {
        icon: "🌐",
        name: "REST APIs",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Other Technologies",
    skills: [
      {
        icon: "🐙",
        name: "Git",
        level: "Experienced",
      },
      {
        icon: "🐳",
        name: "Docker",
        level: "Intermediate",
      },
      {
        icon: "☕",
        name: "Java",
        level: "Intermediate",
      },
      {
        icon: "🔍",
        name: "SEO",
        level: "Basic",
      },
      {
        icon: "☁️",
        name: "Cloud Services",
        level: "Intermediate",
      },
    ],
  },
];
