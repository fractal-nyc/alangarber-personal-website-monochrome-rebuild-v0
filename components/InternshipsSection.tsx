import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Company logos as SVG components
const EsaiLogo = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="60" height="60" rx="5" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M30 40H70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M30 50H70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M30 60H70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M40 30V70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

const RubieLogo = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,20 80,40 80,70 50,90 20,70 20,40" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="50" cy="55" r="15" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M50 30V40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

const SteerLogo = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M50 20V80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M35 35L65 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M35 65L65 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

const companies = [
  {
    name: "ESAI",
    logo: EsaiLogo,
    points: [
      "Created a performant web scraper using Brave Search API, Playwright, and Vercel AI SDK",
      "Developed system to output formatted JSON information for downstream processing",
      "Built solution that continues to be used in production environments",
    ],
  },
  {
    name: "Rubie",
    logo: RubieLogo,
    points: [
      "Worked on frontend tickets in React and TypeScript, fixing buggy form implementations",
      "Improved communication with backend services to enhance data flow and reliability",
      "Enhanced user experience by making the website more intuitive and responsive",
    ],
  },
  {
    name: "Steer",
    logo: SteerLogo,
    points: [
      "Developed backend features in Flask and Python, integrating Twilio for customer communications",
      "Improved DevOps workflows while implementing frontend enhancements in React and TypeScript",
      "Performed database normalization in PostgreSQL to improve data integrity and performance",
    ],
  },
]

export default function InternshipsSection() {
  return (
    <section id="internships" className="document-section">
      <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight">Fractal Internships</h2>
      <p className="text-sm mb-8 italic">
        These are companies I worked for and projects I completed while I was completing the Fractal Tech bootcamp
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {companies.map((company) => (
          <Card key={company.name} className="border border-black">
            <div className="p-4 h-32 flex items-center justify-center">
              <div className="w-20 h-20">
                <company.logo />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg uppercase text-center">{company.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {company.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
