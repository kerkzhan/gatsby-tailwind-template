module.exports = {
  siteMetadata: {
    title: `BUMP Routelist`,
    description: `Routelist displaying all boulder problems at BUMP Bouldering`,
    author: `Boon Kerk Zhan`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },	
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `secret_jZdja7b6n8xcaSPKLxpKCmpjXxgmbKA5n4tRlwgD1jf`,
        databaseId: `c30c3650ffb04190a3ef054e6eaf1ee1?v=7ff302858fb945acaee8298015d584e4`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet'
  ]
}