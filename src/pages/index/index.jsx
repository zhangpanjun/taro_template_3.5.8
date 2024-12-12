// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@nutui/nutui-react-taro';
// import Demo from '../../components/Demo/Index';
import styles from './index.module.scss';

const Index = (props) => {
    const { home } = props;
    const { status } = home;
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
            <div>{`home-model中status这个字段状态的最新值是${status}`}</div>
            <Button type="primary" className={styles.btn}>
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
