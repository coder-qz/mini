const app = getApp();
Page({
  data:{
      imgUrls:[],
      recList:[],
      newList:[],
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onPullDownRefresh(){
    this.initData();
  },
  onReady() {
    this.initData();
  },
  initData(){
    var that = this
    my.httpRequest({
      url: app.serverUrl+'/index/carousels', // 目标服务器url
      method: 'POST',
      header:{ 
          'content-type': 'application/json' 
      },
      dataType: 'json',
      success: (res) => {
        var response = res.data;
        if(response.status==200){
           var carousels = response.data;
           that.setData({
             imgUrls:carousels,

           })
        }
        console.log(res);
      },
    });
     my.httpRequest({
      url: app.serverUrl+'/index/items/rec', // 目标服务器url
      method: 'POST',
      header:{ 
          'content-type': 'application/json' 
      },
      dataType: 'json',
      success: (res) => {
        var response = res.data;
        if(response.status==200){
           var recList = response.data;
           that.setData({
             recList:recList,

           })
        }
        console.log(res);
      },
    });
    my.httpRequest({
      url: app.serverUrl+'/index/items/new', // 目标服务器url
      method: 'POST',
      header:{ 
          'content-type': 'application/json' 
      },
      dataType: 'json',
      success: (res) => {
        var response = res.data;
        if(response.status==200){
           var recList = response.data;
           that.setData({
             newList:recList,
           })
        }
        console.log(res);
      },
    });
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
