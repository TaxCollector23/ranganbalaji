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
    "I'm a middle schooler who builds real, useful tools with AI — the kind of software I want to exist, and then ship.",
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
    "I'm a middle school student, and I got into this the backwards way — I started by vibecoding on tools like Base44 and Lovable, then taught myself to hand-write static HTML so I actually understood what was happening underneath. These days I build full-stack, using agent-driven tools like Codex and Claude Code. Almost everything on this page is something I wanted for myself first: Fracture so my own arguments hold up, Unslopify and ClaudeKeeper to smooth out the friction of working with AI agents all day. I build because something in front of me is broken or annoying, and fixing it myself is faster and a lot more satisfying than waiting for someone else to.",
    "The part I love most isn't even on a screen — I'm obsessed with hardware, from testing mini computers to taking machines apart to see how they really work to building out my workbench. Software taught me to think in systems; hardware is where I get to hold one in my hands. The same instinct runs through the rest of what I do, from cricket to quiz bowl: prepare hard, stay calm, and come out a little sharper each time.",
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
      "Paste in a speech, essay, debate case, or research paper and Fracture stress-tests the reasoning. It finds the one load-bearing claim your whole case rests on, maps how every claim and assumption connects, checks your facts against the live web before it grades, and hands back a calibrated 0–100 score with claim-by-claim ratings, an opponent attack tree, and rewrites you can paste straight back in.",
  },
  {
    name: "Trace",
    tag: "Trust layer for AI agents",
    href: "https://landing-one-hazel-88.vercel.app/",
    blurb:
      "Trace watches every file Claude Code, Codex, Cursor, and Aider touch and turns each session into a diff you can review, a policy-checked patch, a cost you can see, and a checkpoint you can undo — with three independent models double-checking the risky calls before anything ships. The same review engine runs on every pull request in CI.",
  },
  {
    name: "SimAPI",
    tag: "CI for simulations",
    href: "https://sim-api.vercel.app/",
    blurb:
      "Your solver won't tell you a run came out wrong — SimAPI will. It checks CFD, FEA, and robotics output against physical law, catching diverged runs, unit-conversion slips, sensor drift, and impossible values before the data reaches a design review or an ML pipeline. Ships as a CLI, an SDK, and a REST API with CI fail-gates.",
  },
  {
    name: "AfterCare",
    tag: "Health · built at MarinHacks",
    href: "https://marinhackstigermygoat.vercel.app/",
    blurb:
      "You get handed six pages on the way out of the hospital, on a bad day. AfterCare reads your discharge summary — a PDF or a photo — and turns it into your medications, appointments, warning signs, and a daily plan you can actually follow. Every line traces back to your own paperwork, it reads itself aloud in eleven languages, and it never invents a dose or a date.",
  },
  {
    name: "ClaudeKeeper",
    tag: "macOS · open source",
    href: "https://taxcollector23.github.io/claudekeeper",
    blurb:
      "A tiny macOS tool that keeps your Mac awake so a long Claude Code run doesn't die the moment you step away. Three commands, no admin rights, MIT-licensed — install it with npm i -g @rangan23/claudekeeper.",
  },
  {
    name: "Carbon",
    tag: "Dev tooling",
    href: "https://carbon-web-psi.vercel.app",
    blurb:
      "Point Carbon at an OpenAPI spec, a GraphQL schema, a HAR file, a Postman collection, or recorded traffic and it spins up a local, stateful replica of that API — one where a POST actually changes what the next GET returns. It's deterministic and runs fully offline, so you can build and test against an API without the real backend.",
  },
  {
    name: "Unslopify",
    tag: "Rules for AI coding agents",
    href: "https://taxcollector23.github.io/unslopify",
    blurb:
      "A set of ground rules you hand your AI coding agent before it starts, so it stops filling empty space with default slop — invented metrics, pointless gradients, feature grids nobody asked for. One question runs through all of it: why does this exist? Formatted for Claude Code, Cursor, Copilot, Codex, and more.",
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
