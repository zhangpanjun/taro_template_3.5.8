// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import styles from './user.module.scss';

const Index = (props) => {
    const { home } = props;
    console.log('store数据', home);
    return <div className={styles.page}>我的页面</div>;
};
export default connect(({ home }) => ({
    home,
}))(Index);
