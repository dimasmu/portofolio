export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  responsibilities: string;
  technologies: string[];
  iconImage?: string; // Optional image icon path - if not provided or fails to load, will use default Work icon
  icon?: string; // Optional icon name for dynamic icon selection
}

export const workExperienceData: WorkExperience[] = [
  {
    company: "PT. Mutiara Solusindo",
    position: "FULLSTACK DEVELOPER",
    period: "Jun 2019 - Jun 2021",
    responsibilities: `At Mutiara Solusindo, I worked as a Full-Stack Java Developer using the Spring MVC framework for backend development and JSP with Bootstrap for the frontend. I also utilized SQL Server extensively, including stored procedures and sequential logic. I contributed to building a Human Resource Information System (HRIS) for PT LotteMart Indonesia.`,
    technologies: [
      "Bootstrap",
      "Jquery",
      "CSS",
      "HTML",
      "JavaScript",
      "JSP",
      "Spring MVC",
      "HQL",
      "SQL Server",
      "PostgreSQL",
    ],
    iconImage: "/assets/icon/mutiara.jpg",
    icon: "Business",
  },
  {
    company: "PT. Pro Sistimatika Automasi (PROSIA)",
    position: "FULLSTACK DEVELOPER",
    period: "Jun 2021 - Jun 2022",
    responsibilities: `At Prosia, I served as a Full-Stack Developer using JavaScript technologies. I developed frontend features using React (React Hooks, PrimeReact, Axios) and implemented backend services using Node.js with Express.js, Sequelize ORM, and JOI validation. I utilized PostgreSQL as the primary database. I delivered an Export/Import Licensing System for the Ministry of Trade of Indonesia.`,
    technologies: [
      "Node.js",
      "Express.js",
      "Sequelize",
      "Toad Scheduler",
      "JSPDF",
      "React.js",
      "React Router DOM",
      "React Hooks",
      "Leaflet",
      "PrimeReact",
      "PostgreSQL",
    ],
    iconImage: "/assets/icon/prosia.jpg",
    icon: "Business",
  },
  {
    company: "PT. Rect Media Komputindo (Talenavi)",
    position: "FULLSTACK DEVELOPER",
    period: "Sep 2022 - Feb 2024",
    responsibilities: `At Rect Media Komputindo, I worked as a Full-Stack Developer using PHP with the Laravel framework for backend development, and Vue.js (version 2) for the frontend. I handled both MySQL and PostgreSQL databases. I contributed to several major projects, including the Bigo Reseller Group platform, WOW Konsultan taxation system, and the official PERKI (Indonesian Heart Association) website.`,
    technologies: [
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "WebSocket (Socket.io)",
      "Node.js",
      "jQuery",
      "Vue.js 2",
      "Express.js",
    ],
    iconImage: "/assets/icon/rectmedia.jpg",
    icon: "Business",
  },
  {
    company: "PT. Sofco Graha (GajiID)",
    position: "FULLSTACK DEVELOPER",
    period: "Feb 2024 - Nov 2024",
    responsibilities: `At Sofco Graha, I joined the GajiID team, a human resources and payroll application used by multiple companies. I worked in the support and maintenance division, enhancing existing features using Angular for the frontend and Spring Boot for the backend. I utilized PostgreSQL for data management and contributed to improving core HRIS workflows.`,
    technologies: ["Angular", "Spring Boot", "Java", "PostgreSQL"],
    iconImage: "/assets/icon/sofco.jpg",
    icon: "Business",
  },
  {
    company: "PT. Tri adi bersama (Anteraja)",
    position: "FULLSTACK DEVELOPER",
    period: "Nov 2024 - Present",
    responsibilities: `At Anteraja, a leading logistics company in Indonesia, I work as a Full-Stack Developer in the Ecosystem Service Development division. I develop and maintain systems within the Mitra Anteraja project, which enables partnership locations to serve as parcel drop-off points. I utilize Java with Spring Boot for backend development and Angular for the frontend. The architecture follows a microservices approach. I also work with multiple databases including PostgreSQL, MongoDB, and MySQL, and integrate asynchronous processing through Kafka and caching through Redis.`,
    technologies: [
      "Spring Boot",
      "Java",
      "Angular",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Kafka",
      "Redis",
      "Microservices",
    ],
    iconImage: "/assets/icon/anteraja.jpg",
    icon: "Business",
  },
];

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export const educationData: Education[] = [
  {
    institution: "Dian Nuswantoro University, Indonesia",
    degree: "BACHELOR OF SCIENCE INFORMATION TECHNOLOGY",
    period: "2014-2018",
    description:
      'An informatics engineering student graduated in 2018 with a GPA of 3.37, the thesis I am writing is entitled "Bitcoin price prediction with backpropagation algorithm". This final project I made aims for crypto investors, especially in the bitcoin market, to be able to make price predictions based on the data collected',
  },
];
