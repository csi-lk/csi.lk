import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Eleventy from '../../types/global'

export = function Home({
  content,
  'site-data': { meta, title, description },
}: Eleventy.Page): string {
  return (
    <PageContainer meta={meta} title={title} description={description} style="fixed">
      <article id="content">{content}</article>
    </PageContainer>
  )
}
