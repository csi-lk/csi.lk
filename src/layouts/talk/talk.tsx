import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Eleventy from '../../types/global'
import Time from '../../components/time/time'
import type { Talk } from '../../types/global'

const baseClass = 'talk'

export = function TalkPage({
  'site-data': { meta, title: siteTitle, description: siteDescription, keywords: siteKeywords },
  i18n: { locale },
  pkg: { version },
  title,
  description,
  keywords,
  repo,
  slidesEmbed,
  slidesSD,
  slidesPdf,
  slidesRaw,
  content,
  permalink,
  page: { date, inputPath },
}: Eleventy.Page & Talk['data']): string {
  return (
    <PageContainer
      meta={meta}
      title={title || siteTitle}
      description={description || siteDescription}
      keywords={keywords || siteKeywords}
      version={version}
      locale={locale}
      style="fixed"
      permalink={permalink}
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
        {description}
        <div className="embed-container">
          <iframe src={slidesEmbed} allowfullscreen scrolling="no" allow="encrypted-media;">
            Loading SpeakerDeck within iFrame
          </iframe>
        </div>
        <h2 className={`${baseClass}-date`}>Relevant Links</h2>
        <ul>
          <li>
            <a
              href={repo}
              target="_blank"
              rel="noopener"
              aria-describedby="open-new-window-external"
            >
              Companion Repo
            </a>
          </li>
          <li>
            <a
              href={slidesSD}
              target="_blank"
              rel="noopener"
              aria-describedby="open-new-window-external"
            >
              Slides Presentation on Speakerdeck
            </a>
          </li>
          <li>
            <a
              href={slidesPdf}
              target="_blank"
              rel="noopener"
              aria-describedby="open-new-window-external"
            >
              Slides in .PDF format
            </a>
          </li>
          <li>
            <a
              href={slidesRaw}
              target="_blank"
              rel="noopener"
              aria-describedby="open-new-window-external"
            >
              Raw markdown of the slides (incl. notes)
            </a>
          </li>
        </ul>
        {content}
      </article>
    </PageContainer>
  )
}
