import type { FirebaseCollection } from "@/lib/schema-types"
import { Database, FileJson2, Layers, GitBranch } from "lucide-react"

interface SchemaStatsProps {
  collections: FirebaseCollection[]
}

function countDeep(collections: FirebaseCollection[]): {
  schemas: number
  subcollections: number
  fields: number
  documents: number
  maxDepth: number
} {
  let schemas = 0
  let subcollections = 0
  let fields = 0
  let documents = 0
  let maxDepth = 0

  function walk(cols: FirebaseCollection[], depth: number) {
    for (const c of cols) {
      schemas++
      fields += c.schema.properties ? Object.keys(c.schema.properties).length : 0
      documents += c.documentCount || 0
      if (depth > maxDepth) maxDepth = depth
      if (c.subcollections && c.subcollections.length > 0) {
        subcollections += c.subcollections.length
        walk(c.subcollections, depth + 1)
      }
    }
  }

  walk(collections, 0)
  return { schemas, subcollections, fields, documents, maxDepth }
}

export function SchemaStats({ collections }: SchemaStatsProps) {
  const { schemas, subcollections, fields, documents } = countDeep(collections)

  const stats = [
    {
      label: "Schemas",
      value: schemas,
      icon: Database,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      label: "Subcollections",
      value: subcollections,
      icon: GitBranch,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
    },
    {
      label: "Total Fields",
      value: fields,
      icon: FileJson2,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      label: "Documents",
      value: documents.toLocaleString(),
      icon: Layers,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
        >
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-md ${stat.bg} ${stat.color}`}
          >
            <stat.icon className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground tabular-nums">
              {stat.value}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
