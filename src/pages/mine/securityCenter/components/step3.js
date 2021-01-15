import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { appStore, googlePlay } from "../../../../utils/utilTools";
import QRCode from 'react-native-qrcode-svg';

export default class Step3 extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
  }
  render() {
    const { gaCaptchaFun, gaCaptcha } = this.props
    return (
      <View>
        <View>
          <Text style={{ fontSize: 10, color: '#86929d', marginTop: 10 }}> 1、输入谷歌验证码，绑定谷歌验证 </Text>
        </View>
        <View>
          <Text style={{ fontSize: 12, marginTop: 30 }}>谷歌验证码</Text>
          <TextInput
            placeholder="请输入谷歌验证码"
            style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, flex: 1, marginTop: 10 }}
            onChangeText={text => gaCaptchaFun(text)}
            value={gaCaptcha}
          />
        </View>
      </View>
    )
  }
}
