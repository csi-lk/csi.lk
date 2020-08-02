import * as Silk from '../../lib/silk'

export const DELIMITER = ' + '

const Key = (_: unknown, children: string): HTMLElement | string =>
  children
    .split(DELIMITER)
    .map(key => <span className="key">{key}</span>)
    .join(DELIMITER)

export default Key
