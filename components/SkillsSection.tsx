import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Angular,
  Golang,
  NodeJs,
  Git,
  Python,
  Sass,
} from "@/components/icons/TechIcons"

const skills = [
  { name: "HTML", icon: Html5 },
  { name: "CSS", icon: Css3 },
  { name: "JavaScript", icon: Javascript },
  { name: "React", icon: ReactLogo },
  { name: "Angular", icon: Angular },
  { name: "Golang", icon: Golang },
  { name: "Node.js", icon: NodeJs },
  { name: "Git", icon: Git },
  { name: "Python", icon: Python },
  { name: "Sass", icon: Sass },
]

export default function SkillsSection() {
  return (
    <section className="document-section">
      <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <skill.icon className="w-12 h-12" />
            <span className="mt-2 text-xs uppercase">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
