import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Eleventy from '../../types/global'
import Time from '../../components/time/time'

const baseClass = 'article'

export = function Article({
  content,
  'site-data': { meta, title: siteTitle, description: siteDescription, keywords: siteKeywords },
  i18n: { locale },

  pkg: { version },
  title,
  description,
  keywords,
  page: { date, inputPath },
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
          <h2 className={`${baseClass}-date`}>
            Posted on: <Time date={date} />
          </h2>
          <a
            href={`https://github.com/csi-lk/csi.lk/tree/master/${inputPath.replace('./', '')}`}
            target="_blank"
            rel="noopener"
            aria-describedby="open-new-window-external"
          >
            source
          </a>
        </div>
        {content}
      </article>
    </PageContainer>
  )
}
