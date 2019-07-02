/**
 * 求职者信息完善的路由容器组件
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import HeaderSelector from '../../components/header-selector/header-selector.jsx'

import {updateUser} from '../../redux/actions'

class UserInfo extends Component {

  state = {
    header: '',
    post: '',
    info: ''
  }

  // 修改头像
  setHeader = (header) => {
    this.setState({
      header
    })
  }

  // 修改数据
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  // 保存信息
  save = () => {
    // console.log(this.state)
    this.props.updateUser(this.state)
  }

  render() {

    // 如果信息已经完善, 自动重定向到对应主界面
    const {header, type} = this.props.user
    if(header) { // 说明信息已经完善
      // 判断用户类型
      const path = type==='user' ? '/user' : '/boss'
      return <Redirect to={path}/>
    }

    return (
      <div>
        <NavBar>User信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <InputItem placeholder='请输入求职岗位'
          onChange={
            val => {this.handleChange(
              'post',
              val
            )}
          }>
        求职岗位
        </InputItem>
        <TextareaItem
          title='个人介绍'
          rows={4}
          placeholder='请输入个人介绍'
          onChange={
            val => {this.handleChange(
              'info',
              val
            )}
          }>
        </TextareaItem>
        <Button type='primary'
          onClick={this.save}>
        保&nbsp;&nbsp;&nbsp;存
        </Button>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {updateUser}
)(UserInfo)
