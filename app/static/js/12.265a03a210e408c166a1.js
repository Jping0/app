webpackJsonp([12],{skLI:function(i,t){},vkyI:function(i,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"home",data:function(){return{domain:this.hosts,img1List:[{imgUrl:s("6KWl")},{imgUrl:s("+4vT")},{imgUrl:s("GYko")},{imgUrl:s("2/00")},{imgUrl:s("5PM7")},{imgUrl:s("GYko")}],img2List:[{imgUrl:s("6KWl")},{imgUrl:s("+4vT")},{imgUrl:s("GYko")},{imgUrl:s("2/00")},{imgUrl:s("5PM7")},{imgUrl:s("6KWl")},{imgUrl:s("+4vT")},{imgUrl:s("GYko")},{imgUrl:s("2/00")}]}},mounted:function(){var i=this;this.commonFn.readFiles({syncType:"sync",filePath:"pingData/homeimg.txt"}).then(function(t){if(t.status){var s=JSON.parse(t.data);i.img1List=s[0],i.img2List=s[1]}})}},l={render:function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"home"},[t("div",{staticClass:"imgshow"},[t("ul",this._l(this.img1List,function(i,s){return t("li",{key:s},[t("img",{attrs:{src:i.imgUrl,alt:""}})])}),0)]),this._v(" "),t("div",{staticClass:"imgshow2"},[t("ul",this._l(this.img2List,function(i,s){return t("li",{key:s},[t("img",{attrs:{src:i.imgUrl,alt:""}})])}),0)])])},staticRenderFns:[]};var n=s("VU/8")(r,l,!1,function(i){s("skLI")},"data-v-6d5bcd5d",null);t.default=n.exports}});