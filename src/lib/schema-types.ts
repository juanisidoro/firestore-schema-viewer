export interface FirebaseCollection {
  id: string
  name: string
  description: string
  path: string
  schema: JSONSchema
  subcollections?: FirebaseCollection[]
  updatedAt: string
  documentCount?: number
}

export interface JSONSchema {
  $schema?: string
  $id?: string
  title?: string
  description?: string
  type: JSONSchemaType
  properties?: Record<string, JSONSchemaProperty>
  required?: string[]
  additionalProperties?: boolean
  examples?: unknown[]
}

export type JSONSchemaType =
  | "object"
  | "array"
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "null"

export interface JSONSchemaProperty {
  type: JSONSchemaType | JSONSchemaType[]
  description?: string
  format?: string
  enum?: (string | number | boolean)[]
  default?: unknown
  examples?: unknown[]
  minimum?: number
  maximum?: number
  minLength?: number
  maxLength?: number
  pattern?: string
  items?: JSONSchemaProperty
  properties?: Record<string, JSONSchemaProperty>
  required?: string[]
  additionalProperties?: boolean
  $ref?: string
  oneOf?: JSONSchemaProperty[]
  anyOf?: JSONSchemaProperty[]
  allOf?: JSONSchemaProperty[]
}

export type TypeColorMap = Record<string, string>

export const TYPE_COLORS: TypeColorMap = {
  string: "text-emerald-400",
  number: "text-blue-400",
  integer: "text-blue-400",
  boolean: "text-amber-400",
  object: "text-orange-400",
  array: "text-cyan-400",
  null: "text-red-400",
}

export const TYPE_BG_COLORS: TypeColorMap = {
  string: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  number: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  integer: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  boolean: "bg-amber-400/10 text-amber-400 border-amber-400/20",
  object: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  array: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  null: "bg-red-400/10 text-red-400 border-red-400/20",
}
