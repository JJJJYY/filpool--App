import React from 'react';
import {
  View,
  Text,
  StyleSheet, Image, ScrollView, TouchableWithoutFeedback
} from 'react-native';
import { List } from '@ant-design/react-native';
import store from '../../store'
import { useFocusEffect } from '@react-navigation/native';
// import { getMyPower } from '../../request/api/userInfoApi'
const Item = List.Item;


export default function Mine({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      return () => {
      };
    }, [])
  );
  // console.log(this)

  return <Profile navigation={navigation} />;
}

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    console.log('mine')
    console.log(this)
    // console.log(store)
    // store.load({
    //   key: 'userState',
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   this.props.navigation.navigate('login')
    // })
    // getMyPower({ number: 1 }).then(res => {
    //     console.log(res)
    // })
  }

  _onLayout(event) {
    let width = event.nativeEvent.layout.width - 20;
    this.setState({
      width
    })
  }
  render() {
    const { width } = this.state;
    return (
      <ScrollView>
        <View>
          <View style={styles.mineHeader}>
            <View style={styles.headerUser}>
              <Image
                style={{
                  resizeMode: "stretch",
                  height: 30,
                  width: 30
                }}
                source={require("../../assets/img/personalfil.png")}
              />
              <View style={{ marginLeft: 12 }}>
                <Text style={{ color: '#FFF' }}>150*****234（普通用户）</Text>
                <Text style={{ color: '#FFF' }}>ID：129286</Text>
              </View>
            </View>
          </View>
          <View style={styles.storageTotalCentent} onLayout={(e) => { this._onLayout(e) }}>
            <View style={[styles.storageTotal, { width }]}>
              <View style={styles.totalHeader}>
                <TouchableWithoutFeedback onPress={() => { console.log('1111') }}>
                  <Text style={styles.totalHeaderText}>一期</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { console.log('1111') }}>
                  <Text style={styles.totalHeaderText}>二期</Text>
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.storageTotalPadding}>
                <View style={styles.storageTotalBox}>
                  <View style={styles.storageTotalBoxGrow}>
                    <Text style={styles.storageTotalBoxCenter}>总储存空间</Text>
                    <Text style={[styles.storageTotalBoxCenter, { color: '#F0AC25FF', fontSize: 24 }]}>10T</Text>
                  </View>
                  <View style={styles.storageTotalBoxGrow}>
                    <Text style={styles.storageTotalBoxCenter}>上线有效算力</Text>
                    <Text style={[styles.storageTotalBoxCenter, { color: '#F0AC25FF', fontSize: 24 }]}>1T</Text>
                  </View>
                </View>
                <View style={styles.xian}></View>
                <View style={styles.pledge}>
                  <View>
                    <Text>所需质押量</Text>
                    <Text>6.400000FIL</Text>
                  </View>
                  <View>
                    <Text>当前质押量</Text>
                    <Text>6.400000FIL</Text>
                  </View>
                </View>
                <View style={styles.budget}>
                  <Text>目前有效算力：0.667233TB</Text>
                  <Text style={{ color: '#F0AC25FF' }}>去质押</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <View style={styles.imageJump}>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    resizeMode: "stretch",
                    height: 32,
                    width: 32
                  }}
                  source={require("../../assets/img/mine/group-capital-1.png")}
                />
                <Text>算力管理</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    resizeMode: "stretch",
                    height: 32,
                    width: 32
                  }}
                  source={require("../../assets/img/mine/group-capital-2.png")}
                />
                <Text>资产管理</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    resizeMode: "stretch",
                    height: 32,
                    width: 32
                  }}
                  source={require("../../assets/img/mine/group-capital-3.png")}
                />
                <Text>订单管理</Text>
              </View>
            </View>
            <View style={{ marginTop: 10, borderRadius: 8, overflow: 'hidden' }}>
              <Item
                thumb={
                  <Image
                    source={require('../../assets/img/mine/user-1.png')}
                    style={{ width: 29, height: 29, marginRight: 5 }}
                  />
                }

                extra="我的邀请码：FCD5F7"
                arrow="horizontal"
                onPress={() => { }}>
                <Text style={{ lineHeight: 50 }}>邀请好友</Text>
              </Item>
              <Item
                thumb={
                  <Image
                    source={require('../../assets/img/mine/user-2.png')}
                    style={{ width: 29, height: 29, marginRight: 5 }}
                  />
                }
                arrow="horizontal"
                onPress={() => { }}>
                <Text style={{ lineHeight: 50 }}>账户管理</Text>
              </Item>
              <Item
                thumb={
                  <Image
                    source={require('../../assets/img/mine/user-3.png')}
                    style={{ width: 29, height: 29, marginRight: 5 }}
                  />
                }
                arrow="horizontal"
                onPress={() => { this.props.navigation.navigate('actual') }}>
                <Text style={{ lineHeight: 50 }}>实名认证</Text>
              </Item>
              <Item
                thumb={
                  <Image
                    source={require('../../assets/img/mine/user-4.png')}
                    style={{ width: 29, height: 29, marginRight: 5 }}
                  />
                }
                arrow="horizontal"
                onPress={() => { this.props.navigation.navigate('setting') }}>
                <Text style={{ lineHeight: 50 }}>设置</Text>
              </Item>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  mineHeader: {
    height: 110,
    backgroundColor: '#f0ac25FF',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: -30
  },
  headerUser: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 26
  },
  storageTotalCentent: {
    justifyContent: 'center',
  },
  storageTotal: {
    backgroundColor: '#fff',
    borderRadius: 8,
    // marginTop: -30,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  totalHeader: {
    flexDirection: 'row',
    height: 34,
    backgroundColor: '#FFF7E8FF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  totalHeaderText: {
    lineHeight: 34,
    flexGrow: 1,
    textAlign: 'center'
  },
  storageTotalBox: {
    flexDirection: 'row',
    marginTop: 16
  },
  storageTotalBoxGrow: {
    flexGrow: 1,
  },
  storageTotalBoxCenter: {
    textAlign: 'center'
  },
  xian: {
    height: 2,
    flexDirection: 'column',
    backgroundColor: '#F4F4F4FF',
    marginTop: 18,
    marginBottom: 14
  },
  storageTotalPadding: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  budget: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  pledge: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageJump: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 12
  }
})
