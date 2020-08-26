import React from "react";
import { RouteProps } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
import { hot } from "react-hot-loader";

import config from "../config";
// Import your global styles here
import "normalize.css/normalize.css";
import styles from "./styles.module.scss";

interface Route {
  route: { routes: RouteProps[] };
}

const App = ({ route }: Route) => (
  <div className={styles.App}>
    <Helmet {...config.APP} />
    {renderRoutes(route.routes)}
  </div>
);

export default hot(module)(App);
