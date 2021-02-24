// const serviceURL = 'http://testapi.filpool.c28e9d7b637474c3a98b2ed559c29434c.cn-hongkong.alicontainer.com';
import {
    serviceURL
} from "../config";
import {
    Toast
} from '@ant-design/react-native';
import store from '../store'
const getFetch = url => new Promise(async (resolve, reject) => {

    let cookie = null
    try {
        cookie = await getCookie();
    } catch (err) {
        // console.log('登录');
    }
    // console.log('cookie', cookie)

    fetch(url, {
            method: 'GET',
            headers: {
                'Cookie': cookie,
            }
        })
        .then((response) => {
            return response.json()
        })
        .then(response => {
            if (response.ret === 402) {
                Toast.info(response.msg)
            }
            if (response.ret === 401) {
                Toast.info(response.msg)
                NavigationService.navigate('login')
            }
            resolve(response)
        }).catch(err => reject(err))

})

const PostFetch = (url, jsondata) => new Promise(async (resolve, reject) => {

    let cookie = null
    try {
        cookie = await getCookie();
    } catch (err) {
        // console.log('登录');
    }
    // console.log('cookie', cookie)

    fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cookie': cookie,
                // 'Content-Type': 'multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d',
            },
            body: JSON.stringify(jsondata)
        })
        .then((response) => {
            // 登录获取token
            let map = response.headers.map
            if (map['set-cookie']) {
                setCookie(map)
            }
            return response.json()
        })
        .then(response => {
            if (response.ret === 402) {
                Toast.info(response.msg)
            }
            if (response.ret === 401) {
                Toast.info(response.msg)
                NavigationService.navigate('login')
            }
            resolve(response)
        }).catch(err => reject(err))

});


export const getRequest = (api, params) => {
    let url = `${serviceURL}/public/`;
    params = {
        s: api,
        ...params,
    }
    if (params) {
        const paramsArray = [];
        // 拼接参数
        Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`));
        if (url.search(/\?/) === -1) {
            url += `?${paramsArray.join('&')}`;
        } else {
            url += `&${paramsArray.join('&')}`;
        }
    }
    return getFetch(url);
}

// post请求
export const postRequest = (api, data, baseUrl = null) => {
    if (baseUrl) {
        return PostFetch(baseUrl, data);
    } else {
        let url = `${serviceURL}/public/`;
        data = {
            s: api,
            ...data,
        }
        return PostFetch(url, data);
    }
};

// 存cookie
function setCookie(map) {
    let cookie = map['set-cookie']
    if (cookie.includes('token')) {
        // let strArr = cookie.split('expires')
        // cookie = strArr[0]
        // console.log(cookie)
        store.save({
            key: 'token',
            data: cookie
        });

    }
}

// 取cookie
function getCookie() {
    return new Promise((resolve, reject) => {
        store.getBatchData([{
                key: 'token',
            },
            {
                key: 'imageCode',
            }
        ]).then(results => {
            let res = []
            results.forEach(result => {
                res.push(result)
            })
            resolve(res.join(','));
        }).catch(err => {
            reject(err);
        })
    })
}