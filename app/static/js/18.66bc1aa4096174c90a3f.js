webpackJsonp([18],{"3Bae":function(t,e){},cQYj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mvHQ"),s=i.n(n),a={name:"scan_music",data:function(){return{allFiles:"",mp3file:[],cancleLoadings:!1,isScan:!1,scanFileTimer:"",scanTimer:"",scanBox:{x:0,y:0},scanLineStyle:{left:-5,direction:"right"},scanDots:[],isShowMp3:!1,scanMulu:[{name:"手机内部文件",fileurl:""},{name:"SD内存卡",fileurl:""},{name:"全部文件",fileurl:"all"}],selectScanIndex:0,strMp3File:"",saveMp3File:[],repeatMp3:[]}},mounted:function(){var t=this;if(this.isApp){var e=this.commonFn.rootDirectory(),i=RegExp(/\/$/),n=e.replace(i,""),s=e.split("/");this.commonFn.readDir({filePath:"/"+s[1]+"/",cancelPath:!0}).then(function(e){var i="";if(e.data.length>2){for(var a=0;a<e.data.length;a++)"emulated"!=e.data[a]&&"self"!=e.data[a]&&(i=e.data[a]);t.scanMulu=[{name:"手机内部文件",fileurl:n},{name:"SD内存卡",fileurl:"/"+s[1]+"/"+i},{name:"全部文件",fileurl:"all"}]}else t.scanMulu=[{name:"手机内部文件",fileurl:n}]})}this.scanBox=this.$refs.scanShows.getBoundingClientRect()},methods:{scanAllMp3:function(){var t=this;if(this.scanAnima(),this.isApp){var e=api.require("fs");"all"!=this.scanMulu[this.selectScanIndex].fileurl&&(this.fileAll(e,this.scanMulu[this.selectScanIndex].fileurl),t.isScan=!0),api.setKeepScreenOn({keepOn:!0});var i=0,n=!1;t.scanFileTimer=setInterval(function(){t.cancleLoadings==n?i=++i:(i=0,n=t.cancleLoadings),16==i&&(clearInterval(t.scanFileTimer),api.setKeepScreenOn({keepOn:!1}),clearInterval(t.scanTimer),t.isScan=!1,t.scanAttrMp3())},500)}},scanAnima:function(){var t=this;if(!this.isScan){var e=0;this.scanTimer=setInterval(function(){"right"==t.scanLineStyle.direction?(e+=2)<t.scanBox.width?(t.scanLineStyle.left=e,0==t.scanDots.length&&t.scanDot()):(t.scanLineStyle.left=t.scanBox.width,t.scanLineStyle.direction="left"):"left"==t.scanLineStyle.direction&&((e-=2)>0?t.scanLineStyle.left=e:(t.scanDots=[],t.scanLineStyle.left=0,t.scanLineStyle.direction="right"))},20)}},random:function(t,e){return Math.floor(Math.random()*(e-t))+t},scanDot:function(){for(var t=[],e=0;e<16;e++)t[e]={x:this.random(10,this.scanBox.width-10),y:this.random(15,this.scanBox.height-15)};this.pushDot(0,t)},pushDot:function(t,e){var i=this;if(t<e.length-1){var n=[];this.scanDots.length>0&&(n=this.scanDots),n.push(e[t]),this.scanDots=n,setTimeout(function(){i.pushDot(++t,e)},200)}},fileAll:function(t,e){var i=this,n=this.mp3file?this.mp3file:[];t.readDir({path:e},function(s,a){if(s.status)if(i.cancleLoadings=!1,s.data&&$api.isArray(s.data))for(var l=0;l<s.data.length;l++)i.regCancle(s.data[l])||function(n){setTimeout(function(){i.fileAll(t,e?e+"/"+s.data[n]:s.data[n])},2e3)}(l);else i.regMp3(s.data)&&(0==n.length?n[0]=s.data:n.push(s.data),i.mp3file=n);else i.regMp3(e)&&(0==n.length?n[0]=e:n.push(e),i.mp3file=n),i.cancleLoadings=!0})},showMp3List:function(){this.isShowMp3=!this.isShowMp3},saveMp3:function(){var t=this,e={typeText:"本地音乐",fileName:"phoneAllMp3.txt",list:t.saveMp3File};this.commonFn.openFiles({filePath:"pingData/musicData/phoneAllMp3.txt"}).then(function(i){i.status?t.commonFn.writeFiles({filePath:"pingData/musicData/phoneAllMp3.txt",data:s()(e),overwrite:!0}).then(function(e){e.status&&t.commonFn.showMsg({text:"保存成功！"})}):t.commonFn.createFile({filePath:"pingData/musicData/phoneAllMp3.txt"}).then(function(i){i.status&&t.commonFn.writeFiles({filePath:"pingData/musicData/phoneAllMp3.txt",data:s()(e),overwrite:!0}).then(function(e){e.status&&t.commonFn.showMsg({text:"保存成功！"})})})})},regMp3:function(t){return RegExp(/\.mp3$/).test(t)},regCancle:function(t){return RegExp(/Android$|gifshow$|alipay$|backup$|backups$|DCIM$/).test(t)},showBrowser:function(){var t=this;if(this.isApp){var e=api.require("fileBrowser");e.open(function(i){i&&(t.commonFn.getAttrFile({cancelPath:!0,filePath:i.url}).then(function(t){alert(s()(t))}),e.close())})}},scanAttrMp3:function(){if(!this.isApp)return!1;var t=api.require("fs");this.getFileAttr(t,0,this.mp3file)},getFileAttr:function(t,e,i,n){var a=this;t.getAttribute({path:i[e]},function(l,c){if(l.status){var o=[];n&&(o=n);var r={},u=i[e].split("/"),p=u[u.length-1].split(".mp3")[0];r.url=i[e],r.title=p,r.modificationDate=l.attribute.modificationDate,r.lastDate=a.timestampToTime(l.attribute.modificationDate),r.fullSize=l.attribute.size;var h=Number(l.attribute.size/1e6);r.size=h.toFixed(1),r.singer="",r.picture="",r.duration="",r.like=!1,r.source={name:"本地音乐",urls:"phoneAllMp3.txt"},r.size>1&&o.push(r),e+1<i.length?a.getFileAttr(t,++e,i,o):(a.saveMp3File=o,a.strMp3File=s()(o))}else e+1<i.length?a.getFileAttr(t,++e,i,n):(a.saveMp3File=n,a.strMp3File=s()(n))})},timestampToTime:function(t){var e=10==t.length?1e3*t:t,i=new Date(e);return i.getFullYear()+"-"+((i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1)+"-")+((i.getDate()<10?"0"+i.getDate():i.getDate())+" ")+((i.getHours()<10?"0"+i.getHours():i.getHours())+":")+((i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes())+":")+(i.getSeconds()<10?"0"+i.getSeconds():i.getSeconds())},changeScanML:function(t){this.selectScanIndex=t},delRepeat:function(){for(var t=this.saveMp3File,e=[],i=[],n=0;n<t.length;n++){for(var a=n+1;a<t.length;a++)a!=n&&t[n].url==t[a].url&&t[n].modificationDate==t[a].modificationDate&&(i.push(t[n]),++n);e.push(t[n])}this.saveMp3File=e,this.strMp3File=s()(e),this.repeatMp3=i}},beforeDestroy:function(){clearInterval(this.scanFileTimer),clearInterval(this.scanTimer),this.isApp&&api.setKeepScreenOn({keepOn:!1})}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"scan_music"},[i("div",{staticClass:"scanShowBox"},[i("div",{ref:"scanShows",staticClass:"scanShows"},[i("div",{ref:"scanLine",staticClass:"scanLine",style:"left:"+t.scanLineStyle.left+"px;"}),t._v(" "),i("ul",{ref:"scanDots"},t._l(t.scanDots,function(e,n){return i("li",{style:"left:"+e.x+"px;top:"+e.y+"px;opacity:"+(e.x>t.scanLineStyle.left&&"left"==t.scanLineStyle.direction?0:1)+";"})}),0)]),t._v(" "),i("h4",[t._v(t._s(t.isScan?"正在":"")+"扫描文件")]),t._v(" "),i("div",{staticClass:"scanShowTotal"},[t._v("总共扫描到了"),i("span",[t._v(t._s(t.mp3file.length>0?t.mp3file.length:0))]),t._v("首mp3")])]),t._v(" "),i("div",{staticClass:"scanmp3Btn"},[i("ul",{staticClass:"list2"},[i("li",[i("button",{staticClass:"jbbg",attrs:{type:"button"},on:{click:t.showBrowser}},[t._v("打开文件浏览")])]),t._v(" "),i("li",[i("button",{staticClass:"jbbg",attrs:{type:"button"},on:{click:t.scanAllMp3}},[t._v("扫描所有mp3文件")])]),t._v(" "),i("li",[i("button",{staticClass:"jbbg",attrs:{type:"button"},on:{click:t.showMp3List}},[t._v(t._s(t.isShowMp3?"隐藏":"显示")+"扫描的mp3列表")])]),t._v(" "),i("li",[i("button",{staticClass:"jbbg",attrs:{type:"button"},on:{click:t.saveMp3}},[t._v("保存mp3数据")])]),t._v(" "),i("li",[i("button",{staticClass:"jbbg",attrs:{type:"button"},on:{click:t.delRepeat}},[t._v("去除重复")])])])]),t._v(" "),i("div",{staticClass:"scanmp3Ml"},[i("h4",[t._v("可扫描的目录")]),t._v(" "),i("ul",t._l(t.scanMulu,function(e,n){return i("li",{class:t.selectScanIndex==n?"active":"",on:{click:function(e){return t.changeScanML(n)}}},[t._v(t._s(e.name))])}),0)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMp3,expression:"isShowMp3"}],staticClass:"scanmp3List"},[i("ul",t._l(t.saveMp3File,function(e,n){return i("li",{key:n},[t._v(t._s(JSON.stringify(e)))])}),0),t._v(" "),i("div",[t._v("总共"+t._s(t.saveMp3File.length)+"首,重复"+t._s(t.repeatMp3.length)+"首")]),t._v(" "),i("div",{staticClass:"showfileAll"},[t._v(t._s(t.repeatMp3))]),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:t.mp3file.length<1,expression:"mp3file.length<1"}]},[t._v("-- 没有文件 --")])])])},staticRenderFns:[]};var c=i("VU/8")(a,l,!1,function(t){i("3Bae")},null,null);e.default=c.exports}});