// pages/companyindex/Cindex.js
const app = getApp()
const HOST = app.globalData.HOST
const PORT = app.globalData.PORT

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },
  published: function () {
    wx.navigateTo({
      url: '/pages/eventdetail/eventdetail'
    })
  },
  add: function () {
    wx.navigateTo({
      url: '/pages/changeProject/changeProject'
    })
  },
  my: function () {
    wx.navigateTo({
      url: '/pages/groupPage/groupPage'
    })
  },

  tap: function (e) {
    const id = e.currentTarget.dataset.id;
    const r = this.data.list.filter(it => it.id == id);
    app.globalData.currentInfo = r;
    wx.navigateTo({
      url: '../changeProject/changeProject'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = app.globalData.companyInfo.id;
    const self = this
    wx.request({
      url: `http://${HOST}:${PORT}/api/list/get`,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {// 这个是微信自己搞的状态码
          console.log(res.data);
          const data = res.data;// 这个的 data 才是整个请求返回的内容项
          if (data.status == 0) {
            const result = data.results;//此时 data.results 为一个jsonObject
            const ret = result.filter(it => it.orgId == id)
            self.setData({list: ret})
          }
          //console.log(results[0].startTime);
        } else {
          console.log("index.js wx.request statusCode" + res.statusCode);
        }
      },
      fail: function () {
        console.log("index.js wx.request CheckCallUser fail");
      }
    })
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