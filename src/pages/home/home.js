import React from 'react';
import { View } from 'react-native';
// home页轮播图 
import HeaderBanner from './components/banner1';
// 导入公告栏
import Notice from './components/notice';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={{ padding: 9 }}>
                {/* home页轮播图 */}
                <HeaderBanner />
                <Notice />
            </View>
        )
    }
}