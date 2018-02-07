import CMS from 'netlify-cms'
import 'netlify-cms/dist/cms.css'

import HomePagePreview from './preview-templates/HomePagePreview'

// CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
