// pages/singleChange/singleChange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 界面引导文本
    personNameHead: '组织名称',
    personSexHead: '性别',
    personClassHead: '院系年级',
    personIntroHead: '简介',

    // 输入内容
    personNameInput: null,
    personClassInput: null,
    personSexInput: null,
    personIntroInput: null,
  },

  personNameInput: function (e) {
    this.data.personNameInput = e.detail.value;
  },
  personLeaderInput: function (e) {
    this.data.personSexInput = e.detail.value;
  },
  personBelongInput: function (e) {
    this.data.personClassInput = e.detail.value;
  },
  personIntroInput: function (e) {
    this.data.personIntroInput = e.detail.value;
  },


  // 跳转回个人信息界面
  cancelChange: function(){
    wx.navigateBack({
      
    })
  },

  // 相应信息更改按钮，把信息PUT给服务器端进行信息更改，需要根据接口和数据传输格式调整（url和data）
  postData: function () {
    wx.request({
      url: '',
      method: 'PUT',
      data: {
      },
      success: function (res) {
        if (res.statusCode == 200) {
          console.log(res.data);
        } else {
          console.log("personChange.js wx.request statusCode" + res.statusCode);
        }
      },
      fail: function () {
        console.log("personChange.js wx.request fail");
      }
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