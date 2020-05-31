import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import Badges from './badges'
import composeStyles from './heroStyles'

const Hero = ({ caption }) => {
  const theme = useTheme()
  const styles = composeStyles(theme)

  return (
    <div css={styles.root}>
      <div css={styles.content}>
        <h1>
          <span css={styles.hello}>Hello!</span>
          <span css={styles.space}>&nbsp;</span>
          <span>I&#39;m Steve Jensen</span>
        </h1>
        <p>{caption}</p>
        <Badges />
      </div>
    </div>
  )
}

Hero.propTypes = {
  caption: PropTypes.node
}

Hero.defaultProps = {
  caption: null
}

export default Hero