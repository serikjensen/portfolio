import React from 'react'
import { useTheme } from 'emotion-theming'
import { ClassNames } from '@emotion/core'
import { Link } from 'gatsby'

import composeStyles from './navigationLinkStyles'

const NavigationLink = (props) => {
  const theme = useTheme()
  const styles = composeStyles(theme)

  return (
    <ClassNames>
      {({ css }) => (
        <Link
          activeClassName={css`
            border-top: 0.25rem solid ${theme.colors.lightest} !important; /** Specificity wars for the activeClassName forced my hand here */
          `}
          css={styles.root}
          {...props}
        />
      )}
    </ClassNames>
  )
}

export default NavigationLink