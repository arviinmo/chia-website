module.exports = {
  siteMetadata: {
    title: 'Chia',
    description: 'A minimal, dark blue theme for VS Code.',
    keywords: 'Chia, Chia theme, chia, theme, dark blue theme, VS Code theme',
    twitterHandle: '@',
    siteURL: 'https://Chiatheme.netlify.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'chia-theme',
        short_name: 'Chia Theme',
        start_url: '/',
        background_color: '#171c28',
        theme_color: '#1d2433',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
  ],
};
