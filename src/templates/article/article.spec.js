import React from 'react'

import ArticleTemplate from './article'

describe('Template: Article', () => {
  let props
  beforeEach(() => {
    props = {
      data: {
        markdownRemark: {
          html: '<p>Test</p>',
          frontmatter: {
            title: 'Test',
            tags: 't1, t2',
            description: 'Test desc',
          },
        },
      },
      pathContext: {
        path: '/test',
      },
    }
  })
  it('renders', () => {
    const wrapper = shallow(<ArticleTemplate {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('renders preview', () => {
    const wrapper = shallow(<ArticleTemplate {...props} preview />)
    expect(wrapper).toMatchSnapshot()
  })
})
