import { css } from '@emotion/core'
import tinycolor from 'tinycolor2'

export default ({ colors }) => {
  return {
    root: css`
      font-weight: bold;
    `,
    primary: css`
      color: ${colors.primary};

      &:hover {
        color: ${tinycolor(colors.primary).darken(15).toString()};
      }

      &:focus {
        outline: 0.125rem solid ${colors.primary};
      }
    `,
    'primary-inverse': css`
      color: ${colors.lightest};

      &:hover {
        color: ${tinycolor(colors.lightest).darken(8).toString()};
      }

      &:focus {
        outline: 0.125rem solid ${colors.lightest};
      }
    `
  }
}