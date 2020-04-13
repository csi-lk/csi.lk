import '@testing-library/dom'
import '@testing-library/jest-dom'
import * as Silk from './src/lib/silk'

global.Silk = Silk

global.mount = (element: string): HTMLElement => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = element
  return wrapper
}
