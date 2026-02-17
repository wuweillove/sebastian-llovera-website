export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  image?: string
  images?: string[] // Array of project images for gallery
  year: string
  client?: string
  role?: string
}
