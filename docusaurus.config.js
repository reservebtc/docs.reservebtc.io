// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ReserveBTC Docs',
  tagline: 'Proof-of-Bitcoin Reserves. No KYC. No Custody.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.reservebtc.io',
  baseUrl: '/',

  organizationName: 'reservebtc', // заменишь если деплой в другом GitHub
  projectName: 'docs.reservebtc.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/reservebtc/docs.reservebtc.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/reservebtc/docs.reservebtc.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/og-dashboard-default.png', // можешь заменить на другой OG
    navbar: {
      title: 'ReserveBTC',
      logo: {
        alt: 'ReserveBTC Logo',
        src: 'img/logo.svg', // если нет svg — поставь png
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://www.reservebtc.io',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://github.com/reservebtc',
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
              label: 'How it works',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter/X',
              href: 'https://x.com/ReserveBTC',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main Site',
              href: 'https://www.reservebtc.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/reservebtc',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ReserveBTC.io. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;