import {
    getRequest
} from '../request';

// banner
export function getGeneralBannerApi() {
    return getRequest('App.Banner.List');
}
// 公告列表
export function getNoticeListApi(params) {
    return getRequest('App.Announcement.List', params);
}