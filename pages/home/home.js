import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import HeaderBanner from './components/banner1';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View>
                {/* home页轮播图 */}
                <HeaderBanner />
            </View>
        )
    }
}