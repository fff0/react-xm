import React, { Component } from 'react'
import {Button} from 'antd-mobile'

class NotFount extends Component {
  render() {
    return (
      <div>
        <h2>404 not found</h2>
        <p>抱歉，找不到页面</p>
        <Button
          type='primary'
          onClick={()=>{
            this.props.history.replace('/')
          }}
        >
          回到首页
        </Button>
      </div>
    )
  }
}

export default NotFount
