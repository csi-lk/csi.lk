export interface DefaultFrontMatter {
  title: string
  description?: string
  path: string
  template: string
  permalink: string
  keywords?: string
  tags: string[]
}

export interface Article {
  data: {
    cool: string
  } & DefaultFrontMatter
  date: Date
}

export interface Talk {
  data: {
    repo: string
    slidesEmbed: string
    slidesSD: string
    slidesPdf: string
    slidesRaw: string
  } & DefaultFrontMatter
  date: Date
}

export interface Job {
  data: {
    companyName: string
    employmentType: 'contract' | 'full-time'
    website: string
    location: string
    startMonth: number
    startYear: number
    endMonth?: number
    endYear?: number
    industry: string
  } & DefaultFrontMatter
  templateContent: () => HTMLElement
}

declare namespace Eleventy {
  interface Page {
    'site-data': typeof import('../_data/site-data.json')
    i18n: typeof import('../_data/i18n.js')
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
    pkg: {
      version: string
    }
    collections: {
      all: Article[] | Job[]
      article: Article[]
      job: Job[]
      talk: Talk[]
    }
  }
}

export default Eleventy
