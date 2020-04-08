declare namespace Eleventy {
  interface Page {
    'site-data': typeof import('../_data/site-data.json')
    layout: string
    title?: string
    description?: string
    content: string
  }
}

export default Eleventy
