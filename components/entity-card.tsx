import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EntityCard({
  href,
  title,
  subtitle,
  tags = [],
}: {
  href: string
  title: string
  subtitle?: string
  tags?: string[]
}) {
  return (
    <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
      <Card className="h-full bg-card/40 backdrop-blur-xl border border-border/50 hover:bg-card/60 transition-colors">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{title}</CardTitle>
          {subtitle ? <p className="text-sm text-muted-foreground line-clamp-2">{subtitle}</p> : null}
        </CardHeader>
        {tags.length ? (
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 4).map((t) => (
                <Badge key={t} variant="outline" className="border-border/60 text-xs">
                  {t}
                </Badge>
              ))}
              {tags.length > 4 ? (
                <Badge variant="secondary" className="bg-muted/60 text-xs">
                  +{tags.length - 4}
                </Badge>
              ) : null}
            </div>
          </CardContent>
        ) : null}
      </Card>
    </Link>
  )
}
