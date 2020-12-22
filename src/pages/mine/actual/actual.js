import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { Toast } from '@ant-design/react-native';
import store from '../../../store'
import { submitUserIdInfoApi } from '../../../request/api/userInfoApi'
const { height } = Dimensions.get('window');
let maxHeightBox = height - 100;
import {
  Button,
  Modal,
} from '@ant-design/react-native';
import country from '../../../utils/country';
import Uploader from './uploader'

export default class Actual extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: '',
      step: 1,
      country: country,
      visible: false,
      searchKey: '请选择国家',
      areaCode: '',
      realName: '',
      idCardNo: '',
      localPhoOption: [], // 存储本地文件路径，用户本地展示图片
      avatarSourceLeft: require('../../../assets/img/actual/card-right.png'),
      avatarSourceRight: require('../../../assets/img/actual/card-back.png'),
      idFront: '',
      idVerso: '',
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

  imageKeyDataLeft = (data) => {
    this.setState({
      idFront: data
    });
  }
  imageKeyDataRight = (data) => {
    this.setState({
      idVerso: data
    });
  }

  // 提交实名
  submit() {
    if (!this.state.areaCode || !this.state.realName || !this.state.idCardNo || !this.state.idFront || !this.state.idVerso) {
      Toast.info('请填写完整信息');
      return;
    }
    const postData = {
      idCardNo: this.state.idCardNo,
      idFront: this.state.idFront,
      idVerso: this.state.idVerso,
      realName: this.state.realName,
      country: this.state.areaCode,
    }
    submitUserIdInfoApi(postData).then(res => {
      if (res.ret === 200) {
        Toast.info('实名认证已提交');
        this.props.navigation.navigate('我的')
        store.load({
          key: 'user',
        }).then(res => {
          this.setState({
            step: 1
          })
        }).catch(err => {
        })
      } else {
        Toast.info(res.msg);
      }
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
              <Button style={{ marginTop: 10 }} onPress={() => { this.setState({ visible: true }) }}>{this.state.searchKey}</Button>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text>姓名</Text>
              <TextInput
                editable={userData.authStatus === 1 ? false : true}
                placeholder="请输入姓名"
                style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, marginTop: 10 }}
                onChangeText={text => this.onChangeText(text)}
                value={this.state.realName}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text>证件号码</Text>
              <TextInput
                editable={userData.authStatus === 1 ? false : true}
                placeholder="请输入证件号码"
                style={{ height: 40, borderColor: '#dddddd', borderWidth: 1, marginTop: 10 }}
                onChangeText={text => this.onChangeText1(text)}
                value={this.state.idCardNo}
              />
            </View>
          </View>

          {/* 上传图片 */}
          <View style={styles.actualImage}>
            <Uploader
              avatarSource={this.state.avatarSourceLeft}
              data={this.imageKeyDataLeft}
              text='请上传身份证正面'
            />
            <Uploader
              avatarSource={this.state.avatarSourceRight}
              data={this.imageKeyDataRight}
              text='请上传身份证反面'
            />
          </View>
          <Button onPress={() => { this.submit() }} style={styles.getData}>提交审核</Button>
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
    const { userData } = this.state
    // 判断解决报错
    if (userData) {
      return (
        this.ActualStatus()
      )
    } else {
      return null
    }
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
  },
  actualImage: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  getData: {
    backgroundColor: '#f18a2d',
    marginHorizontal: 30,
    marginTop: 30
  }
})