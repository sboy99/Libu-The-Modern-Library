import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback, Fallback } from './app/components';
import ProtectedRoute from './app/components/ProtectedRoute';
import LibraryControlLayout from './app/components/libraryControlPage/layout';
import { Layout, lazyPages } from './app/pages';

const {
  HomePage,
  AboutPage,
  BlogPage,
  BooksPage,
  ErrorPage,
  DashboardPage,
  UserManagementPage,
} = lazyPages;

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="App min-h-screen bg-skin-deep ">
        <React.Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Route>
            {/* Control Panel */}
            <Route
              path="/control-panel"
              element={
                <ProtectedRoute allowedRoles={['librarian', 'owner']}>
                  <LibraryControlLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardPage />} />
              <Route path="user-management" element={<UserManagementPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </React.Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default App;
