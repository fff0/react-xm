/**
 * 显示指定用户类型的用户列表
 */


import React, { Component } from 'react'
import PropType from 'prop-types'
import {WhiteSpace, Card, WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

const Header = Card.Header
const Body = Card.Body

class UserList extends Component {
  static propType = {
    userList: PropType.array.isRequired
  }
  render() {

    const {userList} = this.props

    return (
      <WingBlank style={{marginBottom: 50, marginTop: 45}}>
        {
          userList.map(user => (
            <div key={user._id}>
              <WhiteSpace />
              <Card onClick ={()=> this.props.history.push(
                `/chat/${user._id}`
              )}>
                <Header
                  thumb = {require(`../../assets/images/${user.header}.png`)}
                  extra={user.post}
                >
                </Header>
                <Body>
                  {user.salary ?
                    <div className='box1'>
                      <div className='company'>
                        {user.company}
                      </div>
                      <span className='money'>
                        {user.salary}
                      </span>
                    </div> :
                  null}
                  <div className='txt'>姓名：{user.username}</div>
                  <div className='txt'>描述：{user.info}</div>
                </Body>
              </Card>
            </div>
          ))
        }

      </WingBlank>
    )
  }
}

export default withRouter(UserList)
