import React from 'react'
import { useTheme } from 'emotion-theming'
import { useStaticQuery, graphql } from 'gatsby'
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa/index.esm.js'

import Link from './link'

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

  const linkProps = {
    as: 'a',
    color: 'primary-inverse',
    css: styles.link,
    target: '_blank'
  }

  return (
    <div css={styles.root}>
      <footer css={styles.footer}>
        <address css={styles.address}>
          <Link {...linkProps} href={gitHub}>
            <FaGithub css={styles.icon} />GitHub
          </Link>
          <Link {...linkProps} href={linkedIn}>
            <FaLinkedinIn css={styles.icon} />LinkedIn
          </Link>
          <Link {...linkProps} href={`mailto:${email}`}>
            <FaRegEnvelope css={styles.icon} />{email}
          </Link>
        </address>
      </footer>
    </div>
  )
}

export default Footer