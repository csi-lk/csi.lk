import React from 'react'

import WorkTemplate from './work'

describe('Template: Work', () => {
  let props
  beforeEach(() => {
    props = {
      data: {
        markdownRemark: {
          html: '<p>Test</p>',
          frontmatter: {
            title: 'Test',
            dateStart: '2012-01-01T00:00:00.000Z',
            dateEnd: '2015-01-01T00:00:00.000Z',
            description: 'Test desc',
            url: 'https://test.com',
            active: true,
            skills: 'test1, test2',
          },
        },
      },
      pathContext: {
        path: '/test',
      },
    }
  })
  it('renders', () => {
    const wrapper = shallow(<WorkTemplate {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('renders preview', () => {
    const wrapper = shallow(<WorkTemplate {...props} preview />)
    expect(wrapper).toMatchSnapshot()
  })
  it('renders inactive', () => {
    props.data.markdownRemark.frontmatter.active = false
    const wrapper = shallow(<WorkTemplate {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
