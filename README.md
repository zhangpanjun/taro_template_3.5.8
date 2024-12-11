# 项目简介

taro3.5.8 脚手架版本+dva 数据管理+nutui 京东风格 ui 库+react 构建的 taro 跨端项目 template，开箱即用

# 环境

node 18.16.0 yarn 管理依赖包

# 安装

yarn

# 运行

yarn dev:weapp 运行小程序
tran dev:h5 运行 h5

# 开启 css modules 模式

config/index.js 文件
`cssModules: {
    enable: true, // 开启 css modules 功能
    config: {
    namingPattern: 'module', // 只有文件中包含.module.样式文件会进行 css modules 转义
    generateScopedName: '[name]**[local]\_**[hash:base64:5]' // 转义时的类名命名规则
    }
}`
app.scss 中盛放全局样式
app.jsx 中引入全局样式文件
具体页面文件*.module.scss 文件盛放模块样式；
对应*.jsx 文件引入并使用；
`
import styles from './\*.module.scss';

<div className={styles.btn}></div>
`

# 微信小程序专属的公共组件放在 components/wxComponents 中，并在 app.config.js 的 useComponents 中注册

# 使用 dva 进行状态管理
