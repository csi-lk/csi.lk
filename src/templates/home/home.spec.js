import React from 'react'

import HomePage from './home'

describe('Layout: Index', () => {
  it('renders', () => {
    const wrapper = shallow(<HomePage data={{ markdownRemark: { html: '<p>Test</p>' } }} />)
    expect(wrapper).toMatchSnapshot()
  })
})
