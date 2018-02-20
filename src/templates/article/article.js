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
      },
    },
  },
}) => (
  <section className="article">
    <Helmet title={title} />
    <a href="/">back home</a>
    <div
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
}

export const articleQuery = graphql`
  query Article($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ArticleTemplate
