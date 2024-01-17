import {
  aframe,
  bootstrap,
  car,
  contact,
  css,
  firebase,
  freelance,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  netflix,
  nextjs,
  pricewise,
  react,
  redux,
  sass,
  startup,
  tailwindcss,
  thinkmobiles,
  threejs,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "ThreeJS",
    type: "Frontend",
  },
  {
    imageUrl: aframe,
    name: "A-Frame",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Frontend AR Developer",
    company_name: "BridgeLT",
    icon: freelance,
    iconBg: "#fce703",
    date: "March 20203 - December 23",
    points: [
      "Creating WebAR lessons based on the scripts written by the authors.",
      "Working with animations and creating my own from scratch, and working with particle systems.",
      "Working with standard React Hooks, as well as implementation and working with custom hooks.",
      "Working with changing textures and improving their visuals using the Three.js library.",
      "Improvement of the user interface by creating separate components for certain manipulations with objects or animations.",
      "UX Enhancement, adaptivity, optimization for best speed and scalability.",
      "Interaction with designers, script writers and testers to achieve the desired result.",
      "Daily status call with the team in English.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Startup",
    icon: startup,
    iconBg: "#03f8fc",
    date: "March 2022 - July 2023",
    points: [
      "Creating components, work with forms, their customization.",
      "Making suggestions about the design and functionality of the application.",
      "Working with standard React Hooks, as well as implementation and working with custom hooks.",
      "Implementing and working with the Recoil library.",
      "Work with the Firebase platform to configure authorization.",
      "Setting up the interaction between the server and the frontend via the Axios.",
      "Embedding and customizing Zulip chat functionality.",
      "UX Enhancement, adaptivity, optimization for best speed and scalability.",
      "Interaction with backend developers and testers to debug the application.",
    ],
  },
  {
    title: "Junior Frontend/ PHP Developer",
    company_name: "ThinkMobiles",
    icon: thinkmobiles,
    iconBg: "#039dfc",
    date: "January 2021 - February 2022",
    points: [
      "Creating components, work with forms, their customization.",
      "Making suggestions about the design and functionality of the application.",
      "Work with standard functions of WordPress.",
      "Implementing and configuration different plugins.",
      "Pulling layouts on the WordPress engine.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Pulse-v2",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/serhii-demianyk-70b788203/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Current portfolio",
    description: "Describe about this project",
    link: "https://github.com/Pulse-v2/3D_portfolio",
  },
  {
    iconUrl: netflix,
    theme: "btn-back-green",
    name: "NETFLIX-clone",
    description: "Describe about this project",
    link: "https://github.com/Pulse-v2/netflix-react-js",
  },
];
