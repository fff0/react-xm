/**
 * 发送ajax请求的函数模块
 * 函数的返回值是promise对象
 */
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
  if(type === 'GET'){
    // 拼接请求参数串
    // data : {username: xxx,password: xxx}
    // 最终生成效果 paramStr: username=xxx&passqord=xxx
    let paramStr = ''
    Object.keys(data).forEach(key => {
      paramStr += key + '=' + data[key] + '&'
    })
    if(paramStr) {
      paramStr = paramStr.substring(0, paramStr.length-1)
    }
    return axios.get(url + '?' + paramStr)
  }else{
    // 发post请求
    return axios.post(url, data)
  }
}
