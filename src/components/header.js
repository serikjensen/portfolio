import { Link } from 'gatsby'
import React from 'react'
import { useTheme } from 'emotion-theming'

import Logo from './logo'
import composeStyles from './headerStyles'

import NavigationLink from './navigationLink'

const Header = () => {
  const theme = useTheme()
  const styles = composeStyles(theme)

  return (
    <header css={styles.root}>
      <Link to="/" css={styles.logo} aria-label="Back to homepage"><Logo /></Link>
      <nav>
        <ul css={styles.navList}>
          <li css={styles.navItem}><NavigationLink to="/designSystems/">Design Systems</NavigationLink></li>
          <li css={styles.navItem}><NavigationLink to="/otherProjects/">Projects</NavigationLink></li>
          <li css={styles.navItem}><NavigationLink to="/resume/">Resume</NavigationLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
