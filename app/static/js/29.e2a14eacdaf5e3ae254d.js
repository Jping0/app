webpackJsonp([29],{XQqw:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={name:"scroll_text",data:function(){return{winW:window.innerWidth,winH:window.innerHeight,scrollTimer:"",isShow:!1,scrollStyle:{boxbg:"#000000",fontSize:100,speed:5,direction:"left",color:"#ffffff",content:""},scrollTops:window.innerHeight,cancelTimer:"",checkCancel:!1}},mounted:function(){this.isApp&&api.setKeepScreenOn({keepOn:!0})},methods:{scrollStart:function(){var t=this,e=(window.innerWidth,window.innerHeight),o=this.scrollStyle,l=this.$refs.scrollBox,s=this.scrollTops,r=l.getBoundingClientRect();this.scrollTimer=setInterval(function(){-(s-=1)>r.height?(t.scrollTops=e,s=e):t.scrollTops=s},50/o.speed)},showScroll:function(){var t=this;this.isShow=!0;var e=window.innerWidth,o=window.innerHeight,l=this.scrollStyle,s=this.$refs.scrollBox,r="transform: translateY("+(e/2-(l.fontSize+20)/2)+"px) rotateZ(90deg);-webkit-transform:translateY("+(e/2-(l.fontSize+20)/2)+"px) rotateZ(90deg);",i="transform-origin:"+e/2+"px "+(l.fontSize+20)/2+"px;-webkit-transform-origin:"+e/2+"px "+(l.fontSize+20)/2+"px;";s.style.cssText="font-size:"+l.fontSize+"px;height:"+(l.fontSize+20)+"px;line-height:"+(l.fontSize+20)+"px;top:"+o+"px;color:"+l.color+";"+i+r,setTimeout(function(){t.scrollStart()},300)},bgcolor:function(t){this.scrollStyle.boxbg=t.target.value},fontColor:function(t){this.scrollStyle.color=t.target.value},fontSize:function(t){Number(t.target.value)<330?this.scrollStyle.fontSize=t.target.value:this.scrollStyle.fontSize=100},scrollSpeed:function(t){this.scrollStyle.speed=t.target.value},scrollFX:function(t){this.scrollStyle.direction=t.target.value},scrollText:function(t){this.scrollStyle.content=t.target.value},scrolltcStart:function(t){var e=this;this.cancelTimer=setInterval(function(){e.checkCancel=!0},1200)},scrolltcEnd:function(t){clearInterval(this.cancelTimer),this.checkCancel&&(this.isShow=!1,clearInterval(this.scrollTimer),this.scrollTimer=null,this.checkCancel=!1,this.scrollTops=window.innerHeight)}},beforeDestroy:function(){clearInterval(this.scrollTimer),clearInterval(this.cancelTimer),this.scrollTimer=null,this.isApp&&api.setKeepScreenOn({keepOn:!1})}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"scroll_text",style:"width:"+t.winW+"px;height:"+t.winH+"px;background-color:"+(t.isShow?t.scrollStyle.boxbg:"white")},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"controlBox"},[o("ul",[o("li",[o("span",[t._v("背景颜色")]),t._v(" "),o("div",{staticClass:"bgColorBox",style:"background-color:"+t.scrollStyle.boxbg},[o("input",{attrs:{id:"bgColor",type:"color",readonly:"",placeholder:"选择颜色"},domProps:{value:t.scrollStyle.boxbg},on:{input:t.bgcolor}})])]),t._v(" "),o("li",[o("span",[t._v("字体颜色")]),t._v(" "),o("div",{staticClass:"fontColorBox",style:"background-color:"+t.scrollStyle.color},[o("input",{attrs:{id:"fontcolor",type:"color",readonly:"",placeholder:"选择颜色"},domProps:{value:t.scrollStyle.color},on:{input:t.fontColor}})])]),t._v(" "),o("li",[o("span",[t._v("字体大小")]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.scrollStyle.fontSize,expression:"scrollStyle.fontSize"}],attrs:{id:"fontSize",type:"text",placeholder:"请输入字体大小，0-300之内"},domProps:{value:t.scrollStyle.fontSize},on:{input:[function(e){e.target.composing||t.$set(t.scrollStyle,"fontSize",e.target.value)},t.fontSize]}})])]),t._v(" "),o("li",[o("span",[t._v("滚动速度")]),t._v(" "),o("div",[o("select",{attrs:{name:"",id:"scorllSpeed"},on:{input:t.scrollSpeed}},[o("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("2")]),t._v(" "),o("option",{attrs:{value:"3"}},[t._v("3")]),t._v(" "),o("option",{attrs:{value:"4"}},[t._v("4")]),t._v(" "),o("option",{attrs:{value:"5",selected:""}},[t._v("5")]),t._v(" "),o("option",{attrs:{value:"6"}},[t._v("6")]),t._v(" "),o("option",{attrs:{value:"7"}},[t._v("7")]),t._v(" "),o("option",{attrs:{value:"8"}},[t._v("8")]),t._v(" "),o("option",{attrs:{value:"9"}},[t._v("9")]),t._v(" "),o("option",{attrs:{value:"10"}},[t._v("10")])])])]),t._v(" "),o("li",[o("span",[t._v("内容")]),t._v(" "),o("div",[o("textarea",{attrs:{name:"",id:"scrollText",placeholder:"请输入内容！"},domProps:{value:t.scrollStyle.content},on:{input:t.scrollText}})])])]),t._v(" "),o("div",{staticClass:"controlShow"},[o("button",{staticClass:"jbbg",attrs:{type:"buttom"},on:{click:t.showScroll}},[t._v("显示")])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"scrollBox",staticClass:"scrollText",style:"top:"+t.scrollTops+"px;",on:{touchstart:t.scrolltcStart,touchend:t.scrolltcEnd}},[t._v(t._s(t.scrollStyle.content))])])},staticRenderFns:[]};var r=o("VU/8")(l,s,!1,function(t){o("cGoX")},null,null);e.default=r.exports},cGoX:function(t,e){}});