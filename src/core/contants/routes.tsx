import { Route } from "react-router-dom";
import React from "react";

interface RouteProps {
  id: number;
  exact: boolean;
  pathName: string;
  component: any;
}

//private route
const DEFAULT = "/";
const DASHBOARD = "/dashboard";

//public route
const NOTFOUND = "*";

export const privateRoutes: RouteProps[] = [
  {
    id: 1,
    exact: true,
    pathName: DEFAULT,
    component: React.lazy(() => import("../../pages/dashboard")),
  },
  {
    id: 2,
    exact: true,
    pathName: DASHBOARD,
    component: React.lazy(() => import("../../pages/dashboard")),
  },
];

export const publicRoutes: RouteProps[] = [
  {
    id: 3,
    exact: false,
    pathName: NOTFOUND,
    component: React.lazy(() => import("../../pages/notFound")),
  },
];

export const makeRoute = (routeNode: RouteProps) => {
  const Component = routeNode.component;
  return (
    <Route
      key={routeNode.id}
      exact={routeNode.exact}
      path={routeNode.pathName}
      component={Component}
    />
  );
};
