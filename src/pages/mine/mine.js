import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
export default class Mine extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    _onLayout(event) {
        let width = event.nativeEvent.layout.width - 20;
        console.log(width)
        this.setState({
            width
        })
    }
    render() {
        const { width } = this.state;
        return (
            <View>
                <View style={styles.mineHeader}>
                    <View style={styles.headerUser}>
                        <Image
                            style={{
                                resizeMode: "stretch",
                                height: 30,
                                width: 30
                            }}
                            source={require("../../assets/img/personalfil.png")}
                        />
                        <View style={{ marginLeft: 12 }}>
                            <Text style={{ color: '#FFF' }}>150*****234（普通用户）</Text>
                            <Text style={{ color: '#FFF' }}>ID：129286</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.storageTotalCentent} onLayout={(e) => { this._onLayout(e) }}>
                    <View style={[styles.storageTotal, { width }]}>
                        <View style={styles.totalHeader}>
                            <Text>一期</Text>
                            <Text>二期</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mineHeader: {
        height: 110,
        backgroundColor: '#f0ac25FF',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    headerUser: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 26
    },
    storageTotalCentent: {
        position: 'relative',
        justifyContent: 'center'
    },
    storageTotal: {
        backgroundColor: '#fff',
        borderRadius: 8,
        position: 'absolute',
        top: -30,
        left: 10,
        bottom: 0,
        zIndex: 2,
        height: 230,
    },
    totalHeader: {
        flexDirection: 'row',
        height: 34,
        backgroundColor: '#FFF7E8FF',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    }
})