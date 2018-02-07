import React from 'react'
import { HomePageTemplate } from '../../templates/home/home'

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default HomePagePreview
