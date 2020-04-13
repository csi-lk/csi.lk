import { queryHelpers } from '@testing-library/dom'
import faker from 'faker'
import Silk from '../../lib/silk'
import Header from './header'

const getByName = queryHelpers.queryByAttribute.bind(null, 'name')
const getAllByName = queryHelpers.queryAllByAttribute.bind(null, 'name')

describe('header', () => {
  it('renders with default props', () => {
    const properties = {
      meta: new Array(Math.floor(Math.random() * 6) + 1).fill({
        name: 'test-meta',
        content: faker.random.word(),
      }),
      title: faker.lorem.word(),
      description: faker.lorem.sentence(),
      keywords: `${faker.lorem.word()}, ${faker.lorem.word()}`,
      version: faker.system.semver(),
    }
    const wrapper = mount(<Header {...properties} />)
    expect(wrapper.querySelector('title')).toHaveTextContent(properties.title)
    expect(wrapper.querySelector('link')).toHaveProperty(
      'href',
      `http://localhost/styles/index.css?v=${properties.version}`,
    )
    expect(getByName(wrapper, 'keywords')).toHaveProperty('content', properties.keywords)
    expect(getByName(wrapper, 'description')).toHaveProperty('content', properties.description)
    expect(getAllByName(wrapper, 'test-meta')).toHaveLength(properties.meta.length)
  })
})
