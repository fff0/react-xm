// 注册路由文件
import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
 } from 'antd-mobile'

 import Logo from '../../components/logo/logo.jsx'

 const ListItem = List.Item

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
            <InputItem type="password">确认密码:</InputItem>
            <WhiteSpace />
            <ListItem>
              <span>创建账号类型</span>
              &nbsp;&nbsp;&nbsp;
              <Radio>求职者</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio>老板</Radio>
            </ListItem>
            <WhiteSpace />
            <Button type='primary'>注册</Button>
            <WhiteSpace />
            <Button>已有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
