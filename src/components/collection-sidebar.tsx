import { useState, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"
import type { FirebaseCollection } from "@/lib/schema-types"
import {
  Database,
  Search,
  ChevronRight,
  ChevronDown,
  FolderOpen,
  Folder,
  FileJson2,
  Layers,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CollectionSidebarProps {
  collections: FirebaseCollection[]
  selectedId: string | null
  onSelect: (collection: FirebaseCollection) => void
  title?: string
}

function countAllSchemas(collections: FirebaseCollection[]): number {
  return collections.reduce((acc, c) => {
    return acc + 1 + (c.subcollections ? countAllSchemas(c.subcollections) : 0)
  }, 0)
}

function flatSearch(
  collections: FirebaseCollection[],
  query: string
): FirebaseCollection[] {
  const results: FirebaseCollection[] = []
  for (const c of collections) {
    if (
      c.name.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query) ||
      c.path.toLowerCase().includes(query)
    ) {
      results.push(c)
    }
    if (c.subcollections) {
      results.push(...flatSearch(c.subcollections, query))
    }
  }
  return results
}

function collectAllIds(collections: FirebaseCollection[]): string[] {
  const ids: string[] = []
  for (const c of collections) {
    ids.push(c.id)
    if (c.subcollections) {
      ids.push(...collectAllIds(c.subcollections))
    }
  }
  return ids
}

export function CollectionSidebar({
  collections,
  selectedId,
  onSelect,
  title,
}: CollectionSidebarProps) {
  const [search, setSearch] = useState("")
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    for (const id of collectAllIds(collections)) {
      initial[id] = true
    }
    return initial
  })

  useEffect(() => {
    const newExpanded: Record<string, boolean> = {}
    for (const id of collectAllIds(collections)) {
      newExpanded[id] = expanded[id] !== undefined ? expanded[id] : true
    }
    setExpanded(newExpanded)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collections])

  const toggleExpanded = useCallback((id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const formatCount = (count?: number) => {
    if (!count) return null
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`
    return count.toString()
  }

  const totalSchemas = countAllSchemas(collections)
  const isSearching = search.trim().length > 0
  const searchResults = isSearching ? flatSearch(collections, search.toLowerCase()) : []

  return (
    <aside className="flex h-full w-80 shrink-0 flex-col border-r border-border bg-card">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
          <Database className="h-4.5 w-4.5 text-primary" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground tracking-tight">
            {title || "FireSchema"}
          </span>
          <span className="text-[11px] text-muted-foreground">Firestore Schema Viewer</span>
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            placeholder="Search collections & paths..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 bg-secondary/50 pl-8 text-xs placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Section header */}
      <div className="flex items-center justify-between px-4 py-1.5">
        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Firestore Schema
        </span>
        <Badge
          variant="secondary"
          className="h-5 px-1.5 text-[10px] font-medium"
        >
          {totalSchemas} {totalSchemas === 1 ? "schema" : "schemas"}
        </Badge>
      </div>

      {/* Collection tree */}
      <ScrollArea className="flex-1 px-2">
        <div className="flex flex-col gap-0.5 py-1 pb-4">
          {isSearching ? (
            searchResults.length > 0 ? (
              searchResults.map((collection) => (
                <SearchResultItem
                  key={collection.id}
                  collection={collection}
                  isSelected={selectedId === collection.id}
                  onSelect={onSelect}
                />
              ))
            ) : (
              <div className="flex flex-col items-center gap-2 py-8 text-center">
                <Search className="h-7 w-7 text-muted-foreground/30" />
                <p className="text-xs text-muted-foreground">No results found</p>
              </div>
            )
          ) : (
            collections.map((collection) => (
              <CollectionTreeNode
                key={collection.id}
                collection={collection}
                selectedId={selectedId}
                expanded={expanded}
                onSelect={onSelect}
                onToggle={toggleExpanded}
                formatCount={formatCount}
                depth={0}
              />
            ))
          )}
        </div>
      </ScrollArea>
    </aside>
  )
}

function CollectionTreeNode({
  collection,
  selectedId,
  expanded,
  onSelect,
  onToggle,
  formatCount,
  depth,
}: {
  collection: FirebaseCollection
  selectedId: string | null
  expanded: Record<string, boolean>
  onSelect: (collection: FirebaseCollection) => void
  onToggle: (id: string) => void
  formatCount: (count?: number) => string | null
  depth: number
}) {
  const hasSubs = collection.subcollections && collection.subcollections.length > 0
  const isExpanded = !!expanded[collection.id]
  const isSelected = selectedId === collection.id

  const depthColors = [
    "border-primary/30",
    "border-cyan-400/30",
    "border-emerald-400/30",
    "border-amber-400/30",
  ]
  const borderColor = depthColors[depth % depthColors.length]

  const depthAccents = [
    "text-primary",
    "text-cyan-400",
    "text-emerald-400",
    "text-amber-400",
  ]
  const accentColor = depthAccents[depth % depthAccents.length]

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelect(collection)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(collection) }}
        className={cn(
          "group flex w-full items-center gap-1.5 rounded-md px-2 py-2 text-left text-sm transition-all cursor-pointer",
          isSelected
            ? "bg-primary/10 text-foreground"
            : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {/* Expand toggle */}
        {hasSubs ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onToggle(collection.id)
            }}
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary"
          >
            {isExpanded ? (
              <ChevronDown className={cn("h-3.5 w-3.5", isSelected ? accentColor : "")} />
            ) : (
              <ChevronRight className="h-3.5 w-3.5" />
            )}
          </button>
        ) : (
          <span className="w-5 shrink-0" />
        )}

        {/* Icon */}
        {hasSubs ? (
          isExpanded ? (
            <FolderOpen className={cn("h-4 w-4 shrink-0", isSelected ? accentColor : "text-muted-foreground/70")} />
          ) : (
            <Folder className={cn("h-4 w-4 shrink-0", isSelected ? accentColor : "text-muted-foreground/70")} />
          )
        ) : (
          <FileJson2 className={cn("h-4 w-4 shrink-0", isSelected ? accentColor : "text-muted-foreground/70")} />
        )}

        {/* Name */}
        <span className={cn("flex-1 truncate font-mono text-xs", isSelected && "font-semibold")}>
          {collection.name}
        </span>

        {/* Count & subcollection indicator */}
        <div className="flex items-center gap-1.5">
          {hasSubs && (
            <div className="flex items-center gap-0.5 opacity-60">
              <Layers className="h-3 w-3" />
              <span className="text-[10px]">{collection.subcollections!.length}</span>
            </div>
          )}
          {collection.documentCount && (
            <span className="text-[10px] tabular-nums text-muted-foreground/70">
              {formatCount(collection.documentCount)}
            </span>
          )}
        </div>
      </div>

      {/* Subcollections */}
      {hasSubs && isExpanded && (
        <div className={cn("ml-4 border-l-2 pl-0", borderColor)}>
          {collection.subcollections!.map((sub) => (
            <CollectionTreeNode
              key={sub.id}
              collection={sub}
              selectedId={selectedId}
              expanded={expanded}
              onSelect={onSelect}
              onToggle={onToggle}
              formatCount={formatCount}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function SearchResultItem({
  collection,
  isSelected,
  onSelect,
}: {
  collection: FirebaseCollection
  isSelected: boolean
  onSelect: (collection: FirebaseCollection) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(collection)}
      className={cn(
        "flex w-full flex-col gap-1 rounded-md px-3 py-2.5 text-left transition-all",
        isSelected
          ? "bg-primary/10 text-foreground"
          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
      )}
    >
      <div className="flex items-center gap-2">
        <FileJson2 className={cn("h-3.5 w-3.5 shrink-0", isSelected ? "text-primary" : "")} />
        <span className="font-mono text-xs font-semibold">{collection.name}</span>
      </div>
      <span className="ml-5.5 font-mono text-[10px] text-muted-foreground/70 truncate">
        {collection.path}
      </span>
    </button>
  )
}
