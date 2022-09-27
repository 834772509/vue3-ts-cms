import type { RouteRecordRaw } from "vue-router";

export function mapMenusToRouters(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  // 1.加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = import.meta.glob("@/router/main/**/*.ts", {
    eager: true
  });
  for (const path in routeFiles) {
    const route: any = routeFiles[path];
    allRoutes.push(route.default);
  }
  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) {
          routes.push(route);
        }
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };
  _recurseGetRoute(userMenus);
  return routes;
}
