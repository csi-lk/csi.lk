import React from 'react'

import NotFoundPage from './404'

describe('Page: Not Found (404)', () => {
  it('renders', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
