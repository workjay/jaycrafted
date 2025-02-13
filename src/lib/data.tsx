import {
  NavLinkTypes,
  SocialLinkTypes,
  ExternalLinksTypes,
  ExperienceDetailTypes,
  SkillDetailTypes,
  ProjectDetailTypes,
  TestimonialDetailTypes,
} from "./types";

export const EXTERNAL_LINKS: ExternalLinksTypes = {
  GITHUB_REPO: "https://github.com/workjay/jaydepani.dev",
};

export const NAV_LINKS: NavLinkTypes[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
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

export const PROJECTS: ProjectDetailTypes[] = [
  {
    name: "Bookify.AI",
    description:
      "We built a platform that allows users to interact with PDFs, books, documents, websites, YouTube videos, and more using AI-powered chat. Designed for students, researchers, and professionals, this tool transforms the way people learn and access information by enabling seamless AI-driven conversations with various content sources.",
    url: "https://www.bookify.ai/",
    previewImage: "/images/bookify.png",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "OpenAI API",
      "Stripe",
      "Material UI",
    ],
  },
  {
    name: "Boltify.AI",
    description:
      "Boltify is a lead management system that automates meetings through cold calls and follow-ups from Google Maps. Designed for agencies, teams, startups, and B2B businesses, it streamlines lead generation and engagement with local businesses, making the process faster and more efficient.",
    url: "https://www.boltify.ai/",
    previewImage: "/images/boltify.png",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "Google Places API",
      "Stripe",
      "Material UI",
    ],
  },
  {
    name: "FinishLine.AI",
    description:
      "FinishLine is a task management system designed for efficient team collaboration. It includes time tracking, real-time chat, and an instant meeting feature for seamless communication. With a focus on productivity, it helps teams stay organized and connected.",
    url: "https://www.finishline.ai/",
    previewImage: "/images/finishline.png",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "WebRTC",
      "Stripe",
      "Material UI",
    ],
  },
  {
    name: "Care Homeopathy Clinic",
    description:
      "I developed a website for a homeopathy clinic to showcase their treatments and provide an easy way for users to get in touch through a contact form. Additionally, I integrated an AI chatbot that leverages the clinic's treatment data to answer users' health-related queries in real time, enhancing engagement and accessibility.",
    url: "http://localhost:3000/",
    previewImage: "/images/care_homeopathy_clinic.png",
    technologies: [
      "Next.js",
      "React",
      "OpenAI",
      "Voiceflow",
      "Vercel",
      "Material UI",
      "Swiper",
      "Emailjs",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetailTypes[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: "",
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: "",
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: "",
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
