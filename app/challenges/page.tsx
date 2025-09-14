"use client"

import { useMemo, useState } from "react"
import { challenges } from "@/data/challenges"
import { EntityCard } from "@/components/entity-card"
import { SectionHeader } from "@/components/section-header"
import { SiteHeader } from "@/components/site-header"
import { SearchBar } from "@/components/search-bar"

export default function ChallengesIndexPage() {
  const [q, setQ] = useState("")
  const filtered = useMemo(() => {
    const term = q.toLowerCase()
    return challenges.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.brief.toLowerCase().includes(term) ||
        c.tags?.some((t) => t.toLowerCase().includes(term)),
    )
  }, [q])

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <SectionHeader
          title="Challenges & Debates"
          subtitle="Big questions, controversies, and methodological reforms."
          action={
            <div className="w-64">
              <SearchBar value={q} onChange={setQ} placeholder="Search challenges..." />
            </div>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filtered.map((c) => (
            <EntityCard
              key={c.slug}
              href={`/challenges/${c.slug}`}
              title={c.name}
              subtitle={c.brief}
              tags={c.tags || []}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
