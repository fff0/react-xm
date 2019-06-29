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
  state = {
    username: '', // 用户名
    password: '',  // 密码
    password2: '',  // 确认密码
    type: 'yonghu'  // 用户类型    1.用户  2.老板
  }

  render() {

    const {type} = this.state

    return (
      <div>
        <NavBar>绿帽侠直聘</NavBar>
        <Logo></Logo>
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
            <InputItem
              placeholder='请确认密码'
              type="password"
              onChange={
                val => {this.handleChange('password2', val)
              }}>
            确认密码:
            </InputItem>
            <WhiteSpace />
            <ListItem>
              <span>创建账号类型</span>
              &nbsp;&nbsp;&nbsp;
              <Radio
              checked ={type === 'yonghu'}
              onChange = {() => this.handleChange(
                'type',
                'yonghu'
              )}>
              求职者
              </Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio
              checked ={type === 'laoban'}
              onChange = {() => this.handleChange(
                'type',
                'laoban'
              )}>
              老板
              </Radio>
            </ListItem>
            <WhiteSpace />
            <Button type='primary' onClick={
              this.register
            }>注册</Button>
            <WhiteSpace />
            <Button onClick={this.toLogin}>已有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }

  register = () => {
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
  toLogin =() =>{
    this.props.history.replace('/login')
  }
}
