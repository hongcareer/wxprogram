// pages/detail/detail.js
const data = require('../../datas/list-data.js');
let detailData = data.list_data
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:'',
    isCollected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    let index = options.index
    this.setData({
      detailData: detailData[options.index],
      index: options.index
    })
    //读取缓存
    let oldStorage = wx.getStorageSync('isCollected'); 
    if (oldStorage[index]){
      console.log(oldStorage[index])
      this.setData({
        isCollected:true
      })
    }
  },

  changeCollectState(){
    let isCollected = this.data.isCollected;
    let index = this.data.index;
    console.log(1111)
    this.setData({
      isCollected: !isCollected
    });
    let obj = wx.getStorageSync('isCollected');
    //存储状态到内存中
    if(!obj){
      obj = {}
    }
    obj[index] = !isCollected;
    wx.setStorage({
      key: 'isCollected',
      data: obj
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