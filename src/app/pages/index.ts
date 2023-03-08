import React from 'react';
export { default as Layout } from '../components/layouts';

// Lazy Pages
const HomePage = React.lazy(() => import('./HomePage'));
const BooksPage = React.lazy(() => import('./BooksPage'));
const AboutPage = React.lazy(() => import('./AboutPage'));
const BlogPage = React.lazy(() => import('./BlogPage'));
const ErrorPage = React.lazy(() => import('./ErrorPage'));
const DashboardPage = React.lazy(() => import('./admin/DashboardPage'));
const UserManagementPage = React.lazy(
  () => import('./admin/UserManagementPage')
);

export const lazyPages = {
  HomePage,
  BooksPage,
  AboutPage,
  BlogPage,
  ErrorPage,
  DashboardPage,
  UserManagementPage,
};
