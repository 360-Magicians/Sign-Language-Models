interface InvestmentSectionProps {
  title: string
  description: string
  items?: string[]
}

export function InvestmentSection({ title, description, items }: InvestmentSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {description && <p className="text-muted-foreground mb-2">{description}</p>}
      {items && items.length > 0 && (
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
