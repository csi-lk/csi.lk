import { lorem } from 'faker'
import Silk from '../../lib/silk'
import BigText from './big-text'

describe('big text', () => {
  it('renders', () => {
    const content = lorem.words()
    const wrapper = mount(<BigText>{content}</BigText>)
    expect(wrapper).toHaveTextContent(content)
  })
})
