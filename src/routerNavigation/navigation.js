
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, } from 'react-native';
import TabBar from './tabBar'
const Stack = createStackNavigator();

import Login from '../pages/login/login'


export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        title: '登录',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="home"
                    options={{
                        headerShown: false
                    }}
                    component={TabBar}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}