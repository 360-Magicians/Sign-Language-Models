import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pinky's Web Portfolio",
  description: "Personal portfolio showcasing projects and skills",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="flex-1">{children}</div>
            <footer className="border-t py-6">
              <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Pinky's Signing Model AI Projects. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
