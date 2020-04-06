import Header from '../components/header'

export = function Home({ content }: { content: string }): string {
  return `${Header()}
  ${content}
`
}
