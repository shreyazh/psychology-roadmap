import { notFound } from "next/navigation"
import Link from "next/link"
import { schools } from "@/data/schools"
import { authors } from "@/data/authors"
import { SectionHeader } from "@/components/section-header"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { ChipList, RelationChips, ResourceSection } from "@/components/entity-sections"

export default function SchoolDetail({ params }: { params: { slug: string } }) {
  const school = schools.find((s) => s.slug === params.slug)
  if (!school) return notFound()
  const majorAuthors = school.majorAuthors?.map((slug) => authors.find((a) => a.slug === slug)).filter(Boolean) || []

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <SectionHeader title={school.name} subtitle={school.brief} />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card className="md:col-span-2">
            <CardContent className="p-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {school.period ? (
                  <div>
                    <h4 className="text-sm font-medium">Period</h4>
                    <p className="text-sm text-muted-foreground">{school.period}</p>
                  </div>
                ) : null}
                {school.corePrinciples?.length ? (
                  <div>
                    <h4 className="text-sm font-medium">Core Principles</h4>
                    <ChipList items={school.corePrinciples} />
                  </div>
                ) : null}
              </div>

              {majorAuthors.length ? (
                <div>
                  <h4 className="text-sm font-medium mb-2">Major Authors</h4>
                  <div className="flex flex-wrap gap-2">
                    {majorAuthors.map((a) => (
                      <Link
                        key={a!.slug}
                        href={`/authors/${a!.slug}`}
                        className="text-xs px-2 py-1 rounded-md bg-foreground/5 hover:bg-foreground/10"
                      >
                        {a!.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="grid sm:grid-cols-2 gap-4">
                <RelationChips title="Similar to" slugs={school.similarities} basePath="/schools" />
                <RelationChips title="Differs from" slugs={school.differences} basePath="/schools" />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <ResourceSection articles={school.resources?.articles || []} videos={school.resources?.videos || []} />
          </div>
        </div>
      </section>
    </main>
  )
}
