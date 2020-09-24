// module.exports
// import Vue from 'vue'
import MintUI from 'mint-ui'
// Vue.use(MintUI)
// var curWin = window.app;
// console.log(window.app.isApp);
var commonFn ={
    checkIsApps: window.app,
    checkIsApp: function(){
        return window.app;
        // commonFn.curThis().isApp     --true
        // this.curThis().isApp         --true
        // console.log(curWin.isApp);
    },
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
        if(window.app.isApp){
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
        return window.app.isApp?api.connectionType:'';
    },
    // 保存图片到相册
    saveImgsToAlbum: function(saveParam){
        // type--base64,src
        // curData--保存的src路径或者base64值
        // hasbs64--是否要过滤base64前缀--默认false
        // istip--是否需要弹框提示保存--默认undefined不传，取消延迟保存则传false
        // var _this = this;
        if(window.app.isApp){
            var trans = api.require('trans');
            return new Promise(function (resolve, reject){
                var imenames = (new Date()).getTime()+'.png';
                if(saveParam.istip==undefined){
                    window.app.saveTime = setTimeout(function(){
                        api.confirm({
                        title: '提示',
                        msg: '是否保存图片？',
                        buttons: ['确定', '取消']
                        }, function(ret, err) {
                        // var index = ret.buttonIndex;
                        if(ret.buttonIndex==1){
                            if(saveParam.type=='base64'){
                                saveBase64();
                            }else if(saveParam.type=='src'){
                                saveSrc()
                            }
                        }
                        });
                    },600)
                }else{
                    if(saveParam.type=='base64'){
                        saveBase64();
                    }else if(saveParam.type=='src'){
                        saveSrc();
                    }
                }
                function saveBase64(){
                    trans.saveImage({
                        album:true,
                        base64Str: saveParam.hasbs64?saveParam.curData.replace("data:image/png;base64,", ""):saveParam.curData,
                        imgPath:"fs://image",
                        imgName:imenames
                    }, function(ret, err) {
                        if (ret.status) {
                            // api.saveMediaToAlbum({
                            //     path:api.fsDir+'/image/'+imenames
                            //     }, function(ret, err) {
                            //     if (ret && ret.status) {
                            //         commonFn.showMsg({text:'保存成功!'});
                            //         resolve(ret);
                            //     } else {
                            //         alert(JSON.stringify(ret)||JSON.stringify(err));
                            //         resolve(ret);
                            //     }
                            // });
                            saveMediaToAlbum(imenames);
                            // alert(JSON.stringify(ret));
                        } else {
                            alert(JSON.stringify(err));
                        }
                    });
                }
                function saveSrc(){
                    api.download({
                        url: url,
                        savePath: 'fs://image/'+saveParam.curData,
                        report: true,
                        cache: true,
                        allowResume: true
                    }, function(ret, err) {
                        if (ret.state == 1) {
                            //下载成功
                            // api.saveMediaToAlbum({
                            //     path: 'fs://image'+saveParam.curData
                            // }, function(ret, err) {
                            //     if (ret && ret.status) {
                            //         commonFn.showMsg({text:'保存成功!'})
                            //     } else {
                            //         alert(JSON.stringify(err));
                            //     }
                            // });
                            saveMediaToAlbum(saveParam.curData)
                        } else {
                            alert(JSON.stringify(err));
                        }
                    });
                }
                function saveMediaToAlbum(imenames){
                    api.saveMediaToAlbum({
                        path:api.fsDir+'/image/'+imenames
                        }, function(ret, err) {
                        if (ret && ret.status) {
                            commonFn.showMsg({text:'保存成功!'});
                            resolve(ret);
                        } else {
                            alert(JSON.stringify(ret)||JSON.stringify(err));
                            resolve(ret);
                        }
                    });
                }
            })
        }else{
            commonFn.showMsg({text:'无法保存图片！'});
        }
    },
    // 获取根目录路径
    rootDirectory: function(){
        if(!window.app.isApp){
            return false;
        }
        var rootDirectory = api.fsDir;
        rootDirectory = rootDirectory.split('UZMap');
        return rootDirectory[0];
    },
    // 处理文件路径
    filePaths:function(pathData){
        /**
         * cancelPath-true  取消默认路径-用于对象已有完整路径
         * isRootFs         是否使用当前fs目录-false，手机根目录-true
         * filePath         文件路径
         */
        return pathData.cancelPath?pathData.filePath:(pathData.isRootFs?commonFn.rootDirectory()+pathData.filePath:'fs://'+pathData.filePath);
    },
    // 同步或或者异步
    syncType(syncData){
        /**
         * types        sync-同步，assync-异步
         * 
         */
        if(syncData.types=='sync'){

        }else{

        }
    },
    // 打开文件
    openFiles:function(opData){
        /**
         * isRootFs     是否使用当前fs目录-false，手机根目录-true
         * filePath     文件路径
         * fileFlags    文件操作类型-read|write|read_write
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         * closeFile    是否关闭打开的文件--默认false不关闭，true-关闭
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            // var paths = opData.cancelPath?opData.filePath:(opData.isRootFs?commonFn.rootDirectory()+opData.filePath:'fs://'+opData.filePath);
            var pathUrl = commonFn.filePaths({cancelPath:opData.cancelPath,isRootFs:opData.isRootFs,filePath:opData.filePath});
            // console.log(pathUrl);
            var openData = {
                path: pathUrl,
                flags: opData.fileFlags?opData.fileFlags:'read_write'
            };
            if(opData.syncType=='sync'){
                var ret = fs.openSync(openData);
                if (ret.status) {
                    if(opData.closeFile){
                        commonFn.closeFiles({fd:ret.fd})
                    }
                    resolve(ret);
                } else {
                    resolve(ret);
                }
            }else{
                fs.open(openData, function(ret, err) {
                    if (ret) {
                        if(opData.closeFile){
                            commonFn.closeFiles({fd:ret.fd})
                        }
                        resolve(ret);
                    } else {
                        reject(err);
                    }
                });
            }
        })
        
    },
    // 关闭文件
    closeFiles: function(closeData){
        /**
         * syncType      async异步-默认，sync同步
         * fd       open 方法得到的文件句柄--不需要打开openFile才写
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            if(closeData.syncType=='sync'){
                var ret = fs.closeSync({
                    fd: closeData.fd
                });
                if (ret) {
                    resolve(ret);
                }
            }else{
                fs.close({
                    fd: closeData.fd
                }, function(ret, err) {
                    if (ret) {
                        resolve(ret);
                    } else {
                        reject(err);
                    }
                });
            }
        })
        

    },
    // 创建文件夹
    createDir:function(createData){
        /**
         * isRootFs
         * filePath 文件路径
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        createData.filePath = createData.filePath?createData.filePath:'';
        return new Promise(function (resolve, reject){
            var pathUrl = commonFn.filePaths({cancelPath:createData.cancelPath,isRootFs:createData.isRootFs,filePath:createData.filePath});
            if(createData.syncType=='sync'){
                var ret = fs.createDirSync({
                    path: pathUrl
                });
                if (ret) {
                    resolve(ret);
                }
            }else{
                fs.createDir({
                    path: pathUrl
                }, function(ret, err) {
                    if (ret) {
                        resolve(ret);
                    } else {
                        reject(err);
                    }
                });
            }  
        })
    },
    // 删除文件夹
    delDir:function(delData){
        /**
         * isRootFs
         * filePath 文件路径
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        // delData.filePath = delData.filePath?delData.filePath:'';
        var pathUrl = commonFn.filePaths({cancelPath:delData.cancelPath,isRootFs:delData.isRootFs,filePath:delData.filePath});
        return new Promise(function (resolve, reject){
            if(delData.syncType=='sync'){
                var ret = fs.rmdirSync({
                    path: pathUrl
                });
                if (ret) {
                    // alert('删除成功！');
                    resolve(ret);
                }
            }else{
                fs.rmdir({
                    path: pathUrl
                }, function(ret, err) {
                    if (ret) {
                        // alert(JSON.stringify(ret));
                        resolve(ret);
                    } else {
                        // alert(JSON.stringify(err));
                        reject(err);
                    }
                });
            }
        })
    },
    // 创建文件
    createFile:function(createFData){
        /**
         * isRootFs
         * filePath 文件路径
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            var pathUrl = commonFn.filePaths({cancelPath:createFData.cancelPath,isRootFs:createFData.isRootFs,filePath:createFData.filePath});
            if(createFData.syncType=='sync'){
                var ret = fs.createFileSync({
                    path: pathUrl
                });
                if (ret) {
                    resolve(ret);
                }
            }else{
                fs.createFile({
                    path: pathUrl
                }, function(ret, err) {
                    if (ret) {
                        // alert(JSON.stringify(ret));
                        resolve(ret);
                    } else {
                        // alert(JSON.stringify(err));
                        reject(err);
                    }
                });
            }
        })
    },
    // 删除文件
    removeFile:function(removeData){
        /**
         * isRootFs
         * filePath 文件路径
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            var pathUrl = commonFn.filePaths({cancelPath:removeData.cancelPath,isRootFs:removeData.isRootFs,filePath:removeData.filePath});
            if(removeData.syncType=='sync'){
                var ret = fs.removeSync({
                    path: pathUrl
                });
                if (ret) {
                    resolve(ret);
                }
            }else{
                fs.remove({
                    path: pathUrl
                }, function(ret, err) {
                    if (ret) {
                        // alert(JSON.stringify(ret));
                        resolve(ret);
                    } else {
                        // alert(JSON.stringify(err));
                        reject(err);
                    }
                });
            }
        })
    },
    // 读取文件
    readFiles:function(rdData){
        /**
         * isRootFs
         * filePath
         * fileFlags
         * fd     open 方法得到的文件句柄
         * offset 写入内容的起始位置-默认值：原文件文本内容的长度 以 byte 为单位
         * length 读取内容长度-默认值：原文件文本内容的长度 以 byte 为单位
         * codingType 所要阅读的文本的编码格式，取值范围: gbk、utf8。 默认值：utf8
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         * closeFile    是否关闭打开的文件--默认false不关闭，true-关闭
         * noOpen  是否需要默认打开文件openFiles--默认false-默认打开，true-不打开
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            if(rdData.noOpen){
                var readData = {
                    fd: rdData.fd,
                    offset: rdData.offset?rdData.offset:0,
                    length: rdData.length?rdData.length:'',
                    codingType:rdData.codingType?rdData.codingType:'utf8'
                };
                if(rdData.syncType=='sync'){
                    var ret = fs.readSync(readData);
                    if (ret) {
                        commonFn.closeFiles({fd:rdData.fd});
                        resolve(ret);
                    }
                }else{
                    fs.read(readData, function(ret, err) {
                        if (ret.status) {
                            commonFn.closeFiles({fd:rdData.fd});
                            resolve(ret);
                        } else {
                            reject(err);
                        }
                    });
                }
            }else {
                commonFn.openFiles({cancelPath:rdData.cancelPath,syncType:rdData.syncType,isRootFs:rdData.isRootFs,filePath:rdData.filePath,fileFlags:rdData.fileFlags,closeFile:rdData.closeFile}).then((res)=>{
                    if (res.status) {
                        // alert(JSON.stringify(res));
                        var readData = {
                            fd: res.fd,
                            offset: rdData.offset?rdData.offset:0,
                            length: rdData.length?rdData.length:'',
                            codingType:rdData.codingType?rdData.codingType:'utf8'
                        };
                        if(rdData.syncType=='sync'){
                            var ret = fs.readSync(readData);
                            if (ret) {
                                commonFn.closeFiles({fd:res.fd});
                                resolve(ret);
                            }
                        }else{
                            fs.read(readData, function(ret, err) {
                                if (ret.status) {
                                    commonFn.closeFiles({fd:res.fd});
                                    resolve(ret);
                                } else {
                                    reject(err);
                                }
                            });
                        }
                    } else {
                        alert(JSON.stringify(res));
                        resolve(res);
                    }
                })
            }
        })
        
    },
    // 写入文件
    writeFiles:function(wtData){
        /**
         * isRootFs
         * filePath
         * fileFlags
         * fd     open 方法得到的文件句柄
         * data   写入的数据
         * offset 写入内容的起始位置-默认值：原文件文本内容的长度 以 byte 为单位
         * overwrite 是否覆盖指定偏移位置后面的内容 默认值：false
         * codingType 所要阅读的文本的编码格式，取值范围: gbk、utf8。 默认值：utf8
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         * noOpen  是否需要默认打开文件openFiles--默认false-默认打开，true-不打开
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            if(wtData.noOpen){
                var writeData ={
                    fd: wtData.fd,
                    offset: wtData.offset?'':0,
                    data: wtData.data,
                    overwrite:wtData.overwrite?true:false,
                    codingType:wtData.codingType?wtData.codingType:'utf8'
                };
                if(wtData.syncType=='sync'){
                    var ret = fs.writeSync(writeData);
                    if (ret.status) {
                        commonFn.closeFiles({fd:wtData.fd});
                        resolve(ret);
                    }
                }else{
                    fs.write(writeData, function(ret, err) {
                        if (ret.status) {
                            // console.log(JSON.stringify(ret));
                            commonFn.closeFiles({fd:wtData.fd});
                            resolve(ret);
                        } else {
                            // console.log(JSON.stringify(err));
                            reject(err);
                        }
                    });
                }
            }else{
                commonFn.openFiles({cancelPath:wtData.cancelPath,syncType:wtData.syncType,isRootFs:wtData.isRootFs,filePath:wtData.filePath,fileFlags:wtData.fileFlags}).then((res)=>{
                    // console.log(JSON.stringify(res));
                    if (res.status) {
                        var writeData ={
                            fd: res.fd,
                            offset: wtData.offset?'':0,
                            data: wtData.data,
                            overwrite:wtData.overwrite?true:false,
                            codingType:wtData.codingType?wtData.codingType:'utf8'
                        };
                        if(wtData.syncType=='sync'){
                            var ret = fs.writeSync(writeData);
                            if (ret.status) {
                                commonFn.closeFiles({fd:res.fd});
                                resolve(ret);
                            }
                        }else{
                            fs.write(writeData, function(ret, err) {
                                if (ret.status) {
                                    // console.log(JSON.stringify(ret));
                                    commonFn.closeFiles({fd:res.fd});
                                    resolve(ret);
                                } else {
                                    // console.log(JSON.stringify(err));
                                    reject(err);
                                }
                            });
                        }
                    } else {
                        alert(JSON.stringify(res));
                        resolve(res);
                    }
                })
            }
        })
        
    },
    // 判断文件是否存在
    exist(exData){
        /**
         * isRootFs 是否使用当前fs目录-false，手机根目录-true
         * filePath     文件路径
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            var pathUrl = commonFn.filePaths({cancelPath:exData.cancelPath,isRootFs:exData.isRootFs,filePath:exData.filePath});
            if(exData.syncType=='sync'){
                var ret = fs.existSync({
                    path: pathUrl
                });
                resolve(ret);
            }else{
                fs.exist({
                    path: pathUrl
                }, function(ret, err) {
                    if (ret.exist) {
                        resolve(ret);
                    } else {
                        reject(err);
                    }
                });
            }
        })  
        
    },
    // 获取指定路径下文件的属性
    getAttrFile:function(attrData){
        /**
         * isRootFs 是否使用当前fs目录-false，手机根目录-true
         * filePath     文件路径
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            var pathUrl = commonFn.filePaths({cancelPath:attrData.cancelPath,isRootFs:attrData.isRootFs,filePath:attrData.filePath});
            if(attrData.syncType=='sync'){
                var ret = fs.getAttributeSync({
                    path: pathUrl
                });
                if (ret) {
                    resolve(ret);
                }
            }else{
                fs.getAttribute({
                    path: pathUrl
                }, function(ret, err) {
                    if (ret) {
                        resolve(ret);
                    } else {
                        reject(err)
                    }
                });
            }
        })
      
    },
    // 获取指定的内容--只支持纯文本文件
    getZDCont: function(zdcData){
        /**
         * isRootFs 是否使用当前fs目录-false，手机根目录-true
         * filePath 文件路径
         * startNum 要提取的子串的第一个字符在文件中的位置；默认：0
         * getLength  所要读取的文本字符串长度；默认：原文件文本内容的总长
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            var pathUrl = commonFn.filePaths({cancelPath:zdcData.cancelPath,isRootFs:zdcData.isRootFs,filePath:zdcData.filePath});
            var substringData = {
                path: pathUrl,
                substring: {
                    start: zdcData.startNum?zdcData.startNum:0,
                    length: zdcData.getLength?zdcData.getLength:''
                }
            };
            if(zdcData.syncType=='sync'){
                var ret = fs.readByLengthSync(substringData);
                if (ret) {
                    resolve(ret);
                }
            }else{
                fs.readByLength(substringData, function(ret, err) {
                    if (ret) {
                        resolve(ret);
                    } else {
                        reject(err);
                    }
                });
            }
        })
        
    },
    // 写入指定的内容--只支持纯文本文件
    writeZDCont:function(wzdcData){
        /**
         * isRootFs 是否使用当前fs目录-false，手机根目录-true
         * filePath 文件路径
         * content  写入的数据
         * startNum 写入文件起始位置；默认：0
         * strategy -1 (覆盖起始位置后所有),0 (不覆盖，插入),大于零的整数 (起始位置向后覆盖指定字符的长度),默认：-1；
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            var pathUrl = commonFn.filePaths({cancelPath:wzdcData.cancelPath,isRootFs:wzdcData.isRootFs,filePath:wzdcData.filePath});
            var writeData = {
                path:  pathUrl,
                content: wzdcData.content,
                place: {
                    start: wzdcData.startNum?wzdcData.startNum:0,
                    strategy: wzdcData.strategy?wzdcData.strategy:-1
                }
            }
            if(wzdcData.syncType=='sync'){
                var ret = fs.writeByLengthSync(writeData);
                if (ret) {
                    resolve(ret);
                }
            }else {
                fs.writeByLength(writeData, function(ret, err) {
                    if (ret) {
                        resolve(ret);
                    } else {
                        reject(err);
                    }
                });
            }
        })
    },
    // 获取文件MD5路径
    getMD5path:function(pathData){
        /**
         * isRootFs     是否使用当前fs目录-false，手机根目录-true
         * filePath     文件路径
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            var pathUrl = commonFn.filePaths({cancelPath:pathData.cancelPath,isRootFs:pathData.isRootFs,filePath:pathData.filePath});
            fs.getMD5({
                path: pathUrl
            }, function(ret,err) {
                if (ret) {
                    // alert(ret.md5Str);
                    resolve(ret);
                }else{
                    reject(err);
                }
            });
        })
        
    },
    // 重命名文件
    renameFile:function(renameData){
        /**
         * isRootFs     是否使用当前fs目录-false，手机根目录-true
         * oldPath      文件源路径--当前文件名
         * newPath      文件目标路径--当前文件要重命名的文件名
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            // var pathUrl = commonFn.filePaths({cancelPath:renameData.cancelPath,isRootFs:renameData.isRootFs,filePath:renameData.filePath});
            fs.rename({
                oldPath: commonFn.filePaths({cancelPath:renameData.cancelPath,isRootFs:renameData.isRootFs,filePath:renameData.oldPath}),
                newPath: commonFn.filePaths({cancelPath:renameData.cancelPath,isRootFs:renameData.isRootFs,filePath:renameData.newPath})
            }, function(ret, err) {
                if (ret) {
                    // alert(JSON.stringify(ret));
                    resolve(ret);
                } else {
                    // alert(JSON.stringify(err));
                    reject(err);
                }
            });
        })
    },
    // 读取文件-列出所有目录
    readDir:function(readDData){
        /**
         * isRootFs     是否使用当前fs目录-false，手机根目录-true
         * filePath     文件路径
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        // console.log(window);
        
        // console.log('isApp',commonFn.checkIsApp().ismine);
        // console.log('checkIsApps',commonFn.checkIsApps.isApp);
        // checkIsApps
        
        if(window.app.isApp){
            var fs = api.require('fs');
            return new Promise(function (resolve, reject){
                var pathUrl = commonFn.filePaths({cancelPath:readDData.cancelPath,isRootFs:readDData.isRootFs,filePath:readDData.filePath});
                if(readDData.syncType=='sync'){
                    var ret = fs.readDirSync({
                        path: pathUrl
                    });
                    if (ret) {
                        resolve(ret);
                    }
                }else{
                    fs.readDir({
                        path: pathUrl
                    }, function(ret, err) {
                        if (ret) {
                            resolve(ret);
                        } else {
                            reject(err);
                        }
                    });
                }
            })
        }
    },
    // 下载文件
    downloadFile(downData){
        /**
         * downUrl      要下载的链接
         * savePath     要保存的路径名称
         * report       下载过程是否上报,默认false
         * cache        是否使用本地缓存,默认false
         * allowResume  是否允许断点续传,默认false
         */
        if(!window.app.isApp){
            return false;
        }
        return new Promise(function (resolve, reject){
            api.download({
                url: downData.downUrl,
                savePath: downData.savePath,
                report: downData.report?downData.report:false,
                cache: downData.cache?downData.cache:false,
                allowResume: downData.allowResume?downData.allowResume:false
            }, function(ret, err) {
                if (ret.state == 1) {
                    //下载成功
                    resolve(ret);
                } else {
                    reject(err);
                }
            });
        })
    },
    // 复制文件
    copyFile(copyData){
        /**
         * oldPath
         * newPath
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            var pathData = {
                oldPath: commonFn.filePaths({cancelPath:copyData.cancelPath,isRootFs:copyData.isRootFs,filePath:copyData.oldPath}),
                newPath: commonFn.filePaths({cancelPath:copyData.cancelPath,isRootFs:copyData.isRootFs,filePath:copyData.newPath})
            };
            if(copyData.syncType=='sync'){
                var ret = fs.copyToSync(pathData);
                if (ret) {
                    resolve(ret);
                }
            }else{
                fs.copyTo(pathData, function(ret, err) {
                    if (ret.status) {
                        resolve(ret);
                    } else {
                        reject(err);
                    }
                });
            }
        })
    },
    // 移动文件
    moveFile(moveData){
        /**
         * oldPath
         * newPath
         * syncType      async异步，sync同步
         * cancelPath: true 取消默认路径
         */
        if(!window.app.isApp){
            return false;
        }
        var fs = api.require('fs');
        return new Promise(function (resolve, reject){
            var pathData = {
                oldPath: commonFn.filePaths({cancelPath:moveData.cancelPath,isRootFs:moveData.isRootFs,filePath:moveData.oldPath}),
                newPath: commonFn.filePaths({cancelPath:moveData.cancelPath,isRootFs:moveData.isRootFs,filePath:moveData.newPath})
            };
            if(moveData.syncType=='sync'){
                var ret = fs.moveToSync(pathData);
                if (ret.status) {
                    resolve(ret);
                }else{
                    reject(ret);
                }
            }else{
                fs.moveTo(pathData, function(ret, err) {
                    if (ret.status) {
                        resolve(ret);
                    } else {
                        reject(err);
                    }
                });
            }
        })
    },
    // 检测文件后缀名
    checkSuffix:function(checkStr,types){
        if(types){
            var reg = RegExp(types);
        }else{
            var reg = RegExp(/(\.html|\.css|\.js|\.vue|\.svg|\.php|\.xml|\.json|\.wxml|\.wxss|\.java|\.jsp|\.ttf|\.woff|\.woff2|\.avi|\.mpeg|\.mp3|\.mp4|\.rm|\.tmp|\.wav|\.bmp|\.jpeg|\.gif|\.jpg|\.png|\.apk|\.exe|\.pdf|\.rar|\.zip|\.xls|\.xlsx|\.ppt|\.pptx|\.txt|\.docx|\.doc)$/);
        }
        return checkStr.match(reg);
        // return reg.exec(checkStr);
    }
}
export default commonFn;

