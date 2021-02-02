
import React from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, } from 'react-native';
import TabBar from './tabBar'
const Stack = createStackNavigator();

import Login from '../pages/login/login'
import Settings from '../pages/mine/setting/settings';
import ServiceDetail from '../pages/mine/setting/serviceDetail'
import AboutUs from '../pages/mine/setting/aboutUs'
import Actual from '../pages/mine/actual/actual'
// 账户中心
import SecurityCenter from '../pages/mine/securityCenter/securityCenter'
// 登录密码
import SecurityLoginPwd from '../pages/mine/securityCenter/components/securityLoginPwd'
// 修改绑定手机号码
import securityMobileModify from '../pages/mine/securityCenter/components/securityMobileModify'
// 修改绑定邮箱
import securityEmailPwd from '../pages/mine/securityCenter/components/securityEmailPwd'
// 修改资金密码
import securityTransPwd from '../pages/mine/securityCenter/components/securityTransPwd'
// 谷歌验证
import googleBind from '../pages/mine/securityCenter/components/googleBind'
// 修改谷歌验证
import googleModify from '../pages/mine/securityCenter/components/googleModify'
// 修改谷歌验证
import Invite from '../pages/mine/Invite/Invite'
// 原生js跳转功能
import NavigationService from '../utils/NavigationService'
export default function Navigation() {

    return (
        <NavigationContainer ref={e => { NavigationService.setTopLevelNavigator(e) }}>
            <Stack.Navigator>
                <Stack.Screen
                    name="home"
                    options={{
                        headerShown: false
                    }}
                    component={TabBar}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        title: '登录',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="setting"
                    options={{
                        headerTitleAlign: 'center',
                        title: '设置',
                    }}
                    component={Settings}
                />
                <Stack.Screen
                    name="serviceDetail"
                    options={{
                        headerTitleAlign: 'center',
                        title: '用户运算力租赁协议',
                    }}
                    component={ServiceDetail}
                />
                <Stack.Screen
                    name="aboutUs"
                    options={{
                        headerTitleAlign: 'center',
                        title: '关于我们',
                    }}
                    component={AboutUs}
                />
                <Stack.Screen
                    name="actual"
                    options={{
                        headerTitleAlign: 'center',
                        title: '实名认证',
                    }}
                    component={Actual}
                />
                <Stack.Screen
                    name="securityCenter"
                    options={{
                        headerTitleAlign: 'center',
                        title: '账户中心',
                    }}
                    component={SecurityCenter}
                />
                <Stack.Screen
                    name="securityLoginPwd"
                    options={{
                        headerTitleAlign: 'center',
                        title: '登录密码',
                    }}
                    component={SecurityLoginPwd}
                />
                <Stack.Screen
                    name="securityMobileModify"
                    options={{
                        headerTitleAlign: 'center',
                        title: '修改/绑定手机号码',
                    }}
                    component={securityMobileModify}
                />
                <Stack.Screen
                    name="securityEmailPwd"
                    options={{
                        headerTitleAlign: 'center',
                        title: '修改/绑定邮箱',
                    }}
                    component={securityEmailPwd}
                />
                <Stack.Screen
                    name="securityTransPwd"
                    options={{
                        headerTitleAlign: 'center',
                        title: '修改/绑定资金密码',
                    }}
                    component={securityTransPwd}
                />
                <Stack.Screen
                    name="googleBind"
                    options={{
                        headerTitleAlign: 'center',
                        title: '谷歌验证',
                    }}
                    component={googleBind}
                />
                <Stack.Screen
                    name="googleModify"
                    options={{
                        headerTitleAlign: 'center',
                        title: '修改谷歌验证',
                    }}
                    component={googleModify}
                />
                <Stack.Screen
                    name="invite"
                    options={{
                        headerTitleAlign: 'center',
                        title: '邀请好友',
                    }}
                    component={Invite}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}