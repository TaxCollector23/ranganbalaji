import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Rangan Balaji",
  role: "Builder · Vibecoder · Student",
  url: "https://rangan.xyz",
  headline:
    "A student building full-stack products with AI in my free time.",
  intro:
    "Rangan Balaji is a middle school student who builds software with AI — argument engines, dev tools, and small utilities that started as fixes for his own workflow.",
  email: "ranganbalaji23@gmail.com",
  github: "https://github.com/TaxCollector23",
  githubHandle: "TaxCollector23",
  linkedin: "https://www.linkedin.com/in/rangan-balaji-0a8020404/",
  linkedinName: "Rangan Balaji",
  discord: "taxcollector23",
  discordUrl: "https://discord.com/users/1501075918918258739",
} as const;

export const socials: {
  label: string;
  handle: string;
  href: string | null;
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

export const story = {
  label: "About",
  lead: "More about me",
  paragraphs: [
    "I'm a student who spends most of my free time building full-stack products with AI coding tools like Claude Code and Codex, usually starting from something I wanted for myself.",
    "Outside of that, I play cricket and electric guitar.",
  ],
};

export type PressItem = {
  outlet: string;
  title: string;
  href: string;
};

export const press: PressItem[] = [
  {
    outlet: "Austin South Asian",
    title:
      "Austin Hosts Another Successful AMLCA National Youth Cricket Tournament",
    href: "https://www.austinsouthasian.com/post/austin-hosts-another-successful-amlca-national-youth-cricket-tournament",
  },
];

export type Project = {
  name: string;
  slug: string;
  short: string; // one line, shown on the homepage card
  href: string; // live site
  github?: string; // repo, when public
  what: string; // what it does
  why: string; // why I built it
};

/* Order is intentional — flagship first, then the rest. */
export const projects: Project[] = [
  {
    name: "Sharely",
    slug: "sharely",
    short: "Run one command and get a link anyone on your Wi-Fi can open.",
    href: "https://landing-delta-puce-72.vercel.app/",
    what:
      "Run one command and Sharely serves a folder straight from your machine and hands back a link that anyone on the same Wi-Fi can open. No sign-ups, no uploads, no accounts — the files stream directly off your computer.",
    why:
      "I was tired of re-uploading files to email or chat apps just to get them onto another device on the same network. I wanted a one-command way to share a folder with anyone nearby.",
  },
  {
    name: "AfterCare",
    slug: "aftercare",
    short: "Turns a hospital discharge summary into a plan you can follow.",
    href: "https://marinhackstigermygoat.vercel.app/",
    what:
      "AfterCare reads a discharge summary, from a PDF or a photo, and turns it into your medications, appointments, warning signs, and a daily plan. Every line traces back to your own paperwork, it reads itself aloud in several languages, and it never invents a dose or a date.",
    why:
      "Built at MarinHacks. The stack of paperwork you get leaving a hospital is dense and easy to misread on a bad day, and I wanted to make it something a person could actually act on.",
  },
  {
    name: "Trace",
    slug: "trace",
    short: "A review and safety layer for AI coding agents.",
    href: "https://trace-landing-blue.vercel.app/",
    what:
      "Trace watches the files that agents like Claude Code and Cursor touch and turns each session into a reviewable diff, a policy-checked patch, and an undoable checkpoint. Riskier changes get a second look from independent models, and the same engine can run on every pull request.",
    why:
      "I use coding agents every day, and letting them edit my repo unsupervised made me nervous. I wanted a way to see exactly what changed and roll it back in one step.",
  },
  {
    name: "Fracture Studio",
    slug: "fracture",
    short: "AI argument auditor for speeches, essays, and debate cases.",
    href: "https://fracture-studio-psi.vercel.app/",
    what:
      "You paste in a speech, essay, or debate case and Fracture stress-tests the reasoning. It finds the load-bearing claim everything rests on, fact-checks against the live web, and hands back a 0 to 100 score with an opponent attack tree and rewrites you can use right away.",
    why:
      "I do debate, and I wanted something that would poke holes in my own cases before a judge did. Reading my arguments back the way an opponent would was the fastest way to make them stronger.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

