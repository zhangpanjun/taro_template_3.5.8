import { Provider } from 'react-redux';
import Taro, { useDidHide, useDidShow, useLaunch } from '@tarojs/taro';
import models from '@/models';

import dva from './dva';
import './app.scss';

const dvaApp = dva.createApp({
    initialState: {},
    models: models,
});

const store = dvaApp.getStore();
console.log(store);

const App = (props) => {
    useDidHide(() => {
        console.log('hide');
    });
    useDidShow(() => {
        console.log('show');
    });
    useLaunch(() => {
        Taro.setStorageSync('userInfo', { name: '测试名字', token: '123' });
    });
    return <Provider store={store}>{props.children}</Provider>;
};
export default App;
