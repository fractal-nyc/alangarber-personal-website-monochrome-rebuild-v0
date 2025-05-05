"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xkgrrvzn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitMessage("Thank you for your message! I'll get back to you soon.")
        setFormState({ name: "", email: "", message: "" })
        setIsSubmitted(true)
      } else {
        setSubmitMessage("There was an error sending your message. Please try again.")
      }
    } catch {
      setSubmitMessage("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="document-section">
      <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Contact Me</h2>
      <p className="mb-6 text-sm">It&apos;ll go straight to my email, and I&apos;ll get back to you within the day.</p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div>
          <Input
            type="text"
            placeholder="Your name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="border-black"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="border-black"
          />
        </div>
        <div>
          <Textarea
            placeholder="Your message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            className="border-black min-h-[150px]"
          />
        </div>
        <div>
          {!isSubmitted ? (
            <Button type="submit" disabled={isSubmitting} variant="outline" className="mono-button">
              {isSubmitting ? "Sending..." : "Send me a message"}
            </Button>
          ) : (
            <div className="text-sm font-medium">{submitMessage}</div>
          )}
        </div>
      </form>
    </section>
  )
}
