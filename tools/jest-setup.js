import {
  configure,
  shallow,
  render,
  mount,
} from 'enzyme'

import EnzymeAdapter from 'enzyme-adapter-react-16'

configure({ adapter: new EnzymeAdapter() })

global.shallow = shallow
global.render = render
global.mount = mount

jest.mock('graphql', () => jest.fn())
