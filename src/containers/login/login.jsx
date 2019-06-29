// 登录路由文件
import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
 } from 'antd-mobile'

 import Logo from '../../components/logo/logo.jsx'

export default class Register extends Component {
  render() {
    return (
      <div>
        <NavBar>绿帽侠直聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem>用户名:</InputItem>
            <WhiteSpace />
            <InputItem type="password">密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <Button type='primary'>登录</Button>
            <WhiteSpace />
            <Button>注册账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
