import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout.jsx";
import { PATHS } from "./paths.js";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ClassesPage from "../pages/ClassesPage.jsx";
import ClassDetailPage from "../pages/ClassDetailPage.jsx";
import PackagesPage from "../pages/PackagesPage.jsx";
import BlogPage from "../pages/BlogPage.jsx";
import BlogDetailPage from "../pages/BlogDetailPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: PATHS.home, element: <HomePage /> },
      { path: PATHS.about, element: <AboutPage /> },
      { path: PATHS.classes, element: <ClassesPage /> },
      { path: PATHS.classDetail, element: <ClassDetailPage /> },
      { path: PATHS.packages, element: <PackagesPage /> },
      { path: PATHS.blog, element: <BlogPage /> },
      { path: PATHS.blogDetail, element: <BlogDetailPage /> },
      { path: PATHS.contact, element: <ContactPage /> },
      { path: PATHS.privacyPolicy, element: <PrivacyPolicyPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
