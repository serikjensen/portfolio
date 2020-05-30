import { css } from '@emotion/core'

export default ({ colors, backgrounds }) => ({
  root: css`
    display: flex;
    justify-content: center;
    background-color: ${colors.lightest};
    background-image: ${backgrounds.striped(colors.light)};
    padding: 4rem 2rem;
  `,
  content: css`
    text-align: center;
    max-width: 32rem;
  `
})
