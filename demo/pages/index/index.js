//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    companyName:"unique",
    eventName:"eventName",
    condition: "status"

  },


  /**
   * 跳转页面
   */
  detail: function () {
    wx.navigateTo({
      url: '/pages/companydetail/detail',
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    
    }
  
})