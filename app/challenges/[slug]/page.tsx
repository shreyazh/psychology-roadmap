import { notFound } from "next/navigation"
import { challenges } from "@/data/challenges"
import { SectionHeader } from "@/components/section-header"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { RelationChips, ResourceSection } from "@/components/entity-sections"

export default function ChallengeDetail({ params }: { params: { slug: string } }) {
  const challenge = challenges.find((c) => c.slug === params.slug)
  if (!challenge) return notFound()

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <SectionHeader title={challenge.name} subtitle={challenge.brief} />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card className="md:col-span-2">
            <CardContent className="p-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {challenge.theme ? (
                  <div>
                    <h4 className="text-sm font-medium">Theme</h4>
                    <p className="text-sm text-muted-foreground">{challenge.theme}</p>
                  </div>
                ) : null}
                {challenge.keyQuestions?.length ? (
                  <div>
                    <h4 className="text-sm font-medium">Key Questions</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {challenge.keyQuestions.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <RelationChips title="Similar to" slugs={challenge.similarities} basePath="/challenges" />
                <RelationChips title="Differs from" slugs={challenge.differences} basePath="/challenges" />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <ResourceSection
              articles={challenge.resources?.articles || []}
              videos={challenge.resources?.videos || []}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
