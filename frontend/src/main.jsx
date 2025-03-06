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
import Proshows from './Proshows/Proshows';
import Events from './Events/Events';
import EventDetails from './EventDetails/EventDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,

  },
  {
    path: "/proshows",
    element: <Proshows />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/events/:id",
    element: <EventDetails />,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)