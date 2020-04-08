import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Eleventy from '../../types/global'

export = function ArticleList({
  content,
  'site-data': { meta, title: siteTitle, description: siteDescription, keywords: siteKeywords },

  collections: { article: articles },
}: Eleventy.Page): string {
  return (
    <PageContainer
      meta={meta}
      title={siteTitle}
      description={siteDescription}
      keywords={siteKeywords}
    >
      <article id="content">{content}</article>
      <div className="article-list">
        {articles
          .map(({ data: { permalink, title, keywords, description } }) => (
            <a href={permalink}>
              <h3>{title}</h3>
              {keywords && <h6>{keywords}</h6>}
              <p>{description}</p>
            </a>
          ))
          .join('')}
      </div>
    </PageContainer>
  )
}
