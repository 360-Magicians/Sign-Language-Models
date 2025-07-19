interface ProjectDemoProps {
  title: string
  description: string
  note: string
}

export function ProjectDemo({ title, description, note }: ProjectDemoProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 overflow-hidden">
      <div className="relative aspect-video w-full bg-muted flex items-center justify-center">
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="mb-4">{description}</p>
          <p className="text-sm text-muted-foreground">{note}</p>
        </div>
      </div>
    </div>
  )
}
