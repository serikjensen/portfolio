import React from 'react'
import { useTheme } from 'emotion-theming'
import { useStaticQuery, graphql } from 'gatsby'
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa/index.esm.js'

import composeStyles from './footerStyles'

const Footer = () => {
  const theme = useTheme()
  const styles = composeStyles(theme)

  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          email
          gitHub
          linkedIn
        }
      }
    }
  `)

  const {
    email,
    gitHub,
    linkedIn
  } = data.site.siteMetadata

  return (
    <div css={styles.root}>
      <footer css={styles.footer}>
        <address css={styles.address}>
          <a css={styles.link} href={gitHub}>
            <FaGithub css={styles.icon} />GitHub
          </a>
          <a css={styles.link} href={linkedIn}>
            <FaLinkedinIn css={styles.icon} />LinkedIn
          </a>
          <a css={styles.link} href={`mailto:${email}`}>
            <FaRegEnvelope css={styles.icon} />{email}
          </a>
        </address>
      </footer>
    </div>
  )
}

export default Footer