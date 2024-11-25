// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@nutui/nutui-react-taro';
import Demo from '../../components/Demo/Index';
import styles from './index.module.scss';

const Index = (props) => {
    const { home } = props;
    console.log('store数据', home);
    return (
        <div>
            <Button type="primary" className={styles.btn}>
                NutUI React Button
            </Button>
            <Button className="btn">全局btn2</Button>
            <Demo info="我传给组件的值" />
        </div>
    );
};
export default connect(({ home }) => ({
    home,
}))(Index);
