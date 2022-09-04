import * as Silk from '../../lib/silk'

interface Header {
  meta: Record<string, string>[]
  title: string
  description: string
  keywords: string
  version: string
  canonical?: string
}

const Header = ({
  meta,
  title,
  description,
  keywords,
  version,
  canonical = '',
}: Header): HTMLElement => (
  <head>
    {keywords && <meta name="keywords" content={keywords} />}
    <meta name="description" content={description} />
    {meta.map(tag => <meta {...tag} />).join(' ')}
    <link rel="canonical" href={`https://csi.lk/${canonical}`} />
    <title>{title}</title>
    <link rel="stylesheet" href={`/styles/index.css?v=${version}`} />
  </head>
)

export default Header
