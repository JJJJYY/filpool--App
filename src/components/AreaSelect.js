import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import country from '../utils/country'
import {
  Button,
  Modal,
} from '@ant-design/react-native';

const { height } = Dimensions.get('window');
let maxHeightBox = height - 100;
export default class AreaSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: country,
    }

  }

  componentDidMount() {
    console.log(this.props)

  }
  onClose = () => {
    this.props.selectItem()
  };

  // 手机区号列表
  renderContColumnItem(item) {
    return (
      <TouchableOpacity onPress={() => { this.props.selectItem(item) }} key={item.value}
        style={{ height: 40, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ddd' }
        }>
        <Text style={{ textAlign: 'center' }}>{item.value}</Text>
        <Text style={{ textAlign: 'center' }}>+{item.code}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Modal
        popup
        visible={this.props.areaSelectVisible}
        animationType="slide-up"
        onClose={() => { this.onClose() }}
      >
        <View style={{ height: maxHeightBox }}>
          <Button onPress={() => { this.onClose() }}>
            取消
          </Button>
          <ScrollView >
            <FlatList
              keyExtractor={item => item.value}
              data={this.state.country}
              renderItem={({ item, index }) => this.renderContColumnItem(item, index)}
            />
          </ScrollView>
        </View>
      </Modal>
    )
  }
}
const styles = StyleSheet.create({
})