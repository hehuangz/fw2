import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import DevTools from '../component/devTools/devTools'
import reducers from '../reducer.js'

// 这种方式tools组件方式不方便，在移动端会遮挡视线而且设定不了初始隐藏
// const enhancer = compose(
//     //你要使用的中间件，放在前面
//     applyMiddleware(thunk),
//     //必须的！启用带有monitors（监视显示）的DevTools
//     DevTools.instrument()
// )

// export default function createStoreWithMiddleware(initialState) {
//     //注意：仅仅只有redux>=3.1.0支持第三个参数
//     const store = createStore(reducers, initialState, enhancer)
//     return store
// }

// 用浏览器插件的方式
export default function createStoreWithMiddleware() {
    const store = createStore(reducers, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
    return store
}
