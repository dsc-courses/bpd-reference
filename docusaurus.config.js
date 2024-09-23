// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'bpd',
  tagline: 'DSC 10 ❤️ bpd',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dsc-courses.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bpd-reference/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dsc-courses', // Usually your GitHub org/username.
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
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dsc-courses/bpd-reference/tree/main/',
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: '/bpd-reference/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: 'img/bpd-reference-social.jpg',
      navbar: {
        title: 'bpd',
        logo: {
          alt: 'bpd Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'statsSidebar',
            position: 'left',
            label: 'Statistical Inference',
          },
          {
            href: 'https://github.com/dsc-courses/bpd-reference',
            className: 'header-github-link',
            position: 'right',
            'aria-label': 'GitHub repository',
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
                label: 'Documentation',
                to: '/docs/documentation/intro',
              },
            ],
          },
          {
            title: 'Course Links',
            items: [
              {
                label: 'Course Site',
                href: 'https://dsc10.com/',
              },
              {
                label: 'Practice',
                href: 'https://practice.dsc10.com/',
              },
              {
                label: 'Edstem',
                // update this href every quarter
                href: 'https://edstem.org/us/courses/57461/discussion/',
              },
              {
                label: 'Gradescope',
                // update this href every quarter
                href: 'https://www.gradescope.com/courses/757097',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/m1nce/bpd-reference?tab=readme-ov-file',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DSC 10 @ UCSD Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      algolia: {
        // The application ID provided by Algolia
        appId: 'D5X89Z2PC8',

        // Public API key: it is safe to commit it
        apiKey: '9ce1f7604f9470a252bde8c5007df95c',

        indexName: 'dsc-coursesio',

        // Optional: see doc section below
        contextualSearch: true,
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    },
};

export default config;
