import * as Silk from '../../lib/silk'
import Header from '../header/header'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'
import i18n from '../../lib/i18n'

export interface PageContainer {
  meta: Record<string, string>[]
  title: string
  description: string
  keywords: string
  version: string
  style?: 'fluid' | 'fixed'
  locale: string
  permalink?: string
}

const PageContainer = (
  {
    meta,
    title,
    description,
    style = 'fluid',
    keywords,
    version,
    locale,
    permalink,
  }: PageContainer,
  children: HTMLElement[],
): HTMLElement => {
  const { t } = i18n({ locale })
  // TODO: change lang here
  return (
    <Silk.createFragment>
      &lt;!DOCTYPE html&gt;
      <html lang="en" class="no-js">
        <Header
          meta={meta}
          title={title}
          description={description}
          keywords={keywords}
          version={version}
          canonical={permalink?.replace('.html', '')}
        />
        <body>
          <div hidden>
            <span id="open-new-window">{t('head-links.open-new-window')}</span>
            <span id="open-external">{t('head-links.open-external')}</span>
            <span id="open-new-window-external">{t('head-links.open-new-window-external')}</span>
            <span id="open-email">{t('head-links.open-email')}</span>
          </div>
          <div className={`page-container ${style}`} data-testid="page-container">
            <a href="#content" className="skip">
              {t('skip-content')}
            </a>
            <Navigation locale={locale} />
            <main>{children}</main>
            <Footer locale={locale} />
          </div>
        </body>
      </html>
    </Silk.createFragment>
  )
}

export default PageContainer
