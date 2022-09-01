import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Eleventy from '../../types/global'

const baseClass = 'bookshelf'

export = function Bookshelf({
  content,
  'site-data': { meta, title: siteTitle, description: siteDescription, keywords: siteKeywords },
  i18n: { locale },
  pkg: { version },
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
      version={version}
      locale={locale}
      style="fixed"
    >
      <article id="content" className={`${baseClass}`}>
        <h1>{title}</h1>
        <div className={`${baseClass}-subheader`}>
          <a
            href={`https://www.goodreads.com/review/list/107372765?shelf=read`}
            target="_blank"
            rel="noopener"
            aria-describedby="open-new-window-external"
          >
            Goodreads Profile
          </a>
        </div>
        <div className={`${baseClass}-content`}>{content}</div>
      </article>
    </PageContainer>
  )
}
