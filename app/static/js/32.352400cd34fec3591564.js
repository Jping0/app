webpackJsonp([32],{Ak3U:function(t,e){},hK0e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),a=i.n(s),n={name:"apiPublicPages",data:function(){return{curType:"",fbValue:0,repeatVal:0,timeVal:1e3,sgNum:1,sgTime:200,lightType:1,curLightSensorVal:0,jwdData:"",jwdText:"",yaqiangVal:0,dianInfo:{},bdTipsTitle:"",bdTipsCont:"",bdTipsTimeArr:[],bdTipSG:1,bdTipID:[],proximitySensorVal:0}},mounted:function(){var t=this.$route.query.types;this.curType=t,console.log(this.$route.query.types),"dianinfo"==t&&this.getDianInfo()},methods:{getFenBei:function(){var t=this;if(!this.isApp)return!1;console.log(a()([t.repeatVal,t.timeVal])),api.require("decibel").getDecibel({repeat:1==t.repeatVal,interval:t.timeVal?t.timeVal:1e3},function(e){console.log(a()(e)),t.fbValue=e.dB})},stopFenBei:function(){if(!this.isApp)return!1;api.require("decibel").stop()},repeatSet:function(t){this.repeatVal=t.currentTarget.value,console.log(t.currentTarget.value)},toggleSG:function(){if(!this.isApp)return!1;api.require("DVTorch").toggle({})},openSG:function(){if(!this.isApp)return!1;api.require("DVTorch").open({})},closeSG:function(){if(!this.isApp)return!1;api.require("DVTorch").close({})},startSG:function(){var t=this,e=0,i=setInterval(function(){if(2*t.sgNum<=e)return clearInterval(i),!1;e%2==1?t.openSG():t.closeSG(),++e},this.sgTime?this.sgTime:200)},startLightSensor:function(){if(!this.isApp)return!1;var t=this;api.require("lightSensor").startListener({type:this.lightType},function(e,i){e.state?(console.log(a()(e)),t.curLightSensorVal=e.x):t.commonFn.showMsg({text:"不可获取亮度！"})})},stopLightSensor:function(){if(!this.isApp)return!1;api.require("lightSensor").closeListener()},changeLightType:function(t){this.lightType=t.currentTarget.value},changeTipSG:function(t){this.bdTipSG=t.currentTarget.value},getJWD:function(){var t=this;if(!this.jwdText)return this.commonFn.showMsg({text:"请输入要搜索的地名！"}),!1;this.requests({reqUrl:"https://apis.map.qq.com/jsapi?qt=geoc&addr="+this.jwdText+"&key=UGMBZ-CINWR-DDRW5-W52AK-D3ENK-ZEBRC&output=jsonp&pf=jsapi&ref=jsapi&cb=qq.maps._svcb3.geocoder0",cancleHost:!0}).then(function(e){console.log(a()(e));var i=e;i=i.replace("qq.maps._svcb3.geocoder0&&qq.maps._svcb3.geocoder0(",""),console.log(i),i=i.replace("})","}"),console.log(i),i=JSON.parse(i);var s={};s.province=i.detail.province,s.city=i.detail.city,s.district=i.detail.district,s.name=i.detail.name,s.town=i.detail.town,s.key_poi=i.detail.key_poi,s.x=i.detail.pointx,s.y=i.detail.pointy,t.jwdData=s})},getYaqiang:function(){if(!this.isApp)return!1},stopYaqiang:function(){if(!this.isApp)return!1},getDianInfo:function(){var t=this;if(!this.isApp)return!1;var e=api.require("batteryManager"),i={};function s(t,e){for(var i="",s=0;s<e.length;s++)t==e[s].type&&(i=e[s].type+"("+e[s].text+")");return i||(i=t)}e.getBatteryStatus(function(n){console.log(a()(n)),i.cdStatus=s(n.status,[{type:1,text:"未知状态"},{type:2,text:"正在充电"},{type:3,text:"正在放电"},{type:4,text:"电池未充电"},{type:5,text:"电量充满"}]),e.getBatteryHealthInfo(function(n){console.log(a()(n)),i.jkStatus=s(n.health,[{type:1,text:"电池状态未知"},{type:2,text:"电池状态良好"},{type:3,text:"电池温度过高"},{type:4,text:"电池已损毁"},{type:5,text:"电池电压过高"},{type:7,text:"电池温度过低"}]),e.isBatteryPresent(function(n){console.log(a()(n)),i.hasDcStatus=n.isPresent,e.getBatteryLevel(function(n){console.log(a()(n)),i.syNum=n.level+"%",e.getBatteryScale(function(n){console.log(a()(n)),i.maxNum=n.scale+"%",e.getBatteryPluggedType(function(n){console.log(a()(n)),i.cdType=s(n.pluggedType,[{type:0,text:"未插入充电线"},{type:1,text:"交流电插头"},{type:2,text:"USB插头充电"},{type:4,text:"无线充电"}]),e.getBatteryVoltage(function(s){console.log(a()(s)),i.dianya=s.voltage+"V",e.getBatteryTemperature(function(s){console.log(a()(s)),i.wendu=s.temp+"℃",e.getBatteryTechnology(function(e){console.log(a()(e)),i.cyjishu=e.tech,console.log(a()(i)),t.dianInfo=i})})})})})})})})})},cancelOneTip:function(){if(!this.isApp)return!1;var t=_this.bdTipID;if(t.length<=0)return!1;api.cancelNotification({id:t[0]}),t.splice(0,1),_this.bdTipID=t},startSetTip:function(){if(console.log([this.bdTips1,this.bdTips2,this.bdTips3,this.bdTips4,this.bdTips5,this.bdTips6,this.bdTips7]),!this.isApp)return!1;var t=this;api.notification({vibrate:JSON.parse(t.bdTipsTimeArr),light:1==t.bdTipSG,notify:{title:t.bdTipsTitle,content:t.bdTipsCont}},function(e,i){e.id;var s=t.bdTipID?t.bdTipID:[];s.push(e.id),t.bdTipID=s})},startProximitySensor:function(){if(!this.isApp)return!1;var t=this;api.require("proximitySensor").startListener({type:this.lightType},function(e,i){console.log(a()(e)),t.proximitySensorVal=e.x})},stopProximitySensor:function(){if(!this.isApp)return!1;api.require("proximitySensor").closeListener()}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"apiPublicPages"},["fenbei"==t.curType?i("div",{staticClass:"fenbei"},[i("p",[t._v("当前环境分贝值："),i("span",{ref:"fenbeiText"},[t._v(t._s(t.fbValue))])]),t._v(" "),i("div",{staticClass:"fenbeiSet1"},[i("ul",{staticClass:"flexbox"},[i("li",{staticClass:"flex1"},[i("span",[t._v("是否重复：")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.repeatVal,expression:"repeatVal"}],attrs:{name:"",id:""},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.repeatVal=e.target.multiple?i:i[0]},function(e){return t.repeatSet(e)}]}},[i("option",{attrs:{value:"0"}},[t._v("否")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("是")])])]),t._v(" "),i("li",{staticClass:"flex1"},[i("span",[t._v("循环间隔(毫秒)：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.timeVal,expression:"timeVal"}],attrs:{type:"text"},domProps:{value:t.timeVal},on:{input:function(e){e.target.composing||(t.timeVal=e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"fenbeiSet2"},[i("ul",{staticClass:"flexbox"},[i("li",{staticClass:"flex1"},[i("span",{staticClass:"jbbg",on:{click:t.stopFenBei}},[t._v("停止获取")])]),t._v(" "),i("li",{staticClass:"flex1"},[i("span",{staticClass:"jbbg",on:{click:t.getFenBei}},[t._v("确定获取")])])])])]):t._e(),t._v(" "),"flashlight"==t.curType?i("div",{staticClass:"flashlight"},[i("ul",{staticClass:"flashL1 flexbox"},[i("li",{staticClass:"flex1 jbbg",on:{click:t.openSG}},[i("span",[t._v("打开闪光灯")])]),t._v(" "),i("li",{staticClass:"flex1 jbbg",on:{click:t.closeSG}},[i("span",[t._v("关闭闪光灯")])]),t._v(" "),i("li",{staticClass:"flex1 jbbg",on:{click:t.toggleSG}},[i("span",[t._v("切换闪光灯")])])]),t._v(" "),i("div",{staticClass:"flashL2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sgNum,expression:"sgNum"}],attrs:{type:"text",placeholder:"请输入闪光次数"},domProps:{value:t.sgNum},on:{input:function(e){e.target.composing||(t.sgNum=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sgTime,expression:"sgTime"}],attrs:{type:"text",placeholder:"请输入闪光间隔(毫秒)"},domProps:{value:t.sgTime},on:{input:function(e){e.target.composing||(t.sgTime=e.target.value)}}}),t._v(" "),i("button",{staticClass:"jbbg",attrs:{type:"button"},on:{click:t.startSG}},[t._v("开始")])])]):t._e(),t._v(" "),"lightSensor"==t.curType?i("div",{staticClass:"lightSensor"},[i("div",{staticClass:"curLightSensor"},[t._v("\n            当前亮度值："),i("span",[t._v(t._s(t.curLightSensorVal))])]),t._v(" "),i("div",{staticClass:"ligSenType"},[i("span",[t._v("选择获取类型：")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.lightType,expression:"lightType"}],attrs:{name:"",id:""},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.lightType=e.target.multiple?i:i[0]},function(e){return t.changeLightType(e)}]}},[i("option",{attrs:{value:"0"}},[t._v("特别快游戏用")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("游戏用")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("用户接口用")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("取得倾斜度的时候使用")])])]),t._v(" "),i("div",{staticClass:"ligSenBtn"},[i("ul",{staticClass:"flexbox"},[i("li",{staticClass:"flex1 jbbg",on:{click:t.stopLightSensor}},[i("span",[t._v("关闭")])]),t._v(" "),i("li",{staticClass:"flex1 jbbg",on:{click:t.startLightSensor}},[i("span",[t._v("获取")])])])])]):t._e(),t._v(" "),"jingweidu"==t.curType?i("div",{staticClass:"jingweidu"},[i("p",[t._v("经度："+t._s(t.jwdData.x?t.jwdData.x:"0"))]),t._v(" "),i("p",[t._v("纬度："+t._s(t.jwdData.y?t.jwdData.y:"0"))]),t._v(" "),i("p",[t._v(t._s(t.jwdData.province)+" "+t._s(t.jwdData.city)+" "+t._s(t.jwdData.district)+" "+t._s(t.jwdData.key_poi))]),t._v(" "),i("p",[t._v(t._s(t.jwdData.name))]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.jwdText,expression:"jwdText"}],attrs:{type:"text",placeholder:"输入地址"},domProps:{value:t.jwdText},on:{input:function(e){e.target.composing||(t.jwdText=e.target.value)}}}),t._v(" "),i("button",{staticClass:"jbbg",attrs:{type:"button"},on:{click:t.getJWD}},[t._v("获取经纬度")])])]):t._e(),t._v(" "),"yaqiang"==t.curType?i("div",{staticClass:"yaqiang"},[i("p",[t._v("当前场景压强："),i("span",[t._v(t._s(t.yaqiangVal))]),t._v("kPa")]),t._v(" "),t._m(0)]):t._e(),t._v(" "),"dianinfo"==t.curType?i("div",{staticClass:"dianInfo"},[i("ul",[i("li",[i("h4",[t._v("当前电池的充电状态")]),t._v(" "),i("p",[t._v(t._s(t.dianInfo.cdStatus))])]),t._v(" "),i("li",[i("h4",[t._v("电池健康信息")]),t._v(" "),i("p",[t._v(t._s(t.dianInfo.jkStatus))])]),t._v(" "),i("li",[i("h4",[t._v("是否取出了电池")]),t._v(" "),i("p",[t._v(t._s(t.dianInfo.hasDcStatus))])]),t._v(" "),i("li",[i("h4",[t._v("当前电池剩余电量")]),t._v(" "),i("p",[t._v(t._s(t.dianInfo.syNum))])]),t._v(" "),i("li",[i("h4",[t._v("当前电池最大电量")]),t._v(" "),i("p",[t._v(t._s(t.dianInfo.maxNum))])]),t._v(" "),i("li",[i("h4",[t._v("当前电池的充电插线类型")]),t._v(" "),i("p",[t._v(t._s(t.dianInfo.cdType))])]),t._v(" "),i("li",[i("h4",[t._v("当前电池的电压")]),t._v(" "),i("p",[t._v(t._s(t.dianInfo.dianya))])]),t._v(" "),i("li",[i("h4",[t._v("当前电池的温度")]),t._v(" "),i("p",[t._v(t._s(t.dianInfo.wendu))])]),t._v(" "),i("li",[i("h4",[t._v("电池采用的技术")]),t._v(" "),i("p",[t._v(t._s(t.dianInfo.cyjishu))])])])]):t._e(),t._v(" "),"bdTips"==t.curType?i("div",{staticClass:"bdTips"},[i("div",{staticClass:"bdTipsBox"},[i("span",[t._v("提示标题:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bdTipsTitle,expression:"bdTipsTitle"}],attrs:{type:"text"},domProps:{value:t.bdTipsTitle},on:{input:function(e){e.target.composing||(t.bdTipsTitle=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"bdTipsBox"},[i("span",[t._v("提示内容:")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bdTipsCont,expression:"bdTipsCont"}],attrs:{name:"",id:""},domProps:{value:t.bdTipsCont},on:{input:function(e){e.target.composing||(t.bdTipsCont=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"bdTipsBox"},[i("span",[t._v("通知震动时间数组(毫秒):")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bdTipsTimeArr,expression:"bdTipsTimeArr"}],attrs:{type:"text",placeholder:""},domProps:{value:t.bdTipsTimeArr},on:{input:function(e){e.target.composing||(t.bdTipsTimeArr=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"ligSenType"},[i("span",[t._v("提示时，是否同时进行 LED 闪烁提醒：")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.bdTipSG,expression:"bdTipSG"}],attrs:{name:"",id:""},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.bdTipSG=e.target.multiple?i:i[0]},function(e){return t.changeTipSG(e)}]}},[i("option",{attrs:{value:"0"}},[t._v("否")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("是")])])]),t._v(" "),i("ul",{staticClass:"flexbox"},[i("li",{staticClass:"flex1 jbbg",on:{click:t.cancelOneTip}},[i("span",[t._v("取消某一个")])]),t._v(" "),i("li",{staticClass:"flex1 jbbg",on:{click:t.startSetTip}},[i("span",[t._v("设置提示")])])])]):t._e(),t._v(" "),"proximitySensor"==t.curType?i("div",{staticClass:"lightSensor proximitySensor"},[i("div",{staticClass:"curLightSensor"},[t._v("\n            从设备到对象的距离："),i("span",[t._v(t._s(t.proximitySensorVal))])]),t._v(" "),i("div",{staticClass:"ligSenType"},[i("span",[t._v("选择获取类型：")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.lightType,expression:"lightType"}],attrs:{name:"",id:""},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.lightType=e.target.multiple?i:i[0]},function(e){return t.changeLightType(e)}]}},[i("option",{attrs:{value:"0"}},[t._v("特别快游戏用")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("游戏用")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("用户接口用")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("取得倾斜度的时候使用")])])]),t._v(" "),i("div",{staticClass:"ligSenBtn"},[i("ul",{staticClass:"flexbox"},[i("li",{staticClass:"flex1 jbbg",on:{click:t.stopProximitySensor}},[i("span",[t._v("关闭")])]),t._v(" "),i("li",{staticClass:"flex1 jbbg",on:{click:t.startProximitySensor}},[i("span",[t._v("获取")])])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"flexbox"},[e("li",{staticClass:"flex1 jbbg"},[e("span",[this._v("停止获取")])]),this._v(" "),e("li",{staticClass:"flex1 jbbg"},[e("span",[this._v("获取压强")])])])}]};var l=i("VU/8")(n,o,!1,function(t){i("Ak3U")},null,null);e.default=l.exports}});