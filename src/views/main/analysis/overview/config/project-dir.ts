export const projectDir = `
│  .editorconfig
│  .env.development
│  .env.production
│  .eslintrc.cjs
│  .gitignore
│  .prettierignore
│  .prettierrc.json
│  auto-imports.d.ts
│  commitlint.config.js
│  components.d.ts
│  env.d.ts
│  index.html
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.config.json
│  tsconfig.json
│  vite.config.ts
│
├─.husky
│  │  commit-msg
│  │  pre-commit
│  │
│  └─_
│          .gitignore
│          husky.sh
│
├─.vscode
│      extensions.json
│      settings.json
│
├─public
│      favicon.ico
│
└─src
    │  App.vue
    │  main.ts
    │  shims-vue.d.ts
    │
    ├─assets
    │  ├─css
    │  │      base.less
    │  │      index.less
    │  │
    │  └─img
    │          login-bg.svg
    │          logo.svg
    │
    ├─base-ui
    │  ├─breadcrumb
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      breadcrumb.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─card
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          card.vue
    │  │
    │  ├─code
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          code.vue
    │  │
    │  ├─count-up
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          countup.vue
    │  │
    │  ├─descriptions
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      descriptions.vue
    │  │  │
    │  │  └─types
    │  │          types.ts
    │  │
    │  ├─echart
    │  │  │  index.ts
    │  │  │
    │  │  ├─data
    │  │  │      china.json
    │  │  │
    │  │  ├─hooks
    │  │  │      use-echart.ts
    │  │  │
    │  │  └─src
    │  │          echart.vue
    │  │
    │  ├─form
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      form.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  └─table
    │      │  index.ts
    │      │
    │      └─src
    │              table.vue
    │
    ├─components
    │  ├─nav-header
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          nav-header.vue
    │  │          user-info.vue
    │  │
    │  ├─nav-menu
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          nav-menu.vue
    │  │
    │  ├─page-content
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          page-content.vue
    │  │
    │  ├─page-echarts
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      bar-echart.vue
    │  │  │      line-echart.vue
    │  │  │      map-echart.vue
    │  │  │      pie-echart.vue
    │  │  │      rose-echart.vue
    │  │  │
    │  │  ├─types
    │  │  │      index.ts
    │  │  │
    │  │  └─utils
    │  │          convert-data.ts
    │  │          coordinate-data.ts
    │  │
    │  ├─page-modal
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          page-modal.vue
    │  │
    │  ├─page-search
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          page-search.vue
    │  │
    │  └─statistical-panel
    │      │  index.ts
    │      │
    │      └─src
    │              statistical-panel.vue
    │
    ├─global
    │      index.ts
    │      register-properties.ts
    │
    ├─hooks
    │      use-page-modal.ts
    │      use-page-search.ts
    │      use-permission.ts
    │
    ├─router
    │  │  index.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.ts
    │      │  │
    │      │  └─overview
    │      │          overview.ts
    │      │
    │      ├─product
    │      │  ├─category
    │      │  │      category.ts
    │      │  │
    │      │  └─goods
    │      │          goods.ts
    │      │
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.ts
    │      │  │
    │      │  └─list
    │      │          list.ts
    │      │
    │      └─system
    │          ├─department
    │          │      department.ts
    │          │
    │          ├─menu
    │          │      menu.ts
    │          │
    │          ├─role
    │          │      role.ts
    │          │
    │          └─user
    │                  user.ts
    │
    ├─service
    │  │  config.ts
    │  │  demo.ts
    │  │  index.ts
    │  │  types.ts
    │  │
    │  ├─login
    │  │      login.ts
    │  │      type.ts
    │  │
    │  ├─main
    │  │  ├─analysis
    │  │  │      dashboard.ts
    │  │  │
    │  │  └─system
    │  │          system.ts
    │  │
    │  └─request
    │          index.ts
    │          type.ts
    │
    ├─stores
    │  │  global.ts
    │  │  index.ts
    │  │  login.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │      dashboard.ts
    │      │
    │      ├─product
    │      └─system
    │              system.ts
    │
    ├─utils
    │      cache.ts
    │      date-format.ts
    │      map-menus.ts
    │
    └─views
        ├─login
        │  │  login.vue
        │  │
        │  └─components
        │          login-account.vue
        │          login-penel.vue
        │          login-phone.vue
        │
        ├─main
        │  │  main.vue
        │  │
        │  ├─analysis
        │  │  ├─dashboard
        │  │  │      dashboard.vue
        │  │  │
        │  │  └─overview
        │  │      │  overview.vue
        │  │      │
        │  │      └─config
        │  │              dependencies.ts
        │  │              dev-dependencies.ts
        │  │              index.ts
        │  │              project-dir.ts
        │  │              technology-stacks.ts
        │  │
        │  ├─product
        │  │  ├─category
        │  │  │  │  category.vue
        │  │  │  │
        │  │  │  └─config
        │  │  │          content.config.ts
        │  │  │          modal.config.ts
        │  │  │          search.config.ts
        │  │  │
        │  │  └─goods
        │  │      │  goods.vue
        │  │      │
        │  │      └─config
        │  │              content.config.ts
        │  │
        │  ├─story
        │  │  ├─chat
        │  │  │      chat.vue
        │  │  │
        │  │  └─list
        │  │          list.vue
        │  │
        │  └─system
        │      ├─department
        │      │  │  department.vue
        │      │  │
        │      │  └─config
        │      │          content.config.ts
        │      │          modal.config.ts
        │      │          search.config.ts
        │      │
        │      ├─menu
        │      │  │  menu.vue
        │      │  │
        │      │  └─config
        │      │          content.config.ts
        │      │          modal.config.ts
        │      │
        │      ├─role
        │      │  │  role.vue
        │      │  │
        │      │  └─config
        │      │          content.config.ts
        │      │          modal.config.ts
        │      │          search.config.ts
        │      │
        │      └─user
        │          │  user.vue
        │          │
        │          └─config
        │                  content.config.ts
        │                  modal.config.ts
        │                  search.config.ts
        │
        └─not-found
                not-found.vue

`;
