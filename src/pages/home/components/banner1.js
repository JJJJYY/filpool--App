import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import { getGeneralBannerApi } from '../../../request/api/homeApi';
const { width } = Dimensions.get('window');

export default class HeaderBanner extends React.Component {
    constructor() {
        super();
        this.state = {
            bannerData: {},
            success: false
        }
    }
    componentDidMount() {
        getGeneralBannerApi().then(res => {
            this.setState({
                bannerData: res.data,
                success: true
            });
        })
    }
    render() {
        return (
            <View>
                <View style={styles.wrapper} >
                    {
                        this.state.success ?
                            <Swiper showsButtons={false} height={150} autoplay>
                                {
                                    this.state.bannerData.map(item => {
                                        return <View style={styles.slide} key={item.id}>
                                            <Image style={styles.image} source={{ uri: item.image }} />
                                        </View>
                                    })
                                }
                            </Swiper> : <ActivityIndicator size="large" color="#00ff00" />
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 150,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: "hidden"
    },
    image: {
        width: width,
        height: 150,
        resizeMode: 'stretch', //图片填满容器
    },
})
