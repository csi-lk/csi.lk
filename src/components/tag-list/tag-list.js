import React from 'react'
import PropTypes from 'prop-types'

const TagListComponent = ({ tags }) => tags.split(', ').map(tag => (
  <span data-tag={tag} key={tag}>#{tag}</span>
))

TagListComponent.propTypes = {
  tags: PropTypes.string.isRequired,
}

TagListComponent.displayName = 'TagListComponent'

export default TagListComponent
