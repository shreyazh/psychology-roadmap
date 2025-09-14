import { notFound } from "next/navigation"
import Link from "next/link"
import { ideas } from "@/data/ideas"
import { authors } from "@/data/authors"
import { schools } from "@/data/schools"
import { SectionHeader } from "@/components/section-header"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { ChipList, RelationChips, ResourceSection } from "@/components/entity-sections"

export default function IdeaDetail({ params }: { params: { slug: string } }) {
  const idea = ideas.find((i) => i.slug === params.slug)
  if (!idea) return notFound()

  const originators = idea.originators?.map((s) => authors.find((a) => a.slug === s)) || []
  const assocSchools = idea.associatedSchools?.map((s) => schools.find((sc) => sc.slug === s)) || []

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <SectionHeader title={idea.name} subtitle={idea.brief} />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card className="md:col-span-2">
            <CardContent className="p-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {idea.domain ? (
                  <div>
                    <h4 className="text-sm font-medium">Domain</h4>
                    <p className="text-sm text-muted-foreground">{idea.domain}</p>
                  </div>
                ) : null}
                {idea.tags?.length ? (
                  <div>
                    <h4 className="text-sm font-medium">Tags</h4>
                    <ChipList items={idea.tags} />
                  </div>
                ) : null}
              </div>

              {originators.length ? (
                <div>
                  <h4 className="text-sm font-medium mb-2">Originators</h4>
                  <div className="flex flex-wrap gap-2">
                    {originators.map((a) =>
                      a ? (
                        <Link
                          key={a.slug}
                          href={`/authors/${a.slug}`}
                          className="text-xs px-2 py-1 rounded-md bg-foreground/5 hover:bg-foreground/10"
                        >
                          {a.name}
                        </Link>
                      ) : null,
                    )}
                  </div>
                </div>
              ) : null}

              {assocSchools.length ? (
                <div>
                  <h4 className="text-sm font-medium mb-2">Associated Schools</h4>
                  <div className="flex flex-wrap gap-2">
                    {assocSchools.map((s) =>
                      s ? (
                        <Link
                          key={s.slug}
                          href={`/schools/${s.slug}`}
                          className="text-xs px-2 py-1 rounded-md bg-foreground/5 hover:bg-foreground/10"
                        >
                          {s.name}
                        </Link>
                      ) : null,
                    )}
                  </div>
                </div>
              ) : null}

              <div className="grid sm:grid-cols-2 gap-4">
                <RelationChips title="Similar to" slugs={idea.similarities} basePath="/ideas" />
                <RelationChips title="Differs from" slugs={idea.differences} basePath="/ideas" />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <ResourceSection articles={idea.resources?.articles || []} videos={idea.resources?.videos || []} />
          </div>
        </div>
      </section>
    </main>
  )
}
