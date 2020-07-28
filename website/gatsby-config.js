module.exports = {
  siteMetadata: {
    title: `Portfolio site`,
    description: `This is my portfolio site made with Gatsby`,
    author: `Carl Smestad`,
  },
  pathPrefix: "/smestad.xyz",
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
    `gatsby-plugin-typescript`,
  ],
}
