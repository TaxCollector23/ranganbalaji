import {
  Github,
  Linkedin,
  Code2,
  Cpu,
  Rocket,
  PenTool,
  Globe,
  MousePointerClick,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Rangan Balaji",
  role: "Builder · Developer · Student",
  url: "https://ranganbalaji.vercel.app",
  headline:
    "Building software, products, and ideas that solve real problems.",
  intro:
    "I'm Rangan Balaji, a student interested in software engineering, startups, web technologies, AI, and product development. I enjoy building applications, experimenting with new technologies, and turning ideas into working products.",
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

export const about = {
  narrative: [
    "I am interested in software engineering, product design, startups, AI, web development, and building useful technology. I enjoy learning how systems work, designing user experiences, and creating projects that move from idea to reality.",
    "My approach is simple: start with a real problem, build something that works, then refine it relentlessly. I care as much about how a product feels to use as how it's engineered underneath.",
  ],
  location: "California",
  focus: [
    "Software Engineering",
    "Product Development",
    "AI",
    "Web Applications",
  ],
  goal: "Build meaningful products and continue improving as an engineer.",
};

export const featured = {
  name: "Fracture Studio",
  status: "Active Project",
  href: "https://fracturestudio.vercel.app",
  tagline: "Argument auditing for writing, debate, and reasoning.",
  description:
    "Fracture Studio is my primary project. It focuses on building software and digital products with an emphasis on thoughtful design, usability, and technical execution. It represents my interest in combining engineering, product thinking, and creativity to build meaningful tools and experiences.",
  blocks: [
    {
      title: "Overview",
      body: "Fracture Studio is a software product studio centered on one flagship tool: an argument-auditing engine for essays, speeches, debate cases, and plans. Rather than only polishing prose, it examines the reasoning underneath — claims, evidence, assumptions, contradictions, weak links, and likely rebuttals.",
    },
    {
      title: "What I'm Building",
      body: "A focused, fast interface that takes a rough idea and turns it into something clearer, stronger, and easier to defend. It surfaces vague claims and unsupported evidence, then helps shape arguments that hold up under pressure.",
    },
    {
      title: "Why It Matters",
      body: "Good arguments should survive scrutiny. Most writing tools optimize for tone; few examine whether the logic actually holds together. Fracture targets that gap — making thinking sharper and decisions better-reasoned.",
    },
    {
      title: "Technology & Skills Involved",
      body: "Built with modern web technology and AI, combining front-end engineering, product design, and applied language models. The work spans interface design, system architecture, prompt and reasoning design, and continuous iteration based on real use.",
    },
  ],
  tech: ["Next.js", "TypeScript", "React", "AI / LLMs", "Product Design", "UI/UX"],
};

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
    group: "Competitions",
    items: [
      {
        title: "Cricket — U13 NCCA Champions",
        meta: "Left-arm leg spin bowler",
        description:
          "Competitive cricketer and left-arm leg spin bowler — part of the squad that won the U13 NCCA championship. Built on disciplined practice, control, and reading the game under pressure.",
      },
      {
        title: "Academic Bee",
        meta: "Individual buzzer competition",
        description:
          "National-level individual quizzing across history, science, literature, and the arts — built on fast recall under pressure.",
      },
      {
        title: "Academic Bowl",
        meta: "Team quizzing",
        description:
          "Team-based competition emphasizing collaboration, role specialization, and composure across fast-paced rounds.",
      },
      {
        title: "Geography Bee / Bowl",
        meta: "Places, patterns, recall",
        description:
          "Individual and team geography competition — mapping places, patterns, and global systems with speed and accuracy.",
      },
      {
        title: "Humanities Bee",
        meta: "History, literature, culture",
        description:
          "Competition spanning history, literature, philosophy, and the ideas that shaped them.",
      },
      {
        title: "NAQT Quiz Bowl",
        meta: "Practice, pressure, team rounds",
        description:
          "Competitive quiz bowl built on disciplined practice, repetition, and improving after every round.",
      },
    ],
  },
  {
    group: "Leadership & Speaking",
    items: [
      {
        title: "Model United Nations",
        meta: "Research · negotiation · diplomacy",
        description:
          "Delegate work centered on deep research, structured negotiation, public speaking, and building consensus.",
      },
      {
        title: "Public Speaking & Debate",
        meta: "Arguments, delivery, rebuttals",
        description:
          "Constructing and defending arguments, refining delivery, and thinking on my feet under cross-examination.",
      },
    ],
  },
  {
    group: "Craft & Technical",
    items: [
      {
        title: "AI & Machine Learning",
        meta: "Models, tools, applications",
        description:
          "Hands-on exploration of models and tooling — understanding what they can build and how to apply them in products.",
      },
      {
        title: "Hardware Tinkering",
        meta: "Raspberry Pi, computers, networks",
        description:
          "Building and experimenting with hardware, single-board computers, and home networking to understand systems end to end.",
      },
      {
        title: "Carnatic Electric Guitar",
        meta: "Classical training",
        description:
          "Classical Carnatic training adapted to electric guitar — discipline, practice, and structure applied to craft.",
      },
    ],
  },
];

export const interests: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Software Engineering",
    description:
      "Designing systems that are clean, reliable, and built to scale with the problem.",
    icon: Code2,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Applying models and language systems to build genuinely useful tools.",
    icon: Cpu,
  },
  {
    title: "Startups",
    description:
      "Turning ideas into products, and learning how good companies get built.",
    icon: Rocket,
  },
  {
    title: "Product Design",
    description:
      "Shaping how a product feels — flow, clarity, and the details that matter.",
    icon: PenTool,
  },
  {
    title: "Web Development",
    description:
      "Building fast, accessible, modern web experiences from front to back.",
    icon: Globe,
  },
  {
    title: "Human-Computer Interaction",
    description:
      "Understanding how people and systems meet, and making that meeting better.",
    icon: MousePointerClick,
  },
];
