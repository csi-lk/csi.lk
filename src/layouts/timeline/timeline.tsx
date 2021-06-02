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
  pkg: { version },
  collections: { job: jobs },
}: Eleventy.Page): string {
  return (
    <PageContainer
      meta={meta}
      title="Callum Silcock | Timeline"
      description="All of the projects, jobs and contracts I've worked over the last decade listed out chronologically"
      keywords={siteKeywords}
      version={version}
    >
      <article id="content">{content}</article>
      <div className="job-list">
        {jobs
          .sort(
            ({ data: { startYear: startYearA } }, { data: { startYear: startYearB } }) =>
              startYearB - startYearA,
          )
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
