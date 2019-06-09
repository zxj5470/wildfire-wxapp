//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 界面引导文本
    teamNameHead: '组织名称',
    teamBelongHead: '归属机构',
    teamLeaderHead: '负责人',
    teamIntroHead: '简介',

    // 具体内容
    teamNameInput: '',
    teamLeaderInput: '',
    teamBelongInput: '',
    teamIntroInput: '',
  },

  // 响应按钮事件，跳转到信息更改界面
  changeData: function () {
    wx.navigateTo({
      url: '../groupChange/groupChange'
    })
  },

  //跳转到个人信息界面，测试用，整合后请删除
  toPerson: function () {
    wx.navigateTo({
      url: '../personPage/personPage'
    })
  },

  // Show时进行页面加载，GET获取服务器端信息，显示在界面上，需要根据接口和数据传输格式调整（url和data）
  onShow: function () {
    const str = JSON.stringify(app.globalData.companyInfo);
    app.globalData.companyInfo = JSON.parse(str);
    const companyInfo = JSON.parse(str);
    if (companyInfo != null) {
      this.setData({
        teamNameInput: companyInfo.teamName,
        teamLeaderInput: companyInfo.teamLeader,
        teamBelongInput: companyInfo.teamBelong,
        teamIntroInput: companyInfo.teamIntro,
      })
    }
    /*
    wx.request({
      url: '',
      method: 'GET',
      success: function(res){
        if(res.statusCode == 200){
          console.log(res.data);
          const data = res.data;
          const result = data.results;
          this.setData({
          teamNameInput: data.results.teamName,
          teamLeaderInput: data.results.teamLeader,
          teamBelongInput: data.results.teamBelong,
          teamIntroInput: data.results.teamIntro,
          })
          console.log(result);
        }else{
          console.log("index.js wx.request statusCode" + res.statusCode);
        }
      },
      fail: function(){
        console.log("index.js wx.request CheckCallUser fail");
      }
    })
    */
  },
})
