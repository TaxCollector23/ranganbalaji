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
    "I'm a middle schooler building real tools with AI — usually to fix something that was getting in my own way.",
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
    "I'm a middle school student, and I got into this the backwards way — I started by vibecoding. First with tools like Base44 and Lovable, then hand-writing static HTML, and eventually full-stack, agent-driven development with Codex and Claude Code. Somewhere along the way it stopped being a hobby and turned into the main thing I do.",
    "Almost everything on this page is something I actually wanted for myself. Fracture came from wanting my own arguments to hold up. Unslopify and ClaudeKeeper came straight out of the friction of working with AI agents all day. My loop is simple: find the thing in front of me that's annoying or broken, build something that fixes it, ship it, then keep sharpening it.",
    "Away from the keyboard I play cricket, listen to way too much music, and compete in quiz bowl and other academic competitions. It's the same loop as building — prepare hard, stay calm under pressure, and try to be a little sharper every round.",
  ],
  /* short, honest signal line — no invented metrics */
  now: "Currently building Fracture Studio and open to internships, research, and people to build with.",
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

export type Activity = {
  title: string;
  meta: string;
  description: string;
};

export type ActivityGroup = {
  group: string;
  items: Activity[];
};

export const activities: ActivityGroup[] = [
  {
    group: "Cricket",
    items: [
      {
        title: "U13 NCCA Champions",
        meta: "Left-arm leg spin",
        description:
          "A left-arm leg spinner who took a three-wicket haul in the final to win the U13 NCCA championship — built on disciplined practice, control, and reading the game under pressure.",
      },
    ],
  },
  {
    group: "Academic competitions",
    items: [
      {
        title: "Quiz Bowl (NAQT)",
        meta: "Buzzer competition",
        description:
          "Fast-recall buzzer competition across history, science, literature, and the arts — team and individual rounds built on prep, repetition, and improving after every match.",
      },
      {
        title: "Academic, Humanities & Geography Bees and Bowls",
        meta: "Individual + team",
        description:
          "National-level quizzing spanning history, literature, culture, science, and world geography — mapping places, patterns, and ideas with speed and accuracy.",
      },
      {
        title: "Model United Nations",
        meta: "Research · negotiation",
        description:
          "Delegate work centered on deep research, structured negotiation, public speaking, and building consensus.",
      },
      {
        title: "Public Speaking & Debate",
        meta: "Arguments · delivery · rebuttals",
        description:
          "Constructing and defending arguments, refining delivery, and thinking on my feet under cross-examination — the same instinct behind Fracture.",
      },
    ],
  },
  {
    group: "Off the keyboard",
    items: [
      {
        title: "Carnatic Electric Guitar",
        meta: "Classical training",
        description:
          "Classical Carnatic training adapted to electric guitar — plus a lot of just listening to music.",
      },
      {
        title: "Hardware Tinkering",
        meta: "Raspberry Pi · home networks",
        description:
          "Building and experimenting with single-board computers and home networking to understand systems end to end.",
      },
    ],
  },
];
