import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import graphql from 'graphql' // eslint-disable-line
import './article.scss'

const ArticleTemplate = ({
  data: {
    markdownRemark: {
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
}) => (
  <section className="article">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:url" content={`https://www.csi.lk${path}`} />
      <meta name="og:image" content="http://www.csi.lk/into-code.png" />
      <meta name="og:description" content={description} />
    </Helmet>
    <a href="/">back home</a>
    <article
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </section>
)

ArticleTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  pathContext: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
}

export const articleQuery = graphql`
  query Article($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title,
        description
      }
    }
  }
`

export default ArticleTemplate
