/**
 * 消息页面路由容器组件
 */

import React, { Component } from 'react'
import {connect} from 'react-redux'

class Message extends Component {
  render() {
    return (
      <div>
        消息页面
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(Message)
