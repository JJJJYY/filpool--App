import React from 'react';
import { Button, View, Text, StyleSheet, Alert } from 'react-native';
import { List } from '@ant-design/react-native'
const Item = List.Item;
export default class Settings extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <View style={styles.settingCentent}>
                <Item
                    arrow="horizontal"
                    onPress={() => { this.props.navigation.navigate('aboutUs') }}>
                    <Text style={styles.settingListText} >关于我们</Text>
                </Item>
                <Item
                    arrow="horizontal"
                    onPress={() => { this.props.navigation.navigate('serviceDetail') }}>
                    <Text style={styles.settingListText} >用户协议</Text>
                </Item>
                <View style={{ marginTop: 20, marginLeft: 'auto', marginRight: 'auto', width: 300, height: 200 }}>
                    <Button
                        title="退出账号"
                        color="#f69b3c"
                        onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    settingCentent: {

    },
    settingListText: {
        lineHeight: 60,
        fontSize: 18
    }
})
