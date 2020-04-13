export function createElement(
  tag: string | Function,
  attributes: [],
  ...children: HTMLElement[]
): string | HTMLElement[] {
  if (tag === '') return children
  if (typeof tag === 'function') {
    return tag({ ...attributes }, children.join(' '))
  }
  const htmlAttributes = attributes
    ? Object.keys(attributes)
        .map(attributeKey => {
          const attributeValue = attributes[attributeKey]
          if (attributeKey === 'className') {
            if (!attributeValue) return '' // <button className="undefined" />
            return `class="${attributeValue}"` // <button className="bla" />
          }
          if (typeof attributeValue === 'boolean' && attributeValue) return attributeKey // <button disabled />
          return `${attributeKey}="${attributeValue}"` // <button data-attr="value" />
        })
        .join(' ')
    : ''
  return `<${tag} ${htmlAttributes}>${children.join(' ')}</${tag}>`
}

export function Fragment(): string {
  return ''
}

export default createElement
