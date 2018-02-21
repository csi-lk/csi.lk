import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" content="Callum Silcock, contact@csi.lk" />
      <meta name="reply-to" content="contact@csi.lk" />
      <meta name="url" content="https://www.csi.lk" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Expires" content="0" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="og:type" content="text/html" />
      <meta name="og:site_name" content="Callum Silcock | Senior UI Developer" />
      <meta name="og:email" content="contact@csi.lk" />
      <meta name="og:phone_number" content="+61412454084" />
    </Helmet>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default TemplateWrapper
