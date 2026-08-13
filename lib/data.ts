import {
  Github,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Rangan Balaji",
  role: "Builder · Vibecoder · Student",
  url: "https://rangan.balajin.net",
  headline:
    "I'm a 13 year old who enjoys learning about AI and building full-stack products in my free time. I love listening to music, playing cricket, and obsessing over geography when I'm not tinkering.",
  intro:
    "Rangan Balaji is a middle school student who builds software with AI — argument engines, dev tools, and small utilities that started as fixes for his own workflow.",
  email: "rvb@balajin.net",
  github: "https://github.com/TaxCollector23",
  githubHandle: "TaxCollector23",
  linkedin: "https://www.linkedin.com/in/rangan-balaji-0a8020404/",
  linkedinName: "Rangan Balaji",
} as const;

export const socials: {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
}[] = [
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
];

/* The story that sits right below the hero — written plainly, first person. */
export const story = {
  label: "About",
  lead: "How I got here",
  paragraphs: [
    "I'm a middle school student, and I got into this backwards — I started vibecoding on tools like Base44 and Lovable, then taught myself hand-written HTML so I actually understood what was happening underneath. These days I build full-stack with agent-driven tools like Codex and Claude Code. Almost everything here started as something I wanted for myself: Fracture to keep my own arguments honest, Unslopify and ClaudeKeeper to smooth out the friction of working with AI agents. I build because something is broken or annoying, and fixing it myself beats waiting for someone else to. Off the screen, I'm obsessed with hardware — testing mini computers, taking machines apart, and building out my workbench, where software's systems thinking becomes something I can hold in my hands. The same instinct carries into cricket and quiz bowl: prepare hard, stay calm, and come out a little sharper each time.",
  ],
};

export type Project = {
  name: string;
  tag: string;
  href: string;
  blurb: string;
};

/* Order is intentional — flagship first, then the rest. */
export const projects: Project[] = [
  {
    name: "Fracture Studio",
    tag: "Argument engine",
    href: "https://fracturestudio.vercel.app/",
    blurb:
      "Paste in a speech, essay, or debate case and Fracture stress-tests the reasoning, finding the one claim everything rests on and fact-checking against the live web. It hands back a 0–100 score, an opponent attack tree, and rewrites you can use right away.",
  },
  {
    name: "Trace",
    tag: "Trust layer for AI agents",
    href: "https://landing-one-hazel-88.vercel.app/",
    blurb:
      "Trace watches every file AI coding agents like Claude Code and Cursor touch and turns each session into a reviewable diff, a policy-checked patch, and an undoable checkpoint. Three independent models double-check the risky changes before anything ships, and the same engine reviews every pull request in CI.",
  },
  {
    name: "SimAPI",
    tag: "CI for simulations",
    href: "https://sim-api.vercel.app/",
    blurb:
      "SimAPI checks CFD, FEA, and robotics output against physical law, catching diverged runs, unit slips, and impossible values before bad data reaches a design review or an ML pipeline. It ships as a CLI, an SDK, and a REST API you can wire into CI.",
  },
  {
    name: "AfterCare",
    tag: "Health · built at MarinHacks",
    href: "https://marinhackstigermygoat.vercel.app/",
    blurb:
      "AfterCare reads your hospital discharge summary — a PDF or a photo — and turns it into your medications, appointments, warning signs, and a daily plan you can actually follow. Every line traces back to your own paperwork, it reads aloud in eleven languages, and it never invents a dose or a date.",
  },
  {
    name: "ClaudeKeeper",
    tag: "macOS · open source",
    href: "https://taxcollector23.github.io/claudekeeper",
    blurb:
      "A tiny macOS tool that keeps your Mac awake so a long Claude Code run doesn't die the moment you step away. Three commands, no admin rights, and open source under MIT.",
  },
  {
    name: "Carbon",
    tag: "Dev tooling",
    href: "https://carbon-web-psi.vercel.app",
    blurb:
      "Point Carbon at an OpenAPI spec, a GraphQL schema, or recorded traffic and it spins up a local, stateful replica of that API — one where a POST actually changes what the next GET returns. It's deterministic and runs fully offline, so you can build and test without the real backend.",
  },
  {
    name: "Unslopify",
    tag: "Rules for AI coding agents",
    href: "https://taxcollector23.github.io/unslopify",
    blurb:
      "A set of ground rules you hand your AI coding agent before it starts, so it stops filling space with default slop like invented metrics and pointless gradients. One question runs through all of it: why does this exist?",
  },
];

export type LikeGroup = {
  group: string;
  items: string[];
};

/* Things I like to do — just the activities, no accomplishments. */
export const likes: LikeGroup[] = [
  {
    group: "Hardware & tinkering",
    items: [
      "Testing mini computers",
      "Taking computers apart",
      "Small & single-board computers",
      "Raspberry Pi",
      "Building out my workbench",
      "Home networking",
    ],
  },
  {
    group: "Sport",
    items: ["Cricket"],
  },
  {
    group: "Academic competitions",
    items: [
      "Quiz bowl",
      "Academic Bee & Bowl",
      "Geography Bee",
      "Model UN",
      "Debate",
    ],
  },
  {
    group: "Music",
    items: ["Electric guitar", "Listening to music"],
  },
];
