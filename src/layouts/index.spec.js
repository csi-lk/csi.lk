import React from 'react'

import Index from './index'

describe('Layout: Index', () => {
  it('renders', () => {
    const wrapper = shallow(<Index>{() => jest.fn()}</Index>)
    expect(wrapper).toMatchSnapshot()
  })
})
