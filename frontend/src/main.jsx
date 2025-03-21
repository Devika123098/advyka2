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
import Feedback from './Feedback/Feedback';
import GiveFeedback from './Feedback/GiveFeedback';
import FeedbackDetails from './Feedback/FeedbackDetails';
import Gallery from './Gallery/Gallery';
import GalleryDetail from './Gallery/GalleryDetail';
import AddSelfie from './Gallery/Addselfie';

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
  {
    path: "/feedback",
    element: (
      <Loading>
        <Feedback />
      </Loading>
    ),
  },
  {
    path: "/givefeedback",
    element: (
      <Loading>
        <GiveFeedback />
      </Loading>
    ),
  },
  {
    path: "/feedback/:id", 
    element: (
      <Loading>
      <FeedbackDetails />
      </Loading>
    ),
  },
  {
    path: "/gallery", 
    element: (
      <Loading>
      <Gallery />
      </Loading>
    ),
  },
  {
    path: "/addselfie", 
    element: (
      <Loading>
      <AddSelfie />
      </Loading>
    ),
  },
  {
    path: "/gallery/:id", 
    element: (
      <Loading>
      <GalleryDetail />
      </Loading>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)