import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Time from '../../components/time/time'
import Eleventy from '../../types/global'

export = function ArticleList({
  content,
  'site-data': { meta, keywords: siteKeywords },
  i18n: { locale },
  pkg: { version },
  collections: { article: articles },
}: Eleventy.Page): string {
  return (
    <PageContainer
      meta={meta}
      title="Callum Silcock | Articles"
      description="A collection of articles I've written over the years about random topics including emoji, react, macos, functional testing and even gaming."
      keywords={siteKeywords}
      version={version}
      locale={locale}
    >
      <article id="content">{content}</article>
      <div className="article-list">
        {articles
          .reverse()
          .map(({ data: { permalink, title, keywords, description }, date }) => (
            <a href={permalink.replace('.html', '')}>
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
