import { css } from '@emotion/core'

export default ({ colors, typography }) => ({
  root: css`
    @font-face {
      font-family: 'Ageo';
      src: url('${process.env.GATSBY_AGEO_FONT_URL}');
    }

    body {
      background: ${colors.lightest};
      margin: 0;
      padding: 0;
      min-height: '100vh';
      max-width: '100vw';
      font-family: ${typography.fontFamilyHeading};
      color: ${typography.darkest};
      font-size: 1.125rem;
      line-height: 1.5;
    }

    p {
      margin-top: 0;
    }

    h1 {
      font-family: ${typography.fontFamilyHeading};
      color: ${colors.primary};
      font-size: 2.5rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }

    h2 {
      font-family: ${typography.fontFamilyHeading};
      color: ${colors.primary};
      font-size: 1.75rem;
      margin-top: 0;
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }

    h3 {
      font-family: ${typography.fontFamilyHeading};
      color: ${colors.primary};
    }

    h4 {
      font-family: ${typography.fontFamilyHeading};
      color: ${colors.primary};
    }

    h5 {
      font-family: ${typography.fontFamilyHeading};
      color: ${colors.primary};
    }

    h6 {
      font-family: ${typography.fontFamilyHeading};
      color: ${colors.primary};
    }
  `,
  content: css`
    margin: 0;
  `
})