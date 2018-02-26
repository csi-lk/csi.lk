import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql' // eslint-disable-line

import {
  TagList,
  SEOTags,
  NiceDate,
} from '../../components'

// import './article.scss'

const WorkTemplate = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        description,
        dateStart,
        dateEnd,
        url,
        active,
        skills,
      },
    },
  },
  pathContext: {
    path,
  },
  preview,
}) => (
  <section className="work">
    <SEOTags
      title={title}
      description={description}
      path={path}
    />
    <a href="/">back home</a>
    { preview ? (
      <div>{html}</div>
    ) : (
      <article>
        <header>
          <h1>{title}</h1>
          <h2><NiceDate date={dateStart} /> - <NiceDate date={dateEnd} /></h2>
          { active ? (
            <a href={url} target="_blank" rel="nofollow noopener">Website</a>
          ) : (
            <span>{url}</span>
          )}
          Skills: <TagList tags={skills} />
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <footer>
          <p>
            Find a spelling mistake or issue with this item? <br />
            <a href={`https://github.com/csi-lk/csi.lk/tree/master/src/pages${path}.md`} target="_blank" rel="nofollow noopener">Submit a edit on Github</a>
          </p>
        </footer>
      </article>
    )}
  </section>
)

WorkTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  pathContext: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  preview: PropTypes.bool,
}

WorkTemplate.defaultProps = {
  preview: false,
}

export const workQuery = graphql`
  query Work($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title,
        description,
        tags
        dateStart,
        dateEnd,
        url,
        active,
        skills
      }
    }
  }
`

export default WorkTemplate
