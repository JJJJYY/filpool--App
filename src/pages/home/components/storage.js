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
                <Text style={styles.storageCneter}>FILPool矿池运营数据</Text>
                <View style={styles.storageCnetentWhite}>
                    <Text>矿池填充进度</Text>
                    <Text>最新区块高度：555,444</Text>
                </View>
                <View></View>
                <View>
                    <Text>矿池数据信息</Text>
                </View>
                <View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    storageCnetent: {
        padding: 15,
        marginTop: 10
    },
    storageCneter: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333FF'
    },
    storageCnetentWhite: {
        backgroundColor: '#fff'
    }
})

