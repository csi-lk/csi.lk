import React from 'react'

import HomePage from './home'

import * as cmsSetup from '../../cms/cms-setup'

describe('Layout: Index', () => {
  it('renders', () => {
    cmsSetup.default = jest.fn()
    const wrapper = shallow(<HomePage data={{ markdownRemark: { html: '<p>Test</p>' } }} />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('Script').prop('onLoad')()
    expect(cmsSetup.default).toHaveBeenCalled()
  })
})
