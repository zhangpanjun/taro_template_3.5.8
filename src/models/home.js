
import {mockAjax} from '../api/home.js'

const home = {
  namespace: 'home', // 命名空间
//  状态容器
  state: {
    status: false,
  },
// 更改状态的唯一方式，同步执行。在需要消费的地方通过dispatch({type:'model名/reducers中的具体函数名',payload:参数})形式触发
  reducers: {
    changeStatus(state, { payload }) {
        console.log('同步更改home-model中status的值','上一个状态库的数据',state,'要更改的数据',payload)
        // 这里需要通过返回一个新对象来进行状态数据的覆盖更新！！
      return {
        ...state,
        status: payload,
      };
    },
  },
//   处理异步操作，在需要消费的地方通过dispatch({type:'model名/effects中的具体函数名',payload:参数})形式触发。effects中通过put函数语法糖真正触发reducers中更改状态的方法。
  effects:{
    *asyncChangeStatus({payload},{call,put,select}){
        // select函数可以获取到项目中所有model中最新状态数据,可多个model数据交叉获取使用
        const allModelStateObj = yield select((state)=>state)
        console.log('异步更改home-model中status值之前，当前状态库所有数据是',allModelStateObj)
        console.log('异步dispatch home-model更改status传进来的数据',payload)
        // call函数 第一个参数是异步函数，第二个参数是 第一个参数函数的入参。
        // 通过 * + yield将同步得到ajax返回的数据。
        const {status} = yield call(mockAjax,payload)
        console.log('调更改status接口后的回参',status)
        // put函数 传入对象，type指定更改状态的reducer中的方法名，payload指定type对应函数的入参。
        yield put({type:'changeStatus',payload:status})
        // effects中的函数在处理所有逻辑后会返回一个promise函数，所以在调用的地方可以通过.then的方式进行下一步的逻辑处理；当然你也可以在这里返回数据当做.then函数中的参数
        return {demo:'异步调用接口并把数据更新后，返回了一个值'}
    }
  }
};

export default home;
