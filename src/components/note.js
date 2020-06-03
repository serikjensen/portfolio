import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import composeStyles from './noteStyles'

const Note = ({ children }) => {
  const theme = useTheme()
  const styles = composeStyles(theme)

  return (
    <aside css={styles.root}>
      <p css={styles.content}>
        {children}
      </p>
    </aside>
  )
}

Note.propTypes = {
  children: PropTypes.node
}

Note.defaultProps = {
  children: null
}

export default Note