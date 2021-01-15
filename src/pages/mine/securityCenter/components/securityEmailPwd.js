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
import { authSendApi, modifyEmailApi, getImageCodeRes } from "../../../../request/api/userInfoApi";
import { sendApi } from "../../../../request/api/loginApi";

export default class SecurityEmailPwd extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {},
      areaCode: '86',
      searchKey: '',
      visible: false,
      oldEmailCaptcha: null,
      interval: 60,
      sendding: false,
      imgCode: "",
      email: '',
      newEmailCaptcha: '',
      status: 1
    }
  }

  componentDidMount() {
    console.log('SecurityEmailPwd')
    this.getImgCode()
    store.load({
      key: 'userState'
    }).then(res => {
      this.setState({
        userData: res,
      })
    })
  }
  // 设置国家
  selectItem = (item) => {
    if (item) {
      this.setState({
        areaCode: item.code,
        searchKey: item.value,
      })
    }
    this.setState({
      visible: false,
    })
  }

  isEmail() {
    return this.state.userData.defaultAccount === 1;
  }
  // 获取图形验证码
  getImgCode() {
    getImageCodeRes().then(res => {
      this.setState({
        imgCodeUrl: res.url
      })
    }).catch(err => { console.log('获取验证码失败') })

  }
  // 发送验证码倒计时
  intervalHandle() {
    Toast.info("验证码已发送请注意查收");
    let timer = setInterval(() => {
      if (this.state.interval > 0) {
        this.setState({
          interval: --this.state.interval
        })
      } else {
        this.setState({
          sendding: false,
          interval: 60
        })
        clearInterval(timer);
      }
    }, 1000);
  }
  /*获取验证码*/
  getSmsCode(status) {
    this.setState({
      sendding: true,
      status: status,
      interval: 60
    })
    if (status === 1) {
      const postData = {
        type: this.isEmail() ? "email" : "phone",
        imageCaptcha: this.state.imgCode,
      };
      authSendApi(postData)
        .then((res) => {
          console.log(res)
          if (res.ret === 200) {
            this.intervalHandle()
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
    // 第二个短信验证码
    if (status === 2) {
      const postData = {
        type: "email",
        to: this.state.email,
        imageCaptcha: this.state.imgCode,
      };
      sendApi(postData)
        .then((res) => {
          if (res.ret === 200) {
            this.intervalHandle()
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
  }
  // 输入事件
  onChangeText1(text) {
    this.setState({
      imgCode: text
    })
  }
  onChangeText2(text) {
    this.setState({
      oldEmailCaptcha: text
    })
  }
  onChangeText3(text) {
    this.setState({
      email: text
    })
  }
  onChangeText4(text) {
    this.setState({
      newEmailCaptcha: text
    })
  }

  // 确认
  submit() {
    const postData = {
      oldEmailCaptcha: this.state.oldEmailCaptcha,
      email: this.state.email,
      emailCaptcha: this.state.newEmailCaptcha
    }
    console.log(postData)
    modifyEmailApi(postData).then(res => {
      if (res.ret === 200) {
        Toast.info('修改成功')
        store.load({
          key: 'user'
        }).then(res => {
          this.setState({
            userData: res,
          })
        })
        this.props.navigation.goBack()
      }
    })
  }

  render() {
    const { userData } = this.state
    return (
      <ScrollView>
        <View style={styles.securityLoginPwdCentent}>
          <View style={{ marginTop: 20 }}>
            <Text>图形验证码</Text>
            <View style={styles.textImage}>
              <TextInput
                placeholder="请输入图像验证码"
                style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, flex: 1 }}
                onChangeText={text => this.onChangeText1(text)}
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
            <Text>{this.isEmail() ? '原邮箱' : '手机号码'}({this.isEmail() ? userData.email : userData.phone})</Text>
            <View style={styles.textImage}>
              <TextInput
                placeholder="请输入短信验证码"
                style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, flex: 1 }}
                onChangeText={text => this.onChangeText2(text)}
                value={this.state.oldEmailCaptcha}
              />
              <Button
                disabled={this.state.sendding && this.state.status === 1}
                style={this.state.sendding && this.state.status === 1 ? { height: 40, backgroundColor: '#dddddd' } : { height: 40, backgroundColor: '#f39032' }}
                onPress={() => { this.getSmsCode(1) }}
              >
                <Text style={{ color: '#fff' }}>{this.state.sendding && this.state.status === 1 ? `${this.state.interval} S 重新获取` : "获取验证码"}</Text>
              </Button>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>新邮箱地址</Text>
            <View style={styles.textImage}>
              <TextInput
                placeholder="请输入新邮箱地址"
                style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, flex: 1 }}
                onChangeText={text => this.onChangeText3(text)}
                value={this.state.email}
              />
            </View>

          </View>
          <View style={{ marginTop: 20 }}>
            <Text>新邮箱验证码</Text>
            <View style={styles.textImage}>
              <TextInput
                placeholder="请输入短信验证码"
                style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, flex: 1 }}
                onChangeText={text => this.onChangeText4(text)}
                value={this.state.newEmailCaptcha}
              />
              <Button
                disabled={this.state.sendding && this.state.status === 2}
                style={this.state.sendding && this.state.status === 2 ? { height: 40, backgroundColor: '#dddddd' } : { height: 40, backgroundColor: '#f39032' }}
                onPress={() => { this.getSmsCode(2) }}
              >
                <Text style={{ color: '#fff' }}>{this.state.sendding && this.state.status === 2 ? `${this.state.interval} S 重新获取` : "获取验证码"}</Text>
              </Button>
            </View>
          </View>

          <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
            <Button onPress={() => { this.submit() }} style={{ backgroundColor: '#f39032', borderRadius: 30 }}><Text style={{ color: '#fff' }}>确认</Text></Button>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>修改手机号24小时不可提现</Text>
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
