export type Sublink = {
  title: string;
  to: string;
  external?: boolean;
  href?: string;
};

type FooterLink = {
  mainTitle: string;
  subLinks: Sublink[];
};

export const FooterLinks: Array<FooterLink> = [
  {
    mainTitle: `Navigation`,
    subLinks: [
      {
        title: `Home`,
        to: `/`,
      },
      {
        title: `Books`,
        to: `/books`,
      },
      {
        title: `About`,
        to: `/about`,
      },
      {
        title: `Blog`,
        to: `/blog`,
      },
    ],
  },
  {
    mainTitle: `Official Blogs`,
    subLinks: [
      {
        title: `Home`,
        to: `/`,
      },
      {
        title: `Books`,
        to: `/books`,
      },
      {
        title: `About`,
        to: `/about`,
      },
      {
        title: `Blog`,
        to: `/blog`,
      },
    ],
  },
  {
    mainTitle: `Activity`,
    subLinks: [
      {
        title: `Home`,
        to: `/`,
      },
      {
        title: `Books`,
        to: `/books`,
      },
      {
        title: `About`,
        to: `/about`,
      },
      {
        title: `Blog`,
        to: `/blog`,
      },
    ],
  },
  {
    mainTitle: `Community`,
    subLinks: [
      {
        title: `Home`,
        to: `/`,
      },
      {
        title: `Books`,
        to: `/books`,
      },
      {
        title: `About`,
        to: `/about`,
      },
      {
        title: `Blog`,
        to: `/blog`,
      },
    ],
  },
];
