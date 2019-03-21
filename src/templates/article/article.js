import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql' // eslint-disable-line

import { TagList, SEOTags } from '../../components'

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
          <TagList tags={tags} />
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <footer>
          <p>
            Find a spelling mistake or issue with this article? <br />
            <a href={`https://github.com/csi-lk/csi.lk/tree/master/src/pages/articles${path}.md`} target="_blank" rel="noreferrer noopener">Submit a edit on Github</a>
          </p>
        </footer>
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
