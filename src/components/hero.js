import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import Badges from './badges'
import composeStyles from './heroStyles'

const Hero = ({ heading, caption }) => {
  const theme = useTheme()
  const styles = composeStyles(theme)

  return (
    <div css={styles.root}>
      <div css={styles.content}>
        <h1>{heading}</h1>
        <p>{caption}</p>
        <Badges />
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.node,
  caption: PropTypes.node
}

Hero.defaultProps = {
  heading: null,
  caption: null
}

export default Hero