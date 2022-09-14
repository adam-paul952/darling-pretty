import { generateSitemap } from "react-sitemap-generator";
import router from "./router";

generateSitemap({
  url: "http://localhost:3000",
  routes: [router],
  output: "./public",
  // options: {
  //   '/video/:id': {
  //     slugs: { id: ['value1', 'value2'] }, // Creates multiple routes
  //     priority: 1,
  //     changefreq: 'never',
  //   },
  // },
});

export default {};
