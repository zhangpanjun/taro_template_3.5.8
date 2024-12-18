// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentInstance } from '@tarojs/taro';

const Index = (props) => {
    const { home } = props;
    console.log('store数据', home);
    const $instance = getCurrentInstance();
    useEffect(() => {
        console.log('路由跳转接收到的参数', $instance.router.params);
    });
    return <div>sub1下的index</div>;
};
export default connect(({ home }) => ({
    home,
}))(Index);
