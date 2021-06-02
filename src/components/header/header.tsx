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
  </head>
)

export default Header
