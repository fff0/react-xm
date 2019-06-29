// logo 图片组件

import React from 'react'
import './logo.less'
import logo2 from './logo2.jpg'

export default function Logo2(){
  return(
    <div className='logo'>
      <img src={logo2} alt="我是一个莫得感情的logo" className='logo-img'/>
    </div>
  )
}
