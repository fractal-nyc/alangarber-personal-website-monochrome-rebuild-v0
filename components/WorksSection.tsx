import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Magic: The Gathering Card Lookup",
    image: "/mtg-banner.jpg",
    description: [
      "Magic: The Gathering card lookup website",
      "Built with Angular and MTG Developers API",
      "Showcases use of routing, state, dependency injection, and pipes in Angular",
    ],
    links: {
      project: "https://alanmgarber.com/Magic-The-Gathering",
      github: "https://github.com/OldEphraim/Magic-The-Gathering",
      blog: "https://oldephraimlearnstocode.wordpress.com/2022/06/06/magic-the-gathering-card-lookup-site-code-review/",
    },
  },
  {
    title: "Travel Advisory",
    image: "/google-maps-icon.jpg",
    description: [
      "Travel advisory website",
      "Shows hotels, restaurants, and attractions near you",
      "Built with React, Google Maps API, and Travel Advisor API",
    ],
    links: {
      project: "https://alanmgarber.com/Google-Travel-Advisory",
      github: "https://github.com/OldEphraim/Google-Travel-Advisory",
      blog: "https://oldephraimlearnstocode.wordpress.com/2022/05/25/travel-advisory-project-code-review/",
    },
  },
  {
    title: "Swordle",
    image: "/placeholder.svg?height=300&width=300",
    description: [
      "Swordle; clone of popular Internet phenomenon Wordle",
      "Built with React and CSS",
      "Showcases knowledge of React hooks",
    ],
    links: {
      project: "https://alanmgarber.com/React-Wordle",
      github: "https://github.com/OldEphraim/React-Wordle",
      blog: "https://oldephraimlearnstocode.wordpress.com/2022/05/26/swordle-code-review/",
    },
  },
  {
    title: "Word Quiz",
    image: "/ready-for-a-quiz.jpeg",
    description: ["Word association game", "Built with React and Word Quiz API"],
    links: {
      project: "https://alanmgarber.com/Word-Quiz",
      github: "https://github.com/OldEphraim/Word-Quiz",
      blog: "https://oldephraimlearnstocode.wordpress.com/2022/05/27/word-quiz-code-review/",
    },
  },
]

export default function WorksSection() {
  return (
    <section id="works" className="document-section">
      <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">Projects</h2>
      <p className="text-sm mb-8 italic">
        Please note that the projects in this section have not been consistently maintained since summer 2022, and they
        reflect the level of quality I produced before gaining professional experience. Some are better than others, but
        the Tarot Project is the best reflection of where my skills are right now.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="border border-black">
            <div className="p-4">
              <div className="relative w-full h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover border border-black"
                />
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
              <a href={project.links.blog} target="_blank" rel="noreferrer">
                <Button variant="outline" className="mono-button">
                  See Blogpost
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
