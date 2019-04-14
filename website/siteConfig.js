const siteConfig = {
  title: 'Evoplex',
  tagline: 'agent-based modeling on networks',
  url: 'https://evoplex.org',
  baseUrl: '/',

  projectName: 'evoplex.github.io',
  organizationName: 'evoplex',

  headerLinks: [
    {page: 'index#download', label: 'Download'},
    {doc: 'index', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
    {languages: true},
    {search: true},
    {href: 'https://github.com/evoplex', label: 'GitHub'},
  ],

  headerIcon: 'img/evoplex.svg',
  footerIcon: 'img/evoplex.svg',
  favicon: 'img/favicon.png',

  colors: {
//    primaryColor: '#24292e',
//    secondaryColor: '#3b4252',//'#4183f1',
//    linkColor: '#0366d6',
    primaryColor: '#121020',
    secondaryColor: '#121020',
    accentColor: '#785BA3',
    actionColor: '#008cf2',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Marcos Cardinot',

  usePrism: ['jsx'],
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-blocks-buttons.js',
  ],

  // do not include the css files from those dirs in the main.css
  separateCss: [ 'static/api' ],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/evoplex.png',
  twitterImage: 'img/evoplex.png',

  /* enable edit button for docs */
  editUrl: 'https://github.com/evoplex/evoplex.github.io/edit/src/docs/',

  translationRecruitingLink: 'https://crowdin.com/project/evoplex',

  algolia: {
    apiKey: 'd069454e2b73d4dfc6bed1804197ca9d',
    indexName: 'evoplex',
    algoliaOptions: {
      facetFilters: ['language:LANGUAGE'],
    },
  },
  cleanUrl: true,
  scrollToTop: true,
  twitter: true,
  twitterUsername: 'EvoplexOrg',
  gaTrackingId: 'UA-121617079-1',

};

module.exports = siteConfig;
