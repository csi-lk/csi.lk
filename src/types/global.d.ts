export namespace Eleventy {
  interface Page {
    siteData: typeof import('../_data/siteData.json')
    layout: string
    title?: string
    description?: string
    content: string
  }
}
