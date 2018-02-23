import React from 'react'
import PropTypes from 'prop-types'

import HomePageTemplate from '../../../templates/home/home'

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePageTemplate
    data={{
      content: {
        html: widgetFor('body'),
        frontmatter: {
          title: entry.getIn(['data', 'title']),
          description: entry.getIn(['data', 'description']),
        },
      },
      articles: {
        edges: [
          {
            node: {
              timeToRead: 1,
              frontmatter: {
                title: 'Articles will show here',
                path: '/test',
                tags: 'tag1, tag2',
              },
            },
          },
        ],
      },
    }}
    preview
  />
)


HomePagePreview.propTypes = {
  widgetFor: PropTypes.func.isRequired,
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }).isRequired,
}

export default HomePagePreview
