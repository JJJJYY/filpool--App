import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { Toast } from '@ant-design/react-native';
import md5 from "md5";
const { height } = Dimensions.get('window');
let maxHeightBox = height - 100;
import {
  Button,
  Modal,
  Grid,
  Icon
} from '@ant-design/react-native';
export default class Invite extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentDidMount() {
    console.log('Invite')
  }
  render() {
    return (
      <ScrollView style={styles.inviteCentent}>
        <View>
          <Text style={styles.inviteCententTitle}>
            邀请好友 一起赚钱
          </Text>
          <Text style={styles.inviteCententP}>
            邀请好友下载APP,获取超高奖励
          </Text>
          <Text style={styles.inviteExclusive}>
            专属邀请码
          </Text>
        </View>
        <View style={styles.inviteCopy}>
          <Text style={styles.inviteCopyText}>8I8BOV</Text>
          <TouchableOpacity onPress={() => { console.log('111') }}>
            <Image style={{ height: 20, width: 20, resizeMode: 'stretch', }}
              source={require('../../../assets/img/invitation_code_icon_copy.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.inviteButton}>
          <Button style={styles.inviteButtonText}>
            <Text style={{ color: '#fff' }}>立即邀请</Text>
          </Button>
        </View>
        <Text style={{ textAlign: 'center', marginTop: 10 }}> 您已邀请人数 0 ，购买算力人数 0，累计获得 0佣金 </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  inviteCentent: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    flex: 1,
    padding: 20
  },
  inviteCententTitle: {
    textAlign: 'center',
    color: '#e49c3a',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 30
  },
  inviteCententP: {
    textAlign: 'center',
    color: '#e49c3a',
    fontSize: 14,
    marginTop: 10
  },
  inviteExclusive: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 30
  },
  inviteCopy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  inviteCopyText: {
    fontSize: 20,
    marginRight: 10
  },
  inviteButton: {
    paddingHorizontal: 40,
    marginTop: 20

  },
  inviteButtonText: {
    borderRadius: 20,
    backgroundColor: '#fcb150'
  }
}) 