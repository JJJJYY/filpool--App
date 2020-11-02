import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import CXIcon from '../../../icon/CXIcon';
// const { width } = Dimensions.get('window');
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
                <View style={styles.centent} >
                    <CXIcon name='tongzhi' size={15} color='#000'></CXIcon>
                    <Swiper style={styles.wrapper} showsButtons={true}>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centent: {
        backgroundColor: 'red',
        flexDirection: "row"
    },
    wrapper: {
        height: 20
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
