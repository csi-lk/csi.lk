import CMS from 'netlify-cms'
import 'netlify-cms/dist/cms.css'

import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('blog', BlogPostPreview)
