import React from 'react'
import { useTheme } from 'emotion-theming'

import { DiJavascript1, DiReact, DiHtml5, DiCss3, DiNodejsSmall } from 'react-icons/di/index.esm.js'
import { FaUniversalAccess } from 'react-icons/fa/index.esm.js'

import composeStyles from './badgesStyles'

const Badges = () => {
  const theme = useTheme()
  const styles = composeStyles(theme)

  const iconProps = {
    css: styles.icon,
    'aria-hidden': 'true',
  }

  return (
    <ul css={styles.root}>
      <li css={styles.item}><DiJavascript1 {...iconProps} />JavaScript</li>
      <li css={styles.item}><DiReact {...iconProps} />React</li>
      <li css={styles.item}><FaUniversalAccess {...iconProps} />Accessibility</li>
      <li css={styles.item}><DiHtml5 {...iconProps} />HTML</li>
      <li css={styles.item}><DiNodejsSmall {...iconProps} />Node Scripting</li>
      <li css={styles.item}><DiCss3 {...iconProps} />CSS</li>
    </ul>
  )
}

export default Badges