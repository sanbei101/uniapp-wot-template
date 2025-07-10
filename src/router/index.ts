import { createRouter } from "uni-mini-router";

import pagesJson from "../pages.json";
import pagesJsonToRoutes from "uni-parse-pages";
const routes = pagesJsonToRoutes(pagesJson);

const router = createRouter({
  routes: routes,
});
router.beforeEach((to, from, next) => {
  if (to.path && from.path) {
    console.log(`📍 导航: ${from.path} → ${to.path}`);
  }
  next();
});

export default router;
