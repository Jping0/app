webpackJsonp([5],{"+XBy":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADJUlEQVRoQ+2ZW4hNURjHf/8XReRBo4xyKU8kiVxK4kUuueTyMOVSSlOuD0SmFBFl4sEwalI0Q00KKYWQoUajeJkU8uD2IOFFcnn6tHJote299j63OWfHqt2pc9b6r/9vrb3Wt9Z3RM6Lcu6ffxPAzJYAzcAw4ICknlrNZNEzYGZrgIue4ceSpucCIMa8850PgATzDsC9QvvregYC5lskHamVeddv6hoImN8p6XgtzacCBMxvlXSq1uaDAAHzGyWdrQfziQAB802SuuvFfCyAmc0D7lbR5EfgE+A+bwM3JPWV2t9fi9jMrgArShUssd0z4DzQJulzMRpxAK3ArmJEKlj3aQHidFbNOIBxwDVgUlaRKtQ7I2lTFt3YOGBmEwvnnSjEIUn7sgjH1TGzQUAjMAqYDMwAlgIjY+r3SJqf1ldiIAtAtEranSac9XczGw/sKDzRZt2SmkJawUgcgHCLbXtWk1nqlXrWynKUSHqdOiS5O0HFipk1AK+BwRHRZkkdcR2lArhGgZnokrS+YgS/+hoB3ItsIolH9kwAKRDtkrZUGGIqcB8Y6unGzkJmgADEB0lxu0hZTGa2FzjsifRJmh0VLQogAeKCpLVluU1obGavgLHez42S3vnViwYoQIwG3C70rZq3MTPrAvzBWS3pUtkA1RjthMAXTSAclbQnTwAuWvd7hi9LWpUnALelumP379IvaUqeANzZ6Ydn2K25IXkCcCfjl57ht5LG5AnA7fsPPMO3JC3IE0A0mJ2UtC1PAG70/ei7UpK78v4pJQWygYgDZuZelZteX1+ABknf8wLQCazzzHZK2hAdvLqcATNbBlyNmF0s6XpeAN5H7smJB8a6moHCpf8OMCcy0rMkPYxbe3UDYGbLgfZC1sL3ul1SW9LGUXMAM3ORtaXwn1vUZ+qfJwMOYGYuJ+RyQzOBhcBcYHjMCG+WlJqhC+WFFgEu/+OSvQNZ3rjtU5K7E6eWEMALYEKqQmUrnAOOSXqSVTYE8AiYllWojHpfAbfznJDk0u1FlbRX6GCFIZzZ597TC/RKct+XVAZ8EZfkMtDoP0ClR7RYvZ9mrxBAh0JcMgAAAABJRU5ErkJggg=="},Bh7J:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),n=i.n(s),a={name:"iframes_madmin",data:function(){return{iframHeight:"",iframeUrl:"",pageData:"",showUrl:null,linkList:[],searchList:[],searchSite:[],linkIndex:null,searchType:!1}},mounted:function(){var t=this;(this.iframHeight=window.innerHeight+"px",this.isApp)&&api.require("clipBoard").get(function(e,i){e?api.confirm({title:"剪切板",msg:e.value,buttons:["确定","取消"]},function(i,s){1==i.buttonIndex&&(t.showUrl=e.value)}):alert(n()(i))});this.getFiles({fileName:"searchfile.ping",cancelList:!1}),this.getFiles({fileName:"searchsite.ping",cancelList:!0})},methods:{showIframe:function(){this.iframeUrl=this.showUrl},getElData:function(t){this.linkIndex=t.currentTarget.dataset.linkindex,this.showUrl=t.currentTarget.children[1].innerHTML},gobacks:function(){this.setnull()},changeSearch:function(){this.searchType?this.linkList=this.searchList:this.linkList=this.searchSite,this.setnull(),this.searchType=!this.searchType},setnull:function(){this.showUrl=null,this.iframeUrl=null,this.linkIndex=null},getFiles:function(t){if(this.isApp){var e=api.require("fs"),i=e.openSync({path:"fs://pingData/"+t.fileName,flags:"read_write"});if(i.status){var s=i.fd,a=e.readSync({fd:i.fd,offset:0,length:0});if(a.status){console.log(n()(a)),t.cancelList||(this.linkList=JSON.parse(a.data),console.log("设置显示链接")),"searchfile.ping"==t.fileName&&(this.searchList=JSON.parse(a.data),console.log("searchfile.ping")),"searchsite.ping"==t.fileName&&(this.searchSite=JSON.parse(a.data),console.log("searchsite.ping"));var l=e.closeSync({fd:s});l.status?(console.log(n()(l)),console.log("关闭成功！")):console.log(n()(l))}else console.log(n()(a)),console.log("读取文件失败！")}else this.commonFn.showMsg({text:"没有此文件！"})}}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"iframebox"},[t.iframeUrl?t._e():s("div",{staticClass:"iframes_madminSet"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.showUrl,expression:"showUrl"}],attrs:{id:"iframesInp",type:"text",placeholder:"请输入网址"},domProps:{value:t.showUrl},on:{input:function(e){e.target.composing||(t.showUrl=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"button"},on:{click:t.showIframe}},[t._v("确定")])]),t._v(" "),s("div",{staticClass:"pdlr16"},[!t.iframeUrl&&t.linkList?s("div",{staticClass:"creatLinkList"},[s("h4",[t._v("链接列表")]),t._v(" "),s("button",{attrs:{type:"button"},on:{click:t.changeSearch}},[t._v("切换搜索")]),t._v(" "),s("ul",t._l(t.linkList.list,function(e,i){return s("li",{class:i==t.linkIndex?"active":"",attrs:{"data-linkindex":i},on:{click:function(e){return t.getElData(e)}}},[s("p",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.url))])])}),0)]):t._e()]),t._v(" "),s("button",{staticClass:"gobacks",attrs:{type:"button"},on:{click:t.gobacks}},[s("img",{attrs:{src:i("+XBy"),alt:""}})]),t._v(" "),t.iframeUrl?s("iframe",{style:{height:t.iframHeight},attrs:{src:t.iframeUrl,frameborder:"0"}}):t._e()])},staticRenderFns:[]};var r=i("VU/8")(a,l,!1,function(t){i("Cmbz")},null,null);e.default=r.exports},Cmbz:function(t,e){}});