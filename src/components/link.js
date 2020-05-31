import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { useTheme } from 'emotion-theming'

import ScreenReaderContent from './screenReaderContent'

import composeStyles from './linkStyles'

const Link = ({ as: ElementType, color, target, children, ...props }) => {
  const theme = useTheme()
  const styles = composeStyles(theme)

  let linkChildren = children

  const linkStyles = [
    styles.root,
    styles[color]
  ]

  if (target && target === '_blank') {
    linkChildren = [
      <ScreenReaderContent key="sr-content">Open in new window</ScreenReaderContent>,
      children
    ]
  }

  return <ElementType target={target} css={linkStyles} {...props}>{linkChildren}</ElementType>
}

Link.propTypes = {
  as: PropTypes.elementType,
  target: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'primary-inverse'])
}

Link.defaultProps = {
  as: GatsbyLink,
  target: null,
  color: 'primary'
}

export default Link