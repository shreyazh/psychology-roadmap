"use client"

import { useMemo, useState } from "react"
import { schools } from "@/data/schools"
import { EntityCard } from "@/components/entity-card"
import { SectionHeader } from "@/components/section-header"
import { SiteHeader } from "@/components/site-header"
import { SearchBar } from "@/components/search-bar"

export default function SchoolsIndexPage() {
  const [q, setQ] = useState("")
  const filtered = useMemo(() => {
    const term = q.toLowerCase()
    return schools.filter(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        s.brief.toLowerCase().includes(term) ||
        s.corePrinciples?.some((t) => t.toLowerCase().includes(term)),
    )
  }, [q])

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <SectionHeader
          title="Schools"
          subtitle="Major approaches, periods, and core principles."
          action={
            <div className="w-64">
              <SearchBar value={q} onChange={setQ} placeholder="Search schools..." />
            </div>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filtered.map((s) => (
            <EntityCard
              key={s.slug}
              href={`/schools/${s.slug}`}
              title={s.name}
              subtitle={s.brief}
              tags={s.corePrinciples || []}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
