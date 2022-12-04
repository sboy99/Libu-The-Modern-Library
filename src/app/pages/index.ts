import React from "react";
import Layout from "../components/layouts";

// Lazy Pages
const HomePage = React.lazy(() => import("../pages/HomePage"));

export const pages = { Layout };
export const lazyPages = { HomePage };
