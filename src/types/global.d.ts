export interface Article {
  data: {
    title: string
    description?: string
    path: string
    template: string
    meta?: string
    permalink: string
  }
  date: Date
}

declare namespace Eleventy {
  interface Page {
    'site-data': typeof import('../_data/site-data.json')
    layout: string
    title?: string
    description?: string
    content: string
    collections: {
      all: Article[]
      article: Article[]
    }
  }
}

export default Eleventy
