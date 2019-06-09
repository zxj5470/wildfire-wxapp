// page4/page4.js
const util = require("../../utils/util")
const dateTimePicker = require('../../utils/dateTimePicker');
const app = getApp()
const HOST = app.globalData.HOST
const PORT = app.globalData.PORT

Page({
  data: {
    // 界面引导文本
    nameHead: '活动名称',
    deadlineHead: '起止日期',
    descriptionHead: '项目简介',
    scheduleHead: '具体流程',

    // 输入内容
    nameInput: '',
    descriptionInput: '',
    scheduleInput: '',

    dateTime: null,
    dateTimeArray: null,
    tempDateTime: null,

    dateTime1: null,
    dateTimeArray1: null,
    tempDateTime1: null,

    startTime: null,
    endTime: null

  },
  onLoad: function () {
    let obj = dateTimePicker.dateTimePicker(2017, 2028);
    let obj1 = dateTimePicker.dateTimePicker(2017, 2028);
    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj1.dateTimeArray,
      dateTime1: obj1.dateTime,
      startTime: this.toTimeString(obj.dateTime),
      endTime: this.toTimeString(obj1.dateTime)
    });
    if (app.globalData.currentInfo != null) {
      console.log(app.globalData.currentInfo);
      const info = app.globalData.currentInfo[0];
      this.setData({
        nameInput: info.title,
        startTime: info.startTime,
        endTime: info.endTime,
        descriptionInput: info.introduction,
        scheduleHead: info.timeFlow
      })
    }
  },

  toTimeString(arr) {
    arr[0] += 2017;
    // arr[1] += 1;
    arr[2] += 1;
    const date = new Date(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
    return util.formatTime(date);
  },
  changeDateTime(e) {
    this.setData({dateTime: e.detail.value});
    const t = this.data.dateTime;
    t[5] = 0
    this.setData({
      startTime: this.toTimeString(t)
    });
  },

  changeDateTime1(e) {
    this.setData({dateTime1: e.detail.value});
    const t = this.data.dateTime1;
    t[5] = 0
    this.setData({
      endTime: this.toTimeString(t)
    });
  },
  changeDateTimeColumn(e) {
    let arr = this.data.dateTime, dateArr = this.data.dateTimeArray;
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);
    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },
  changeDateTimeColumn1(e) {
    let arr = this.data.dateTime1, dateArr = this.data.dateTimeArray1;
    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray1: dateArr,
      dateTime1: arr
    });
  },

  postData: function () {
    const p = {
      orgId: 1,
      title: this.data.nameInput,
      startTime: this.data.startTime,
      endTime: this.data.endTime,
      introduction: this.data.descriptionInput,
      timeFlow: this.data.scheduleHead
    }
    console.log(p);
    wx.request({
      url: `http://${HOST}:${PORT}/api/list/post`,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: p,
      success: function (res) {
        if (res.statusCode == 200) {// 这个是微信自己搞的状态码
          console.log(res.data);
          const data = res.data;// 这个的 data 才是整个请求返回的内容项
          const status = data.status;//此时 data.results 为一个jsonObject
          if (status == 0) {
            wx.navigateBack({})
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
  }
})