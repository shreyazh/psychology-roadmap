"use client"

import { useMemo, useState } from "react"
import { authors } from "@/data/authors"
import { EntityCard } from "@/components/entity-card"
import { SectionHeader } from "@/components/section-header"
import { SiteHeader } from "@/components/site-header"
import { SearchBar } from "@/components/search-bar"

export default function AuthorsIndexPage() {
  const [q, setQ] = useState("")
  const filtered = useMemo(() => {
    const term = q.toLowerCase()
    return authors.filter(
      (a) =>
        a.name.toLowerCase().includes(term) ||
        a.brief.toLowerCase().includes(term) ||
        a.tags?.some((t) => t.toLowerCase().includes(term)),
    )
  }, [q])

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <SectionHeader
          title="Authors"
          subtitle="Explore key figures, their ideas, and influences."
          action={
            <div className="w-64">
              <SearchBar value={q} onChange={setQ} placeholder="Search authors..." />
            </div>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filtered.map((a) => (
            <EntityCard
              key={a.slug}
              href={`/authors/${a.slug}`}
              title={a.name}
              subtitle={a.brief}
              tags={a.tags || []}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
