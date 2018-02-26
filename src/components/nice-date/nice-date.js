import React from 'react'
import PropTypes from 'prop-types'

const NiceDateComponent = ({ date }) => {
  const newDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
  return (
    <span>{newDate}</span>
  )
}

NiceDateComponent.propTypes = {
  date: PropTypes.string.isRequired,
}

NiceDateComponent.displayName = 'NiceDateComponent'

export default NiceDateComponent
