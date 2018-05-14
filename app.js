//app.js
App({
  onLaunch: function () {
  },
  onShow: function () {
    console.log(getCurrentPages())
  },
  onHide: function () {
    console.log(getCurrentPages())
  },
  onError: function (msg) {
 
  },
  util: require('we7/resource/js/util.js'),
  siteInfo: require('siteinfo.js'),
  tabBar: {
    "color": "#123",
    "selectedColor": "#1ba9ba",
    "borderStyle": "#1ba9ba",
    "backgroundColor": "#fff",
    "list": [
      {
        "pagePath": "/we7/pages/index/index",
        "iconPath": "/we7/resource/icon/home.png",
        "selectedIconPath": "/we7/resource/icon/homeselect.png",
        "text": "首页"
      },
      {
        "pagePath": "/we7/pages/user/index/index",
        "iconPath": "/we7/resource/icon/user.png",
        "selectedIconPath": "/we7/resource/icon/userselect.png",
        "text": "微擎我的"
      }
    ]
  },
  globalData: {
    userInfo: null,
  },
});