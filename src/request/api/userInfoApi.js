import {
    postRequest,
    getRequest
} from '../request';

// 获取总算力
export function myWeightApi(data) {
    return postRequest('App.Weight.MyWeight', data);
}
// 获取钱包
export function myBalanceApi() {
    return postRequest('App.Balance.My');
}

// 获取币种
export function assetTypeApi() {
    return postRequest('App.Asset.Tokens');
}
// 充值地址
export function userAddressApi(data) {
    return postRequest('App.DepositAddress.UserAddress', data);
}
// 充值记录
export function rechargeRecordApi(data) {
    return postRequest('App.Deposit.RechargeRecord', data);
}
// 提现记录
export function withdrawalApi(data) {
    return postRequest('App.Withdrawal.WithdrawRecord', data);
}

// 邀请好友
export function distributionDetailApi() {
    return postRequest('App.AuthUser.DistributionDetail')
}
// 邀请记录
export function inviteRecordApi() {
    return postRequest('App.AuthUser.InviteRecord')
}

// 推广订单记录
export function rewardRecordApi() {
    return postRequest('App.BalanceModify.RewardRecord');
}
// 订单列表
export function orderListApi(data) {
    return postRequest('App.Weight.OrderList', data);
}

// 算力管理
export function myWeightGroupApi() {
    return postRequest('App.Weight.MyWeightGroup')
}
// 修改密码
export function modifyPasswordApi(data) {
    return postRequest('App.AuthUser.ModifyPassword', data)
}
// 登录后发送验证码
export function authSendApi(data) {
    return postRequest('App.SMS.AuthSend', data)
}
// 修改手机号码
export function modifyPhoneApi(data) {
    return postRequest('App.AuthUser.ModifyPhone', data)
}
// 修改邮箱
export function modifyEmailApi(data) {
    return postRequest('App.AuthUser.ModifyEmail', data)
}
// 创建谷歌秘钥
export function createGaApi() {
    return postRequest('App.AuthUser.CreateGa')
}
// 绑定谷歌验证
export function bindGaApi(data) {
    return postRequest('App.AuthUser.BindGa', data)
}
// 旧谷歌验证
export function checkOldGaApi(data) {
    return postRequest('App.AuthUser.CheckOldGa', data)
}

// 修改支付密码
export function modifyPayPwdApi(data) {
    return postRequest('App.AuthUser.ModifyPayPwd', data)
}
// 获取实名信息
export function userIdInfoApi() {
    return postRequest('App.UserIdInfo.Get')
}

// 提交实名
export function submitUserIdInfoApi(data) {
    return postRequest('App.UserIdInfo.Submit', data);
}
// 获取七牛服务token
export function getTokenApi() {
    return postRequest('App.Qiniu.Token');
}
// 调用上传图片
export function filePictureApi(data, baseUrl) {
    return postRequest('', data, baseUrl);
}

// 提现
export function withdrawalCurrencyApi(data) {
    return postRequest('App.Balance.Withdrawal', data)
}
// 内部转账
export function internalTransferApi(data) {
    return postRequest('App.Balance.InternalTransfer', data)
}
// 商品某条数据
export function goodGetApi(data) {
    return postRequest('App.Goods.Get', data)
}
// 确认订单
export function confirmOrderApi(data) {
    return postRequest('App.Weight.ConfirmOrder', data)
}
// 订单详情
export function orderDetailsApi(data) {
    return postRequest('App.Weight.OrderDetails', data)
}
// 下单
export function orderApi(data) {
    return postRequest('App.Weight.Order', data);
}
// 平台信息
export function getTextInfoApi(data) {
    return postRequest('App.TextInfo.Get', data)
}
// 帮助中心获取列表
export function helpInfoListApi(data) {
    return postRequest('App.HelpInfo.List', data)
}
// 帮助中心详情
export function helpInfoDetailApi(data) {
    return postRequest('App.HelpInfo.Detail', data)
}
// 进阶小课堂&项目动态列表  0项目动态,1进阶小课堂
export function advertisementInfoList(data) {
    return postRequest('App.AdvertisementInfo.List', data)
}
// 详情
export function advertisementInfoDetail(data) {
    return postRequest('App.AdvertisementInfo.Detail', data)
}
// 提示更新
export function versionAip(data) {
    return postRequest('App.AppVersion.CheckUpdate', data)
}
// 算力收益
export function userIncomeApi(data) {
    return postRequest('App.Income.UserIncome', data)
}
// 资产详情
export function recordListApi(data) {
    return getRequest('BalanceModify.RecordList', data)
}
// 行情
export function quotationApi(data) {
    return postRequest('Quotation.getPriceList', data)
}
// 抢购
export function getPurchaseInfo(data) {
    return postRequest('App.FlashSale.ShowPurchaseInfo', data)
}
// 首页抢购列表页
export function getHomePageSaleLatestInfo(data) {
    return postRequest('App.FlashSale.showHomePageSaleLatestInfo', data)
}
// 开始抢购
export function getPurchase(data) {
    return postRequest('App.FlashSale.Purchase', data)
}
// 刷新状态
export function getCheckOrderStatus(data) {
    return postRequest('App.FlashSale.CheckOrderStatus', data)
}
// 划转
export function getTransfer(data) {
    return postRequest('App.Balance.Transfer', data)
}
// 抢购列表
export function getFlashSaleOrderList(data) {
    return postRequest('App.FlashSale.GetFlashSaleOrderList', data)
}
// 算力记录
export function getUserAdjPowerList(data) {
    return postRequest('App.UserAdjPower.List', data)
}
// 排队
export function getListTopFlashUsers(data) {
    return getRequest('App.FlashSale.ListTopFlashUsers', data)
}
// 1 ， 2期
export function getMyPower(data, fun) {
    return getRequest('App.Weight.MyPower', data, fun)
}
// 划转质押
export function getTransferPledged(data) {
    return getRequest('App.Balance.TransferPledged', data)
}