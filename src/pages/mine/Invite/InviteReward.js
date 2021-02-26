import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
const { width, height } = Dimensions.get('window');
let maxHeightBox = height - 100;
import {
  Button,
  Modal,
  Grid,
  Icon
} from '@ant-design/react-native';



const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>

  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const initialLayout = { width: Dimensions.get('window').width };
export default class InviteReward extends React.Component {
  constructor() {
    super()
    this.state = {
      setIndex: 0
    }
  }
  componentDidMount() {
    console.log('inviteReward')
  }

  render() {
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });

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
        </View>
        <View>
          <TabView
            navigationState={{
              index: this.state.setIndex,
              routes: [
                { key: 'first', title: '邀请记录' },
                { key: 'second', title: '订单记录' },
              ]
            }}
            renderScene={renderScene}
            onIndexChange={(e) => {
              console.log(e)
              this.setState({
                setIndex: e
              })
            }}
            initialLayout={initialLayout}
            renderTabBar={props =>
              <TabBar
                {...props}
                style={{
                  backgroundColor: "#fff",
                  shadowColor: "#d4d4d4",
                  shadowRadius: 8,
                }}
                labelStyle={{
                  fontFamily: "PingFangSC-Regular",
                }}
                indicatorStyle={{ backgroundColor: '#f3ab1d' }}
                activeColor={'#f3ab1d'}
                inactiveColor={'#666666'}

              />
            }
          />
        </View>
      </ScrollView >
    )
  }
}

const styles = StyleSheet.create({
  inviteRewardContent: {
    flexDirection: 'column',
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  callNext: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  peopleNum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  peopleNumColor: {
    color: '#86929d'
  },
  scene: {
    flex: 1,
    height: 200
  },
})