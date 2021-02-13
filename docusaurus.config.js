module.exports = {
  title: 'SICOPE Model',
  tagline: 'An open source model-based testing tool for web applications',
  url: 'https://sicope-model.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sicope-model', // Usually your GitHub org/user name.
  projectName: 'sicope-model.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SICOPE Model',
      logo: {
        alt: 'SICOPE Model Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'docs/tutorial', label: 'Tutorial', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'screenshots', label: 'Screenshots', position: 'left'},
        {
          href: 'https://github.com/sicope-model/sicope-model',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: 'docs/',
            },
            {
              label: 'Model',
              to: 'docs/model/',
            },
            {
              label: 'Task',
              to: 'docs/task/',
            },
            {
              label: 'Bug',
              to: 'docs/bug/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://sicope-model.slack.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sicope-model/sicope-model',
            },
          ],
        },
        {
          title: 'Sponsors',
          items: [
            {
              html: `
                <a href="https://www.jetbrains.com/?from=SICOPE-Model" target="_blank" rel="noreferrer noopener" aria-label="JetBrains">
                  <img src="https://github.com/JetBrains/logos/raw/master/web/jetbrains/jetbrains.svg" alt="Sponsor by JetBrains" />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tien Vo. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-40149047-4',
    },
    algolia: {
      apiKey: '562cb171575211627118ad5ffda03139',
      indexName: 'mbtbundle',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sicope-model/sicope-model-website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sicope-model/sicope-model-website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
