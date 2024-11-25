// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@nutui/nutui-react-taro';
import './index.scss';

const Index = (props) => {
    const { home } = props;
    console.log('store数据', home);
    return (
        <div>
            <Button type="primary" className="btn">
                NutUI React Button
            </Button>
        </div>
    );
};
export default connect(({ home }) => ({
    home,
}))(Index);
