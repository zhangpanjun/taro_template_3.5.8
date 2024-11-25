// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';

const Index = (props) => {
    const { home } = props;
    console.log('store数据', home);
    return <div>sub1下的index</div>;
};
export default connect(({ home }) => ({
    home,
}))(Index);
