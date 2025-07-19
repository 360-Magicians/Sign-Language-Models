import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureItem } from "./feature-item"
import type { LucideIcon } from "lucide-react"

interface Section {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

interface CustomizationTabProps {
  title: string
  description: string
  sections: Section[]
}

export function CustomizationTab({ title, description, sections }: CustomizationTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {sections.map((section, index) => (
          <FeatureItem
            key={index}
            icon={section.icon}
            title={section.title}
            description={section.description}
            items={section.items}
          />
        ))}
      </CardContent>
    </Card>
  )
}
