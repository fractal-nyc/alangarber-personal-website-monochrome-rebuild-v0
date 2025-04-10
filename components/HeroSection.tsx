"use client"

import Image from "next/image"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToWorks = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="Main" className="document-section">
      <div className="flex flex-col md:flex-row items-start gap-12 py-8">
        <div className="content flex-1 space-y-8">
          <div className="text">
            <p className="text-sm uppercase mb-2">Hey there!</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">I am Alan Garber</h1>
            <div className="p">
              <TypewriterEffect
                words={[
                  { text: "Fullstack Developer" },
                  { text: "React and Angular" },
                  { text: "Typescript, Python, and Golang" },
                  { text: "Check out my projects!" },
                ]}
                cursorClassName="bg-black"
                loop={true}
                typeSpeed={45}
                deleteSpeed={25}
                delayBetweenWords={1500}
                className="text-lg uppercase"
              />
            </div>
          </div>
          <div className="buttons flex flex-wrap gap-4">
            <Button onClick={scrollToWorks} variant="outline" className="mono-button">
              See My Work
            </Button>
            <Button onClick={scrollToContact} variant="outline" className="mono-button">
              Hire Me
            </Button>
          </div>
        </div>
        <div className="main-image flex-1 flex justify-center">
          <div className="relative w-64 h-64">
            <Image src="/me-may-2022.jpg" alt="Alan Garber" width={256} height={256} className="square-image" />
          </div>
        </div>
      </div>
    </section>
  )
}
