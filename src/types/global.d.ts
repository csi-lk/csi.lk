export interface Article {
  data: {
    title: string
    description?: string
    path: string
    template: string
    permalink: string
    keywords?: string
  }
  date: Date
}

declare namespace Eleventy {
  interface Page {
    'site-data': typeof import('../_data/site-data.json')
    layout: string
    title?: string
    description?: string
    keywords?: string
    content: string
    collections: {
      all: Article[]
      article: Article[]
    }
  }
}

export default Eleventy
