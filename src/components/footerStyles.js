import { css } from '@emotion/core'

export default ({ colors, backgrounds }) => ({
  root: css`
    display: flex;
    justify-content: center;
    flex-grow: 2;
    padding: 2rem;
    box-shadow: 0rem 0rem 1.5rem -0.25rem ${colors.darkest};
    border-top: 0.25rem solid ${colors.dark};
    background: ${colors.darkest};
    background-image: ${backgrounds.striped('#2B2B2B')};
  `,
  footer: css`
    display: flex;
    flex-basis: 60rem;
  `,
  link: css`
    color: ${colors.lightest};
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `,
  icon: css`
    display: inline-block;
    margin-right: 0.5rem;
    font-size: 1.5rem;
  `
})