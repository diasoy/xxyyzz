import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import About from "./components/About/About.jsx";
import KiddyLearn from "./components/Project/kiddyLearn/KiddyLearn.jsx";
import Qris from "./components/Project/Qris/Qris.jsx";
import ArticleHeader from "./components/Article/ArticleHeader.jsx";
import Curriculum from "./components/utils/Curriculum.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/article",
    element: <ArticleHeader />,
  },
  {
    path: "/project-experience/kiddy-learn-adventures",
    element: <KiddyLearn />,
  },
  {
    path: "/project-experience/qris",
    element: <Qris />,
  },
  {
    path: "/curriculum",
    element: <Curriculum />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
