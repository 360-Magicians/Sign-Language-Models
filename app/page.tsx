import { ProjectCard } from "@/components/project-card"
import { InvestmentCTA } from "@/components/investment-cta"

export default function Home() {
  return (
    <main className="container mx-auto py-12 px-4">
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6">Pinky's Local I</h1>
        <p className="text-xl">Welcome to my personal web portfolio showcasing my projects and skills.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Sign Language AI Model"
            description="An interactive AI model that translates sign language in real-time"
            href="/projects/sign-language-ai"
            imageUrl="/placeholder.svg?height=200&width=400"
          />
          {/* Add more project cards here as needed */}
        </div>
      </section>

      <InvestmentCTA />

      <section>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="prose max-w-none">
          <p>
            I'm Pinky, an full stack architect passionate about creating accessible and innovative solutions. My interests include
            artificial intelligence, web development, and accessibility technologies.
          </p>
        </div>
      </section>
    </main>
  )
}
