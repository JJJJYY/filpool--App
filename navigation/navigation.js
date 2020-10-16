
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, } from 'react-native';
import TabBar from './tabBar'
const Stack = createStackNavigator();



export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={TabBar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}