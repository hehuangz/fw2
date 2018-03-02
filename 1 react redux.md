> 跟着imooc视频学react+redux

# 1 创建react项目

```
npm i -g create-react-app
create-react-app hehuan
cd hehuan
npm run

如果想自己配置npm run eject   
Y
```

# 2 ES6有哪些

1. ### 块级作用域、字符串、函数

   1. ##### var用let代替，块级作用域之外let声明的访问不到

   2. ##### 字符串模板``

   3. ##### 函数扩展

      1. ###### 箭头函数

         ```
         作用：
         1.简洁代码
         2.保持this的作用域
         ```

      2. ###### 默认参数的传递

      3. ###### rest参数  fn(...arr)

2. ### 对象扩展、解构

   1. object扩展，Object.keys/values/entries

      ```js
      var obj={
          name:'baobao',
          age:18
      }
      console.log(Object.keys(obj)) 	//['name','age']
      console.log(Object.values(obj))		//['baolbao',18]
      console.log(Object.entries(obj))	//[['name':'baobao],['age':18]]
      ```

   2. object 属性扩展

      ```json
      const name='baobao'
      //计算属性
      const obj={
          [name]:'haha'
      }
      //const obj={
          //name:'haha'
      //}
      obj[name]='hello'
      console.log(obj)
      ```

   3. 对象解构

   4. 数组解构

3. ### 类、模块化

      1. class语法
      2. 模块化


```js
export {name} from './index.js'
console.log(name)//得到index.js导出的对象
export * as mod1 from './index.js'
console.log(mod1)//得到index.js的所有对象
```

4. ### 新的数据结构

      1. set集合，元素不可重复
      2. map
      3. symbol

5. ### 其他特性

      1. promise
      2. 迭代器和生成器
      3. 代理proxy

6. ### 其他特性，不在es6中，但是被babel支持，因此普遍使用

      1. 对象扩展符，函数绑定
      2. 装饰器
      3. Async await

# 3 express+mongdb

> mongdb存储数据,非关系型数据库，存储json数据
>
> express+mongdb开发web后台接口

1. 下载安装mongodb

   > 下载：https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.6.1-signed.msi/download
   >
   > 安装：
   >
   > 1. 运行exe，一路next，选custom，选文件路径，我的默认C:\Program Files\MongoDB，注意不要勾选compass，否则会很慢很慢
   > 2. 创建data文件夹，data中创建db文件夹，用于存放数据，我的是C:\data\db
   > 3. 进入mongodb安装路径bin目录下：cmd运行**mongod.exe --dbpath c:\data\db**,将mongo数据保存在db中（结束后腰ctrl+c关闭cmd）
   > 4. 启动：在bin路径下cmd：mongod.exe （cmd窗口不要关，要一直开着）
   > 5. 使用：在bin路径下cmd：mongo.exe（cmd窗口不要关，要一直开着）

2. 使用mongodb

   1. 链接数据库

      ```js
      const mongoose=require('mongoose')
      // 链接mongodb,并且使用react集合，没有会自动新建
      const DB_URL='mongodb://127.0.0.1:27017/react'
      mongoose.connect(DB_URL)
      mongoose.connection.on('connected',function(){
          console.log('mongo connect success')
      })
      ```

   2. 增

      ```js
      User.create({
          name:'a',
          age:18
      },{
         name:'b',
         age:18 
      },(err,doc)=>{
          if(!err){
              console.log(doc)
          }else{
              console.log(err)
          }
      })
      ```
      > 注意create不会返回这条数据的_id，可以使用UserModal.save
      >
      > ```js
      > const UserModal = new User({ user, pwd: secretPass(pwd), type })
      > UserModal.save((e, d) => {
      >     if (!e) {
      >         res.cookie('userid', d._id)
      >         const { user, type, _id } = d
      >         res.json({ code: 0, data: { user, type, _id } })
      >     } else {
      >         res.json({ code: 1, msg: '后端出错了' })
      >     }
      > })
      > ```

   3. 查

      ```js
      // 查找所有数据
      // User.find({},(err,doc)=>{
      //     if(!err){
      //         res.json(doc)
      //     }
      // })
      // 查找特定数据
      // User.find({age:18},(err,doc)=>{
      //     if(!err){
      //         res.json(doc)
      //     }
      // })
      // 查找单条数据，返回的是json对象，而不是数组
      User.findOne({name:'baobao'},(err,doc)=>{
          if(!err){
              res.json(doc)
          }
      })
      ```

   4. 改

      ```js
      // 修改数据a
       User.update({name:'aiai'},{name:'傻子'},(err,doc)=>{
           console.log(doc)
       })
      // 修改数据b
       User.update({name:'傻子'},{'$set':{age:99}},(err,doc)=>{
           console.log(doc)
       })
      ```

   5. 删

      ```js
      User.remove({name:'傻子'},(err,doc)=>{
         console.log(doc)
      })
      ```

   6. body-parser cookie-parser


