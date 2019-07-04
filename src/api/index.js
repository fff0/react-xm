/**
 * 接口请求函数模块
 * 函数返回值为 promise
 */
import ajax from './ajax'

//  注册接口
 export const reqRegister = (user) => ajax(
   '/register',
   user,
   'POST'
 )

//  登录接口
export const reqLogin = ({username, password}) => ajax(
  '/login',
  {username, password},
  'POST'
)

// 更新用户 接口
export const reqUpdateUser = (user) => ajax(
  '/update',
  user,
  'POST'
)

//获取用户信息,默认get，可以不写
export const reqUser = () => ajax(
  '/users'
)

// 根据type类型获取用户列表，默认get
export const reqUserList = (type) => ajax(
  '/userlist',
  {type}
)

// 获取当前用户的聊天消息列表,get
export const reqChatMsgList = () => ajax('/msglist')

// 修改指定消息为已读
export const reqReadMsg = (from) => ajax(
  '/readmsg',
  {from},
  'POST'
)
