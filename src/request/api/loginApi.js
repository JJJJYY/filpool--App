import {
    postRequest
} from '../request';

// 登录
export function getLoginApi(data) {
    return postRequest('App.AuthUser.login', data);
}
// 登出
export function logoutApi() {
    return postRequest('App.AuthUser.logout');
}
// 登录信息
export function getUserInfoApi() {
    return postRequest('App.AuthUser.Info');
}
// 注册
export function registerApi(data) {
    return postRequest('App.AuthUser.Register', data);
}
// 短信验证码
export function sendApi(data) {
    return postRequest('App.SMS.Send', data);
}
// 渠道
export function ByChannelApi(data) {
    return postRequest('App.Channel.GetByChannel', data);
}
// 重置密码
export function resetPasswordApi(data) {
    return postRequest('App.AuthUser.ResetPassword', data);
}