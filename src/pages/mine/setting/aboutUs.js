import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity, Dimensions } from 'react-native';
import { getTextInfoApi } from '../../../request/api/userInfoApi';
import { WebView } from 'react-native-webview'
export default class AboutUs extends React.Component {
    constructor() {
        super()
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        this.getContent()
    }

    getContent() {
        const postData = {
            key: "about",
        };
        getTextInfoApi(postData).then((res) => {
            console.log(res)
            this.setState({
                content: res.data.content
            })
        });
    }

    render() {
        const { content } = this.state;
        return (
            <WebView
                source={{
                    html: `
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                ${content}
                ` }}
            />
        )
    }

}


const styles = StyleSheet.create({
})
