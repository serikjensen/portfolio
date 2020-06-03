import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'

import composeStyles from './articleStyles'

const Article = ({ children }) => {
  const theme = useTheme()
  const styles = composeStyles(theme)

  return (
    <div css={styles.root}>
      <div css={styles.content}>
        <div css={styles.children}>
          {children}
        </div>
      </div>
    </div>
  )
}

Article.propTypes = {
  children: PropTypes.node
}

Article.defaultProps = {
  children: null
}

export default Article