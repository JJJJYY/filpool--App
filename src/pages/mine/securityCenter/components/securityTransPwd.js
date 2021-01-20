import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { Toast } from '@ant-design/react-native';
import store from '../../../../store'
import md5 from "md5";
const { height } = Dimensions.get('window');
let maxHeightBox = height - 100;
import {
  Button,
  Modal,
} from '@ant-design/react-native';
import { serviceURL } from "../../../../config";
import { authSendApi, modifyPayPwdApi } from "../../../../request/api/userInfoApi";

export default class SecurityTransPwd extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {},
      imgCodeUrl: '',
      gaCaptcha: null,
      password: null,
      password2: null,
      phoneCaptcha: null,
      interval: 60,
      sendding: false,
      imgCode: "",

    }
  }

  componentDidMount() {
    console.log('securityTransPwd')
    this.getImgCode()
    store.load({
      key: 'userState'
    }).then(res => {
      this.setState({
        userData: res,
      })
    })
  }

  isPhone() {
    return this.state.userData.defaultAccount === 0;
  }
  // 获取图形验证码
  getImgCode() {
    let newTime = new Date().getTime();
    this.setState({
      imgCodeUrl: `${serviceURL}/public/ImageCode.php?uuid=${newTime}`
    })
  }
  /*获取验证码*/
  getSmsCode() {
    this.setState({
      sendding: true
    })
    const postData = {
      type: this.isPhone() ? "phone" : "email",
      imageCaptcha: this.state.imgCode,
    };
    authSendApi(postData)
      .then((res) => {
        if (res.ret === 200) {
          Toast.info("验证码已发送请注意查收");
          let timer = setInterval(() => {
            if (this.state.interval > 0) {
              this.setState({
                interval: --this.state.interval
              })
              // this.state.interval = --this.interval;
            } else {
              this.setState({
                sendding: false,
                interval: 60
              })
              clearInterval(timer);
            }
          }, 1000);
        } else {
          this.setState({
            sendding: false
          })
        }
      })
      .catch(() => {
        this.setState({
          sendding: false
        })
      });
  }
  // 输入事件
  onChangeText(text) {
    this.setState({
      gaCaptcha: text
    })
  }
  onChangeText1(text) {
    this.setState({
      password: text
    })
  }
  onChangeText2(text) {
    this.setState({
      password2: text
    })
  }
  onChangeText3(text) {
    this.setState({
      imgCode: text
    })
  }
  onChangeText4(text) {
    this.setState({
      phoneCaptcha: text
    })
  }

  // 确认
  submit() {
    if (this.state.password !== this.state.password2) {
      Toast.info("两次输入的新密码不一致");
      return;
    }
    const postData = {
      payPwd: md5(this.state.password),
      gaCaptcha: this.state.gaCaptcha,
      code: this.state.phoneCaptcha,
    }
    modifyPayPwdApi(postData).then(res => {
      if (res.ret === 200) {
        Toast.info('修改成功,请重新登录')
        this.props.navigation.navigate('login')
        store.remove({
          key: 'userState',
        });
      }
    })
  }

  render() {
    const { userData } = this.state
    return (
      <ScrollView>
        <View style={styles.securityLoginPwdCentent}>
          <View style={{ marginTop: 20 }}>
            <Text>新资金密码</Text>
            <TextInput
              placeholder="请输入资金密码"
              style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, marginTop: 10 }}
              secureTextEntry={true}
              onChangeText={text => this.onChangeText1(text)}
              value={this.state.password}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>确认密码</Text>
            <TextInput
              placeholder="请再次输入资金密码"
              style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, marginTop: 10 }}
              secureTextEntry={true}
              onChangeText={text => this.onChangeText2(text)}
              value={this.state.password2}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>图形验证码</Text>
            <View style={styles.textImage}>
              <TextInput
                placeholder="请输入图像验证码"
                style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, flex: 1 }}
                onChangeText={text => this.onChangeText3(text)}
                value={this.state.imgCode}
              />
              <TouchableOpacity onPress={() => { this.getImgCode() }}>
                <Image
                  source={{
                    uri: this.state.imgCodeUrl
                  }}
                  style={{ width: 120, height: 40, resizeMode: 'stretch', }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>{this.isPhone() ? '手机号码' : '原邮箱'}({this.isPhone() ? userData.phone : userData.email})</Text>
            <View style={styles.textImage}>
              <TextInput
                placeholder="请输入验证码"
                style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, flex: 1 }}
                onChangeText={text => this.onChangeText4(text)}
                value={this.state.smsCode}
              />
              <Button
                disabled={this.state.sendding}
                style={this.state.sendding ? { height: 40, backgroundColor: '#dddddd' } : { height: 40, backgroundColor: '#f39032' }}
                onPress={() => { this.getSmsCode() }}
              >
                <Text style={{ color: '#fff' }}>{this.state.sendding ? `${this.state.interval} S 重新获取` : "获取验证码"}</Text>
              </Button>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text>谷歌验证码</Text>
            <TextInput
              placeholder="请输入谷歌验证码"
              style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, marginTop: 10 }}
              secureTextEntry={true}
              onChangeText={text => this.onChangeText(text)}
              value={this.state.gaCaptcha}
            />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
            <Button onPress={() => { this.submit() }} style={{ backgroundColor: '#f39032', borderRadius: 30 }}><Text style={{ color: '#fff' }}>确认</Text></Button>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>修改资金密码24小时内不可提现</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  securityLoginPwdCentent: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    flex: 1,
    padding: 20
  },
  textImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  }
})
