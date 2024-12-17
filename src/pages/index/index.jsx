// eslint-disable-next-line no-unused-vars
import React, { useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import { Button } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';
// import Demo from '../../components/Demo/Index';
import styles from './index.module.scss';

const Index = (props) => {
    const { home } = props;
    const { status } = home;
    const buttonEl = createRef();
    const changeHomeModelStatus = () => {
        props.dispatch({
            type: 'home/changeStatus',
            payload: true,
        });
    };
    const changeHomeModelStatusAsync = () => {
        props
            .dispatch({
                type: 'home/asyncChangeStatus',
                payload: false,
            })
            .then((res) => {
                console.log(res, '异步都处理成功后要执行的逻辑放在这里');
            });
    };
    useEffect(() => {
        // 利用ref来获取某个元素的style信息，在不同性质标签（原生/微信小程序）及不同环境下信息不相同，甚至获取不到！
        // buttonEl 指向原生标签，浏览器环境下，buttonEl?.current?.offsetWidth 能获取到元素宽度；但小程序下就会报错！
        // 指向非原生标签，这么写法直接报错！！（）
        console.log('+++=', buttonEl?.current?.offsetWidth);
        // 如果想要获取某个元素不分环境 的宽高等信息，通用写法推荐taro提供的api;如下：（注意：这个api调用的时机，需要在真实dom挂载到页面上才能获取到，小程序环境下如果获取不到需要在taro的onReady生命周期中执行）
        Taro.createSelectorQuery()
            .select('#only')
            .boundingClientRect()
            .exec((res) => console.log(res));
    }, []);
    return (
        <div>
            <div>taro3.5.8 + nutui京东风格ui+dva状态管理+css-modules构建的跨端项目模板</div>
            <br />
            <div>此taro版本可使用html中的大部分原生标签啦~ </div>
            <div>但是这里的原生标签在浏览器和微信小程序下渲染的样式不一样哟~具体差异可查看</div>
            <a href="https://taro.redwoodjs.cn/docs/use-h5" className={styles.aDom}>
                差异
            </a>

            <br />
            <div ref={buttonEl}>{`home-model中status这个字段状态的最新值是${status}`}</div>
            <Button type="primary" className={styles.btn} id="only">
                局部btn样式
            </Button>
            <Button className="btn">全局btn2</Button>
            <br />
            <Button className="btn" onClick={changeHomeModelStatus}>
                同步更改home model中status的值
            </Button>
            <Button className="btn" onClick={changeHomeModelStatusAsync}>
                异步更改home model中status的值
            </Button>
            <br />
            {process.env.TARO_ENV === 'weapp' ? (
                <demo showPrivacy />
            ) : (
                <div>h5环境不显示微信小程序专用的通过usingComponents注册的全局组件</div>
            )}
        </div>
    );
};
export default connect(({ home }) => ({
    home,
}))(Index);