# 4 ant-mobile

1. 按需加载

# 5 redux

> 专注于状态管理和react解耦
>
> 单一状态，单向数据流
>
> 核心概念：store、state、action、reducer
>

1. redux连接
2. redux.subscribe()

# 6 处理异步redux-thunk

> react默认只处理同步，异步需要插件
>
> 处理异步有很多种方式，thunk是简单的一个
>
> npm i  redux-thunk -s

# 7 使用react-redux的具体使用

> 提供了Provider和connect两个高级接口来链接
>
> 非常好用

1. Provider

   > 组件，放在最外层，只渲染一次
   >
   > npm i  react-redux -s
   >
   > ```js
   > import { Provider } from 'react-redux'
   > ReactDom.render((<Provider store={store}><App /></Provider>), document.getElementById('root'))
   > ```

2. connect

   > 最重要的api
   >
   > 有四个参数，以下是四个中最重要的2个

   ```js
   import { connect } from 'react-redux'
   import {ADD,LOSE,ADDAsync} from './index.redux'
   ...
   // 数据
   const mapStatetoProps=(state)=>{
       return {num:state}
   }
   // 方法
   const actionCreators={ADD,LOSE,ADDAsync}
   // 类似于装饰器
   App = connect(mapStatetoProps,actionCreators)(App)//得到一个新的App组件
   ```

3. 用装饰器的方式，让代码更简洁

   > 1. npm i babel-plugin-transform-decorators-legacy --save-dev
   >
   > 2. 改配置
   >
   >    ```js
   >    package.json
   >      "babel": {
   >        "presets": [
   >          "react-app"
   >        ],
   >        "plugins": [
   >          [
   >            "import",
   >            {
   >              "libraryName": "antd-mobile",
   >              "style": "css"
   >            }
   >          ],
   >          ["transform-decorators-legacy"]//这一行，配置
   >        ]
   >      },
   >    ```
   >
   > 3. ```js
   >    @connect(
   >        state=>({num:state}),
   >        {ADD,LOSE,ADDAsync}
   >    )
   >    //参数表示：1要state什么属性放在props里,2要什么方法，放在props里，会自动dispatch
   >    ```


# 8 React-router4概念

> 忘记router2，用全新的router4
>
> ```js
> import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
>
> <Switch> {/* switch只渲染命中的第一个Route */}
>    
>     <Route exact path='/' component={App}></Route>
>     <Route path='/first' component={First}></Route>
>     <Route path='/second' component={Second}></Route>
>     <Redirect to='/first'></Redirect>   {/* Redirect直接渲染组件 */}
>     <Route path='/:test' component={Test}></Route> {/* :冒号标识参数 */}
>
> </Switch>
> ```

# 9 复杂路由!

> 因为redux单一状态，单向数据流，在有多个状态时，则用一个专门的js来合并reducer，用combineReducers

```js
// 合并所有的reducer，并且返回
import { combineReducers } from 'redux'
import {counter} from './index.redux.js'
import auth from './Auth.redux.js'
export default combineReducers({ counter, auth })
```

# 10 用包axios发送请求

### 1 axios使用

