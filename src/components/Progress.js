import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import {
  Button,
  Modal,
} from '@ant-design/react-native';

const { height, width } = Dimensions.get('window');
let maxHeightBox = height - 100;
export default class Progress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      thisNum: 0
    }

  }

  componentDidMount() {
  }

  //获取底层灰色bar的宽度
  _onLayout(event) {
    let { width } = event.nativeEvent.layout;
    if (this.props.showNum) {
      this.setState({
        barWidth: width - 40
      })
    } else {
      this.setState({
        barWidth: width
      }, () => {
        this.setState({
          thisNum: this.props.num / 100 * this.state.barWidth
        })
      })
    }
  }

  render() {
    const { showNum, num } = this.props
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 10 }} onLayout={(e) => { this._onLayout(e) }}>
        <View style={[styles.ProgressStyle, { width: this.state.barWidth }]} >
          <View style={[styles.schedule, { width: this.state.thisNum }]}></View>
        </View>
        {
          showNum ? <Text style={styles.text}>{num}%</Text> : null
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  ProgressStyle: {
    backgroundColor: '#ebedf0',
    height: 10,
    borderRadius: 8
  },
  schedule: {
    height: 10,
    backgroundColor: '#f7a90d',
    borderRadius: 8
  },
  text: {
    width: 40
  }
})