import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Multiplayer Mancala",
    description: [
      "Real-time multiplayer Mancala board game",
      "Built with Next.js, WebSockets, and TypeScript",
      "Showcases real-time state management and game logic",
    ],
    links: {
      project: "https://mancala-old-ephraims-projects.vercel.app/",
      github: "https://github.com/fractal-bootcamp/alangarber-mancala-v0-rebuild",
    },
  },
  {
    title: "Linear Clone",
    description: [
      "Frontend clone of Linear task management app",
      "Built with Next.js, React, and TypeScript",
      "Features drag-and-drop task management and responsive design",
    ],
    links: {
      project: "https://linear-clone-old-ephraims-projects.vercel.app/",
      github: "https://github.com/fractal-bootcamp/alangarber-linear-clone",
    },
  },
  {
    title: "Image Lookup",
    description: [
      "Image search and lookup application",
      "Built with React and image search APIs",
      "Features advanced search functionality and responsive gallery",
    ],
    links: {
      project: "https://nextjs-image-gallery-iota-one.vercel.app/",
      github: "https://github.com/fractal-bootcamp/alangarber-image-gallery",
    },
  },
  {
    title: "Magic: The Gathering Card Lookup",
    description: [
      "Magic: The Gathering card lookup website",
      "Built with Angular and MTG Developers API",
      "Showcases use of routing, state, dependency injection, and pipes in Angular",
    ],
    links: {
      project: "https://alanmgarber.com/Magic-The-Gathering",
      github: "https://github.com/OldEphraim/Magic-The-Gathering",
    },
  },
]

// Project icons as SVG components
const MancalaIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="160" height="80" rx="5" stroke="currentColor" strokeWidth="6" fill="none" />
    {/* Left store */}
    <rect x="20" y="60" width="20" height="80" rx="5" stroke="currentColor" strokeWidth="6" fill="none" />
    {/* Right store */}
    <rect x="160" y="60" width="20" height="80" rx="5" stroke="currentColor" strokeWidth="6" fill="none" />

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
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="40" width="120" height="120" rx="10" stroke="currentColor" strokeWidth="6" fill="none" />
    <line x1="60" y1="70" x2="140" y2="70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <line x1="60" y1="100" x2="120" y2="100" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <line x1="60" y1="130" x2="100" y2="130" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

const ImageIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="50" width="120" height="100" rx="8" stroke="currentColor" strokeWidth="6" fill="none" />
    <circle cx="70" cy="80" r="10" />
    <path d="M40 120L80 90L100 110L130 80L160 110V142C160 147.523 155.523 152 150 152H50C44.4772 152 40 147.523 40 142V120Z" />
    <circle cx="150" cy="50" r="30" stroke="currentColor" strokeWidth="6" fill="none" />
    <line x1="172" y1="72" x2="190" y2="90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

const MtgIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M60 30L140 30C146 30 150 34 150 40V160C150 166 146 170 140 170H60C54 170 50 166 50 160V40C50 34 54 30 60 30Z"
      stroke="currentColor"
      strokeWidth="6"
      fill="none"
    />
    <path d="M70 50H130V90H70V50Z" />
    <line x1="70" y1="110" x2="130" y2="110" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="70" y1="130" x2="110" y2="130" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="70" y1="150" x2="90" y2="150" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

export default function WorksSection() {
  return (
    <section id="works" className="document-section">
      <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="border border-black">
            <div className="p-4">
              <div className="relative w-full h-48 flex items-center justify-center border border-black bg-white">
                {index === 0 && <MancalaIcon />}
                {index === 1 && <LinearIcon />}
                {index === 2 && <ImageIcon />}
                {index === 3 && <MtgIcon />}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg uppercase">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {project.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-wrap justify-center gap-2">
              <a href={project.links.project} target="_blank" rel="noreferrer">
                <Button variant="outline" className="mono-button">
                  See Project
                </Button>
              </a>
              <a href={project.links.github} target="_blank" rel="noreferrer">
                <Button variant="outline" className="mono-button">
                  See GitHub
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
