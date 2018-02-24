import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import graphql from 'graphql' // eslint-disable-line

import { TagList } from '../../components'

import './article.scss'

const ArticleTemplate = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        description,
        tags,
      },
    },
  },
  pathContext: {
    path,
  },
  preview,
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
    { preview ? (
      <div>{html}</div>
    ) : (
      <article>
        <header>
          <h1>{title}</h1>
          <TagList tags={tags} />
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    )}
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
  preview: PropTypes.bool,
}

ArticleTemplate.defaultProps = {
  preview: false,
}

export const articleQuery = graphql`
  query Article($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title,
        description,
        tags
      }
    }
  }
`

export default ArticleTemplate
