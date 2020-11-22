import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, ActivityIndicator } from 'react-native';

export default class Community extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {

    }

    _onLayout(event) {
        // 外层盒子宽度
        let { width ,height} = event.nativeEvent.layout;
        console.log(event.nativeEvent.layout)
        this.setState({
            width,
            height
        })
    }
    render() {
        return (
            <View>
                <View style={styles.CommunityCentent}>
                    <View style={styles.CommunityCententFlex}>
                        <View  style={styles.CommunityCententXian}></View>
                        <Text style={styles.CommunityCententTitle}>IPFS</Text>
                    </View>
                    <Text   style={styles.CommunityCententTitleE}>Inter Planetary File System</Text>
                    <View style={[styles.CommunityCententFlex ,{marginTop: 13}]}>
                        <View style={styles.dian}></View>
                        <Text>星际文件系统</Text>
                    </View>
                    <View style={[styles.CommunityCententFlex,{marginTop: 13}]}>
                        <View style={styles.dian}></View>
                        <Text>下一代互联网底层通讯协议</Text>
                    </View>
                </View>

                <View style={styles.CommunityCentent}>
                    <View style={styles.CommunityCententFlex}>
                        <View  style={styles.CommunityCententXian}></View>
                        <Text style={styles.CommunityCententTitle}>Filecoin</Text>
                    </View>
                    <Text   style={styles.CommunityCententTitleE}>Filecoin</Text>
                    <View style={[styles.CommunityCententFlex ,{marginTop: 13}]}>
                        <View style={styles.dian}></View>
                        <Text>去中心化存储网络</Text>
                    </View>
                    <View style={[styles.CommunityCententFlex,{marginTop: 13}]}>
                        <View style={styles.dian}></View>
                        <Text>下一代互联网底层通讯协议</Text>
                    </View>
                    <View style={[styles.CommunityCententFlex,{marginTop: 13}]}>
                        <View style={styles.dian}></View>
                        <Text>融资2.57亿美金创全球ICO记录</Text>
                    </View>
                </View>

                <View style={styles.CommunityCentent}>
                    <View style={styles.CommunityCententFlex}>
                        <View  style={styles.CommunityCententXian}></View>
                        <Text style={styles.CommunityCententTitle}>20亿枚</Text>
                    </View>
                    <Text   style={styles.CommunityCententTitleE}>Filecoin发行总量 </Text>
                    <View style={[styles.CommunityCententFlex ,{marginTop: 13}]}>
                        <View style={styles.dian}></View>
                        <Text>Filecoin基金会 5%</Text>
                    </View>
                    <View style={[styles.CommunityCententFlex,{marginTop: 13}]}>
                        <View style={styles.dian}></View>
                        <Text>ICO投资人（私募+公募） 10%</Text>
                    </View>
                    <View style={[styles.CommunityCententFlex,{marginTop: 13}]}>
                        <View style={styles.dian}></View>
                        <Text>Protocol labs（官方团队） 15% </Text>
                    </View>
                    <View style={[styles.CommunityCententFlex,{marginTop: 13}]}>
                        <View style={styles.dian}></View>
                        <Text>矿工（挖矿）70%</Text>
                    </View>
                    <View style={[styles.CommunityCententImage,{marginTop: 13}]} >
                        <View onLayout={(e) => { this._onLayout(e) }}>
                            <Image
                                style={{height: 140 , width: this.state.width,resizeMode: 'stretch',}}
                                source={require('../../../assets/img/bannerData.png')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    CommunityCentent: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop:10,
        padding: 14
    },
    CommunityCententFlex : {
        flexDirection: 'row',
        alignItems: 'center'
    },
    CommunityCententXian: {
        width: 3,
        height: 14,
        backgroundColor: '#FFAB17',
        marginRight: 8
    },
    CommunityCententTitle: {
        fontSize: 18,
        color: '#333333',
    },
    CommunityCententTitleE : {
        marginLeft: 12,
        color:'#333333'
    },
    dian: {
        width:5 ,
        height:5,
        backgroundColor: '#FFAB17',
        borderRadius: 5,
        marginRight: 8
    },
    CommunityCententImage: {
        height: 160,
        backgroundColor: '#31363A',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    }
})
