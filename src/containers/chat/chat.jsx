import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavBar, List, InputItem} from 'antd-mobile'
import {sendMsg} from '../../redux/actions'

const Item = List.Item

class Chat extends Component {

  state = {
    content: ''
  }

  handleSend = () => {
    const from = this.props.user._id
    const to = this.props.match.params.userid
    const content = this.state.content.trim()
    // console.log(from+'----'+ to+'----'+content)
    // 发送请求
    if(content){
      this.props.sendMsg({from, to, content})
    }
    // 清除输入的数据
    this.setState({content: ''})
  }

  render() {
    return (
      <div id='chat-page'>
        <NavBar>aa</NavBar>
        <List>
          <Item
            thumb={require('../../assets/images/头像2.png')}
          >
          你好
          </Item>
          <Item
            thumb={require('../../assets/images/头像2.png')}
          >
          你好22
          </Item>
          <Item
            className = 'chat-me'
            extra='我'
          >
          {/* extra={<img src={require('../../assets/images/头像2.png')} alt='头像'/>} */}
          你ye好
          </Item>
          <Item
            className = 'chat-me'
            extra = '我'
          >
          你ye好
          </Item>
        </List>

        <div className= 'am-tab-bar'>
          <InputItem
          placeholder='请输入'
          value = {this.state.content}
          onChange={val => this.setState({content: val})}
          extra={
            <span onClick={this.handleSend}>发送</span>
          }></InputItem>
        </div>

      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {sendMsg}
)(Chat)
