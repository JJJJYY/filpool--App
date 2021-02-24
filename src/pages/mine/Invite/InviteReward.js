import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
let maxHeightBox = height - 100;
import {
  Button,
  Modal,
  Grid,
  Icon
} from '@ant-design/react-native';
export default class InviteReward extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentDidMount() {
    console.log('inviteReward')
  }

  render() {
    return (
      <ScrollView style={styles.inviteRewardContent}>
        <View style={styles.callNext}>
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
          <View>
          </View>
        </View>
      </ScrollView >
    )
  }
}

const styles = StyleSheet.create({
  inviteRewardContent: {
    flexDirection: 'column',
    backgroundColor: '#f6f6f6',
    padding: 10,
    flex: 1,
  },
  callNext: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 20
  },
  peopleNum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  peopleNumColor: {
    color: '#86929d'
  }
})