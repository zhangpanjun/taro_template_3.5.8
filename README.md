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

# request 封装 （todo）

# 路径 alias 配置

1：config/index.js 中定义 alias 对象（详细参考该文档）

2：需要被消费的文件中使用 alias 来引入文件 （如: @/api =>src/api）

3：增加 jsconfig.json 文件，配置 paths，让编辑器认得别名不报错，并继续使用自动路径补全和资源溯源功能；

# 关于原生标签的使用方法，及相关注意点

1：在 app.scss 中引入原生标签的样式文件 @import '@tarojs/taro/html5.css';（也可部分引入，详见 https://taro.redwoodjs.cn/docs/use-h5）

2：在 app.jsx 中引入上面文件会报错（具体原因暂未定位到，请按步骤一引入）

3：引入的样式文件只有在非 h5 环境下才会展示 .h5-标签名 这样形式的类名。h5 环境下无效

4：在非 h5 环境下，代码中的原生标签和对应环境下的标签 以及事件，属性 等转换关系，请参考官网（https://taro.redwoodjs.cn/docs/use-h5）；

5：并不是所有原生标签都可在非 h5 环境下转换！！ 转换后的样式特征在不同环境下不一定都相同！！

# 获取元素的 style 相关属性

    背景

为了拉齐浏览器与小程序的不同环境的差异，taro 实现了自己的一套遵从 web 标准的相关 dom 和 bom 的 api；
taro3 支持 react 的所有生命周期，但与真的 react 自身生命周期的效果还是有一些偏差。

在 react 当中虚拟 dom 根据逻辑组成完毕后更新到页面变成真实 dom;而在 taro 当中，react 的虚拟 dom 还需要转化成 taro 的虚拟 dom,所以在 react 的 componentDidMount 钩子中 dom 已真实替换，但在 taro 的 componentDidMount 中并没有；只有在 onReady 中才是真正被替换显示的元素。

另外，在浏览器和小程序下获取 dom 的方式也完全不同，不建议不同环境一种写法，建议使用 taro 给出的对应 api；

    方案

1：使用 taro 给的 api 来获取元素 style
`Taro.createSelectorQuery().select('#only')
      .boundingClientRect()
      .exec(res => console.log(res))`

2：注意此 api 调用所在的生命周期，小程序环境下 需 onReady 中获取 （可在 pages/index 中看到对应 demo）

3：常见的获取 dom 获取不到问题，可参考（https://taro.redwoodjs.cn/docs/react-overall 常见问题；或者去 taro 问题社区看看）

# dev-tools 插件安装配置和使用

1： yarn add --dev @tarojs/plugin-react-devtools

2：config/dev.js 文件配置
config = {
plugins: [
'@tarojs/plugin-react-devtools'
],
// ...
}

3：启动项目后即可看到需要向页面插入启动服务 js 文件地址。在 html 中插入即可

4：插入后即可在之后打开项目后自动打开一个 tools 界面

# 多端同步调试

1：config/index.js 中配置 outputRoot: `dist/${process.env.TARO_ENV}`,

2：project.config.json 文件配置 "miniprogramRoot": "dist/weapp/",

3：开启后 dist 目录下就会生成和 process.env.TARO_ENV 值相同的文件夹，运行多个环境命令，编译成不同环境代码，同时打开网页和小程序可进行预览调试。

# 主题自定义及全局变量注入使用

1：项目 src/assets/styles/定义自己的 scss 文件，文件中盛放覆盖 nutui 或者自定义的主题变量

2：在 config/index.js 的 sass 中配置 resource:[‘1 中自定义的 scss 文件’]

3：sass 中配置的 data 是引入的 nutui 相关的主题样式，需要通过 2 步骤 进行覆盖

4：在需要使用的地方 属性名:var(变量名) 即可；具体 demo 可参考 pages/index/index.module.scss 中的
.myCustomColor 类名中的使用
