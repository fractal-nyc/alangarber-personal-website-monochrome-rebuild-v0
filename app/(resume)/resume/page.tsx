"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"

export default function ResumePage() {
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with theme toggle and print button */}
      <div className="fixed top-0 right-0 p-4 flex gap-2 z-10 print:hidden">
        <ThemeToggle />
        <Button variant="outline" size="sm" onClick={handlePrint} className="flex items-center gap-1">
          <Printer className="h-4 w-4" />
          <span>Print</span>
        </Button>
      </div>

      <div className="container max-w-2xl mx-auto py-12 px-4">
        {/* Personal Info */}
        <div className="mb-8 print:mb-3">
          <h1 className="text-2xl font-bold mb-1 print:text-xl print:mb-0">Alan Garber</h1>
          <p className="text-base mb-4 print:text-sm print:mb-2">Full‑Stack & AI Engineer</p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm print:text-xs print:gap-2 print:flex-row">
            <div className="flex items-center gap-2 print:gap-1">
              <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 print:h-3 print:w-3" />
              <span>Brooklyn, NY</span>
            </div>
            <div className="flex items-center gap-2 print:gap-1">
              <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0 print:h-3 print:w-3" />
              <span>(440) 523-9475</span>
            </div>
            <div className="flex items-center gap-2 print:gap-1">
              <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0 print:h-3 print:w-3" />
              <span>a8garber@yahoo.com</span>
            </div>
          </div>

          <div className="mt-4 text-sm print:text-xs print:mt-2">
            <span className="font-medium">Links: </span>
            <Link href="https://alansarcana.com/" target="_blank" className="hover:underline">
              Full‑Stack Project
            </Link>{" "}
            |{" "}
            <Link href="https://github.com/OldEphraim/" target="_blank" className="hover:underline">
              GitHub
            </Link>{" "}
            |{" "}
            <Link href="https://oldephraimlearnstocode.wordpress.com" target="_blank" className="hover:underline">
              Personal Blog
            </Link>{" "}
            |{" "}
            <Link href="https://alanmgarber.com/" target="_blank" className="hover:underline">
              Personal Homepage
            </Link>
          </div>
        </div>

        {/* Summary Section */}
        <section className="mb-8 print:mb-3">
          <h2 className="text-base font-semibold mb-2 print:text-sm print:mb-1">Summary</h2>
          <Separator className="mb-4 print:mb-2" />
          <p className="text-sm print:text-xs">
            Builder now, lawyer once. I ship production‑grade features end‑to‑end—from React front‑ends and
            Python/Golang services to PostgreSQL schemas—then wire in generative‑AI so the product feels like magic.
            I&apos;ve done this in scrappy, 0→1 environments for multiple venture‑backed startups and contracting clients.
            NY‑bar‑admitted; bring a sharp eye for privacy, compliance, and deal‑making.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-8 print:mb-3">
          <h2 className="text-base font-semibold mb-2 print:text-sm print:mb-1">Experience</h2>
          <Separator className="mb-4 print:mb-2" />

          <div className="space-y-6 print:space-y-3">
            <div>
              <div className="flex flex-col sm:flex-row justify-between mb-1 print:mb-0">
                <h3 className="font-medium print:text-xs">Fractal Tech (Steer) – Software Developer (Externship)</h3>
                <span className="text-muted-foreground text-sm print:text-xs">Spring 2025</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between mb-3 print:mb-1">
                <span className="text-muted-foreground print:text-xs">New York City, NY</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm print:text-xs print:pl-4 print:space-y-0">
                <li>
                  Embedded in a three‑engineer pod, shipping full‑stack features weekly using Next.js, Flask,
                  PostgreSQL, SQLAlchemy.
                </li>
                <li>
                  Implemented role‑based auth and automated email workflows via SendGrid, taking the feature from spec
                  to production.
                </li>
                <li>
                  Designed clean, version‑controlled REST endpoints and wrote integration tests that caught regressions
                  before they hit users.
                </li>
                <li>Logged 50+ hrs/wk in Fractal&apos;s AI accelerator, 15-20 pull requests per week.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between mb-1 print:mb-0">
                <h3 className="font-medium print:text-xs">CHAMPtitles – Software Developer</h3>
                <span className="text-muted-foreground text-sm print:text-xs">Jul 2022 – Mar 2024</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between mb-3 print:mb-1">
                <span className="text-muted-foreground print:text-xs">Cleveland, OH (hybrid)</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm print:text-xs print:pl-4 print:space-y-0">
                <li>
                  Delivered accessible, mobile‑first React/TypeScript portals used by the WV & NJ Departments of Motor
                  Vehicles.
                </li>
                <li>
                  Wrote Cypress and Jest suites covering critical user journeys, protecting the team from shipping
                  breaking changes.
                </li>
                <li>
                  Advocated for semantic HTML & ARIA, improving Lighthouse accessibility scores and reducing support
                  tickets.
                </li>
                <li>
                  Drove sprint planning in Jira and clean Git branching, keeping feature work predictable and
                  reviewable.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between mb-1 print:mb-0">
                <h3 className="font-medium print:text-xs">
                  Whitney R. Harris World Law Institute – Research Assistant
                </h3>
                <span className="text-muted-foreground text-sm print:text-xs">Summers 2020 & 2021</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between mb-3 print:mb-1">
                <span className="text-muted-foreground print:text-xs">St. Louis, MO</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm print:text-xs print:pl-4 print:space-y-0">
                <li>
                  Analyzed WHO responses to pre‑COVID epidemics and briefed faculty on international health regulations.
                </li>
                <li>
                  Translated Russian & Uzbek foreign‑ministry releases to English to broaden the institute&apos;s
                  primary‑source base.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 print:mb-3">
          <h2 className="text-base font-semibold mb-2 print:text-sm print:mb-1">Education</h2>
          <Separator className="mb-4 print:mb-2" />

          <div className="space-y-6 print:space-y-3">
            <div>
              <div className="flex flex-col sm:flex-row justify-between mb-1 print:mb-0">
                <h3 className="font-medium print:text-xs">Washington University School of Law — J.D.</h3>
                <span className="text-muted-foreground text-sm print:text-xs">May 2022</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between mb-3 print:mb-1">
                <span className="text-muted-foreground print:text-xs">St. Louis, MO</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm print:text-xs print:pl-4 print:space-y-0">
                <li>Passed New York Bar Exam (July 2024)</li>
                <li>Patent Bar-Eligible (Category B, coursework related to Molecular Genetics minor)</li>
                <li>Scholars in Law Award · Board Member, Tech & Privacy Law Society</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between mb-1 print:mb-0">
                <h3 className="font-medium print:text-xs">Ohio State University — B.S., International Relations</h3>
                <span className="text-muted-foreground text-sm print:text-xs">Dec. 2018</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between mb-3 print:mb-1">
                <span className="text-muted-foreground print:text-xs">Columbus, OH</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm print:text-xs print:pl-4 print:space-y-0">
                <li>
                  Seven minors in science, tech, and languages (Molecular Genetics, Environmental Science,
                  Pharmaceutical Science, Communications, Russian, Spanish, History)
                </li>
                <li>Dean&apos;s List (3 semesters)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8 print:mb-3">
          <h2 className="text-base font-semibold mb-2 print:text-sm print:mb-1">Skills & Tooling</h2>
          <Separator className="mb-4 print:mb-2" />

          <div className="space-y-4 print:space-y-2">
            <div>
              <h3 className="text-sm font-medium mb-2 print:text-xs print:mb-1">Languages</h3>
              <div className="flex flex-wrap gap-1.5 print:gap-1">
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  Python
                </Badge>
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  Go
                </Badge>
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  SQL
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2 print:text-xs print:mb-1">Frameworks & DBs</h3>
              <div className="flex flex-wrap gap-1.5 print:gap-1">
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  React
                </Badge>
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  React Native
                </Badge>
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  Flask
                </Badge>
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  PostgreSQL/SQLAlchemy
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2 print:text-xs print:mb-1">Testing</h3>
              <div className="flex flex-wrap gap-1.5 print:gap-1">
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  Cypress
                </Badge>
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  Jest
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2 print:text-xs print:mb-1">DevOps</h3>
              <div className="flex flex-wrap gap-1.5 print:gap-1">
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  Git/GitHub
                </Badge>
                <Badge variant="secondary" className="font-normal print:text-xs print:py-0 print:px-1.5">
                  CI/CD pipelines
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2 print:text-xs print:mb-1">AI</h3>
              <p className="text-sm print:text-xs">
                Production‑grade integrations with OpenAI & other LLM APIs; prompt & retrieval engineering
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2 print:text-xs print:mb-1">Soft</h3>
              <p className="text-sm print:text-xs">Rapid prototyping, product‑first mindset, clear technical writing</p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-8 print:mb-3">
          <h2 className="text-base font-semibold mb-2 print:text-sm print:mb-1">Certifications</h2>
          <Separator className="mb-4 print:mb-2" />
          <p className="text-sm print:text-xs">
            Boot.dev — Back‑End Development · freeCodeCamp — Responsive Web Design, JavaScript Algorithms, Front‑End
            Development
          </p>
        </section>

        {/* Languages Section */}
        <section>
          <h2 className="text-base font-semibold mb-2 print:text-sm print:mb-1">Languages</h2>
          <Separator className="mb-4 print:mb-2" />
          <p className="text-sm print:text-xs">Russian (native) · Spanish (fluent)</p>
        </section>
      </div>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          html, body {
            font-size: 11px;
            line-height: 1.2;
            margin: 0;
            padding: 0;
          }
          
          .container {
            max-width: 100%;
            padding: 0.5cm;
            margin: 0;
          }
          
          @page {
            margin: 0.5cm;
            size: letter;
          }
          
          h1, h2, h3, h4 {
            margin-top: 0;
            margin-bottom: 0.1cm;
          }
          
          p, ul {
            margin-top: 0;
            margin-bottom: 0.1cm;
          }
          
          ul {
            padding-left: 0.5cm;
          }
          
          .badge {
            padding: 0.05cm 0.1cm;
            margin: 0.05cm;
            font-size: 8px;
          }
          
          section {
            margin-bottom: 0.2cm;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  )
}
