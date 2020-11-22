import {createIconSet} from 'react-native-vector-icons';
import glyphMap from './iconfont.json';

const Myicon = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf'); // 第二个参数啥ttf文件的名字

export default Myicon;

export const Button = Myicon.Button;
export const TabBarItem = Myicon.TabBarItem;
export const TabBarItemIOS = Myicon.TabBarItemIOS;
export const ToolbarAndroid = Myicon.ToolbarAndroid;
export const getImageSource = Myicon.getImageSource;