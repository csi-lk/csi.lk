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
  'site-data': { meta, title: siteTitle, description: siteDescription, keywords: siteKeywords },
  pkg: { version },
  collections: { job: jobs },
}: Eleventy.Page): string {
  console.log(jobs)
  return (
    <PageContainer
      meta={meta}
      title={siteTitle}
      description={siteDescription}
      keywords={siteKeywords}
      version={version}
    >
      <article id="content">{content}</article>
      <div className="job-list">
        {jobs
          .sort(
            ({ data: { startYear: startYearA } }, { data: { startYear: startYearB } }) =>
              startYearA + startYearB,
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
              },
              templateContent,
            }) => (
              <div>
                <h3>{title}</h3>
                <h4>
                  {companyName} &#183; {EmploymentTypes[employmentType]}
                </h4>
                <h6>
                  {MonthNames[startMonth + 1]} {startYear} -{' '}
                  {endMonth ? MonthNames[endMonth + 1] : 'Present'} {endYear && endYear}
                </h6>
                {templateContent}
              </div>
            ),
          )
          .join('')}
      </div>
    </PageContainer>
  )
}
