import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InvestmentSection } from "./investment-section"

interface Section {
  title: string
  description: string
  items?: string[]
}

interface InvestmentTabProps {
  title: string
  description: string
  sections: Section[]
  buttonText: string
}

export function InvestmentTab({ title, description, sections, buttonText }: InvestmentTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {sections.map((section, index) => (
          <InvestmentSection
            key={index}
            title={section.title}
            description={section.description}
            items={section.items}
          />
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full">{buttonText}</Button>
      </CardFooter>
    </Card>
  )
}
