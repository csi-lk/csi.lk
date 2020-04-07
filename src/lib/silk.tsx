const fragment = 'Fragment'

export function createElement(tag: string | Function, attributes: [], ...children: any[]) {
  if (tag === '') return children
  if (typeof tag === 'function') {
    return tag({ ...attributes }, children.join(' '))
  }
  const htmlAttrs = attributes
    ? Object.keys(attributes)
        .map(attributeKey => {
          const attributeValue = attributes[attributeKey]
          if (attributeKey === 'className') return `class="${attributeValue}"` //<button className="bla" />
          if (typeof attributeValue === 'boolean' && attributeValue) return attributeKey //<button disabled />
          return `${attributeKey}="${attributeValue}"` //<button data-attr="value" />
        })
        .join(' ')
    : ''
  return `<${tag} ${htmlAttrs}>${children.join(' ')}</${tag}>`
}

export function Fragment() {
  return ''
}
