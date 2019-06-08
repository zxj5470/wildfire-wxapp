// pages/SignInPage/SignInPage.js
/**
 * 给企业用户提供的注册界面
 * 负责收集信息并且post给服务器端
 */
const app = getApp()
const HOST = app.globalData.HOST
const PORT = app.globalData.PORT
const md5 = require("../../utils/md5")
Page({

  /**
   * 页面的初始数据，如果时间充足可以添加上传企业Logo功能（不够的话就摆个联创的Logo在上      面...
   */
  data: {
    accountInput: '',
    passwordInput: '',
    passwordConfirmInput: '',
    teamNameInput: '',
    teamLeaderInput: '',
    teamBelongInput: '',
    teamIntroInput: '',
    signInTip: '',
  },
  
  // 数据同步函数
  accountInput: function (e) {
    this.data.accountInput = e.detail.value;
  },
  passwordInput: function (e) {
    this.data.passwordInput = e.detail.value;
  },
  passwordConfirmInput: function (e) {
    this.data.passwordConfirmInput = e.detail.value;
  },
  teamNameInput: function (e) {
    this.data.teamNameInput = e.detail.value;
  },
  teamLeaderInput: function (e) {
    this.data.teamLeaderInput = e.detail.value;
  },
  teamBelongInput: function (e) {
    this.data.teamBelongInput = e.detail.value;
  },
  teamIntroInput: function (e) {
    this.data.teamIntroInput = e.detail.value;
  },

  // 响应注册按钮，把信息传递POST给服务器端用于注册，需要根据接口和数据传输格式更改（url和data）
  signIn: function(){
    // 用于确认密码的if
    if (this.data.passwordInput == this.data.passwordConfirmInput){
      console.log(this.data.teamBelongInput);
      wx.request({
        url: `http://${HOST}:${PORT}/api/company/post`,
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        data: {
          account: this.data.accountInput,
          teamName: this.data.teamNameInput,
          passwdmd5: md5.md5(this.data.passwordInput),
          teamLeader: this.data.teamLeaderInput,
          teamBelong: this.data.teamBelongInput,
          teamIntro: this.data.teamIntroInput
        },
        success: function(res){
          console.log(res)
       },
       fail: function(){
         console.log("wx.request SignInPage.js fail")
       }
      })
    }else{
      console.log("wrong")
    }
  },

  // 响应回退按钮，回退到登陆界面
  cancelSignIn: function(){
    wx.navigateBack({
      
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