interface ProjectHeaderProps {
  title: string
  description: string
}

export function ProjectHeader({ title, description }: ProjectHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-lg mb-4">{description}</p>
    </div>
  )
}
