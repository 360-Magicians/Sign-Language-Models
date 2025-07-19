import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  href: string
  imageUrl?: string
}

export function ProjectCard({ title, description, href, imageUrl }: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
        {imageUrl && (
          <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-xl font-semibold group-hover:underline">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
          <div className="mt-4 flex items-center text-sm text-muted-foreground">
            <span className="flex items-center">
              View Project <ArrowUpRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
