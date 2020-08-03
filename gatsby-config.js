module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `@frransier/gatsby-theme-123`,
      options: {
        rssFeed: `https://rss.acast.com/isabella-soker-sheila`,
      },
    },
  ],
};
