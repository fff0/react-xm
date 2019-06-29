// logo 图片组件

import React from 'react'
import './logo.less'
import logo from './logo.jpg'

export default function Logo(){
  return(
    <div className='logo'>
      <img src={logo} alt="我是一个莫得感情的logo" className='logo-img'/>
    </div>
  )
}
