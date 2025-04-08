import type { StaticImageData } from "next/image";

export type ExternalLinksTypes = {
  GITHUB_REPO: string;
};

export type NavLinkTypes = {
  label: string;
  href: string;
};

export type SocialLinkTypes = {
  icon: string;
  darkModeIcon?: string;
  iconAlt: string;
  url: string;
};

export type ExperienceDetailTypes = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  url: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  currentlyWorkHere?: boolean;
  summary: string[];
  showLinkToProfileIcon?: boolean;
};

export type SkillDetailTypes = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ProjectDetailTypes = {
  name: string;
  description: string;
  url: string;
  previewImage: string;
  technologies: string[];
  title: string;
  hidden?: boolean;
};

export type TestimonialDetailTypes = {
  personName: string;
  personAvatar?: string;
  testimonial: string;
  title: string;
  rating: number;
  hidden?: boolean;
};
