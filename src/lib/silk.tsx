const fragment = 'Fragment'

export function createElement(tag: string | Function, attributes: [], ...children: any[]) {
  if (tag === '') return children
  if (typeof tag === 'function') {
    return tag({ ...attributes }, children.join(' '))
  }
  const htmlAttributes = attributes
    ? Object.keys(attributes)
        .map(attributeKey => {
          const attributeValue = attributes[attributeKey]
          if (attributeKey === 'className') return `class="${attributeValue}"` // <button className="bla" />
          if (typeof attributeValue === 'boolean' && attributeValue) return attributeKey // <button disabled />
          return `${attributeKey}="${attributeValue}"` // <button data-attr="value" />
        })
        .join(' ')
    : ''
  return `<${tag} ${htmlAttributes}>${children.join(' ')}</${tag}>`
}

export function Fragment() {
  return ''
}
