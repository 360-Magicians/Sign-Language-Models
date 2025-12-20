import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { SignVisualProvider } from "@/sign-visual/providers/SignVisualProvider"
import { SignerPanel } from "@/sign-visual/components/SignerPanel"

export const metadata = {
  title: "Sign Language Visual System",
  description: "Sign language as primary interaction layer for agentic systems"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SignVisualProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <div className="flex-1 flex">
                <div className="flex-1">{children}</div>
                <aside className="w-80 border-l">
                  <SignerPanel persistent={true} />
                </aside>
              </div>
              <footer className="border-t py-6">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Sign Language Visual System. All rights reserved.
                </div>
              </footer>
            </div>
          </SignVisualProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
