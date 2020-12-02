import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import {
    getUserInfoApi
} from '../request/api/loginApi'
import {
    Toast
} from '@ant-design/react-native';

const storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: 1000 * 3600 * 24,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

});

// 调用user刷新userState
storage.sync = {
    // sync方法的名字必须和所存数据的key完全相同
    // 参数从params中解构取出
    // 最后返回所需数据或一个promise
    async user() {
        const res = await getUserInfoApi();
        // console.log(res);

        if (res.ret === 200) {
            storage.save({
                key: 'userState',
                data: res.data
            });
            return res.data;
        } else {
            // 出错时抛出异常
            console.log(Toast)
            Toast.success('Load success !!!');
        }
    }
};

export default storage;