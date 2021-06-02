import * as Silk from '../../lib/silk'

interface Header {
  meta: Record<string, string>[]
  title: string
  description: string
  keywords: string
  version: string
}

const Header = ({ meta, title, description, keywords, version }: Header): HTMLElement => (
  <head>
    {keywords && <meta name="keywords" content={keywords} />}
    <meta name="description" content={description} />
    {meta.map(tag => <meta {...tag} />).join(' ')}
    <title>{title}</title>
    <link rel="stylesheet" href={`/styles/index.css?v=${version}`} />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/firacode@5.2.0/distr/fira_code.min.css"
    />
  </head>
)

export default Header
