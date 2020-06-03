import { css } from '@emotion/core'

export default ({ typography }) => ({
  root: css`
    display: flex;
    justify-content: center;
    flex-grow: 2;
    padding: 2rem;
    font-family: ${typography.fontFamilyBody};
    line-height: 1.65;
    min-height: 70vh;

    h2 {
      margin-top: 3rem;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    ul {
      margin-bottom: 1rem;
    }
  `,
  content: css`
    display: flex;
    flex-basis: 60rem;
  `,
  children: css`
    width: 100%;
  `
})