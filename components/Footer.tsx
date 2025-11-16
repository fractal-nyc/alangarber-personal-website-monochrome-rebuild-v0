"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavItem = {
  name: string
  href: string
  external?: boolean
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about-me" },
  { name: "Portfolio", href: "/#works" },
  { name: "GitHub", href: "https://github.com/OldEphraim", external: true },
  { name: "Internships", href: "/#internships" },
  { name: "Resume", href: "https://alanmgarber.com/resume", external: true },
  { name: "Contact", href: "/#contact-form" },
  { name: "Blog", href: "https://oldephraim.substack.com", external: true },
]

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((v) => !v)

  const handleInternalAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = targetId ? document.getElementById(targetId) : document.body
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const renderItem = (item: NavItem, mobile = false) => {
    const className =
      (mobile ? "block " : "") + "hover:underline uppercase text-sm" + (mobile ? "" : " cursor-pointer")

    if (item.external) {
      return (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className={className}
          onClick={() => mobile && setIsMenuOpen(false)}
        >
          {item.name}
        </a>
      )
    }

    const isAnchor = item.href.startsWith("#")
    if (isAnchor) {
      return (
        <a
          key={item.name}
          href={item.href}
          className={className}
          onClick={(e) => handleInternalAnchor(e, item.href)}
        >
          {item.name}
        </a>
      )
    }

    return (
      <Link
        key={item.name}
        href={item.href}
        className={className}
        onClick={() => mobile && setIsMenuOpen(false)}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <footer className="py-8 border-t border-gray-200" id="Footer">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="footer-logo mb-4 md:mb-0">
          <h1 className="text-xl font-bold tracking-tight">ALAN</h1>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>{renderItem(item)}</li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 mt-4 border-t border-gray-200">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>{renderItem(item, true)}</li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  )
}
