import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureItem } from "./feature-item"
import type { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  items?: string[]
}

interface APITabProps {
  title: string
  description: string
  features: Feature[]
}

export function APITab({ title, description, features }: APITabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            items={feature.items}
          />
        ))}
      </CardContent>
    </Card>
  )
}
