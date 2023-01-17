import * as Silk from '../../lib/silk'
import PageContainer from '../../components/page-container/page-container'
import Eleventy from '../../types/global'

const MonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const EmploymentTypes = {
  contract: 'Contract',
  'full-time': 'Full Time',
}

export = function ArticleList({
  content,
  'site-data': { meta, keywords: siteKeywords },
  i18n: { locale },
  pkg: { version },
  collections: { job: jobs },
  permalink,
}: Eleventy.Page): string {
  const sortedJobs = jobs.sort(
    ({ data: { startYear: startYearA } }, { data: { startYear: startYearB } }) =>
      startYearB - startYearA,
  )
  // Move current job to the top of the list
  sortedJobs.some(
    ({ data }, idx) =>
      data.endMonth === undefined && sortedJobs.unshift(sortedJobs.splice(idx, 1)[0]),
  )
  return (
    <PageContainer
      meta={meta}
      title="Callum Silcock | Timeline"
      description="All of the projects, jobs and contracts I've worked over the last decade listed out chronologically going back to my first job as a 'web designer and developer'."
      keywords={siteKeywords}
      version={version}
      locale={locale}
      permalink={permalink}
    >
      <article id="content">{content}</article>
      <div className="job-list">
        {sortedJobs
          .map(
            ({
              data: {
                title,
                companyName,
                employmentType,
                startMonth,
                startYear,
                endMonth,
                endYear,
                location,
                website,
              },
              templateContent,
            }) => (
              <div>
                <h2>{title}</h2>
                <span className="job-type">
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer nofollow"
                    aria-describedby="open-new-window-external"
                  >
                    {companyName}
                  </a>{' '}
                  &#183; {EmploymentTypes[employmentType]}
                </span>
                <span className="extra-info">
                  {MonthNames[startMonth + 1]} {startYear} -{' '}
                  {endMonth ? MonthNames[endMonth + 1] : 'Present'} {endYear && endYear}{' '}
                  {location && `in ${location}`}
                </span>
                {templateContent}
              </div>
            ),
          )
          .join('')}
      </div>
    </PageContainer>
  )
}
