
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
//   这里盛放项目公共使用的组件，在使用的页面直接引用标签即可;但这里的组件，暂时还接收不了参数。待确定原因。如需全局使用一些组件请使用react的context相关用法
//   usingComponents:{}
// 如果小程序需要调用地理位置api需要先在这里开启
//   permission:{
//     'scope.userLocation':{
//         desc:'你的位置信息将用于小程序位置接口的效果展示'
//     }
//   }
})
