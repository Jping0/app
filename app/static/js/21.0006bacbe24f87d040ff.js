webpackJsonp([21],{"7BK5":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("mvHQ"),c=a.n(e),s={name:"contactus",data:function(){return{contactData:""}},mounted:function(){var t=this;this.isApp&&api.require("DVContacts").allContacts(function(n,a){n?t.contactData=c()(n):alert(c()(a))})},methods:{}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"contactus"},[this._v("\n    "+this._s(this.contactData)+"\n")])},staticRenderFns:[]};var o=a("VU/8")(s,i,!1,function(t){a("bpde")},null,null);n.default=o.exports},bpde:function(t,n){}});