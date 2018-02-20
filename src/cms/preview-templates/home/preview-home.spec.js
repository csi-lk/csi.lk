import React from 'react'

import HomePagePreview from './preview-home'

describe('Preview Template: Home', () => {
  it('renders', () => {
    const wrapper = shallow(<HomePagePreview widgetFor={() => ({
      data: {
        content: 'test',
      },
    })}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})
