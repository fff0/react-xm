import React, { Component } from 'react'
import {TabBar} from 'antd-mobile'
import ProTypes from 'prop-types'
// 引入 在非路由组件中使用路由库的api
import {withRouter} from 'react-router-dom'


const Item = TabBar.Item

// 在非路由组件中使用路由库的api
// withRouter()

class NavFooter extends Component {

  static proTypes = {
    navList: ProTypes.array.isRequired
  }

  render() {

    const {navList} = this.props
    // 路由组件才有location
    const path = this.props.location.pathname // 请求的path

    return (
      <TabBar>
        {
          navList.map((nav, index) => (
            <Item key={index}
              title={nav.text}
              icon={{uri: require(`./images/${nav.icon}.png`)}}
              selectedIcon={{uri: require(`./images/${nav.icon}-selected.png`)}}
              selected ={path === nav.path}
              onPress={() => this.props.history.replace(nav.path)}
              ></Item>
          ))
        }
      </TabBar>
    )
  }
}

// 向外暴露withRouter()包装产生的组件
// 内部会向路由组件传入一些路由组件特有的属性： history/location/math
export default withRouter(NavFooter)
