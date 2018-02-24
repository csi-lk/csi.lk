import React from 'react'
import PropTypes from 'prop-types'

import ArticleTemplate from '../../../templates/article/article'

const ArticleTemplatePreview = ({ entry, widgetFor }) => (
  <ArticleTemplate
    data={{
      markdownRemark: {
        html: widgetFor('body'),
        frontmatter: {
          title: entry.getIn(['data', 'title']),
          description: entry.getIn(['data', 'description']),
          tags: entry.getIn(['data', 'tags']),
        },
      },
    }}
    pathContext={{
        path: entry.getIn(['data', 'path']),
    }}
    preview
  />
)

ArticleTemplatePreview.propTypes = {
  widgetFor: PropTypes.func.isRequired,
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
}

export default ArticleTemplatePreview
