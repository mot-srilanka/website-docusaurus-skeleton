// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ministry of ABC',
  tagline: 'Sri Lanka',
  // url: 'https://stag.moa.gov.lk',
  url: 'https://moa.gov.lk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'moa-srilanka', // Usually your GitHub org/user name.
  projectName: 'website-moa-gov-lk', // Usually your repo name.
  plugins: [
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/mot-srilanka/website-mot-gov-lk/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/mot-srilanka/website-mot-gov-lk/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          // Add below your Google Analytics tracking ID to get web analytics
          trackingID: 'G-xxxxxx',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'si', 'ta'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      si: {
        label: 'සිංහල',
      },
      ta: {
        label: 'தமிழ்',
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ministry of ABC',
        logo: {
          alt: 'Ministry of ABC',
          src: 'img/Emblem_of_Sri_Lanka.png',
        },
        items: [
          {
            to: 'docs/about-us',
            label: 'About Us',
            position: 'left',
          },
          {
            to: 'docs/institutions/',
            label: 'Our Institutions',
            position: 'left',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   to: 'docs/resources/documents',
          //   label: 'Resources',
          //   position: 'left',
          // },
          {
            to: 'docs/contact-us',
            label: 'Contact Us',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'About Us',
                to: 'docs/about-us',
              },
              {
                label: 'Our Institutions',
                to: 'docs/institutions/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              // {
              //   label: 'Resources',
              //   to: 'docs/resources/documents',
              // },
              {
                label: 'Contact Us',
                to: 'docs/contact-us',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/moaechsrilanka',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/moa_srilanka',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/moasrilanka',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/moa-srilanka/website-moa-gov-lk',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ministry of ABC, Sri Lanka.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
