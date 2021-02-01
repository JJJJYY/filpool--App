import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions, TextInput, Platform, Alert, Image } from 'react-native';
import { Toast } from '@ant-design/react-native';
import md5 from "md5";
const { height } = Dimensions.get('window');
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
      <ScrollView>
        <View>
          <Text>
            Could not connect to development server
          </Text>
        </View>
      </ScrollView>
    )
  }
}