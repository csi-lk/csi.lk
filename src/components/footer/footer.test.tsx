import { getByTestId } from '@testing-library/dom'
import Silk from '../../lib/silk'
import Footer from './footer'

describe('footer', () => {
  it('renders classname if passed as a prop', () => {
    const wrapper = mount(<Footer fixed locale="default" />)
    expect(getByTestId(wrapper, 'footer')).toHaveClass('fixed')
  })
})
