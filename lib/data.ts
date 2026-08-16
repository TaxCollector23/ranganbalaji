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
    "I'm a 13 year old who enjoys learning about AI and building full-stack products in my free time. I love listening to music, playing cricket, and obsessing over geography when I'm not tinkering.",
  intro:
    "Rangan Balaji is a middle school student who builds software with AI — argument engines, dev tools, and small utilities that started as fixes for his own workflow.",
  email: "ranganbalaji23@gmail.com",
  github: "https://github.com/TaxCollector23",
  githubHandle: "TaxCollector23",
  linkedin: "https://www.linkedin.com/in/rangan-balaji-0a8020404/",
  linkedinName: "Rangan Balaji",
  discord: "taxcollector23",
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
    href: null,
    icon: MessageCircle,
  },
];

/* Short homepage story. The longer version lives on the blog. */
export const story = {
  label: "About",
  lead: "How I got here",
  paragraphs: [
    "I'm a middle school student, and I got into this backwards. I started by vibecoding on tools like Base44 and Lovable, then taught myself to hand-write HTML so I actually understood what was underneath.",
    "Now I build full-stack with agent-driven tools like Codex and Claude Code, and almost everything here started as something I wanted for myself. I write more about how I got here, and why I built each project, on the blog.",
  ],
};

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
    name: "Fracture Studio",
    slug: "fracture",
    short: "AI argument auditor for speeches, essays, and debate cases.",
    href: "https://fracturestudio.vercel.app/",
    what:
      "You paste in a speech, essay, or debate case and Fracture stress-tests the reasoning. It finds the load-bearing claim everything rests on, fact-checks against the live web, and hands back a 0 to 100 score with an opponent attack tree and rewrites you can use right away.",
    why:
      "I do debate, and I wanted something that would poke holes in my own cases before a judge did. Reading my arguments back the way an opponent would was the fastest way to make them stronger.",
  },
  {
    name: "Trace",
    slug: "trace",
    short: "A review and safety layer for AI coding agents.",
    href: "https://landing-one-hazel-88.vercel.app/",
    what:
      "Trace watches the files that agents like Claude Code and Cursor touch and turns each session into a reviewable diff, a policy-checked patch, and an undoable checkpoint. Riskier changes get a second look from independent models, and the same engine can run on every pull request.",
    why:
      "I use coding agents every day, and letting them edit my repo unsupervised made me nervous. I wanted a way to see exactly what changed and roll it back in one step.",
  },
  {
    name: "SimAPI",
    slug: "simapi",
    short: "Sanity checks for physics, CFD, and robotics simulation output.",
    href: "https://sim-api.vercel.app/",
    what:
      "SimAPI checks simulation output against physical law and flags diverged runs, unit slips, sensor drift, and impossible values before the data reaches a design review or an ML pipeline. It ships as a CLI, an SDK, and a REST API.",
    why:
      "A solver will happily hand you a wrong answer with no warning. I wanted a guardrail that catches the obviously broken runs before anyone downstream trusts them.",
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
    name: "ClaudeKeeper",
    slug: "claudekeeper",
    short: "A tiny macOS tool that keeps long Claude Code runs alive.",
    href: "https://taxcollector23.github.io/claudekeeper",
    github: "https://github.com/TaxCollector23/claudekeeper",
    what:
      "A small macOS utility that stops your Mac from sleeping so a long agent run does not die the moment you step away. Three commands, no admin rights, and open source under MIT.",
    why:
      "I kept coming back to a dead session because my laptop had gone to sleep mid-run. It was a small, specific annoyance, so I fixed it.",
  },
  {
    name: "Carbon",
    slug: "carbon",
    short: "Spins up a local, stateful mock of any API.",
    href: "https://carbon-web-psi.vercel.app",
    what:
      "Point Carbon at an OpenAPI spec, a GraphQL schema, or recorded traffic and it spins up a local replica of that API, one where a POST actually changes what the next GET returns. It is deterministic and runs fully offline.",
    why:
      "I was tired of building against flaky staging backends. I wanted a mock that behaved like the real thing so I could work offline and get the same result every time.",
  },
  {
    name: "Unslopify",
    slug: "unslopify",
    short: "Ground rules that stop AI coding agents from writing slop.",
    href: "https://taxcollector23.github.io/unslopify",
    github: "https://github.com/TaxCollector23/unslopify",
    what:
      "A set of ground rules you hand your AI coding agent before it starts, so it stops filling space with default slop like invented metrics and pointless gradients. One question runs through all of it: why does this exist?",
    why:
      "Every agent I used kept reaching for the same generic filler. Writing the rules down once, up front, was easier than correcting the same mistakes over and over.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // display string
  summary: string;
  body: string[];
};

