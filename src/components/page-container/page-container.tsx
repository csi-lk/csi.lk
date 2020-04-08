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
      <div className={`page-container ${style}`}>
        <a href="#content" className="skip">
          Skip to content
        </a>
        <Navigation />
        <main>
          <article id="content">{children}</article>
        </main>
        <Footer />
      </div>
    </body>
  </html>
)

export default PageContainer
