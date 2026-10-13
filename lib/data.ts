import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Rangan Balaji",
  role: "Student · Founder · Developer",
  url: "https://rangan.xyz",
  email: "ranganbalaji23@gmail.com",
  github: "https://github.com/TaxCollector23",
  githubHandle: "TaxCollector23",
  linkedin: "https://www.linkedin.com/in/rangan-balaji-0a8020404/",
  linkedinName: "Rangan Balaji",
  discord: "taxcollector23",
  discordUrl: "https://discord.com/users/1501075918918258739",
  headline:
    "Hey, I'm Rangan. I'm 13 years old, I enjoy AI Development and tinkering with ML, and outside of that I play cricket and play the guitar.",
  intro:
    "Most of what I build starts because I run into something annoying or something I wish already existed. Usually, instead of finding some workaround, I just end up building it myself.",
} as const;

export const about = [
  "Hey, I'm Rangan. I'm 13 years old, I enjoy AI Development and tinkering with ML, and outside of that I play cricket and play the guitar.",
  "Aspiring software engineer.",
  "Most of what I build starts because I run into something annoying or something I wish already existed. Usually, instead of finding some workaround, I just end up building it myself.",
  "It normally starts as a small tool, then turns into something I think other people could use or mess around with too. Everything here is open source, so if you find something useful, fork it, change it, break it, and make sure it works however you want.",
] as const;

export const projectsIntro =
  "I've built many projects in the past, but below are some of the ones I'm most proud of. These are all something that either specifically solve a problem I have, or have been built at a hackathon, and these are still under development.";

export const stack = [
  "Codex",
  "Git",
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "CSS",
  "Next.js",
  "Vercel",
] as const;

export const socials: {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Email",
    handle: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    handle: site.githubHandle,
    href: site.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: site.linkedinName,
    href: site.linkedin,
    icon: Linkedin,
  },
  {
    label: "Discord",
    handle: site.discord,
    href: site.discordUrl,
    icon: MessageCircle,
  },
];

export type Project = {
  name: string;
  slug: string;
  short: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: "Fracture Studio",
    slug: "fracture",
    short: "AI argument auditor for speeches, essays, and debate cases.",
    href: "https://fracture-studio-psi.vercel.app/",
  },
  {
    name: "Trace",
    slug: "trace",
    short: "A review and safety layer for AI coding agents.",
    href: "https://trace-landing-blue.vercel.app/",
  },
  {
    name: "AfterCare",
    slug: "aftercare",
    short: "Turns a hospital discharge summary into a plan you can follow.",
    href: "https://marinhackstigermygoat.vercel.app/",
  },
  {
    name: "Sharely",
    slug: "sharely",
    short: "Run one command and get a link anyone on your Wi-Fi can open.",
    href: "https://landing-delta-puce-72.vercel.app/",
  },
];

// Kept for the existing sub-page components in this repository.
export const story = {
  label: "About",
  lead: "More about me",
  paragraphs: about,
};

export const press = [] as {
  outlet: string;
  title: string;
  href: string;
}[];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
