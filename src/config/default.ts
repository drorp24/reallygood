export default {
  HOST: process.env.NODE_HOST || "localhost", // Define your host from "./package.json"
  PORT: process.env.PORT || 8080,
  API_URL: "https://jsonplaceholder.typicode.com",
  APP: {
    htmlAttributes: { lang: "en" },
    title: "The Really Good Challenge",
    titleTemplate: "Really Good Challenge - %s",
    meta: [
      {
        name: "description",
        content: "A React based technical challenge, from Really Good",
      },
    ],
  },
};
