import React from 'react'
import ReactDom from 'react-dom'
// import { createStore, applyMiddleware, compose } from 'redux'
// 处理异步的中间件
// import thunk from 'redux-thunk'
// 引入Provider
import { Provider } from 'react-redux'
// import { counter } from './index.redux'
// import reducers from './reducer.js'
// 路由
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './config.js'
// 登陆页面
import Login from './pages/login/index.js'
import Register from './pages/register/index.js'
import Genius from './pages/genius/index.js'
import Boss from './pages/boss/index.js'
// authrouter.js
import AuthRouter from './component/authrouter/authrouter.js'
// import DevTools from './component/devTools/devTools'
import createStoreWithMiddleware from './redux/createstore'
const store = createStoreWithMiddleware();

ReactDom.render((
    <Provider store={store}>
        <Router>
            <div>
                {/* <DevTools /> */}
                <AuthRouter></AuthRouter>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/genius' component={Genius}></Route>
                <Route path='/boss' component={Boss}></Route>
            </div>
        </Router>
    </Provider>
), document.getElementById('root'))



















// import { createStore } from 'redux'
// // 根据老的state和action，生成新的state
// function counter(state = 0, action) {
//     switch (action.type) {
//         case 'add':
//             return state + 1
//         case 'lose':
//             return state - 1
//         default:
//             return 10
//     }
// }
// const store = createStore(counter)
// // 订阅
// function listener(){
//     const current=store.getState()
//     console.log(`当前有机关枪：${current}`)
// }
// store.subscribe(listener)
// // const init=store.getState()
// // console.log(init)
// store.dispatch({type:'add'})
// store.dispatch({type:'add'})
// store.dispatch({type:'add'})
// store.dispatch({type:'lose'})