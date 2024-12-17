import { Provider } from 'react-redux';
import { useDidHide, useDidShow, useLaunch } from '@tarojs/taro';
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
        console.log('launch');
    });
    return <Provider store={store}>{props.children}</Provider>;
};
export default App;