> 因为ajax不能跨域

```
设置代理：在package.json中代理到想要的地方
"proxy":"http://localhost:8899"
```

```
npm install axios
```

```js
axios.get('/data').then(res => {
	console.log(res)
    if (res.status === 200) {
        this.setState({
          data:res.data
        })
    }
})
```

### 2 拦截器

所有的请求都会从拦截器中过一遍



# 11 react加样式的几种方式

1. #### 外部引入css

2. #### 行内

3. #### module

   ```css
   (1)定义一个CSS文件styleother.css,和普通CSS一样定义class选择器
   .sty2{//和普通CSS一样定义class选择器  
       background-color: red;  
       color: white;  
       font-size: 40px;  
   }  
   ```

   ```js
   (2)在JSX中导入编写好的CSS文件
   import StyleOther from  './styleother.css';  
   ```

   ```js
   (3)JSX的调用
   [javascript] view plain copy
   <div className={StyleOther.sty2}>看背景颜色和文字颜色</div>  
   //说明:使用这种方式也是可以的,只是你需要修改你的webpack的config文件,将loader: "style!css"修改为loader: "style!css?modules",在css后面加一个modules,不过这两种方式是不能同时存在的,因为加了modules,
   ```

   ```js
   (4)修改webpack.config.js配置，与原来的方式不并存，只可其一
   module: {
           rules: [
               {
                   test: /\.css$/,
                   loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]',
                   // use: [
                   //     {
                   //         loader: "style-loader"
                   //     }, {
                   //         loader: "css-loader"
                   //     }
                   // ]
               }
           ]
       }
   ```

4. #### 变量

   ```js

   var msg_red = {
       color: "red"
   }
   return (
     <div>
          <p style={msg_red}>由默认的黑色变成red字体</p>
     </div>
   )
   ```

# 12 密码加密处理

> 密码破解网站：可以破解常见的md5密码，如果自己加密后的破解不出来，说明可靠性还不错
>
> http://www.cmd5.com/
>
> ```
> 加密方法：用utility包
> npm i utility -s
> const utility = require('utility')
> // 密码加密处理
> function secretPass(pass){
>     let secret=utility.md5(pass+'Strictly Guard State Secrets%1314*')
>     return utility.md5(secret)
> }
> ```

# 13 自助跑通redux步骤记录

1. 登陆注册页面

2. 跑通路径，没有权限就进不去其他页面，只能看登陆和注册页

   1. 写user.router.js
   2. Provider和connect
   3. 配装饰器
   4. 合并reducer
   5. 权限控制authrouter.js

   ```js
   authrouter.js部分代码：
   // 获取props
   import { withRouter } from 'react-router-dom'
   // 获取redux状态信息
   import {connect} from 'react-redux'
   @withRouter
   @connect(
       state=>state.userFn,
       {}
   )
   //组件内:
   console.log(this.props)//{match: {…}, location: {…}, history: {…}, staticContext: undefined, user: "", …}
   ```

# 15 组件类型检查Typechecking With PropTypes

> 大型项目或者数据传递多的项目使用，可以及时发现很多错误
>
> ```js
> static propTypes = {
>   	select: PropTypes.func.isRequired//select必须是函数，必填
> }
> ```

# 16  React Fragments

> 包裹多个元素的空的根元素,*react16.2.0之后支持*
>
> 1. ​
>
> ```js
> const Fragment = React.Fragment;
> <Fragment>
>     <WhiteSpace />
>     <Button type='primary' onClick={this.login}>登陆</Button>
>     <WhiteSpace />
>     <Button type='primary' onClick={this.register}>注册</Button>
> </Fragment>
> ```
> 2. 支持数组，但是：①字符串必须用""包裹；②要有唯一的key
>
> ```js
> render() {
>    return [
>     "Some text.",
>     <h2 key="heading-1">A heading</h2>,
>     "More text.",
>     <h2 key="heading-2">Another heading</h2>,
>     "Even more text."
>    ];
> }
> ```
>
> 3. React Fragments的语法糖<></>，但是截至到目前create-react-app 创建的项目不能通过编译
>
> ```js
> <>
>     <WhiteSpace />
>     <Button type='primary' onClick={this.login}>登陆</Button>
>     <WhiteSpace />
>     <Button type='primary' onClick={this.register}>注册</Button>
> </>
> ```

