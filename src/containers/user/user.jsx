/**
 * User主页面路由容器组件
 */

import React, { Component } from 'react'
import {connect} from 'react-redux'
import UserList from '../../components/user-list/userList.jsx'
import {getUserList} from '../../redux/actions'


class User extends Component {

  // 调用，发送ajax请求
  componentDidMount () {
    // 获取userList
    this.props.getUserList('boss')
  }

  render() {
    return (
      <UserList userList ={this.props.userList} />
    )
  }
}

export default connect(
  state => ({userList: state.userList}),
  {getUserList}
)(User)
