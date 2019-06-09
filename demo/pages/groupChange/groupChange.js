// pages/groupMessage/group.js
const app = getApp()
const HOST = app.globalData.HOST
const PORT = app.globalData.PORT
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
    const companyInfo = app.globalData.companyInfo;
    const info = {
      id: companyInfo.id,
      account: companyInfo.account,
      teamName: this.data.teamNameInput,
      teamBelong: this.data.teamBelongInput,
      teamLeader: this.data.teamLeaderInput,
      teamIntro: this.data.teamIntroInput
    }

    wx.request({
      url: `http://${HOST}:${PORT}/api/company/put`,
      method: 'PUT',
      data: info,
      success: function (res) {
        if (res.statusCode == 200) {
          console.log(res.data);
          const data = res.data;
          if (data.status == 0) {
            if (data.results == true) {
              app.globalData.companyInfo = info;
              wx.navigateBack({})
            } else {
              wx.showToast({title: '超出长度，修改失败', icon: 'none'})
            }
          }
        } else {
          console.log("groupChange.js wx.request statusCode" + res.statusCode);
        }
      },
      fail: function () {
        console.log("groupChange.js wx.request fail");
      }
    })
  },

  // 响应返回按钮，返回数据呈现界面
  cancelChange: function () {
    wx.navigateBack({})
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
    const str = JSON.stringify(app.globalData.companyInfo);
    app.globalData.companyInfo = JSON.parse(str);
    // const str = JSON.stringify({account: "unique", teamName: "联创", teamBelong: "华科", teamLeader: "组织者", teamIntro: "简介"});
    const companyInfo = JSON.parse(str);
    console.log(companyInfo);
    // const companyInfo = JSON.parse(str);
    if (companyInfo != null) {
      this.setData({
        teamNameInput: companyInfo.teamName,
        teamLeaderInput: companyInfo.teamLeader,
        teamBelongInput: companyInfo.teamBelong,
        teamIntroInput: companyInfo.teamIntro,
      })
    }
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