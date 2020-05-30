export default {
  colors: {
    primary: '#225C77',
    secondary: '#A31212',
    dark: '#595959',
    darkest: '#2E2E2E',
    light: '#FBFBFB',
    lightest: '#FFFFFF'
  },
  backgrounds: {
    striped: (color) => (
      `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23${color.substring(1)}' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%23${color.substring(1)}' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E")`
    )
  },
  typography: {
    fontFamilyHeading: `"Ageo", Helvetica Neue, Helvetica,Arial, sans-serif`,
    fontFamilyBody: `"Book Antiqua", "Palatino Linotype", Georgia, serif`
  }
}