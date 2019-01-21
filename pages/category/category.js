const app = getApp();
Page({
  data: {
    cats:[]
  },
  onLoad() {
    var that = this
    my.httpRequest({
      url: app.serverUrl+'/cats', // 目标服务器url
      method: 'POST',
      header:{ 
          'content-type': 'application/json' 
      },
      dataType: 'json',
      success: (res) => {
        var response = res.data;
        if(response.status==200){
           var response = response.data;
           that.setData({
             cats:response,

           })
        }
        console.log(res);
      },
    });
  }
});
