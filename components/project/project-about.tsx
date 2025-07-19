interface ProjectAboutProps {
  title: string
  paragraphs: string[]
}

export function ProjectAbout({ title, paragraphs }: ProjectAboutProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={index < paragraphs.length - 1 ? "mb-4" : ""}>
          {paragraph}
        </p>
      ))}
    </div>
  )
}
