webpackJsonp([3],{"0ms+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),r=a.n(s),i={name:"codes",data:function(){return{areaH:window.innerHeight,showCur:0,codebtn:!1,popStatus:!1,poptitle:"提示框",selectFurl:""}},mounted:function(){this.initCont()},methods:{showCodebtn:function(){this.codebtn=!this.codebtn},showArea:function(e){this.showCur=e.target.dataset.curindex},showCodes:function(){var e=document.querySelector(".areaHtml").value,t=document.querySelector(".areaCss").value,a=document.querySelector(".areaJs").value;this.$router.push({path:"/showcode",query:{areahtml:e,areacss:t,areajs:a}})},getFile:function(){var e=this;if(this.isApp){var t=api.require("fileBrowser");api.require("fs");t.open(function(a){if(a){var s=a;e.selectFurl=s.url,t.close(),e.commonFn.readFiles({cancelPath:!0,filePath:s.url}).then(function(t){if(t.status){var a=e.commonFn.checkSuffix(s.url);".html"==a[0]?(document.querySelector(".areaHtml").value=t.data,e.showCur=0):".css"==a[0]?(document.querySelector(".areaCss").value=t.data,e.showCur=1):".js"==a[0]?(document.querySelector(".areaJs").value=t.data,e.showCur=2):e.commonFn.showMsg({text:"文件格式不准确！"})}else alert(r()(t))})}})}},clearAll:function(){if(0==this.showCur?document.querySelector(".areaHtml").value="":1==this.showCur?document.querySelector(".areaCss").value="":2==this.showCur&&(document.querySelector(".areaJs").value=""),this.selectFurl){var e=this.commonFn.checkSuffix(this.selectFurl);".html"==e&&0==this.showCur?this.selectFurl="":".css"==e&&1==this.showCur?this.selectFurl="":"js"==e&&2==this.showCur&&(this.selectFurl="")}},resetAll:function(){this.initCont(),this.selectFurl=""},saveFiles:function(){this.popStatus=!0},initCont:function(){var e="<!DOCTYPE html>\r\n";e+='<html lang="zh-CN">\r\n',e+="<head>\r\n",e+='<meta charset="UTF-8">\r\n',e+='<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\r\n',e+='<meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n',e+="<title></title>\r\n",e+="</head>\r\n",e+="<body>\r\n\r\n</body>\r\n</html>",document.querySelector(".areaHtml").value=e},popbCancel:function(){this.popStatus=!1},popbConfirm:function(){this.popStatus=!1,this.showCur=!1;var e=this;if(this.selectFurl){var t,a=this.commonFn.checkSuffix(this.selectFurl);".html"==a?t=document.querySelector(".areaHtml").value:".css"==a?t=document.querySelector(".areaCss").value:"js"==a&&(t=document.querySelector(".areaJs").value),this.commonFn.writeFiles({cancelPath:!0,filePath:this.selectFurl,data:t,overwrite:!0})}else{var s=document.querySelector(".areaHtml").value,r=document.querySelector(".areaCss").value,i=document.querySelector(".areaJs").value;r&&(s=s.replace("</head>","<style>"+r+"</style></head>")),i&&(s=s.replace("</body>","<script>"+i+"<\/script></body>"));var o=document.querySelector(".saveFinp").value;this.commonFn.openFiles({filePath:"files/"+o+".html"}).then(function(t){t.status?e.commonFn.writeFiles({filePath:"files/"+o+".html",data:s,overwrite:!0}).then(function(t){t.status&&e.commonFn.showMsg({text:"保存成功！"})}):e.commonFn.createFile({filePath:"files/"+o+".html"}).then(function(t){t.status&&e.commonFn.writeFiles({filePath:"files/"+o+".html",data:s}).then(function(t){t.status&&e.commonFn.showMsg({text:"保存成功！"})})})})}}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"codes"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.showCur,expression:"showCur==0"}],staticClass:"codes_html"},[s("textarea",{staticClass:"areaHtml",style:"height:"+e.areaH+"px",attrs:{placeholder:"HTML",name:""}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.showCur,expression:"showCur==1"}],staticClass:"codes_css"},[s("textarea",{staticClass:"areaCss",style:"height:"+e.areaH+"px",attrs:{placeholder:"CSS",name:""}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2==e.showCur,expression:"showCur==2"}],staticClass:"codes_js"},[s("textarea",{staticClass:"areaJs",style:"height:"+e.areaH+"px",attrs:{placeholder:"JS",name:""}})]),e._v(" "),s("div",{staticClass:"codesBtns"},[s("button",{attrs:{type:"button"},on:{click:e.showCodebtn}},[s("img",{attrs:{src:a("p43W"),alt:""}})]),e._v(" "),s("div",{staticClass:"codebtnBox",class:e.codebtn?"active":""},[s("ul",[s("li",{class:0==e.showCur?"active":"",attrs:{"data-curIndex":"0"},on:{click:e.showArea}},[e._v("html")]),e._v(" "),s("li",{class:1==e.showCur?"active":"",attrs:{"data-curIndex":"1"},on:{click:e.showArea}},[e._v("css")]),e._v(" "),s("li",{class:2==e.showCur?"active":"",attrs:{"data-curIndex":"2"},on:{click:e.showArea}},[e._v("js")])]),e._v(" "),s("ul",[s("li",{class:3==e.showCur?"active":"",attrs:{"data-curIndex":"3"},on:{click:e.getFile}},[e._v("file")]),e._v(" "),s("li",{class:4==e.showCur?"active":"",attrs:{"data-curIndex":"4"},on:{click:e.clearAll}},[e._v("清空")]),e._v(" "),s("li",{class:5==e.showCur?"active":"",attrs:{"data-curIndex":"5"},on:{click:e.resetAll}},[e._v("重置")]),e._v(" "),s("li",{class:6==e.showCur?"active":"",attrs:{"data-curIndex":"6"},on:{click:e.saveFiles}},[e._v("保存")]),e._v(" "),s("li",{attrs:{"data-curIndex":"3"},on:{click:e.showCodes}},[e._v("show")])])])]),e._v(" "),s("popbox",{attrs:{poptitle:e.poptitle,popStatus:e.popStatus},on:{popbCancel:e.popbCancel,popbConfirm:e.popbConfirm}},[s("div",{staticClass:"saveTips"},[s("input",{staticClass:"saveFinp",attrs:{type:"text",placeholder:"请输入要保存的文件名称"}})])])],1)},staticRenderFns:[]};var n=a("VU/8")(i,o,!1,function(e){a("MxG6")},"data-v-4135a226",null);t.default=n.exports},"5/NB":function(e,t){},CWFy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),r=a.n(s),i={name:"show_code",data:function(){return{htmlData:"",cssData:"",curTime:(new Date).getTime(),wHeight:window.innerHeight}},mounted:function(){sessionStorage.setItem("codeData",r()(this.$router.currentRoute.query))}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"showCode"},[t("iframe",{staticClass:"codeIframe",style:"height:"+this.wHeight+"px",attrs:{src:"static/showcode.html",frameborder:"0"}})])},staticRenderFns:[]};var n=a("VU/8")(i,o,!1,function(e){a("pvHp")},null,null);t.default=n.exports},F3uH:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEJklEQVRoQ+2aTWgcVRzAf/9NoKJC0didRC9erNCCxWtRUBAV8QMvMTQJO7vGRojYFiy2KFpFUCsIVVFMaXcmH0rjoX5jPZgG7EFBag+tHwiKHrIzi/YgFqHZ+cvsZpPdzGwyG/dtcsg7Zv7vvd/vvZc3895/hfVcprWT3wrPIh2PAVPY6X1LcSXC7/q3osHtaGononcD1xh0PE9nZy8DXRcifRyf3UIqNQGEDJUifEDG6q2NrRfIzx5CUvuBKw1CV5tuDO8Wt0IwhbIjwrFEYlHA9b5AuacN4GEXjeEn/txWnhHHfwn0mVieGomKgFu8Hw0+WRfwc3NTiAySSZ/F8V4DnlpOQhgv9lAKfgA2NxaQ0y2T6+wYiV3z4ciH8LAd+AXp6Cdz3bc4hSMgTzbof1RwvcMo4bqPFpWDlDaNMrT5r5YJxDVUD1+N+J2S9PNo+msc7x3g8biqQr7wGSL3RR7aVnSHMmERD1/tqYAEu8j0TJMvHEMkV4egclBwvF+BG+vZdBi7e9QEb12by8NXQy8CfdjWl7jeGMpg7ZYaCmgENAjS5HqKRgWSwVcR/iHQPnLdn+L47yPaUX0fxAjIaez0nesIfh5FLiP6CBnrZC1b+wWaG/n6cYx9E0eWkMEZaDF8aNe+GTAA3z4BQ/DtETAF/55nscvyzC4hU/CudwvKOWxLzAmYgne88Hxwqrw9GRMwBZ/3BhHGFvZWIwKm4B0v/KwOP68XixEBx3sOeKHpN3nMS6qujbhPnpYLhPC29SKu/zSqrySWWAk+bMi4wKR/E5f1ZzQ4QLbnVZzCPpDXV5RIAt8WAccfAX2r8qkre8mkj1D7tziTpPBtEch7HyI8tMCpjJC13sYp7AZ5N8LfDLxxgc91E74fHjvrr2NUd5PtPoozm4XU8QWJZuGNC4wVHyAIPo5d7ypZsmkHp9gPwUTc5dSK/yfGBVz/TVSfaAySGsDeMonj92Knw5uH5ovRXcjxfgK2LktVORKeaJ58voYxgXFvByW+j4Lpd4h8BTLNv3MzDF9/adXwRpeQ6+1HOVy5jAovwHSGUucMua4//hfw0srGZiBf2EupNMPQDWdbCtw2AaPUNY0bm4ENgYQjsDEDCQfKWNjGDBgb2oQNJ58BYO6KLuNJjYTc5bDx4s2Ugh8jVcpHStf7G+XquodhZiabTn4kbAZmNbF5/wCiLy+pehHbujYUOIOyM85uNX0ZqRO3fFROkE33CU7hKMhQfMc6TKAnjSc74jovJ7rl4djTXDle92B3vyG4fg7VY8uPXAuzlImnSO9YJvQSIreFqdhKIs8pfATyYOK21zpQOETGKt89LWYi49bZWoPG9S+cImPdW30U91uJ59cj9zzTALY1WcsXzQU7Xj/IXRBsB9kGXLWGQkWQ86heQHWMXPc3S1n+A7MxSPq8JV04AAAAAElFTkSuQmCC"},I7lu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),r=a.n(s),i={name:"editfile",data:function(){return{areaH:window.innerHeight,showCur:-1,codebtn:!1,fileUrls:"",originData:""}},mounted:function(){},methods:{showCodebtn:function(){this.codebtn&&(this.showCur=-1),this.codebtn=!this.codebtn},getFile:function(e){this.showCur=e.target.dataset.curindex;var t=this;if(this.isApp){var a=api.require("fileBrowser");a.open(function(e){if(e){var s=e;a.close(),t.fileUrls=s.url,t.fileHandle({fileUrl:s.url,types:"read"})}else alert(r()(e))})}},clearAll:function(e){this.showCur=e.target.dataset.curindex,document.querySelector(".areaBox").value="",this.fileUrls=""},resetAll:function(e){this.showCur=e.target.dataset.curindex,document.querySelector(".areaBox").value=document.querySelector(".hidearea").value},saveFiles:function(e){this.showCur=e.target.dataset.curindex,this.fileHandle({fileUrl:this.fileUrls,types:"write"})},fileHandle:function(e){var t=this,a=api.require("fs");a.open({path:e.fileUrl,flags:"read_write"},function(s,i){if(s){if("read"==e.types)a.read({fd:s.fd},function(e,t){e.status?(document.querySelector(".areaBox").value=e.data,document.querySelector(".hidearea").value=e.data):alert(r()(t))});else if("write"==e.types){var o=document.querySelector(".areaBox").value;a.write({fd:s.fd,data:o,offset:0,overwrite:!0},function(e,a){e.status?(document.querySelector(".hidearea").value=o,t.commonFn.showMsg({text:"保存成功！"})):alert(r()(a))})}}else alert(r()(s))})}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editfile"},[s("textarea",{staticClass:"areaBox",style:"height:"+e.areaH+"px",attrs:{placeholder:"请先选择文件",name:""}}),e._v(" "),s("textarea",{staticClass:"hidearea",attrs:{name:""}}),e._v(" "),s("div",{staticClass:"codesBtns"},[s("button",{attrs:{type:"button"},on:{click:e.showCodebtn}},[s("img",{attrs:{src:a("F3uH"),alt:""}})]),e._v(" "),s("div",{staticClass:"codebtnBox",class:e.codebtn?"active":""},[s("ul",[s("li",{class:0==e.showCur?"active":"",attrs:{"data-curIndex":"0"},on:{click:e.getFile}},[e._v("file")]),e._v(" "),s("li",{class:1==e.showCur?"active":"",attrs:{"data-curIndex":"1"},on:{click:e.clearAll}},[e._v("清空")]),e._v(" "),s("li",{class:2==e.showCur?"active":"",attrs:{"data-curIndex":"2"},on:{click:e.resetAll}},[e._v("还原")]),e._v(" "),s("li",{class:3==e.showCur?"active":"",attrs:{"data-curIndex":"3"},on:{click:e.saveFiles}},[e._v("保存")])])])])])},staticRenderFns:[]};var n=a("VU/8")(i,o,!1,function(e){a("gbo8")},"data-v-65f9a7ae",null);t.default=n.exports},MxG6:function(e,t){},gbo8:function(e,t){},p43W:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD7UlEQVRoQ+2aXYgbVRTHf2cm1YcqyNrm7ra2WhEtVHdXQYXiR33wg6JoFaRg3Uwi2CqC+OBTH0xBfPADqqIt2m0mxSL74Af1QZTCrl+l+AGiu1oflEqxySSLVKGgYu6VmUmyic0mk5qOKDNvc+fcc87/nHP/9869VyiUNiB2BozDoB6jd5AdybepK5TyiPXEoEzg24AZYdCKGx4anSU74gavRW8ThjcH5nxTkbiC65nBK/Y1ygxO+qZAt1uZBrPhTNhJACwe1SQDkSouKaGkhCIVSpcwJTS6aHASFopUXAkLJSwUqVASFjqdMCUsFClqCQslLBSpULqx0Jn6JxbGyKivAtN7vfVYfPIPfT21u9E7JGgtlJxwZ2JAjzbbyalDbdqK3ihGnh+QBRDzAhn1VgjgP/z8DwAUj69GSw6xbxxYIoyZIqt299S3p3IJVm0cyx4DxsEcQ+RzanqOFLNMDJ/spcOfB14GHuol2P93cyfO8IGO/V6qnMNS8wywrQu/HEP0c2SGu46beCayVi+Llesw5iBwdkvzHJhpkAsAfwPsvIVv8iFOetHqiBeA690HvNZ0zshTLLH3s+X8b5pt+bmzuHDZRoQngXVhuxzHSa/slK34AOz5ZYjUbx6QChyxllzBxNBs19JsnaM6bRj70GL5qfe9dMtTIPeGAZWNZNLvRhpXBW8bwq56JnI46UJrv3gA7CuvQcsPdcOv4KitkZxvCLmeD/Y24GscNRo/gGL1dox+JzBc+3MtD6z8ri8AxcojGPNi0Of32nK2rphv9I8nA255O4g/KL/EUVf25bwvHBzCWNNBP83N5JTPYmE1xjIGCuUDiNwBshMn/VjfACar52LrX+sAHienno0XwMJk+TaO2tQ3gGL1UowOy06bzeSGp+IFUKzkMGYSOMHReUV+3R99gShUNyP69aCP0WvIjhyNF8De8rVYcjh0gHvIqv7OyxbmgzkcdXn8LLSvvBRtfQtmFcKPZNRFkTMw+dNl2Kkj9eifcvoZzyD2rRfLj2JkZ93x/ThqSyQQbsUHvjaQta0V3L+8FH8GGhbdygdgbqi/7sJRDy8KouDdhfjjRobqfPkqGfXg3+Xjy0AThPc9cHGdxWcQ3kDXZtGpL7B1GmEUrcc6Hoob+xqyyz779zLQsNy2vulVSOK23SIQuZ5M+uN4WaiTj/5OhTAB5ipE/Nk5XKXCSTBHEOsgurY7oMzC/NVI7dMWNbfiqPf99/hLqBOYvEmxqjSO2D+TU41FX7tk+CP0UbNRuDvclYjjqkGvKon63fVuAd6ri5+gZq2O57JHVAejyIUXR54GqjhqvQ8gnus2UZw7DZm/AAl/AvEI863OAAAAAElFTkSuQmCC"},pvHp:function(e,t){},u4T6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"showfile",data:function(){return{}},mounted:function(){},methods:{chooseFile:function(){var e=this;if(!this.isApp)return!1;var t=api.require("fileBrowser");api.require("fs");t.open(function(a){if(a){t.close(),e.$router.push({path:"/iframes",query:{iframeUrl:a.url}})}})}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"showfile"},[t("button",{attrs:{type:"button"},on:{click:this.chooseFile}},[this._v("选择文件")])])},staticRenderFns:[]};var i=a("VU/8")(s,r,!1,function(e){a("5/NB")},null,null);t.default=i.exports}});