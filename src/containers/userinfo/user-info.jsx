/**
 * 求职者信息完善的路由容器组件
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import HeaderSelector from '../../components/header-selector/header-selector.jsx'

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
    console.log(this.state)
  }

  render() {
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
  state => ({}),
  {}
)(UserInfo)
