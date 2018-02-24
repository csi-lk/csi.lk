import React from 'react'

import TagListComponent from './tag-list'

describe('Component: Tag List', () => {
  let props
  beforeEach(() => {
    props = {
      tags: 'test1, test2',
    }
  })
  it('renders', () => {
    const wrapper = shallow(<TagListComponent {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
