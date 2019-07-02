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
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from '../../redux/actions.js'
import Logo from '../../components/logo/logo.jsx'

const ListItem = List.Item

class Register extends Component {
  state = {
    username: '', // 用户名
    password: '',  // 密码
    password2: '',  // 确认密码
    type: 'user'  // 用户类型    1.用户  2.老板
  }

  render() {

    const {type} = this.state
    const {msg, redirectTo} = this.props.user

    if(redirectTo) {
      return <Redirect to={redirectTo} />
    }

    return (
      <div>
        <NavBar>绿帽侠直聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            {msg? <div className='error-msg'>{msg}</div> : null}
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
              checked ={type === 'user'}
              onChange = {() => this.handleChange(
                'type',
                'user'
              )}>
              求职者
              </Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio
              checked ={type === 'boss'}
              onChange = {() => this.handleChange(
                'type',
                'boss'
              )}>
              Boss
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

  // 点击注册
  register = () => {
    // console.log(this.state)
    this.props.register(this.state)
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

export default connect(
  state => ({user: state.user}),
  {register}
)(Register)
