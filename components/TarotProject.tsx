import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TarotProject() {
  return (
    <section id="TarotProject" className="document-section bg-black text-white">
      <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Tarot Card Reader</h2>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex justify-center gap-4 md:w-1/2">
          <div className="w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/the_fool.jpg"
              alt="Tarot Card 1"
              width={160}
              height={160}
              className="square-image border-white"
            />
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/king_of_pentacles.jpg"
              alt="Tarot Card 2"
              width={160}
              height={160}
              className="square-image border-white"
            />
          </div>
        </div>

        <div className="md:w-1/2 space-y-6">
          <p className="text-sm leading-relaxed">
            A full-stack tarot reading application built with Go, PostgreSQL, and React. This project showcases my
            ability to design and implement a complete web application from backend to frontend.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="https://alansarcana.com" target="_blank" rel="noreferrer">
              <Button variant="outline" className="mono-button-dark">
                See Project
              </Button>
            </a>
            <a href="https://github.com/OldEphraim/tarot-project" target="_blank" rel="noreferrer">
              <Button variant="outline" className="mono-button-dark">
                See GitHub
              </Button>
            </a>
            <a
              href="https://oldephraimlearnstocode.wordpress.com/2024/11/24/tarot-project-links/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" className="mono-button-dark">
                See Blogpost
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
