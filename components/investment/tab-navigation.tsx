import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ReactNode } from "react"

interface Tab {
  value: string
  label: string
  content: ReactNode
}

interface TabNavigationProps {
  defaultValue: string
  tabs: Tab[]
}

export function TabNavigation({ defaultValue, tabs }: TabNavigationProps) {
  return (
    <Tabs defaultValue={defaultValue} className="mb-12">
      <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="pt-6">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
