import { X, Gitlab } from "lucide-react";
import {
  NavLinkTypes,
  SocialLinkTypes,
  ExternalLinksTypes,
  ExperienceDetailTypes,
  SkillDetailTypes,
} from "./types";

export const EXTERNAL_LINKS: ExternalLinksTypes = {
  GITHUB_REPO: "https://github.com/workjay/jaydepani.dev",
};

export const NAV_LINKS: NavLinkTypes[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLinkTypes[] = [
  {
    icon: "/images/logos/github-light.svg",
    darkModeIcon: "/images/logos/github-dark.svg",
    url: "https://github.com/workjay",
    iconAlt: "GitHub Icon",
  },
  {
    icon: "/images/logos/gitlab.svg",
    url: "https://gitlab.com/workjay",
    iconAlt: "GitLab Icon",
  },
  {
    icon: "/images/logos/x-light.svg",
    darkModeIcon: "/images/logos/x-dark.svg",
    url: "https://x.com/depani_jay",
    iconAlt: "X Icon",
  },
];

export const EXPERIENCES: ExperienceDetailTypes[] = [
  {
    logo: "/images/logos/upwork.svg",
    logoAlt: "Upwork logo",
    position: "Freelancer",
    startDate: new Date(2024, 3),
    currentlyWorkHere: true,
    summary: [
      "After gaining valuable experience at IIH Global, I transitioned into full-time freelancing, where I worked with clients worldwide on diverse projects.",
      "As a Full-Stack Developer, I continued working with React, Next.js, Node.js, Nest.js, MySQL, and PostgreSQL while also expanding my expertise in Laravel for backend development.",
    ],
  },
  {
    logo: "/images/logos/iih-global.png",
    darkModeLogo: "/images/logos/iih-global-dark.png",
    logoAlt: "IIH Global logo",
    position: "Full Stack Developer",
    startDate: new Date(2021, 6),
    endDate: new Date(2024, 2),
    summary: [
      "I began my career as a Full-Stack Web Developer at IIH Global, where I gained hands-on experience with React, Next.js, Node.js, Nest.js, MySQL, PostgreSQL, and AWS.",
      "As my first company, IIH Global played a crucial role in shaping my technical expertise and professional growth.",
    ],
  },
];

export const SKILLS: SkillDetailTypes[] = [
  {
    label: "Javascript",
    logo: "/images/logos/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: "/images/logos/typescript.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: "/images/logos/react.svg",
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: "/images/logos/nextjs.svg",
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: "/images/logos/nodejs.svg",
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: "/images/logos/express.svg",
    darkModeLogo: "/images/logos/express-light.svg",
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: "/images/logos/nest.svg",
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: "/images/logos/socket.svg",
    darkModeLogo: "/images/logos/socket-light.svg",
    url: "https://socket.io/",
  },
  {
    label: "MySQL",
    logo: "/images/logos/mysql.svg",
    url: "https://www.mysql.com/",
  },
  {
    label: "PostgreSQL",
    logo: "/images/logos/postgresql.svg",
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: "/images/logos/mongodb.svg",
    url: "https://www.mongodb.com/",
  },
  {
    label: "Redis",
    logo: "/images/logos/redis.svg",
    url: "https://redis.io/",
  },
  {
    label: "Sequelize",
    logo: "/images/logos/sequelize.svg",
    url: "https://sequelize.org/",
  },
  {
    label: "Mongoose",
    logo: "/images/logos/mongoose.svg",
    url: "https://mongoosejs.com/",
  },
  {
    label: "HTML",
    logo: "/images/logos/html.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "CSS",
    logo: "/images/logos/css.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    label: "Sass/Scss",
    logo: "/images/logos/sass.svg",
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: "/images/logos/tailwindcss.svg",
    url: "https://tailwindcss.com/",
  },
  {
    label: "Material UI",
    logo: "/images/logos/mui.svg",
    url: "https://mui.com/",
  },
  {
    label: "Redux",
    logo: "/images/logos/redux.svg",
    url: "https://redux.js.org/",
  },
  {
    label: "Open AI",
    logo: "/images/logos/openai.svg",
    url: "https://platform.openai.com/",
  },
  {
    label: "AWS",
    logo: "/images/logos/aws.svg",
    url: "https://aws.amazon.com/",
  },
  {
    label: "Vercel",
    logo: "/images/logos/vercel.svg",
    url: "https://vercel.com/",
  },
  {
    label: "Strapi",
    logo: "/images/logos/strapi.svg",
    url: "https://strapi.io/",
  },
  {
    label: "Laravel (Basic)",
    logo: "/images/logos/laravel.svg",
    url: "https://laravel.com/",
  },
  {
    label: "Git",
    logo: "/images/logos/git.svg",
    url: "https://git-scm.com/",
  },
];
