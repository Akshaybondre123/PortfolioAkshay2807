import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "../component/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Akshay Bondre | Full Stack Developer",
  description: "Portfolio of Akshay Bondre, a passionate Full Stack Developer specializing in React and Node.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

