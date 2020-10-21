
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, } from 'react-native';
import TabBar from './tabBar'



export default function Navigation() {
    return (
        <NavigationContainer>
            <TabBar></TabBar>
        </NavigationContainer>
    )
}