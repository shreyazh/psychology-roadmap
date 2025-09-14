import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkList } from "@/components/link-list"

export function ChipList({ items, prefix = "" }: { items?: string[]; prefix?: string }) {
  if (!items?.length) return null
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <Badge key={s} variant="outline" className="border-border/60">
          {s}
        </Badge>
      ))}
    </div>
  )
}

export function RelationChips({
  title,
  slugs,
  basePath,
}: {
  title: string
  slugs?: string[]
  basePath: string
}) {
  if (!slugs?.length) return null
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {slugs.map((slug) => (
          <Link
            key={slug}
            href={`${basePath}/${slug}`}
            className="text-xs px-2 py-1 rounded-md bg-foreground/5 hover:bg-foreground/10"
          >
            {slug}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function ResourceSection({
  articles,
  videos,
}: {
  articles: { title: string; url: string }[]
  videos: { title: string; url: string }[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Resources</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Articles</h4>
          <LinkList items={articles?.length ? articles : []} emptyLabel="Add articles with '#'" />
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Videos</h4>
          <LinkList items={videos?.length ? videos : []} emptyLabel="Add videos with '#'" />
        </div>
      </CardContent>
    </Card>
  )
}
