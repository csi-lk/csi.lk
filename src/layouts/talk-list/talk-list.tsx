import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Time from '../../components/time/time'
import Eleventy from '../../types/global'

export = function TalkList({
  content,
  'site-data': { meta, keywords: siteKeywords },
  i18n: { locale },
  pkg: { version },
  collections: { talk: talks },
}: Eleventy.Page): string {
  return (
    <PageContainer
      meta={meta}
      title="Callum Silcock | Talks"
      description="A collection of talks I have presented several talks in conferences, meetups and internal sessions covering agile methodology and visual / functional testing."
      keywords={siteKeywords}
      version={version}
      locale={locale}
    >
      <article id="content">{content}</article>
      <div className="talk-list">
        {talks
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
