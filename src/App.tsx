import React from "react";
import { Route, Routes } from "react-router-dom";
import { pages, lazyPages } from "./app/pages";

const { Layout } = pages;
const { HomePage } = lazyPages;

const Loading = () => <div className="">Loading</div>;
const App = () => {
  return (
    <div className="App bg-base-light dark:bg-base-dark min-h-screen">
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
