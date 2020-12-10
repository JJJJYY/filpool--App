import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput } from 'react-native';
import store from '../../../store'
const { height } = Dimensions.get('window');
let maxHeightBox = height - 100
import {
  Button,
  Modal,
  WhiteSpace,
  WingBlank,
  Toast,
  Provider,
  PickerView
} from '@ant-design/react-native';
import country from '../../../utils/country'
export default class Actual extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: '',
      step: 1,
      country: country,
      visible: false,
      searchKey: '请选择国家',
      realName: '',
      idCardNo: ''
    }
    this.onClose = () => {
      this.setState({
        visible: false,
      });
    };
  }

  componentDidMount() {
    console.log('actual')
    store.load({
      key: 'userState'
    }).then(res => {
      this.setState({
        userData: res,
      })
    })
  }
  showActualStatus() {
    return (this.state.userData.authStatus === 2 || this.state.userData.authStatus === 3) && this.state.step !== 0
  }
  // 设置国家
  selectItem(item) {
    this.setState({
      areaCode: item.code,
      searchKey: item.value,
      visible: false,
    })
  }

  // 输入事件
  onChangeText(text) {
    this.setState({
      realName: text
    })
  }
  onChangeText1(text) {
    this.setState({
      idCardNo: text
    })
  }


  // 手机区号列表
  renderContColumnItem(item) {
    return (
      <TouchableOpacity onPress={() => { this.selectItem(item) }} key={item.value}
        style={{ height: 40, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ddd' }
        }>
        <Text style={{ textAlign: 'center' }}>{item.value}</Text>
        <Text style={{ textAlign: 'center' }}>+{item.code}</Text>
      </TouchableOpacity>
    )

  }

  ActualStatus() {
    const { userData } = this.state
    if (this.showActualStatus() && userData.authStatus === 3) {
      return (
        <View style={styles.actualLose}>
          <Text style={styles.actualLoseText}>您已提交实名认证，请耐心等待审核</Text>
        </View>
      )
    } else if (this.showActualStatus()) {
      return (
        <View style={styles.actualLose}>
          <Text style={styles.actualLoseText}>
            实名认证失败
          </Text>
          <TouchableOpacity style={styles.actualLoseButton} onPress={() => {
            this.setState({
              step: 0
            })
          }}>
            <Text style={styles.actualLoseButtonV}>
              重新提交
             </Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.actualCentent}>
          <View style={styles.actualTextTitle}>
            <Text style={styles.actualCententTitle}>实名认证</Text>
            {
              this.state.userData !== 1 ?
                <Text style={styles.actualCententP}>请上传清晰的证件照片，必须能看清证件号和姓名；仅支持PNG、JPG、JPEG格式，每张大小限制在2M以内</Text>
                :
                <Text style={styles.actualCententP}>实名认证已通过</Text>
            }

          </View>
          <View style={styles.actualTextTitle}>
            <View>
              <Text>国家和地区</Text>
              <Button onPress={() => { this.setState({ visible: true }) }}>{this.state.searchKey}</Button>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text>姓名</Text>
              <TextInput
                editable={userData.authStatus === 1 ? false : true}
                placeholder="请输入姓名"
                style={{ height: 40, borderColor: '#dddddd', borderWidth: 1 }}
                onChangeText={text => this.onChangeText(text)}
                value={this.state.realName}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text>证件号码</Text>
              <TextInput
                editable={userData.authStatus === 1 ? false : true}
                placeholder="请输入证件号码"
                style={{ height: 40, borderColor: '#dddddd', borderWidth: 1 }}
                onChangeText={text => this.onChangeText1(text)}
                value={this.state.idCardNo}
              />
            </View>
          </View>


          <Modal
            popup
            visible={this.state.visible}
            animationType="slide-up"
            onClose={this.onClose}
          >
            <View style={{ height: maxHeightBox }}>
              <Button onPress={this.onClose}>
                取消
              </Button>
              <ScrollView >
                <FlatList
                  style={styles.edit_list}
                  keyExtractor={item => item.value}
                  data={this.state.country}
                  renderItem={({ item, index }) => this.renderContColumnItem(item, index)}
                />
              </ScrollView>
            </View>
          </Modal>
        </View>
      )
    }
  }
  render() {
    return (
      this.ActualStatus()
    )
  }
}

const styles = StyleSheet.create({
  actualCentent: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    flex: 1
  },
  actualLose: {
    marginTop: 50,
  },
  actualLoseText: {
    textAlign: 'center'
  },
  actualLoseButtonV: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18
  },
  actualLoseButton: {
    marginTop: 30,
    backgroundColor: '#f49638',
    borderRadius: 16,
    padding: 20,
    marginLeft: 40,
    marginRight: 40
  },
  actualTextTitle: {
    padding: 20
  },
  actualCententTitle: {
    fontSize: 18
  },
  actualCententP: {
    marginTop: 10,
    color: '#86929d'
  }
})