import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import store from '../../../store'
const { height } = Dimensions.get('window');
let maxHeightBox = height - 100;
import ImagePicker from 'react-native-image-picker';
import {
  Button,
  Modal,
} from '@ant-design/react-native';
import country from '../../../utils/country';
import { getTokenApi, filePictureApi } from '../../../request/api/userInfoApi'
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
      idCardNo: '',
      localPhoOption: [], // 存储本地文件路径，用户本地展示图片
      avatarSourceLeft: require('../../../assets/img/actual/card-right.png'),
      avatarSourceRight: require('../../../assets/img/actual/card-back.png'),
      token: '',
      imageKey: ''
    }
    this.onClose = () => {
      this.setState({
        visible: false,
      });
    };
  }

  componentDidMount() {
    console.log('actual')
    getTokenApi().then(res => {
      console.log(res)
      this.setState({
        token: res.data
      })
    })
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


  // 添加图片 点击
  handleAddPicCheck() {
    // console.warn('添加图片------check')
    let { localPhoOption } = this.state
    let { props } = this
    let that = this
    const options = {
      title: '选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '相册',
      cameraType: 'back',
      mediaType: 'photo',
      videoQuality: 'high',
      durationLimit: 10,
      maxWidth: 720,
      maxHeight: 1280,
      aspectX: 2,
      aspectY: 1,
      quality: 1,
      angle: 0,
      allowsEditing: false,
      noData: false,
      storageOptions: {
        skipBackup: true,
        path: 'PickLocalImg' // 存储本地地址
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('用户取消图像选择器');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('用户点击自定义按钮： ', response.customButton);
      } else {
        const source = { uri: response.uri, type: response.type, name: response.fileName || `IMG_${new Date().getTime()}.JPG` };
        let formData = new FormData();
        formData.append('file', source);
        formData.append("token", this.state.token);

        // 请求七牛云服务获取key
        fetch("https://up-z2.qiniup.com/", {
          method: 'POST',
          body: formData,
          headers: {
            // 'Content-Type': 'multipart/form-data; boundary=------------------------7aa9c49f35d7c3fc'
          },
        }).then((response) => response.json())
          .then(response => {
            console.log('res', response)
            this.imageKey = response.key
          }).catch(error => console.error('Error:', error))

        // 展示图片
        this.setState({
          avatarSourceLeft: source,
        });
      }
    });

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
            <View style={{ width: 200, }}>
              <Image
                style={{ width: 200, height: 100, resizeMode: 'stretch' }}
                source={this.state.avatarSourceLeft}
              />
              <Text style={styles.actualImageText}>请上传身份证正面</Text>
              <Button style={styles.actualImageButton} onPress={() => { this.handleAddPicCheck() }}>上传</Button>
            </View>
            <View style={{ width: 200, }}>
              <Image
                style={{ width: 200, height: 100, resizeMode: 'stretch' }}
                source={this.state.avatarSourceRight}
              />
              <Text style={styles.actualImageText}>请上传身份证反面</Text>
              <Button style={styles.actualImageButton} onPress={() => { this.handleAddPicCheck() }}>上传</Button>
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
  },
  actualImage: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actualImageText: {
    textAlign: 'center',
    marginTop: 10
  },
  actualImageButton: {
    backgroundColor: '#f18a2d',
    width: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    color: '#fff'
  }
})