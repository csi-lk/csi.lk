import React from 'react'

import HomePagePreview from './preview-home'

describe('Preview Template: Home', () => {
  it('renders', () => {
    const props = {
      entry: {
        getIn: jest.fn(() => 'test'),
      },
      widgetFor: jest.fn(() => 'test'),
    }
    const wrapper = shallow(<HomePagePreview {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(props.widgetFor).toHaveBeenCalled()
    expect(props.entry.getIn).toHaveBeenCalledTimes(2)
  })
})
