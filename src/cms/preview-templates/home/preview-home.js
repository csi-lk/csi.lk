import React from 'react'
import PropTypes from 'prop-types'

import HomePageTemplate from '../../../templates/home/home'

const HomePagePreview = ({ widgetFor }) => (
  <HomePageTemplate
    data={{
      markdownRemark: {
        html: widgetFor('body'),
      },
    }}
  />
)


HomePagePreview.propTypes = {
  widgetFor: PropTypes.func.isRequired,
}

export default HomePagePreview
