import React from 'react';
import { View, Text, } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
export default function Rate({ navigation }) {
    useFocusEffect(
        React.useCallback(() => {
            return () => {
            };
        }, [])
    );

    return <Profile />;
}


class Profile extends React.Component {

    componentDidMount() {
        console.log('Rate')
    }
    render() {
        return (
            <View>
                <Text>Rate</Text>
            </View>
        )
    }
}