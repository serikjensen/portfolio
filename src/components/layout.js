/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'

import Header from './header'
import Footer from './footer'
import composeStyles from './layoutStyles'
import theme from '../theme'

const Layout = ({ children }) => {
  const styles = composeStyles(theme)

  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles.root} />
      <Header />
      <div css={styles.content}>
        <main>
          {children}
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
