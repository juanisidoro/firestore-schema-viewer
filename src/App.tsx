import { useState } from "react"
import type { FirebaseCollection } from "@/lib/schema-types"
import { CollectionSidebar } from "@/components/collection-sidebar"
import { SchemaDetailViewer, EmptyState } from "@/components/schema-detail-viewer"
import { SchemaStats } from "@/components/schema-stats"

interface AppProps {
  collections: FirebaseCollection[]
  title?: string
}

export function App({ collections, title }: AppProps) {
  const [selected, setSelected] = useState<FirebaseCollection | null>(null)

  return (
    <div className="dark flex h-screen w-full overflow-hidden bg-background text-foreground">
      <CollectionSidebar
        collections={collections}
        selectedId={selected?.id ?? null}
        onSelect={setSelected}
        title={title}
      />
      <main className="flex flex-1 flex-col overflow-hidden">
        {selected ? (
          <>
            <div className="border-b border-border p-4">
              <SchemaStats collections={collections} />
            </div>
            <div className="flex-1 overflow-hidden">
              <SchemaDetailViewer collection={selected} />
            </div>
          </>
        ) : (
          <>
            <div className="border-b border-border p-4">
              <SchemaStats collections={collections} />
            </div>
            <div className="flex-1">
              <EmptyState />
            </div>
          </>
        )}
      </main>
    </div>
  )
}
