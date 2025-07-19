import type { Metadata } from "next"
import { HeaderSection } from "@/components/investment/header-section"
import { DemoSection } from "@/components/investment/demo-section"
import { TabNavigation } from "@/components/investment/tab-navigation"
import { OverviewTab } from "@/components/investment/overview-tab"
import { FunctionalityTab } from "@/components/investment/functionality-tab"
import { CustomizationTab } from "@/components/investment/customization-tab"
import { USPTab } from "@/components/investment/usp-tab"
import { APITab } from "@/components/investment/api-tab"
import { InvestmentTab } from "@/components/investment/investment-tab"
import { ContactSection } from "@/components/investment/contact-section"
import {
  overviewData,
  functionalityData,
  customizationData,
  uspData,
  apiData,
  investmentData,
  contactData,
} from "@/data/investment-data"

export const metadata: Metadata = {
  title: "Investment Perspective | Sign Language AI Chatbot",
  description: "Investment opportunity for a revolutionary sign language AI chatbot with blockchain integration",
}

export default function InvestmentPerspective() {
  const tabs = [
    {
      value: "overview",
      label: "Overview",
      content: <OverviewTab {...overviewData} />,
    },
    {
      value: "functionality",
      label: "Functionality",
      content: <FunctionalityTab {...functionalityData} />,
    },
    {
      value: "customization",
      label: "Customization",
      content: <CustomizationTab {...customizationData} />,
    },
    {
      value: "usp",
      label: "USP",
      content: <USPTab {...uspData} />,
    },
    {
      value: "api",
      label: "API",
      content: <APITab {...apiData} />,
    },
    {
      value: "investment",
      label: "Investment",
      content: <InvestmentTab {...investmentData} />,
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <HeaderSection
          title="Investment Perspective"
          subtitle="Sign Language AI Chatbot Platform"
          description="A revolutionary AI-powered platform bridging communication gaps through sign language interpretation with blockchain-based incentives"
        />

        <DemoSection />

        <TabNavigation defaultValue="overview" tabs={tabs} />

        <ContactSection {...contactData} />
      </div>
    </div>
  )
}
