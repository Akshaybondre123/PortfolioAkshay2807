import type React from "react"
import { ThemeProvider } from "@/component/ThemeProvider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Akshay Bondre Portfolio",
  description: "Browse all projects by Akshay Bondre, a Full Stack Developer",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
