import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql' // eslint-disable-line

import { SEOTags } from '../../components'

import './timeline.scss'

const TimelinePage = ({
  data: {
    content: {
      html,
      frontmatter: {
        title,
        description,
      },
    },
  },
  pathContext: {
    path,
  },
  preview,
}) => (
  <div>
    <SEOTags
      title={title}
      description={description}
      path={path}
    />
    <section className="timeline">
      { preview ? (
        <div>{html}</div>
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) }
    </section>
  </div>
)

TimelinePage.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  pathContext: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  preview: PropTypes.bool,
}

TimelinePage.defaultProps = {
  preview: false,
}


export const pageQuery = graphql`
query TimelinePage {
  content: markdownRemark(frontmatter: { path: { eq: "/timeline" } }) {
    html,
    frontmatter {
      title,
      description,
    }
  }
}
`

export default TimelinePage
