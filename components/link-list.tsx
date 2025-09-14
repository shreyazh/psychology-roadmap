import Link from "next/link"

export function LinkList({
  items,
  emptyLabel = "No links added yet.",
}: {
  items: { title: string; url: string }[]
  emptyLabel?: string
}) {
  if (!items?.length) {
    return <p className="text-sm text-muted-foreground">{emptyLabel}</p>
  }
  return (
    <ul className="space-y-2">
      {items.map((it, idx) => (
        <li key={idx}>
          <Link
            href={it.url || "#"}
            className="text-sm text-primary hover:text-primary/90 underline underline-offset-4"
          >
            {it.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
