import React from 'react'

import TimelinePage from './timeline'

describe('Template: Home', () => {
  let props
  beforeEach(() => {
    props = {
      data: {
        content: {
          html: '<p>Test</p>',
          frontmatter: {
            description: 'Test',
            title: 'Test',
          },
        },
      },
      pathContext: {
        path: '/timeline',
      },
    }
  })
  it('renders', () => {
    const wrapper = shallow(<TimelinePage {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('renders preview', () => {
    const wrapper = shallow(<TimelinePage {...props} preview />)
    expect(wrapper).toMatchSnapshot()
  })
})
