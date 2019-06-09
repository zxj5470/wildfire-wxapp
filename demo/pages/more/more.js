// pages/more/more.js




var idinfolist = [
  { "code": "结果", "text": '' },
  { "code": "省", "text": '' },
  { "code": "市", "text": '' },
  { "code": "县", "text": '' },
  { "code": "性别", "text": '' },
  { "code": "出生年月", "text": '' },
  { "code": "地址", "text": '' }

]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyName: "compancompanyNamecompanyNamecompanyNamecompanyNameyName",
    directorName: "Director",
    position: "Position",
    intro: "Introduction"
  },

 /**
  * 详细公司信息
  */
  moreinfo: function () {
    wx.navigateTo({
      url: '/pages/userMoreInfo/MoreInfo',
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