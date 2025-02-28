import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import Home from './Home/Home';
import About from './About/About';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)