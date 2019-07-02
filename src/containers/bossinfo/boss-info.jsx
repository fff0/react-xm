/**
 * boss信息完善页面
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import HeaderSelector from '../../components/header-selector/header-selector.jsx'


class BossInfo extends Component {

  state = {
    header: '',
    post: '',
    info: '',
    company: '',
    salary: ''
  }

  // 修改头像
  setHeader = (header) => {
    this.setState({
      header
    })
  }

  // 修改数据
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  // 保存信息
  save = () => {
    console.log(this.state)
    // this.props.updateUser(this.state)
  }
  render() {

    // 如果信息已经完善, 自动重定向到对应主界面
    const {header, type} = this.props.user
    if(header) { // 说明信息已经完善
      const path = type==='user' ? '/user' : '/boss'
      return <Redirect to={path}/>
    }

    return (
      <div>
        <NavBar>Boss信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader} />
        <InputItem placeholder='请输入招聘职位'
          onChange={
            val => {this.handleChange(
              'post',
              val
            )}
          }>
        招聘职位
        </InputItem>
        <InputItem placeholder='请输入公司名称'
          onChange={
            val => {this.handleChange(
              'company',
              val
            )}
          }>
        公司名称
        </InputItem>
        <InputItem placeholder='请输入职位薪资'
          onChange={
            val => {this.handleChange(
              'salary',
              val
            )}
          }>
        职位薪资
        </InputItem>
        <TextareaItem
          title='职位要求'
          rows={3}
          placeholder='请输入职位要求'
          onChange={
            val => {this.handleChange(
              'info',
              val
            )}
          }>
        </TextareaItem>
        <Button type='primary'
          onClick={this.save}>
        保&nbsp;&nbsp;&nbsp;存
        </Button>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {}
)(BossInfo)
