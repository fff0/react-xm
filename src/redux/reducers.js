import {combineReducers} from 'redux'

function xxx(state = 0, action){
  return state
}

function yyy(state = 0, action){
  return state
}

export default combineReducers({
  xxx,
  yyy
})

// 向外暴露的状态结构：
// {xxx: state , yyy: state }
