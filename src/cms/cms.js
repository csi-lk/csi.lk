import CMS from 'netlify-cms' // eslint-disable-line
import 'netlify-cms/dist/cms.css' // eslint-disable-line

import HomePagePreview from './preview-templates/HomePagePreview'

// CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
