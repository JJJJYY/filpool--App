import React from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { getVideoListApi } from '../../request/api/homeApi'
// home页轮播图 
import HeaderBanner from './components/banner1';
// 导入公告栏
import Notice from './components/notice';
// 存储空间
import Storage from './components/storage'
// 社区介绍
import Community from './components/community'
import Partners from './components/partners'
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guideItems: [
                {
                    icon: require("../../assets/img/guidance/guidance_13.png"),
                    title: "进阶小课堂",
                    // router: "/classroom"
                },
                {
                    icon: require("../../assets/img/guidance/guidance_12.png"),
                    title: "邀请好友",
                    // router: "/invite"
                },
                {
                    icon: require("../../assets/img/guidance/guidance_11.png"),
                    title: "项目动态",
                    // router: "/dynamic"
                },
                {
                    icon: require("../../assets/img/guidance/guidance_14.png"),
                    title: "帮助中心",
                    // router: "/helpCenter"
                }
            ],
            videos: []
        }
    }

    componentDidMount() {
        this.videoList()
    }
    videoList() {
        getVideoListApi().then(res => {
            console.log(res)
            this.setState({
                videos: res.data.filter(item => {
                    return item.type === 1;
                })
            })
        });
    }

    _onLayout(event) {
        // 外层盒子宽度
        let { width } = event.nativeEvent.layout;
        this.setState({
            barWidth: width,
        })
    }
    render() {
        const { guideItems, barWidth } = this.state;
        return (
            <ScrollView>
                <View style={{ padding: 9 }}>
                    {/* home页轮播图 */}
                    <HeaderBanner />
                    <Notice />
                    {/* 引导 */}
                    <View style={styles.guideItem}>
                        {
                            guideItems.map((val, index) => {
                                return (
                                    <TouchableOpacity onPress={() => { Alert.alert('You tapped the button!') }} key={index} style={styles.guideItemSelect}>
                                        <View >
                                            <Image style={styles.images} source={val.icon}></Image>
                                            <Text style={styles.guideItemText} >{val.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    {/* 存储空间 */}
                    <Storage />
                    {/* 社区介绍 */}
                    <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>IPFS社区介绍</Text>
                    <View style={styles.videoCentent} onLayout={(e) => { this._onLayout(e) }} >
                        {
                            this.state.videos.map((item, index) => {
                                return <Video source={{ uri: item.content }}
                                    key={index}
                                    ref={(ref) => {
                                    }}
                                    audioOnly={true}
                                    naturalSize={
                                        height = 300,
                                        width = barWidth
                                    }
                                    rate={1.0}
                                    volume={1.0}
                                    muted={false}
                                    resizeMode={'cover'} // 均匀缩放视频（保持视频的宽高比），使图像的尺寸（宽度和高度）等于或大于视图的相应尺寸（减去填充） 设置了可以生效宽高
                                    playWhenInactive={false}
                                    playInBackground={false}
                                    ignoreSilentSwitch={'ignore'}
                                    progressUpdateInterval={250.0}
                                    onBuffer={this.onBuffer}
                                    onError={this.videoError}
                                    onProgress={this.onProgress}
                                    style={[styles.backgroundVideo, { width: barWidth, height: 150 }]}
                                />
                            })
                        }
                    </View>
                    <Community />
                    <Partners />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    guideItem: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20,
    },
    guideItemSelect: {
        alignItems: 'center',
    },
    images: {
        width: 48,
        height: 48,
        resizeMode: 'stretch',
    },
    guideItemText: {
        marginTop: 10,
        fontSize: 12,
        color: '#333333FF',
        fontWeight: '500'
    },
    videoCentent: {
        marginTop: 15,
    },
    backgroundVideo: {
        borderRadius: 8,
        overflow: 'hidden',
    },
})