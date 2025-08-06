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
}: Header): HTMLElement => {
  const fullUrl = `https://csi.lk/${canonical}`
  const socialImageUrl = `https://csi.lk/social/${canonical.replace(/[^a-zA-Z0-9]/g, '_')}.png`
  
  return (
    <head>
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="csi.lk" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImageUrl} />
      <meta name="twitter:creator" content="@csi_lk" />
      <meta name="twitter:site" content="@csi_lk" />
      
      {meta.map(tag => <meta {...tag} />).join(' ')}
      <link rel="canonical" href={fullUrl} />
      <title>{title}</title>
      <link rel="stylesheet" href={`/styles/index.css?v=${version}`} />
    </head>
  )
}

export default Header
