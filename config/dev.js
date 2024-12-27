// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  plugins: [
    '@tarojs/plugin-react-devtools'
  ],
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer:{
        // 这里暂时没用，有需要的可根据情况配置
        proxy:{
            '/api': {
                //匹配的前缀
                // 要代理的地址
                target: 'http://www.makinokun.cn:8001/', // 目标地址
                // 配置了这个可以从 http 代理到 https
                // 依赖 origin 的功能可能需要这个，比如 cookie
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        }
    }
  }
}
