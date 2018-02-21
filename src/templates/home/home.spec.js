import React from 'react'

import HomePage from './home'

// import * as cmsSetup from '../../cms/cms-setup'

describe('Template: Home', () => {
  it('renders', () => {
    // cmsSetup.default = jest.fn()
    const wrapper = shallow(<HomePage data={{
      content: {
        html: '<p>Test</p>',
        frontmatter: {
          description: 'test',
        },
      },
      articles: {
        edges: [
          {
            node: {
              timeToRead: 1,
              frontmatter: {
                title: 'Test',
                path: '/test',
                tags: 'one, two',
              },
            },
          },
        ],
      },
    }}
    />)
    expect(wrapper).toMatchSnapshot()
    // wrapper.find('Script').prop('onLoad')()
    // expect(cmsSetup.default).toHaveBeenCalled()
  })
})
