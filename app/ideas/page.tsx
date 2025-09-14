"use client"

import { useMemo, useState } from "react"
import { ideas } from "@/data/ideas"
import { EntityCard } from "@/components/entity-card"
import { SectionHeader } from "@/components/section-header"
import { SiteHeader } from "@/components/site-header"
import { SearchBar } from "@/components/search-bar"

export default function IdeasIndexPage() {
  const [q, setQ] = useState("")
  const filtered = useMemo(() => {
    const term = q.toLowerCase()
    return ideas.filter(
      (i) =>
        i.name.toLowerCase().includes(term) ||
        i.brief.toLowerCase().includes(term) ||
        i.tags?.some((t) => t.toLowerCase().includes(term)),
    )
  }, [q])

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <SectionHeader
          title="Ideas"
          subtitle="Concepts, mechanisms, and theories across domains."
          action={
            <div className="w-64">
              <SearchBar value={q} onChange={setQ} placeholder="Search ideas..." />
            </div>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filtered.map((i) => (
            <EntityCard key={i.slug} href={`/ideas/${i.slug}`} title={i.name} subtitle={i.brief} tags={i.tags || []} />
          ))}
        </div>
      </section>
    </main>
  )
}
