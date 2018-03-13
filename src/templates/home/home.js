import React from 'react'
import Script from 'react-load-script'
import PropTypes from 'prop-types'
import cmsSetup from '../../cms/cms-setup'
import graphql from 'graphql' // eslint-disable-line

import {
  TagList,
  SEOTags,
} from '../../components'

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
  preview,
}) => (
  <div>
    <SEOTags
      title={title}
      description={description}
    />
    <Script
      url="https://identity.netlify.com/v1/netlify-identity-widget.js"
      onLoad={() => cmsSetup()}
    />
    <section className="home">
      { preview ? (
        <div>{html}</div>
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) }
    </section>
    <section className="articleList">
      <p>I (sometimes) write articles:</p>
      <div>
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
          <a href={`${path}/`} key={path}>
            <h3>{articleTitle}</h3>
            <h4>Reading time: {timeToRead} minutes</h4>
            <TagList tags={tags} />
          </a>
        )) }
      </div>
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
  preview: PropTypes.bool,
}

HomePage.defaultProps = {
  preview: false,
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
