/**
 *  动作文件
 */

// 引入用于客户端的io
import io from 'socket.io-client'

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_UESR_LIST,
  RECEIVE_MSG_LIST,
  // RECEIVE_MSG
} from './action-type'

// api接口请求函数
import {
  reqRegister,
  reqLogin,
  reqUpdateUser,
  reqUser,
  reqUserList,
  reqChatMsgList,
  // reqReadMsg
} from '../api'



// 授权成功的同步action
const authSuccess = (user) => ({
  type: AUTH_SUCCESS,
  data: user
})
// 错误提示信息的同步action
const errorMsg = (msg) => ({
  type: ERROR_MSG,
  data: msg
})
// 接收用户的同步action
const receiveUser = (user) => ({
  type: RECEIVE_USER,
  data: user
})
// 重置用户的同步action
export const resetUser = (msg) => ({
  type: RESET_USER,
  data: msg
})
// 接收用户列表的同步action
export const receiveUserList = (userList) => ({
  type: RECEIVE_UESR_LIST,
  data: userList
})
// 接收消息列表的同步action
export const receiveMsgList = ({users, chatMsgs}) =>({
  type: RECEIVE_MSG_LIST,
  data: {users, chatMsgs}
})


//  注册 异步action
export const register = (user) => {
  const {username, password, password2, type} = user
  // 表单的前台验证
  if(!username){
    return errorMsg('用户名不能为空！')
  }else if(!password){
    return errorMsg('密码不能为空！')
  }else if(password !== password2) {
    return errorMsg('两次密码不一致！')
  }

  return async dispatch => {
    // 发送注册的异步ajax请求
    // const promise = reqRegister(user)
    // promise.then(response => {
    //   const result = response.data
    // })
    const response = await reqRegister({username, password, type})
    const result = response.data
    if(result.code === 0 ){
      // 调用获取消息列表
      getMsgList(dispatch)

      // 分发成功的action
      dispatch(authSuccess(result.data))
    }else{
      dispatch(errorMsg(result.msg))
    }
  }
}


//  登录异步action
export const login = (user) => {
  const {username, password} = user
  // 表单的前台验证
  if(!username){
    return errorMsg('用户名不能为空！')

  }else if(!password){
    return errorMsg('密码不能为空！')
  }
  return async dispatch => {
    // 发送注册的异步ajax请求
    const response = await reqLogin(user)
    const result = response.data
    if(result.code === 0 ){
      // 调用获取消息
      getMsgList(dispatch)

      dispatch(authSuccess(result.data))
    }else{
      dispatch(errorMsg(result.msg))
    }
  }
}

// 更新用户的异步action
export const updateUser = (user) => {
  return async dispatch => {
    const response = await reqUpdateUser(user)
    const result = response.data
    if(result.code === 0){
      // 分发同步action
      dispatch(receiveUser(result.data))
    }else{
      dispatch(resetUser(result.msg))
    }
  }
}

// 获取用户的异步action
export const getUser = () => {
  return async dispatch =>{
    // 执行异步ajax请求
    const response = await reqUser()
    const result = response.data
    if(result.code === 0){
      // 调用获取消息
      getMsgList(dispatch)

      dispatch(receiveUser(result.data))
    }else{
      dispatch(resetUser(result.msg))
    }
  }
}


// 获取用户列表的异步action
export const getUserList = (type) => {
  return async dispatch => {
    const response = await reqUserList(type)
    const result = response.data
    // 得到结果后，分发一个同步action
    if(result.code === 0) {
      dispatch(receiveUserList(result.data))
    }

  }
}

// 异步发送消息的action
export const sendMsg = ({from, to, content}) => {
  return dispatch => {
    console.log({from, to, content})

    // 发消息,将消息发送给服务器端
    io.socket.emit('sendMsg',{from, to, content})
  }
}


/**
 * 单例对象
 * 1.创建对象之前：判断对象是否已经创建，只有没有创建才去创建
 * 2.创建对象之后：保存对象
 */

function initIO() {
  // 创建对象之前：判断对象是否已经创建，只有没有创建才去创建
  if(!io.socket){
    // 连接服务器，得到与服务器的连接对象,保存对象
    io.socket = io('ws://localhost:4000')
      // 绑定监听，接收服务器发送的消息
    io.socket.on('receiveMsg', function (chatMsg){
      console.log('aaa', chatMsg)
    })
  }


}

// 异步获取消息列表数据
async function getMsgList(dispatch) {
  initIO()
  const response = await reqChatMsgList()
  const result = response.data
  if(result.code === 0){
    // 成功
    const {users, chatMsgs} = result.data
    // 分发同步action
    dispatch(receiveMsgList({users, chatMsgs}))

  }

}
