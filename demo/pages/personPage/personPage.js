// pages/singlePage/singlePage.js
Page({

  /**
   * 页面的初始数据，可以从微信获取
   */
  data: {
    // 界面引导文本
    personNameHead: '姓名',
    personSexHead: '性别',
    personClassHead: '院系班级',
    personIntroHead: '简介',

    // 具体内容
    personNameInput: '',
    personSexInput: '',
    personClassInput: '',
    personIntroInput: '',
  },


  // 跳转回组织信息界面，测试用，整合后请删除
  backToGroup: function(){
    wx.navigateBack({
    })
  },

  // 跳转到信息更改界面
  changeData: function(){
    wx.navigateTo({
      url: '../personChange/personChange',
    })
  },


  /**
   * 生命周期函数--监听页面加载，GET服务器端信息呈现到界面上，需要根据接口和数据传输格式更改。（url和data）
   */
  onLoad: function (options) {
    /*wx.request({
      url: '',
      method: 'GET',
      success: function(res){
        if(res.statusCode == 200){
          console.log(res.data);
          const data = res.data;
          const result = data.results;
          this.setData({
          personNameInput: data.results.personName;
          personSexInput: data.results.personSex;
          personClassInput: data.results.personClass;
          personIntroInput: data.results.personIntro;
          })
          console.log(result);
        }else{
          console.log("index.js wx.request statusCode" + res.statusCode);
        }
      },
      fail: function(){
        console.log("index.js wx.request CheckCallUser fail");
      }
    })*/
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