module.exports = {
  siteMetadata: {
    title: `ArcezD's Blog`,
    name: `ArcezD Tech Notes`,
    siteUrl: `https://arcezd.github.io/`,
    description: `ArcezD personal blog and tech notes`,
    hero: {
      heading: `Welcome to my personal blog, this is just a space to save some notes.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/arcezd`,
      },
      {
        name: `github`,
        url: `https://github.com/arcezd`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/arcezd`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/arcezd/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
