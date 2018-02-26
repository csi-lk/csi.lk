import React from 'react'

import NiceDateComponent from './nice-date'

describe('Component: Nice Date', () => {
  let props
  beforeEach(() => {
    props = {
      date: '2012-10-01T00:00:00.000Z',
    }
  })
  it('renders', () => {
    const wrapper = shallow(<NiceDateComponent {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
