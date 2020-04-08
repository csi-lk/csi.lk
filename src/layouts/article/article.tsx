import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Eleventy from '../../types/global'

export = function Article({
  content,
  'site-data': { meta, title: siteTitle, description: siteDescription, keywords: siteKeywords },
  title,
  description,
  keywords,
}: Eleventy.Page): string {
  return (
    <PageContainer
      meta={meta}
      title={title || siteTitle}
      description={description || siteDescription}
      keywords={keywords || siteKeywords}
      style="fixed"
    >
      <article id="content" class="article">
        <h1>{title}</h1>
        {content}
      </article>
    </PageContainer>
  )
}
