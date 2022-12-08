import React from "react";
import {
  HomeModernIcon,
  BookOpenIcon,
  HeartIcon,
  InformationCircleIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/outline";
import {
  HomeModernIcon as ActiveHomeModernIcon,
  BookOpenIcon as ActiveBookOpenIcon,
  HeartIcon as ActiveHeartIcon,
  InformationCircleIcon as ActiveInformationCircleIcon,
  BookmarkSquareIcon as ActiveBookmarkSquareIcon,
} from "@heroicons/react/24/solid";

type NavLink = {
  id: number;
  title: string;
  Icon: React.FC<React.ComponentProps<"svg">>;
  ActiveIcon: React.FC<React.ComponentProps<"svg">>;
  to: string;
  disabled?: boolean;
};

// Nav links
export const NavLinks: Array<NavLink> = [
  {
    id: 1,
    title: `Home`,
    Icon: HomeModernIcon,
    ActiveIcon: ActiveHomeModernIcon,
    to: `/`,
  },
  {
    id: 2,
    title: `Explore`,
    Icon: BookOpenIcon,
    ActiveIcon: ActiveBookOpenIcon,
    to: `/books`,
  },
  {
    id: 3,
    title: `Favourites`,
    Icon: HeartIcon,
    ActiveIcon: ActiveHeartIcon,
    to: `/favourites`,
  },
  {
    id: 4,
    title: `About`,
    Icon: InformationCircleIcon,
    ActiveIcon: ActiveInformationCircleIcon,
    to: `/about`,
  },
  {
    id: 5,
    title: `Blog`,
    Icon: BookmarkSquareIcon,
    ActiveIcon: ActiveBookmarkSquareIcon,
    to: `/blog`,
    disabled: true,
  },
];
