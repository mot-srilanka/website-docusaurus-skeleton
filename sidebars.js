/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // motSidebar: [{ type: 'autogenerated', dirName: '.' }],
  // aboutUsSidebar: [{ type: 'autogenerated', dirName: '.' }],
  // contactUsSidebar: [{ type: 'autogenerated', dirName: './contact-us' }],

  // But you can create a sidebar manually

  aboutUsSidebar: [
    {
      type: 'category',
      label: 'About Us',
      items: ['about-us/about-us', 'about-us/the-officials'],
    },
  ],
  contactUsSidebar: [
    {
      type: 'category',
      label: 'Contact Us',
      items: ['contact-us/contact-us'],
    },
  ],
  institutionsSidebar: [
    {
      // type: 'autogenerated', dirName: './institutions'
      type: 'category',
      label: 'Our Institutions',
      items: ['institutions/institutions', 'institutions/Institution_1', 'institutions/Institution_2', 'institutions/Institution_3', 'institutions/Institution_4', 'institutions/Institution_5', 'institutions/Institution_6'],

    },
  ],
  resourcesSidebar: [
    {
      // type: 'autogenerated', dirName: './institutions'
      type: 'category',
      label: 'Resoures',
      items: ['resources/documents', 'resources/playbook/playbook'],

    },
  ],
};

module.exports = sidebars;
