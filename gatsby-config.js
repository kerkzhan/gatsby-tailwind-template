module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind`,
    description: `Tailwind V2 with Gatsby`,
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
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet'
  ]
}