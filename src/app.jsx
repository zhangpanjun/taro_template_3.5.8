import { Provider } from 'react-redux';
import models from './models';
import dva from './dva';
import './app.scss';

const dvaApp = dva.createApp({
    initialState: {},
    models: models,
});

const store = dvaApp.getStore();
console.log(store);
const App = (props) => {
    return (
        <Provider store={store}>
            {props.children}
            <span>152152</span>
        </Provider>
    );
};
export default App;
