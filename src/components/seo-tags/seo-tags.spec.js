import React from 'react'

import SEOTagsComponent from './seo-tags'

describe('Component: Tag List', () => {
  let props
  beforeEach(() => {
    props = {
      title: 'Test',
      description: 'Test',
      path: '/test',
    }
  })
  it('renders', () => {
    const wrapper = shallow(<SEOTagsComponent {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
