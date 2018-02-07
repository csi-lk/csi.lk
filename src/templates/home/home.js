import React from 'react'
import Script from 'react-load-script'
import PropTypes from 'prop-types'
import graphql from 'graphql'

import './home.scss'

export default class HomePage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  render() {
    const { data: { markdownRemark: post } } = this.props
    return (
      <section className="home">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
    )
  }
}

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
