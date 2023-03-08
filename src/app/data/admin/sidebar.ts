import {
  BanknotesIcon,
  BriefcaseIcon,
  SwatchIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import {
  BanknotesIcon as ActiveBanknotesIcon,
  BriefcaseIcon as ActiveBriefcaseIcon,
  SwatchIcon as ActiveSwatchIcon,
  UsersIcon as ActiveUsersIcon,
} from '@heroicons/react/24/solid';

import type { ComponentProps, FC } from 'react';

interface ISidebarItem {
  to: string;
  title: string;
  icon: FC<ComponentProps<'svg'>>;
  activeIcon: FC<ComponentProps<'svg'>>;
}

export const sidebarItems: ISidebarItem[] = [
  {
    to: '/control-panel',
    title: 'Dashboard',
    icon: BriefcaseIcon,
    activeIcon: ActiveBriefcaseIcon,
  },
  {
    to: '/control-panel/user-management',
    title: 'Users',
    icon: UsersIcon,
    activeIcon: ActiveUsersIcon,
  },
  {
    to: '/control-panel/book-management',
    title: 'Books',
    icon: SwatchIcon,
    activeIcon: ActiveSwatchIcon,
  },
  {
    to: '/control-panel/order-management',
    title: 'Orders',
    icon: BanknotesIcon,
    activeIcon: ActiveBanknotesIcon,
  },
];
