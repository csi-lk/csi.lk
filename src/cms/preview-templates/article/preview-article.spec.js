import React from 'react'

import ArticleTemplatePreview from './preview-article'

describe('Preview Template: Home', () => {
  it('renders', () => {
    const props = {
      entry: {
        getIn: jest.fn(() => 'test'),
      },
      widgetFor: jest.fn(() => 'test'),
    }
    const wrapper = shallow(<ArticleTemplatePreview {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(props.widgetFor).toHaveBeenCalled()
    expect(props.entry.getIn).toHaveBeenCalledTimes(3)
  })
})
