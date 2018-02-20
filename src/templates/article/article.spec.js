import React from 'react'

import ArticleTemplate from './article'

describe('Template: Article', () => {
  it('renders', () => {
    const wrapper = shallow(<ArticleTemplate data={{
      markdownRemark: {
        html: '<p>Test</p>',
        frontmatter: {
          title: 'Test',
        },
      },
    }}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})
