import * as Silk from '../../lib/silk'
import Header from '../header/header'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

interface PageContainer {
  meta: Record<string, string>[]
  title: string
  description: string
  keywords: string
  style?: 'fluid' | 'fixed'
}

const PageContainer = (
  { meta, title, description, style = 'fluid', keywords }: PageContainer,
  children: HTMLElement[],
): HTMLElement => (
  <html lang="en" class="no-js">
    <Header meta={meta} title={title} description={description} keywords={keywords} />
    <body>
      <div className={`page-container ${style}`}>
        <a href="#content" className="skip">
          Skip to content
        </a>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </body>
  </html>
)

export default PageContainer
