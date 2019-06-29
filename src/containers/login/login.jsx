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

 import Logo2 from '../../components/logo/logo2.jsx'

export default class Register extends Component {
  state = {
    username: '', // 用户名
    password: '' // 密码
  }

  render() {
    return (
      <div>
        <NavBar>绿帽侠直聘</NavBar>
        <Logo2></Logo2>
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem
              placeholder='请输入用户名'
              onChange={
              val => {this.handleChange('username', val)
              }}>
              用户名:
            </InputItem>
            <WhiteSpace />
            <InputItem
              placeholder='请输入密码'
              type="password"
              onChange={
                val => {this.handleChange('password', val)
              }}>
            密&nbsp;&nbsp;&nbsp;码:
            </InputItem>
            <WhiteSpace />
            <Button type='primary' onClick={
              this.login
            }>登录</Button>
            <WhiteSpace />
            <Button onClick={this.toRes}>注册账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }

  login = () => {
    console.log(this.state)
  }

  // 处理输入数据的改变
  handleChange = (name, val) => {
    // 更新状态
    this.setState({
      // name 是变量
      [name]: val
    })
  }
  toRes =() =>{
    this.props.history.replace('/register')
  }
}
