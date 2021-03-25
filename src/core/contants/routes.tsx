import { Route } from "react-router-dom";
import React, { LazyExoticComponent, MemoExoticComponent } from "react";

interface RouteProps {
  exact: boolean;
  pathName: string;
  component:
    | React.LazyExoticComponent<() => JSX.Element>
    | LazyExoticComponent<MemoExoticComponent<() => JSX.Element>>;
}

//private route
const DEFAULT = "/";
const DASHBOARD = "/dashboard";

//public route
const NOTFOUND = "*";

export const privateRoutes: RouteProps[] = [
  {
    exact: true,
    pathName: DEFAULT,
    component: React.lazy(() => import("../../pages/dashboard")),
  },
  {
    exact: true,
    pathName: DASHBOARD,
    component: React.lazy(() => import("../../pages/dashboard")),
  },
];

export const publicRoutes: RouteProps[] = [
  {
    exact: false,
    pathName: NOTFOUND,
    component: React.lazy(() => import("../../pages/notFound")),
  },
];

export const makeRoute = (routeNode: RouteProps) => {
  const Component = routeNode.component;
  return (
    <Route
      exact={routeNode.exact}
      path={routeNode.pathName}
      component={Component}
    />
  );
};
