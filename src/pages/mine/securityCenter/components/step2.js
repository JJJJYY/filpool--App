import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { appStore, googlePlay } from "../../../../utils/utilTools";
import QRCode from 'react-native-qrcode-svg';
import { createGaApi } from "../../../../request/api/userInfoApi";

export default class Step2 extends React.Component {
  constructor() {
    super()
    this.state = {
      gaSecret: {}
    }
  }
  componentDidMount() {
    createGaApi().then(res => {
      this.setState({
        gaSecret: res.data
      })
    })
  }
  render() {
    const { gaSecret } = this.state
    return (
      <View>
        <View>
          <Text style={{ fontSize: 10, color: '#86929d', marginTop: 10 }}> 1、用谷歌验证器 App 扫描一下二维码获取您的谷歌验证码 </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
          {
            gaSecret ? <QRCode
              value={gaSecret.url} /> : null
          }
        </View>
        <View>
          <Text style={{ fontSize: 10, color: '#86929d', marginTop: 10 }}> 2、如果您无法扫描二维码，您还可以选择”手动添加”的方式获取谷歌验证码 </Text>
        </View>

        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text>秘钥： {gaSecret.secret}</Text>
        </View>
      </View>
    )
  }
}