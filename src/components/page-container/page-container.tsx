import * as Silk from '../../lib/silk'
import Header from '../header/header'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

interface PageContainer {
  meta: Record<string, string>[]
  title: string
  description: string
  style?: 'fluid' | 'fixed'
}

const PageContainer = (
  { meta, title, description, style = 'fluid' }: PageContainer,
  children: HTMLElement[],
): HTMLElement => (
  <html lang="en" class="no-js">
    <Header meta={meta} title={title} description={description}></Header>
    <body>
      <a href="#content" className="skip">
        Skip to content
      </a>
      <Navigation />
      <main className={style}>
        <article id="content">{children}</article>
      </main>
    </body>
    <Footer fixed={style === 'fixed'} />
  </html>
)

export default PageContainer
