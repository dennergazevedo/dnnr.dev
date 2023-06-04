interface IPost{
  id: string
  slug: string
  subtitle: string
  title: string
  updatedAt: Date
  createdAt: Date
  type: string
  banner: IBanner
  content: IContent
}

interface IBanner{
  url: string
}

interface IContent{
  html: string
}

interface IPostsContext{
  posts: IPost[]
  getPostsByType: any
  getPostsBySlug: any
}