import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEOTagsComponent = ({
  title,
  description,
  path,
}) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:url" content={`https://www.csi.lk${path}`} />
    <meta name="og:image" content="http://www.csi.lk/into-code.png" />
    <meta name="og:description" content={description} />
  </Helmet>
)

SEOTagsComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string,
}

SEOTagsComponent.defaultProps = {
  path: '/',
}

SEOTagsComponent.displayName = 'SEOTagsComponent'

export default SEOTagsComponent
