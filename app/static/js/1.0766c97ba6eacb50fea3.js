webpackJsonp([1],{"/n6Q":function(t,n,e){e("zQR9"),e("+tPU"),t.exports=e("Kh4W").f("iterator")},"06OY":function(t,n,e){var r=e("3Eo+")("meta"),o=e("EqjI"),i=e("D2L2"),u=e("evD5").f,f=0,c=Object.isExtensible||function(){return!0},s=!e("S82l")(function(){return c(Object.preventExtensions({}))}),l=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},a=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";l(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;l(t)}return t[r].w},onFreeze:function(t){return s&&a.NEED&&c(t)&&!i(t,r)&&l(t),t}}},"5QVw":function(t,n,e){t.exports={default:e("BwfY"),__esModule:!0}},"7UMu":function(t,n,e){var r=e("R9M2");t.exports=Array.isArray||function(t){return"Array"==r(t)}},BwfY:function(t,n,e){e("fWfb"),e("M6a0"),e("OYls"),e("QWe/"),t.exports=e("FeBl").Symbol},Kh4W:function(t,n,e){n.f=e("dSzd")},Kxp7:function(t,n){},LKZe:function(t,n,e){var r=e("NpIQ"),o=e("X8DO"),i=e("TcQ7"),u=e("MmMw"),f=e("D2L2"),c=e("SfB7"),s=Object.getOwnPropertyDescriptor;n.f=e("+E39")?s:function(t,n){if(t=i(t),n=u(n,!0),c)try{return s(t,n)}catch(t){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},OYls:function(t,n,e){e("crlp")("asyncIterator")},"QWe/":function(t,n,e){e("crlp")("observable")},Rrel:function(t,n,e){var r=e("TcQ7"),o=e("n0T6").f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},Xc4G:function(t,n,e){var r=e("lktj"),o=e("1kS7"),i=e("NpIQ");t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,f=e(t),c=i.f,s=0;f.length>s;)c.call(t,u=f[s++])&&n.push(u);return n}},Zzip:function(t,n,e){t.exports={default:e("/n6Q"),__esModule:!0}},crlp:function(t,n,e){var r=e("7KvD"),o=e("FeBl"),i=e("O4g8"),u=e("Kh4W"),f=e("evD5").f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:u.f(t)})}},fWfb:function(t,n,e){"use strict";var r=e("7KvD"),o=e("D2L2"),i=e("+E39"),u=e("kM2E"),f=e("880/"),c=e("06OY").KEY,s=e("S82l"),l=e("e8AB"),a=e("e6n0"),p=e("3Eo+"),y=e("dSzd"),m=e("Kh4W"),h=e("crlp"),g=e("Xc4G"),d=e("7UMu"),v=e("77Pl"),b=e("EqjI"),O=e("sB3e"),S=e("TcQ7"),w=e("MmMw"),E=e("X8DO"),U=e("Yobk"),x=e("Rrel"),P=e("LKZe"),_=e("1kS7"),j=e("evD5"),M=e("lktj"),k=P.f,K=j.f,D=x.f,F=r.Symbol,Y=r.JSON,N=Y&&Y.stringify,Q=y("_hidden"),W=y("toPrimitive"),T={}.propertyIsEnumerable,L=l("symbol-registry"),I=l("symbols"),A=l("op-symbols"),B=Object.prototype,G="function"==typeof F&&!!_.f,J=r.QObject,z=!J||!J.prototype||!J.prototype.findChild,C=i&&s(function(){return 7!=U(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=k(B,n);r&&delete B[n],K(t,n,e),r&&t!==B&&K(B,n,r)}:K,R=function(t){var n=I[t]=U(F.prototype);return n._k=t,n},Z=G&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},X=function(t,n,e){return t===B&&X(A,n,e),v(t),n=w(n,!0),v(e),o(I,n)?(e.enumerable?(o(t,Q)&&t[Q][n]&&(t[Q][n]=!1),e=U(e,{enumerable:E(0,!1)})):(o(t,Q)||K(t,Q,E(1,{})),t[Q][n]=!0),C(t,n,e)):K(t,n,e)},V=function(t,n){v(t);for(var e,r=g(n=S(n)),o=0,i=r.length;i>o;)X(t,e=r[o++],n[e]);return t},q=function(t){var n=T.call(this,t=w(t,!0));return!(this===B&&o(I,t)&&!o(A,t))&&(!(n||!o(this,t)||!o(I,t)||o(this,Q)&&this[Q][t])||n)},$=function(t,n){if(t=S(t),n=w(n,!0),t!==B||!o(I,n)||o(A,n)){var e=k(t,n);return!e||!o(I,n)||o(t,Q)&&t[Q][n]||(e.enumerable=!0),e}},H=function(t){for(var n,e=D(S(t)),r=[],i=0;e.length>i;)o(I,n=e[i++])||n==Q||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===B,r=D(e?A:S(t)),i=[],u=0;r.length>u;)!o(I,n=r[u++])||e&&!o(B,n)||i.push(I[n]);return i};G||(f((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===B&&n.call(A,e),o(this,Q)&&o(this[Q],t)&&(this[Q][t]=!1),C(this,t,E(1,e))};return i&&z&&C(B,t,{configurable:!0,set:n}),R(t)}).prototype,"toString",function(){return this._k}),P.f=$,j.f=X,e("n0T6").f=x.f=H,e("NpIQ").f=q,_.f=tt,i&&!e("O4g8")&&f(B,"propertyIsEnumerable",q,!0),m.f=function(t){return R(y(t))}),u(u.G+u.W+u.F*!G,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)y(nt[et++]);for(var rt=M(y.store),ot=0;rt.length>ot;)h(rt[ot++]);u(u.S+u.F*!G,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=F(t)},keyFor:function(t){if(!Z(t))throw TypeError(t+" is not a symbol!");for(var n in L)if(L[n]===t)return n},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!G,"Object",{create:function(t,n){return void 0===n?U(t):V(U(t),n)},defineProperty:X,defineProperties:V,getOwnPropertyDescriptor:$,getOwnPropertyNames:H,getOwnPropertySymbols:tt});var it=s(function(){_.f(1)});u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return _.f(O(t))}}),Y&&u(u.S+u.F*(!G||s(function(){var t=F();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(b(n)||void 0!==t)&&!Z(t))return d(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!Z(n))return n}),r[1]=n,N.apply(Y,r)}}),F.prototype[W]||e("hJx8")(F.prototype,W,F.prototype.valueOf),a(F,"Symbol"),a(Math,"Math",!0),a(r.JSON,"JSON",!0)},n0T6:function(t,n,e){var r=e("Ibhu"),o=e("xnc9").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},oAZm:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("pFYg"),o=e.n(r),i={name:"home",data:function(){return{domain:this.hosts,img1List:[{imgUrl:e("6KWl")},{imgUrl:e("+4vT")},{imgUrl:e("GYko")},{imgUrl:e("2/00")},{imgUrl:e("5PM7")},{imgUrl:e("GYko")}],img2List:[{imgUrl:e("6KWl")},{imgUrl:e("+4vT")},{imgUrl:e("GYko")},{imgUrl:e("2/00")},{imgUrl:e("5PM7")},{imgUrl:e("6KWl")},{imgUrl:e("+4vT")},{imgUrl:e("GYko")},{imgUrl:e("2/00")}]}},mounted:function(){var t=this;this.isApp&&this.commonFn.readFiles({syncType:"sync",filePath:"pingData/homeimg.txt"}).then(function(n){if(n.status){var e=JSON.parse(n.data);t.img1List=e[0],t.img2List=e[1]}})},methods:{test:function(t){console.log(t.text),console.log(t.text2),console.log(o()(t.text2))}}},u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"imgshow"},[n("ul",this._l(this.img1List,function(t,e){return n("li",{key:e},[n("img",{attrs:{src:t.imgUrl,alt:""}})])}),0)]),this._v(" "),n("div",{staticClass:"imgshow2"},[n("ul",this._l(this.img2List,function(t,e){return n("li",{key:e},[n("img",{attrs:{src:t.imgUrl,alt:""}})])}),0)])])},staticRenderFns:[]};var f=e("VU/8")(i,u,!1,function(t){e("Kxp7")},"data-v-5d086bc9",null);n.default=f.exports},pFYg:function(t,n,e){"use strict";n.__esModule=!0;var r=u(e("Zzip")),o=u(e("5QVw")),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}n.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}}});