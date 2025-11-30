export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  responsibilities: string;
  technologies: string;
}

export const workExperienceData: WorkExperience[] = [
  {
    company: "PT. Mutiara Solusindo",
    position: "FULLSTACK DEVELOPER",
    period: "2019-2021",
    responsibilities: "Build application for lottemart HRIS",
    technologies: "Bootstrap, jquery, css, html, javascript, JSP, spring mvc, HQL, Sql server/Postgresql",
  },
  {
    company: "PT. Pro Sistimatika Automasi",
    position: "FULLSTACK DEVELOPER",
    period: "2021-2022",
    responsibilities: "Build application for Ministry of Trade of the Republic of Indonesia",
    technologies:
      "Node JS (express, sequelize, toad scheduler, Jspdf), React JS(react route dom, react hook, leaflet, primeface), postgresql",
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
