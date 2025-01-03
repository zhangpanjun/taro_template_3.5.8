// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { VirtualList, Cell } from '@nutui/nutui-react-taro';

const Index = (props) => {
    const { home } = props;
    console.log('参数', home);
    const [list, setList] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const isLoading = useRef(false);
    const getData = () => {
        const data = [];
        const pageSize = 20;
        for (let i = (pageNo - 1) * pageSize; i < pageNo * pageSize; i++) {
            const num = i > 9 ? i : `0${i}`;
            data.push({ title: `list${num}`, des: `描述${num}`, extra: `查看详情` });
        }
        setList((beforeList) => {
            return [...beforeList, ...data];
        });
        setTimeout(() => {
            isLoading.current = false;
        }, 30);
    };
    const itemRender = (data) => {
        return <Cell title={data.title} description={data.des} extra={data.extra} />;
    };
    const onScroll = () => {
        if (pageNo > 25 || isLoading.current) return;
        isLoading.current = true;
        setPageNo(pageNo + 1);
    };
    useEffect(() => {
        getData();
    }, [pageNo]);
    return (
        <div>
            <VirtualList itemHeight={60} list={list} itemRender={itemRender} onScroll={onScroll} />;
        </div>
    );
};
export default connect(({ home }) => ({
    home,
}))(Index);
