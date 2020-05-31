import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const styles = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`

const ScreenReaderContent = ({ children }) => (
  <span css={styles}>{children}</span>
)

ScreenReaderContent.propTypes = {
  children: PropTypes.node
}

ScreenReaderContent.defaultProps = {
  children: null
}

export default ScreenReaderContent