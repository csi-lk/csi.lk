import * as Silk from '../lib/silk'
import Navigation from './navigation'

interface Head {
  meta: Record<string, string>[]
  title: string
  description: string
}

const Head = ({ meta, title, description }: Head) => (
  <head>
    <meta name="description" content={description} />
    {meta.map(tag => <meta {...tag} />).join(' ')}
    <title>{title}</title>
    <link rel="stylesheet" href="/styles/index.css" />
  </head>
)

const PageContainer = (props: Head, children: any[]) => (
  <html lang="en" class="no-js">
    <Head {...props}></Head>
    <body>
      <a href="#content">Skip to content</a>
      <Navigation />
      <main>
        <article id="content">{children}</article>
      </main>
    </body>
  </html>
)

export default PageContainer
