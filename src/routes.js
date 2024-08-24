import React from "react";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import { useRoutes } from "react-router-dom";

export const Routes = () => {
  const PublicRoute = [
    {
      children: [
        { path: "/", element: <Home /> },
        { path: "*", element: <Error /> },
      ],
    },
  ];

  return useRoutes(PublicRoute);
};
