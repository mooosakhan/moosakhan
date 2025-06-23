import optimix from "../../../../public/assets/optimix.png";
import quizMaster from "../../../../public/assets/quizMaster.png";

export const projects = [
  {
    id: 1,
    image: quizMaster,
    title: "QuizMaster : SaaS-Based Quiz Platform",
    description:
      "QuizMaster is an AI-based quiz platform for creating smart assessments with anti-cheating tools and performance tracking.",
    url: "https://quiz.afaq.dev/",
    category: "React js",
  },
  {
    id: 2,
    image:
      "https://github.com/mooosakhan/Portfolio.me/blob/main/src/assets/images/Ochi.jpg?raw=true",
    title: "Ochi Design Clone",
    description:
      "A frontend website clone of the Ochi design, utilizing GSAP and React ScrollTrigger for animations.",
    url: "https://mooosakhan.github.io/ochi.design_clone/",
    category: "React js",
  },
  {
    id: 3,
    image:
      "https://github.com/mooosakhan/Portfolio.me/blob/main/src/assets/images/3DPortfolio.jpg?raw=true",
    title: "3D Portfolio Website",
    description:
      "A 3D canvas portfolio website created with Three.js for interactive and visually engaging elements.",
    url: "https://mooosakhan.github.io/Portfolio/",
    category: "typescript",
  },
  {
    id: 4,
    image: optimix,
    title: "Optimix Solution - Agenct Portfolio",
    description:
      "Built a modern, responsive agency portfolio site with clean UI to showcase services and projects.",
    url: "https://optimixsolutions.com/",
    category: "Next js/ts",
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "React js" },
  { name: "Next js/ts" },
].map((item) => ({ ...item, name: item.name.toLowerCase() }));
