"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about-me" },
  { name: "Portfolio", href: "#works" },
  { name: "GitHub", href: "https://github.com/OldEphraim", external: true },
  { name: "Blog", href: "https://oldephraimlearnstocode.wordpress.com", external: true },
  { name: "Resume", href: "https://alanmgarber.com/Resume", external: true },
  { name: "Contact", href: "#contact-form" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleInternalLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = targetId ? document.getElementById(targetId) : document.body

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="py-8 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <div className="header-logo">
          <h1 className="text-xl font-bold tracking-tight">ALAN</h1>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="hover:underline uppercase text-sm">
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="hover:underline uppercase text-sm cursor-pointer"
                    onClick={(e) => handleInternalLinkClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 mt-4 border-t border-gray-200">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:underline uppercase text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="block hover:underline uppercase text-sm cursor-pointer"
                    onClick={(e) => handleInternalLinkClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
