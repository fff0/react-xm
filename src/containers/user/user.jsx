/**
 * User主页面路由容器组件
 */

import React, { Component } from 'react'
import {connect} from 'react-redux'

class User extends Component {
  render() {
    return (
      <div>
        User页面
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(User)
