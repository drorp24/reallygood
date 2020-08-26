import App from "../app";
import { Home, NotFound } from "../pages";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home, // Add your route here
      },
      {
        component: NotFound,
      },
    ],
  },
];
