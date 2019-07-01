// 主界面路由
import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import BossInfo from '../bossinfo/boss-info.jsx'
import UserInfo from '../userinfo/user-info.jsx'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/bossinfo' component={BossInfo}></Route>
          <Route path='/userinfo' component={UserInfo}></Route>
        </Switch>
      </div>
    )
  }
}
