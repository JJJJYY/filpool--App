import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class Storage extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <View style={styles.storageCnetent}>
                <Text style={styles.storageTitle}>FILPool矿池运营数据</Text>
                <View style={styles.storageCnetentWhite}>
                    <View style={styles.storageCnetentText}>
                        <Text style={styles.textSize}>矿池填充进度</Text>
                        <Text style={styles.textSize}>最新区块高度：555,444</Text>
                    </View>
                    <View style={styles.storageCnetentChunk}>
                        <View style={styles.alignText}>
                            <Text style={styles.textSize}>总储存空间</Text>
                            <Text style={styles.textSizeColor}>152,555T</Text>
                        </View>
                        <View style={styles.xian}></View>
                        <View style={styles.alignText}>
                            <Text style={styles.textSize}>总有效算力</Text>
                            <Text style={styles.textSizeColor}>152,555P</Text>
                        </View>
                        <View style={styles.xian}></View>
                        <View style={styles.alignText}>
                            <Text style={styles.textSize}>全网有效算力</Text>
                            <Text style={styles.textSizeColor}>152,555P</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textSize}>矿池数据信息</Text>
                        <View style={styles.inageCententFlex}>
                            <View style={styles.inageCentent}>
                                <Text>矿池总收益</Text>
                                <Text>155,588 FIL</Text>
                            </View>
                            <View style={styles.inageCentent}>
                                <Text>矿池总收益</Text>
                                <Text>155,588 FIL</Text>
                            </View>
                            <View style={styles.inageCentent}>
                                <Text>矿池总收益</Text>
                                <Text>155,588 FIL</Text>
                            </View>
                            <View style={styles.inageCentent}>
                                <Text>矿池总收益</Text>
                                <Text>155,588 FIL</Text>
                            </View>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    storageCnetent: {
        marginTop: 10,
    },
    storageTitle: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333FF'
    },
    storageCnetentWhite: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 12,
    },
    storageCnetentText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    storageCnetentChunk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textSize: {
        fontSize: 12,
        color: '#333333FF'
    },
    textSizeColor: {
        fontSize: 18,
        color: '#E59C0DFF',
        fontWeight: '500',
    },
    alignText: {
        alignItems: 'center'
    },
    inageCententFlex: {

    },
    inageCentent: {
        backgroundColor: '#F4F4F4FF'
    }
})

