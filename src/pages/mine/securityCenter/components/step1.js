import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { appStore, googlePlay } from "../../../../utils/utilTools";
import QRCode from 'react-native-qrcode-svg';

export default class Step1 extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentDidMount() {
  }
  render() {
    let url = Platform.OS == "android" ? googlePlay : appStore
    return (
      <View>
        <View>
          <Text style={{ fontSize: 10, color: '#86929d', marginTop: 10 }}>{'1、在手机上下谷歌验证器（Google Authenticator) APP，请用手机直接扫描下方二维码下载谷歌验证器'}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
          <QRCode
            value={url} />
        </View>
        <View>
          <Text style={{ fontSize: 10, color: '#86929d', marginTop: 10 }}> 2、如果您无法扫描二维码，请直接在各大应用商店或使用手机浏览器搜索谷歌验证器搜索“谷歌验证器”下载 App </Text>
        </View>
      </View>
    )
  }
}