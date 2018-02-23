import React from 'react'
import PropTypes from 'prop-types'

import HomePageTemplate from '../../../templates/home/home'

const HomePagePreview = ({ widgetFor }) => (
  <HomePageTemplate
    data={{
      content: {
        html: widgetFor('body'),
        frontmatter: {
          title: widgetFor('title'),
          description: widgetFor('description'),
        },
      },
      articles: {
        edges: [
          {
            node: {
              timeToRead: 1,
              frontmatter: {
                title: 'Test',
                path: '/test',
                tags: 'one, two',
              },
            },
          },
        ],
      },
    }}
  />
)


HomePagePreview.propTypes = {
  widgetFor: PropTypes.func.isRequired,
}

export default HomePagePreview
