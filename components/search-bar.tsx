"use client"
import { Input } from "@/components/ui/input"

export function SearchBar({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div className="w-full">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search..."}
        className="rounded-xl bg-muted/30 border-border/50 backdrop-blur-xl placeholder:text-foreground/60 focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  )
}
