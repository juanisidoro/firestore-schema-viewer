import React from "react"

import { useState, useCallback, Fragment } from "react"
import { cn } from "@/lib/utils"
import type { FirebaseCollection, JSONSchemaProperty } from "@/lib/schema-types"
import { TYPE_COLORS } from "@/lib/schema-types"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import {
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  FileJson2,
  Braces,
  List,
  Hash,
  Type,
  ToggleLeft,
  Box,
  ListOrdered,
  CircleOff,
  Lock,
  ShieldAlert,
  Tag,
  Eye,
  WrapText,
  AlignLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface SchemaDetailViewerProps {
  collection: FirebaseCollection
}

const TYPE_ICONS: Record<string, React.ElementType> = {
  string: Type,
  number: Hash,
  integer: Hash,
  boolean: ToggleLeft,
  object: Box,
  array: ListOrdered,
  null: CircleOff,
}

function generateEmptyObject(
  properties: Record<string, JSONSchemaProperty> | undefined,
  required: string[] | undefined
): Record<string, unknown> {
  if (!properties) return {}
  const result: Record<string, unknown> = {}
  for (const [key, prop] of Object.entries(properties)) {
    const primaryType = Array.isArray(prop.type) ? prop.type[0] : prop.type
    switch (primaryType) {
      case "string":
        result[key] = ""
        break
      case "number":
      case "integer":
        result[key] = 0
        break
      case "boolean":
        result[key] = false
        break
      case "null":
        result[key] = null
        break
      case "array":
        if (prop.items?.type === "object" && prop.items.properties) {
          result[key] = [generateEmptyObject(prop.items.properties, prop.items.required)]
        } else {
          result[key] = []
        }
        break
      case "object":
        result[key] = generateEmptyObject(prop.properties, prop.required)
        break
      default:
        result[key] = null
    }
  }
  return result
}

function generateExample(
  properties: Record<string, JSONSchemaProperty> | undefined,
  required: string[] | undefined
): Record<string, unknown> {
  if (!properties) return {}
  const result: Record<string, unknown> = {}
  for (const [key, prop] of Object.entries(properties)) {
    const primaryType = Array.isArray(prop.type) ? prop.type[0] : prop.type
    if (prop.enum && prop.enum.length > 0) {
      result[key] = prop.enum[0]
    } else if (prop.default !== undefined) {
      result[key] = prop.default
    } else {
      switch (primaryType) {
        case "string":
          if (prop.format === "date-time") result[key] = "2025-11-11T15:22:49.516Z"
          else if (prop.format === "email") result[key] = "user@example.com"
          else if (prop.format === "uri") result[key] = "https://example.com"
          else if (prop.pattern) result[key] = `<${key}>`
          else result[key] = `example-${key}`
          break
        case "number":
          result[key] = prop.minimum !== undefined ? prop.minimum : 0
          break
        case "integer":
          result[key] = prop.minimum !== undefined ? prop.minimum : 1
          break
        case "boolean":
          result[key] = false
          break
        case "null":
          result[key] = null
          break
        case "array":
          if (prop.items?.type === "object" && prop.items.properties) {
            result[key] = [generateExample(prop.items.properties, prop.items.required)]
          } else if (prop.items?.type === "integer") {
            result[key] = [1, 2, 3]
          } else if (prop.items?.type === "string") {
            result[key] = ["example"]
          } else {
            result[key] = []
          }
          break
        case "object":
          if (prop.properties) {
            result[key] = generateExample(prop.properties, prop.required)
          } else {
            result[key] = {}
          }
          break
        default:
          result[key] = null
      }
    }
  }
  return result
}

export function SchemaDetailViewer({ collection }: SchemaDetailViewerProps) {
  const [copiedEmpty, setCopiedEmpty] = useState(false)
  const [copiedPath, setCopiedPath] = useState(false)
  const [exampleOpen, setExampleOpen] = useState(false)

  const handleCopyEmpty = useCallback(() => {
    const emptyObj = generateEmptyObject(
      collection.schema.properties,
      collection.schema.required
    )
    navigator.clipboard.writeText(JSON.stringify(emptyObj, null, 2))
    setCopiedEmpty(true)
    setTimeout(() => setCopiedEmpty(false), 2000)
  }, [collection])

  const handleCopyPath = useCallback(() => {
    navigator.clipboard.writeText(collection.path)
    setCopiedPath(true)
    setTimeout(() => setCopiedPath(false), 2000)
  }, [collection.path])

  const requiredFields = collection.schema.required || []
  const totalProperties = collection.schema.properties
    ? Object.keys(collection.schema.properties).length
    : 0

  const pathSegments = collection.path.split("/").filter(Boolean)

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-border px-6 py-5">
        {/* Breadcrumb path - copyable */}
        <button
          type="button"
          onClick={handleCopyPath}
          className="group/path flex w-fit items-center gap-0.5 rounded-md border border-border bg-secondary/30 px-3 py-1.5 transition-colors hover:border-primary/30 hover:bg-secondary/50"
          title="Click to copy path"
        >
          {pathSegments.map((seg, i) => (
            <Fragment key={i}>
              {i > 0 && (
                <ChevronRight className="h-3 w-3 shrink-0 text-muted-foreground/30" />
              )}
              <span
                className={cn(
                  "font-mono text-[11px]",
                  seg.startsWith("{")
                    ? "text-muted-foreground/70"
                    : "font-medium text-foreground"
                )}
              >
                {seg}
              </span>
            </Fragment>
          ))}
          {copiedPath ? (
            <Check className="ml-2 h-3 w-3 shrink-0 text-emerald-400" />
          ) : (
            <Copy className="ml-2 h-3 w-3 shrink-0 text-muted-foreground/40 transition-colors group-hover/path:text-foreground" />
          )}
        </button>

        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <h1 className="font-mono text-xl font-bold text-foreground">
                {collection.schema.title || collection.name}
              </h1>
              <Badge variant="outline" className="font-mono text-[10px]">
                {collection.schema.type}
              </Badge>
              {collection.schema.$id && (
                <span className="font-mono text-[10px] text-muted-foreground/60">
                  {collection.schema.$id}
                </span>
              )}
            </div>
            <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
              {collection.description || collection.schema.description}
            </p>
            <div className="mt-0.5 flex items-center gap-3 text-[11px]">
              <div className="flex items-center gap-1.5 rounded-md bg-secondary/50 px-2 py-1">
                <FileJson2 className="h-3 w-3 text-primary" />
                <span className="text-foreground font-medium">{totalProperties}</span>
                <span className="text-muted-foreground">fields</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md bg-secondary/50 px-2 py-1">
                <Lock className="h-3 w-3 text-red-400" />
                <span className="text-foreground font-medium">{requiredFields.length}</span>
                <span className="text-muted-foreground">required</span>
              </div>
              {collection.schema.additionalProperties === false && (
                <div className="flex items-center gap-1.5 rounded-md bg-amber-400/10 px-2 py-1">
                  <ShieldAlert className="h-3 w-3 text-amber-400" />
                  <span className="text-amber-400 font-medium">strict</span>
                </div>
              )}
              {collection.documentCount && (
                <div className="flex items-center gap-1.5 rounded-md bg-secondary/50 px-2 py-1">
                  <Tag className="h-3 w-3 text-muted-foreground" />
                  <span className="text-foreground font-medium">{collection.documentCount.toLocaleString()}</span>
                  <span className="text-muted-foreground">docs</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setExampleOpen(true)}
              className="gap-2 text-xs bg-transparent"
            >
              <Eye className="h-3.5 w-3.5" />
              See Example
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyEmpty}
              className="gap-2 text-xs bg-transparent"
            >
              {copiedEmpty ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy JSON Empty
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <Tabs defaultValue="tree" className="flex flex-1 flex-col overflow-hidden">
        <div className="border-b border-border px-6">
          <TabsList className="h-10 bg-transparent p-0">
            <TabsTrigger
              value="tree"
              className="gap-2 rounded-none border-b-2 border-transparent px-4 text-xs data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              <List className="h-3.5 w-3.5" />
              Schema Tree
            </TabsTrigger>
            <TabsTrigger
              value="json"
              className="gap-2 rounded-none border-b-2 border-transparent px-4 text-xs data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              <Braces className="h-3.5 w-3.5" />
              Raw JSON
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="tree" className="mt-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-6">
              <SchemaPropertyTree
                properties={collection.schema.properties || {}}
                required={requiredFields}
                depth={0}
              />
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="json" className="mt-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <pre className="p-6 font-mono text-xs leading-6 text-foreground/90">
              {JSON.stringify(collection.schema, null, 2)}
            </pre>
          </ScrollArea>
        </TabsContent>
      </Tabs>

      {/* Example Sheet */}
      <ExampleSheet
        open={exampleOpen}
        onOpenChange={setExampleOpen}
        collection={collection}
      />
    </div>
  )
}

function ExampleSheet({
  open,
  onOpenChange,
  collection,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  collection: FirebaseCollection
}) {
  const [format, setFormat] = useState<"pretty" | "inline">("pretty")
  const [copied, setCopied] = useState(false)

  const exampleObj = generateExample(
    collection.schema.properties,
    collection.schema.required
  )
  const prettyJson = JSON.stringify(exampleObj, null, 2)
  const inlineJson = JSON.stringify(exampleObj)

  const displayJson = format === "pretty" ? prettyJson : inlineJson

  const handleCopy = () => {
    navigator.clipboard.writeText(displayJson)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col border-border bg-card sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-mono text-foreground">
            Example Document
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Auto-generated example for{" "}
            <span className="font-mono text-primary">{collection.name}</span>{" "}
            based on the JSON Schema.
          </SheetDescription>
        </SheetHeader>

        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-1 rounded-md bg-secondary/50 p-0.5">
            <button
              type="button"
              onClick={() => setFormat("pretty")}
              className={cn(
                "flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-medium transition-colors",
                format === "pretty"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <AlignLeft className="h-3 w-3" />
              Pretty
            </button>
            <button
              type="button"
              onClick={() => setFormat("inline")}
              className={cn(
                "flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-medium transition-colors",
                format === "inline"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <WrapText className="h-3 w-3" />
              Inline
            </button>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-2 text-xs bg-transparent"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </Button>
        </div>

        <ScrollArea className="flex-1 rounded-md border border-border bg-background">
          <pre className={cn(
            "p-4 font-mono text-xs text-foreground/90",
            format === "pretty" ? "leading-6" : "leading-6 whitespace-pre-wrap break-all"
          )}>
            {displayJson}
          </pre>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

function SchemaPropertyTree({
  properties,
  required,
  depth,
}: {
  properties: Record<string, JSONSchemaProperty>
  required: string[]
  depth: number
}) {
  return (
    <div className={cn("flex flex-col gap-0.5", depth > 0 && "mt-0.5")}>
      {Object.entries(properties).map(([key, prop]) => (
        <PropertyNode
          key={key}
          name={key}
          property={prop}
          isRequired={required.includes(key)}
          depth={depth}
        />
      ))}
    </div>
  )
}

function PropertyNode({
  name,
  property,
  isRequired,
  depth,
}: {
  name: string
  property: JSONSchemaProperty
  isRequired: boolean
  depth: number
}) {
  const [isOpen, setIsOpen] = useState(depth < 1)

  const hasChildren =
    property.type === "object" &&
    property.properties &&
    Object.keys(property.properties).length > 0
  const isArray = property.type === "array"
  const hasArrayObjectItems =
    isArray && property.items?.type === "object" && property.items?.properties

  const isExpandable = hasChildren || hasArrayObjectItems

  const primaryType = Array.isArray(property.type) ? property.type[0] : property.type
  const typeStr = Array.isArray(property.type)
    ? property.type.join(" | ")
    : property.type

  const TypeIcon = TYPE_ICONS[primaryType] || FileJson2
  const typeColor = TYPE_COLORS[primaryType] || "text-muted-foreground"

  const constraints: Array<{ label: string; value: string }> = []
  if (property.format)
    constraints.push({ label: "format", value: property.format })
  if (property.pattern)
    constraints.push({ label: "pattern", value: property.pattern })
  if (property.minimum !== undefined)
    constraints.push({ label: "min", value: String(property.minimum) })
  if (property.maximum !== undefined)
    constraints.push({ label: "max", value: String(property.maximum) })
  if (property.minLength !== undefined)
    constraints.push({ label: "minLength", value: String(property.minLength) })
  if (property.maxLength !== undefined)
    constraints.push({ label: "maxLength", value: String(property.maxLength) })
  if (property.default !== undefined)
    constraints.push({
      label: "default",
      value: JSON.stringify(property.default),
    })

  const depthBorderColors = [
    "border-primary/20",
    "border-cyan-400/20",
    "border-emerald-400/20",
    "border-amber-400/20",
  ]

  return (
    <div className="flex flex-col">
      {/* Property row */}
      <div
        className={cn(
          "group flex flex-col rounded-lg border border-transparent px-3 py-2.5 transition-all",
          "hover:border-border hover:bg-secondary/20",
          isOpen && isExpandable && "border-border bg-secondary/10"
        )}
      >
        {/* Main row */}
        <div className="flex items-center gap-2">
          {/* Expand toggle */}
          {isExpandable ? (
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded transition-colors",
                "hover:bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {isOpen ? (
                <ChevronDown className="h-3.5 w-3.5" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5" />
              )}
            </button>
          ) : (
            <span className="w-5 shrink-0" />
          )}

          {/* Type icon */}
          <TypeIcon className={cn("h-3.5 w-3.5 shrink-0", typeColor)} />

          {/* Property name */}
          <span className="font-mono text-[13px] font-semibold text-foreground">
            {name}
          </span>

          {/* Required asterisk */}
          {isRequired && (
            <span className="font-mono text-sm font-bold text-red-400" title="Required field">
              {"*"}
            </span>
          )}

          {/* Type */}
          <span className={cn("font-mono text-[11px]", typeColor)}>
            {isArray && property.items
              ? `${typeStr}<${Array.isArray(property.items.type) ? property.items.type.join("|") : property.items.type}>`
              : typeStr}
          </span>

          {/* Description - pushed right */}
          {property.description && (
            <span className="ml-auto max-w-[45%] truncate text-right text-[11px] text-muted-foreground leading-relaxed">
              {property.description}
            </span>
          )}
        </div>

        {/* Constraints row */}
        {constraints.length > 0 && (
          <div className="mt-1.5 ml-[44px] flex flex-wrap items-center gap-1.5">
            {constraints.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-1 rounded bg-secondary/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                <span className="text-foreground/60">{c.label}:</span>
                <span className="text-foreground/90">{c.value}</span>
              </span>
            ))}
          </div>
        )}

        {/* Enum values */}
        {property.enum && (
          <div className="mt-1.5 ml-[44px] flex flex-wrap items-center gap-1">
            <span className="text-[10px] text-muted-foreground mr-0.5">enum:</span>
            {property.enum.map((val) => (
              <span
                key={String(val)}
                className="rounded-full border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-foreground/80"
              >
                {String(val)}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Nested children */}
      {isOpen && hasChildren && (
        <div
          className={cn(
            "ml-6 border-l-2 pl-3",
            depthBorderColors[depth % depthBorderColors.length]
          )}
        >
          <SchemaPropertyTree
            properties={property.properties!}
            required={property.required || []}
            depth={depth + 1}
          />
        </div>
      )}

      {/* Array item children */}
      {isOpen && hasArrayObjectItems && (
        <div
          className={cn(
            "ml-6 border-l-2 pl-3",
            depthBorderColors[depth % depthBorderColors.length]
          )}
        >
          <div className="flex items-center gap-2 px-3 py-2 text-[11px] text-muted-foreground">
            <ListOrdered className="h-3 w-3 text-cyan-400" />
            <span className="font-medium">Array item schema</span>
            {property.items!.required && (
              <span className="text-muted-foreground/60">
                ({property.items!.required.length} required)
              </span>
            )}
          </div>
          <SchemaPropertyTree
            properties={property.items!.properties!}
            required={property.items!.required || []}
            depth={depth + 1}
          />
        </div>
      )}
    </div>
  )
}

export function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/50">
        <FileJson2 className="h-8 w-8 text-muted-foreground/50" />
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="text-lg font-semibold text-foreground">
          Select a Collection
        </h2>
        <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
          Choose a collection from the sidebar to view its JSON Schema
          documentation and structure.
        </p>
      </div>
    </div>
  )
}
