import { queryHelpers, getByTestId } from '@testing-library/dom'
import faker from 'faker'
import Silk from '../../lib/silk'
import PageContainer, { PageContainer as PageContainerInterface } from './page-container'

const getByName = queryHelpers.queryByAttribute.bind(null, 'name')
const getAllByName = queryHelpers.queryAllByAttribute.bind(null, 'name')

describe('header', () => {
  const defaultProperties = {
    meta: new Array(Math.floor(Math.random() * 6) + 1).fill({
      name: 'test-meta',
      content: faker.random.word(),
    }),
    title: faker.lorem.word(),
    description: faker.lorem.sentence(),
    keywords: `${faker.lorem.word()}, ${faker.lorem.word()}`,
    version: faker.system.semver(),
  }
  it('renders with default props', () => {
    const properties = { ...defaultProperties }
    const children = faker.lorem.sentence()
    const wrapper = mount(<PageContainer {...properties}>{children}</PageContainer>)
    // Header
    expect(wrapper.querySelector('title')).toHaveTextContent(properties.title)
    expect(wrapper.querySelector('link')).toHaveProperty(
      'href',
      `http://localhost/styles/index.css?v=${properties.version}`,
    )
    expect(getByName(wrapper, 'keywords')).toHaveProperty('content', properties.keywords)
    expect(getByName(wrapper, 'description')).toHaveProperty('content', properties.description)
    expect(getAllByName(wrapper, 'test-meta')).toHaveLength(properties.meta.length)
    //
    expect(getByTestId(wrapper, 'page-container')).toHaveClass('fluid')
    expect(wrapper.querySelector('main')).toHaveTextContent(children)
  })
  it('renders with fluid style', () => {
    const style: PageContainerInterface['style'] = 'fixed'
    const properties = {
      ...defaultProperties,
      style,
    }
    const children = faker.lorem.sentence()
    const wrapper = mount(<PageContainer {...properties}>{children}</PageContainer>)
    expect(getByTestId(wrapper, 'page-container')).toHaveClass('fixed')

    expect(wrapper.querySelector('main')).toHaveTextContent(children)
  })
})
