import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home/home';
import Mine from '../pages/mine/mine';
import Rate from '../pages/rate/rate';

const Stack = createStackNavigator();

// function navMine() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Mine"
//                 component={Mine}
//                 options={{
//                     title: '个人中心',
//                     headerTitleAlign: 'center',
//                     headerStyle: {
//                         backgroundColor: '#f0ac25FF',
//                         borderBottomWidth: 0,
//                         elevation: 0,
//                     },
//                     headerTintColor: '#fff',
//                     headerTitleStyle: {
//                         fontWeight: '600',
//                     },
//                 }}
//             />
//         </Stack.Navigator>
//     )
// }

const TabData = {
    home: {
        title: '首页',
        fun: Home
    },
    comPower: {
        title: '运算力',
        fun: Rate
    },
    info: {
        title: '我的',
        fun: Mine
    }
}
const Tab = createBottomTabNavigator();
export default class TabBar extends React.Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        switch (true) {
                            case route.name === TabData.home.title:
                                iconName = focused ?
                                    (<Image
                                        source={require('../assets/img/tab_icon_home_selected.png')}
                                        style={{ width: 25, height: 25, }} />)
                                    : (<Image
                                        source={require('../assets/img/tab_icon_home_normal.png')}
                                        style={{ width: 25, height: 25, }} />);
                                break;
                            case route.name === TabData.comPower.title:
                                iconName = focused ? (<Image
                                    source={require('../assets/img/tab_icon_count_selected.png')}
                                    style={{ width: 25, height: 25, }} />)
                                    : (<Image
                                        source={require('../assets/img/tab_icon_count_normal.png')}
                                        style={{ width: 25, height: 25, }} />);
                                break;
                            case route.name === TabData.info.title:
                                iconName = focused ? (<Image
                                    source={require('../assets/img/tab_icon_my_selected.png')}
                                    style={{ width: 25, height: 25, }} />)
                                    : (<Image
                                        source={require('../assets/img/tab_icon_my_normal.png')}
                                        style={{ width: 25, height: 25, }} />);
                            default:
                                break;
                        }
                        return iconName;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#e59d37',
                }}
            >
                {
                    Object.keys(TabData).map(item => {
                        return <Tab.Screen key={item} name={TabData[item].title} component={TabData[item].fun} />
                    })
                }
            </Tab.Navigator>
        )
    }
}