import { css } from '@emotion/core'

export default ({ colors, backgrounds }) => ({
  root: css`
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
  `,
  container: css`
    max-width: 60rem;
  `,
  'background-primary': css`
    background: ${colors.lightest};
    background-image: ${backgrounds.striped(colors.light)};
  `,
  'background-primary-inverse': css`
    background: ${colors.darkest};
  `,
  'background-secondary-inverse': css`
    background: ${colors.secondary};
  `,
  heading: css`
    margin-top: 0;
  `,
  'text-primary': css`
    color: ${colors.primary};
  `,
  'text-primary-inverse': css`
    color: ${colors.lightest};
  `,
  'text-secondary-inverse': css`
    color: ${colors.lightest};
  `,
  link: css`
    font-weight: bold;
  `
})