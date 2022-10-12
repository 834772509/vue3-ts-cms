import type { IBreadcrumb } from "@/base-ui/breadcrumb";
import type { RouteRecordRaw } from "vue-router";

let firstMenu: any = null;

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
        if (!firstMenu) {
          firstMenu = menu;
        }
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };
  _recurseGetRoute(userMenus);
  return routes;
}

export function patchMapBreadcrumbs(userMenus: any, currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = [];
  pathMapToMent(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

export function pathMapToMent(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMent(menu.children ?? [], currentPath);
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name });
        breadcrumbs?.push({ name: findMenu.name });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = [];

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? []);
      } else if (menu.type === 3) {
        permissions.push(menu.permission);
      }
    }
  };

  _recurseGetPermission(userMenus);
  return permissions;
}

export function menuMapLeafKeys(menuList: any[]) {
  const leftKeys: number[] = [];
  const _recurseGetLeft = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeft(menu.children);
      } else {
        leftKeys.push(menu.id);
      }
    }
  };

  _recurseGetLeft(menuList);
  return leftKeys;
}

export { firstMenu };
