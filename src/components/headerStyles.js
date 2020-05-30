import { css } from '@emotion/core'

export default ({ colors }) => ({
  root: css`
    background: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: 4rem;

    @media (max-width: 28.25em) {
      padding: 0 0.5rem;
      height: 3rem;
    }
  `,
  logo: css`
    width: 2rem;
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;

    @media (max-width: 28.25em) {
      width: 1.5rem;
    }
  `,
  navList: css`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-left: 1rem;
    box-sizing: border-box;
  `,
  navItem: css`
    margin: 0 1rem;
    list-style: none;
    height: 3.75rem;
    box-sizing: border-box;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 28.25em) {
      height: 2.75rem;
    }

    @media (max-width: 23.75em) {
      margin: 0 0.5rem;
    }
  `
})