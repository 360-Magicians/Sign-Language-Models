import type { LucideIcon } from "lucide-react"

interface FeatureItemProps {
  icon: LucideIcon
  title: string
  description: string
  items?: string[]
}

export function FeatureItem({ icon: Icon, title, description, items }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="h-6 w-6 text-primary mt-1" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {items && items.length > 0 && (
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
