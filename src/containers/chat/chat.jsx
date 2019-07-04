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

    const {user} = this.props
    const {users, chatMsgs} = this.props.chat

    // 计算当前聊天的chatId
    const meId = user._id
    if(!users[meId]){
      return null
    }
    const targetId = this.props.match.params.userid
    const chatId = [meId, targetId].sort().join('_')

    // 对chatMsgs 进行过滤
    const msgs = chatMsgs.filter(msg => msg.chat_id === chatId)

    // 得到目标用户的头像
    const targeHeader = users[targetId].header
    const targetIcon = targeHeader ? require(`../../assets/images/${targeHeader}.png`) : require('../../assets/images/00.png')

    return (
      <div id='chat-page'>
        <NavBar>aa</NavBar>
        <List>
          {
            msgs.map(msg => {
              if(targetId === msg.from){
                // 对方发给我的
                return (
                  <Item
                    key ={msg._id}
                    thumb={targetIcon}
                  >
                  {msg.content}
                  </Item>
                )
              }else{
                // 我发给对方的
                return (
                  <Item
                    key ={msg._id}
                    className = 'chat-me'
                    extra = '我'
                  >
                  {msg.content}
                  </Item>
                )
              }
            })
          }
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
  state => ({user: state.user, chat: state.chat}),
  {sendMsg}
)(Chat)
