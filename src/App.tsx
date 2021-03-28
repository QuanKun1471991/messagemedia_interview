import { BrowserRouter as Router, Switch } from "react-router-dom";
import { makeRoute, privateRoutes, publicRoutes } from "./core/contants/routes";
import { Suspense, useMemo } from "react";
import Loading from "./components/Loader";
import React from "react";
import "antd/dist/antd.css";
import "./assets/styles/loader.scss";
import { Provider } from "react-redux";
import store from "services/store";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const createRoutes = useMemo(() => {
    return (
      <Switch>
        {privateRoutes.map(makeRoute)}
        {publicRoutes.map(makeRoute)}
      </Switch>
    );
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <Provider store={store()}>
          <Suspense fallback={<Loading />}>{createRoutes}</Suspense>
        </Provider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
