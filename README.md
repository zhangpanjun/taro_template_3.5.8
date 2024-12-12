# 项目简介

taro3.5.8 脚手架版本+dva 数据管理+nutui 京东风格 ui 库+react 构建的 taro 跨端项目 template，开箱即用

# 环境

node 18.16.0 yarn 管理依赖包

# 安装

yarn

# 运行

yarn dev:weapp 运行小程序

yarn dev:h5 运行 h5

# 开启 css modules 模式

1: config/index.js 文件

`cssModules: {
    enable: true, // 开启 css modules 功能
    config: {
    namingPattern: 'module', // 只有文件中包含.module.样式文件会进行 css modules 转义
    generateScopedName: '[name]**[local]\_**[hash:base64:5]' // 转义时的类名命名规则
    }
}`

2: app.scss 中盛放全局样式

3: app.jsx 中引入全局样式文件

4: 具体页面文件\*.module.scss 文件盛放模块样式；

5: 对应\*.jsx 文件引入并使用；

`
import styles from './\*.module.scss';
<div className={styles.btn}></div>
`

# 公共组件（微信小程序专用公共组件，项目 react 写法公共组件）

1：微信小程序专属的公共组件放在 components/wxComponents 中，并在 app.config.js 的 useComponents 中注册:

2：react 写法公共组件需要使用 react 的 context 来实现，待完善

# 使用 dva 进行状态管理

1：安装以下依赖包
dva-core dva-loading redux react-redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger

2：dva.js 中暴露出 dva 实例函数; 函数中创建 dva 实例，注册传入进来的 model，准备获取 store 函数

3：app.jsx 项目入口文件中引入 dva，并创建 dva 实例，调用获取 store 函数，Provider 组件包裹所有子组件；将 store 数据传入 Provider 组件，实现全局使用 store;

4：models/具体模块 store.js 定义并暴露模块中状态及状态值同步异步处理函数（详细可参考 models/home.js）

5：将所有 models 的 model 汇总到 index.js 中统一入口,并在 app.jsx 入口文件中注入；

6：需要使用 store 数据的组件，通过 connect 写法生成高阶组件，在此写法中可获取想要的 model,再通过 dispatch 方式更新状态值。（详细可参考 pages/index/index.jsx）
