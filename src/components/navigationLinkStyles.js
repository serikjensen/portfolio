import { css } from '@emotion/core'

export default ({ colors, typography }) => ({
  root: css`
    color: ${colors.lightest};
    font-family: ${typography.fontFamilyHeading};
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: 0.125rem solid ${colors.lightest};
    }

    @media (max-width: 28.25em) {
      font-size: 1rem;
    }
  `
})