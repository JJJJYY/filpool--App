import React from 'react';
import ImagePicker from 'react-native-image-picker';
import { getTokenApi, } from '../../../request/api/userInfoApi'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import {
  Button,
  Modal,
} from '@ant-design/react-native';
const { width } = Dimensions.get('window');
const imageWidth = width / 2 -30
console.log(imageWidth)
export default class Uploader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      token: '',
      avatarSource: props.avatarSource
    }
  }
  componentDidMount() {
    getTokenApi().then(res => {
      this.setState({
        token: res.data
      })
    })
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
      minWidth: 1280,
      minHeight: 720,
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
            // this.imageKey = response.key
            this.props.data(response.key)
            // 展示图片
            this.setState({
              avatarSource: source,
            });
          }).catch(error => console.error('Error:', error))
      }
    });

  }

  render() {
    return (
      <View style={{ width: imageWidth, }}>
        <Image
          style={{ width: imageWidth, height: 100, resizeMode: 'stretch' }}
          source={this.state.avatarSource}
        />
        <Text style={styles.actualImageText}>{this.props.text}</Text>
        <Button style={styles.actualImageButton} onPress={() => { this.handleAddPicCheck() }}>上传</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  actualImageText: {
    textAlign: 'center',
    marginTop: 10
  },
  actualImageButton: {
    backgroundColor: '#f18a2d',
    width: 130,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    color: '#fff',
  }
})