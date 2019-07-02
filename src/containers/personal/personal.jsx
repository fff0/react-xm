/**
 * 个人页面路由容器组件
 */

import React, { Component } from 'react'
import {connect} from 'react-redux'

class Personal extends Component {
  render() {
    return (
      <div>
        个人页面
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(Personal)
