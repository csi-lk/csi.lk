import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Eleventy from '../../types/global'

export = function ArticleList({
  content,
  'site-data': { meta, title, description },
  collections: { article: articles },
}: Eleventy.Page): string {
  return (
    <PageContainer meta={meta} title={title} description={description}>
      <article id="content">{content}</article>
      <div className="article-list">
        {articles
          .map(article => (
            <a href={article.data.permalink}>
              <h3>{article.data.title}</h3>
              <h6>{article.data.meta}</h6>
              <p>{article.data.description}</p>
            </a>
          ))
          .join('')}
      </div>
    </PageContainer>
  )
}
