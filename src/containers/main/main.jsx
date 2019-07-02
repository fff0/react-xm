// 主界面路由
import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'

import BossInfo from '../bossinfo/boss-info.jsx'
import UserInfo from '../userinfo/user-info.jsx'

import {getRedirectTo} from '../../utils'
import {getUser} from '../../redux/actions.js'

class Main extends Component {

  // 实现自动登录
  componentDidMount () {
    const userid = Cookies.get('userid')
    const {_id} = this.props.user
    if(userid && !_id){
      // 发送异步请求，获取user
      this.props.getUser()
    }
  }

  render() {
    // 检查用户是否登录，如果没登录，跳到登录页面
    // const {user} = this.props
    // if(!user._id){
    //   return <Redirect to='/login' />
    // }

    // 读取cookie中的userid
    const userid = Cookies.get('userid')
    // 如果没有，重定向到login页面
    if(!userid){
      return <Redirect to='/login' />
    }
    // 如果有，读取redux中的user状态
    const {user} = this.props
        // 如果user没有_id,返回null,不做任何显示
      if(!user._id){
        return null
      }else{
        // 如果有_id,显示对应的页面
        const path = this.props.location.pathname
        if(path === '/'){
          let path = getRedirectTo(user.type, user.header)
          return <Redirect to= {path}/>
        }

      }

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

export default connect(
  state => ({user: state.user}),
  {getUser}
)(Main)
