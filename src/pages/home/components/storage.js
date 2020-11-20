import React from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { getPoolInfoApi } from '../../../request/api/homeApi'

// 差进度条
export default class Storage extends React.Component {
    constructor() {
        super()
        this.state = {
            operationalData: 1,
            poolData: {},
            nodeList: [],
        }
    }
    componentDidMount() {
        this.operationalDataApi()
    }


    operationalDataApi() {
        getPoolInfoApi({ number: this.state.operationalData }).then(res => {
            this.setState({
                poolData: res.data || {},
                nodeList: res.data.nodes || []
            })
        })
    }

    _onLayout(event) {
        // 外层盒子宽度
        let { width } = event.nativeEvent.layout;
        // 盒子宽度
        const boxW = 160;
        // 栅格数
        const cols = 2;
        // 计算盒子margin
        let vMargin = (width - cols * boxW) / (cols + 1);
        this.setState({
            barWidth: boxW,
            vMargin
        })
    }
    render() {
        const { barWidth, vMargin, nodeList, poolData } = this.state;
        return (
            <View style={styles.storageCnetent}>
                <Text style={styles.storageTitle}>FILPool矿池运营数据</Text>
                <View style={styles.storageTabs}>
                    <TouchableWithoutFeedback onPress={() => { this.setState({ operationalData: 1 }, () => { this.operationalDataApi() }) }}>
                        <Text style={[styles.storageTabsData, this.state.operationalData === 1 ? { color: '#F9A03EFF' } : null]}>一期运营数据</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => { this.setState({ operationalData: 2 }, () => { this.operationalDataApi() }) }}>
                        <Text style={[styles.storageTabsData, { marginLeft: 20 }, this.state.operationalData === 2 ? { color: '#F9A03EFF' } : null]}>二期运营数据</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.storageCnetentWhite}>
                    <View style={styles.storageCnetentText}>
                        <Text style={styles.textSize}>矿池填充进度</Text>
                        <Text style={styles.textSize}>最新区块高度：{poolData.height || 0}</Text>
                    </View>
                    <View style={styles.storageCnetentChunk}>
                        <View style={styles.alignText}>
                            <Text style={styles.textSize}>总储存空间</Text>
                            <Text style={styles.textSizeColor}>{poolData.poolPower || 0}T</Text>
                        </View>
                        <View style={styles.xian}></View>
                        <View style={styles.alignText}>
                            <Text style={styles.textSize}>总有效算力</Text>
                            <Text style={styles.textSizeColor}>{poolData.poolAdjPower || 0}P</Text>
                        </View>
                        <View style={styles.xian}></View>
                        <View style={styles.alignText}>
                            <Text style={styles.textSize}>全网有效算力</Text>
                            <Text style={styles.textSizeColor}>{poolData.netAdjPower || 0} P</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 25 }}>
                        <Text style={styles.textSize}>矿池数据信息</Text>
                        <View style={styles.inageCententFlex} onLayout={(e) => { this._onLayout(e) }}>
                            <View style={[styles.inageCentent, { width: barWidth, marginLeft: vMargin }]}>
                                <Image style={styles.imageSize} source={require('../../../assets/img/webPageIcon/text-1.png')}></Image>
                                <View>
                                    <Text>矿池累计收益</Text>
                                    <Text>{poolData.totalReward || 0} FIL</Text>
                                </View>
                            </View>
                            <View style={[styles.inageCentent, { width: barWidth, marginLeft: vMargin }]}>
                                <Image style={styles.imageSize} source={require('../../../assets/img/webPageIcon/text-4.png')}></Image>
                                <View>
                                    <Text>矿池昨日收益</Text>
                                    <Text>{poolData.yesterdayReward || 0}FIL</Text>
                                </View>
                            </View>
                            <View style={[styles.inageCentent, { width: barWidth, marginLeft: vMargin }]}>
                                <Image style={styles.imageSize} source={require('../../../assets/img/webPageIcon/text-2.png')}></Image>
                                <View>
                                    <Text>累计单T收益</Text>
                                    <Text>{poolData.poolEfficiency || 0}FIL</Text>
                                </View>
                            </View>
                            <View style={[styles.inageCentent, { width: barWidth, marginLeft: vMargin }]}>
                                <Image style={styles.imageSize} source={require('../../../assets/img/webPageIcon/text-3.png')}></Image>
                                <View>
                                    <Text>昨日单T收益</Text>
                                    <Text>{poolData.yesterdaySpaceEfficiency || 0}FIL</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.storageCnetentWhite, { marginTop: 10 }]}>
                    <Text style={styles.textSize}>节点信息</Text>
                    {
                        nodeList.length !== 0 ? <View style={styles.textTable}>
                            <View style={styles.textTableBox}>
                                <Text style={styles.textTableBoxText}>节点ID</Text>
                                {
                                    nodeList.map((item, index) => {
                                        return <Text key={index} style={styles.textTableBoxTextList}>{item.miner}</Text>
                                    })
                                }
                            </View>
                            <View style={styles.textTableBox}>
                                <Text style={styles.textTableBoxText}>有效算力</Text>
                                {
                                    nodeList.map((item, index) => {
                                        return <Text key={index} style={styles.textTableBoxTextList}>{item.adj}</Text>
                                    })
                                }
                            </View>
                            <View style={styles.textTableBox}>
                                <Text style={styles.textTableBoxText}>24小时挖矿收益</Text>
                                {
                                    nodeList.map((item, index) => {
                                        return <Text key={index} style={styles.textTableBoxTextList}>{item.rewards}</Text>
                                    })
                                }
                            </View>
                        </View> : <Text style={{ textAlign: "center" }}>暂无数据</Text>
                    }
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
        marginTop: 10
    },
    storageCnetentChunk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    textSize: {
        fontSize: 12,
        color: '#333333FF',
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
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    inageCentent: {
        backgroundColor: '#F4F4F4FF',
        marginTop: 9,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 9,
        borderRadius: 8
    },
    imageSize: {
        width: 28,
        height: 25,
        marginRight: 8
    },
    textTable: {
        flexDirection: 'row',
    },
    textTableBox: {
        flexGrow: 1,
    },
    textTableBoxText: {
        borderBottomWidth: 1,
        borderBottomColor: '#ebebebff',
        color: '#666666ff',
        textAlign: 'center',
        lineHeight: 28
    },
    textTableBoxTextList: {
        textAlign: 'center',
        lineHeight: 28
    },
    storageTabs: {
        flexDirection: 'row'
    },
    storageTabsData: {
        lineHeight: 40,
        color: '#666666FF'
    }
})

