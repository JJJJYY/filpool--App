// const serviceURL = 'http://testapi.filpool.c28e9d7b637474c3a98b2ed559c29434c.cn-hongkong.alicontainer.com';
import {
    serviceURL
} from "../config";

const getFetch = url => new Promise((resolve, reject) => {
    fetch(url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then(response => {
            resolve(response)
        }).catch(err => reject(err))
})

const PostFetch = (url, jsondata) => new Promise((resolve, reject) => {
    fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d',
            },
            // processData: false,
            // contentType: false,
            body: JSON.stringify(jsondata)
            // cancelToken: new CancelToken(function executor(c) {
            //   _this.cancelAjax = c
            // })
        })
        .then((response) => response.json())
        .then(response => {
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