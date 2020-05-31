import { css } from '@emotion/core'

export default ({ colors }) => ({
  root: css`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
    margin-top: 3rem;
    padding-top: 1rem;
    border-top: 1px solid ${colors.dark};
  `,
  item: css`
    margin: 1.5rem;
    text-align: center;
    width: 6rem;
    flex-shrink: 0;
  `,
  icon: css`
    display: block;
    margin: auto;
    font-size: 3rem;
    color: ${colors.primary};
  `
})