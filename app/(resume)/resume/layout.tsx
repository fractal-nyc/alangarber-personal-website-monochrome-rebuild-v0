import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./resume.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alan Garber | Software Developer",
  description: "Professional resume and portfolio of Alan Garber, Software Developer",
}

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
