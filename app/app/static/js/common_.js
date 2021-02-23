// module.exports
// import Vue from 'vue'
import MintUI from 'mint-ui'
// Vue.use(MintUI)
var commonFn ={
    // 关闭加载弹框--用于请求数据的关闭
    closeLoading: function(handles){
        if(handles){
          if(handles.closeLoading){
            if(handles.closeLoadTime){
              setTimeout(function(){
                MintUI.Indicator.close();
              },handles.closeLoadTime)
            }else{
                MintUI.Indicator.close();
            }
          }
        }else{
          setTimeout(function(){
            MintUI.Indicator.close();
          },600)
        }
    },
    // 显示加载弹框
    showLoading: function(text,iconType){
        MintUI.Indicator.open({
          text: text?text:'加载中...',
          spinnerType: iconType?iconType:'fading-circle'
        });
    },
    // 隐藏加载弹框
    hideLoading: function(times){
        if(times){
        setTimeout(function(){
            MintUI.Indicator.close();
        },times)
        }else{
            MintUI.Indicator.close();
        }
    },
    // 显示消息弹框
    showMsg: function({text:text,weizhi:weizhi,times:times}){
        if(this.isApp){
            api.toast({
                msg: text,
                duration: times?times:2000,
                location: weizhi?weizhi:'middle'
            });
        }else{
            MintUI.Toast({
                message: text,
                position: weizhi?weizhi:'middle',
                duration: times?times:2000
            })
        }
    },
    // 判断是否有网络
    checkLine: function(){
        // unknown          未知
        // ethernet         以太网
        // wifi             wifi
        // 2g               2G网络
        // 3g               3G网络
        // 4g               4G网络
        // none             无网络
        return this.isApp?api.connectionType:'';
    },
    // 保存图片到相册
    saveImgsToAlbum: function(saveParam){
        // type--base64,src
        // curData--保存的src路径或者base64值
        // hasbs64--是否要过滤base64前缀--默认false
        var _this = this;
        if(this.isApp){
        var trans = api.require('trans');
        _this.saveTime = setTimeout(function(){
            api.confirm({
            title: '提示',
            msg: '是否保存图片？',
            buttons: ['确定', '取消']
            }, function(ret, err) {
            // var index = ret.buttonIndex;
            var imenames = (new Date()).getTime()+'.png';
            if(ret.buttonIndex==1){
                if(saveParam.type=='base64'){
                trans.saveImage({
                    album:true,
                    base64Str: saveParam.hasbs64?saveParam.curData.replace("data:image/png;base64,", ""):saveParam.curData,
                    imgPath:"fs://image",
                    imgName:imenames
                }, function(ret, err) {
                    if (ret.status) {
                    api.saveMediaToAlbum({
                        path:api.fsDir+'/image/'+imenames
                        }, function(ret, err) {
                        if (ret && ret.status) {
                            commonFn.showMsg({text:'保存成功!'})
                        } else {
                            alert(JSON.stringify(ret)||JSON.stringify(err));
                        }
                    });
                        // alert(JSON.stringify(ret));
                    } else {
                    alert(JSON.stringify(err));
                    }
                });
                }else if(saveParam.type=='src'){
                api.download({
                    url: url,
                    savePath: 'fs://image'+saveParam.curData,
                    report: true,
                    cache: true,
                    allowResume: true
                }, function(ret, err) {
                    if (ret.state == 1) {
                        //下载成功
                        api.saveMediaToAlbum({
                            path: 'fs://image'+saveParam.curData
                        }, function(ret, err) {
                            if (ret && ret.status) {
                                commonFn.showMsg({text:'保存成功!'})
                            } else {
                                alert(JSON.stringify(err));
                            }
                        });
                    } else {
                        alert(JSON.stringify(err));
                    }
                });
                }
            }
            });
            
        },600)
        }else{
            commonFn.showMsg({text:'无法保存图片！'});
        }
    },
    // 获取根目录路径
    rootDirectory: function(){
        var rootDirectory = api.fsDir;
        rootDirectory = rootDirectory.split('UZMap');
        return rootDirectory[0];
    }
}
export default commonFn;
// module.export = commonFn;

