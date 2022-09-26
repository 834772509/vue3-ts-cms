import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";
import { mapMenusToRouters } from "@/utils/map-menus";
import useLoginStore from "@/stores/login";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    name: "main",
    path: "/main",
    component: () => import("@/views/main/main.vue"),
    children: []
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/login.vue")
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/not-found/not-found.vue")
  }
];

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
});

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) {
      return "/login";
    }

    const loginStore = useLoginStore();
    const routes = mapMenusToRouters(loginStore.userMenus);

    routes.then((routes) => {
      routes.forEach((route) => {
        router.addRoute("main", route);
      });
    });
  }
});

export default router;
