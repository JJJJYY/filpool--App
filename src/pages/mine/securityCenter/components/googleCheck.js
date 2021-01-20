import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { appStore, googlePlay } from "../../../../utils/utilTools";
export default class GoogleCheck extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
  }
  render() {
    const { checkFun, gaCaptcha } = this.props
    return (
      <View>
        <View>
          <Text style={{ fontSize: 10, color: '#86929d', marginTop: 10 }}> 1、请先验证原谷歌验证码</Text>
        </View>
        <View>
          <Text style={{ fontSize: 12, marginTop: 30 }}>谷歌验证码</Text>
          <TextInput
            placeholder="请输入谷歌验证码"
            style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, flex: 1, marginTop: 10 }}
            onChangeText={text => checkFun(text)}
            value={gaCaptcha}
          />
        </View>
      </View>
    )
  }
}
