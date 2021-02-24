import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { Toast, List } from '@ant-design/react-native';
import Progress from '../../../components/Progress'
const { width, height } = Dimensions.get('window');
const Item = List.Item;
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
        <View style={styles.call}>
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
          <View style={styles.xian}></View>
          <Text style={{ textAlign: 'center', fontWeight: '700' }}>邀请流程</Text>
          <View style={styles.imageContent}>
            <View style={styles.flexCenter}>
              <Image
                style={{ width: 42, height: 42 }}
                source={require('../../../assets/img/invite/invitation_icon_1.png')} />
              <Text>发送邀请</Text>
              <Text>给好友</Text>
            </View>
            <Image source={require('../../../assets/img/invite/invitation_icon_4.png')} />
            <View style={styles.flexCenter}>
              <Image
                style={{ width: 42, height: 42 }}
                source={require('../../../assets/img/invite/invitation_icon_2.png')} />
              <Text>好友下载</Text>
              <Text>APP</Text>
            </View>
            <Image source={require('../../../assets/img/invite/invitation_icon_4.png')} />
            <View style={styles.flexCenter}>
              <Image
                style={{ width: 42, height: 42 }}
                source={require('../../../assets/img/invite/invitation_icon_3.png')} />
              <Text>输入您的</Text>
              <Text>邀请码</Text>
            </View>
          </View>
        </View>
        <View style={[styles.callNext, { marginTop: 10 }]}>
          <Item disabled extra="" arrow="horizontal" onPress={() => { this.props.navigation.navigate('InviteReward') }}>
            我的奖励
          </Item>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.progressContent}>
              <Image
                style={{ width: 42, height: 42 }}
                source={require('../../../assets/img/invite/invitation_icon_1(1).png')} />
              <Image
                style={{ width: 42, height: 42 }}
                source={require('../../../assets/img/invite/invitation_icon_2(1).png')} />
              <Image
                style={{ width: 42, height: 42 }}
                source={require('../../../assets/img/invite/invitation_icon_3(1).png')} />
            </View>
            <View style={{ marginTop: 10 }}>
              <Progress num={90}></Progress>
            </View>
            <View style={styles.progressContent1}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require('../../../assets/img/invite/user_center_icon_2.png')} />
              <Image
                style={{ width: 20, height: 20 }}
                source={require('../../../assets/img/invite/user_center_icon_2.png')} />
              <Image
                style={{ width: 20, height: 20 }}
                source={require('../../../assets/img/invite/user_center_icon_2.png')} />
            </View>
            <View style={styles.progressContent2}>
              <Text>8TB</Text>
              <Text>96TB</Text>
              <Text>480TB</Text>
            </View>
          </View>
          <View style={styles.divider}>
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.peopleNum}>
              <Text style={styles.peopleNumColor}>
                累计邀请人数：
              </Text>
              <Text style={styles.peopleNumColor}>
                0 人
              </Text>
            </View>
            <View style={styles.peopleNum}>
              <Text style={styles.peopleNumColor}>
                累计购买人数：
              </Text>
              <Text style={styles.peopleNumColor}>
                0 人
              </Text>
            </View>
            <View style={styles.peopleNum}>
              <Text style={styles.peopleNumColor}>
                累计推广数量：
              </Text>
              <Text style={styles.peopleNumColor}>
                0 TB
              </Text>
            </View>
            <View style={styles.peopleNum}>
              <Text style={styles.peopleNumColor}>
                累计获取佣金：
              </Text>
              <Text style={styles.peopleNumColor}>
                0 USDT
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  inviteCentent: {
    flexDirection: 'column',
    backgroundColor: '#ccc',
    padding: 10,
    flex: 1,
  },
  call: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20
  },
  callNext: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10
    // paddingHorizontal: 20
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
  },
  xian: {
    width: width,
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 20
  },
  imageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  flexCenter: {
    alignItems: 'center'
  },
  progressContent: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  progressContent1: {
    marginTop: -14,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  progressContent2: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#eeeeee'
  },
  peopleNum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  peopleNumColor: {
    color: '#86929d'
  }
})