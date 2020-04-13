import faker from 'faker'
import Silk from '../../lib/silk'
import Time from './time'

describe('small text', () => {
  it('renders', () => {
    const date = faker.date.past()
    const wrapper = mount(<Time date={date} />)
    expect(wrapper.querySelector('time')).toHaveTextContent(date.toISOString().split('T')[0])
  })
})
