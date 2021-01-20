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
  Grid,
  Icon
} from '@ant-design/react-native';
import { bindGaApi, checkOldGaApi } from "../../../../request/api/userInfoApi";
import { sendApi } from "../../../../request/api/loginApi";

import GoogleCheck from './googleCheck';
import Step2 from './step2';
import Step3 from './step3';

export default class GoogleModify extends React.Component {
  constructor() {
    super()
    this.state = {
      stepIndex: 1,
      gaCaptcha: '',
      checkGaCaptcha: ''
    }
  }

  componentDidMount() {
    console.log('googleModify')
  }
  nextStep() {
    if (this.state.stepIndex === 1) {
      console.log(this.state.checkGaCaptcha)
      const postData = {
        captcha: this.state.checkGaCaptcha,
      };
      checkOldGaApi(postData).then((res) => {
        if (res.ret === 200) {
          this.setState({
            stepIndex: this.state.stepIndex + 1
          })
        }
      });
    } else if (this.state.stepIndex < 3) {
      this.setState({
        stepIndex: this.state.stepIndex + 1
      })
    } else {
      this.bind()
    }
  }

  bind() {
    const postData = {
      captcha: this.state.gaCaptcha,
    };
    bindGaApi(postData).then((res) => {
      if (res.ret === 200) {
        Toast.info('修改成功');
        this.props.navigation.navigate('login')
        store.remove({
          key: 'userState',
        });
      }
    });
  }
  checkFun = (text) => {
    this.setState({
      checkGaCaptcha: text
    })
  }
  gaCaptchaFun = (text) => {
    this.setState({
      gaCaptcha: text
    })
  }
  render() {
    const { gaCaptcha, checkGaCaptcha } = this.state
    return (
      <ScrollView style={styles.googleCentent}>
        <View >
          <View style={{ marginTop: 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 16 }}>修改谷歌验证</Text>
          </View>
          <View style={styles.titleView}>
            <Text style={styles.titleViewText}>
              谷歌验证器是一款动口令工具，工作原理类似短信动态验证。 绑定后每 30s 生成一个动态验证码，验证码可用于登录、提 现、修改安全设置等操作的安全验证。
            </Text>
          </View>

          <View style={styles.stepBox}>
            <View style={styles.stepItem}>
              <View style={this.state.stepIndex <= 1 ? styles.circularStep : styles.circular}>
                <Text style={this.state.stepIndex === 1 ? [styles.circularText, styles.circularTextStep] : styles.circularText} >
                  {
                    this.state.stepIndex <= 1 ? 1 : <Icon style={{ color: '#e49c3a', fontSize: 12, textAlign: 'center', lineHeight: 14 }} name={'check'} />
                  }

                </Text>
              </View>
              <Text style={this.state.stepIndex === 1 ? [styles.stepItemText, styles.stepItemTextStep] : styles.stepItemText}>验证谷歌验证码</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={this.state.stepIndex === 2 ? styles.circularStep : styles.circular}>
                <Text style={this.state.stepIndex === 2 ? [styles.circularText, styles.circularTextStep] : styles.circularText}>
                  {
                    this.state.stepIndex <= 2 ? 2 : <Icon style={{ color: '#e49c3a', fontSize: 12, textAlign: 'center', lineHeight: 14 }} name={'check'} />
                  }

                </Text>
              </View>
              <Text style={this.state.stepIndex === 2 ? [styles.stepItemText, styles.stepItemTextStep] : styles.stepItemText}>添加秘钥并备份</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={this.state.stepIndex === 3 ? styles.circularStep : styles.circular}>
                <Text style={this.state.stepIndex === 3 ? [styles.circularText, styles.circularTextStep] : styles.circularText}>
                  {
                    this.state.stepIndex <= 3 ? 3 : <Icon style={{ color: '#e49c3a', fontSize: 12, textAlign: 'center', lineHeight: 14 }} name={'check'} />
                  }
                </Text>
              </View>
              <Text style={this.state.stepIndex === 3 ? [styles.stepItemText, styles.stepItemTextStep] : styles.stepItemText}>绑定验证</Text>
            </View>
          </View>

          {this.state.stepIndex === 1 ? <GoogleCheck checkFun={this.checkFun} checkGaCaptcha={checkGaCaptcha}></GoogleCheck> : null}
          {this.state.stepIndex === 2 ? <Step2></Step2> : null}
          {this.state.stepIndex === 3 ? <Step3 gaCaptchaFun={this.gaCaptchaFun} gaCaptcha={gaCaptcha}></Step3> : null}

          <View style={styles.ButtonView}>
            <Button onPress={() => { this.nextStep() }} style={styles.ButtonViewB}>
              <Text style={{ color: '#fff' }}>{this.state.stepIndex === 3 ? '修改谷歌验证' : '下一步'}</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  googleCentent: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    flex: 1,
    padding: 20
  },
  titleView: {
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#dddddd'
  },
  titleViewText: {
    color: '#86929d',
    fontSize: 10
  },
  stepBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circular: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'solid',
    marginRight: 3
  },
  circularStep: {
    backgroundColor: '#e49c3a',
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e49c3a',
    marginRight: 3
  },
  circularText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 14,
    color: '#86929d'
  },
  circularTextStep: {
    color: '#fff',
  },
  stepItemText: {
    fontSize: 10,
    color: '#86929d'
  },
  stepItemTextStep: {
    color: '#e49c3a'
  },
  ButtonView: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  ButtonViewB: {
    borderRadius: 30,
    backgroundColor: '#f18a2d',
  }
})
