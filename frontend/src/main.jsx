import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import Home from './Home/Home';

import About from './About/About';
import Shop from './Shop/Shop';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Proshows from './Proshows/Proshows';
import Events from './Events/Events';
import EventDetails from './EventDetails/EventDetails';
import Loading from './Loading/Loading';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Loading >
        <Home />
      </Loading>
    ),
  },
  {
    path: "/about",
    element: <About />,

  },
  {
    path: "/proshows",
    element: (
      <Loading >
        <Proshows />
      </Loading>
    ),
  },
  {
    path: "/events",
    element: (
      <Loading >
        <Events/>
      </Loading>
    ),
  },
  {
    path: "/events/:id",
    element: (
      <Loading >
        <EventDetails />
      </Loading>
    ),
  },
  {
    path: "/merchandise",
    element: (
      <Loading>
        <Shop />
      </Loading>
    ),
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)