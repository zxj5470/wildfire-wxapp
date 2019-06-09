// page5/companydetail.js
const app = getApp()

Page({
  data: {
    currentTab: 0,
    companyName: "公司名称",
    eventName: "活动名称",
    condition: "目前状态"

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
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {

  }

})