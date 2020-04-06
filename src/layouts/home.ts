import { html } from 'common-tags'
import Header from '../components/header'
import { Eleventy } from '../types/global'

export = function Home(data: Eleventy.Page): string {
  const { content } = data
  return html`${Header(data)} ${content} `
}
