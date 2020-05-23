import * as Silk from '../../lib/silk'

const BigText = (_: unknown, children: string): HTMLElement => {
  return <h1 className="big-text">{children}</h1>
}

export default BigText
