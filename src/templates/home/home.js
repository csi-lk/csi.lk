import React from 'react'
import Script from 'react-load-script'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import cmsSetup from '../../cms/cms-setup'
import graphql from 'graphql' // eslint-disable-line

import './home.scss'

const HomePage = ({
  data: {
    content: {
      html,
      frontmatter: {
        title,
        description,
      },
    },
    articles,
  },
}) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:url" content="https://www.csi.lk/" />
      <meta name="og:image" content="http://www.csi.lk/into-code.png" />
      <meta name="og:description" content={description} />
    </Helmet>
    <Script
      url="https://identity.netlify.com/v1/netlify-identity-widget.js"
      onLoad={() => cmsSetup()}
    />
    <section className="home">
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
    <section className="articleList">
      I (sometimes) write articles:
      { articles.edges.map(({
        node: {
          timeToRead,
          frontmatter: {
            path,
            title: articleTitle,
            tags,
          },
        },
      }) => (
        <a href={path} key={path}>
          <h3>{articleTitle}</h3>
          <h4>Reading time: {timeToRead} minutes</h4>
          { tags.split(', ').map(tag => (
            <span data-tag={tag} key={tag}>#{tag}</span>
          ))}
        </a>
      )) }
    </section>
  </div>
)

HomePage.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
    articles: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          timeToRead: PropTypes.number.isRequired,
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
query HomePage {
  content: markdownRemark(frontmatter: { path: { eq: "/" } }) {
    html,
    frontmatter {
      title,
      description,
    }
  }
  articles: allMarkdownRemark(filter: { frontmatter: { template: { eq: "article" } }}) {
    edges {
      node {
        timeToRead,
        frontmatter {
          title,
          path,
          tags
        }
      }
    }
  }
}
`

export default HomePage
