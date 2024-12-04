/* eslint-disable no-undef */
// component/privacy/privacy.js
Component({
    properties: {
        showPrivacy: {
            type: Boolean,
            value: false
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        privacyContractName: ''
    },
    /**
     * 组件的生命周期
     */
    lifetimes: {
        attached() {
            console.log('激活小程序组件',this.properties)
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        closePop(){
            this.setData({
                showPrivacy: false
            })
        }
    },
})