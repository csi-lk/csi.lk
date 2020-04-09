export interface Content {
  data: {
    title: string
    description?: string
    path: string
    template: string
    permalink: string
    keywords?: string
    tags: string[]
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
    tags: Record<string, string>
    page: {
      date: Date
      inputPath: string
    }
    collections: {
      all: Content[]
      article: Content[]
    }
  }
}

export default Eleventy
