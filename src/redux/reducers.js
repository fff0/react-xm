import {combineReducers} from 'redux'

import {
  AUTH_SUCCESS,
  ERROR_MSG
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

    default:
      return state
  }
}

export default combineReducers({
  user
})

// 向外暴露的状态结构：
// {user: {state} , yyy: {state} }
