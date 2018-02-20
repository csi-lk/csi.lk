import React from 'react'
import Script from 'react-load-script'
import PropTypes from 'prop-types'
import cmsSetup from '../../cms/cms-setup'
import graphql from 'graphql' // eslint-disable-line

import './home.scss'

const HomePage = ({ data: { markdownRemark: post } }) => (
  <section className="home">
    <Script
      url="https://identity.netlify.com/v1/netlify-identity-widget.js"
      onLoad={() => cmsSetup()}
    />
    <div
      dangerouslySetInnerHTML={{ __html: post.html }}
    />
  </section>
)

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default HomePage
