import {
    getRequest,
    postRequest
} from '../request';

// 1 ， 2期
export function getMyPower(data) {
    return getRequest('App.Weight.MyPower', data)
}