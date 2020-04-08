import * as Silk from '../../lib/silk'

interface Header {
  meta: Record<string, string>[]
  title: string
  description: string
}

const Header = ({ meta, title, description }: Header): HTMLElement => (
  <head>
    <meta name="description" content={description} />
    {meta.map(tag => <meta {...tag} />).join(' ')}
    <title>{title}</title>
    <link rel="stylesheet" href="/styles/index.css" />
  </head>
)

export default Header
