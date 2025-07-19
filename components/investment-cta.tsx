import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function InvestmentCTA() {
  return (
    <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
      <h3 className="text-xl font-semibold mb-2">Interested in our Sign Language AI Project?</h3>
      <p className="mb-4 text-muted-foreground">
        Learn more about our innovative approach combining AI and blockchain technology to revolutionize sign language
        interpretation.
      </p>
      <Link href="/investment-perspective">
        <Button className="group">
          View Investment Perspective
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  )
}
