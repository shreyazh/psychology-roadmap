import { SiteHeader } from "@/components/site-header"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const stages = [
  {
    title: "Foundations",
    items: [
      { label: "History & Methods", href: "/challenges/replication-crisis" },
      { label: "Ethics", href: "#" },
    ],
  },
  {
    title: "Schools & Approaches",
    items: [
      { label: "Psychoanalysis", href: "/schools/psychoanalysis" },
      { label: "Behaviorism", href: "/schools/behaviorism" },
      { label: "CBT", href: "/schools/cognitive-behavioral-therapy" },
    ],
  },
  {
    title: "Key Authors",
    items: [
      { label: "Freud", href: "/authors/freud" },
      { label: "Jung", href: "/authors/jung" },
      { label: "Pavlov", href: "/authors/pavlov" },
    ],
  },
  {
    title: "Core Ideas",
    items: [
      { label: "Unconscious Mind", href: "/ideas/unconscious-mind" },
      { label: "Classical Conditioning", href: "/ideas/classical-conditioning" },
      { label: "Defense Mechanisms", href: "/ideas/defense-mechanisms" },
    ],
  },
  {
    title: "Challenges & Debates",
    items: [
      { label: "Nature vs. Nurture", href: "/challenges/nature-vs-nurture" },
      { label: "Replication Crisis", href: "/challenges/replication-crisis" },
    ],
  },
]

export default function RoadmapPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <SectionHeader
          title="Learning Roadmap"
          subtitle="Move from foundations to modern debates with curated checkpoints."
        />
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {stages.map((stage) => (
            <Card key={stage.title} className="bg-card/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{stage.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {stage.items.map((i) => (
                  <Link
                    key={i.label}
                    href={i.href}
                    className="text-sm px-2.5 py-1.5 rounded-md bg-foreground/5 hover:bg-foreground/10"
                  >
                    {i.label}
                  </Link>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
