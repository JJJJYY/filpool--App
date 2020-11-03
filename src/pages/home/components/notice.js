import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import CXIcon from '../../../icon/CXIcon';
import { getNoticeListApi } from '../../../request/api/homeApi'
// const { width } = Dimensions.get('window');
export default class Notice extends React.Component {
    constructor() {
        super();
        this.state = {
            notices: [],
            loading: false
        }
    }
    componentDidMount() {
        const getData = {
            page: 1,
            count: 10,
        };
        getNoticeListApi(getData).then(res => {
            console.log(res)
            this.setState({
                notices: res.data,
                loading: true
            })
        })
    }
    render() {
        const { loading, notices } = this.state;
        // console.log('loading', notices)
        return (
            <View>
                <View style={styles.centent} >
                    <CXIcon name='tongzhi' size={15} color='#000'></CXIcon>
                    {
                        loading ? <Swiper style={styles.wrapper} showsPagination={false} height={20} horizontal={false} autoplay>
                            {
                                notices.map(item => {
                                    console.log(item)
                                    return <View key={item.id} style={styles.slide}>
                                        <Text style={styles.text}>{item.title}</Text>
                                    </View>
                                })
                            }
                        </Swiper> : <ActivityIndicator size="small" color="#00ff00" />
                    }

                    <View>
                        <Text style={styles.moreText}>查看更多 &gt;</Text>
                    </View>
                </View>
                <View>
                    <Text>asdasdads</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centent: {
        flexDirection: "row",
        alignItems: 'center',
    },
    slide: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'transparent'
    },

    text: {
        color: '#666666',
        fontSize: 12,
    },
    moreText: {
        color: '#666666',
        fontSize: 12,
    }
})
