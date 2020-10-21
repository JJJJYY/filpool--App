import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
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

        const arr = [1, 2, 3]
        return (
            <View style={styles.wrapper}>
                <Swiper showsButtons={false}>
                    {
                        this.state.success ? this.state.bannerData.map(item => {
                            // console.log(item)
                            return <View style={styles.slide} key={item.id}>
                                <Image resizeMode='stretch' style={styles.image} source={{ uri: item.image }} />
                            </View>
                        }) : <View>
                                <Text>加载异常</Text>
                            </View>
                    }
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 150
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width,
        height: 150,
    }
})
