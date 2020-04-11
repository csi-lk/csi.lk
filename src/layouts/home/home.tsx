import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Eleventy from '../../types/global'

export = function Home({
  content,
  'site-data': siteData,
  pkg: { version },
}: Eleventy.Page): string {
  return (
    <PageContainer {...siteData} style="fixed" version={version}>
      <article id="content">{content}</article>
    </PageContainer>
  )
}
