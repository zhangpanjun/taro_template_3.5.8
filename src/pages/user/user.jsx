// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getNotificationsRemindersList } from '@/api/home';
import styles from './user.module.scss';

const Index = (props) => {
    const { home } = props;
    console.log('store数据', home);
    const [list, setList] = useState([]);
    const getList = async () => {
        const params = {
            notificationsType: 'order',
            current: 1,
            pageSize: 20,
        };
        const res = await getNotificationsRemindersList(params);
        setList(res?.data || []);
        console.log('数据', res, list);
    };
    useEffect(() => {
        getList();
    }, []);
    return <div className={styles.page}>我的页面</div>;
};
export default connect(({ home }) => ({
    home,
}))(Index);
