import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, ActivityIndicator } from 'react-native';
import { getPartnerListApi } from '../../../request/api/homeApi';
const width = Dimensions.get('window').width;
const vMargin = 10;
const cols = 3;
const boxW = (width - (vMargin * 2)) / cols;

export default class Partners extends React.Component {
    constructor() {
        super();
        this.state = {
            partnersList: []
        }
    }
    componentDidMount() {
        getPartnerListApi().then(res => {
            // console.log(res)
            this.setState({
                partnersList: res.data
            })
        })
    }
    render() {
        const { partnersList } = this.state;
        return (
            <View style={styles.partnersCentent}>
                <View style={styles.partnersTitleFlex}>
                    <View style={styles.zhu}></View>
                    <Text>合作伙伴</Text>
                </View>
                <View style={styles.partnersBoxCentent}>
                    {
                        partnersList.map((item, index) => {
                            return <View style={styles.partnersBox} key={index}>
                                <Image
                                    style={styles.partnersImages}
                                    source={{
                                        uri: item.image
                                    }}
                                />
                            </View>
                        })
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    partnersCentent: {
        marginTop: 18
    },
    partnersTitleFlex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    zhu: {
        width: 3,
        height: 14,
        backgroundColor: '#FFAB17',
        marginRight: 8
    },
    partnersBoxCentent: {
        flexDirection: 'row',
        marginTop: 6,
        flexWrap: 'wrap'
    },
    partnersBox: {
        width: boxW,
        height: 35,
        marginTop: vMargin,
        paddingRight: vMargin,
        borderRadius: 4
    },
    partnersImages: {
        width: boxW - vMargin,
        backgroundColor: "#fff",
        height: 35,
        borderRadius: 4
    }
})