import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Project icons as SVG components (black & white only)
const ApacenIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Top: WS ingest */}
    <rect
      x="60"
      y="20"
      width="80"
      height="28"
      rx="4"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <text
      x="100"
      y="38"
      textAnchor="middle"
      fontSize="10"
      fontFamily="monospace"
    >
      WS INGEST
    </text>

    {/* Middle: DB */}
    <rect
      x="50"
      y="70"
      width="100"
      height="34"
      rx="4"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <text
      x="100"
      y="90"
      textAnchor="middle"
      fontSize="10"
      fontFamily="monospace"
    >
      POSTGRES
    </text>

    {/* Down arrow */}
    <line
      x1="100"
      y1="48"
      x2="100"
      y2="70"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="95"
      y1="65"
      x2="100"
      y2="70"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="105"
      y1="65"
      x2="100"
      y2="70"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Fan-out boxes */}
    <rect
      x="20"
      y="130"
      width="50"
      height="32"
      rx="4"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    <rect
      x="75"
      y="130"
      width="50"
      height="32"
      rx="4"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    <rect
      x="130"
      y="130"
      width="50"
      height="32"
      rx="4"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />

    {/* Fan-out labels */}
    <text
      x="45"
      y="148"
      textAnchor="middle"
      fontSize="8"
      fontFamily="monospace"
    >
      S3
    </text>
    <text
      x="100"
      y="148"
      textAnchor="middle"
      fontSize="8"
      fontFamily="monospace"
    >
      STRATS
    </text>
    <text
      x="155"
      y="148"
      textAnchor="middle"
      fontSize="8"
      fontFamily="monospace"
    >
      UI
    </text>

    {/* Lines down from DB */}
    <line
      x1="100"
      y1="104"
      x2="45"
      y2="130"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="100"
      y1="104"
      x2="100"
      y2="130"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="100"
      y1="104"
      x2="155"
      y2="130"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

const TarotIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Two overlapping tarot cards */}
    <rect
      x="60"
      y="40"
      width="70"
      height="110"
      rx="6"
      stroke="currentColor"
      strokeWidth="5"
      fill="none"
    />
    <rect
      x="80"
      y="50"
      width="70"
      height="110"
      rx="6"
      stroke="currentColor"
      strokeWidth="5"
      fill="none"
    />

    {/* Simple symbolic art on front card */}
    <circle cx="115" cy="85" r="14" stroke="currentColor" strokeWidth="4" fill="none" />
    <path
      d="M115 71L115 99"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M104 85H126"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M105 120H125"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

const MancalaIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="20"
      y="60"
      width="160"
      height="80"
      rx="5"
      stroke="currentColor"
      strokeWidth="6"
      fill="none"
    />
    {/* Left store */}
    <rect
      x="20"
      y="60"
      width="20"
      height="80"
      rx="5"
      stroke="currentColor"
      strokeWidth="6"
      fill="none"
    />
    {/* Right store */}
    <rect
      x="160"
      y="60"
      width="20"
      height="80"
      rx="5"
      stroke="currentColor"
      strokeWidth="6"
      fill="none"
    />

    {/* Top row pits */}
    <circle cx="55" cy="80" r="8" />
    <circle cx="85" cy="80" r="8" />
    <circle cx="115" cy="80" r="8" />
    <circle cx="145" cy="80" r="8" />

    {/* Bottom row pits */}
    <circle cx="55" cy="120" r="8" />
    <circle cx="85" cy="120" r="8" />
    <circle cx="115" cy="120" r="8" />
    <circle cx="145" cy="120" r="8" />

    {/* Stones in stores */}
    <circle cx="30" cy="85" r="4" />
    <circle cx="30" cy="100" r="4" />
    <circle cx="30" cy="115" r="4" />

    <circle cx="170" cy="85" r="4" />
    <circle cx="170" cy="100" r="4" />
    <circle cx="170" cy="115" r="4" />
  </svg>
)

const LinearIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="40"
      y="40"
      width="120"
      height="120"
      rx="10"
      stroke="currentColor"
      strokeWidth="6"
      fill="none"
    />
    <line
      x1="60"
      y1="70"
      x2="140"
      y2="70"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <line
      x1="60"
      y1="100"
      x2="120"
      y2="100"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <line
      x1="60"
      y1="130"
      x2="100"
      y2="130"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
)

const ImageIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="40"
      y="50"
      width="120"
      height="100"
      rx="8"
      stroke="currentColor"
      strokeWidth="6"
      fill="none"
    />
    <circle cx="70" cy="80" r="10" />
    <path d="M40 120L80 90L100 110L130 80L160 110V142C160 147.523 155.523 152 150 152H50C44.4772 152 40 147.523 40 142V120Z" />
    <circle cx="150" cy="50" r="30" stroke="currentColor" strokeWidth="6" fill="none" />
    <line
      x1="172"
      y1="72"
      x2="190"
      y2="90"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
)

const MtgIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 30L140 30C146 30 150 34 150 40V160C150 166 146 170 140 170H60C54 170 50 166 50 160V40C50 34 54 30 60 30Z"
      stroke="currentColor"
      strokeWidth="6"
      fill="none"
    />
    <path d="M70 50H130V90H70V50Z" />
    <line
      x1="70"
      y1="110"
      x2="130"
      y2="110"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="70"
      y1="130"
      x2="110"
      y2="130"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="70"
      y1="150"
      x2="90"
      y2="150"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
)

type Project = {
  title: string
  description: string[]
  links: {
    project: string
    github: string
  }
  icon: React.ComponentType
}

const projects: Project[] = [
  {
    title: "Apacen Trading – Polymarket Data Plane",
    description: [
      "High-volume ingest of Polymarket quotes & trades",
      "Go + Postgres backend with hourly partitions and COPY batching",
      "Next.js dashboard showing ingest, lag, events, and paper strategy P&L",
    ],
    links: {
      project: "https://apacen-trading.vercel.app",
      github: "https://github.com/OldEphraim/polymarket-go-connection",
    },
    icon: ApacenIcon,
  },
  {
    title: "Tarot Card Reader",
    description: [
      "Full-stack tarot reading app with generated art & explanations",
      "Go backend, React frontend, and PostgreSQL database",
      "Deployed on AWS with Nginx, emphasizing end-to-end delivery",
    ],
    links: {
      project: "https://alansarcana.com",
      github: "https://github.com/OldEphraim/tarot-project",
    },
    icon: TarotIcon,
  },
  {
    title: "Multiplayer Mancala",
    description: [
      "Real-time multiplayer Mancala board game",
      "Built with Next.js, WebSockets, and TypeScript",
      "Showcases real-time state management and game logic",
    ],
    links: {
      project: "https://mancala-old-ephraims-projects.vercel.app/",
      github:
        "https://github.com/fractal-bootcamp/alangarber-mancala-v0-rebuild",
    },
    icon: MancalaIcon,
  },
  {
    title: "Tilt Maze App",
    description: [
      "Mobile maze game controlled by device tilting",
      "Built with React Native and Expo",
      "Published on the App Store with accelerometer-based controls",
    ],
    links: {
      project: "https://apps.apple.com/us/app/alans-tilt-maze/id6745799336",
      github: "https://github.com/OldEphraim/TiltMazeApp",
    },
    icon: MtgIcon,
  },
  {
    title: "Image Lookup",
    description: [
      "Image search and lookup application",
      "Built with Next.js and image search APIs",
      "Features advanced search and a responsive gallery",
    ],
    links: {
      project: "https://nextjs-image-gallery-iota-one.vercel.app/",
      github:
        "https://github.com/fractal-bootcamp/alangarber-image-gallery",
    },
    icon: ImageIcon,
  },
  {
    title: "Linear Clone",
    description: [
      "Frontend clone of the Linear task management app",
      "Built with Next.js, React, and TypeScript",
      "Features drag-and-drop boards and responsive design",
    ],
    links: {
      project:
        "https://linear-clone-old-ephraims-projects.vercel.app/",
      github:
        "https://github.com/fractal-bootcamp/alangarber-linear-clone",
    },
    icon: LinearIcon,
  },
]

export default function WorksSection() {
  return (
    <section id="works" className="document-section">
      <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const Icon = project.icon
          return (
            <Card key={project.title} className="border border-black">
              <div className="p-4">
                <div className="relative w-full h-48 flex items-center justify-center border border-black bg-white">
                  <Icon />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg uppercase">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {project.description.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-center gap-2">
                <a
                  href={project.links.project}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" className="mono-button">
                    See Project
                  </Button>
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" className="mono-button">
                    See GitHub
                  </Button>
                </a>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
