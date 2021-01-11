import {
  serviceURL
} from "../config";

import store from '../store'


const getFetch = url => new Promise(async (resolve, reject) => {

  let cookie = null
  try {
    cookie = await getCookie();
  } catch (err) {
    console.log('登录');
  }
  console.log('cookie', cookie)

  fetch(url, {
      method: 'GET',
      headers: {
        'Cookie': cookie,
      }
    })
    .then((response) => {
      let map = response.headers.map
      if (map['set-cookie']) {
        setCookie(map)
      }
      resolve(response)
    })
    .catch(err => reject(err))

})

export const getImageCode = () => {
  let newTime = new Date().getTime();
  let url = `${serviceURL}/public/ImageCode.php?uuid=${newTime}`;
  return getFetch(url);
}


// 存cookie
function setCookie(map) {
  let cookie = map['set-cookie']
  if (cookie.includes('image_code')) {
    // let strArr = cookie.split('expires')
    // cookie = strArr[0]
    console.log(cookie)
    store.save({
      key: 'imageCode',
      data: cookie
    });

  }
}
// 取cookie
function getCookie() {
  return new Promise((resolve, reject) => {
    store.load({
      key: 'imageCode',
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}