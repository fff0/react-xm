// 主界面路由
import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {NavBar} from 'antd-mobile'

import BossInfo from '../bossinfo/boss-info.jsx'
import UserInfo from '../userinfo/user-info.jsx'
import User from '../user/user.jsx'
import Boss from '../boss/boss.jsx'
import Personal from '../personal/personal.jsx'
import Message from '../message/message.jsx'
import NotFound from '../../components/not-fount/not-fount.jsx'
import NavFooter from '../../components/nav-footer/nav-footer.jsx'

import {getRedirectTo} from '../../utils'
import {getUser} from '../../redux/actions.js'

class Main extends Component {

  // 给组件对象添加属性
  navList = [ // 包含所有导航组件的相关信息数据
    {
      path: '/boss', // 路由路径
      component: Boss, // 跳转组件
      title: '人才列表', // 头部名字
      icon: 'user', // 图标名称
      text: '人才' // 图标下的名字
    },
    {
      path: '/user', // 路由路径
      component: User,
      title: 'Boss列表',
      icon: 'boss',
      text: '公司'
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息'
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人'
    }
  ]

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

    const {navList} = this
    const path = this.props.location.pathname //请求路径
    const currentNav = navList.find(nav => nav.path === path) // 得到当前的nav
    if(currentNav){
      // 决定哪个路由需要隐藏
      if(user.type === 'boss'){
        // 隐藏数组的第二个
        navList[1].hide = true
      }else{
        // 隐藏数组的第一个
        navList[0].hide = true
      }
    }

    return (
      <div>
        {currentNav ? <NavBar>{currentNav.title}</NavBar> : null}
        <Switch>
          {
            navList.map((nav, index) =>
            <Route
            key={index}
            path={nav.path}
            component={nav.component}
            ></Route>)
          }
          <Route path='/bossinfo' component={BossInfo}></Route>
          <Route path='/userinfo' component={UserInfo}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        {currentNav ? <NavFooter
        navList= {navList} /> : null}
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {getUser}
)(Main)
