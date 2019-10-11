/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: "", // Title for your website.
  sitetitle: "CODER Wiki",
  tagline: 'Knowledge base from technical learnings',
  url: 'https://coder-selvarajan.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'mywiki',
  organizationName: 'coder-selvarajan',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'javascript/basics', label: 'Web'},
    {doc: 'swift/swift-basics-part1', label: 'Mobile'},
    {doc: 'hadoop-overview', label: 'BigData'},
    // {doc: 'linux-overview', label: 'Linux'},
    // {doc: 'git', label: 'Git'},
    {doc: 'git', label: 'Misc'},
    // { search: true },
    // {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/coder-wiki.png',
  footerIcon: 'img/code-logo.png',
  favicon: 'img/code-logo2.png',
  // favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    // primaryColor: '#5e9390',
    // secondaryColor: '#416664',
    primaryColor: '#1287A5', //'#7274CE',
    secondaryColor: '#47535E',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Selvarajan.in`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    // theme: 'default',
    theme: 'github',
  },
  
  // Prism is another highlight for the specific language
  // usePrism: ['js'],

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  
  //to add CNAME file in gh-pages branch during site publish
  cname: 'coder.selvarajan.in',

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;


