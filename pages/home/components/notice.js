import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import CXIcon from '../../../icon/CXIcon';
const { width } = Dimensions.get('window');
export default class Notice extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    componentDidMount() {

    }
    render() {
        return (
            <View>
                <CXIcon name='tongzhi'></CXIcon>
            </View>
        )
    }
}