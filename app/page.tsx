import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"

export default function HomePage() {
  const categories = [
    {
      href: "/roadmap",
      title: "Roadmap",
      desc: "A guided path—from foundations to advanced topics—to structure your learning.",
    },
    { href: "/authors", title: "Authors", desc: "Explore key figures, influences, and schools." },
    { href: "/schools", title: "Schools", desc: "Understand major approaches and principles." },
    { href: "/ideas", title: "Ideas", desc: "Core concepts and theories across psychology." },
    { href: "/challenges", title: "Challenges", desc: "Debates, crises, and open questions." },
  ]

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">
            Your Psychology Roadmap: explore authors, ideas, schools, and challenges
          </h1>
          <p className="text-muted-foreground mt-3">
            A versatile, growing house of resources. Dark by default. Clear structure. Add your own article and YouTube
            links as you go.
          </p>
        </div>

        <div className="mt-10">
          <SectionHeader title="Start exploring" subtitle="Browse the main sections" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {categories.map((c) => (
              <Link key={c.href} href={c.href}>
                <Card className="h-full bg-card/40 backdrop-blur-xl border border-border/50 hover:bg-card/60 transition-colors">
                  <CardContent className="p-5">
                    <h3 className="font-medium">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
