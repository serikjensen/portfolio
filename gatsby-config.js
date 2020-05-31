module.exports = {
  siteMetadata: {
    title: `Steve Jensen Portfolio`,
    description: `A site containing info about my work experience and personal projects..`,
    author: `@serikjensen`,
    email: `stephen.erik.jensen@gmail.com`,
    gitHub: `https://github.com/serikjensen`,
    linkedIn: `https://www.linkedin.com/in/steve-jensen-21ba0152/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`
  ],
}
