import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter,Route,Switch} from 'react-router-dom'

import Register from './containers/register/register.jsx'
import Login from './containers/login/login.jsx'
import Main from './containers/main/main.jsx'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/register' component={Register}></Route>
      <Route path='/login' component={Login}></Route>
      <Route component={Main}></Route>
      {/* Main 是默认主键 */}
    </Switch>
  </HashRouter>,
  document.getElementById('root')
)

//一级路由
// 注册，登录，主界面

// Switch
// 切换作用，只允许一个一级路由存在
