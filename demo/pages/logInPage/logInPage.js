// pages/logInPage/logInPage.js
const app = getApp()
const HOST = app.globalData.HOST
const PORT = app.globalData.PORT
const md5 = require("../../utils/md5")

Page({

  /**
   * 页面的初始数据，还需要保存服务器端返回的企业用户Id，用于后面页面的url中
   */
  data: {
    account: '',
    password: '',
    logInTip: '',
  },

  // 数据同步函数
  account: function (e) {
    this.data.account = e.detail.value;
  },
  password: function (e) {
    this.data.password = e.detail.value;
  },


  // 响应登陆按钮，POST给服务器账号密码并根据返回码确认是否俸禄，需根据接口和传输数据格式调整（url和data）
  logIn: function () {
    if ((this.data.account != '') && (this.data.password != '')) {
      console.log(this.data.account + "");  // 测试用log，可删除
      wx.request({
        url: `http://${HOST}:${PORT}/api/company/login`,
        method: 'POST',
        data: {
          username: this.data.account,
          passwdmd5: md5.md5(this.data.password)
        },
        success: function (res) {
          console.log(res.statusCode);
          console.log(res.data);
          const data = res.data;
          if (data.status == 0) {
            console.log(data.results);
            app.globalData.companyInfo = data.results;
            wx.redirectTo({
              url:'../groupPage/groupPage'
            })
          }
        },
        fail: function () {

        }
      })
    } else {
      console.log("fail") // 测试用log，可删除
    }
  },

  // 响应注册事件，跳转到注册界面
  sign: function () {
    wx.navigateTo({
      url: '../SignInPage/SignInPage',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})