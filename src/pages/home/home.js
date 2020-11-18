import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// home页轮播图 
import HeaderBanner from './components/banner1';
// 导入公告栏
import Notice from './components/notice';
// 存储空间
import Storage from './components/storage'
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
        }
    }
    render() {
        const { guideItems } = this.state;
        return (
            <View style={{ padding: 9 }}>
                {/* home页轮播图 */}
                <HeaderBanner />
                <Notice />
                {/* 引导 */}
                {
                    console.log(guideItems)
                }
                <View style={styles.guideItem}>
                    {
                        guideItems.map(val => {
                            return <View style={styles.guideItemSelect}>
                                <Image style={styles.images} source={val.icon}></Image>
                                <Text style={styles.guideItemText} >{val.title}</Text>
                            </View>
                        })
                    }
                </View>
                {/* 存储空间 */}
                <Storage />
            </View>
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
    }
})