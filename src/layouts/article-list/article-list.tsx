import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Time from '../../components/time/time'
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
          .reverse()
          .map(({ data: { permalink, title, keywords, description }, date }) => (
            <a href={permalink}>
              <h3>{title}</h3>
              <h6>
                <Time date={date} /> - {keywords && keywords}
              </h6>
              <p>{description}</p>
            </a>
          ))
          .join('')}
      </div>
    </PageContainer>
  )
}
