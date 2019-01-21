var app = getApp();
Page({
  data: {
    newList:[],
  },
  onLoad(par) {
    var cid  = par.cid;
    console.log(name);

     var that = this
    my.httpRequest({
      url: app.serverUrl+'/items/searchByCat', // 目标服务器url
      method: 'POST',
      header:{ 
          'content-type': 'application/json' 
      },
      data:{catId:cid},
      dataType: 'json',
      success: (res) => {
        var response = res.data;
        if(response.status==200){
           var response = response.data;
           that.setData({
             newList:response,

           })
        }
        console.log(res);
      },
    });
  },
});
