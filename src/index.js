import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store.js'

import Register from './containers/register/register.jsx'
import Login from './containers/login/login.jsx'
import Main from './containers/main/main.jsx'

import './assets/css/index.less'

// import './test/socketio_test.js'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        <Route component={Main}></Route>
        {/* Main 是默认路由 */}
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)

//一级路由
// 注册，登录，主界面

// Switch
// 切换作用，只允许一个一级路由存在
