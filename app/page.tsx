import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import TarotProject from "@/components/TarotProject"
import SkillsSection from "@/components/SkillsSection"
import WorksSection from "@/components/WorksSection"
import ContactForm from "@/components/ContactForm"
import InternshipsSection from "@/components/InternshipsSection"
export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <TarotProject />
      <SkillsSection />
      <WorksSection />
      <InternshipsSection />
      <ContactForm />
    </div>
  )
}
