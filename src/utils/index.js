// 判断用户类型跳到不同页面

/**
 * 用户主界面路由
 *  user: /user
 *  boss: /boss
 * 用户信息完善界面路由
 *  user: /userinfo
 *  boss: /bossinfo
 */

export function getRedirectTo(type, header) {
  let path
  // type
  if(type==='boss') {
    path = '/boss'
  } else {
    path = '/user'
  }
  // header
  if(!header) { // 没有值, 返回信息完善界面的path
    path += 'info'
  }

  return path
}
