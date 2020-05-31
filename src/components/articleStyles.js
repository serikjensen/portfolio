import { css } from '@emotion/core'

export default ({ typography }) => ({
  root: css`
    display: flex;
    justify-content: center;
    flex-grow: 2;
    padding: 2rem;

    p {
      font-family: ${typography.fontFamilyBody};
      line-height: 1.65;
    }
  `,
  content: css`
    display: flex;
    flex-basis: 60rem;
  `
})