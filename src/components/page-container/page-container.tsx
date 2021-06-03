import * as Silk from '../../lib/silk'
import Header from '../header/header'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

export interface PageContainer {
  meta: Record<string, string>[]
  title: string
  description: string
  keywords: string
  version: string
  style?: 'fluid' | 'fixed'
}

const PageContainer = (
  { meta, title, description, style = 'fluid', keywords, version }: PageContainer,
  children: HTMLElement[],
): HTMLElement => (
  <Silk.createFragment>
    &lt;!DOCTYPE html&gt;
    <html lang="en" class="no-js">
      <Header
        meta={meta}
        title={title}
        description={description}
        keywords={keywords}
        version={version}
      />
      <body>
        <div hidden>
          <span id="open-new-window">Opens in a new window</span>
          <span id="open-external">Opens an external site</span>
          <span id="open-new-window-external">Opens an external site in a new window</span>
          <span id="open-email">Opens email application</span>
        </div>
        <div className={`page-container ${style}`} data-testid="page-container">
          <a href="#content" className="skip">
            Skip to content
          </a>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon="{'token': '6390381bc3b34b92af23d388761aaa8d'}"
        >
          {' '}
        </script>
      </body>
    </html>
  </Silk.createFragment>
)

export default PageContainer
