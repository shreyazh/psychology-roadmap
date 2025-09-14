export type ResourceLinks = {
  articles: { title: string; url: string }[]
  videos: { title: string; url: string }[]
}

export type BaseEntity = {
  id: string
  slug: string
  name: string
  brief: string
  tags?: string[]
  resources?: ResourceLinks
  similarities?: string[] // slugs of same category
  differences?: string[] // slugs of same category
}

export type Author = BaseEntity & {
  era?: string
  school?: string // slug of school
  keyIdeas?: string[] // idea slugs
  influences?: string[] // author slugs
  influenced?: string[] // author slugs
  notableWorks?: string[]
}

export type School = BaseEntity & {
  period?: string
  corePrinciples?: string[]
  majorAuthors?: string[] // author slugs
}

export type Idea = BaseEntity & {
  domain?: string
  originators?: string[] // author slugs
  associatedSchools?: string[] // school slugs
}

export type Challenge = BaseEntity & {
  theme?: string
  keyQuestions?: string[]
}