# 17 翻墙

1.  下载蓝灯，启动即可，每月有500m免费流量

> 缺点：蓝灯会自动设置全局代理，如何不运行蓝灯，会导致上不去国内的网
>
> 解决1：在interweb设置>连接>局域网设置>去掉LAN代理的所有对勾。但是第二天又会自动设置上！
>
> 解决2：运行蓝灯、设置>高级设置>代理对勾取消掉

2. 程少辉的代理（2018/2/11）

> https://vip.zgdhhjha.com//search?q=%s&go=%E6%8F%90%E4%BA%A4&qs=bs&form=QBLH
>
> 配饰：谷歌浏览器>设置>搜索引擎>添加>地址：xx，其他乱填>保存即可

# 18 browser-cookies

> 一个npm包，可以用来获取、设置、清除cookie

```js
import browserCookies from 'browser-cookies'
fn(){
  browserCookies.erase('userid'); // 清除cookie
}
```

# 19 高阶组件

> 高阶组件实际上就是一个函数
>
> 高阶组件主要有2种形式，1是属性代理，2是反向继承
>
> 高阶组件的作用：1. 代码复用 2. 逻辑的抽象

### 19.1 属性代理

##### 一阶：函数式编程

```js
//装饰器，给fun函数补充或增强功能
function fun() {
    console.log('fn run')
}
const wrapperFn = (fn) => {
    return function () {
        console.log('before')
        fn()
        console.log('after')
    }
}
fun = wrapperFn(fun)
fun()
```

##### 进阶：高阶组件

```js
class Hello extends Component {
    render() {
        return <p>我是hello组件</p>
    }
}
function WrapHello(Comb) {
    class WrapComb extends Component {
        render() {
            return (
                <div>
                    <p>这是HOC高阶组件特有的元素</p>
                    <Comb name='text' {...this.props}></Comb> // 在这里可以扩展name等任意属性，即属性继承
                </div>
            )
        }
    }
    return WrapComb
}
Hello = WrapHello(Hello) // @写法就是这种写法的简写，@connect就是这样的高阶组件，@WrapHello写法如下一个code框

// 使用
class Index extends Component{
  render(){
    return <Hello />
  }
}
```

> @WrapHello写法如下：

```js
function WrapHello(Comb) {
    class WrapComb extends Component {
        render() {
            return (
                <div>
                    <p>这是HOC高阶组件特有的元素</p>
                    <Comb name='text' {...this.props}></Comb> // 在这里可以扩展name等任意属性，即属性继承
                </div>
            )
        }
    }
    return WrapComb
}
// Hello = WrapHello(Hello)
@WrapHello
class Hello extends Component {
    render() {
        return <p>我是hello组件</p>
    }
}

// 使用
class Index extends Component{
  render(){
    return <Hello />
  }
}
```

### 19.2 反向继承

```js
//反向代理，可以修改里面的方法，主要做渲染的节时
function WrapHello(Comb) {
    class WrapComb extends Comb {
        componentDidMount() {
            console.log('新增的生命周期，加载完成')
        }
        render() {
            return (
                <div>
                    <p>这是HOC高阶组件特有的元素</p>
                    <Comb {...this.props}></Comb>
                </div>
            )
        }
    }
    // class WrapComb extends Component {
    //     render() {
    //         return (
    //             <div>
    //                 <p>这是HOC高阶组件特有的元素</p>
    //                 <Comb {...this.props}></Comb>
    //             </div>
    //         )
    //     }
    // }
    return WrapComb
}
```
# 20 :user的使用

```js
<Route path='/chat/:user' component={Chat}></Route>
当路径为localhost:3000/chat/xx 时可以命中Chat组件
this.props.match.params.user 获取到 /xx后面的
```