const serviceURL = 'http://testapi.filpool.c28e9d7b637474c3a98b2ed559c29434c.cn-hongkong.alicontainer.com';


const getFetch = url => new Promise((resolve, reject) => {
    fetch(url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then(response => {
            resolve(response)
        }).catch(err => reject(err))
})

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