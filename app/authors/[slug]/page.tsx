import { notFound } from "next/navigation"
import Link from "next/link"
import { authors } from "@/data/authors"
import { schools } from "@/data/schools"
import { ideas } from "@/data/ideas"
import { SectionHeader } from "@/components/section-header"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { ChipList, RelationChips, ResourceSection } from "@/components/entity-sections"

export default function AuthorDetail({ params }: { params: { slug: string } }) {
  const author = authors.find((a) => a.slug === params.slug)
  if (!author) return notFound()

  const school = author.school ? schools.find((s) => s.slug === author.school) : undefined
  const keyIdeas = author.keyIdeas?.map((kid) => ideas.find((i) => i.slug === kid)?.name || kid) || []

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <SectionHeader
          title={author.name}
          subtitle={author.brief}
          action={
            school ? (
              <Link href={`/schools/${school.slug}`} className="text-teal-300 underline">
                View school
              </Link>
            ) : null
          }
        />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card className="md:col-span-2">
            <CardContent className="p-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {author.era ? (
                  <div>
                    <h4 className="text-sm font-medium">Era</h4>
                    <p className="text-sm text-muted-foreground">{author.era}</p>
                  </div>
                ) : null}
                {school ? (
                  <div>
                    <h4 className="text-sm font-medium">School</h4>
                    <Link href={`/schools/${school.slug}`} className="text-sm text-teal-300 underline">
                      {school.name}
                    </Link>
                  </div>
                ) : null}
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Key Ideas</h4>
                <ChipList items={keyIdeas} />
              </div>

              {author.notableWorks?.length ? (
                <div>
                  <h4 className="text-sm font-medium mb-2">Notable Works</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {author.notableWorks.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="grid sm:grid-cols-2 gap-4">
                <RelationChips title="Influences" slugs={author.influences} basePath="/authors" />
                <RelationChips title="Influenced" slugs={author.influenced} basePath="/authors" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <RelationChips title="Similar to" slugs={author.similarities} basePath="/authors" />
                <RelationChips title="Differs from" slugs={author.differences} basePath="/authors" />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <ResourceSection articles={author.resources?.articles || []} videos={author.resources?.videos || []} />
          </div>
        </div>
      </section>
    </main>
  )
}
