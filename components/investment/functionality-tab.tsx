import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureItem } from "./feature-item"
import type { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FunctionalityTabProps {
  title: string
  description: string
  features: Feature[]
}

export function FunctionalityTab({ title, description, features }: FunctionalityTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </CardContent>
    </Card>
  )
}
