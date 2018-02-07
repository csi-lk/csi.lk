const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              template
              path
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { template: pageTemplate, path: pagePath } = node.frontmatter
      createPage({
        path: pagePath,
        component: path.resolve(
          `src/templates/${String(pageTemplate)}/${String(pageTemplate)}.js`,
        ),
        context: {
          path: pagePath,
        },
      })
    })
  })
}
