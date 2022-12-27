import React from "react";
import { Route, Routes } from "react-router-dom";

import { Fallback } from "./app/components";
import { Layout, lazyPages } from "./app/pages";

const { HomePage, AboutPage, BlogPage, BooksPage, ErrorPage } = lazyPages;

const App = () => {
  return (
    <div className="App min-h-screen bg-skin-deep ">
      <React.Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
