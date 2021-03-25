import { BrowserRouter as Router, Switch } from "react-router-dom";
import { makeRoute, privateRoutes, publicRoutes } from "./core/contants/routes";
import { Suspense, useMemo } from "react";
import Loading from "./components/loader";
import React from "react";
import "antd/dist/antd.css";
import "./assets/styles/layout.scss";
import Layout from "./layout";
const App = () => {
  const createRoutes = useMemo(() => {
    return (
      <>
        <Switch>
          {privateRoutes.map(makeRoute)}
          {publicRoutes.map(makeRoute)}
        </Switch>
      </>
    );
  }, []);

  return (
    <>
      <Router>
        <Layout>
          <Suspense fallback={<Loading />}>{createRoutes}</Suspense>
        </Layout>
      </Router>
    </>
  );
};

export default App;
