// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'bpd',
  tagline: 'dsc10 ❤️ bpd',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dsc-courses.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bpd-reference/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dsc-courses', // Usually your GitHub org/user name.
  projectName: 'bpd-reference', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Allow live coding.
  themes: ['@docusaurus/theme-live-codeblock'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dsc-courses/bpd-reference/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'bpd',
        logo: {
          alt: 'bpd Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'documentation',
          },
          {
            href: 'https://github.com/dsc-courses/bpd-reference',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'docs',
            items: [
              {
                label: 'documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'course links',
            items: [
              {
                label: 'dsc10.com',
                href: 'https://dsc10.com/',
              },
              {
                label: 'edstem',
                href: 'https://edstem.org/us/courses/57461/discussion/',
              },
              {
                label: 'gradescope',
                href: 'https://www.gradescope.com/courses/757097',
              },
            ],
          },
          {
            title: 'more',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/m1nce/bpd-reference?tab=readme-ov-file',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Minchan Kim Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
