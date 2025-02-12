import { Github, X, Gitlab } from "lucide-react";
import {
  NavLinkTypes,
  SocialLinkTypes,
  ExternalLinksTypes,
  ExperienceDetailTypes,
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
    icon: Github,
    url: "https://github.com/workjay",
  },
  {
    icon: Gitlab,
    url: "https://gitlab.com/workjay",
  },
  {
    icon: X,
    url: "https://x.com/depani_jay",
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
