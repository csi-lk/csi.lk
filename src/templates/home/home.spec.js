import React from 'react'

import HomePage from './home'

// import * as cmsSetup from '../../cms/cms-setup'

describe('Template: Home', () => {
  it('renders', () => {
    // cmsSetup.default = jest.fn()
    const wrapper = shallow(<HomePage data={{
      content: {
        html: '<p>Test</p>',
      },
      articles: {
        edges: [
          {
            node: {
              timeToRead: 1,
              frontMatter: {
                title: 'Test',
                path: '/test',
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
