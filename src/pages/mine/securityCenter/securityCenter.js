import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { List, Toast } from '@ant-design/react-native';
import store from '../../../store'
import { submitUserIdInfoApi } from '../../../request/api/userInfoApi'
const { height } = Dimensions.get('window');
let maxHeightBox = height - 100;
const Item = List.Item;
import {
  Button,
  Modal,
} from '@ant-design/react-native';
export default class SecurityCenter extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {}
    }
  }

  componentDidMount() {
    console.log(this.props)
    console.log('securityCenter')
    store.load({
      key: 'userState'
    }).then(res => {
      console.log(res)
      this.setState({
        userData: res,
      })
    })
  }
  jump() {
    if (this.state.userData.ga) {
      this.props.navigation.navigate('securityTransPwd')
    } else {
      Toast.info("请先开启谷歌验证");
    }
  }
  jumpGoogle() {
    if (this.state.userData.ga === 1) {
      this.props.navigation.navigate('googleModify')
    } else {
      this.props.navigation.navigate('googleBind')
    }
  }
  render() {
    console.log(this.state.userData)
    return (
      <View>
        <View style={{ marginTop: 10 }}>
          <View >
            <Item
              arrow="horizontal"
              extra={'修改'}
              onPress={() => { this.props.navigation.navigate('securityLoginPwd') }}>
              <Text style={{ lineHeight: 50 }} >登录密码</Text>
            </Item>
            <Item
              arrow="horizontal"
              extra={this.state.userData.phone}
              onPress={() => { this.props.navigation.navigate('securityMobileModify') }}>
              <Text style={{ lineHeight: 50 }}>{this.state.userData.phone ? "修改" : "绑定"}手机号</Text>
            </Item>
            <Item
              arrow="horizontal"
              extra={this.state.userData.email ? "已绑定" : "未绑定"}
              onPress={() => { this.props.navigation.navigate('securityEmailPwd') }}>
              <Text style={{ lineHeight: 50 }}>{this.state.userData.email ? "修改" : "绑定"}邮箱</Text>
            </Item>
            <Item
              arrow="horizontal"
              extra={this.state.userData.payPwd === 1 ? "修改" : "设置"}
              onPress={() => { this.jump() }}>
              <Text style={{ lineHeight: 50 }}>资金密码</Text>
            </Item>
            <Item
              arrow="horizontal"
              extra={this.state.userData.ga === 1 ? "已绑定" : "未绑定"}
              onPress={() => { this.jumpGoogle() }}>
              <Text style={{ lineHeight: 50 }}>Google验证</Text>
            </Item>
          </View>
        </View>
      </View>
    )
  }
}