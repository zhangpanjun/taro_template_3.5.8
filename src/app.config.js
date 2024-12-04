


export default ({
  pages: [
    'pages/index/index',
    'pages/user/user'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    list:[
        {
            pagePath:'pages/index/index',
            text:'首页',
            iconPath: "assets/img/tab_index.png",
            selectedIconPath: "assets/img/tab_index_active.png"
        },
        {
            pagePath:'pages/user/user',
            text:'我的',
            iconPath: "assets/img/tab_setting.png",
            selectedIconPath: "assets/img/tab_setting_active.png"
        }
    ],
    color:'#aaaaaa',
    selectedColor:'#333333',
    backgroundColor:'#ffffff',
    borderStyle:'black'
  },
  subPackages:[
    {
        root:"subPackages/sub1",
        pages:[
            "index/index"
        ]
    },
    {
        root:"subPackages/sub2",
        pages:[
            "index/index"
        ]
    },
  ],
//   这里盛放项目中小程序环境下的公共使用的组件,被引用的页面中无需再次引入，直接使用标签即可(这里的标签不要用大驼峰形式，会和react的自定义组件冲突！)；为了防止非小程序环境报错，切记要判断环境后再使用！
// 如需全局使用一些react组件，请使用react的context相关用法；
  usingComponents:{demo:'./components/wxComponents/demo/index'}
// 如果小程序需要调用地理位置api需要先在这里开启
//   permission:{
//     'scope.userLocation':{
//         desc:'你的位置信息将用于小程序位置接口的效果展示'
//     }
//   }
})
