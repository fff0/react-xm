/**
 * 求职者信息完善的路由容器组件
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import HeaderSelector from '../../components/header-selector/header-selector.jsx'

class UserInfo extends Component {
  render() {
    return (
      <div>
        <NavBar>User信息完善</NavBar>
        <HeaderSelector />
        <InputItem placeholder='请输入求职岗位'>求职岗位</InputItem>
        <TextareaItem title='个人介绍' rows={4}
        placeholder='请输入个人介绍'></TextareaItem>
        <Button type='primary'>保&nbsp;&nbsp;&nbsp;存</Button>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(UserInfo)
