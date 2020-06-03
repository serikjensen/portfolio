import { css } from '@emotion/core'

export default ({ colors, typography }) => ({
  root: css`
    border-top: 0.125rem solid ${colors.dark};
    border-bottom: 0.125rem solid ${colors.dark};
    display: block;
    padding: 1.5rem;
    margin-top: 1rem;
  `,
  content: css`
    display: block;
    padding: 0;
    margin: 0;
    font-family: ${typography.fontFamilyHeading};
  `
})