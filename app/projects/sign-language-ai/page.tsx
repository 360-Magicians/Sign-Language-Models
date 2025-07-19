import type { Metadata } from "next"
import { ProjectHeader } from "@/components/project/project-header"
import { ProjectDemo } from "@/components/project/project-demo"
import { ProjectAbout } from "@/components/project/project-about"

export const metadata: Metadata = {
  title: "Sign Language AI Model | Pinky's Portfolio",
  description: "An interactive sign language AI model that translates sign language in real-time",
}

export default function SignLanguageAIPage() {
  const aboutParagraphs = [
    "This sign language AI model was developed to watch movies and cook with users.",
    
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <ProjectHeader
        title="Sign Language AI Model, Moni"
        description="This interactive AI model translates sign language in real-time, making communication more accessible."
      />

      <ProjectDemo
        title="Sign Language AI Model Demo"
        description="This interactive demo allows you to see the sign language translation in action."
        note="Note: The live demo is available when deployed to production."
      />

      <ProjectAbout title="About This Project" paragraphs={aboutParagraphs} />
    </div>
  )
}
