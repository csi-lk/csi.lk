import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Eleventy from '../../types/global'

export = function Home({
  content,
  'site-data': siteData,
  i18n: { locale },
  pkg: { version },
  permalink,
  noindex,
}: Eleventy.Page): string {
  return (
    <PageContainer
      {...siteData}
      locale={locale}
      style="fixed"
      version={version}
      permalink={permalink}
      noindex={noindex}
    >
      <article id="content">{content}</article>
    </PageContainer>
  )
}
