/**
 * 选择用户头像组件
 */

import React, { Component } from 'react'
import {List, Grid} from 'antd-mobile'

export default class HeaderSelector extends Component {
  constructor(props){
    super(props)

    // 准备需要显示的列表数据
    this.headerList = []
    for(let i=0; i<20; i++){
      this.headerList.push({
        text: '头像'+(i+1),
        icon: require(`./images/头像${i+1}.png`)
      })
    }
  }

  render() {
    const listHeader = '请选择头像'

    return (
      <List renderHeader={() => listHeader}>
        <Grid data={this.headerList}
        columnNum = {5} ></Grid>
      </List>
    )
  }
}
