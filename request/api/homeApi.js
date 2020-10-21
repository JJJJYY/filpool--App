import {
    getRequest
} from '../request';

// banner
export function getGeneralBannerApi() {
    return getRequest('App.Banner.List');
}