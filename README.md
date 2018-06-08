# vueproject

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

.
├── README.md
├── build                   # webpack build 脚本
├── config                  # prod/dev build config 文件
├── dist                    # 代码发布上线
├── index.html              # 最基础的网页
├── package.json            # npm 包索引
├── src                     # Vue.js 核心业务
│   ├── App.vue             # App Root Component
│   ├── api                 # 接入后端服务的基础 API
│   ├── assets              # 静态文件
│   ├── components          # 组件
│   ├── event-bus           # Event Bus 事件总线，类似 EventEmitter
│   ├── main.js             # Vue 入口文件
│   ├── router              # 路由
│   ├── service             # 服务
│   ├── store               # Vuex 状态管理
│   ├── util                # 通用 utility，directive, mixin 还有绑定到 Vue.prototype 的函数
│   └── view                # 各个页面
├── static                  # DevServer 静态文件
└── test                    # 测试

https://github.com/berwin/Blog/issues/14