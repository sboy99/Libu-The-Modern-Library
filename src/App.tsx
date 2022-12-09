import React from "react";
import { Route, Routes } from "react-router-dom";
import { pages, lazyPages } from "./app/pages";

const { Layout } = pages;
const { HomePage, AboutPage, BlogPage, BooksPage, ErrorPage } = lazyPages;

const Loading = () => <div className="">Loading</div>;
const App = () => {
  return (
    <div className="App min-h-screen bg-skin-deep">
      <React.Suspense fallback={<Loading />}>
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
