import { RouteObject } from "react-router-dom";
import components from "./components";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../containers/Layout";
import LoginRoute from "./LoginRoute";
import { Suspense } from "react";
import FallBackUI from "../Components/FallBackUI";

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: (
      <Suspense fallback={<FallBackUI />}>
        <LoginRoute component={components.Login} />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <components.Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <components.Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/inbox",
        element: (
          <ProtectedRoute>
            <components.Inbox />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <components.Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: (
          <ProtectedRoute>
            <components.NoPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
