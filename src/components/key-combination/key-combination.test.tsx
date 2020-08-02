import Silk from '../../lib/silk'
import KeyCombination from './key-combination'

describe('key combination', () => {
  it('renders', () => {
    const content = '⌘ Cmd + ⌥ Opt + Test'
    const wrapper = mount(<KeyCombination>{content}</KeyCombination>)
    expect(wrapper.querySelectorAll('span')).toHaveLength(3)
  })
})
