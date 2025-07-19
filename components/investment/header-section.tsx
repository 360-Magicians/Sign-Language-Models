interface HeaderSectionProps {
  title: string
  subtitle: string
  description: string
}

export function HeaderSection({ title, subtitle, description }: HeaderSectionProps) {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <h2 className="text-2xl font-semibold mb-6 text-primary">{subtitle}</h2>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  )
}
