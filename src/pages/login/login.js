import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity, Dimensions } from 'react-native';
import { Toast } from '@ant-design/react-native';
import { getLoginApi } from '../../request/api/loginApi'
const { width } = Dimensions.get('window');
import md5 from "md5";
import store from '../../store';
export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      account: '',
      password: '',
      loading: false
    }
  }

  componentDidMount() {
    // console.log(store)
    // store.load({
    //     key: 'user',
    // }).then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.warn(err)
    // })
    // store.remove({
    //     key: 'userState',
    // });
  }


  login() {
    const postData = {
      account: this.state.account,
      password: md5(this.state.password)
    }
    getLoginApi(postData).then(res => {
      if (res.ret === 200) {
        this.props.navigation.navigate('home')
        store.load({
          key: 'user',
        }).then(res => {
        })
        Toast.success('登录成功');
      } else {
        Toast.info(res.msg);
      }
      this.setState({
        loading: false
      })
    })
  }


  loginHandle() {
    if (this.state.account === "" || this.state.password === "") {
      Toast.info("请输入账号密码");
      return;
    }
    this.setState({
      loading: true
    })
    this.login()
  }

  onChangeText(text) {
    this.setState({
      account: text
    })
  }
  onChangePassWordText(num) {
    this.setState({
      password: num
    })
  }
  render() {
    const { loading } = this.state;
    return (
      <View style={styles.loginCentent}>
        <View style={styles.loginPadding}>
          <View style={styles.loginFlexText}>
            <Text style={styles.loginTextTitle}>取消</Text>
            <Text style={styles.loginTextTitle}>注册</Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <Image style={{ width: 135, height: 38 }} source={require('../../assets/img/login/login-logo.png')} />
            <Text style={{ marginTop: 12, marginLeft: 5, fontSize: 16, color: '#999999FF' }}>登录FILPool</Text>
          </View>
          <TextInput
            style={{ marginTop: 50, height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
            onChangeText={text => this.onChangeText(text)}
            value={this.state.account}
            placeholder='请输入手机号码或邮箱'
            placeholderTextColor='#C6C6C6FF'
          >
          </TextInput>
          <TextInput
            style={{ marginTop: 60, height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
            onChangeText={num => this.onChangePassWordText(num)}
            value={this.state.password}
            textContentType="password"
            secureTextEntry={true}
            placeholder='请输入密码'
            placeholderTextColor='#C6C6C6FF'
          >
          </TextInput>
          <Text style={{ marginTop: 18 }}>忘记密码？</Text>
          <View style={{ flexDirection: 'row-reverse' }}>
            <TouchableOpacity disabled={loading} onPress={() => this.loginHandle()}>
              <View style={styles.button}>
                {
                  !loading ?
                    <Text style={{ color: '#fff' }}>登录</Text>
                    :
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: '#fff' }}>登录中</Text><ActivityIndicator size="small" color="#fff" />
                    </View>
                }

              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          style={styles.tinybanner}
          source={require('../../assets/img/login/banner.png')}
        />
      </View>
    )
  }

}


const styles = StyleSheet.create({
  loginCentent: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  loginPadding: {
    padding: 20,
    marginTop: 30
  },
  loginFlexText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginTextTitle: {
    fontSize: 16,
    color: '#666666FF',
    fontWeight: '400'
  },
  button: {
    alignItems: "center",
    width: 125,
    backgroundColor: "#F0AC25FF",
    padding: 15,
    borderRadius: 15,
    marginTop: 44,
  },
  tinybanner: {
    height: 150,
    width: width,
    resizeMode: 'stretch',
  }
})
