import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface OverviewTabProps {
  title: string
  description: string
  content: string[]
}

export function OverviewTab({ title, description, content }: OverviewTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </CardContent>
    </Card>
  )
}
