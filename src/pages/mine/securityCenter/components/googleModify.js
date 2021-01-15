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

export default class GoogleModify extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    console.log('googleModify')
  }

  render() {
    const { userData } = this.state
    return (
      <ScrollView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
})
