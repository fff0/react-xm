import {combineReducers} from 'redux'

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_UESR_LIST,
  RECEIVE_MSG_LIST,
  RECEIVE_MSG
} from './action-type'

import {getRedirectTo} from '../utils'

const initUser = {
  username: '', //用户名
  type: '', //用户类型
  msg: '', // 错误提示信息
  redirectTo: '' //需要自动重定向的路由路径
}

// 产生user状态的reducer
function user(state=initUser, action){
  switch (action.type) {
    case AUTH_SUCCESS: //data: user
      const  {type, header} = action.data
      return {
        ...action.data,
        redirectTo: getRedirectTo(type, header)
      }

    case ERROR_MSG: //data: msg
      return {...state, msg: action.data}

    case RECEIVE_USER:
      return action.data

    case RESET_USER:
      return {...initUser, msg: action.data}

    default:
      return state
  }
}

const initUserList = []

// 产生userlist状态的reducer
function userList(state = initUserList, action){
  switch (action.type) { // data为userList
    case RECEIVE_UESR_LIST:
      return action.data

    default:
      return state
  }
}

//产生聊天状态的reducer
const initChat ={
  users: {}, // 用户信息对象，userid:{username,header}
  chatMsgs: [],  // 聊天相关的数组
  unReadCount: 0 // 未读消息的总数量
}

function chat(state = initChat, action){
  switch (action.type) {
    case RECEIVE_MSG_LIST:
      const {users, chatMsgs} = action.data
      return {
        users,
        chatMsgs,
        unReadCount: 0
      }

    case RECEIVE_MSG:
      return state

    default:
      return state
  }
}

export default combineReducers({
  user,
  userList,
  chat
})

// 向外暴露的状态结构：
// {user: {state} , userList: [] , chat: {}}
