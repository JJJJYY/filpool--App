import React from 'react';
import { Button, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { getLoginApi } from '../../request/api/loginApi'
export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            account: '',
            password: ''
        }
    }

    componentDidMount() {
        console.log(this.props)
    }


    login() {
        getLoginApi().then(res => {
            console.log(res)
        })
    }

    onChangeText(text) {
        this.setState({
            account: text
        })
    }
    onChangePassWordText(num) {
        this.setState({
            password: num
        })
    }
    render() {
        return (
            <View style={{
                backgroundColor: '#FFF', flex: 1, flexDirection: 'column',
            }}>
                <View style={styles.loginPadding}>
                    <View style={styles.loginFlexText}>
                        <Text style={styles.loginTextTitle}>取消</Text>
                        <Text style={styles.loginTextTitle}>注册</Text>
                    </View>
                    <View style={{ marginTop: 50 }}>
                        <Image style={{ width: 135, height: 38 }} source={require('../../assets/img/login/login-logo.png')} />
                        <Text style={{ marginTop: 12, marginLeft: 5, fontSize: 16, color: '#999999FF' }}>登录FILPool</Text>
                    </View>
                    <TextInput
                        style={{ marginTop: 50, height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.account}
                        placeholder='请输入手机号码或邮箱'
                        placeholderTextColor='#C6C6C6FF'
                    >
                    </TextInput>
                    <TextInput
                        style={{ marginTop: 60, height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
                        onChangeText={num => this.onChangePassWordText(num)}
                        value={this.state.password}
                        textContentType="password"
                        secureTextEntry={true}
                        placeholder='请输入密码'
                        placeholderTextColor='#C6C6C6FF'
                    >
                    </TextInput>
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    loginPadding: {
        padding: 20,
        marginTop: 30
    },
    loginFlexText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginTextTitle: {
        fontSize: 16,
        color: '#666666FF',
        fontWeight: '400'
    }
})
