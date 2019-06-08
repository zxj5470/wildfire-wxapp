// pages/groupMessage/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 界面引导文本
    teamNameHead: '组织名称',
    teamBelongHead: '归属机构',
    teamLeaderHead: '负责人',
    teamIntroHead: '简介',

    // 输入内容
    teamNameInput: '',
    teamLeaderInput: '',
    teamBelongInput: '',
    teamIntroInput: '',
  },


  // 数据同步函数
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

  // 信息更改函数 PUT请求 需要根据接口和数据传输格式进行调整（url和data）
  postData: function () {
    console.log(this.data.teamNameInput); // 测试用log 可删除
    /*
    wx.request({
      url: '',
      method: 'PUT',
      data:{


      },
      success: function (res) {
        if (res.statusCode == 200) {
          console.log(res.data);
        } else {
          console.log("groupChange.js wx.request statusCode" + res.statusCode);
        }
      },
      fail: function () {
        console.log("groupChange.js wx.request fail");
      }
    })*/
  },

  // 响应返回按钮，返回数据呈现界面
  cancelChange : function(){
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