/* Newest first. The deeper story that used to sit on the homepage lives here. */
export const posts: BlogPost[] = [
  {
    slug: "building-with-ai-agents",
    title: "What I learned building with AI coding agents",
    date: "Feb 2026",
    summary:
      "Agents made me faster, not lazier, and most of the work moved to deciding what was worth building.",
    body: [
      "Most of what's on this site was built with AI coding agents like Claude Code and Codex. People assume that makes it easy. It makes it faster, which is not the same thing. If anything, it moved the hard part somewhere else.",
      "The first thing I learned is that agents are happy to do the wrong thing very quickly. If you're not watching, you end up with code that looks finished and isn't. It compiles, it runs, and it's still subtly wrong in a way you only find later. That's the whole reason I built Trace. I wanted to see exactly what changed in a session and undo it in one step.",
      "The second thing is that agents reach for filler when you don't tell them not to. Invented metrics, gradients nobody asked for, feature grids that exist to look busy. Left alone, an agent will pad a simple page into a fake startup landing page. Unslopify is just me writing those rules down once so I stop repeating them in every prompt.",
      "The third thing is smaller but it mattered: long runs die if your laptop goes to sleep. I lost a lot of half-finished work that way before I did anything about it. ClaudeKeeper is three commands that fix exactly that.",
      "Put together, the lesson is that the agent is fast, but you're still the one responsible. I used to think building meant typing, and now most of my time goes into reading what the agent produced, questioning it, and deciding what to throw away. The typing is the cheap part now. The judgment is the part that actually decides whether the thing is any good.",
    ],
  },
  {
    slug: "why-i-built-fracture",
    title: "Why I built Fracture Studio",
    date: "Dec 2025",
    summary:
      "I wanted a tool that would take apart my own debate cases before a judge got the chance.",
    body: [
      "Fracture Studio started with debate. I'd write a case, feel good about it, and then get taken apart in a round by an argument I should have seen coming. The frustrating part was that the weakness was always there in my own writing. I just couldn't see it because I already agreed with myself.",
      "So I wanted a tool that would do to my arguments what a good opponent does, before the round instead of during it. Fracture Studio reads a speech, essay, or debate case and looks for the claim everything else rests on. If that one falls, the whole thing falls, and that's usually where the real weakness is.",
      "It also checks facts against the live web, because a confident wrong number is worse than no number at all. Then it hands back a score, a map of how the claims connect, and an attack tree showing exactly how someone would come after it. The first version only gave a number, and a number with no reason attached is useless, so most of the work went into explaining the why behind the score.",
      "The point isn't the score. The point is reading your own argument the way someone who disagrees with you would, and fixing it while you still can. I run my cases through it before tournaments now, and it still catches things I would have walked straight into.",
    ],
  },
  {
    slug: "how-i-got-here",
    title: "How I got here, the long version",
    date: "Nov 2025",
    summary:
      "I learned to build backwards: shipping first, understanding second, and fixing my own annoyances along the way.",
    body: [
      "I'm a middle school student, and I got into building the backwards way. Most people learn the fundamentals first and build later. I did the opposite, and I don't think I'd change it.",
      "I started by vibecoding on tools like Base44 and Lovable. I could describe what I wanted and get something on screen, which was addictive, but I didn't actually understand what was happening underneath. So I made myself slow down and hand-write plain HTML and CSS until the magic turned into something I could reason about. That gap between making something work and knowing why it works is the thing I keep chasing.",
      "From there I moved into full-stack work, mostly with agent-driven tools like Codex and Claude Code. That changed how much one person can build. A lot of the projects on this site exist because I could go from an annoyance to a working tool in an afternoon instead of a month.",
      "Almost everything I've made started as something I wanted for myself. Fracture Studio came out of debate. ClaudeKeeper came out of a laptop that kept falling asleep mid-run. Unslopify came out of watching agents write the same filler over and over. I build because something in front of me is broken or slow, and fixing it myself is faster and more satisfying than waiting.",
      "Not everything worked. Plenty of my early projects broke, got abandoned, or turned out to be things nobody actually needed, including me. But every one of them taught me something the next one used, and that trade felt fair. I'd rather ship ten rough things and learn than plan one perfect thing forever.",
      "Away from the screen I'm into hardware, cricket, and quiz bowl. Different surfaces, same instinct: take something apart, figure out how it works, and come out a little sharper.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
