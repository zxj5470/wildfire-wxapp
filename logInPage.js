// pages/logInPage/logInPage.js
const app = getApp()
const HOST = app.globalData.HOST
const PORT = app.globalData.PORT
const md5 = require("../../utils/md5")
const util = require("../../utils/util")
const dateTimePicker = require('../../utils/dateTimePicker');

Page({

  /**
   * 页面的初始数据，还需要保存服务器端返回的企业用户Id，用于后面页面的url中
   */
  data: {
    account: '',
    password: '',
    logInTip: '',

    dateTime: null,
    dateTimeArray: null,
    tempDateTime:null,

    dateTime1: null,
    dateTimeArray1: null,
    tempDateTime1:null,

    startTime: null,
    endTime: null
  },

  toTimeString(arr) {
    arr[0] += 2017;
    // arr[1] += 1;
    arr[2] += 1;
    const date = new Date(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
    return util.formatTime(date);
  },
  changeDateTime(e) {
    this.setData({dateTime: e.detail.value});
    const t = this.data.dateTime;
    t[5]=0
    this.setData({
      startTime: this.toTimeString(t)
    });
  },

  changeDateTime1(e) {
    this.setData({dateTime1: e.detail.value});
    const t = this.data.dateTime1;
    t[5]=0
    this.setData({
      endTime: this.toTimeString(t)
    });
  },
  changeDateTimeColumn(e) {
    let arr = this.data.dateTime, dateArr = this.data.dateTimeArray;
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },
  changeDateTimeColumn1(e) {
    let arr = this.data.dateTime1, dateArr = this.data.dateTimeArray1;
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray1: dateArr,
      dateTime1: arr
    });
  },

  // 数据同步函数
  account: function (e) {
    this.data.account = e.detail.value;
  },
  password: function (e) {
    this.data.password = e.detail.value;
  },


  // 响应登陆按钮，POST给服务器账号密码并根据返回码确认是否登陆，需根据接口和传输数据格式调整（url和data）
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
              url: '../groupPage/groupPage'
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
    let obj = dateTimePicker.dateTimePicker(2017, 2028);
    let obj1 = dateTimePicker.dateTimePicker(2017, 2028);
    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj1.dateTimeArray,
      dateTime1: obj1.dateTime
    });
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