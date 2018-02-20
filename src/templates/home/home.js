import React from 'react'
// import Script from 'react-load-script'
import PropTypes from 'prop-types'
// import cmsSetup from '../../cms/cms-setup'
import graphql from 'graphql' // eslint-disable-line

import './home.scss'

const HomePage = ({
  data: {
    content: {
      html,
    },
    articles,
  },
}) => (
  [
    <section className="home">
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>,
    <section className="articleList">
      I (sometimes) write articles:
      { articles.edges.map(article => (
        <a href={article.node.frontmatter.path} key={article.node.frontmatter.path}>
          <h3>{article.node.frontmatter.title}</h3>
          <h4>Reading time: {article.node.timeToRead} minutes</h4>
        </a>
      )) }
    </section>,
  ]
)

// <Script
//   url="https://identity.netlify.com/v1/netlify-identity-widget.js"
//   onLoad={() => cmsSetup()}
// />

HomePage.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
query HomePage {
  content: markdownRemark(frontmatter: { path: { eq: "/" } }) {
    html
  }
  articles: allMarkdownRemark(filter: { frontmatter: { template: { eq: "article" } }}) {
    edges {
      node {
        timeToRead,
        frontmatter {
          title,
          path
        }
      }
    }
  }
}
`

export default HomePage
