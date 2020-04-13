import { lorem } from 'faker'
import Silk from '../../lib/silk'
import SmallText from './small-text'

describe('small text', () => {
  it('renders', () => {
    const content = lorem.words()
    const wrapper = mount(<SmallText>{content}</SmallText>)
    expect(wrapper).toHaveTextContent(content)
  })
})
