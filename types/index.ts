export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  image?: string
  year: string
}