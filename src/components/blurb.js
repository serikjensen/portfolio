import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import Link from './link'

import composeStyles from './blurbStyles'

const Blurb = ({ heading, caption, background, href, linkText }) => {
  const theme = useTheme()
  const styles = composeStyles(theme)

  const backgroundStyles = [
    styles.root,
    styles[`background-${background}`]
  ]


  const textStyles = styles[`text-${background}`]

  const headingStyles = [
    styles.heading,
    textStyles
  ]

  return (
    <div css={backgroundStyles}>
      <div css={styles.container}>
        <h2 css={headingStyles}>{heading}</h2>
        <p css={background !== 'primary' && textStyles}>{caption}</p>
        <Link to={href} color={background === 'primary' ? 'primary' : 'primary-inverse'}>{linkText}</Link>
      </div>
    </div>
  )
}

Blurb.propTypes = {
  heading: PropTypes.node,
  caption: PropTypes.node,
  background: PropTypes.oneOf(['primary', 'primary-inverse', 'secondary-inverse']),
  href: PropTypes.string,
  linkText: PropTypes.string
}

Blurb.defaultProps = {
  heading: null,
  caption: null,
  background: 'primary',
  linkText: PropTypes.string
}

export default Blurb