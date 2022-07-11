(self["webpackChunkclassroom"]=self["webpackChunkclassroom"]||[]).push([[998],{9662:function(t,e,n){var r=n(7854),s=n(614),i=n(6330),o=r.TypeError;t.exports=function(t){if(s(t))return t;throw o(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(7854),s=n(614),i=r.String,o=r.TypeError;t.exports=function(t){if("object"==typeof t||s(t))return t;throw o("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),s=n(30),i=n(3070).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&i(a,o,{configurable:!0,value:s(null)}),t.exports=function(t){a[o][t]=!0}},5787:function(t,e,n){var r=n(7854),s=n(7976),i=r.TypeError;t.exports=function(t,e){if(s(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(7854),s=n(111),i=r.String,o=r.TypeError;t.exports=function(t){if(s(t))return t;throw o(i(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,s,i,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),g=n(8052),m=n(3070).f,y=n(7976),v=n(9518),w=n(7674),b=n(5112),_=n(9711),E=c.Int8Array,I=E&&E.prototype,T=c.Uint8ClampedArray,S=T&&T.prototype,A=E&&v(E),x=I&&v(I),C=Object.prototype,k=c.TypeError,D=b("toStringTag"),N=_("TYPED_ARRAY_TAG"),R=_("TYPED_ARRAY_CONSTRUCTOR"),O=o&&!!w&&"Opera"!==d(c.opera),M=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},P={BigInt64Array:8,BigUint64Array:8},F=function(t){if(!l(t))return!1;var e=d(t);return"DataView"===e||h(L,e)||h(P,e)},V=function(t){if(!l(t))return!1;var e=d(t);return h(L,e)||h(P,e)},U=function(t){if(V(t))return t;throw k("Target is not a typed array")},B=function(t){if(u(t)&&(!w||y(A,t)))return t;throw k(f(t)+" is not a typed array constructor")},j=function(t,e,n,r){if(a){if(n)for(var s in L){var i=c[s];if(i&&h(i.prototype,t))try{delete i.prototype[t]}catch(o){try{i.prototype[t]=e}catch(u){}}}x[t]&&!n||g(x,t,n?e:O&&I[t]||e,r)}},q=function(t,e,n){var r,s;if(a){if(w){if(n)for(r in L)if(s=c[r],s&&h(s,t))try{delete s[t]}catch(i){}if(A[t]&&!n)return;try{return g(A,t,n?e:O&&A[t]||e)}catch(i){}}for(r in L)s=c[r],!s||s[t]&&!n||g(s,t,e)}};for(r in L)s=c[r],i=s&&s.prototype,i?p(i,R,s):O=!1;for(r in P)s=c[r],i=s&&s.prototype,i&&p(i,R,s);if((!O||!u(A)||A===Function.prototype)&&(A=function(){throw k("Incorrect invocation")},O))for(r in L)c[r]&&w(c[r],A);if((!O||!x||x===C)&&(x=A.prototype,O))for(r in L)c[r]&&w(c[r].prototype,x);if(O&&v(S)!==x&&w(S,x),a&&!h(x,D))for(r in M=!0,m(x,D,{get:function(){return l(this)?this[N]:void 0}}),L)c[r]&&p(c[r],N,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_CONSTRUCTOR:R,TYPED_ARRAY_TAG:M&&N,aTypedArray:U,aTypedArrayConstructor:B,exportTypedArrayMethod:j,exportTypedArrayStaticMethod:q,isView:F,isTypedArray:V,TypedArray:A,TypedArrayPrototype:x}},1318:function(t,e,n){var r=n(5656),s=n(1400),i=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=i(c),l=s(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4326:function(t,e,n){var r=n(1702),s=r({}.toString),i=r("".slice);t.exports=function(t){return i(s(t),8,-1)}},648:function(t,e,n){var r=n(7854),s=n(1694),i=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=s?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),s=Error,i=r("".replace),o=function(t){return String(s(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!s.prepareStackTrace)while(e--)t=i(t,a,"");return t}},9920:function(t,e,n){var r=n(2597),s=n(3887),i=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=s(e),c=o.f,u=i.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),s=n(3070),i=n(9114);t.exports=r?function(t,e,n){return s.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),s=n(8880),i=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;return r(n)&&i(n,u,a),a.global?c?t[e]=n:o(e,n):(a.unsafe?t[e]&&(c=!0):delete t[e],c?t[e]=n:s(t,e,n)),t}},3072:function(t,e,n){var r=n(7854),s=Object.defineProperty;t.exports=function(t,e){try{s(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),s=n(111),i=r.document,o=s(i)&&s(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,s,i=n(7854),o=n(8113),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),s=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!s&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(s=+r[1]))),t.exports=s},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),s=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",s(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),s=n(1236).f,i=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,d,f,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=s(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&i(f,"sham",!0),o(l,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),s=Function.prototype,i=s.apply,o=s.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(i):function(){return o.apply(i,arguments)})},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),s=Function.prototype.call;t.exports=r?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(t,e,n){var r=n(9781),s=n(2597),i=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=s(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),s=Function.prototype,i=s.bind,o=s.call,a=r&&i.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),s=n(614),i=function(t){return s(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),s=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(s(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),s=n(7293),i=n(317);t.exports=!r&&!s((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),s=n(1702),i=n(7293),o=n(4326),a=r.Object,c=s("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},9587:function(t,e,n){var r=n(614),s=n(111),i=n(7674);t.exports=function(t,e,n){var o,a;return i&&r(o=e.constructor)&&o!==n&&s(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},2788:function(t,e,n){var r=n(1702),s=n(614),i=n(5465),o=r(Function.toString);s(i.inspectSource)||(i.inspectSource=function(t){return o(t)}),t.exports=i.inspectSource},8340:function(t,e,n){var r=n(111),s=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&s(t,"cause",e.cause)}},9909:function(t,e,n){var r,s,i,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),g="Object already initialized",m=a.TypeError,y=a.WeakMap,v=function(t){return i(t)?s(t):r(t,{})},w=function(t){return function(e){var n;if(!u(e)||(n=s(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var b=d.state||(d.state=new y),_=c(b.get),E=c(b.has),I=c(b.set);r=function(t,e){if(E(b,t))throw new m(g);return e.facade=t,I(b,t,e),e},s=function(t){return _(b,t)||{}},i=function(t){return E(b,t)}}else{var T=f("state");p[T]=!0,r=function(t,e){if(h(t,T))throw new m(g);return e.facade=t,l(t,T,e),e},s=function(t){return h(t,T)?t[T]:{}},i=function(t){return h(t,T)}}t.exports={set:r,get:s,has:i,enforce:v,getterFor:w}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),s=n(614),i=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(s(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(7854),s=n(5005),i=n(614),o=n(7976),a=n(3307),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=s("Symbol");return i(e)&&o(e.prototype,c(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),s=n(614),i=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||a&&t.name!==e)&&d(t,"name",{value:e,configurable:!0}),f&&n&&i(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(s){}var r=l(t);return i(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return s(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},133:function(t,e,n){var r=n(7392),s=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!s((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),s=n(614),i=n(2788),o=r.WeakMap;t.exports=s(o)&&/native code/.test(i(o))},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,s=n(9670),i=n(6048),o=n(748),a=n(3501),c=n(490),u=n(317),l=n(6200),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return d+p+h+t+d+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var t=o.length;while(t--)delete b[f][o[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=s(t),n=new m,m[f]=null,n[g]=t):n=b(),void 0===e?n:i.f(n,e)}},6048:function(t,e,n){var r=n(9781),s=n(3353),i=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=r&&!s?Object.defineProperties:function(t,e){o(t);var n,r=a(e),s=c(e),u=s.length,l=0;while(u>l)i.f(t,n=s[l++],r[n]);return t}},3070:function(t,e,n){var r=n(7854),s=n(9781),i=n(4664),o=n(3353),a=n(9670),c=n(4948),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";e.f=s?o?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=h(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),i)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),s=n(6916),i=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!s(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),s=n(748),i=s.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(7854),s=n(2597),i=n(614),o=n(7908),a=n(6200),c=n(8544),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=o(t);if(s(e,u))return e[u];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),s=n(2597),i=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,l=[];for(n in r)!s(a,n)&&s(r,n)&&c(l,n);while(e.length>u)s(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1956:function(t,e,n){var r=n(6324),s=n(748);t.exports=Object.keys||function(t){return r(t,s)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);e.f=s?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),s=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return s(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(7854),s=n(6916),i=n(614),o=n(111),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!o(r=s(n,t)))return r;if(i(n=t.valueOf)&&!o(r=s(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!o(r=s(n,t)))return r;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),s=n(1702),i=n(8006),o=n(5181),a=n(9670),c=s([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=o.f;return n?c(e,n(t)):e}},2626:function(t,e,n){var r=n(3070).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t,e,n){var r=n(7854),s=r.TypeError;t.exports=function(t){if(void 0==t)throw s("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),s=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=s(t))}},5465:function(t,e,n){var r=n(7854),s=n(3072),i="__core-js_shared__",o=r[i]||s(i,{});t.exports=o},2309:function(t,e,n){var r=n(1913),s=n(5465);(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.7",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.7/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var r=n(9303),s=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?s(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),s=n(4488);t.exports=function(t){return r(s(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),s=Math.min;t.exports=function(t){return t>0?s(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),s=n(4488),i=r.Object;t.exports=function(t){return i(s(t))}},4590:function(t,e,n){var r=n(7854),s=n(3002),i=r.RangeError;t.exports=function(t,e){var n=s(t);if(n%e)throw i("Wrong offset");return n}},3002:function(t,e,n){var r=n(7854),s=n(9303),i=r.RangeError;t.exports=function(t){var e=s(t);if(e<0)throw i("The argument can't be less than 0");return e}},7593:function(t,e,n){var r=n(7854),s=n(6916),i=n(111),o=n(2190),a=n(8173),c=n(2140),u=n(5112),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=s(r,t,e),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),s=n(2190);t.exports=function(t){var e=r(t,"string");return s(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),s=r("toStringTag"),i={};i[s]="z",t.exports="[object z]"===String(i)},1340:function(t,e,n){var r=n(7854),s=n(648),i=r.String;t.exports=function(t){if("Symbol"===s(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t,e,n){var r=n(7854),s=r.String;t.exports=function(t){try{return s(t)}catch(e){return"Object"}}},9711:function(t,e,n){var r=n(1702),s=0,i=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++s+i,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),s=n(7293);t.exports=r&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),s=n(2309),i=n(2597),o=n(9711),a=n(133),c=n(3307),u=s("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!i(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&i(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},9191:function(t,e,n){"use strict";var r=n(5005),s=n(2597),i=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),g=n(9781),m=n(1913);t.exports=function(t,e,n,y){var v="stackTraceLimit",w=y?2:1,b=t.split("."),_=b[b.length-1],E=r.apply(null,b);if(E){var I=E.prototype;if(!m&&s(I,"cause")&&delete I.cause,!n)return E;var T=r("Error"),S=e((function(t,e){var n=h(y?e:t,void 0),r=y?new E(t):new E;return void 0!==n&&i(r,"message",n),p&&i(r,"stack",f(r.stack,2)),this&&o(I,this)&&l(r,this,S),arguments.length>w&&d(r,arguments[w]),r}));if(S.prototype=I,"Error"!==_?a?a(S,T):c(S,T,{name:!0}):g&&v in E&&(u(S,E,v),u(S,E,"prepareStackTrace")),c(S,E),!m)try{I.name!==_&&i(I,"name",_),I.constructor=S}catch(A){}return S}}},2262:function(t,e,n){"use strict";var r=n(2109),s=n(7908),i=n(6244),o=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(t){var e=s(this),n=i(e),r=o(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}}),a("at")},6699:function(t,e,n){"use strict";var r=n(2109),s=n(1318).includes,i=n(7293),o=n(1223),a=i((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(t,e,n){var r=n(2109),s=n(7854),i=n(2104),o=n(9191),a="WebAssembly",c=s[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=o(t,e,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(t){return function(e){return i(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),l("URIError",(function(t){return function(e){return i(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var r=n(2109),s=n(1702),i=n(4488),o=n(9303),a=n(1340),c=n(7293),u=s("".charAt),l=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:l},{at:function(t){var e=a(i(this)),n=e.length,r=o(t),s=r>=0?r:n+r;return s<0||s>=n?void 0:u(e,s)}})},8675:function(t,e,n){"use strict";var r=n(260),s=n(6244),i=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var e=o(this),n=s(e),r=i(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}))},3462:function(t,e,n){"use strict";var r=n(7854),s=n(6916),i=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=i.aTypedArray,g=i.exportTypedArrayMethod,m=!u((function(){var t=new Uint8ClampedArray(2);return s(f,t,{length:1,0:3},1),3!==t[1]})),y=m&&i.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));g("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(m)return s(f,this,n,e);var r=this.length,i=o(n),u=0;if(i+e>r)throw l("Wrong length");while(u<i)this[e+u]=n[u++]}),!m||y)},2801:function(t,e,n){"use strict";var r=n(2109),s=n(5005),i=n(9114),o=n(3070).f,a=n(2597),c=n(5787),u=n(9587),l=n(6277),h=n(3678),d=n(7741),f=n(1913),p="DOMException",g=s("Error"),m=s(p),y=function(){c(this,v);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),r=new m(e,n),s=g(e);return s.name=p,o(r,"stack",i(1,d(s.stack,1))),u(r,this,y),r},v=y.prototype=m.prototype,w="stack"in g(p),b="stack"in new m(1,2),_=w&&!b;r({global:!0,constructor:!0,forced:f||_},{DOMException:_?y:m});var E=s(p),I=E.prototype;if(I.constructor!==E)for(var T in f||o(I,"constructor",i(1,E)),h)if(a(h,T)){var S=h[T],A=S.s;a(E,A)||o(E,A,i(6,S.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return l},G6:function(){return _},L:function(){return a},LL:function(){return A},Mn:function(){return b},Sg:function(){return h},ZB:function(){return c},ZR:function(){return S},b$:function(){return y},d:function(){return v},eu:function(){return I},hl:function(){return E},jU:function(){return g},m9:function(){return P},ne:function(){return R},r3:function(){return k},ru:function(){return m},uI:function(){return f},vZ:function(){return D},w1:function(){return w},z$:function(){return d}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&u(n)&&(t[n]=c(t[n],e[n]));return t}function u(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function p(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function m(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return d().indexOf("Electron/")>=0}function w(){const t=d();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b(){return d().indexOf("MSAppHost/")>=0}function _(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){return"object"===typeof indexedDB}function I(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T="FirebaseError";class S extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=T,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?x(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new S(r,o,n);return a}}function x(t,e){return t.replace(C,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function D(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(N(n)&&N(i)){if(!D(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function N(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){const n=new O(t,e);return n.subscribe.bind(n)}class O{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=M(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function M(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function L(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{Bj:function(){return i},Fl:function(){return $t},IU:function(){return Ct},Jd:function(){return I},PG:function(){return Tt},SU:function(){return Ut},Um:function(){return _t},WL:function(){return jt},X$:function(){return x},X3:function(){return xt},XI:function(){return Pt},Xl:function(){return kt},dq:function(){return Mt},iH:function(){return Lt},j:function(){return S},lk:function(){return T},qj:function(){return bt},qq:function(){return w},yT:function(){return At}});var r=n(7139);let s;class i{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&s&&(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(t){if(this.active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=s){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];c(s)&&!u(s)?s.delete(t):e[n++]=s,s.w&=~p,s.n&=~p}e.length=n}},d=new WeakMap;let f=0,p=1;const g=30;let m;const y=Symbol(""),v=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=m,e=_;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,_=!0,p=1<<++f,f<=g?l(this):b(this),this.fn()}finally{f<=g&&h(this),p=1<<--f,m=this.parent,_=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _=!0;const E=[];function I(){E.push(_),_=!1}function T(){const t=E.pop();_=void 0===t||t}function S(t,e,n){if(_&&m){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const s=void 0;A(r,s)}}function A(t,e){let n=!1;f<=g?u(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function x(t,e,n,s,i,o){const c=d.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&(0,r.kJ)(t))c.forEach(((t,e)=>{("length"===e||e>=s)&&u.push(t)}));else switch(void 0!==n&&u.push(c.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(t)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(t)||(u.push(c.get(y)),(0,r._N)(t)&&u.push(c.get(v)));break;case"set":(0,r._N)(t)&&u.push(c.get(y));break}if(1===u.length)u[0]&&C(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);C(a(t))}}function C(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&k(r,e);for(const r of n)r.computed||k(r,e)}function k(t,e){(t!==m||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const D=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),R=F(),O=F(!1,!0),M=F(!0),L=P();function P(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Ct(this);for(let e=0,s=this.length;e<s;e++)S(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Ct)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){I();const n=Ct(this)[e].apply(this,t);return T(),n}})),t}function F(t=!1,e=!1){return function(n,s,i){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&i===(t?e?yt:mt:e?gt:pt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(L,s))return Reflect.get(L,s,i);const a=Reflect.get(n,s,i);return((0,r.yk)(s)?N.has(s):D(s))?a:(t||S(n,"get",s),e?a:Mt(a)?o&&(0,r.S0)(s)?a:a.value:(0,r.Kn)(a)?t?Et(a):bt(a):a)}}const V=B(),U=B(!0);function B(t=!1){return function(e,n,s,i){let o=e[n];if(St(o)&&Mt(o)&&!Mt(s))return!1;if(!t&&!St(s)&&(At(s)||(s=Ct(s),o=Ct(o)),!(0,r.kJ)(e)&&Mt(o)&&!Mt(s)))return o.value=s,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,s,i);return e===Ct(i)&&(a?(0,r.aU)(s,o)&&x(e,"set",n,s,o):x(e,"add",n,s)),c}}function j(t,e){const n=(0,r.RI)(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&x(t,"delete",e,void 0,s),i}function q(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&N.has(e)||S(t,"has",e),n}function $(t){return S(t,"iterate",(0,r.kJ)(t)?"length":y),Reflect.ownKeys(t)}const G={get:R,set:V,deleteProperty:j,has:q,ownKeys:$},K={get:M,set(t,e){return!0},deleteProperty(t,e){return!0}},z=(0,r.l7)({},G,{get:O,set:U}),W=t=>t,H=t=>Reflect.getPrototypeOf(t);function Q(t,e,n=!1,r=!1){t=t["__v_raw"];const s=Ct(t),i=Ct(e);n||(e!==i&&S(s,"get",e),S(s,"get",i));const{has:o}=H(s),a=r?W:n?Nt:Dt;return o.call(s,e)?a(t.get(e)):o.call(s,i)?a(t.get(i)):void(t!==s&&t.get(e))}function Y(t,e=!1){const n=this["__v_raw"],r=Ct(n),s=Ct(t);return e||(t!==s&&S(r,"has",t),S(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function J(t,e=!1){return t=t["__v_raw"],!e&&S(Ct(t),"iterate",y),Reflect.get(t,"size",t)}function X(t){t=Ct(t);const e=Ct(this),n=H(e),r=n.has.call(e,t);return r||(e.add(t),x(e,"add",t,t)),this}function Z(t,e){e=Ct(e);const n=Ct(this),{has:s,get:i}=H(n);let o=s.call(n,t);o||(t=Ct(t),o=s.call(n,t));const a=i.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&x(n,"set",t,e,a):x(n,"add",t,e),this}function tt(t){const e=Ct(this),{has:n,get:r}=H(e);let s=n.call(e,t);s||(t=Ct(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&x(e,"delete",t,void 0,i),o}function et(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&x(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const s=this,i=s["__v_raw"],o=Ct(i),a=e?W:t?Nt:Dt;return!t&&S(o,"iterate",y),i.forEach(((t,e)=>n.call(r,a(t),a(e),s)))}}function rt(t,e,n){return function(...s){const i=this["__v_raw"],o=Ct(i),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...s),h=n?W:e?Nt:Dt;return!e&&S(o,"iterate",u?v:y),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return"delete"!==t&&this}}function it(){const t={get(t){return Q(this,t)},get size(){return J(this)},has:Y,add:X,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return Q(this,t,!1,!0)},get size(){return J(this)},has:Y,add:X,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return Q(this,t,!0)},get size(){return J(this,!0)},has(t){return Y.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!1)},r={get(t){return Q(this,t,!0,!0)},get size(){return J(this,!0)},has(t){return Y.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{t[s]=rt(s,!1,!1),n[s]=rt(s,!0,!1),e[s]=rt(s,!1,!0),r[s]=rt(s,!0,!0)})),[t,n,e,r]}const[ot,at,ct,ut]=it();function lt(t,e){const n=e?t?ut:ct:t?at:ot;return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,r.RI)(n,s)&&s in e?n:e,s,i)}const ht={get:lt(!1,!1)},dt={get:lt(!1,!0)},ft={get:lt(!0,!1)};const pt=new WeakMap,gt=new WeakMap,mt=new WeakMap,yt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,r.W7)(t))}function bt(t){return St(t)?t:It(t,!1,G,ht,pt)}function _t(t){return It(t,!1,z,dt,gt)}function Et(t){return It(t,!0,K,ft,mt)}function It(t,e,n,s,i){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return i.set(t,c),c}function Tt(t){return St(t)?Tt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function St(t){return!(!t||!t["__v_isReadonly"])}function At(t){return!(!t||!t["__v_isShallow"])}function xt(t){return Tt(t)||St(t)}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function kt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Dt=t=>(0,r.Kn)(t)?bt(t):t,Nt=t=>(0,r.Kn)(t)?Et(t):t;function Rt(t){_&&m&&(t=Ct(t),A(t.dep||(t.dep=a())))}function Ot(t,e){t=Ct(t),t.dep&&C(t.dep)}function Mt(t){return!(!t||!0!==t.__v_isRef)}function Lt(t){return Ft(t,!1)}function Pt(t){return Ft(t,!0)}function Ft(t,e){return Mt(t)?t:new Vt(t,e)}class Vt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ct(t),this._value=e?t:Dt(t)}get value(){return Rt(this),this._value}set value(t){t=this.__v_isShallow?t:Ct(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Dt(t),Ot(this,t))}}function Ut(t){return Mt(t)?t.value:t}const Bt={get:(t,e,n)=>Ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Mt(s)&&!Mt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jt(t){return Tt(t)?t:new Proxy(t,Bt)}class qt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(t,(()=>{this._dirty||(this._dirty=!0,Ot(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Ct(this);return Rt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function $t(t,e,n=!1){let s,i;const o=(0,r.mf)(t);o?(s=t,i=r.dG):(s=t.get,i=t.set);const a=new qt(s,i,o||!i,n);return a}},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},FN:function(){return pn},Fl:function(){return Dn},HY:function(){return Me},JJ:function(){return Q},Ko:function(){return qt},P$:function(){return ot},Q6:function(){return dt},U2:function(){return ct},Us:function(){return Ce},Wm:function(){return Ze},Y3:function(){return E},Y8:function(){return rt},YP:function(){return X},_:function(){return Xe},aZ:function(){return ft},f3:function(){return Y},h:function(){return Nn},iD:function(){return Ke},ic:function(){return Ct},j4:function(){return ze},nK:function(){return ht},up:function(){return Vt},wg:function(){return Be},wy:function(){return Lt}});n(6699),n(1703);var r=n(4870),s=n(7139);function i(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){a(i,e,n)}return s}function o(t,e,n,r){if((0,s.mf)(t)){const o=i(t,e,n,r);return o&&(0,s.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let s=0;s<t.length;s++)c.push(o(t[s],e,n,r));return c}function a(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void i(a,null,10,[t,s,o])}c(t,n,s,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=[];let y=null,v=0;const w=Promise.resolve();let b=null,_=null;function E(t){const e=b||w;return t?e.then(this?t.bind(this):t):e}function I(t){let e=d+1,n=h.length;while(e<n){const r=e+n>>>1,s=R(h[r]);s<t?e=r+1:n=r}return e}function T(t){h.length&&h.includes(t,u&&t.allowRecurse?d+1:d)||t===_||(null==t.id?h.push(t):h.splice(I(t.id),0,t),S())}function S(){u||l||(l=!0,b=w.then(O))}function A(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function x(t,e,n,r){(0,s.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),S()}function C(t){x(t,p,f,g)}function k(t){x(t,y,m,v)}function D(t,e=null){if(f.length){for(_=e,p=[...new Set(f)],f.length=0,g=0;g<p.length;g++)p[g]();p=null,g=0,_=null,D(t,e)}}function N(t){if(D(),m.length){const t=[...new Set(m)];if(m.length=0,y)return void y.push(...t);for(y=t,y.sort(((t,e)=>R(t)-R(e))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const R=t=>null==t.id?1/0:t.id;function O(t){l=!1,u=!0,D(t),h.sort(((t,e)=>R(t)-R(e)));s.dG;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&i(t,null,14)}}finally{d=0,h.length=0,N(t),u=!1,b=null,(h.length||f.length||m.length)&&O(t)}}new Set;new Map;function M(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||s.kT;let i=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||s.kT;o&&(i=n.map((t=>t.trim()))),e&&(i=n.map(s.He))}let u;let l=r[u=(0,s.hR)(e)]||r[u=(0,s.hR)((0,s._A)(e))];!l&&a&&(l=r[u=(0,s.hR)((0,s.rs)(e))]),l&&o(l,t,6,i);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,i)}}function L(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!(0,s.mf)(t)){const r=t=>{const n=L(t,e,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((t=>a[t]=null)):(0,s.l7)(a,o),r.set(t,a),a):(r.set(t,null),null)}function P(t,e){return!(!t||!(0,s.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,s.RI)(t,(0,s.rs)(e))||(0,s.RI)(t,e))}let F=null,V=null;function U(t){const e=F;return F=t,V=t&&t.type.__scopeId||null,e}function B(t,e=F,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&$e(-1);const s=U(e),i=t(...n);return U(s),r._d&&$e(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function j(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let v,w;const b=U(t);try{if(4&n.shapeFlag){const t=i||r;v=sn(d.call(t,t,f,o,g,p,m)),w=l}else{const t=e;0,v=sn(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:q(l)}}catch(E){Ve.length=0,a(E,t,1),v=Ze(Pe)}let _=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=_;t.length&&7&e&&(c&&t.some(s.tR)&&(w=$(w,c)),_=nn(_,w))}return n.dirs&&(_=nn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,U(b),v}const q=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.F7)(n))&&((e||(e={}))[n]=t[n]);return e},$=(t,e)=>{const n={};for(const r in t)(0,s.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function G(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||K(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?K(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!P(u,n))return!0}}return!1}function K(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!P(n,i))return!0}return!1}function z({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const W=t=>t.__isSuspense;function H(t,e){e&&e.pendingBranch?(0,s.kJ)(t)?e.effects.push(...t):e.effects.push(t):k(t)}function Q(t,e){if(fn){let n=fn.provides;const r=fn.parent&&fn.parent.provides;r===n&&(n=fn.provides=Object.create(r)),n[t]=e}else 0}function Y(t,e,n=!1){const r=fn||F;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,s.mf)(e)?e.call(r.proxy):e}else 0}const J={};function X(t,e,n){return Z(t,e,n)}function Z(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=s.kT){const h=fn;let d,f,p=!1,g=!1;if((0,r.dq)(t)?(d=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,s.kJ)(t)?(g=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?nt(t):(0,s.mf)(t)?i(t,h,2):void 0))):d=(0,s.mf)(t)?e?()=>i(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(t,h,3,[m])}:s.dG,e&&a){const t=d;d=()=>nt(t())}let m=t=>{f=b.onStop=()=>{i(t,h,4)}};if(bn)return m=s.dG,e?n&&o(e,h,3,[d(),g?[]:void 0,m]):d(),s.dG;let y=g?[]:J;const v=()=>{if(b.active)if(e){const t=b.run();(a||p||(g?t.some(((t,e)=>(0,s.aU)(t,y[e]))):(0,s.aU)(t,y)))&&(f&&f(),o(e,h,3,[t,y===J?void 0:y,m]),y=t)}else b.run()};let w;v.allowRecurse=!!e,w="sync"===c?v:"post"===c?()=>xe(v,h&&h.suspense):()=>C(v);const b=new r.qq(d,w);return e?n?v():y=b.run():"post"===c?xe(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,b)}}function tt(t,e,n){const r=this.proxy,i=(0,s.HD)(t)?t.includes(".")?et(r,t):()=>r[t]:t.bind(r,r);let o;(0,s.mf)(e)?o=e:(o=e.handler,n=e);const a=fn;gn(this);const c=Z(i,o.bind(r),n);return a?gn(a):mn(),c}function et(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function nt(t,e){if(!(0,s.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))nt(t.value,e);else if((0,s.kJ)(t))for(let n=0;n<t.length;n++)nt(t[n],e);else if((0,s.DM)(t)||(0,s._N)(t))t.forEach((t=>{nt(t,e)}));else if((0,s.PO)(t))for(const n in t)nt(t[n],e);return t}function rt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return At((()=>{t.isMounted=!0})),kt((()=>{t.isUnmounting=!0})),t}const st=[Function,Array],it={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:st,onEnter:st,onAfterEnter:st,onEnterCancelled:st,onBeforeLeave:st,onLeave:st,onAfterLeave:st,onLeaveCancelled:st,onBeforeAppear:st,onAppear:st,onAfterAppear:st,onAppearCancelled:st},setup(t,{slots:e}){const n=pn(),s=rt();let i;return()=>{const o=e.default&&dt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Pe){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(s.isLeaving)return ut(a);const l=lt(a);if(!l)return ut(a);const h=ct(l,c,s,n);ht(l,h);const d=n.subTree,f=d&&lt(d);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===i?i=t:t!==i&&(i=t,p=!0)}if(f&&f.type!==Pe&&(!He(l,f)||p)){const t=ct(f,c,s,n);if(ht(f,t),"out-in"===u)return s.isLeaving=!0,t.afterLeave=()=>{s.isLeaving=!1,n.update()},ut(a);"in-out"===u&&l.type!==Pe&&(t.delayLeave=(t,e,n)=>{const r=at(s,f);r[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ot=it;function at(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ct(t,e,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,_=String(t.key),E=at(n,t),I=(t,e)=>{t&&o(t,r,9,e)},T=(t,e)=>{const n=e[1];I(t,e),(0,s.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!i)return;r=y||u}e._leaveCb&&e._leaveCb(!0);const s=E[_];s&&He(t,s)&&s.el._leaveCb&&s.el._leaveCb(),I(r,[e])},enter(t){let e=l,r=h,s=d;if(!n.isMounted){if(!i)return;e=v||l,r=w||h,s=b||d}let o=!1;const a=t._enterCb=e=>{o||(o=!0,I(e?s:r,[t]),S.delayedLeave&&S.delayedLeave(),t._enterCb=void 0)};e?T(e,[t,a]):a()},leave(e,r){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();I(f,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,r(),I(n?m:g,[e]),e._leaveCb=void 0,E[s]===t&&delete E[s])};E[s]=t,p?T(p,[e,o]):o()},clone(t){return ct(t,e,n,r)}};return S}function ut(t){if(gt(t))return t=nn(t),t.children=null,t}function lt(t){return gt(t)?t.children?t.children[0]:void 0:t}function ht(t,e){6&t.shapeFlag&&t.component?ht(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dt(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Me?(128&o.patchFlag&&s++,r=r.concat(dt(o.children,e,a))):(e||o.type!==Pe)&&r.push(null!=a?nn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ft(t){return(0,s.mf)(t)?{setup:t,name:t.name}:t}const pt=t=>!!t.type.__asyncLoader;const gt=t=>t.type.__isKeepAlive;RegExp,RegExp;function mt(t,e){return(0,s.kJ)(t)?t.some((t=>mt(t,e))):(0,s.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function yt(t,e){wt(t,"a",e)}function vt(t,e){wt(t,"da",e)}function wt(t,e,n=fn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(It(e,r,n),n){let t=n.parent;while(t&&t.parent)gt(t.parent.vnode)&&bt(r,e,n,t),t=t.parent}}function bt(t,e,n,r){const i=It(e,t,r,!0);Dt((()=>{(0,s.Od)(r[e],i)}),n)}function _t(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Et(t){return 128&t.shapeFlag?t.ssContent:t}function It(t,e,n=fn,s=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),gn(n);const i=o(e,n,t,s);return mn(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const Tt=t=>(e,n=fn)=>(!bn||"sp"===t)&&It(t,e,n),St=Tt("bm"),At=Tt("m"),xt=Tt("bu"),Ct=Tt("u"),kt=Tt("bum"),Dt=Tt("um"),Nt=Tt("sp"),Rt=Tt("rtg"),Ot=Tt("rtc");function Mt(t,e=fn){It("ec",t,e)}function Lt(t,e){const n=F;if(null===n)return t;const r=xn(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=s.kT]=e[o];(0,s.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&nt(n),i.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Pt(t,e,n,s){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[s];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}const Ft="components";function Vt(t,e){return Bt(Ft,t,!0,e)||t}const Ut=Symbol();function Bt(t,e,n=!0,r=!1){const i=F||fn;if(i){const n=i.type;if(t===Ft){const t=Cn(n);if(t&&(t===e||t===(0,s._A)(e)||t===(0,s.kC)((0,s._A)(e))))return n}const o=jt(i[t]||n[t],e)||jt(i.appContext[t],e);return!o&&r?n:o}}function jt(t,e){return t&&(t[e]||t[(0,s._A)(e)]||t[(0,s.kC)((0,s._A)(e))])}function qt(t,e,n,r){let i;const o=n&&n[r];if((0,s.kJ)(t)||(0,s.HD)(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(t))if(t[Symbol.iterator])i=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=e(t[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}const $t=t=>t?yn(t)?xn(t)||t.proxy:$t(t.parent):null,Gt=(0,s.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$t(t.parent),$root:t=>$t(t.root),$emit:t=>t.emit,$options:t=>Jt(t),$forceUpdate:t=>t.f||(t.f=()=>T(t.update)),$nextTick:t=>t.n||(t.n=E.bind(t.proxy)),$watch:t=>tt.bind(t)}),Kt={get({_:t},e){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return i[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(i!==s.kT&&(0,s.RI)(i,e))return c[e]=1,i[e];if(o!==s.kT&&(0,s.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,s.RI)(h,e))return c[e]=3,a[e];if(n!==s.kT&&(0,s.RI)(n,e))return c[e]=4,n[e];zt&&(c[e]=0)}}const d=Gt[e];let f,p;return d?("$attrs"===e&&(0,r.j)(t,"get",e),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==s.kT&&(0,s.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,s.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return i!==s.kT&&(0,s.RI)(i,e)?(i[e]=n,!0):r!==s.kT&&(0,s.RI)(r,e)?(r[e]=n,!0):!(0,s.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==s.kT&&(0,s.RI)(t,a)||e!==s.kT&&(0,s.RI)(e,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)(Gt,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let zt=!0;function Wt(t){const e=Jt(t),n=t.proxy,i=t.ctx;zt=!1,e.beforeCreate&&Qt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:I,renderTracked:T,renderTriggered:S,errorCaptured:A,serverPrefetch:x,expose:C,inheritAttrs:k,components:D,directives:N,filters:R}=e,O=null;if(h&&Ht(h,i,O,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,s.mf)(t)&&(i[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Kn)(e)&&(t.data=(0,r.qj)(e))}if(zt=!0,a)for(const r in a){const t=a[r],e=(0,s.mf)(t)?t.bind(n,n):(0,s.mf)(t.get)?t.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(t)&&(0,s.mf)(t.set)?t.set.bind(n):s.dG,c=Dn({get:e,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Yt(u[r],i,n,r);if(l){const t=(0,s.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{Q(e,t[e])}))}function M(t,e){(0,s.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Qt(d,t,"c"),M(St,f),M(At,p),M(xt,g),M(Ct,m),M(yt,y),M(vt,v),M(Mt,A),M(Ot,T),M(Rt,S),M(kt,b),M(Dt,E),M(Nt,x),(0,s.kJ)(C))if(C.length){const e=t.exposed||(t.exposed={});C.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});I&&t.render===s.dG&&(t.render=I),null!=k&&(t.inheritAttrs=k),D&&(t.components=D),N&&(t.directives=N)}function Ht(t,e,n=s.dG,i=!1){(0,s.kJ)(t)&&(t=ne(t));for(const o in t){const n=t[o];let a;a=(0,s.Kn)(n)?"default"in n?Y(n.from||o,n.default,!0):Y(n.from||o):Y(n),(0,r.dq)(a)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Qt(t,e,n){o((0,s.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Yt(t,e,n,r){const i=r.includes(".")?et(n,r):()=>n[r];if((0,s.HD)(t)){const n=e[t];(0,s.mf)(n)&&X(i,n)}else if((0,s.mf)(t))X(i,t.bind(n));else if((0,s.Kn)(t))if((0,s.kJ)(t))t.forEach((t=>Yt(t,e,n,r)));else{const r=(0,s.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.mf)(r)&&X(i,r,t)}else 0}function Jt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:s.length||n||r?(c={},s.length&&s.forEach((t=>Xt(c,t,o,!0))),Xt(c,e,o)):c=e,i.set(e,c),c}function Xt(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xt(t,i,n,!0),s&&s.forEach((e=>Xt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Zt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Zt={data:te,props:se,emits:se,methods:se,computed:se,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:se,directives:se,watch:ie,provide:te,inject:ee};function te(t,e){return e?t?function(){return(0,s.l7)((0,s.mf)(t)?t.call(this,this):t,(0,s.mf)(e)?e.call(this,this):e)}:e:t}function ee(t,e){return se(ne(t),ne(e))}function ne(t){if((0,s.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function re(t,e){return t?[...new Set([].concat(t,e))]:e}function se(t,e){return t?(0,s.l7)((0,s.l7)(Object.create(null),t),e):e}function ie(t,e){if(!t)return e;if(!e)return t;const n=(0,s.l7)(Object.create(null),t);for(const r in e)n[r]=re(t[r],e[r]);return n}function oe(t,e,n,i=!1){const o={},a={};(0,s.Nj)(a,Qe,1),t.propsDefaults=Object.create(null),ce(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function ae(t,e,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;ce(t,e,o,a)&&(h=!0);for(const i in u)e&&((0,s.RI)(e,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(e,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(o[i]=ue(l,u,i,void 0,t,!0)):delete o[i]);if(a!==u)for(const t in a)e&&(0,s.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(P(t.emitsOptions,i))continue;const c=e[i];if(l)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const e=(0,s._A)(i);o[e]=ue(l,u,e,c,t,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function ce(t,e,n,i){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,s.Gg)(r))continue;const l=e[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:P(t.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ue(o,e,c,i[c],t,!(0,s.RI)(i,c))}}return u}function ue(t,e,n,r,i,o){const a=t[n];if(null!=a){const t=(0,s.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,s.mf)(t)){const{propsDefaults:s}=i;n in s?r=s[n]:(gn(i),r=s[n]=t.call(null,e),mn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function le(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!(0,s.mf)(t)){const r=t=>{u=!0;const[n,r]=le(t,e,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return r.set(t,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,s._A)(o[h]);he(t)&&(a[t]=s.kT)}else if(o){0;for(const t in o){const e=(0,s._A)(t);if(he(e)){const n=o[t],r=a[e]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:n;if(r){const t=pe(Boolean,r.type),n=pe(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,s.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return r.set(t,l),l}function he(t){return"$"!==t[0]}function de(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function fe(t,e){return de(t)===de(e)}function pe(t,e){return(0,s.kJ)(e)?e.findIndex((e=>fe(e,t))):(0,s.mf)(e)&&fe(e,t)?0:-1}const ge=t=>"_"===t[0]||"$stable"===t,me=t=>(0,s.kJ)(t)?t.map(sn):[sn(t)],ye=(t,e,n)=>{if(e._n)return e;const r=B(((...t)=>me(e(...t))),n);return r._c=!1,r},ve=(t,e,n)=>{const r=t._ctx;for(const i in t){if(ge(i))continue;const n=t[i];if((0,s.mf)(n))e[i]=ye(i,n,r);else if(null!=n){0;const t=me(n);e[i]=()=>t}}},we=(t,e)=>{const n=me(e);t.slots.default=()=>n},be=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,s.Nj)(e,"_",n)):ve(e,t.slots={})}else t.slots={},e&&we(t,e);(0,s.Nj)(t.slots,Qe,1)},_e=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=s.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,s.l7)(i,e),n||1!==t||delete i._):(o=!e.$stable,ve(e,i)),a=e}else e&&(we(t,e),a={default:1});if(o)for(const s in i)ge(s)||s in a||delete i[s]};function Ee(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ie=0;function Te(t,e){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=Ee(),o=new Set;let a=!1;const c=i.app={_uid:Ie++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Rn,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,s.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,s.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(s,o,u){if(!a){0;const l=Ze(n,r);return l.appContext=i,o&&e?e(l,s):t(l,s,u),a=!0,c._container=s,s.__vue_app__=c,xn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function Se(t,e,n,o,a=!1){if((0,s.kJ)(t))return void t.forEach(((t,r)=>Se(t,e&&((0,s.kJ)(e)?e[r]:e),n,o,a)));if(pt(o)&&!a)return;const c=4&o.shapeFlag?xn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const d=e&&e.r,f=l.refs===s.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,s.HD)(d)?(f[d]=null,(0,s.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,s.mf)(h))i(h,l,12,[u,f]);else{const e=(0,s.HD)(h),i=(0,r.dq)(h);if(e||i){const i=()=>{if(t.f){const n=e?f[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,s.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=u,(0,s.RI)(p,h)&&(p[h]=u)):(0,r.dq)(h)&&(h.value=u,t.k&&(f[t.k]=u))};u?(i.id=-1,xe(i,n)):i()}else 0}}function Ae(){}const xe=H;function Ce(t){return ke(t)}function ke(t,e){Ae();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=s.dG,cloneNode:m,insertStaticContent:y}=t,v=(t,e,n,r=null,s=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!He(t,e)&&(r=Z(t),H(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Le:w(t,e,n,r);break;case Pe:b(t,e,n,r);break;case Fe:null==t&&_(e,n,r,o);break;case Me:L(t,e,n,r,s,i,o,a,c);break;default:1&h?S(t,e,n,r,s,i,o,a,c):6&h?P(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,s,i,o,a,c,et)}null!=l&&s&&Se(l,t&&t.ref,i,e||t,!e)},w=(t,e,n,r)=>{if(null==t)i(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=l(e.children||""),n,r):e.el=t.el},_=(t,e,n,r)=>{[t.el,t.anchor]=y(t.children,e,n,r,t.el,t.anchor)},E=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=p(t),i(t,n,r),t=s;i(e,n,r)},I=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},S=(t,e,n,r,s,i,o,a,c)=>{o=o||"svg"===e.type,null==t?x(e,n,r,s,i,o,a,c):R(t,e,s,i,o,a,c)},x=(t,e,n,r,o,u,l,h)=>{let f,p;const{type:g,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:_}=t;if(t.el&&void 0!==m&&-1===b)f=t.el=m(t.el);else{if(f=t.el=c(t.type,u,y&&y.is,y),8&v?d(f,t.children):16&v&&k(t.children,f,null,r,o,u&&"foreignObject"!==g,l,h),_&&Pt(t,null,r,"created"),y){for(const e in y)"value"===e||(0,s.Gg)(e)||a(f,e,null,y[e],u,t.children,r,o,X);"value"in y&&a(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&un(p,r,t)}C(f,t,t.scopeId,l,r)}_&&Pt(t,null,r,"beforeMount");const E=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;E&&w.beforeEnter(f),i(f,e,n),((p=y&&y.onVnodeMounted)||E||_)&&xe((()=>{p&&un(p,r,t),E&&w.enter(f),_&&Pt(t,null,r,"mounted")}),o)},C=(t,e,n,r,s)=>{if(n&&g(t,n),r)for(let i=0;i<r.length;i++)g(t,r[i]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;C(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},k=(t,e,n,r,s,i,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?on(t[u]):sn(t[u]);v(null,c,e,n,r,s,i,o,a)}},R=(t,e,n,r,i,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||s.kT,g=e.props||s.kT;let m;n&&De(n,!1),(m=g.onVnodeBeforeUpdate)&&un(m,n,e,t),f&&Pt(e,t,n,"beforeUpdate"),n&&De(n,!0);const y=i&&"foreignObject"!==e.type;if(h?O(t.dynamicChildren,h,u,n,r,y,o):c||q(t,e,u,null,n,r,y,o,!1),l>0){if(16&l)M(u,e,p,g,n,r,i);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,i),4&l&&a(u,"style",p.style,g.style,i),8&l){const s=e.dynamicProps;for(let e=0;e<s.length;e++){const o=s[e],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,i,t.children,n,r,X)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||M(u,e,p,g,n,r,i);((m=g.onVnodeUpdated)||f)&&xe((()=>{m&&un(m,n,e,t),f&&Pt(e,t,n,"updated")}),r)},O=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Me||!He(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,s,i,o,!0)}},M=(t,e,n,r,i,o,c)=>{if(n!==r){for(const u in r){if((0,s.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,i,o,X)}if(n!==s.kT)for(const u in n)(0,s.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,i,o,X);"value"in r&&a(t,"value",n.value,r.value)}},L=(t,e,n,r,s,o,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(i(h,n,r),i(d,n,r),k(e.children,n,d,s,o,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(O(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&Ne(t,e,!0)):q(t,e,n,d,s,o,a,c,l)},P=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):F(e,n,r,s,i,o,c):V(t,e,c)},F=(t,e,n,r,s,i,o)=>{const a=t.component=dn(t,r,s);if(gt(t)&&(a.ctx.renderer=et),_n(a),a.asyncDep){if(s&&s.registerDep(a,U),!t.el){const t=a.subTree=Ze(Pe);b(null,t,e,n)}}else U(a,t,e,n,s,i,o)},V=(t,e,n)=>{const r=e.component=t.component;if(G(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,e,n);r.next=e,A(r.update),r.update()}else e.el=t.el,r.vnode=e},U=(t,e,n,i,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:i,parent:u,vnode:l}=t,h=n;0,De(t,!1),n?(n.el=l.el,B(t,n,c)):n=l,r&&(0,s.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&un(e,u,n,l),De(t,!0);const d=j(t);0;const p=t.subTree;t.subTree=d,v(p,d,f(p.el),Z(p),t,o,a),n.el=d.el,null===h&&z(t,d.el),i&&xe(i,o),(e=n.props&&n.props.onVnodeUpdated)&&xe((()=>un(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:d}=t,f=pt(e);if(De(t,!1),l&&(0,s.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&un(r,d,e),De(t,!0),c&&rt){const n=()=>{t.subTree=j(t),rt(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=j(t);0,v(null,r,n,i,t,o,a),e.el=r.el}if(h&&xe(h,o),!f&&(r=u&&u.onVnodeMounted)){const t=e;xe((()=>un(r,d,t)),o)}(256&e.shapeFlag||d&&pt(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&xe(t.a,o),t.isMounted=!0,e=n=i=null}},l=t.effect=new r.qq(u,(()=>T(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,De(t,!0),h()},B=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,ae(t,e.props,s,n),_e(t,e.children,n),(0,r.Jd)(),D(void 0,t.update),(0,r.lk)()},q=(t,e,n,r,s,i,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void K(u,h,n,r,s,i,o,a,c);if(256&f)return void $(u,h,n,r,s,i,o,a,c)}8&p?(16&l&&X(u,s,i),h!==u&&d(n,h)):16&l?16&p?K(u,h,n,r,s,i,o,a,c):X(u,s,i,!0):(8&l&&d(n,""),16&p&&k(h,n,r,s,i,o,a,c))},$=(t,e,n,r,i,o,a,c,u)=>{t=t||s.Z6,e=e||s.Z6;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?on(e[f]):sn(e[f]);v(t[f],r,n,null,i,o,a,c,u)}l>h?X(t,i,o,!0,!1,d):k(e,n,r,i,o,a,c,u,d)},K=(t,e,n,r,i,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],s=e[l]=u?on(e[l]):sn(e[l]);if(!He(r,s))break;v(r,s,n,null,i,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],s=e[f]=u?on(e[f]):sn(e[f]);if(!He(r,s))break;v(r,s,n,null,i,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,s=t<h?e[t].el:r;while(l<=f)v(null,e[l]=u?on(e[l]):sn(e[l]),n,s,i,o,a,c,u),l++}}else if(l>f)while(l<=d)H(t[l],i,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const t=e[l]=u?on(e[l]):sn(e[l]);null!=t.key&&m.set(t.key,l)}let y,w=0;const b=f-g+1;let _=!1,E=0;const I=new Array(b);for(l=0;l<b;l++)I[l]=0;for(l=p;l<=d;l++){const r=t[l];if(w>=b){H(r,i,o,!0);continue}let s;if(null!=r.key)s=m.get(r.key);else for(y=g;y<=f;y++)if(0===I[y-g]&&He(r,e[y])){s=y;break}void 0===s?H(r,i,o,!0):(I[s-g]=l+1,s>=E?E=s:_=!0,v(r,e[s],n,null,i,o,a,c,u),w++)}const T=_?Re(I):s.Z6;for(y=T.length-1,l=b-1;l>=0;l--){const t=g+l,s=e[t],d=t+1<h?e[t+1].el:r;0===I[l]?v(null,s,n,d,i,o,a,c,u):_&&(y<0||l!==T[y]?W(s,n,d,2):y--)}}},W=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void W(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Me){i(o,e,n);for(let t=0;t<u.length;t++)W(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Fe)return void E(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),xe((()=>c.enter(o)),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),u=()=>{t(o,(()=>{a(),s&&s()}))};r?r(o,a,u):u()}else i(o,e,n)},H=(t,e,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&Se(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!pt(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&un(g,e,t),6&l)J(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);f&&Pt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,s,et,r):u&&(i!==Me||h>0&&64&h)?X(u,e,n,!1,!0):(i===Me&&384&h||!s&&16&l)&&X(c,e,n),r&&Q(t)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&xe((()=>{g&&un(g,e,t),f&&Pt(t,null,e,"unmounted")}),n)},Q=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===Me)return void Y(n,r);if(e===Fe)return void I(t);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,o=()=>e(n,i);r?r(t.el,i,o):o()}else i()},Y=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},J=(t,e,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=t;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,H(a,t,e,n)),c&&xe(c,e),xe((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)H(t[o],e,n,r,s)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&H(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),N(),e._vnode=t},et={p:v,um:H,m:W,r:Q,mt:F,mc:k,pc:q,pbc:O,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Te(tt,nt)}}function De({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ne(t,e,n=!1){const r=t.children,i=e.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const t=r[s];let e=i[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[s]=on(i[s]),e.el=t.el),n||Ne(t,e))}}function Re(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const Oe=t=>t.__isTeleport;const Me=Symbol(void 0),Le=Symbol(void 0),Pe=Symbol(void 0),Fe=Symbol(void 0),Ve=[];let Ue=null;function Be(t=!1){Ve.push(Ue=t?null:[])}function je(){Ve.pop(),Ue=Ve[Ve.length-1]||null}let qe=1;function $e(t){qe+=t}function Ge(t){return t.dynamicChildren=qe>0?Ue||s.Z6:null,je(),qe>0&&Ue&&Ue.push(t),t}function Ke(t,e,n,r,s,i){return Ge(Xe(t,e,n,r,s,i,!0))}function ze(t,e,n,r,s){return Ge(Ze(t,e,n,r,s,!0))}function We(t){return!!t&&!0===t.__v_isVNode}function He(t,e){return t.type===e.type&&t.key===e.key}const Qe="__vInternal",Ye=({key:t})=>null!=t?t:null,Je=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,s.HD)(t)||(0,r.dq)(t)||(0,s.mf)(t)?{i:F,r:t,k:e,f:!!n}:t:null;function Xe(t,e=null,n=null,r=0,i=null,o=(t===Me?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ye(e),ref:e&&Je(e),scopeId:V,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(an(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,s.HD)(n)?8:16),qe>0&&!a&&Ue&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Ue.push(u),u}const Ze=tn;function tn(t,e=null,n=null,i=0,o=null,a=!1){if(t&&t!==Ut||(t=Pe),We(t)){const r=nn(t,e,!0);return n&&an(r,n),qe>0&&!a&&Ue&&(6&r.shapeFlag?Ue[Ue.indexOf(t)]=r:Ue.push(r)),r.patchFlag|=-2,r}if(kn(t)&&(t=t.__vccOpts),e){e=en(e);let{class:t,style:n}=e;t&&!(0,s.HD)(t)&&(e.class=(0,s.C_)(t)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),e.style=(0,s.j5)(n))}const c=(0,s.HD)(t)?1:W(t)?128:Oe(t)?64:(0,s.Kn)(t)?4:(0,s.mf)(t)?2:0;return Xe(t,e,n,i,o,c,a,!0)}function en(t){return t?(0,r.X3)(t)||Qe in t?(0,s.l7)({},t):t:null}function nn(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=t,c=e?cn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ye(c),ref:e&&e.ref?n&&i?(0,s.kJ)(i)?i.concat(Je(e)):[i,Je(e)]:Je(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor};return u}function rn(t=" ",e=0){return Ze(Le,null,t,e)}function sn(t){return null==t||"boolean"===typeof t?Ze(Pe):(0,s.kJ)(t)?Ze(Me,null,t.slice()):"object"===typeof t?on(t):Ze(Le,null,String(t))}function on(t){return null===t.el||t.memo?t:nn(t)}function an(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,s.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),an(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Qe in e?3===r&&F&&(1===F.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=F}}else(0,s.mf)(e)?(e={default:e,_ctx:F},n=32):(e=String(e),64&r?(n=16,e=[rn(e)]):n=8);t.children=e,t.shapeFlag|=n}function cn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,s.C_)([e.class,r.class]));else if("style"===t)e.style=(0,s.j5)([e.style,r.style]);else if((0,s.F7)(t)){const n=e[t],i=r[t];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function un(t,e,n,r=null){o(t,e,7,[n,r])}const ln=Ee();let hn=0;function dn(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||ln,a={uid:hn++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:le(i,o),emitsOptions:L(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=M.bind(null,a),t.ce&&t.ce(a),a}let fn=null;const pn=()=>fn||F,gn=t=>{fn=t,t.scope.on()},mn=()=>{fn&&fn.scope.off(),fn=null};function yn(t){return 4&t.vnode.shapeFlag}let vn,wn,bn=!1;function _n(t,e=!1){bn=e;const{props:n,children:r}=t.vnode,s=yn(t);oe(t,n,s,e),be(t,r);const i=s?En(t,e):void 0;return bn=!1,i}function En(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,Kt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?An(t):null;gn(t),(0,r.Jd)();const c=i(o,t,0,[t.props,n]);if((0,r.lk)(),mn(),(0,s.tI)(c)){if(c.then(mn,mn),e)return c.then((n=>{In(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else In(t,c,e)}else Tn(t,e)}function In(t,e,n){(0,s.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Tn(t,n)}function Tn(t,e,n){const i=t.type;if(!t.render){if(!e&&vn&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=vn(e,c)}}t.render=i.render||s.dG,wn&&wn(t)}gn(t),(0,r.Jd)(),Wt(t),(0,r.lk)(),mn()}function Sn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function An(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Sn(t))},slots:t.slots,emit:t.emit,expose:e}}function xn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Gt?Gt[n](t):void 0}}))}function Cn(t){return(0,s.mf)(t)&&t.displayName||t.name}function kn(t){return(0,s.mf)(t)&&"__vccOpts"in t}const Dn=(t,e)=>(0,r.Fl)(t,e,bn);function Nn(t,e,n){const r=arguments.length;return 2===r?(0,s.Kn)(e)&&!(0,s.kJ)(e)?We(e)?Ze(t,null,[e]):Ze(t,e):Ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&We(n)&&(n=[n]),Ze(t,e,n))}Symbol("");const Rn="3.2.36"},9242:function(t,e,n){"use strict";n.d(e,{bM:function(){return tt},ri:function(){return ot}});n(6699);var r=n(7139),s=n(3396);n(4870);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?o.createElementNS(i,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const s=a.content;if(r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const s=t.style,i=(0,r.HD)(n);if(n&&!i){for(const t in n)d(s,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&d(s,t,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const h=/\s*!important$/;function d(t,e,n){if((0,r.kJ)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=g(t,e);h.test(n)?t.setProperty((0,r.rs)(s),n.replace(h,""),"important"):t[s]=n}}const f=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let s=(0,r._A)(e);if("filter"!==s&&s in t)return p[e]=s;s=(0,r.kC)(s);for(let r=0;r<f.length;r++){const n=f[r]+s;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function y(t,e,n,s,i){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const s=(0,r.Pq)(e);null==n||s&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function v(t,e,n,s,i,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const s=typeof t[e];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}const[w,b]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let _=0;const E=Promise.resolve(),I=()=>{_=0},T=()=>_||(E.then(I),_=w());function S(t,e,n,r){t.addEventListener(e,n,r)}function A(t,e,n,r){t.removeEventListener(e,n,r)}function x(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=k(e);if(r){const o=i[e]=D(r,s);S(t,n,o,a)}else o&&(A(t,n,o,a),i[e]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function k(t){let e;if(C.test(t)){let n;e={};while(n=t.match(C))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,r.rs)(t.slice(2)),e]}function D(t,e){const n=t=>{const r=t.timeStamp||w();(b||r>=n.attached-1)&&(0,s.$d)(N(t,n.value),e,5,[t])};return n.value=t,n.attached=T(),n}function N(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const R=/^on[a-z]/,O=(t,e,n,s,i=!1,o,a,c,h)=>{"class"===e?u(t,s,i):"style"===e?l(t,n,s):(0,r.F7)(e)?(0,r.tR)(e)||x(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):M(t,e,s,i))?v(t,e,s,o,a,c,h):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),y(t,e,s,i))};function M(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&R.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!R.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const L="transition",P="animation",F=(t,{slots:e})=>(0,s.h)(s.P$,j(t),e);F.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(F.props=(0,r.l7)({},s.P$.props,V),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),B=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function j(t){const e={};for(const r in t)r in V||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=q(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:E,onBeforeAppear:I=v,onAppear:T=w,onAppearCancelled:S=b}=e,A=(t,e,n)=>{K(t,e?h:c),K(t,e?l:a),n&&n()},x=(t,e)=>{t._isLeaving=!1,K(t,d),K(t,p),K(t,f),e&&e()},C=t=>(e,n)=>{const r=t?T:w,i=()=>A(e,t,n);U(r,[e,i]),z((()=>{K(e,t?u:o),G(e,t?h:c),B(r)||H(e,s,m,i)}))};return(0,r.l7)(e,{onBeforeEnter(t){U(v,[t]),G(t,o),G(t,a)},onBeforeAppear(t){U(I,[t]),G(t,u),G(t,l)},onEnter:C(!1),onAppear:C(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>x(t,e);G(t,d),X(),G(t,f),z((()=>{t._isLeaving&&(K(t,d),G(t,p),B(_)||H(t,s,y,n))})),U(_,[t,n])},onEnterCancelled(t){A(t,!1),U(b,[t])},onAppearCancelled(t){A(t,!0),U(S,[t])},onLeaveCancelled(t){x(t),U(E,[t])}})}function q(t){if(null==t)return null;if((0,r.Kn)(t))return[$(t.enter),$(t.leave)];{const e=$(t);return[e,e]}}function $(t){const e=(0,r.He)(t);return e}function G(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function K(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function z(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let W=0;function H(t,e,n,r){const s=t._endId=++W,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Q(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),i()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,d)}function Q(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),s=r(L+"Delay"),i=r(L+"Duration"),o=Y(s,i),a=r(P+"Delay"),c=r(P+"Duration"),u=Y(a,c);let l=null,h=0,d=0;e===L?o>0&&(l=L,h=o,d=i.length):e===P?u>0&&(l=P,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?L:P:null,d=l?l===L?i.length:c.length:0);const f=l===L&&/\b(transform|all)(,|$)/.test(n[L+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function Y(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>J(e)+J(t[n]))))}function J(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};const tt={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=(0,r.DM)(e);S(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,r.He)(nt(t)):nt(t)));t._assign(t.multiple?i?new Set(e):e:e[0])})),t._assign=Z(s)},mounted(t,{value:e}){et(t,e)},beforeUpdate(t,e,n){t._assign=Z(n)},updated(t,{value:e}){et(t,e)}};function et(t,e){const n=t.multiple;if(!n||(0,r.kJ)(e)||(0,r.DM)(e)){for(let s=0,i=t.options.length;s<i;s++){const i=t.options[s],o=nt(i);if(n)(0,r.kJ)(e)?i.selected=(0,r.hq)(e,o)>-1:i.selected=e.has(o);else if((0,r.WV)(nt(i),e))return void(t.selectedIndex!==s&&(t.selectedIndex=s))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function nt(t){return"_value"in t?t._value:t.value}const rt=(0,r.l7)({patchProp:O},c);let st;function it(){return st||(st=(0,s.Us)(rt))}const ot=(...t)=>{const e=it().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=at(t);if(!s)return;const i=e._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function at(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return f},DM:function(){return R},E9:function(){return rt},F7:function(){return T},Gg:function(){return G},HD:function(){return L},He:function(){return et},Kn:function(){return F},NO:function(){return E},Nj:function(){return tt},Od:function(){return x},PO:function(){return q},Pq:function(){return a},RI:function(){return k},S0:function(){return $},W7:function(){return j},WV:function(){return g},Z6:function(){return b},_A:function(){return W},_N:function(){return N},aU:function(){return X},dG:function(){return _},e1:function(){return i},fY:function(){return r},hR:function(){return J},hq:function(){return m},ir:function(){return Z},j5:function(){return u},kC:function(){return Y},kJ:function(){return D},kT:function(){return w},l7:function(){return A},mf:function(){return M},rs:function(){return Q},tI:function(){return V},tR:function(){return S},yA:function(){return c},yk:function(){return P},zw:function(){return y}});const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=L(r)?d(r):u(r);if(s)for(const t in s)e[t]=s[t]}return e}return L(t)||F(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function f(t){let e="";if(L(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(F(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=g(t[r],e[r]);return n}function g(t,e){if(t===e)return!0;let n=O(t),r=O(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=P(t),r=P(e),n||r)return t===e;if(n=D(t),r=D(e),n||r)return!(!n||!r)&&p(t,e);if(n=F(t),r=F(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function m(t,e){return t.findIndex((t=>g(t,e)))}const y=t=>L(t)?t:null==t?"":D(t)||F(t)&&(t.toString===U||!M(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):N(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:R(e)?{[`Set(${e.size})`]:[...e.values()]}:!F(e)||D(e)||q(e)?e:String(e),w={},b=[],_=()=>{},E=()=>!1,I=/^on[^a-z]/,T=t=>I.test(t),S=t=>t.startsWith("onUpdate:"),A=Object.assign,x=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},C=Object.prototype.hasOwnProperty,k=(t,e)=>C.call(t,e),D=Array.isArray,N=t=>"[object Map]"===B(t),R=t=>"[object Set]"===B(t),O=t=>"[object Date]"===B(t),M=t=>"function"===typeof t,L=t=>"string"===typeof t,P=t=>"symbol"===typeof t,F=t=>null!==t&&"object"===typeof t,V=t=>F(t)&&M(t.then)&&M(t.catch),U=Object.prototype.toString,B=t=>U.call(t),j=t=>B(t).slice(8,-1),q=t=>"[object Object]"===B(t),$=t=>L(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,G=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},z=/-(\w)/g,W=K((t=>t.replace(z,((t,e)=>e?e.toUpperCase():"")))),H=/\B([A-Z])/g,Q=K((t=>t.replace(H,"-$1").toLowerCase())),Y=K((t=>t.charAt(0).toUpperCase()+t.slice(1))),J=K((t=>t?`on${Y(t)}`:"")),X=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},6780:function(t,e,n){"use strict";n.d(e,{Z:function(){return r.Z}});var r=n(2661),s="firebase",i="9.8.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(s,i,"app-compat")},4406:function(t,e,n){"use strict";n(8675),n(3462);var r,s=n(2661),i=(n(1703),n(2801),n(2262),n(4506),n(6699),n(7077)),o=n(7142),a=n(5168),c=n(223),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(){}function p(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function g(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,y)&&t[y]||(t[y]=++v)}var y="closure_uid_"+(1e9*Math.random()>>>0),v=0;function w(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _(t,e,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:b,_.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function I(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function T(){this.s=this.s,this.o=this.o}var S=0,A={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var t=m(this);delete A[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},C=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function k(t){t:{var e=Wn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function D(t){return Array.prototype.concat.apply([],arguments)}function N(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function R(t){return/^[\s\xa0]*$/.test(t)}var O,M=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function L(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var F=d.navigator;if(F){var V=F.userAgent;if(V){O=V;break t}}O=""}function U(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function B(t){const e={};for(const n in t)e[n]=t[n];return e}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $(t){return $[" "](t),t}function G(t){var e=rt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}$[" "]=f;var K,z=L(O,"Opera"),W=L(O,"Trident")||L(O,"MSIE"),H=L(O,"Edge"),Q=H||W,Y=L(O,"Gecko")&&!(L(O.toLowerCase(),"webkit")&&!L(O,"Edge"))&&!(L(O,"Trident")||L(O,"MSIE"))&&!L(O,"Edge"),J=L(O.toLowerCase(),"webkit")&&!L(O,"Edge");function X(){var t=d.document;return t?t.documentMode:void 0}t:{var Z="",tt=function(){var t=O;return Y?/rv:([^\);]+)(\)|;)/.exec(t):H?/Edge\/([\d\.]+)/.exec(t):W?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):J?/WebKit\/(\S+)/.exec(t):z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(tt&&(Z=tt?tt[1]:""),W){var et=X();if(null!=et&&et>parseFloat(Z)){K=String(et);break t}}K=Z}var nt,rt={};function st(){return G((function(){let t=0;const e=M(String(K)).split("."),n=M("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=P(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||P(0==s[2].length,0==i[2].length)||P(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(d.document&&W){var it=X();nt=it||(parseInt(K,10)||void 0)}else nt=void 0;var ot=nt,at=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{d.addEventListener("test",f,e),d.removeEventListener("test",f,e)}catch(n){}return t}();function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ut(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Y){t:{try{$(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:lt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ut.Z.h.call(this)}}ct.prototype.h=function(){this.defaultPrevented=!0},I(ut,ct);var lt={2:"touch",3:"pen",4:"mouse"};ut.prototype.h=function(){ut.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),dt=0;function ft(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++dt,this.ca=this.fa=!1}function pt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function gt(t){this.src=t,this.g={},this.h=0}function mt(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=x(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(pt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function yt(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}gt.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=yt(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ft(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),wt={};function bt(t,e,n,r,s){if(r&&r.once)return It(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)bt(t,e[i],n,r,s);return null}return n=Dt(n),t&&t[ht]?t.N(e,n,g(r)?!!r.capture:!!r,s):_t(t,e,n,!1,r,s)}function _t(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=g(s)?!!s.capture:!!s,a=Ct(t);if(a||(t[vt]=a=new gt(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Et(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)at||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(At(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Et(){function t(n){return e.call(t.src,t.listener,n)}var e=xt;return t}function It(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)It(t,e[i],n,r,s);return null}return n=Dt(n),t&&t[ht]?t.O(e,n,g(r)?!!r.capture:!!r,s):_t(t,e,n,!0,r,s)}function Tt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Tt(t,e[i],n,r,s);else r=g(r)?!!r.capture:!!r,n=Dt(n),t&&t[ht]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=yt(i,n,r,s),-1<n&&(pt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Ct(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yt(e,n,r,s)),(n=-1<t?e[t]:null)&&St(n))}function St(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ht])mt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(At(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ct(e))?(mt(n,t),0==n.h&&(n.src=null,e[vt]=null)):pt(t)}}}function At(t){return t in wt?wt[t]:wt[t]="on"+t}function xt(t,e){if(t.ca)t=!0;else{e=new ut(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&St(t),t=n.call(r,e)}return t}function Ct(t){return t=t[vt],t instanceof gt?t:null}var kt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dt(t){return"function"===typeof t?t:(t[kt]||(t[kt]=function(e){return t.handleEvent(e)}),t[kt])}function Nt(){T.call(this),this.i=new gt(this),this.P=this,this.I=null}function Rt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var s=e;e=new ct(r,t),q(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ot(o,r,!0,e)&&s}if(o=e.g=t,s=Ot(o,r,!0,e)&&s,s=Ot(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ot(o,r,!1,e)&&s}function Ot(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&mt(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}I(Nt,T),Nt.prototype[ht]=!0,Nt.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},Nt.prototype.M=function(){if(Nt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)pt(n[r]);delete e.g[t],e.h--}}this.I=null},Nt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Mt=d.JSON.stringify;function Lt(){var t=Gt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=Vt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ft,Vt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ut),(t=>t.reset()));class Ut{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Bt(t){d.setTimeout((()=>{throw t}),0)}function jt(t,e){Ft||qt(),$t||(Ft(),$t=!0),Gt.add(t,e)}function qt(){var t=d.Promise.resolve(void 0);Ft=function(){t.then(Kt)}}var $t=!1,Gt=new Pt;function Kt(){for(var t;t=Lt();){try{t.h.call(t.g)}catch(n){Bt(n)}var e=Vt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$t=!1}function zt(t,e){Nt.call(this),this.h=t||1,this.g=e||d,this.j=_(this.kb,this),this.l=Date.now()}function Wt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ht(t,e,n){if("function"===typeof t)n&&(t=_(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_(t.handleEvent,t)}return 2147483647<Number(e)?-1:d.setTimeout(t,e||0)}function Qt(t){t.g=Ht((()=>{t.g=null,t.i&&(t.i=!1,Qt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}I(zt,Nt),r=zt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Rt(this,"tick"),this.da&&(Wt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){zt.Z.M.call(this),Wt(this),delete this.g};class Yt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Qt(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(t){T.call(this),this.h=t,this.g={}}I(Jt,T);var Xt=[];function Zt(t,e,n,r){Array.isArray(n)||(n&&(Xt[0]=n.toString()),n=Xt);for(var s=0;s<n.length;s++){var i=bt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function te(t){U(t.g,(function(t,e){this.g.hasOwnProperty(e)&&St(t)}),t),t.g={}}function ee(){this.g=!0}function ne(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function re(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function se(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+oe(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function oe(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Mt(n)}catch(a){return e}}Jt.prototype.M=function(){Jt.Z.M.call(this),te(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ee.prototype.Aa=function(){this.g=!1},ee.prototype.info=function(){};var ae={},ce=null;function ue(){return ce=ce||new Nt}function le(t){ct.call(this,ae.Ma,t)}function he(t){const e=ue();Rt(e,new le(e,t))}function de(t,e){ct.call(this,ae.STAT_EVENT,t),this.stat=e}function fe(t){const e=ue();Rt(e,new de(e,t))}function pe(t,e){ct.call(this,ae.Na,t),this.size=e}function ge(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){t()}),e)}ae.Ma="serverreachability",I(le,ct),ae.STAT_EVENT="statevent",I(de,ct),ae.Na="timingevent",I(pe,ct);var me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ye={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function we(t){return t.h||(t.h=t.i())}function be(){}ve.prototype.h=null;var _e,Ee={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ie(){ct.call(this,"d")}function Te(){ct.call(this,"c")}function Se(){}function Ae(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Jt(this),this.P=Ce,t=Q?125:void 0,this.W=new zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new xe}function xe(){this.i=null,this.g="",this.h=!1}I(Ie,ct),I(Te,ct),I(Se,ve),Se.prototype.g=function(){return new XMLHttpRequest},Se.prototype.i=function(){return{}},_e=new Se;var Ce=45e3,ke={},De={};function Ne(t,e,n){t.K=1,t.v=nn(Ye(e)),t.s=n,t.U=!0,Re(t,null)}function Re(t,e){t.F=Date.now(),Pe(t),t.A=Ye(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new xe,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Yt(_(t.Ia,t,t.g),t.O)),Zt(t.V,t.g,"readystatechange",t.gb),e=t.H?B(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),he(1),ne(t.j,t.u,t.A,t.m,t.X,t.s)}function Oe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Me(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=Le(t,n),r==De){4==e&&(t.o=4,fe(14),s=!1),se(t.j,t.m,null,"[Incomplete Response]");break}if(r==ke){t.o=4,fe(15),se(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}se(t.j,t.m,r,null),je(t,r)}Oe(t)&&r!=De&&r!=ke&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mr(e),e.L=!0,fe(11))):(se(t.j,t.m,n,"[Invalid Chunked Response]"),Be(t),Ue(t))}function Le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?De:(n=Number(e.substring(n,r)),isNaN(n)?ke:(r+=1,r+n>e.length?De:(e=e.substr(r,n),t.C=r+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Fe(t,t.P)}function Fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ge(_(t.eb,t),e)}function Ve(t){t.B&&(d.clearTimeout(t.B),t.B=null)}function Ue(t){0==t.l.G||t.I||wr(t.l,t)}function Be(t){Ve(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Wt(t.W),te(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||An(n.i,t)))if(n.I=t.N,!t.J&&An(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vr(n),or(n)}gr(n),fe(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=ge(_(n.ab,n),6e3));if(1>=Sn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else _r(n,11)}else if((t.J||n.g==t)&&vr(n),!R(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(L(t,"spdy")||L(t,"quic")||L(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(xn(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,en(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Ir(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ve(a),Pe(a)),r.g=o}else pr(r);0<n.l.length&&ur(n)}else"stop"!=u[0]&&"close"!=u[0]||_r(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?_r(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}he(4)}catch(u){}}function qe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(p(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function $e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(p(t)||"string"===typeof t)C(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(p(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=qe(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Ge(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ge)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ke(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ze(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],ze(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ae.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Zn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Zn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Q||this.g&&(this.h.h||this.g.ga()||tr(this.g)))){this.I||4!=l||7==e||he(8==e||0>=h?3:2),Ve(this);var n=this.g.ba();this.N=n;e:if(Oe(this)){var r=tr(this.g);t="";var s=r.length,i=4==Zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Be(this),Ue(this);var o="";break e}this.h.i=new d.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,re(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,fe(12),Be(this),Ue(this);break t}se(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.U?(Me(this,l,o),Q&&this.i&&3==l&&(Zt(this.V,this.W,"tick",this.fb),this.W.start())):(se(this.j,this.m,o,null),je(this,o)),4==l&&Be(this),this.i&&!this.I&&(4==l?wr(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fe(12)):(this.o=0,fe(13)),Be(this),Ue(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Zn(this.g),e=this.g.ga();this.C<e.length&&(Ve(this),Me(this,t,e),this.i&&4!=t&&Pe(this))}},r.cancel=function(){this.I=!0,Be(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(he(3),fe(17)),Be(this),this.o=2,Ue(this)):Fe(this,this.Y-t)},r=Ge.prototype,r.R=function(){Ke(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ke(this),this.g.concat()},r.get=function(t,e){return ze(this.h,t)?this.h[t]:e},r.set=function(t,e){ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var We=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function He(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Qe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Qe){this.g=void 0!==e?e:t.g,Je(this,t.j),this.s=t.s,Xe(this,t.i),Ze(this,t.m),this.l=t.l,e=t.h;var n=new pn;n.i=e.i,e.g&&(n.g=new Ge(e.g),n.h=e.h),tn(this,n),this.o=t.o}else t&&(n=String(t).match(We))?(this.g=!!e,Je(this,n[1]||"",!0),this.s=on(n[2]||""),Xe(this,n[3]||"",!0),Ze(this,n[4]),this.l=on(n[5]||"",!0),tn(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!e,this.h=new pn(null,this.g))}function Ye(t){return new Qe(t)}function Je(t,e,n){t.j=n?on(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xe(t,e,n){t.i=n?on(e,!0):e}function Ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tn(t,e,n){e instanceof pn?(t.h=e,bn(t.h,t.g)):(n||(e=an(e,dn)),t.h=new pn(e,t.g))}function en(t,e,n){t.h.set(e,n)}function nn(t){return en(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function rn(t){return t instanceof Qe?Ye(t):new Qe(t,void 0)}function sn(t,e,n,r){var s=new Qe(null,void 0);return t&&Je(s,t),e&&Xe(s,e),n&&Ze(s,n),r&&(s.l=r),s}function on(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function an(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,cn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(an(e,un,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(an(e,un,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(an(n,"/"==n.charAt(0)?hn:ln,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",an(n,fn)),t.join("")};var un=/[#\/\?@]/g,ln=/[#\?:]/g,hn=/[#\?]/g,dn=/[#\?@]/g,fn=/#/g;function pn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gn(t){t.g||(t.g=new Ge,t.h=0,t.i&&He(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function mn(t,e){gn(t),e=wn(t,e),ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ke(t)))}function yn(t,e){return gn(t),e=wn(t,e),ze(t.g.h,e)}function vn(t,e,n){mn(t,e),0<n.length&&(t.i=null,t.g.set(wn(t,e),N(n)),t.h+=n.length)}function wn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bn(t,e){e&&!t.j&&(gn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(mn(this,e),vn(this,n,t))}),t)),t.j=e}r=pn.prototype,r.add=function(t,e){gn(this),this.i=null,t=wn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){gn(this),this.g.forEach((function(n,r){C(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){gn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},r.R=function(t){gn(this);var e=[];if("string"===typeof t)yn(this,t)&&(e=D(e,this.g.get(wn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=D(e,t[n])}return e},r.set=function(t,e){return gn(this),this.i=null,t=wn(this,t),yn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var _n=class{constructor(t,e){this.h=t,this.g=e}};function En(t){this.l=t||In,d.PerformanceNavigationTiming?(t=d.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var In=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Sn(t){return t.h?1:t.g?t.g.size:0}function An(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function xn(t,e){t.g?t.g.add(e):t.h=e}function Cn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function kn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N(t.i)}function Dn(){}function Nn(){this.g=new Dn}function Rn(t,e,n){const r=n||"";try{$e(t,(function(t,n){let s=t;g(t)&&(s=Mt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function On(t,e){const n=new ee;if(d.Image){const r=new Image;r.onload=E(Mn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=E(Mn,n,r,"TestLoadImage: error",!1,e),r.onabort=E(Mn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=E(Mn,n,r,"TestLoadImage: timeout",!1,e),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Mn(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Ln(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}En.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Dn.prototype.stringify=function(t){return d.JSON.stringify(t,void 0)},Dn.prototype.parse=function(t){return d.JSON.parse(t,void 0)},I(Ln,ve),Ln.prototype.g=function(){return new Pn(this.l,this.j)},Ln.prototype.i=function(t){return function(){return t}}({}),I(Pn,Nt);var Fn=0;function Vn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Un(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bn(t)}function Bn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Pn.prototype,r.open=function(t,e){if(this.readyState!=Fn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||d).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Un(this)),this.readyState=Fn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Un(this):Bn(this),3==this.readyState&&Vn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Un(this))},r.Ta=function(t){this.g&&(this.response=t,Un(this))},r.ha=function(){this.g&&Un(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jn=d.JSON.parse;function qn(t){Nt.call(this),this.headers=new Ge,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}I(qn,Nt);var $n="",Gn=/^https?$/i,Kn=["POST","PUT"];function zn(t){return W&&st()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Wn(t){return"content-type"==t.toLowerCase()}function Hn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qn(t),Jn(t)}function Qn(t){t.D||(t.D=!0,Rt(t,"complete"),Rt(t,"error"))}function Yn(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=Zn(t)||2!=t.ba()))if(t.v&&4==Zn(t))Ht(t.Fa,0,t);else if(Rt(t,"readystatechange"),4==Zn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var s=String(t.H).match(We)[1]||null;if(!s&&d.self&&d.self.location){var i=d.self.location.protocol;s=i.substr(0,i.length-1)}r=!Gn.test(s?s.toLowerCase():"")}n=r}if(n)Rt(t,"complete"),Rt(t,"success");else{t.m=6;try{var o=2<Zn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Qn(t)}}finally{Jn(t)}}}function Jn(t,e){if(t.g){Xn(t);const r=t.g,s=t.C[0]?f:null;t.g=null,t.C=null,e||Rt(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Xn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(d.clearTimeout(t.A),t.A=null)}function Zn(t){return t.g?t.g.readyState:0}function tr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $n:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function er(t){let e="";return U(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function nr(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=er(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):en(t,e,n))}function rr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sr(t){this.za=0,this.l=[],this.h=new ee,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rr("baseRetryDelayMs",5e3,t),this.$a=rr("retryDelaySeedMs",1e4,t),this.Ya=rr("forwardChannelMaxRetries",2,t),this.ra=rr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new En(t&&t.concurrentRequestLimit),this.Ca=new Nn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(ar(t),3==t.G){var e=t.V++,n=Ye(t.F);en(n,"SID",t.J),en(n,"RID",e),en(n,"TYPE","terminate"),dr(t,n),e=new Ae(t,t.h,e,void 0),e.K=2,e.v=nn(Ye(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(e.v.toString(),"")),!n&&d.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}Er(t)}function or(t){t.g&&(mr(t),t.g.cancel(),t.g=null)}function ar(t){or(t),t.u&&(d.clearTimeout(t.u),t.u=null),vr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&d.clearTimeout(t.m),t.m=null)}function cr(t,e){t.l.push(new _n(t.Za++,e)),3==t.G&&ur(t)}function ur(t){Tn(t.i)||t.m||(t.m=!0,jt(t.Ha,t),t.C=0)}function lr(t,e){return!(Sn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=ge(_(t.Ha,t,e),br(t,t.C)),t.C++,!0))}function hr(t,e){var n;n=e?e.m:t.V++;const r=Ye(t.F);en(r,"SID",t.J),en(r,"RID",n),en(r,"AID",t.U),dr(t,r),t.o&&t.s&&nr(r,t.o,t.s),n=new Ae(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),xn(t.i,n),Ne(n,r,e)}function dr(t,e){t.j&&$e({},(function(t,n){en(e,n,t)}))}function fr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?_(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{Rn(a,t,"req"+n+"_")}catch(ts){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function pr(t){t.g||t.u||(t.Y=1,jt(t.Ga,t),t.A=0)}function gr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ge(_(t.Ga,t),br(t,t.A)),t.A++,!0)}function mr(t){null!=t.B&&(d.clearTimeout(t.B),t.B=null)}function yr(t){t.g=new Ae(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ye(t.oa);en(e,"RID","rpc"),en(e,"SID",t.J),en(e,"CI",t.N?"0":"1"),en(e,"AID",t.U),dr(t,e),en(e,"TYPE","xmlhttp"),t.o&&t.s&&nr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=nn(Ye(e)),n.s=null,n.U=!0,Re(n,t)}function vr(t){null!=t.v&&(d.clearTimeout(t.v),t.v=null)}function wr(t,e){var n=null;if(t.g==e){vr(t),mr(t),t.g=null;var r=2}else{if(!An(t.i,e))return;n=e.D,Cn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ue(),Rt(r,new pe(r,n,e,s)),ur(t)}else pr(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&lr(t,e)||2==r&&gr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:_r(t,5);break;case 4:_r(t,10);break;case 3:_r(t,6);break;default:_r(t,2)}}function br(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function _r(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=_(t.jb,t);n||(n=new Qe("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Je(n,"https"),nn(n)),On(n.toString(),r)}else fe(2);t.G=0,t.j&&t.j.va(e),Er(t),ar(t)}function Er(t){t.G=0,t.I=-1,t.j&&(0==kn(t.i).length&&0==t.l.length||(t.i.i.length=0,N(t.l),t.l.length=0),t.j.ua())}function Ir(t,e,n){let r=rn(n);if(""!=r.i)e&&Xe(r,e+"."+r.i),Ze(r,r.m);else{const t=d.location;r=sn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&U(t.aa,(function(t,e){en(r,e,t)})),e=t.D,n=t.sa,e&&n&&en(r,e,n),en(r,"VER",t.ma),dr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new qn(new Ln({ib:!0})):new qn(t.qa),e.L=t.H,e}function Sr(){}function Ar(){if(W&&!(10<=Number(ot)))throw Error("Environmental error: no available transport.")}function xr(t,e){Nt.call(this),this.g=new sr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Dr(this)}function Cr(t){Ie.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function kr(){Te.call(this),this.status=1}function Dr(t){this.g=t}r=qn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_e.g(),this.C=this.u?we(this.u):we(_e),this.g.onreadystatechange=_(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Hn(this,i)}t=n||"";const s=new Ge(this.headers);r&&$e(r,(function(t,e){s.set(e,t)})),r=k(s.T()),n=d.FormData&&t instanceof d.FormData,!(0<=x(Kn,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.pa,this)):this.A=Ht(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Hn(this,i)}},r.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Rt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Rt(this,"complete"),Rt(this,"abort"),Jn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),qn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Yn(this):this.cb())},r.cb=function(){Yn(this)},r.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=sr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ae(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=B(i),q(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fr(this,s,e),n=Ye(this.F),en(n,"RID",t),en(n,"CVER",22),this.D&&en(n,"X-HTTP-Session-Id",this.D),dr(this,n),this.o&&i&&nr(n,this.o,i),xn(this.i,s),this.Ra&&en(n,"TYPE","init"),this.ja?(en(n,"$req",e),en(n,"SID","null"),s.$=!0,Ne(s,n,null)):Ne(s,n,e),this.G=2}}else 3==this.G&&(t?hr(this,t):0==this.l.length||Tn(this.i)||hr(this))},r.Ga=function(){if(this.u=null,yr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ge(_(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,fe(10),or(this),yr(this))},r.ab=function(){null!=this.v&&(this.v=null,or(this),gr(this),fe(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),fe(2)):(this.h.info("Failed to ping google.com"),fe(1))},r=Sr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Ar.prototype.g=function(t,e){return new xr(t,e)},I(xr,Nt),xr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jt(_(t.hb,t,e))),fe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ir(t,null,t.W),ur(t)},xr.prototype.close=function(){ir(this.g)},xr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,cr(this.g,e)}else this.v?(e={},e.__data__=Mt(t),cr(this.g,e)):cr(this.g,t)},xr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,xr.Z.M.call(this)},I(Cr,Ie),I(kr,Te),I(Dr,Sr),Dr.prototype.xa=function(){Rt(this.g,"a")},Dr.prototype.wa=function(t){Rt(this.g,new Cr(t))},Dr.prototype.va=function(t){Rt(this.g,new kr(t))},Dr.prototype.ua=function(){Rt(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,xr.prototype.send=xr.prototype.u,xr.prototype.open=xr.prototype.m,xr.prototype.close=xr.prototype.close,me.NO_ERROR=0,me.TIMEOUT=8,me.HTTP_ERROR=6,ye.COMPLETE="complete",be.EventType=Ee,Ee.OPEN="a",Ee.CLOSE="b",Ee.ERROR="c",Ee.MESSAGE="d",Nt.prototype.listen=Nt.prototype.N,qn.prototype.listenOnce=qn.prototype.O,qn.prototype.getLastError=qn.prototype.La,qn.prototype.getLastErrorCode=qn.prototype.Da,qn.prototype.getStatus=qn.prototype.ba,qn.prototype.getResponseJson=qn.prototype.Qa,qn.prototype.getResponseText=qn.prototype.ga,qn.prototype.send=qn.prototype.ea;var Nr=l.createWebChannelTransport=function(){return new Ar},Rr=l.getStatEventTarget=function(){return ue()},Or=l.ErrorCode=me,Mr=l.EventType=ye,Lr=l.Event=ae,Pr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fr=l.FetchXmlHttpFactory=Ln,Vr=l.WebChannel=be,Ur=l.XhrIo=qn;const Br="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let qr="9.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new a.Yd("@firebase/firestore");function Gr(){return $r.logLevel}function Kr(t){$r.setLogLevel(t)}function zr(t,...e){if($r.logLevel<=a["in"].DEBUG){const n=e.map(Qr);$r.debug(`Firestore (${qr}): ${t}`,...n)}}function Wr(t,...e){if($r.logLevel<=a["in"].ERROR){const n=e.map(Qr);$r.error(`Firestore (${qr}): ${t}`,...n)}}function Hr(t,...e){if($r.logLevel<=a["in"].WARN){const n=e.map(Qr);$r.warn(`Firestore (${qr}): ${t}`,...n)}}function Qr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t="Unexpected state"){const e=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+t;throw Wr(e),new Error(e)}function Jr(t,e){t||Yr()}function Xr(t,e){t||Yr()}function Zr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class es extends c.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ss{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(jr.UNAUTHENTICATED)))}shutdown(){}}class is{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class os{constructor(t){this.t=t,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ns,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ns)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Jr("string"==typeof e.accessToken),new rs(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Jr(null===t||"string"==typeof t),new jr(t)}}class as{constructor(t,e,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class cs{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new as(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class us{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ls{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Jr("string"==typeof t.token),this.p=t.token,new us(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hs.A=-1;class fs{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ds(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function ps(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}function ms(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new es(ts.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new es(ts.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new es(ts.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new es(ts.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ys.fromMillis(Date.now())}static fromDate(t){return ys.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ys(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ps(this.nanoseconds,t.nanoseconds):ps(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t){this.timestamp=t}static fromTimestamp(t){return new vs(t)}static min(){return new vs(new ys(0,0))}static max(){return new vs(new ys(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _s(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e,n){void 0===e?e=0:e>t.length&&Yr(),void 0===n?n=t.length-e:n>t.length-e&&Yr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Es.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Es?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Is extends Es{construct(t,e,n){return new Is(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new es(ts.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Is(e)}static emptyPath(){return new Is([])}}const Ts=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ss extends Es{construct(t,e,n){return new Ss(t,e,n)}static isValidIdentifier(t){return Ts.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ss.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ss(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new es(ts.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new es(ts.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new es(ts.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new es(ts.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ss(e)}static emptyPath(){return new Ss([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t){this.fields=t,t.sort(Ss.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return gs(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Cs(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Cs(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ps(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Cs.EMPTY_BYTE_STRING=new Cs("");const ks=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(t){if(Jr(!!t),"string"==typeof t){let e=0;const n=ks.exec(t);if(Jr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ns(t.seconds),nanos:Ns(t.nanos)}}function Ns(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Rs(t){return"string"==typeof t?Cs.fromBase64String(t):Cs.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ms(t){const e=t.mapValue.fields.__previous_value__;return Os(e)?Ms(e):e}function Ls(t){const e=Ds(t.mapValue.fields.__local_write_time__.timestampValue);return new ys(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fs{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Fs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Fs&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){return null==t}function Us(t){return 0===t&&1/t==-1/0}function Bs(t){return"number"==typeof t&&Number.isInteger(t)&&!Us(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this.path=t}static fromPath(t){return new js(Is.fromString(t))}static fromName(t){return new js(Is.fromString(t).popFirst(5))}static empty(){return new js(Is.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Is.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Is.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new js(new Is(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},$s={nullValue:"NULL_VALUE"};function Gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Os(t)?4:si(t)?9007199254740991:10:Yr()}function Ks(t,e){if(t===e)return!0;const n=Gs(t);if(n!==Gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ls(t).isEqual(Ls(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ds(t.timestampValue),r=Ds(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Rs(t.bytesValue).isEqual(Rs(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ns(t.geoPointValue.latitude)===Ns(e.geoPointValue.latitude)&&Ns(t.geoPointValue.longitude)===Ns(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ns(t.integerValue)===Ns(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ns(t.doubleValue),r=Ns(e.doubleValue);return n===r?Us(n)===Us(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],Ks);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ws(n)!==ws(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Ks(n[s],r[s])))return!1;return!0}(t,e);default:return Yr()}}function zs(t,e){return void 0!==(t.values||[]).find((t=>Ks(t,e)))}function Ws(t,e){if(t===e)return 0;const n=Gs(t),r=Gs(e);if(n!==r)return ps(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ps(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ns(t.integerValue||t.doubleValue),r=Ns(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Hs(t.timestampValue,e.timestampValue);case 4:return Hs(Ls(t),Ls(e));case 5:return ps(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Rs(t),r=Rs(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=ps(n[s],r[s]);if(0!==t)return t}return ps(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ps(Ns(t.latitude),Ns(e.latitude));return 0!==n?n:ps(Ns(t.longitude),Ns(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Ws(n[s],r[s]);if(t)return t}return ps(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===qs.mapValue&&e===qs.mapValue)return 0;if(t===qs.mapValue)return 1;if(e===qs.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=ps(r[o],i[o]);if(0!==t)return t;const e=Ws(n[r[o]],s[i[o]]);if(0!==e)return e}return ps(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Yr()}}function Hs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ps(t,e);const n=Ds(t),r=Ds(e),s=ps(n.seconds,r.seconds);return 0!==s?s:ps(n.nanos,r.nanos)}function Qs(t){return Ys(t)}function Ys(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ds(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,js.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ys(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Ys(t.fields[s])}`;return n+"}"}(t.mapValue):Yr();var e,n}function Js(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xs(t){return!!t&&"integerValue"in t}function Zs(t){return!!t&&"arrayValue"in t}function ti(t){return!!t&&"nullValue"in t}function ei(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ni(t){return!!t&&"mapValue"in t}function ri(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ri(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ri(t.arrayValue.values[n]);return e}return Object.assign({},t)}function si(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}function ii(t){return"nullValue"in t?$s:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Js(Fs.empty(),js.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Yr()}function oi(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Js(Fs.empty(),js.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?qs:Yr()}function ai(t,e){const n=Ws(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function ci(t,e){const n=Ws(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t){this.value=t}static empty(){return new ui({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ni(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ri(e)}setAll(t){let e=Ss.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=ri(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());ni(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ks(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ni(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){bs(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ui(ri(this.value))}}function li(t){const e=[];return bs(t.fields,((t,n)=>{const r=new Ss([t]);if(ni(n)){const t=li(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new As(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hi{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new hi(t,0,vs.min(),vs.min(),ui.empty(),0)}static newFoundDocument(t,e,n){return new hi(t,1,e,vs.min(),n,0)}static newNoDocument(t,e){return new hi(t,2,e,vs.min(),ui.empty(),0)}static newUnknownDocument(t,e){return new hi(t,3,e,vs.min(),ui.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ui.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ui.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof hi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new hi(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class di{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}function fi(t){return t.fields.find((t=>2===t.kind))}function pi(t){return t.fields.filter((t=>2!==t.kind))}di.UNKNOWN_ID=-1;class gi{constructor(t,e){this.fieldPath=t,this.kind=e}}class mi{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new mi(0,wi.min())}}function yi(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=vs.fromTimestamp(1e9===r?new ys(n+1,0):new ys(n,r));return new wi(s,js.empty(),e)}function vi(t){return new wi(t.readTime,t.key,-1)}class wi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new wi(vs.min(),js.empty(),-1)}static max(){return new wi(vs.max(),js.empty(),-1)}}function bi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=js.comparator(t.documentKey,e.documentKey),0!==n?n:ps(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e){this.comparator=t,this.root=e||Ii.EMPTY}insert(t,e){return new _i(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ii.BLACK,null,null))}remove(t){return new _i(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ii.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ei(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ei(this.root,t,this.comparator,!0)}}class Ei{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ii{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Ii.RED,this.left=null!=r?r:Ii.EMPTY,this.right=null!=s?s:Ii.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Ii(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ii.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ii.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ii.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ii.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Yr();if(this.right.isRed())throw Yr();const t=this.left.check();if(t!==this.right.check())throw Yr();return t+(this.isRed()?0:1)}}Ii.EMPTY=null,Ii.RED=!0,Ii.BLACK=!1,Ii.EMPTY=new class{constructor(){this.size=0}get key(){throw Yr()}get value(){throw Yr()}get color(){throw Yr()}get left(){throw Yr()}get right(){throw Yr()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ii(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ti{constructor(t){this.comparator=t,this.data=new _i(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Si(this.data.getIterator())}getIteratorFrom(t){return new Si(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ti))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ti(this.comparator);return e.data=t,e}}class Si{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ai(t){return t.hasNext()?t.getNext():void 0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.P=null}}function Ci(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xi(t,e,n,r,s,i,o)}function ki(t){const e=Zr(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Qs(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Qs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Qs(t))).join(",")),e.P=t}return e.P}function Di(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Qs(e.value)}`;var e})).join(", ")}]`),Vs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Qs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Qs(t))).join(",")),`Target(${e})`}function Ni(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Wi(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Ks(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qi(t.startAt,e.startAt)&&Qi(t.endAt,e.endAt)}function Ri(t){return js.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Oi(t,e){return t.filters.filter((t=>t instanceof Pi&&t.field.isEqual(e)))}function Mi(t,e,n){let r=$s,s=!0;for(const i of Oi(t,e)){let t=$s,e=!0;switch(i.op){case"<":case"<=":t=ii(i.value);break;case"==":case"in":case">=":t=i.value;break;case">":t=i.value,e=!1;break;case"!=":case"not-in":t=$s}ai({value:r,inclusive:s},{value:t,inclusive:e})<0&&(r=t,s=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];ai({value:r,inclusive:s},{value:t,inclusive:n.inclusive})<0&&(r=t,s=n.inclusive);break}return{value:r,inclusive:s}}function Li(t,e,n){let r=qs,s=!0;for(const i of Oi(t,e)){let t=qs,e=!0;switch(i.op){case">=":case">":t=oi(i.value),e=!1;break;case"==":case"in":case"<=":t=i.value;break;case"<":t=i.value,e=!1;break;case"!=":case"not-in":t=qs}ci({value:r,inclusive:s},{value:t,inclusive:e})>0&&(r=t,s=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];ci({value:r,inclusive:s},{value:t,inclusive:n.inclusive})>0&&(r=t,s=n.inclusive);break}return{value:r,inclusive:s}}class Pi extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Fi(t,e,n):"array-contains"===e?new ji(t,n):"in"===e?new qi(t,n):"not-in"===e?new $i(t,n):"array-contains-any"===e?new Gi(t,n):new Pi(t,e,n)}static V(t,e,n){return"in"===e?new Vi(t,n):new Ui(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Ws(e,this.value)):null!==e&&Gs(this.value)===Gs(e)&&this.v(Ws(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Yr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Fi extends Pi{constructor(t,e,n){super(t,e,n),this.key=js.fromName(n.referenceValue)}matches(t){const e=js.comparator(t.key,this.key);return this.v(e)}}class Vi extends Pi{constructor(t,e){super(t,"in",e),this.keys=Bi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ui extends Pi{constructor(t,e){super(t,"not-in",e),this.keys=Bi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Bi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>js.fromName(t.referenceValue)))}class ji extends Pi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Zs(e)&&zs(e.arrayValue,this.value)}}class qi extends Pi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&zs(this.value.arrayValue,e)}}class $i extends Pi{constructor(t,e){super(t,"not-in",e)}matches(t){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!zs(this.value.arrayValue,e)}}class Gi extends Pi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>zs(this.value.arrayValue,t)))}}class Ki{constructor(t,e){this.position=t,this.inclusive=e}}class zi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wi(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Hi(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?js.comparator(js.fromName(o.referenceValue),n.key):Ws(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Qi(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ks(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Ji(t,e,n,r,s,i,o,a){return new Yi(t,e,n,r,s,i,o,a)}function Xi(t){return new Yi(t)}function Zi(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function to(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function eo(t){for(const e of t.filters)if(e.S())return e.field;return null}function no(t){return null!==t.collectionGroup}function ro(t){const e=Zr(t);if(null===e.D){e.D=[];const t=eo(e),n=to(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new zi(t)),e.D.push(new zi(Ss.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new zi(Ss.keyField(),t))}}}return e.D}function so(t){const e=Zr(t);if(!e.C)if("F"===e.limitType)e.C=Ci(e.path,e.collectionGroup,ro(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of ro(e)){const e="desc"===s.dir?"asc":"desc";t.push(new zi(s.field,e))}const n=e.endAt?new Ki(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ki(e.startAt.position,e.startAt.inclusive):null;e.C=Ci(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.C}function io(t,e,n){return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oo(t,e){return Ni(so(t),so(e))&&t.limitType===e.limitType}function ao(t){return`${ki(so(t))}|lt:${t.limitType}`}function co(t){return`Query(target=${Di(so(t))}; limitType=${t.limitType})`}function uo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):js.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Hi(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,ro(t),e))&&!(t.endAt&&!function(t,e,n){const r=Hi(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,ro(t),e))}(t,e)}function lo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ho(t){return(e,n)=>{let r=!1;for(const s of ro(t)){const t=fo(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function fo(t,e,n){const r=t.field.isKeyField()?js.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Ws(r,s):Yr()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Yr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Us(e)?"-0":e}}function go(t){return{integerValue:""+t}}function mo(t,e){return Bs(e)?go(e):po(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this._=void 0}}function vo(t,e,n){return t instanceof _o?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Eo?Io(t,e):t instanceof To?So(t,e):function(t,e){const n=bo(t,e),r=xo(n)+xo(t.k);return Xs(n)&&Xs(t.k)?go(r):po(t.M,r)}(t,e)}function wo(t,e,n){return t instanceof Eo?Io(t,e):t instanceof To?So(t,e):n}function bo(t,e){return t instanceof Ao?Xs(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class _o extends yo{}class Eo extends yo{constructor(t){super(),this.elements=t}}function Io(t,e){const n=Co(e);for(const r of t.elements)n.some((t=>Ks(t,r)))||n.push(r);return{arrayValue:{values:n}}}class To extends yo{constructor(t){super(),this.elements=t}}function So(t,e){let n=Co(e);for(const r of t.elements)n=n.filter((t=>!Ks(t,r)));return{arrayValue:{values:n}}}class Ao extends yo{constructor(t,e){super(),this.M=t,this.k=e}}function xo(t){return Ns(t.integerValue||t.doubleValue)}function Co(t){return Zs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e){this.field=t,this.transform=e}}function Do(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Eo&&e instanceof Eo||t instanceof To&&e instanceof To?gs(t.elements,e.elements,Ks):t instanceof Ao&&e instanceof Ao?Ks(t.k,e.k):t instanceof _o&&e instanceof _o}(t.transform,e.transform)}class No{constructor(t,e){this.version=t,this.transformResults=e}}class Ro{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ro}static exists(t){return new Ro(void 0,t)}static updateTime(t){return new Ro(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Oo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Mo{}function Lo(t,e,n){t instanceof Bo?function(t,e,n){const r=t.value.clone(),s=$o(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof jo?function(t,e,n){if(!Oo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=$o(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(qo(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n){t instanceof Bo?function(t,e,n){if(!Oo(t.precondition,e))return;const r=t.value.clone(),s=Go(t.fieldTransforms,n,e);r.setAll(s),e.convertToFoundDocument(Uo(e),r).setHasLocalMutations()}(t,e,n):t instanceof jo?function(t,e,n){if(!Oo(t.precondition,e))return;const r=Go(t.fieldTransforms,n,e),s=e.data;s.setAll(qo(t)),s.setAll(r),e.convertToFoundDocument(Uo(e),s).setHasLocalMutations()}(t,e,n):function(t,e){Oo(t.precondition,e)&&e.convertToNoDocument(vs.min())}(t,e)}function Fo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=bo(r.transform,t||null);null!=s&&(null==n&&(n=ui.empty()),n.set(r.field,s))}return n||null}function Vo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&gs(t,e,((t,e)=>Do(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Uo(t){return t.isFoundDocument()?t.version:vs.min()}class Bo extends Mo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class jo extends Mo{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function qo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function $o(t,e,n){const r=new Map;Jr(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,wo(o,a,n[s]))}return r}function Go(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,vo(t,i,e))}return r}class Ko extends Mo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class zo extends Mo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ho,Qo;function Yo(t){switch(t){default:return Yr();case ts.CANCELLED:case ts.UNKNOWN:case ts.DEADLINE_EXCEEDED:case ts.RESOURCE_EXHAUSTED:case ts.INTERNAL:case ts.UNAVAILABLE:case ts.UNAUTHENTICATED:return!1;case ts.INVALID_ARGUMENT:case ts.NOT_FOUND:case ts.ALREADY_EXISTS:case ts.PERMISSION_DENIED:case ts.FAILED_PRECONDITION:case ts.ABORTED:case ts.OUT_OF_RANGE:case ts.UNIMPLEMENTED:case ts.DATA_LOSS:return!0}}function Jo(t){if(void 0===t)return Wr("GRPC error has no .code"),ts.UNKNOWN;switch(t){case Ho.OK:return ts.OK;case Ho.CANCELLED:return ts.CANCELLED;case Ho.UNKNOWN:return ts.UNKNOWN;case Ho.DEADLINE_EXCEEDED:return ts.DEADLINE_EXCEEDED;case Ho.RESOURCE_EXHAUSTED:return ts.RESOURCE_EXHAUSTED;case Ho.INTERNAL:return ts.INTERNAL;case Ho.UNAVAILABLE:return ts.UNAVAILABLE;case Ho.UNAUTHENTICATED:return ts.UNAUTHENTICATED;case Ho.INVALID_ARGUMENT:return ts.INVALID_ARGUMENT;case Ho.NOT_FOUND:return ts.NOT_FOUND;case Ho.ALREADY_EXISTS:return ts.ALREADY_EXISTS;case Ho.PERMISSION_DENIED:return ts.PERMISSION_DENIED;case Ho.FAILED_PRECONDITION:return ts.FAILED_PRECONDITION;case Ho.ABORTED:return ts.ABORTED;case Ho.OUT_OF_RANGE:return ts.OUT_OF_RANGE;case Ho.UNIMPLEMENTED:return ts.UNIMPLEMENTED;case Ho.DATA_LOSS:return ts.DATA_LOSS;default:return Yr()}}(Qo=Ho||(Ho={}))[Qo.OK=0]="OK",Qo[Qo.CANCELLED=1]="CANCELLED",Qo[Qo.UNKNOWN=2]="UNKNOWN",Qo[Qo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qo[Qo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qo[Qo.NOT_FOUND=5]="NOT_FOUND",Qo[Qo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qo[Qo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qo[Qo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qo[Qo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qo[Qo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qo[Qo.ABORTED=10]="ABORTED",Qo[Qo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qo[Qo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qo[Qo.INTERNAL=13]="INTERNAL",Qo[Qo.UNAVAILABLE=14]="UNAVAILABLE",Qo[Qo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){bs(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return _s(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new _i(js.comparator);function ta(){return Zo}const ea=new _i(js.comparator);function na(...t){let e=ea;for(const n of t)e=e.insert(n.key,n);return e}function ra(){return new Xo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const sa=new _i(js.comparator),ia=new Ti(js.comparator);function oa(...t){let e=ia;for(const n of t)e=e.add(n);return e}const aa=new Ti(ps);function ca(){return aa}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,la.createSynthesizedTargetChangeForCurrentChange(t,e)),new ua(vs.min(),n,ca(),ta(),oa())}}class la{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new la(Cs.EMPTY_BYTE_STRING,e,oa(),oa(),oa())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,e,n,r){this.O=t,this.removedTargetIds=e,this.key=n,this.F=r}}class da{constructor(t,e){this.targetId=t,this.$=e}}class fa{constructor(t,e,n=Cs.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class pa{constructor(){this.B=0,this.L=ya(),this.U=Cs.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=oa(),e=oa(),n=oa();return this.L.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Yr()}})),new la(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=ya()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ga{constructor(t){this.nt=t,this.st=new Map,this.it=ta(),this.rt=ma(),this.ot=new Ti(ps)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Yr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,r=this.wt(e);if(r){const t=r.target;if(Ri(t))if(0===n){const n=new js(t.path);this.ct(e,n,hi.newNoDocument(n,vs.min()))}else Jr(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,r)=>{const s=this.wt(r);if(s){if(n.current&&Ri(s.target)){const e=new js(s.target.path);null!==this.it.get(e)||this.It(r,e)||this.ct(r,e,hi.newNoDocument(e,t))}n.j&&(e.set(r,n.H()),n.J())}}));let n=oa();this.rt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const r=new ua(t,e,this.ot,this.it,n);return this.it=ta(),this.rt=ma(),this.ot=new Ti(ps),r}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const r=this.lt(t);this.It(t,e)?r.Y(e,1):r.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new pa,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Ti(ps),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||zr("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new pa),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function ma(){return new _i(js.comparator)}function ya(){return new _i(js.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),wa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class ba{constructor(t,e){this.databaseId=t,this.N=e}}function _a(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ea(t,e){return t.N?e.toBase64():e.toUint8Array()}function Ia(t,e){return _a(t,e.toTimestamp())}function Ta(t){return Jr(!!t),vs.fromTimestamp(function(t){const e=Ds(t);return new ys(e.seconds,e.nanos)}(t))}function Sa(t,e){return function(t){return new Is(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Aa(t){const e=Is.fromString(t);return Jr(Xa(e)),e}function xa(t,e){return Sa(t.databaseId,e.path)}function Ca(t,e){const n=Aa(e);if(n.get(1)!==t.databaseId.projectId)throw new es(ts.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new es(ts.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new js(Ra(n))}function ka(t,e){return Sa(t.databaseId,e)}function Da(t){const e=Aa(t);return 4===e.length?Is.emptyPath():Ra(e)}function Na(t){return new Is(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ra(t){return Jr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Oa(t,e,n){return{name:xa(t,e),fields:n.value.mapValue.fields}}function Ma(t,e,n){const r=Ca(t,e.name),s=Ta(e.updateTime),i=new ui({mapValue:{fields:e.fields}}),o=hi.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function La(t,e){return"found"in e?function(t,e){Jr(!!e.found),e.found.name,e.found.updateTime;const n=Ca(t,e.found.name),r=Ta(e.found.updateTime),s=new ui({mapValue:{fields:e.found.fields}});return hi.newFoundDocument(n,r,s)}(t,e):"missing"in e?function(t,e){Jr(!!e.missing),Jr(!!e.readTime);const n=Ca(t,e.missing),r=Ta(e.readTime);return hi.newNoDocument(n,r)}(t,e):Yr()}function Pa(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Yr()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.N?(Jr(void 0===e||"string"==typeof e),Cs.fromBase64String(e||"")):(Jr(void 0===e||e instanceof Uint8Array),Cs.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ts.UNKNOWN:Jo(t.code);return new es(e,t.message||"")}(o);n=new fa(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ca(t,r.document.name),i=Ta(r.document.updateTime),o=new ui({mapValue:{fields:r.document.fields}}),a=hi.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ha(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ca(t,r.document),i=r.readTime?Ta(r.readTime):vs.min(),o=hi.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ca(t,r.document),i=r.removedTargetIds||[];n=new ha([],i,s,null)}else{if(!("filter"in e))return Yr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new Wo(r),i=t.targetId;n=new da(i,s)}}return n}function Fa(t,e){let n;if(e instanceof Bo)n={update:Oa(t,e.key,e.value)};else if(e instanceof Ko)n={delete:xa(t,e.key)};else if(e instanceof jo)n={update:Oa(t,e.key,e.data),updateMask:Ja(e.fieldMask)};else{if(!(e instanceof zo))return Yr();n={verify:xa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof _o)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Eo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof To)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ao)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Yr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ia(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Yr()}(t,e.precondition)),n}function Va(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Ro.updateTime(Ta(t.updateTime)):void 0!==t.exists?Ro.exists(t.exists):Ro.none()}(e.currentDocument):Ro.none(),r=e.updateTransforms?e.updateTransforms.map((e=>function(t,e){let n=null;if("setToServerValue"in e)Jr("REQUEST_TIME"===e.setToServerValue),n=new _o;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new Eo(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new To(t)}else"increment"in e?n=new Ao(t,e.increment):Yr();const r=Ss.fromServerFormat(e.fieldPath);return new ko(r,n)}(t,e))):[];if(e.update){e.update.name;const s=Ca(t,e.update.name),i=new ui({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new As(e.map((t=>Ss.fromServerFormat(t))))}(e.updateMask);return new jo(s,i,t,n,r)}return new Bo(s,i,n,r)}if(e.delete){const r=Ca(t,e.delete);return new Ko(r,n)}if(e.verify){const r=Ca(t,e.verify);return new zo(r,n)}return Yr()}function Ua(t,e){return t&&t.length>0?(Jr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ta(t.updateTime):Ta(e);return n.isEqual(vs.min())&&(n=Ta(e)),new No(n,t.transformResults||[])}(t,e)))):[]}function Ba(t,e){return{documents:[ka(t,e.path)]}}function ja(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=ka(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ka(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(ei(t.value))return{unaryFilter:{field:Wa(t.field),op:"IS_NAN"}};if(ti(t.value))return{unaryFilter:{field:Wa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ei(t.value))return{unaryFilter:{field:Wa(t.field),op:"IS_NOT_NAN"}};if(ti(t.value))return{unaryFilter:{field:Wa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wa(t.field),op:za(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Wa(t.field),direction:Ka(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.N||Vs(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function qa(t){let e=Da(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Jr(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Ga(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new zi(Ha(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Vs(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ki(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ki(n,e)}(n.endAt)),Ji(e,s,o,i,a,"F",c,u)}function $a(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Yr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ga(t){return t?void 0!==t.unaryFilter?[Ya(t)]:void 0!==t.fieldFilter?[Qa(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ga(t))).reduce(((t,e)=>t.concat(e))):Yr():[]}function Ka(t){return va[t]}function za(t){return wa[t]}function Wa(t){return{fieldPath:t.canonicalString()}}function Ha(t){return Ss.fromServerFormat(t.fieldPath)}function Qa(t){return Pi.create(Ha(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Yr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ya(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ha(t.unaryFilter.field);return Pi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ha(t.unaryFilter.field);return Pi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ha(t.unaryFilter.field);return Pi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ha(t.unaryFilter.field);return Pi.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Yr()}}function Ja(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Xa(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ec(e)),e=tc(t.get(n),e);return ec(e)}function tc(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function ec(t){return t+""}function nc(t){const e=t.length;if(Jr(e>=2),2===e)return Jr(""===t.charAt(0)&&""===t.charAt(1)),Is.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const e=t.indexOf("",i);switch((e<0||e>n)&&Yr(),t.charAt(e+1)){case"":const n=t.substring(i,e);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=t.substring(i,e),s+="\0";break;case"":s+=t.substring(i,e+1);break;default:Yr()}i=e+2}return new Is(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t,e){return[t,Za(e)]}function ic(t,e,n){return[t,Za(e),n]}const oc={},ac=["prefixPath","collectionGroup","readTime","documentId"],cc=["prefixPath","collectionGroup","documentId"],uc=["collectionGroup","readTime","prefixPath","documentId"],lc=["canonicalId","targetId"],hc=["targetId","path"],dc=["path","targetId"],fc=["collectionId","parent"],pc=["indexId","uid"],gc=["uid","sequenceNumber"],mc=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],yc=["indexId","uid","orderedDocumentKey"],vc=["userId","collectionPath","documentId"],wc=["userId","collectionPath","largestBatchId"],bc=["userId","collectionGroup","largestBatchId"],_c=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ec=[..._c,"documentOverlays"],Ic=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Tc=[...Ic,"indexConfiguration","indexState","indexEntries"],Sc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Yr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new xc(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof xc?e:xc.resolve(e)}catch(t){return xc.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):xc.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):xc.reject(e)}static resolve(t){return new xc(((e,n)=>{e(t)}))}static reject(t){return new xc(((e,n)=>{n(t)}))}static waitFor(t){return new xc(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=xc.resolve(!1);for(const n of t)e=e.next((t=>t?xc.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.At=new ns,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{e.error?this.At.reject(new Nc(t,e.error)):this.At.resolve()},this.transaction.onerror=e=>{const n=Pc(e.target.error);this.At.reject(new Nc(t,n))}}static open(t,e,n,r){try{return new Cc(e,t.transaction(r,n))}catch(t){throw new Nc(e,t)}}get Rt(){return this.At.promise}abort(t){t&&this.At.reject(t),this.aborted||(zr("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Oc(e)}}class kc{constructor(t,e,n){this.name=t,this.version=e,this.Pt=n,12.2===kc.Vt((0,c.z$)())&&Wr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return zr("SimpleDb","Removing database:",t),Mc(window.indexedDB.deleteDatabase(t)).toPromise()}static vt(){if(!(0,c.hl)())return!1;if(kc.St())return!0;const t=(0,c.z$)(),e=kc.Vt(t),n=0<e&&e<10,r=kc.Dt(t),s=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||s)}static St(){var t;return"undefined"!=typeof process&&"YES"===(null===(t={NODE_ENV:"production",BASE_URL:"/"})||void 0===t?void 0:t.Ct)}static xt(t,e){return t.store(e)}static Vt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(t){return this.db||(zr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new Nc(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new es(ts.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new es(ts.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Nc(t,r))},r.onupgradeneeded=t=>{zr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.Pt.kt(e,r.transaction,t.oldVersion,this.version).next((()=>{zr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Mt&&(this.db.onversionchange=t=>this.Mt(t)),this.db}Ot(t){this.Mt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const s="readonly"===e;let i=0;for(;;){++i;try{this.db=await this.Nt(t);const e=Cc.open(this.db,t,s?"readonly":"readwrite",n),i=r(e).next((t=>(e.bt(),t))).catch((t=>(e.abort(t),xc.reject(t)))).toPromise();return i.catch((()=>{})),await e.Rt,i}catch(t){const e="FirebaseError"!==t.name&&i<3;if(zr("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Dc{constructor(t){this.Ft=t,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(t){this.Ft=t}done(){this.$t=!0}Ut(t){this.Bt=t}delete(){return Mc(this.Ft.delete())}}class Nc extends es{constructor(t,e){super(ts.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Rc(t){return"IndexedDbTransactionError"===t.name}class Oc{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(zr("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(zr("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Mc(n)}add(t){return zr("SimpleDb","ADD",this.store.name,t,t),Mc(this.store.add(t))}get(t){return Mc(this.store.get(t)).next((e=>(void 0===e&&(e=null),zr("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return zr("SimpleDb","DELETE",this.store.name,t),Mc(this.store.delete(t))}count(){return zr("SimpleDb","COUNT",this.store.name),Mc(this.store.count())}qt(t,e){const n=this.options(t,e);if(n.index||"function"!=typeof this.store.getAll){const t=this.cursor(n),e=[];return this.Kt(t,((t,n)=>{e.push(n)})).next((()=>e))}{const t=this.store.getAll(n.range);return new xc(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}}Gt(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new xc(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}Qt(t,e){zr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.jt=!1;const r=this.cursor(n);return this.Kt(r,((t,e,n)=>n.delete()))}Wt(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.Kt(r,e)}zt(t){const e=this.cursor({});return new xc(((n,r)=>{e.onerror=t=>{const e=Pc(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next((t=>{t?r.continue():n()})):n()}}))}Kt(t,e){const n=[];return new xc(((r,s)=>{t.onerror=t=>{s(t.target.error)},t.onsuccess=t=>{const s=t.target.result;if(!s)return void r();const i=new Dc(s),o=e(s.primaryKey,s.value,i);if(o instanceof xc){const t=o.catch((t=>(i.done(),xc.reject(t))));n.push(t)}i.isDone?r():null===i.Lt?s.continue():s.continue(i.Lt)}})).next((()=>xc.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.jt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Mc(t){return new xc(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Pc(t.target.error);n(e)}}))}let Lc=!1;function Pc(t){const e=kc.Vt((0,c.z$)());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new es("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Lc||(Lc=!0,setTimeout((()=>{throw t}),0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Ac{constructor(t,e){super(),this.Ht=t,this.currentSequenceNumber=e}}function Vc(t,e){const n=Zr(t);return kc.xt(n.Ht,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Lo(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Po(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Po(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(vs.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),oa())}isEqual(t){return this.batchId===t.batchId&&gs(this.mutations,t.mutations,((t,e)=>Vo(t,e)))&&gs(this.baseMutations,t.baseMutations,((t,e)=>Vo(t,e)))}}class Bc{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Jr(t.mutations.length===n.length);let r=sa;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Bc(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,e,n,r,s=vs.min(),i=vs.min(),o=Cs.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new qc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new qc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new qc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t){this.Jt=t}}function Gc(t,e){let n;if(e.document)n=Ma(t.Jt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const t=js.fromSegments(e.noDocument.path),r=Hc(e.noDocument.readTime);n=hi.newNoDocument(t,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Yr();{const t=js.fromSegments(e.unknownDocument.path),r=Hc(e.unknownDocument.version);n=hi.newUnknownDocument(t,r)}}return e.readTime&&n.setReadTime(function(t){const e=new ys(t[0],t[1]);return vs.fromTimestamp(e)}(e.readTime)),n}function Kc(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:zc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(t,e){return{name:xa(t,e.key),fields:e.data.value.mapValue.fields,updateTime:_a(t,e.version.toTimestamp())}}(t.Jt,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Wc(e.version)};else{if(!e.isUnknownDocument())return Yr();r.unknownDocument={path:n.path.toArray(),version:Wc(e.version)}}return r}function zc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Wc(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Hc(t){const e=new ys(t.seconds,t.nanoseconds);return vs.fromTimestamp(e)}function Qc(t,e){const n=(e.baseMutations||[]).map((e=>Va(t.Jt,e)));for(let i=0;i<e.mutations.length-1;++i){const t=e.mutations[i];if(i+1<e.mutations.length&&void 0!==e.mutations[i+1].transform){const n=e.mutations[i+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((e=>Va(t.Jt,e))),s=ys.fromMillis(e.localWriteTimeMs);return new Uc(e.batchId,s,n,r)}function Yc(t){const e=Hc(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?Hc(t.lastLimboFreeSnapshotVersion):vs.min();let r;var s;return void 0!==t.query.documents?(Jr(1===(s=t.query).documents.length),r=so(Xi(Da(s.documents[0])))):r=function(t){return so(qa(t))}(t.query),new qc(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Cs.fromBase64String(t.resumeToken))}function Jc(t,e){const n=Wc(e.snapshotVersion),r=Wc(e.lastLimboFreeSnapshotVersion);let s;s=Ri(e.target)?Ba(t.Jt,e.target):ja(t.Jt,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ki(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Xc(t){const e=qa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?io(e,e.limit,"L"):e}function Zc(t,e){return new jc(e.largestBatchId,Va(t.Jt,e.overlayMutation))}function tu(t,e){const n=e.path.lastSegment();return[t,Za(e.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{getBundleMetadata(t,e){return nu(t).get(e).next((t=>{if(t)return{id:(e=t).bundleId,createTime:Hc(e.createTime),version:e.version};var e}))}saveBundleMetadata(t,e){return nu(t).put({bundleId:(n=e).id,createTime:Wc(Ta(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return ru(t).get(e).next((t=>{if(t)return{name:(e=t).name,query:Xc(e.bundledQuery),readTime:Hc(e.readTime)};var e}))}saveNamedQuery(t,e){return ru(t).put(function(t){return{name:t.name,readTime:Wc(Ta(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function nu(t){return Vc(t,"bundles")}function ru(t){return Vc(t,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e){this.M=t,this.userId=e}static Yt(t,e){const n=e.uid||"";return new su(t,n)}getOverlay(t,e){return iu(t).get(tu(this.userId,e)).next((t=>t?Zc(this.M,t):null))}saveOverlays(t,e,n){const r=[];return n.forEach(((n,s)=>{const i=new jc(e,s);r.push(this.Xt(t,i))})),xc.waitFor(r)}removeOverlaysForBatchId(t,e,n){const r=new Set;e.forEach((t=>r.add(Za(t.getCollectionPath()))));const s=[];return r.forEach((e=>{const r=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);s.push(iu(t).Qt("collectionPathOverlayIndex",r))})),xc.waitFor(s)}getOverlaysForCollection(t,e,n){const r=ra(),s=Za(e),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return iu(t).qt("collectionPathOverlayIndex",i).next((t=>{for(const e of t){const t=Zc(this.M,e);r.set(t.getKey(),t)}return r}))}getOverlaysForCollectionGroup(t,e,n,r){const s=ra();let i;const o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return iu(t).Wt({index:"collectionGroupOverlayIndex",range:o},((t,e,n)=>{const o=Zc(this.M,e);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>s))}Xt(t,e){return iu(t).put(function(t,e,n){const[r,s,i]=tu(e,n.mutation.key);return{userId:e,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Fa(t.Jt,n.mutation)}}(this.M,this.userId,e))}}function iu(t){return Vc(t,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Ns(t.integerValue));else if("doubleValue"in t){const n=Ns(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Us(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Rs(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?si(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Yr()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const r of Object.keys(n))this.re(r,e),this.te(n[r],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const r of n)this.te(r,e)}ae(t,e){this.ne(e,37),js.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}function au(t){if(0===t)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function cu(t){const e=64-function(t){let e=0;for(let n=0;n<8;++n){const r=au(255&t[n]);if(e+=r,8!==r)break}return e}(t);return Math.ceil(e/8)}ou.fe=new ou;class uu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this._e(n.value),n=e.next();this.we()}me(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.ge(n.value),n=e.next();this.ye()}pe(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this._e(t);else if(t<2048)this._e(960|t>>>6),this._e(128|63&t);else if(e<"\ud800"||"\udbff"<e)this._e(480|t>>>12),this._e(128|63&t>>>6),this._e(128|63&t);else{const t=e.codePointAt(0);this._e(240|t>>>18),this._e(128|63&t>>>12),this._e(128|63&t>>>6),this._e(128|63&t)}}this.we()}Ie(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.ge(t);else if(t<2048)this.ge(960|t>>>6),this.ge(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.ge(480|t>>>12),this.ge(128|63&t>>>6),this.ge(128|63&t);else{const t=e.codePointAt(0);this.ge(240|t>>>18),this.ge(128|63&t>>>12),this.ge(128|63&t>>>6),this.ge(128|63&t)}}this.ye()}Te(t){const e=this.Ee(t),n=cu(e);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let r=e.length-n;r<e.length;++r)this.buffer[this.position++]=255&e[r]}Re(t){const e=this.Ee(t),n=cu(e);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let r=e.length-n;r<e.length;++r)this.buffer[this.position++]=~(255&e[r])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(t){this.Ae(t.length),this.buffer.set(t,this.position),this.position+=t.length}Se(){return this.buffer.slice(0,this.position)}Ee(t){const e=function(t){const e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=0!=(128&e[0]);e[0]^=n?255:128;for(let r=1;r<e.length;++r)e[r]^=n?255:0;return e}_e(t){const e=255&t;0===e?(this.Pe(0),this.Pe(255)):255===e?(this.Pe(255),this.Pe(0)):this.Pe(e)}ge(t){const e=255&t;0===e?(this.ve(0),this.ve(255)):255===e?(this.ve(255),this.ve(0)):this.ve(t)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(t){this.Ae(1),this.buffer[this.position++]=t}ve(t){this.Ae(1),this.buffer[this.position++]=~t}Ae(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class lu{constructor(t){this.De=t}ue(t){this.De.de(t)}ie(t){this.De.pe(t)}se(t){this.De.Te(t)}ee(){this.De.be()}}class hu{constructor(t){this.De=t}ue(t){this.De.me(t)}ie(t){this.De.Ie(t)}se(t){this.De.Re(t)}ee(){this.De.Ve()}}class du{constructor(){this.De=new uu,this.Ce=new lu(this.De),this.xe=new hu(this.De)}seed(t){this.De.seed(t)}Ne(t){return 0===t?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,e,n,r){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=r}ke(){const t=this.directionalValue.length,e=0===t||255===this.directionalValue[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new fu(this.indexId,this.documentKey,this.arrayValue,n)}}function pu(t,e){let n=t.indexId-e.indexId;return 0!==n?n:(n=gu(t.arrayValue,e.arrayValue),0!==n?n:(n=gu(t.directionalValue,e.directionalValue),0!==n?n:js.comparator(t.documentKey,e.documentKey)))}function gu(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(0!==r)return r}return t.length-e.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.Me=t.orderBy,this.Oe=[];for(const e of t.filters){const t=e;t.S()?this.Fe=t:this.Oe.push(t)}}$e(t){const e=fi(t);if(void 0!==e&&!this.Be(e))return!1;const n=pi(t);let r=0,s=0;for(;r<n.length&&this.Be(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Fe){const t=n[r];if(!this.Le(this.Fe,t)||!this.Ue(this.Me[s++],t))return!1;++r}for(;r<n.length;++r){const t=n[r];if(s>=this.Me.length||!this.Ue(this.Me[s++],t))return!1}return!0}Be(t){for(const e of this.Oe)if(this.Le(e,t))return!0;return!1}Le(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;const n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}Ue(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.qe=new vu}addToCollectionParentIndex(t,e){return this.qe.add(e),xc.resolve()}getCollectionParents(t,e){return xc.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return xc.resolve()}deleteFieldIndex(t,e){return xc.resolve()}getDocumentsMatchingTarget(t,e){return xc.resolve(null)}getIndexType(t,e){return xc.resolve(0)}getFieldIndexes(t,e){return xc.resolve([])}getNextCollectionGroupToUpdate(t){return xc.resolve(null)}getMinOffset(t,e){return xc.resolve(wi.min())}updateCollectionGroup(t,e,n){return xc.resolve()}updateIndexEntries(t,e){return xc.resolve()}}class vu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ti(Is.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ti(Is.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Uint8Array(0);class bu{constructor(t,e){this.user=t,this.databaseId=e,this.Ke=new vu,this.Ge=new Xo((t=>ki(t)),((t,e)=>Ni(t,e))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Ke.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener((()=>{this.Ke.add(e)}));const s={collectionId:n,parent:Za(r)};return _u(t).put(s)}return xc.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[ms(e),""],!1,!0);return _u(t).qt(r).next((t=>{for(const r of t){if(r.collectionId!==e)break;n.push(nc(r.parent))}return n}))}addFieldIndex(t,e){const n=Iu(t),r=function(t){return{indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map((t=>[t.fieldPath.canonicalString(),t.kind]))}}(e);return delete r.indexId,n.add(r).next()}deleteFieldIndex(t,e){const n=Iu(t),r=Tu(t),s=Eu(t);return n.delete(e.indexId).next((()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}getDocumentsMatchingTarget(t,e){const n=Eu(t);let r=!0;const s=new Map;return xc.forEach(this.Qe(e),(e=>this.je(t,e).next((t=>{r&&(r=!!t),s.set(e,t)})))).next((()=>{if(r){let t=oa();const r=[];return xc.forEach(s,((s,i)=>{var o;zr("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t=>`${t.fieldPath}:${t.kind}`)).join(",")}`} to execute ${ki(e)}`);const a=function(t,e){const n=fi(e);if(void 0===n)return null;for(const r of Oi(t,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),c=function(t,e){const n=new Map;for(const r of pi(e))for(const e of Oi(t,r.fieldPath))switch(e.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),e.value),Array.from(n.values())}return null}(i,s),u=function(t,e){const n=[];let r=!0;for(const s of pi(e)){const e=0===s.kind?Mi(t,s.fieldPath,t.startAt):Li(t,s.fieldPath,t.startAt);n.push(e.value),r&&(r=e.inclusive)}return new Ki(n,r)}(i,s),l=function(t,e){const n=[];let r=!0;for(const s of pi(e)){const e=0===s.kind?Li(t,s.fieldPath,t.endAt):Mi(t,s.fieldPath,t.endAt);n.push(e.value),r&&(r=e.inclusive)}return new Ki(n,r)}(i,s),h=this.We(s,i,u),d=this.We(s,i,l),f=this.ze(s,i,c),p=this.He(s.indexId,a,h,u.inclusive,d,l.inclusive,f);return xc.forEach(p,(s=>n.Gt(s,e.limit).next((e=>{e.forEach((e=>{const n=js.fromSegments(e.documentKey);t.has(n)||(t=t.add(n),r.push(n))}))}))))})).next((()=>r))}return xc.resolve(null)}))}Qe(t){let e=this.Ge.get(t);return e||(e=[t],this.Ge.set(t,e),e)}He(t,e,n,r,s,i,o){const a=(null!=e?e.length:1)*Math.max(n.length,s.length),c=a/(null!=e?e.length:1),u=[];for(let l=0;l<a;++l){const a=e?this.Je(e[l/c]):wu,h=this.Ye(t,a,n[l%c],r),d=this.Xe(t,a,s[l%c],i),f=o.map((e=>this.Ye(t,a,e,!0)));u.push(...this.createRange(h,d,f))}return u}Ye(t,e,n,r){const s=new fu(t,js.empty(),e,n);return r?s:s.ke()}Xe(t,e,n,r){const s=new fu(t,js.empty(),e,n);return r?s.ke():s}je(t,e){const n=new mu(e),r=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,r).next((t=>{let e=null;for(const r of t)n.$e(r)&&(!e||r.fields.length>e.fields.length)&&(e=r);return e}))}getIndexType(t,e){let n=2;return xc.forEach(this.Qe(e),(e=>this.je(t,e).next((t=>{t?0!==n&&t.fields.length<function(t){let e=new Ti(Ss.comparator),n=!1;for(const r of t.filters){const t=r;t.field.isKeyField()||("array-contains"===t.op||"array-contains-any"===t.op?n=!0:e=e.add(t.field))}for(const r of t.orderBy)r.field.isKeyField()||(e=e.add(r.field));return e.size+(n?1:0)}(e)&&(n=1):n=0})))).next((()=>n))}Ze(t,e){const n=new du;for(const r of pi(t)){const t=e.data.field(r.fieldPath);if(null==t)return null;const s=n.Ne(r.kind);ou.fe.Zt(t,s)}return n.Se()}Je(t){const e=new du;return ou.fe.Zt(t,e.Ne(0)),e.Se()}tn(t,e){const n=new du;return ou.fe.Zt(Js(this.databaseId,e),n.Ne(function(t){const e=pi(t);return 0===e.length?0:e[e.length-1].kind}(t))),n.Se()}ze(t,e,n){if(null===n)return[];let r=[];r.push(new du);let s=0;for(const i of pi(t)){const t=n[s++];for(const n of r)if(this.en(e,i.fieldPath)&&Zs(t))r=this.nn(r,i,t);else{const e=n.Ne(i.kind);ou.fe.Zt(t,e)}}return this.sn(r)}We(t,e,n){return this.ze(t,e,n.position)}sn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Se();return e}nn(t,e,n){const r=[...t],s=[];for(const i of n.arrayValue.values||[])for(const t of r){const n=new du;n.seed(t.Se()),ou.fe.Zt(i,n.Ne(e.kind)),s.push(n)}return s}en(t,e){return!!t.filters.find((t=>t instanceof Pi&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op)))}getFieldIndexes(t,e){const n=Iu(t),r=Tu(t);return(e?n.qt("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.qt()).next((t=>{const e=[];return xc.forEach(t,(t=>r.get([t.indexId,this.uid]).next((n=>{e.push(function(t,e){const n=e?new mi(e.sequenceNumber,new wi(Hc(e.readTime),new js(nc(e.documentKey)),e.largestBatchId)):mi.empty(),r=t.fields.map((([t,e])=>new gi(Ss.fromServerFormat(t),e)));return new di(t.indexId,t.collectionGroup,r,n)}(t,n))})))).next((()=>e))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((t=>0===t.length?null:(t.sort(((t,e)=>{const n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:ps(t.collectionGroup,e.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(t,e,n){const r=Iu(t),s=Tu(t);return this.rn(t).next((t=>r.qt("collectionGroupIndex",IDBKeyRange.bound(e,e)).next((e=>xc.forEach(e,(e=>s.put(function(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Wc(r.readTime),documentKey:Za(r.documentKey.path),largestBatchId:r.largestBatchId}}(e.indexId,this.user,t,n))))))))}updateIndexEntries(t,e){const n=new Map;return xc.forEach(e,((e,r)=>{const s=n.get(e.collectionGroup);return(s?xc.resolve(s):this.getFieldIndexes(t,e.collectionGroup)).next((s=>(n.set(e.collectionGroup,s),xc.forEach(s,(n=>this.on(t,e,n).next((e=>{const s=this.un(r,n);return e.isEqual(s)?xc.resolve():this.an(t,r,n,e,s)})))))))}))}cn(t,e,n,r){return Eu(t).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.tn(n,e.key),documentKey:e.key.path.toArray()})}hn(t,e,n,r){return Eu(t).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.tn(n,e.key),e.key.path.toArray()])}on(t,e,n){const r=Eu(t);let s=new Ti(pu);return r.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.tn(n,e)])},((t,r)=>{s=s.add(new fu(n.indexId,e,r.arrayValue,r.directionalValue))})).next((()=>s))}un(t,e){let n=new Ti(pu);const r=this.Ze(e,t);if(null==r)return n;const s=fi(e);if(null!=s){const i=t.data.field(s.fieldPath);if(Zs(i))for(const s of i.arrayValue.values||[])n=n.add(new fu(e.indexId,t.key,this.Je(s),r))}else n=n.add(new fu(e.indexId,t.key,wu,r));return n}an(t,e,n,r,s){zr("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const i=[];return function(t,e,n,r,s){const i=t.getIterator(),o=e.getIterator();let a=Ai(i),c=Ai(o);for(;a||c;){let t=!1,e=!1;if(a&&c){const r=n(a,c);r<0?e=!0:r>0&&(t=!0)}else null!=a?e=!0:t=!0;t?(r(c),c=Ai(o)):e?(s(a),a=Ai(i)):(a=Ai(i),c=Ai(o))}}(r,s,pu,(r=>{i.push(this.cn(t,e,n,r))}),(r=>{i.push(this.hn(t,e,n,r))})),xc.waitFor(i)}rn(t){let e=1;return Tu(t).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((t,n,r)=>{r.done(),e=n.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((t,e)=>pu(t,e))).filter(((t,e,n)=>!e||0!==pu(t,n[e-1])));const r=[];r.push(t);for(const i of n){const n=pu(i,t),s=pu(i,e);if(0===n)r[0]=t.ke();else if(n>0&&s<0)r.push(i),r.push(i.ke());else if(s>0)break}r.push(e);const s=[];for(let i=0;i<r.length;i+=2)s.push(IDBKeyRange.bound([r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,wu,[]],[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,wu,[]]));return s}getMinOffset(t,e){let n;return xc.forEach(this.Qe(e),(e=>this.je(t,e).next((t=>{t?(!n||bi(t.indexState.offset,n)<0)&&(n=t.indexState.offset):n=wi.min()})))).next((()=>n))}}function _u(t){return Vc(t,"collectionParents")}function Eu(t){return Vc(t,"indexEntries")}function Iu(t){return Vc(t,"indexConfiguration")}function Tu(t){return Vc(t,"indexState")}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Au{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Au(t,Au.DEFAULT_COLLECTION_PERCENTILE,Au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Wt({range:o},((t,e,n)=>(a++,n.delete())));i.push(c.next((()=>{Jr(1===a)})));const u=[];for(const l of n.mutations){const t=ic(e,l.key.path,n.batchId);i.push(s.delete(t)),u.push(l.key)}return xc.waitFor(i).next((()=>u))}function Cu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Yr();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Au.DEFAULT_COLLECTION_PERCENTILE=10,Au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Au.DEFAULT=new Au(41943040,Au.DEFAULT_COLLECTION_PERCENTILE,Au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Au.DISABLED=new Au(-1,0,0);class ku{constructor(t,e,n,r){this.userId=t,this.M=e,this.indexManager=n,this.referenceDelegate=r,this.ln={}}static Yt(t,e,n,r){Jr(""!==t.uid);const s=t.isAuthenticated()?t.uid:"";return new ku(s,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Nu(t).Wt({index:"userMutationsIndex",range:n},((t,n,r)=>{e=!1,r.done()})).next((()=>e))}addMutationBatch(t,e,n,r){const s=Ru(t),i=Nu(t);return i.add({}).next((o=>{Jr("number"==typeof o);const a=new Uc(o,e,n,r),c=function(t,e,n){const r=n.baseMutations.map((e=>Fa(t.Jt,e))),s=n.mutations.map((e=>Fa(t.Jt,e)));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.M,this.userId,a),u=[];let l=new Ti(((t,e)=>ps(t.canonicalString(),e.canonicalString())));for(const t of r){const e=ic(this.userId,t.key.path,o);l=l.add(t.key.path.popLast()),u.push(i.put(c)),u.push(s.put(e,oc))}return l.forEach((e=>{u.push(this.indexManager.addToCollectionParentIndex(t,e))})),t.addOnCommittedListener((()=>{this.ln[o]=a.keys()})),xc.waitFor(u).next((()=>a))}))}lookupMutationBatch(t,e){return Nu(t).get(e).next((t=>t?(Jr(t.userId===this.userId),Qc(this.M,t)):null))}fn(t,e){return this.ln[e]?xc.resolve(this.ln[e]):this.lookupMutationBatch(t,e).next((t=>{if(t){const n=t.keys();return this.ln[e]=n,n}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Nu(t).Wt({index:"userMutationsIndex",range:r},((t,e,r)=>{e.userId===this.userId&&(Jr(e.batchId>=n),s=Qc(this.M,e)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Nu(t).Wt({index:"userMutationsIndex",range:e,reverse:!0},((t,e,r)=>{n=e.batchId,r.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Nu(t).qt("userMutationsIndex",e).next((t=>t.map((t=>Qc(this.M,t)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=sc(this.userId,e.path),r=IDBKeyRange.lowerBound(n),s=[];return Ru(t).Wt({range:r},((n,r,i)=>{const[o,a,c]=n,u=nc(a);if(o===this.userId&&e.path.isEqual(u))return Nu(t).get(c).next((t=>{if(!t)throw Yr();Jr(t.userId===this.userId),s.push(Qc(this.M,t))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ti(ps);const r=[];return e.forEach((e=>{const s=sc(this.userId,e.path),i=IDBKeyRange.lowerBound(s),o=Ru(t).Wt({range:i},((t,r,s)=>{const[i,o,a]=t,c=nc(o);i===this.userId&&e.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),xc.waitFor(r).next((()=>this.dn(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,s=sc(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new Ti(ps);return Ru(t).Wt({range:i},((t,e,s)=>{const[i,a,c]=t,u=nc(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()})).next((()=>this.dn(t,o)))}dn(t,e){const n=[],r=[];return e.forEach((e=>{r.push(Nu(t).get(e).next((t=>{if(null===t)throw Yr();Jr(t.userId===this.userId),n.push(Qc(this.M,t))})))})),xc.waitFor(r).next((()=>n))}removeMutationBatch(t,e){return xu(t.Ht,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this._n(e.batchId)})),xc.forEach(n,(e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))))}_n(t){delete this.ln[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return xc.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Ru(t).Wt({range:n},((t,e,n)=>{if(t[0]===this.userId){const e=nc(t[1]);r.push(e)}else n.done()})).next((()=>{Jr(0===r.length)}))}))}containsKey(t,e){return Du(t,this.userId,e)}wn(t){return Ou(t).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Du(t,e,n){const r=sc(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Ru(t).Wt({range:i,jt:!0},((t,n,r)=>{const[i,a,c]=t;i===e&&a===s&&(o=!0),r.done()})).next((()=>o))}function Nu(t){return Vc(t,"mutations")}function Ru(t){return Vc(t,"documentMutations")}function Ou(t){return Vc(t,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new Mu(0)}static yn(){return new Mu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,e){this.referenceDelegate=t,this.M=e}allocateTargetId(t){return this.pn(t).next((e=>{const n=new Mu(e.highestTargetId);return e.highestTargetId=n.next(),this.In(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.pn(t).next((t=>vs.fromTimestamp(new ys(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.pn(t).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.pn(t).next((r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.In(t,r))))}addTargetData(t,e){return this.Tn(t,e).next((()=>this.pn(t).next((n=>(n.targetCount+=1,this.En(e,n),this.In(t,n))))))}updateTargetData(t,e){return this.Tn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>Pu(t).delete(e.targetId))).next((()=>this.pn(t))).next((e=>(Jr(e.targetCount>0),e.targetCount-=1,this.In(t,e))))}removeTargets(t,e,n){let r=0;const s=[];return Pu(t).Wt(((i,o)=>{const a=Yc(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(t,a)))})).next((()=>xc.waitFor(s))).next((()=>r))}forEachTarget(t,e){return Pu(t).Wt(((t,n)=>{const r=Yc(n);e(r)}))}pn(t){return Fu(t).get("targetGlobalKey").next((t=>(Jr(null!==t),t)))}In(t,e){return Fu(t).put("targetGlobalKey",e)}Tn(t,e){return Pu(t).put(Jc(this.M,e))}En(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.pn(t).next((t=>t.targetCount))}getTargetData(t,e){const n=ki(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Pu(t).Wt({range:r,index:"queryTargetsIndex"},((t,n,r)=>{const i=Yc(n);Ni(e,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(t,e,n){const r=[],s=Vu(t);return e.forEach((e=>{const i=Za(e.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(t,n,e))})),xc.waitFor(r)}removeMatchingKeys(t,e,n){const r=Vu(t);return xc.forEach(e,(e=>{const s=Za(e.path);return xc.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(t,n,e)])}))}removeMatchingKeysForTargetId(t,e){const n=Vu(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=Vu(t);let s=oa();return r.Wt({range:n,jt:!0},((t,e,n)=>{const r=nc(t[1]),i=new js(r);s=s.add(i)})).next((()=>s))}containsKey(t,e){const n=Za(e.path),r=IDBKeyRange.bound([n],[ms(n)],!1,!0);let s=0;return Vu(t).Wt({index:"documentTargetsIndex",jt:!0,range:r},(([t,e],n,r)=>{0!==t&&(s++,r.done())})).next((()=>s>0))}Et(t,e){return Pu(t).get(e).next((t=>t?Yc(t):null))}}function Pu(t){return Vc(t,"targets")}function Fu(t){return Vc(t,"targetGlobal")}function Vu(t){return Vc(t,"targetDocuments")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(t){if(t.code!==ts.FAILED_PRECONDITION||t.message!==Sc)throw t;zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu([t,e],[n,r]){const s=ps(t,n);return 0===s?ps(e,r):s}class ju{constructor(t){this.An=t,this.buffer=new Ti(Bu),this.Rn=0}bn(){return++this.Rn}Pn(t){const e=[t,this.bn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Bu(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class qu{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.Vn=!1,this.vn=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Sn(t)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return null!==this.vn}Sn(t){const e=this.Vn?3e5:6e4;zr("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.vn=null,this.Vn=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Rc(t)?zr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Uu(t)}await this.Sn(t)}))}}class $u{constructor(t,e){this.Dn=t,this.params=e}calculateTargetCount(t,e){return this.Dn.Cn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return xc.resolve(hs.A);const n=new ju(e);return this.Dn.forEachTarget(t,(t=>n.Pn(t.sequenceNumber))).next((()=>this.Dn.xn(t,(t=>n.Pn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Dn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Dn.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(zr("LruGarbageCollector","Garbage collection skipped; disabled"),xc.resolve(Su)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(zr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Su):this.Nn(t,e)))}getCacheSize(t){return this.Dn.getCacheSize(t)}Nn(t,e){let n,r,s,i,o,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(zr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,i=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(s=e,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(u=Date.now(),Gr()<=a["in"].DEBUG&&zr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-l}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(c-o)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),xc.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:t}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new $u(t,e)}(this,e)}Cn(t){const e=this.kn(t);return this.db.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}kn(t){let e=0;return this.xn(t,(t=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}xn(t,e){return this.Mn(t,((t,n)=>e(n)))}addReference(t,e,n){return Ku(t,n)}removeReference(t,e,n){return Ku(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Ku(t,e)}On(t,e){return function(t,e){let n=!1;return Ou(t).zt((r=>Du(t,r,e).next((t=>(t&&(n=!0),xc.resolve(!t)))))).next((()=>n))}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Mn(t,((i,o)=>{if(o<=e){const e=this.On(t,i).next((e=>{if(!e)return s++,n.getEntry(t,i).next((()=>(n.removeEntry(i,vs.min()),Vu(t).delete([0,Za(i.path)]))))}));r.push(e)}})).next((()=>xc.waitFor(r))).next((()=>n.apply(t))).next((()=>s))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Ku(t,e)}Mn(t,e){const n=Vu(t);let r,s=hs.A;return n.Wt({index:"documentTargetsIndex"},(([t,n],{path:i,sequenceNumber:o})=>{0===t?(s!==hs.A&&e(new js(nc(r)),s),s=o,r=i):s=hs.A})).next((()=>{s!==hs.A&&e(new js(nc(r)),s)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ku(t,e){return Vu(t).put(function(t,e){return{targetId:0,path:Za(t.path),sequenceNumber:e}}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.changes=new Xo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,hi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?xc.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){this.M=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Yu(t).put(n)}removeEntry(t,e,n){return Yu(t).delete(function(t,e){const n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],zc(e),n[n.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.Fn(t,n))))}getEntry(t,e){let n=hi.newInvalidDocument(e);return Yu(t).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Ju(e))},((t,r)=>{n=this.$n(e,r)})).next((()=>n))}Bn(t,e){let n={size:0,document:hi.newInvalidDocument(e)};return Yu(t).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Ju(e))},((t,r)=>{n={document:this.$n(e,r),size:Cu(r)}})).next((()=>n))}getEntries(t,e){let n=ta();return this.Ln(t,e,((t,e)=>{const r=this.$n(t,e);n=n.insert(t,r)})).next((()=>n))}Un(t,e){let n=ta(),r=new _i(js.comparator);return this.Ln(t,e,((t,e)=>{const s=this.$n(t,e);n=n.insert(t,s),r=r.insert(t,Cu(e))})).next((()=>({documents:n,qn:r})))}Ln(t,e,n){if(e.isEmpty())return xc.resolve();let r=new Ti(Zu);e.forEach((t=>r=r.add(t)));const s=IDBKeyRange.bound(Ju(r.first()),Ju(r.last())),i=r.getIterator();let o=i.getNext();return Yu(t).Wt({index:"documentKeyIndex",range:s},((t,e,r)=>{const s=js.fromSegments([...e.prefixPath,e.collectionGroup,e.documentId]);for(;o&&Zu(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?r.Ut(Ju(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(t,e,n){const r=[e.popLast().toArray(),e.lastSegment(),zc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[e.popLast().toArray(),e.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Yu(t).qt(IDBKeyRange.bound(r,s,!0)).next((t=>{let e=ta();for(const n of t){const t=this.$n(js.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);e=e.insert(t.key,t)}return e}))}getAllFromCollectionGroup(t,e,n,r){let s=ta();const i=Xu(e,n),o=Xu(e,wi.max());return Yu(t).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((t,e,n)=>{const i=this.$n(js.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);s=s.insert(i.key,i),s.size===r&&n.done()})).next((()=>s))}newChangeBuffer(t){return new Hu(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((t=>t.byteSize))}getMetadata(t){return Qu(t).get("remoteDocumentGlobalKey").next((t=>(Jr(!!t),t)))}Fn(t,e){return Qu(t).put("remoteDocumentGlobalKey",e)}$n(t,e){if(e){const t=Gc(this.M,e);if(!t.isNoDocument()||!t.version.isEqual(vs.min()))return t}return hi.newInvalidDocument(t)}}class Hu extends zu{constructor(t,e){super(),this.Kn=t,this.trackRemovals=e,this.Gn=new Xo((t=>t.toString()),((t,e)=>t.isEqual(e)))}applyChanges(t){const e=[];let n=0,r=new Ti(((t,e)=>ps(t.canonicalString(),e.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.Gn.get(s);if(e.push(this.Kn.removeEntry(t,s,o.readTime)),i.isValidDocument()){const a=Kc(this.Kn.M,i);r=r.add(s.path.popLast());const c=Cu(a);n+=c-o.size,e.push(this.Kn.addEntry(t,s,a))}else if(n-=o.size,this.trackRemovals){const n=Kc(this.Kn.M,i.convertToNoDocument(vs.min()));e.push(this.Kn.addEntry(t,s,n))}})),r.forEach((n=>{e.push(this.Kn.indexManager.addToCollectionParentIndex(t,n))})),e.push(this.Kn.updateMetadata(t,n)),xc.waitFor(e)}getFromCache(t,e){return this.Kn.Bn(t,e).next((t=>(this.Gn.set(e,{size:t.size,readTime:t.document.readTime}),t.document)))}getAllFromCache(t,e){return this.Kn.Un(t,e).next((({documents:t,qn:e})=>(e.forEach(((e,n)=>{this.Gn.set(e,{size:n,readTime:t.get(e).readTime})})),t)))}}function Qu(t){return Vc(t,"remoteDocumentGlobal")}function Yu(t){return Vc(t,"remoteDocumentsV14")}function Ju(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Xu(t,e){const n=e.documentKey.path.toArray();return[t,zc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Zu(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=ps(n[i],r[i]),s)return s;return s=ps(n.length,r.length),s||(s=ps(n[n.length-2],r[r.length-2]),s||ps(n[n.length-1],r[r.length-1]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t){this.M=t}kt(t,e,n,r){const s=new Cc("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore("owner")}(t),function(t){t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",rc,{unique:!0}),t.createObjectStore("documentMutations")}(t),el(t),function(t){t.createObjectStore("remoteDocuments")}(t));let i=xc.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal")}(t),el(t)),i=i.next((()=>function(t){const e=t.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:vs.min().toTimestamp(),targetCount:0};return e.put("targetGlobalKey",n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(t,e){return e.store("mutations").qt().next((n=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",rc,{unique:!0});const r=e.store("mutations"),s=n.map((t=>r.put(t)));return xc.waitFor(s)}))}(t,s)))),i=i.next((()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)}))),n<5&&r>=5&&(i=i.next((()=>this.Qn(s)))),n<6&&r>=6&&(i=i.next((()=>(function(t){t.createObjectStore("remoteDocumentGlobal")}(t),this.jn(s))))),n<7&&r>=7&&(i=i.next((()=>this.Wn(s)))),n<8&&r>=8&&(i=i.next((()=>this.zn(t,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t)}))),n<10&&r>=10&&(i=i.next((()=>this.Hn(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})}(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)}))),n<12&&r>=12&&(i=i.next((()=>{!function(t){const e=t.createObjectStore("documentOverlays",{keyPath:vc});e.createIndex("collectionPathOverlayIndex",wc,{unique:!1}),e.createIndex("collectionGroupOverlayIndex",bc,{unique:!1})}(t)}))),n<13&&r>=13&&(i=i.next((()=>function(t){const e=t.createObjectStore("remoteDocumentsV14",{keyPath:ac});e.createIndex("documentKeyIndex",cc),e.createIndex("collectionGroupIndex",uc)}(t))).next((()=>this.Jn(t,s))).next((()=>t.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(i=i.next((()=>{!function(t){t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:pc}).createIndex("sequenceNumberIndex",gc,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:mc}).createIndex("documentKeyIndex",yc,{unique:!1})}(t)}))),i}jn(t){let e=0;return t.store("remoteDocuments").Wt(((t,n)=>{e+=Cu(n)})).next((()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Qn(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.qt().next((e=>xc.forEach(e,(e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",r).next((n=>xc.forEach(n,(n=>{Jr(n.userId===e.userId);const r=Qc(this.M,n);return xu(t,e.userId,r).next((()=>{}))}))))}))))}Wn(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next((t=>{const r=[];return n.Wt(((n,s)=>{const i=new Is(n),o=function(t){return[0,Za(t)]}(i);r.push(e.get(o).next((n=>n?xc.resolve():(n=>e.put({targetId:0,path:Za(n),sequenceNumber:t.highestListenSequenceNumber}))(i))))})).next((()=>xc.waitFor(r)))}))}zn(t,e){t.createObjectStore("collectionParents",{keyPath:fc});const n=e.store("collectionParents"),r=new vu,s=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:Za(r)})}};return e.store("remoteDocuments").Wt({jt:!0},((t,e)=>{const n=new Is(t);return s(n.popLast())})).next((()=>e.store("documentMutations").Wt({jt:!0},(([t,e,n],r)=>{const i=nc(e);return s(i.popLast())}))))}Hn(t){const e=t.store("targets");return e.Wt(((t,n)=>{const r=Yc(n),s=Jc(this.M,r);return e.put(s)}))}Jn(t,e){const n=e.store("remoteDocuments"),r=[];return n.Wt(((t,n)=>{const s=e.store("remoteDocumentsV14"),i=(o=n,o.document?new js(Is.fromString(o.document.name).popFirst(5)):o.noDocument?js.fromSegments(o.noDocument.path):o.unknownDocument?js.fromSegments(o.unknownDocument.path):Yr()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(a))})).next((()=>xc.waitFor(r)))}}function el(t){t.createObjectStore("targetDocuments",{keyPath:hc}).createIndex("documentTargetsIndex",dc,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",lc,{unique:!0}),t.createObjectStore("targetGlobal")}const nl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class rl{constructor(t,e,n,r,s,i,o,a,c,u,l=13){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Yn=s,this.window=i,this.document=o,this.Xn=c,this.Zn=u,this.ts=l,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=t=>Promise.resolve(),!rl.vt())throw new es(ts.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Gu(this,r),this.hs=e+"main",this.M=new $c(a),this.ls=new kc(this.hs,this.ts,new tl(this.M)),this.fs=new Lu(this.referenceDelegate,this.M),this.ds=function(t){return new Wu(t)}(this.M),this._s=new eu,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,!1===u&&Wr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new es(ts.FAILED_PRECONDITION,nl);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.fs.getHighestSequenceNumber(t)))})).then((t=>{this.es=new hs(t,this.Xn)})).then((()=>{this.ns=!0})).catch((t=>(this.ls&&this.ls.close(),Promise.reject(t))))}Ts(t){return this.cs=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ls.Ot((async e=>{null===e.newVersion&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Yn.enqueueAndForget((async()=>{this.started&&await this.gs()})))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>il(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Es(t).next((t=>{t||(this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))))}))})).next((()=>this.As(t))).next((e=>this.isPrimary&&!e?this.Rs(t).next((()=>!1)):!!e&&this.bs(t).next((()=>!0)))))).catch((t=>{if(Rc(t))return zr("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return zr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Yn.enqueueRetryable((()=>this.cs(t))),this.isPrimary=t}))}Es(t){return sl(t).get("owner").next((t=>xc.resolve(this.Ps(t))))}Vs(t){return il(t).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const e=Vc(t,"clientMetadata");return e.qt().next((t=>{const n=this.Ds(t,18e5),r=t.filter((t=>-1===n.indexOf(t)));return xc.forEach(r,(t=>e.delete(t.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.ws)for(const e of t)this.ws.removeItem(this.Cs(e.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.gs().then((()=>this.vs())).then((()=>this.Is()))))}Ps(t){return!!t&&t.ownerId===this.clientId}As(t){return this.Zn?xc.resolve(!0):sl(t).get("owner").next((e=>{if(null!==e&&this.Ss(e.leaseTimestampMs,5e3)&&!this.xs(e.ownerId)){if(this.Ps(e)&&this.networkEnabled)return!0;if(!this.Ps(e)){if(!e.allowTabSynchronization)throw new es(ts.FAILED_PRECONDITION,nl);return!1}}return!(!this.networkEnabled||!this.inForeground)||il(t).qt().next((t=>void 0===this.Ds(t,5e3).find((t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))))})).next((t=>(this.isPrimary!==t&&zr("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(t=>{const e=new Fc(t,hs.A);return this.Rs(e).next((()=>this.Vs(e)))})),this.ls.close(),this.Os()}Ds(t,e){return t.filter((t=>this.Ss(t.updateTimeMs,e)&&!this.xs(t.clientId)))}Fs(){return this.runTransaction("getActiveClients","readonly",(t=>il(t).qt().next((t=>this.Ds(t,18e5).map((t=>t.clientId))))))}get started(){return this.ns}getMutationQueue(t,e){return ku.Yt(t,this.M,e,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(t){return new bu(t,this.M.Jt.databaseId)}getDocumentOverlayCache(t){return su.Yt(this.M,t)}getBundleCache(){return this._s}runTransaction(t,e,n){zr("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite",s=14===(i=this.ts)?Tc:13===i?Ic:12===i?Ec:11===i?_c:void Yr();var i;let o;return this.ls.runTransaction(t,r,s,(r=>(o=new Fc(r,this.es?this.es.next():hs.A),"readwrite-primary"===e?this.Es(o).next((t=>!!t||this.As(o))).next((e=>{if(!e)throw Wr(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))),new es(ts.FAILED_PRECONDITION,Sc);return n(o)})).next((t=>this.bs(o).next((()=>t)))):this.$s(o).next((()=>n(o)))))).then((t=>(o.raiseOnCommittedEvent(),t)))}$s(t){return sl(t).get("owner").next((t=>{if(null!==t&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)&&!this.Ps(t)&&!(this.Zn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new es(ts.FAILED_PRECONDITION,nl)}))}bs(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sl(t).put("owner",e)}static vt(){return kc.vt()}Rs(t){const e=sl(t);return e.get("owner").next((t=>this.Ps(t)?(zr("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):xc.resolve()))}Ss(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(Wr(`Detected an update time that is in the future: ${t} > ${n}`),!1))}ys(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.rs=()=>{this.Yn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.gs())))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground="visible"===this.document.visibilityState)}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.ss=()=>{this.Ns(),(0,c.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(t){var e;try{const n=null!==(null===(e=this.ws)||void 0===e?void 0:e.getItem(this.Cs(t)));return zr("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return Wr("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(I){Wr("Failed to set zombie client id.",I)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch(I){}}Cs(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function sl(t){return Vc(t,"owner")}function il(t){return Vc(t,"clientMetadata")}function ol(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class al{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return function(t){return js.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):no(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new js(e)).next((t=>{let e=na();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const r=e.collectionGroup;let s=na();return this.indexManager.getCollectionParents(t,r).next((i=>xc.forEach(i,(i=>{const o=function(t,e){return new Yi(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.zs(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}zs(t,e,n){let r;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let s=r.get(n);null==s&&(s=hi.newInvalidDocument(n),r=r.insert(n,s)),Po(t,s,e.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((t,n)=>{uo(e,n)||(r=r.remove(t))})),r)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=r}static Ys(t,e){let n=oa(),r=oa();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new cl(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.Xs=!1}initialize(t,e){this.Zs=t,this.indexManager=e,this.Xs=!0}Qs(t,e,n,r){return this.ti(t,e).next((s=>s||this.ei(t,e,r,n))).next((n=>n||this.ni(t,e)))}ti(t,e){return xc.resolve(null)}ei(t,e,n,r){return Zi(e)||r.isEqual(vs.min())?this.ni(t,e):this.Zs.Ks(t,n).next((s=>{const i=this.si(e,s);return this.ii(e,i,n,r)?this.ni(t,e):(Gr()<=a["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),co(e)),this.ri(t,i,e,yi(r,-1)))}))}si(t,e){let n=new Ti(ho(t));return e.forEach(((e,r)=>{uo(t,r)&&(n=n.add(r))})),n}ii(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ni(t,e){return Gr()<=a["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",co(e)),this.Zs.Qs(t,e,wi.min())}ri(t,e,n,r){return this.Zs.Qs(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e,n,r){this.persistence=t,this.oi=e,this.M=r,this.ui=new _i(ps),this.ai=new Xo((t=>ki(t)),Ni),this.ci=new Map,this.hi=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.li(n)}li(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.fi=new al(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ui)))}}function hl(t,e,n,r){return new ll(t,e,n,r)}async function dl(t,e){const n=Zr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.Bs.getAllMutationBatches(t).next((s=>(r=s,n.li(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=oa();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.fi.Ks(t,o).next((t=>({di:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function fl(t,e){const n=Zr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.hi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=xc.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Jr(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.Bs.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.fi.Ks(t,r)))}))}function pl(t){const e=Zr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function gl(t,e){const n=Zr(t),r=e.snapshotVersion;let s=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.hi.newChangeBuffer({trackRemovals:!0});s=n.ui;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.fs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Cs.EMPTY_BYTE_STRING,vs.min()).withLastLimboFreeSnapshotVersion(vs.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.fs.updateTargetData(t,u))}));let a=ta();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(ml(t,i,e.documentUpdates).next((t=>{a=t}))),!r.isEqual(vs.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return xc.waitFor(o).next((()=>i.apply(t))).next((()=>n.fi.Gs(t,a))).next((()=>a))})).then((t=>(n.ui=s,t)))}function ml(t,e,n){let r=oa();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=ta();return n.forEach(((n,s)=>{const i=t.get(n);s.isNoDocument()&&s.version.isEqual(vs.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!i.isValidDocument()||s.version.compareTo(i.version)>0||0===s.version.compareTo(i.version)&&i.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",s.version)})),r}))}function yl(t,e){const n=Zr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}function vl(t,e){const n=Zr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.fs.getTargetData(t,e).next((s=>s?(r=s,xc.resolve(r)):n.fs.allocateTargetId(t).next((s=>(r=new qc(e,s,0,t.currentSequenceNumber),n.fs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(t.targetId,t),n.ai.set(e,t.targetId)),t}))}async function wl(t,e,n){const r=Zr(t),s=r.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Rc(t))throw t;zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ui=r.ui.remove(e),r.ai.delete(s.target)}function bl(t,e,n){const r=Zr(t);let s=vs.min(),i=oa();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Zr(t),s=r.ai.get(n);return void 0!==s?xc.resolve(r.ui.get(s)):r.fs.getTargetData(e,n)}(r,t,so(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.oi.Qs(t,e,n?s:vs.min(),n?i:oa()))).next((t=>(Il(r,lo(e),t),{documents:t,_i:i})))))}function _l(t,e){const n=Zr(t),r=Zr(n.fs),s=n.ui.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(t=>r.Et(t,e).next((t=>t?t.target:null))))}function El(t,e){const n=Zr(t),r=n.ci.get(e)||vs.min();return n.persistence.runTransaction("Get new document changes","readonly",(t=>n.hi.getAllFromCollectionGroup(t,e,yi(r,-1),Number.MAX_SAFE_INTEGER))).then((t=>(Il(n,e,t),t)))}function Il(t,e,n){let r=vs.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.ci.set(e,r)}async function Tl(t,e,n,r){const s=Zr(t);let i=oa(),o=ta();for(const u of n){const t=e.wi(u.metadata.name);u.document&&(i=i.add(t));const n=e.mi(u);n.setReadTime(e.gi(u.metadata.readTime)),o=o.insert(t,n)}const a=s.hi.newChangeBuffer({trackRemovals:!0}),c=await vl(s,function(t){return so(Xi(Is.fromString(`__bundle__/docs/${t}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(t=>ml(t,a,o).next((e=>(a.apply(t),e))).next((e=>s.fs.removeMatchingKeysForTargetId(t,c.targetId).next((()=>s.fs.addMatchingKeys(t,i,c.targetId))).next((()=>s.fi.Gs(t,e))).next((()=>e))))))}async function Sl(t,e,n=oa()){const r=await vl(t,so(Xc(e.bundledQuery))),s=Zr(t);return s.persistence.runTransaction("Save named query","readwrite",(t=>{const i=Ta(e.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s._s.saveNamedQuery(t,e);const o=r.withResumeToken(Cs.EMPTY_BYTE_STRING,i);return s.ui=s.ui.insert(o.targetId,o),s.fs.updateTargetData(t,o).next((()=>s.fs.removeMatchingKeysForTargetId(t,r.targetId))).next((()=>s.fs.addMatchingKeys(t,n,r.targetId))).next((()=>s._s.saveNamedQuery(t,e)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){this.M=t,this.yi=new Map,this.pi=new Map}getBundleMetadata(t,e){return xc.resolve(this.yi.get(e))}saveBundleMetadata(t,e){var n;return this.yi.set(e.id,{id:(n=e).id,version:n.version,createTime:Ta(n.createTime)}),xc.resolve()}getNamedQuery(t,e){return xc.resolve(this.pi.get(e))}saveNamedQuery(t,e){return this.pi.set(e.name,function(t){return{name:t.name,query:Xc(t.bundledQuery),readTime:Ta(t.readTime)}}(e)),xc.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.overlays=new _i(js.comparator),this.Ii=new Map}getOverlay(t,e){return xc.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Xt(t,e,r)})),xc.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ii.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ii.delete(n)),xc.resolve()}getOverlaysForCollection(t,e,n){const r=ra(),s=e.length+1,i=new js(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return xc.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new _i(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=ra(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ra(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return xc.resolve(o)}Xt(t,e,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const t=this.Ii.get(r.largestBatchId).delete(n.key);this.Ii.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new jc(e,n));let s=this.Ii.get(e);void 0===s&&(s=oa(),this.Ii.set(e,s)),this.Ii.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.Ti=new Ti(kl.Ei),this.Ai=new Ti(kl.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(t,e){const n=new kl(t,e);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Pi(new kl(t,e))}Vi(t,e){t.forEach((t=>this.removeReference(t,e)))}vi(t){const e=new js(new Is([])),n=new kl(e,t),r=new kl(e,t+1),s=[];return this.Ai.forEachInRange([n,r],(t=>{this.Pi(t),s.push(t.key)})),s}Si(){this.Ti.forEach((t=>this.Pi(t)))}Pi(t){this.Ti=this.Ti.delete(t),this.Ai=this.Ai.delete(t)}Di(t){const e=new js(new Is([])),n=new kl(e,t),r=new kl(e,t+1);let s=oa();return this.Ai.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new kl(t,0),n=this.Ti.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class kl{constructor(t,e){this.key=t,this.Ci=e}static Ei(t,e){return js.comparator(t.key,e.key)||ps(t.Ci,e.Ci)}static Ri(t,e){return ps(t.Ci,e.Ci)||js.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.xi=1,this.Ni=new Ti(kl.Ei)}checkEmpty(t){return xc.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,r){const s=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const i=new Uc(s,e,n,r);this.Bs.push(i);for(const o of r)this.Ni=this.Ni.add(new kl(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return xc.resolve(i)}lookupMutationBatch(t,e){return xc.resolve(this.ki(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Mi(n),s=r<0?0:r;return xc.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return xc.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(t){return xc.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new kl(e,0),r=new kl(e,Number.POSITIVE_INFINITY),s=[];return this.Ni.forEachInRange([n,r],(t=>{const e=this.ki(t.Ci);s.push(e)})),xc.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ti(ps);return e.forEach((t=>{const e=new kl(t,0),r=new kl(t,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([e,r],(t=>{n=n.add(t.Ci)}))})),xc.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;js.isDocumentKey(s)||(s=s.child(""));const i=new kl(new js(s),0);let o=new Ti(ps);return this.Ni.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Ci)),!0)}),i),xc.resolve(this.Oi(o))}Oi(t){const e=[];return t.forEach((t=>{const n=this.ki(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Jr(0===this.Fi(e.batchId,"removed")),this.Bs.shift();let n=this.Ni;return xc.forEach(e.mutations,(r=>{const s=new kl(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Ni=n}))}_n(t){}containsKey(t,e){const n=new kl(e,0),r=this.Ni.firstAfterOrEqual(n);return xc.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.Bs.length,xc.resolve()}Fi(t,e){return this.Mi(t)}Mi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}ki(t){const e=this.Mi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this.$i=t,this.docs=new _i(js.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.$i(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return xc.resolve(n?n.document.mutableCopy():hi.newInvalidDocument(e))}getEntries(t,e){let n=ta();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():hi.newInvalidDocument(t))})),xc.resolve(n)}getAllFromCollection(t,e,n){let r=ta();const s=new js(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||bi(vi(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return xc.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Yr()}Bi(t,e){return xc.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Rl(this)}getSize(t){return xc.resolve(this.size)}}class Rl extends zu{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Kn.addEntry(t,r)):this.Kn.removeEntry(n)})),xc.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.persistence=t,this.Li=new Xo((t=>ki(t)),Ni),this.lastRemoteSnapshotVersion=vs.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Cl,this.targetCount=0,this.Ki=Mu.gn()}forEachTarget(t,e){return this.Li.forEach(((t,n)=>e(n))),xc.resolve()}getLastRemoteSnapshotVersion(t){return xc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return xc.resolve(this.Ui)}allocateTargetId(t){return this.highestTargetId=this.Ki.next(),xc.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ui&&(this.Ui=e),xc.resolve()}Tn(t){this.Li.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ki=new Mu(e),this.highestTargetId=e),t.sequenceNumber>this.Ui&&(this.Ui=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,xc.resolve()}updateTargetData(t,e){return this.Tn(e),xc.resolve()}removeTargetData(t,e){return this.Li.delete(e.target),this.qi.vi(e.targetId),this.targetCount-=1,xc.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Li.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Li.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),xc.waitFor(s).next((()=>r))}getTargetCount(t){return xc.resolve(this.targetCount)}getTargetData(t,e){const n=this.Li.get(e)||null;return xc.resolve(n)}addMatchingKeys(t,e,n){return this.qi.bi(e,n),xc.resolve()}removeMatchingKeys(t,e,n){this.qi.Vi(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),xc.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.qi.vi(e),xc.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qi.Di(e);return xc.resolve(n)}containsKey(t,e){return xc.resolve(this.qi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e){this.Gi={},this.overlays={},this.es=new hs(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Ol(this),this.indexManager=new yu,this.ds=function(t){return new Nl(t)}((t=>this.referenceDelegate.Qi(t))),this.M=new $c(e),this._s=new Al(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Gi[t.toKey()];return n||(n=new Dl(e,this.referenceDelegate),this.Gi[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){zr("MemoryPersistence","Starting transaction:",t);const r=new Ll(this.es.next());return this.referenceDelegate.ji(),n(r).next((t=>this.referenceDelegate.Wi(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}zi(t,e){return xc.or(Object.values(this.Gi).map((n=>()=>n.containsKey(t,e))))}}class Ll extends Ac{constructor(t){super(),this.currentSequenceNumber=t}}class Pl{constructor(t){this.persistence=t,this.Hi=new Cl,this.Ji=null}static Yi(t){return new Pl(t)}get Xi(){if(this.Ji)return this.Ji;throw Yr()}addReference(t,e,n){return this.Hi.addReference(n,e),this.Xi.delete(n.toString()),xc.resolve()}removeReference(t,e,n){return this.Hi.removeReference(n,e),this.Xi.add(n.toString()),xc.resolve()}markPotentiallyOrphaned(t,e){return this.Xi.add(e.toString()),xc.resolve()}removeTarget(t,e){this.Hi.vi(e.targetId).forEach((t=>this.Xi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ji(){this.Ji=new Set}Wi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return xc.forEach(this.Xi,(n=>{const r=js.fromPath(n);return this.Zi(t,r).next((t=>{t||e.removeEntry(r,vs.min())}))})).next((()=>(this.Ji=null,e.apply(t))))}updateLimboDocument(t,e){return this.Zi(t,e).next((t=>{t?this.Xi.delete(e.toString()):this.Xi.add(e.toString())}))}Qi(t){return 0}Zi(t,e){return xc.or([()=>xc.resolve(this.Hi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e){return`firestore_clients_${t}_${e}`}function Vl(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ul(t,e){return`firestore_targets_${t}_${e}`}class Bl{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static tr(t,e,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new es(r.error.code,r.error.message))),i?new Bl(t,e,r.state,s):(Wr("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}er(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class jl{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static tr(t,e){const n=JSON.parse(e);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new es(n.error.code,n.error.message))),s?new jl(t,n.state,r):(Wr("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}er(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class ql{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static tr(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=ca();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=Bs(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new ql(t,s):(Wr("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class $l{constructor(t,e){this.clientId=t,this.onlineState=e}static tr(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new $l(e.clientId,e.onlineState):(Wr("SharedClientState",`Failed to parse online state: ${t}`),null)}}class Gl{constructor(){this.activeTargetIds=ca()}nr(t){this.activeTargetIds=this.activeTargetIds.add(t)}sr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}er(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kl{constructor(t,e,n,r,s){this.window=t,this.Yn=e,this.persistenceKey=n,this.ir=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.rr=this.ur.bind(this),this.ar=new _i(ps),this.started=!1,this.cr=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.hr=Fl(this.persistenceKey,this.ir),this.lr=function(t){return`firestore_sequence_number_${t}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ar=this.ar.insert(this.ir,new Gl),this.dr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this._r=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.wr=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.mr=function(t){return`firestore_online_state_${t}`}(this.persistenceKey),this.gr=function(t){return`firestore_bundle_loaded_v2_${t}`}(this.persistenceKey),this.window.addEventListener("storage",this.rr)}static vt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Fs();for(const n of t){if(n===this.ir)continue;const t=this.getItem(Fl(this.persistenceKey,n));if(t){const e=ql.tr(n,t);e&&(this.ar=this.ar.insert(e.clientId,e))}}this.yr();const e=this.storage.getItem(this.mr);if(e){const t=this.pr(e);t&&this.Ir(t)}for(const n of this.cr)this.ur(n);this.cr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.lr,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Tr(this.ar)}isActiveQueryTarget(t){let e=!1;return this.ar.forEach(((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.Er(t,"pending")}updateMutationState(t,e,n){this.Er(t,e,n),this.Ar(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(Ul(this.persistenceKey,t));if(n){const r=jl.tr(t,n);r&&(e=r.state)}}return this.Rr.nr(t),this.yr(),e}removeLocalQueryTarget(t){this.Rr.sr(t),this.yr()}isLocalQueryTarget(t){return this.Rr.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Ul(this.persistenceKey,t))}updateQueryState(t,e,n){this.br(t,e,n)}handleUserChange(t,e,n){e.forEach((t=>{this.Ar(t)})),this.currentUser=t,n.forEach((t=>{this.addPendingMutation(t)}))}setOnlineState(t){this.Pr(t)}notifyBundleLoaded(t){this.Vr(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.rr),this.removeItem(this.hr),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return zr("SharedClientState","READ",t,e),e}setItem(t,e){zr("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){zr("SharedClientState","REMOVE",t),this.storage.removeItem(t)}ur(t){const e=t;if(e.storageArea===this.storage){if(zr("SharedClientState","EVENT",e.key,e.newValue),e.key===this.hr)return void Wr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Yn.enqueueRetryable((async()=>{if(this.started){if(null!==e.key)if(this.dr.test(e.key)){if(null==e.newValue){const t=this.vr(e.key);return this.Sr(t,null)}{const t=this.Dr(e.key,e.newValue);if(t)return this.Sr(t.clientId,t)}}else if(this._r.test(e.key)){if(null!==e.newValue){const t=this.Cr(e.key,e.newValue);if(t)return this.Nr(t)}}else if(this.wr.test(e.key)){if(null!==e.newValue){const t=this.kr(e.key,e.newValue);if(t)return this.Mr(t)}}else if(e.key===this.mr){if(null!==e.newValue){const t=this.pr(e.newValue);if(t)return this.Ir(t)}}else if(e.key===this.lr){const t=function(t){let e=hs.A;if(null!=t)try{const n=JSON.parse(t);Jr("number"==typeof n),e=n}catch(t){Wr("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==hs.A&&this.sequenceNumberHandler(t)}else if(e.key===this.gr){const t=this.Or(e.newValue);await Promise.all(t.map((t=>this.syncEngine.Fr(t))))}}else this.cr.push(e)}))}}get Rr(){return this.ar.get(this.ir)}yr(){this.setItem(this.hr,this.Rr.er())}Er(t,e,n){const r=new Bl(this.currentUser,t,e,n),s=Vl(this.persistenceKey,this.currentUser,t);this.setItem(s,r.er())}Ar(t){const e=Vl(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Pr(t){const e={clientId:this.ir,onlineState:t};this.storage.setItem(this.mr,JSON.stringify(e))}br(t,e,n){const r=Ul(this.persistenceKey,t),s=new jl(t,e,n);this.setItem(r,s.er())}Vr(t){const e=JSON.stringify(Array.from(t));this.setItem(this.gr,e)}vr(t){const e=this.dr.exec(t);return e?e[1]:null}Dr(t,e){const n=this.vr(t);return ql.tr(n,e)}Cr(t,e){const n=this._r.exec(t),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Bl.tr(new jr(s),r,e)}kr(t,e){const n=this.wr.exec(t),r=Number(n[1]);return jl.tr(r,e)}pr(t){return $l.tr(t)}Or(t){return JSON.parse(t)}async Nr(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.$r(t.batchId,t.state,t.error);zr("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}Mr(t){return this.syncEngine.Br(t.targetId,t.state,t.error)}Sr(t,e){const n=e?this.ar.insert(t,e):this.ar.remove(t),r=this.Tr(this.ar),s=this.Tr(n),i=[],o=[];return s.forEach((t=>{r.has(t)||i.push(t)})),r.forEach((t=>{s.has(t)||o.push(t)})),this.syncEngine.Lr(i,o).then((()=>{this.ar=n}))}Ir(t){this.ar.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Tr(t){let e=ca();return t.forEach(((t,n)=>{e=e.unionWith(n.activeTargetIds)})),e}}class zl{constructor(){this.Ur=new Gl,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Ur.nr(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Ur.sr(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new Gl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{Kr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Wr(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){this.Jr=t.Jr,this.Yr=t.Yr}Xr(t){this.Zr=t}eo(t){this.no=t}onMessage(t){this.so=t}close(){this.Yr()}send(t){this.Jr(t)}io(){this.Zr()}ro(t){this.no(t)}oo(t){this.so(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.uo=e+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,r,s){const i=this.ho(t,e);zr("RestConnection","Sending: ",i,n);const o={};return this.lo(o,r,s),this.fo(t,i,o,n).then((t=>(zr("RestConnection","Received: ",t),t)),(e=>{throw Hr("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}_o(t,e,n,r,s){return this.co(t,e,n,r,s)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+qr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=Ql[t];return`${this.uo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise(((s,i)=>{const o=new Ur;o.listenOnce(Mr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Or.NO_ERROR:const e=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Or.TIMEOUT:zr("Connection",'RPC "'+t+'" timed out'),i(new es(ts.DEADLINE_EXCEEDED,"Request time out"));break;case Or.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ts).indexOf(e)>=0?e:ts.UNKNOWN}(t.status);i(new es(e,t.message))}else i(new es(ts.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new es(ts.UNAVAILABLE,"Connection failed."));break;default:Yr()}}finally{zr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Nr(),i=Rr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Fr({})),this.lo(o.initMessageHeaders,e,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");zr("Connection","Creating WebChannel: "+a,o);const u=s.createWebChannel(a,o);let l=!1,h=!1;const d=new Yl({Jr:t=>{h?zr("Connection","Not sending because WebChannel is closed:",t):(l||(zr("Connection","Opening WebChannel transport."),u.open(),l=!0),zr("Connection","WebChannel sending:",t),u.send(t))},Yr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,Vr.EventType.OPEN,(()=>{h||zr("Connection","WebChannel transport opened.")})),f(u,Vr.EventType.CLOSE,(()=>{h||(h=!0,zr("Connection","WebChannel transport closed"),d.ro())})),f(u,Vr.EventType.ERROR,(t=>{h||(h=!0,Hr("Connection","WebChannel transport errored:",t),d.ro(new es(ts.UNAVAILABLE,"The operation could not be completed")))})),f(u,Vr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Jr(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){zr("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Ho[t];if(void 0!==e)return Jo(e)}(t),n=s.message;void 0===e&&(e=ts.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),h=!0,d.ro(new es(e,n)),u.close()}else zr("Connection","WebChannel received:",n),d.oo(n)}})),f(i,Lr.STAT_EVENT,(t=>{t.stat===Pr.PROXY?zr("Connection","Detected buffering proxy"):t.stat===Pr.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.io()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){return"undefined"!=typeof window?window:null}function Zl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t){return new ba(t,!0)}class eh{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Yn=t,this.timerId=e,this.mo=n,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e,n,r,s,i,o,a){this.Yn=t,this.Vo=n,this.vo=r,this.So=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new eh(t,e)}ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===ts.RESOURCE_EXHAUSTED?(Wr(e.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===ts.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.eo(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new es(ts.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Xr((()=>{n((()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.eo((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Yn.enqueueAndForget((()=>this.Do===t?e():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rh extends nh{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.M=s}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=Pa(this.M,t),n=function(t){if(!("targetChange"in t))return vs.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?vs.min():e.readTime?Ta(e.readTime):vs.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=Na(this.M),e.addTarget=function(t,e){let n;const r=e.target;return n=Ri(r)?{documents:Ba(t,r)}:{query:ja(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Ea(t,e.resumeToken):e.snapshotVersion.compareTo(vs.min())>0&&(n.readTime=_a(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=$a(this.M,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=Na(this.M),e.removeTarget=t,this.Lo(e)}}class sh extends nh{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.M=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,e){return this.So.wo("Write",t,e)}onMessage(t){if(Jr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const e=Ua(t.writeResults,t.commitTime),n=Ta(t.commitTime);return this.listener.tu(n,e)}return Jr(!t.writeResults||0===t.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=Na(this.M),this.Lo(t)}Zo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Fa(this.M,t)))};this.Lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.M=r,this.su=!1}iu(){if(this.su)throw new es(ts.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.So.co(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ts.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new es(ts.UNKNOWN,t.toString())}))}_o(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.So._o(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ts.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new es(ts.UNKNOWN,t.toString())}))}terminate(){this.su=!0}}class oh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Wr(e),this.uu=!1):zr("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.Kr((t=>{n.enqueueAndForget((async()=>{mh(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Zr(t);e.wu.add(4),await uh(e),e.yu.set("Unknown"),e.wu.delete(4),await ch(e)}(this))}))})),this.yu=new oh(n,r)}}async function ch(t){if(mh(t))for(const e of t.mu)await e(!0)}async function uh(t){for(const e of t.mu)await e(!1)}function lh(t,e){const n=Zr(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),gh(n)?ph(n):Mh(n).Mo()&&dh(n,e))}function hh(t,e){const n=Zr(t),r=Mh(n);n._u.delete(e),r.Mo()&&fh(n,e),0===n._u.size&&(r.Mo()?r.$o():mh(n)&&n.yu.set("Unknown"))}function dh(t,e){t.pu.Z(e.targetId),Mh(t).Ho(e)}function fh(t,e){t.pu.Z(e),Mh(t).Jo(e)}function ph(t){t.pu=new ga({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),Mh(t).start(),t.yu.au()}function gh(t){return mh(t)&&!Mh(t).ko()&&t._u.size>0}function mh(t){return 0===Zr(t).wu.size}function yh(t){t.pu=void 0}async function vh(t){t._u.forEach(((e,n)=>{dh(t,e)}))}async function wh(t,e){yh(t),gh(t)?(t.yu.lu(e),ph(t)):t.yu.set("Unknown")}async function bh(t,e,n){if(t.yu.set("Online"),e instanceof fa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t._u.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t._u.delete(r),t.pu.removeTarget(r))}(t,e)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await _h(t,n)}else if(e instanceof ha?t.pu.ut(e):e instanceof da?t.pu._t(e):t.pu.ht(e),!n.isEqual(vs.min()))try{const e=await pl(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t._u.get(r);s&&t._u.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(Cs.EMPTY_BYTE_STRING,n.snapshotVersion)),fh(t,e);const r=new qc(n.target,e,1,n.sequenceNumber);dh(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){zr("RemoteStore","Failed to raise snapshot:",e),await _h(t,e)}}async function _h(t,e,n){if(!Rc(e))throw e;t.wu.add(1),await uh(t),t.yu.set("Offline"),n||(n=()=>pl(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ch(t)}))}function Eh(t,e){return e().catch((n=>_h(t,n,e)))}async function Ih(t){const e=Zr(t),n=Lh(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;Th(e);)try{const t=await yl(e.localStore,r);if(null===t){0===e.du.length&&n.$o();break}r=t.batchId,Sh(e,t)}catch(t){await _h(e,t)}Ah(e)&&xh(e)}function Th(t){return mh(t)&&t.du.length<10}function Sh(t,e){t.du.push(e);const n=Lh(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function Ah(t){return mh(t)&&!Lh(t).ko()&&t.du.length>0}function xh(t){Lh(t).start()}async function Ch(t){Lh(t).nu()}async function kh(t){const e=Lh(t);for(const n of t.du)e.Zo(n.mutations)}async function Dh(t,e,n){const r=t.du.shift(),s=Bc.from(r,e,n);await Eh(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ih(t)}async function Nh(t,e){e&&Lh(t).Xo&&await async function(t,e){if(n=e.code,Yo(n)&&n!==ts.ABORTED){const n=t.du.shift();Lh(t).Fo(),await Eh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ih(t)}var n}(t,e),Ah(t)&&xh(t)}async function Rh(t,e){const n=Zr(t);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=mh(n);n.wu.add(3),await uh(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ch(n)}async function Oh(t,e){const n=Zr(t);e?(n.wu.delete(2),await ch(n)):e||(n.wu.add(2),await uh(n),n.yu.set("Unknown"))}function Mh(t){return t.Iu||(t.Iu=function(t,e,n){const r=Zr(t);return r.iu(),new rh(e,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Xr:vh.bind(null,t),eo:wh.bind(null,t),zo:bh.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),gh(t)?ph(t):t.yu.set("Unknown")):(await t.Iu.stop(),yh(t))}))),t.Iu}function Lh(t){return t.Tu||(t.Tu=function(t,e,n){const r=Zr(t);return r.iu(),new sh(e,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(t.datastore,t.asyncQueue,{Xr:Ch.bind(null,t),eo:Nh.bind(null,t),eu:kh.bind(null,t),tu:Dh.bind(null,t)}),t.mu.push((async e=>{e?(t.Tu.Fo(),await Ih(t)):(await t.Tu.stop(),t.du.length>0&&(zr("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))}))),t.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ph{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Ph(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new es(ts.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fh(t,e){if(Wr("AsyncQueue",`${e}: ${t}`),Rc(t))return new es(ts.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||js.comparator(e.key,n.key):(t,e)=>js.comparator(t.key,e.key),this.keyedMap=na(),this.sortedSet=new _i(this.comparator)}static emptySet(t){return new Vh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Vh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Vh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.Eu=new _i(js.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):Yr():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Bh{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Bh(t,e,Vh.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&oo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.Ru=void 0,this.listeners=[]}}class qh{constructor(){this.queries=new Xo((t=>ao(t)),oo),this.onlineState="Unknown",this.bu=new Set}}async function $h(t,e){const n=Zr(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new jh),s)try{i.Ru=await n.onListen(r)}catch(t){const n=Fh(t,`Initialization of query '${co(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&Wh(n)}async function Gh(t,e){const n=Zr(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Kh(t,e){const n=Zr(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Vu(s)&&(r=!0);e.Ru=s}}r&&Wh(n)}function zh(t,e,n){const r=Zr(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Wh(t){t.bu.forEach((t=>{t.next()}))}class Hh{constructor(t,e,n){this.query=t,this.vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}Vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Bh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Su?this.Cu(t)&&(this.vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=Bh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Su=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e){this.payload=t,this.byteLength=e}Mu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t){this.M=t}wi(t){return Ca(this.M,t)}mi(t){return t.metadata.exists?Ma(this.M,t.document,!1):hi.newNoDocument(this.wi(t.metadata.name),this.gi(t.metadata.readTime))}gi(t){return Ta(t)}}class Jh{constructor(t,e,n){this.Ou=t,this.localStore=e,this.M=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Xh(t)}Fu(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.payload.namedQuery)this.queries.push(t.payload.namedQuery);else if(t.payload.documentMetadata){this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e;const n=Is.fromString(t.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}$u(t){const e=new Map,n=new Yh(this.M);for(const r of t)if(r.metadata.queries){const t=n.wi(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||oa()).add(t);e.set(n,r)}}return e}async complete(){const t=await Tl(this.localStore,new Yh(this.M),this.documents,this.Ou.id),e=this.$u(this.documents);for(const n of this.queries)await Sl(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:t}}}function Xh(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.key=t}}class td{constructor(t){this.key=t}}class ed{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.current=!1,this.Ku=oa(),this.mutatedKeys=oa(),this.Gu=ho(t),this.Qu=new Vh(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new Uh,r=e?e.Qu:this.Qu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=uo(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Qu:i,zu:n,ii:o,mutatedKeys:s}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Au();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Yr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const i=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==s.length||a?{snapshot:new Bh(this.query,t.Qu,r,s,t.mutatedKeys,0===o,a,!1),Xu:i}:{Xu:i}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Uh,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=oa(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new td(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Zh(n))})),e}ta(t){this.Uu=t._i,this.Ku=oa();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ea(){return Bh.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}}class nd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class rd{constructor(t){this.key=t,this.na=!1}}class sd{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sa={},this.ia=new Xo((t=>ao(t)),oo),this.ra=new Map,this.oa=new Set,this.ua=new _i(js.comparator),this.aa=new Map,this.ca=new Cl,this.ha={},this.la=new Map,this.fa=Mu.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return!0===this.da}}async function id(t,e){const n=Md(t);let r,s;const i=n.ia.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ea();else{const t=await vl(n.localStore,so(e));n.isPrimaryClient&&lh(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await od(n,e,r,"current"===i)}return s}async function od(t,e,n,r){t._a=(e,n,r)=>async function(t,e,n,r){let s=e.view.Wu(n);s.ii&&(s=await bl(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return wd(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const s=await bl(t.localStore,e,!0),i=new ed(e,s._i),o=i.Wu(s.documents),a=la.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);wd(t,n,c.Xu);const u=new nd(e,n,i);return t.ia.set(e,u),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function ad(t,e){const n=Zr(t),r=n.ia.get(e),s=n.ra.get(r.targetId);if(s.length>1)return n.ra.set(r.targetId,s.filter((t=>!oo(t,e)))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),hh(n.remoteStore,r.targetId),yd(n,r.targetId)})).catch(Uu)):(yd(n,r.targetId),await wl(n.localStore,r.targetId,!0))}async function cd(t,e,n){const r=Ld(t);try{const t=await function(t,e){const n=Zr(t),r=ys.now(),s=e.reduce(((t,e)=>t.add(e.key)),oa());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.fi.Ks(t,s).next((s=>{i=s;const o=[];for(const t of e){const e=Fo(t,i.get(t.key));null!=e&&o.push(new jo(t.key,e,li(e.value.mapValue),Ro.exists(!0)))}return n.Bs.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(i),{batchId:t.batchId,changes:i})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.ha[t.currentUser.toKey()];r||(r=new _i(ps)),r=r.insert(e,n),t.ha[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ed(r,t.changes),await Ih(r.remoteStore)}catch(t){const e=Fh(t,"Failed to persist write");n.reject(e)}}async function ud(t,e){const n=Zr(t);try{const t=await gl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.aa.get(e);r&&(Jr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.na=!0:t.modifiedDocuments.size>0?Jr(r.na):t.removedDocuments.size>0&&(Jr(r.na),r.na=!1))})),await Ed(n,t,e)}catch(t){await Uu(t)}}function ld(t,e,n){const r=Zr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ia.forEach(((n,r)=>{const s=r.view.Pu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Zr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Pu(e)&&(r=!0)})),r&&Wh(n)}(r.eventManager,e),t.length&&r.sa.zo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hd(t,e,n){const r=Zr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.aa.get(e),i=s&&s.key;if(i){let t=new _i(js.comparator);t=t.insert(i,hi.newNoDocument(i,vs.min()));const n=oa().add(i),s=new ua(vs.min(),new Map,new Ti(ps),t,n);await ud(r,s),r.ua=r.ua.remove(i),r.aa.delete(e),_d(r)}else await wl(r.localStore,e,!1).then((()=>yd(r,e,n))).catch(Uu)}async function dd(t,e){const n=Zr(t),r=e.batch.batchId;try{const t=await fl(n.localStore,e);md(n,r,null),gd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ed(n,t)}catch(t){await Uu(t)}}async function fd(t,e,n){const r=Zr(t);try{const t=await function(t,e){const n=Zr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.Bs.lookupMutationBatch(t,e).next((e=>(Jr(null!==e),r=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.fi.Ks(t,r)))}))}(r.localStore,e);md(r,e,n),gd(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ed(r,t)}catch(n){await Uu(n)}}async function pd(t,e){const n=Zr(t);mh(n.remoteStore)||zr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=Zr(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(t=>e.Bs.getHighestUnacknowledgedBatchId(t)))}(n.localStore);if(-1===t)return void e.resolve();const r=n.la.get(t)||[];r.push(e),n.la.set(t,r)}catch(t){const n=Fh(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function gd(t,e){(t.la.get(e)||[]).forEach((t=>{t.resolve()})),t.la.delete(e)}function md(t,e,n){const r=Zr(t);let s=r.ha[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.ha[r.currentUser.toKey()]=s}}function yd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach((e=>{t.ca.containsKey(e)||vd(t,e)}))}function vd(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);null!==n&&(hh(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),_d(t))}function wd(t,e,n){for(const r of n)r instanceof Zh?(t.ca.addReference(r.key,e),bd(t,r)):r instanceof td?(zr("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||vd(t,r.key)):Yr()}function bd(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(zr("SyncEngine","New document in limbo: "+n),t.oa.add(r),_d(t))}function _d(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new js(Is.fromString(e)),r=t.fa.next();t.aa.set(r,new rd(n)),t.ua=t.ua.insert(n,r),lh(t.remoteStore,new qc(so(Xi(n.path)),r,2,hs.A))}}async function Ed(t,e,n){const r=Zr(t),s=[],i=[],o=[];r.ia.isEmpty()||(r.ia.forEach(((t,a)=>{o.push(r._a(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=cl.Ys(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.sa.zo(s),await async function(t,e){const n=Zr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>xc.forEach(e,(e=>xc.forEach(e.Hs,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>xc.forEach(e.Js,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Rc(t))throw t;zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.ui.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.ui=n.ui.insert(t,s)}}}(r.localStore,i))}async function Id(t,e){const n=Zr(t);if(!n.currentUser.isEqual(e)){zr("SyncEngine","User change. New user:",e.toKey());const t=await dl(n.localStore,e);n.currentUser=e,function(t,e){t.la.forEach((t=>{t.forEach((t=>{t.reject(new es(ts.CANCELLED,e))}))})),t.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ed(n,t.di)}}function Td(t,e){const n=Zr(t),r=n.aa.get(e);if(r&&r.na)return oa().add(r.key);{let t=oa();const r=n.ra.get(e);if(!r)return t;for(const e of r){const r=n.ia.get(e);t=t.unionWith(r.view.ju)}return t}}async function Sd(t,e){const n=Zr(t),r=await bl(n.localStore,e.query,!0),s=e.view.ta(r);return n.isPrimaryClient&&wd(n,e.targetId,s.Xu),s}async function Ad(t,e){const n=Zr(t);return El(n.localStore,e).then((t=>Ed(n,t)))}async function xd(t,e,n,r){const s=Zr(t),i=await function(t,e){const n=Zr(t),r=Zr(n.Bs);return n.persistence.runTransaction("Lookup mutation documents","readonly",(t=>r.fn(t,e).next((e=>e?n.fi.Ks(t,e):xc.resolve(null)))))}(s.localStore,e);null!==i?("pending"===n?await Ih(s.remoteStore):"acknowledged"===n||"rejected"===n?(md(s,e,r||null),gd(s,e),function(t,e){Zr(Zr(t).Bs)._n(e)}(s.localStore,e)):Yr(),await Ed(s,i)):zr("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Cd(t,e){const n=Zr(t);if(Md(n),Ld(n),!0===e&&!0!==n.da){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await kd(n,t.toArray());n.da=!0,await Oh(n.remoteStore,!0);for(const r of e)lh(n.remoteStore,r)}else if(!1===e&&!1!==n.da){const t=[];let e=Promise.resolve();n.ra.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?t.push(s):e=e.then((()=>(yd(n,s),wl(n.localStore,s,!0)))),hh(n.remoteStore,s)})),await e,await kd(n,t),function(t){const e=Zr(t);e.aa.forEach(((t,n)=>{hh(e.remoteStore,n)})),e.ca.Si(),e.aa=new Map,e.ua=new _i(js.comparator)}(n),n.da=!1,await Oh(n.remoteStore,!1)}}async function kd(t,e,n){const r=Zr(t),s=[],i=[];for(const o of e){let t;const e=r.ra.get(o);if(e&&0!==e.length){t=await vl(r.localStore,so(e[0]));for(const t of e){const e=r.ia.get(t),n=await Sd(r,e);n.snapshot&&i.push(n.snapshot)}}else{const e=await _l(r.localStore,o);t=await vl(r.localStore,e),await od(r,Dd(e),o,!1)}s.push(t)}return r.sa.zo(i),s}function Dd(t){return Ji(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function Nd(t){const e=Zr(t);return Zr(Zr(e.localStore).persistence).Fs()}async function Rd(t,e,n,r){const s=Zr(t);if(s.da)return void zr("SyncEngine","Ignoring unexpected query state notification.");const i=s.ra.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const t=await El(s.localStore,lo(i[0])),r=ua.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await Ed(s,t,r);break}case"rejected":await wl(s.localStore,e,!0),yd(s,e,r);break;default:Yr()}}async function Od(t,e,n){const r=Md(t);if(r.da){for(const t of e){if(r.ra.has(t)){zr("SyncEngine","Adding an already active target "+t);continue}const e=await _l(r.localStore,t),n=await vl(r.localStore,e);await od(r,Dd(e),n.targetId,!1),lh(r.remoteStore,n)}for(const t of n)r.ra.has(t)&&await wl(r.localStore,t,!1).then((()=>{hh(r.remoteStore,t),yd(r,t)})).catch(Uu)}}function Md(t){const e=Zr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ud.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Td.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hd.bind(null,e),e.sa.zo=Kh.bind(null,e.eventManager),e.sa.wa=zh.bind(null,e.eventManager),e}function Ld(t){const e=Zr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fd.bind(null,e),e}function Pd(t,e,n){const r=Zr(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=Zr(t),r=Ta(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(t=>n._s.getBundleMetadata(t,e.id))).then((t=>!!t&&t.createTime.compareTo(r)>=0))}(t.localStore,r))return await e.close(),n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Xh(r));const s=new Jh(r,t.localStore,e.M);let i=await e.ma();for(;i;){const t=await s.Fu(i);t&&n._updateProgress(t),i=await e.ma()}const o=await s.complete();return await Ed(t,o.Lu,void 0),await function(t,e){const n=Zr(t);return n.persistence.runTransaction("Save bundle","readwrite",(t=>n._s.saveBundleMetadata(t,e)))}(t.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(t){return Hr("SyncEngine",`Loading bundle failed with ${t}`),n._failWith(t),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,e,n).then((t=>{r.sharedClientState.notifyBundleLoaded(t)}))}class Fd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=th(t.databaseInfo.databaseId),this.sharedClientState=this.ga(t),this.persistence=this.ya(t),await this.persistence.start(),this.gcScheduler=this.pa(t),this.localStore=this.Ia(t)}pa(t){return null}Ia(t){return hl(this.persistence,new ul,t.initialUser,this.M)}ya(t){return new Ml(Pl.Yi,this.M)}ga(t){return new zl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vd extends Fd{constructor(t,e,n){super(),this.Ta=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Ta.initialize(this,t),await Ld(this.Ta.syncEngine),await Ih(this.Ta.remoteStore),await this.persistence.Ts((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}Ia(t){return hl(this.persistence,new ul,t.initialUser,this.M)}pa(t){const e=this.persistence.referenceDelegate.garbageCollector;return new qu(e,t.asyncQueue)}ya(t){const e=ol(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Au.withCacheSize(this.cacheSizeBytes):Au.DEFAULT;return new rl(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Xl(),Zl(),this.M,this.sharedClientState,!!this.forceOwnership)}ga(t){return new zl}}class Ud extends Vd{constructor(t,e){super(t,e,!1),this.Ta=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Ta.syncEngine;this.sharedClientState instanceof Kl&&(this.sharedClientState.syncEngine={$r:xd.bind(null,e),Br:Rd.bind(null,e),Lr:Od.bind(null,e),Fs:Nd.bind(null,e),Fr:Ad.bind(null,e)},await this.sharedClientState.start()),await this.persistence.Ts((async t=>{await Cd(this.Ta.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())}))}ga(t){const e=Xl();if(!Kl.vt(e))throw new es(ts.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ol(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Kl(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Bd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ld(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Id.bind(null,this.syncEngine),await Oh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new qh}createDatastore(t){const e=th(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Jl(r));var r;return function(t,e,n,r){return new ih(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>ld(this.syncEngine,t,0),i=Hl.vt()?new Hl:new Wl,new ah(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new sd(t,e,n,r,s,i);return o&&(a.da=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Zr(t);zr("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await uh(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ea(this.observer.next,t)}error(t){this.observer.error?this.Ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Aa(){this.muted=!0}Ea(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e){this.Ra=t,this.M=e,this.metadata=new ns,this.buffer=new Uint8Array,this.ba=new TextDecoder("utf-8"),this.Pa().then((t=>{t&&t.Mu()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==t?void 0:t.payload)}`))}),(t=>this.metadata.reject(t)))}close(){return this.Ra.cancel()}async getMetadata(){return this.metadata.promise}async ma(){return await this.getMetadata(),this.Pa()}async Pa(){const t=await this.Va();if(null===t)return null;const e=this.ba.decode(t),n=Number(e);isNaN(n)&&this.va(`length string (${e}) is not valid number`);const r=await this.Sa(n);return new Qh(JSON.parse(r),t.length+n)}Da(){return this.buffer.findIndex((t=>t==="{".charCodeAt(0)))}async Va(){for(;this.Da()<0;)if(await this.Ca())break;if(0===this.buffer.length)return null;const t=this.Da();t<0&&this.va("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Sa(t){for(;this.buffer.length<t;)await this.Ca()&&this.va("Reached the end of bundle when more is expected.");const e=this.ba.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}va(t){throw this.Ra.cancel(),new Error(`Invalid bundle format: ${t}`)}async Ca(){const t=await this.Ra.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new es(ts.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=Zr(t),r=Na(n.M)+"/documents",s={documents:e.map((t=>xa(n.M,t)))},i=await n._o("BatchGetDocuments",r,s),o=new Map;i.forEach((t=>{const e=La(n.M,t);o.set(e.key.toString(),e)}));const a=[];return e.forEach((t=>{const e=o.get(t.toString());Jr(!!e),a.push(e)})),a}(this.datastore,t);return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ko(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=js.fromPath(e);this.mutations.push(new zo(n,this.precondition(n)))})),await async function(t,e){const n=Zr(t),r=Na(n.M)+"/documents",s={writes:e.map((t=>Fa(n.M,t)))};await n.co("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw Yr();e=vs.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new es(ts.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Ro.updateTime(e):Ro.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(vs.min()))throw new es(ts.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ro.updateTime(e)}return Ro.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,e,n,r,s){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=s,this.xa=n.maxAttempts,this.No=new eh(this.asyncQueue,"transaction_retry")}run(){this.xa-=1,this.Na()}Na(){this.No.Ro((async()=>{const t=new Gd(this.datastore),e=this.ka(t);e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.Ma(t)}))))})).catch((t=>{this.Ma(t)}))}))}ka(t){try{const e=this.updateFunction(t);return!Vs(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ma(t){this.xa>0&&this.Oa(t)?(this.xa-=1,this.asyncQueue.enqueueAndForget((()=>(this.Na(),Promise.resolve())))):this.deferred.reject(t)}Oa(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!Yo(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=fs.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new es(ts.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Fh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Wd(t,e){t.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await dl(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Hd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qd(t);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Rh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Rh(e.remoteStore,n))),t.onlineComponents=e}async function Qd(t){return t.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await Wd(t,new Fd)),t.offlineComponents}async function Yd(t){return t.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await Hd(t,new Bd)),t.onlineComponents}function Jd(t){return Qd(t).then((t=>t.persistence))}function Xd(t){return Qd(t).then((t=>t.localStore))}function Zd(t){return Yd(t).then((t=>t.remoteStore))}function tf(t){return Yd(t).then((t=>t.syncEngine))}async function ef(t){const e=await Yd(t),n=e.eventManager;return n.onListen=id.bind(null,e.syncEngine),n.onUnlisten=ad.bind(null,e.syncEngine),n}function nf(t){return t.asyncQueue.enqueue((async()=>{const e=await Jd(t),n=await Zd(t);return e.setNetworkEnabled(!0),function(t){const e=Zr(t);return e.wu.delete(0),ch(e)}(n)}))}function rf(t){return t.asyncQueue.enqueue((async()=>{const e=await Jd(t),n=await Zd(t);return e.setNetworkEnabled(!1),async function(t){const e=Zr(t);e.wu.add(0),await uh(e),e.yu.set("Offline")}(n)}))}function sf(t,e){const n=new ns;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const r=await function(t,e){const n=Zr(t);return n.persistence.runTransaction("read document","readonly",(t=>n.fi.Ls(t,e)))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new es(ts.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=Fh(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await Xd(t),e,n))),n.promise}function of(t,e,n={}){const r=new ns;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new qd({next:i=>{e.enqueueAndForget((()=>Gh(t,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new es(ts.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new es(ts.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new Hh(Xi(n.path),i,{includeMetadataChanges:!0,ku:!0});return $h(t,o)}(await ef(t),t.asyncQueue,e,n,r))),r.promise}function af(t,e){const n=new ns;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const r=await bl(t,e,!0),s=new ed(e,r._i),i=s.Wu(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(t){const r=Fh(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await Xd(t),e,n))),n.promise}function cf(t,e,n={}){const r=new ns;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new qd({next:n=>{e.enqueueAndForget((()=>Gh(t,o))),n.fromCache&&"server"===r.source?s.reject(new es(ts.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Hh(n,i,{includeMetadataChanges:!0,ku:!0});return $h(t,o)}(await ef(t),t.asyncQueue,e,n,r))),r.promise}function uf(t,e){const n=new qd(e);return t.asyncQueue.enqueueAndForget((async()=>function(t,e){Zr(t).bu.add(e),e.next()}(await ef(t),n))),()=>{n.Aa(),t.asyncQueue.enqueueAndForget((async()=>function(t,e){Zr(t).bu.delete(e)}(await ef(t),n)))}}function lf(t,e,n){const r=new ns;return t.asyncQueue.enqueueAndForget((async()=>{const s=await function(t){return Yd(t).then((t=>t.datastore))}(t);new Kd(t.asyncQueue,s,n,e,r).run()})),r.promise}function hf(t,e,n,r){const s=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new $d(t,e)}(function(t,e){if(t instanceof Uint8Array)return jd(t,e);if(t instanceof ArrayBuffer)return jd(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,th(e));t.asyncQueue.enqueueAndForget((async()=>{Pd(await tf(t),s,r)}))}function df(t,e){return t.asyncQueue.enqueue((async()=>function(t,e){const n=Zr(t);return n.persistence.runTransaction("Get named query","readonly",(t=>n._s.getNamedQuery(t,e)))}(await Xd(t),e)))}const ff=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t,e,n){if(!n)throw new es(ts.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gf(t,e,n,r){if(!0===e&&!0===r)throw new es(ts.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mf(t){if(!js.isDocumentKey(t))throw new es(ts.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yf(t){if(js.isDocumentKey(t))throw new es(ts.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Yr()}function wf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new es(ts.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vf(t);throw new es(ts.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function bf(t,e){if(e<=0)throw new es(ts.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new es(ts.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new es(ts.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,gf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _f({}),this._settingsFrozen=!1,t instanceof Fs?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new es(ts.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(t.options.projectId)}(t))}get app(){if(!this._app)throw new es(ts.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new es(ts.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _f(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ss;switch(t.type){case"gapi":const e=t.client;return Jr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new cs(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new es(ts.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ff.get(t);e&&(zr("ComponentProvider","Removing Datastore"),ff.delete(t),e.terminate())}(this),Promise.resolve()}}function If(t,e,n,r={}){var s;const i=(t=wf(t,Ef))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&Hr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=jr.MOCK_USER;else{e=(0,c.Sg)(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new es(ts.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new jr(i)}t._authCredentials=new is(new rs(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Af(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tf(this.firestore,t,this._key)}}class Sf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Sf(this.firestore,t,this._query)}}class Af extends Sf{constructor(t,e,n){super(t,e,Xi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tf(this.firestore,null,new js(t))}withConverter(t){return new Af(this.firestore,t,this._path)}}function xf(t,e,...n){if(t=(0,c.m9)(t),pf("collection","path",e),t instanceof Ef){const r=Is.fromString(e,...n);return yf(r),new Af(t,null,r)}{if(!(t instanceof Tf||t instanceof Af))throw new es(ts.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Is.fromString(e,...n));return yf(r),new Af(t.firestore,null,r)}}function Cf(t,e){if(t=wf(t,Ef),pf("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new es(ts.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Sf(t,null,function(t){return new Yi(Is.emptyPath(),t)}(e))}function kf(t,e,...n){if(t=(0,c.m9)(t),1===arguments.length&&(e=fs.R()),pf("doc","path",e),t instanceof Ef){const r=Is.fromString(e,...n);return mf(r),new Tf(t,null,new js(r))}{if(!(t instanceof Tf||t instanceof Af))throw new es(ts.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Is.fromString(e,...n));return mf(r),new Tf(t.firestore,t instanceof Af?t.converter:null,new js(r))}}function Df(t,e){return t=(0,c.m9)(t),e=(0,c.m9)(e),(t instanceof Tf||t instanceof Af)&&(e instanceof Tf||e instanceof Af)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Nf(t,e){return t=(0,c.m9)(t),e=(0,c.m9)(e),t instanceof Sf&&e instanceof Sf&&t.firestore===e.firestore&&oo(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rf{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new eh(this,"async_queue_retry"),this.Qa=()=>{const t=Zl();t&&zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=Zl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ja(),this.Wa(t)}enterRestrictedMode(t){if(!this.Ba){this.Ba=!0,this.Ka=t||!1;const e=Zl();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Qa)}}enqueue(t){if(this.ja(),this.Ba)return new Promise((()=>{}));const e=new ns;return this.Wa((()=>this.Ba&&this.Ka?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.$a.push(t),this.za())))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(I){if(!Rc(I))throw I;zr("AsyncQueue","Operation failed with retryable error: "+I)}this.$a.length>0&&this.No.Ro((()=>this.za()))}}Wa(t){const e=this.Fa.then((()=>(this.qa=!0,t().catch((t=>{this.Ua=t,this.qa=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Wr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.qa=!1,t))))));return this.Fa=e,e}enqueueAfterDelay(t,e,n){this.ja(),this.Ga.indexOf(t)>-1&&(e=0);const r=Ph.createAndSchedule(this,t,e,n,(t=>this.Ha(t)));return this.La.push(r),r}ja(){this.Ua&&Yr()}verifyOperationInProgress(){}async Ja(){let t;do{t=this.Fa,await t}while(t!==this.Fa)}Ya(t){for(const e of this.La)if(e.timerId===t)return!0;return!1}Xa(t){return this.Ja().then((()=>{this.La.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.La)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Ja()}))}Za(t){this.Ga.push(t)}Ha(t){const e=this.La.indexOf(t);this.La.splice(e,1)}}function Of(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Mf{constructor(){this._progressObserver={},this._taskCompletionResolver=new ns,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=-1;class Pf extends Ef{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Rf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Vf(this),this._firestoreClient.terminate()}}function Ff(t){return t._firestoreClient||Vf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vf(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ps(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new zd(t._authCredentials,t._appCheckCredentials,t._queue,r)}function Uf(t,e){Hf(t=wf(t,Pf));const n=Ff(t),r=t._freezeSettings(),s=new Bd;return jf(n,s,new Vd(s,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function Bf(t){Hf(t=wf(t,Pf));const e=Ff(t),n=t._freezeSettings(),r=new Bd;return jf(e,r,new Ud(r,n.cacheSizeBytes))}function jf(t,e,n){const r=new ns;return t.asyncQueue.enqueue((async()=>{try{await Wd(t,n),await Hd(t,e),r.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===ts.FAILED_PRECONDITION||t.code===ts.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}})).then((()=>r.promise))}function qf(t){if(t._initialized&&!t._terminated)throw new es(ts.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ns;return t._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(t){if(!kc.vt())return Promise.resolve();const e=t+"main";await kc.delete(e)}(ol(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function $f(t){return function(t){const e=new ns;return t.asyncQueue.enqueueAndForget((async()=>pd(await tf(t),e))),e.promise}(Ff(t=wf(t,Pf)))}function Gf(t){return nf(Ff(t=wf(t,Pf)))}function Kf(t){return rf(Ff(t=wf(t,Pf)))}function zf(t,e){const n=Ff(t=wf(t,Pf)),r=new Mf;return hf(n,t._databaseId,e,r),r}function Wf(t,e){return df(Ff(t=wf(t,Pf)),e).then((e=>e?new Sf(t,null,e.query):null))}function Hf(t){if(t._initialized||t._terminated)throw new es(ts.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new es(ts.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ss(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yf{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yf(Cs.fromBase64String(t))}catch(t){throw new es(ts.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Yf(Cs.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new es(ts.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new es(ts.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ps(this._lat,t._lat)||ps(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=/^__.*__$/;class tp{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new jo(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bo(t,this.data,e,this.fieldTransforms)}}class ep{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new jo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function np(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Yr()}}class rp{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=r,void 0===s&&this.tc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(t){return new rp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.nc({path:n,ic:!1});return r.rc(t),r}oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.nc({path:n,ic:!1});return r.tc(),r}uc(t){return this.nc({path:void 0,ic:!0})}ac(t){return Ip(t,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}tc(){if(this.path)for(let t=0;t<this.path.length;t++)this.rc(this.path.get(t))}rc(t){if(0===t.length)throw this.ac("Document fields must not be empty");if(np(this.ec)&&Zf.test(t))throw this.ac('Document fields cannot begin and end with "__"')}}class sp{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||th(t)}lc(t,e,n,r=!1){return new rp({ec:t,methodName:e,hc:n,path:Ss.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function ip(t){const e=t._freezeSettings(),n=th(t._databaseId);return new sp(t._databaseId,!!e.ignoreUndefinedProperties,n)}function op(t,e,n,r,s,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,s);wp("Data must be an object, but it was:",o,r);const a=yp(r,o);let c,u;if(i.merge)c=new As(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=bp(e,r,n);if(!o.contains(s))throw new es(ts.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Tp(t,s)||t.push(s)}c=new As(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new tp(new ui(a),c,u)}class ap extends Jf{_toFieldTransform(t){if(2!==t.ec)throw 1===t.ec?t.ac(`${this._methodName}() can only appear at the top level of your update data`):t.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ap}}function cp(t,e,n){return new rp({ec:3,hc:e.settings.hc,methodName:t._methodName,ic:n},e.databaseId,e.M,e.ignoreUndefinedProperties)}class up extends Jf{_toFieldTransform(t){return new ko(t.path,new _o)}isEqual(t){return t instanceof up}}class lp extends Jf{constructor(t,e){super(t),this.fc=e}_toFieldTransform(t){const e=cp(this,t,!0),n=this.fc.map((t=>mp(t,e))),r=new Eo(n);return new ko(t.path,r)}isEqual(t){return this===t}}class hp extends Jf{constructor(t,e){super(t),this.fc=e}_toFieldTransform(t){const e=cp(this,t,!0),n=this.fc.map((t=>mp(t,e))),r=new To(n);return new ko(t.path,r)}isEqual(t){return this===t}}class dp extends Jf{constructor(t,e){super(t),this.dc=e}_toFieldTransform(t){const e=new Ao(t.M,mo(t.M,this.dc));return new ko(t.path,e)}isEqual(t){return this===t}}function fp(t,e,n,r){const s=t.lc(1,e,n);wp("Data must be an object, but it was:",s,r);const i=[],o=ui.empty();bs(r,((t,r)=>{const a=Ep(e,t,n);r=(0,c.m9)(r);const u=s.oc(a);if(r instanceof ap)i.push(a);else{const t=mp(r,u);null!=t&&(i.push(a),o.set(a,t))}}));const a=new As(i);return new ep(o,a,s.fieldTransforms)}function pp(t,e,n,r,s,i){const o=t.lc(1,e,n),a=[bp(e,r,n)],u=[s];if(i.length%2!=0)throw new es(ts.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<i.length;c+=2)a.push(bp(e,i[c])),u.push(i[c+1]);const l=[],h=ui.empty();for(let f=a.length-1;f>=0;--f)if(!Tp(l,a[f])){const t=a[f];let e=u[f];e=(0,c.m9)(e);const n=o.oc(t);if(e instanceof ap)l.push(t);else{const r=mp(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new As(l);return new ep(h,d,o.fieldTransforms)}function gp(t,e,n,r=!1){return mp(n,t.lc(r?4:3,e))}function mp(t,e){if(vp(t=(0,c.m9)(t)))return wp("Unsupported field value:",e,t),yp(t,e);if(t instanceof Jf)return function(t,e){if(!np(e.ec))throw e.ac(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ac(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&4!==e.ec)throw e.ac("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=mp(s,e.uc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return mo(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ys.fromDate(t);return{timestampValue:_a(e.M,n)}}if(t instanceof ys){const n=new ys(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:_a(e.M,n)}}if(t instanceof Xf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Yf)return{bytesValue:Ea(e.M,t._byteString)};if(t instanceof Tf){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Sa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ac(`Unsupported field value: ${vf(t)}`)}(t,e)}function yp(t,e){const n={};return _s(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,((t,r)=>{const s=mp(r,e.sc(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function vp(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ys||t instanceof Xf||t instanceof Yf||t instanceof Tf||t instanceof Jf)}function wp(t,e,n){if(!vp(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=vf(n);throw"an object"===r?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function bp(t,e,n){if((e=(0,c.m9)(e))instanceof Qf)return e._internalPath;if("string"==typeof e)return Ep(t,e);throw Ip("Field path arguments must be of type string or ",t,!1,void 0,n)}const _p=new RegExp("[~\\*/\\[\\]]");function Ep(t,e,n){if(e.search(_p)>=0)throw Ip(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qf(...e.split("."))._internalPath}catch(r){throw Ip(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ip(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new es(ts.INVALID_ARGUMENT,a+t+c)}function Tp(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ap(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(xp("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ap extends Sp{data(){return super.data()}}function xp(t,e){return"string"==typeof e?Ep(t,e):e instanceof Qf?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class kp extends Sp{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Dp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(xp("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Dp extends kp{data(t={}){return super.data(t)}}class Np{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Cp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Dp(this._firestore,this._userDataWriter,n.key,n,new Cp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new es(ts.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Dp(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Cp(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Dp(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Cp(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Rp(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Rp(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Yr()}}function Op(t,e){return t instanceof kp&&e instanceof kp?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Np&&e instanceof Np&&t._firestore===e._firestore&&Nf(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new es(ts.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lp{}function Pp(t,...e){for(const n of e)t=n._apply(t);return t}class Fp extends Lp{constructor(t,e,n){super(),this._c=t,this.wc=e,this.mc=n,this.type="where"}_apply(t){const e=ip(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new es(ts.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Xp(o,i);const e=[];for(const n of o)e.push(Jp(r,t,n));a={arrayValue:{values:e}}}else a=Jp(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Xp(o,i),a=gp(n,e,o,"in"===i||"not-in"===i);const c=Pi.create(s,i,a);return function(t,e){if(e.S()){const n=eo(t);if(null!==n&&!n.isEqual(e.field))throw new es(ts.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=to(t);null!==r&&Zp(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new es(ts.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new es(ts.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this._c,this.wc,this.mc);return new Sf(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Vp(t,e,n){const r=e,s=xp("where",t);return new Fp(s,r,n)}class Up extends Lp{constructor(t,e){super(),this._c=t,this.gc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new es(ts.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new es(ts.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new zi(e,n);return function(t,e){if(null===to(t)){const n=eo(t);null!==n&&Zp(t,n,e.field)}}(t,r),r}(t._query,this._c,this.gc);return new Sf(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Yi(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Bp(t,e="asc"){const n=e,r=xp("orderBy",t);return new Up(r,n)}class jp extends Lp{constructor(t,e,n){super(),this.type=t,this.yc=e,this.Ic=n}_apply(t){return new Sf(t.firestore,t.converter,io(t._query,this.yc,this.Ic))}}function qp(t){return bf("limit",t),new jp("limit",t,"F")}function $p(t){return bf("limitToLast",t),new jp("limitToLast",t,"L")}class Gp extends Lp{constructor(t,e,n){super(),this.type=t,this.Tc=e,this.Ec=n}_apply(t){const e=Yp(t,this.type,this.Tc,this.Ec);return new Sf(t.firestore,t.converter,function(t,e){return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Kp(...t){return new Gp("startAt",t,!0)}function zp(...t){return new Gp("startAfter",t,!1)}class Wp extends Lp{constructor(t,e,n){super(),this.type=t,this.Tc=e,this.Ec=n}_apply(t){const e=Yp(t,this.type,this.Tc,this.Ec);return new Sf(t.firestore,t.converter,function(t,e){return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Hp(...t){return new Wp("endBefore",t,!1)}function Qp(...t){return new Wp("endAt",t,!0)}function Yp(t,e,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Sp)return function(t,e,n,r,s){if(!r)throw new es(ts.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of ro(t))if(o.field.isKeyField())i.push(Js(e,r.key));else{const t=r.data.field(o.field);if(Os(t))throw new es(ts.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new es(ts.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}i.push(t)}return new Ki(i,s)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=ip(t.firestore);return function(t,e,n,r,s,i){const o=t.explicitOrderBy;if(s.length>o.length)throw new es(ts.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new es(ts.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!no(t)&&-1!==i.indexOf("/"))throw new es(ts.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=t.path.child(Is.fromString(i));if(!js.isDocumentKey(n))throw new es(ts.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new js(n);a.push(Js(e,s))}else{const t=gp(n,r,i);a.push(t)}}return new Ki(a,i)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Jp(t,e,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new es(ts.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!no(e)&&-1!==n.indexOf("/"))throw new es(ts.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Is.fromString(n));if(!js.isDocumentKey(r))throw new es(ts.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Js(t,new js(r))}if(n instanceof Tf)return Js(t,n._key);throw new es(ts.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vf(n)}.`)}function Xp(t,e){if(!Array.isArray(t)||0===t.length)throw new es(ts.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new es(ts.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Zp(t,e,n){if(!n.isEqual(e))throw new es(ts.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{convertValue(t,e="none"){switch(Gs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ns(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Rs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Yr()}}convertObject(t,e){const n={};return bs(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Xf(Ns(t.latitude),Ns(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ms(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ls(t));default:return null}}convertTimestamp(t){const e=Ds(t);return new ys(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Is.fromString(t);Jr(Xa(n));const r=new Fs(n.get(1),n.get(3)),s=new js(n.popFirst(5));return r.isEqual(e)||Wr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class rg extends eg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tf(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=ip(t)}set(t,e,n){this._verifyNotCommitted();const r=ig(t,this._firestore),s=ng(r.converter,e,n),i=op(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,Ro.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const s=ig(t,this._firestore);let i;return i="string"==typeof(e=(0,c.m9)(e))||e instanceof Qf?pp(this._dataReader,"WriteBatch.update",s._key,e,n,r):fp(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(i.toMutation(s._key,Ro.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ig(t,this._firestore);return this._mutations=this._mutations.concat(new Ko(e._key,Ro.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new es(ts.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ig(t,e){if((t=(0,c.m9)(t)).firestore!==e)throw new es(ts.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t){t=wf(t,Tf);const e=wf(t.firestore,Pf);return of(Ff(e),t._key).then((n=>bg(e,t,n)))}class ag extends eg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tf(this.firestore,null,e)}}function cg(t){t=wf(t,Tf);const e=wf(t.firestore,Pf),n=Ff(e),r=new ag(e);return sf(n,t._key).then((n=>new kp(e,r,t._key,n,new Cp(null!==n&&n.hasLocalMutations,!0),t.converter)))}function ug(t){t=wf(t,Tf);const e=wf(t.firestore,Pf);return of(Ff(e),t._key,{source:"server"}).then((n=>bg(e,t,n)))}function lg(t){t=wf(t,Sf);const e=wf(t.firestore,Pf),n=Ff(e),r=new ag(e);return Mp(t._query),cf(n,t._query).then((n=>new Np(e,r,t,n)))}function hg(t){t=wf(t,Sf);const e=wf(t.firestore,Pf),n=Ff(e),r=new ag(e);return af(n,t._query).then((n=>new Np(e,r,t,n)))}function dg(t){t=wf(t,Sf);const e=wf(t.firestore,Pf),n=Ff(e),r=new ag(e);return cf(n,t._query,{source:"server"}).then((n=>new Np(e,r,t,n)))}function fg(t,e,n){t=wf(t,Tf);const r=wf(t.firestore,Pf),s=ng(t.converter,e,n);return wg(r,[op(ip(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Ro.none())])}function pg(t,e,n,...r){t=wf(t,Tf);const s=wf(t.firestore,Pf),i=ip(s);let o;return o="string"==typeof(e=(0,c.m9)(e))||e instanceof Qf?pp(i,"updateDoc",t._key,e,n,r):fp(i,"updateDoc",t._key,e),wg(s,[o.toMutation(t._key,Ro.exists(!0))])}function gg(t){return wg(wf(t.firestore,Pf),[new Ko(t._key,Ro.none())])}function mg(t,e){const n=wf(t.firestore,Pf),r=kf(t),s=ng(t.converter,e);return wg(n,[op(ip(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,Ro.exists(!1))]).then((()=>r))}function yg(t,...e){var n,r,s;t=(0,c.m9)(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Of(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Of(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let u,l,h;if(t instanceof Tf)l=wf(t.firestore,Pf),h=Xi(t._key.path),u={next:n=>{e[o]&&e[o](bg(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=wf(t,Sf);l=wf(n.firestore,Pf),h=n._query;const r=new ag(l);u={next:t=>{e[o]&&e[o](new Np(l,r,n,t))},error:e[o+1],complete:e[o+2]},Mp(t._query)}return function(t,e,n,r){const s=new qd(r),i=new Hh(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>$h(await ef(t),i))),()=>{s.Aa(),t.asyncQueue.enqueueAndForget((async()=>Gh(await ef(t),i)))}}(Ff(l),h,a,u)}function vg(t,e){return uf(Ff(t=wf(t,Pf)),Of(e)?e:{next:e})}function wg(t,e){return function(t,e){const n=new ns;return t.asyncQueue.enqueueAndForget((async()=>cd(await tf(t),e,n))),n.promise}(Ff(t),e)}function bg(t,e,n){const r=n.docs.get(e._key),s=new ag(t);return new kp(t,s,e._key,r,new Cp(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=ip(t)}get(t){const e=ig(t,this._firestore),n=new rg(this._firestore);return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return Yr();const r=t[0];if(r.isFoundDocument())return new Sp(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new Sp(this._firestore,n,e._key,null,e.converter);throw Yr()}))}set(t,e,n){const r=ig(t,this._firestore),s=ng(r.converter,e,n),i=op(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(t,e,n,...r){const s=ig(t,this._firestore);let i;return i="string"==typeof(e=(0,c.m9)(e))||e instanceof Qf?pp(this._dataReader,"Transaction.update",s._key,e,n,r):fp(this._dataReader,"Transaction.update",s._key,e),this._transaction.update(s._key,i),this}delete(t){const e=ig(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ig(t,this._firestore),n=new ag(this._firestore);return super.get(t).then((t=>new kp(this._firestore,n,e._key,t._document,new Cp(!1,!1),e.converter)))}}function Eg(t,e,n){t=wf(t,Pf);const r=Object.assign(Object.assign({},tg),n);return function(t){if(t.maxAttempts<1)throw new es(ts.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),lf(Ff(t),(n=>e(new _g(t,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(){return new ap("deleteField")}function Tg(){return new up("serverTimestamp")}function Sg(...t){return new lp("arrayUnion",t)}function Ag(...t){return new hp("arrayRemove",t)}function xg(t){return new dp("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){qr=t}(i.SDK_VERSION),(0,i._registerComponent)(new o.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Pf(r,new os(t.getProvider("auth-internal")),new ls(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),(0,i.registerVersion)(Br,"3.4.9",t),(0,i.registerVersion)(Br,"3.4.9","esm2017")}();const Cg="@firebase/firestore-compat",kg="0.1.18";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dg(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new es("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(){if("undefined"===typeof Uint8Array)throw new es("unimplemented","Uint8Arrays are not available in this environment.")}function Rg(){if(!xs())throw new es("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Og{constructor(t){this._delegate=t}static fromBase64String(t){return Rg(),new Og(Yf.fromBase64String(t))}static fromUint8Array(t){return Ng(),new Og(Yf.fromUint8Array(t))}toBase64(){return Rg(),this._delegate.toBase64()}toUint8Array(){return Ng(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){return Lg(t,["next","error","complete"])}function Lg(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{enableIndexedDbPersistence(t,e){return Uf(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Bf(t._delegate)}clearIndexedDbPersistence(t){return qf(t._delegate)}}class Fg{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof Fs||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Hr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){If(this._delegate,t,e,n)}enableNetwork(){return Gf(this._delegate)}disableNetwork(){return Kf(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,gf("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return $f(this._delegate)}onSnapshotsInSync(t){return vg(this._delegate,t)}get app(){if(!this._appCompat)throw new es("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new Xg(this,xf(this._delegate,t))}catch(e){throw Gg(e,"collection()","Firestore.collection()")}}doc(t){try{return new $g(this,kf(this._delegate,t))}catch(e){throw Gg(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new Qg(this,Cf(this._delegate,t))}catch(e){throw Gg(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Eg(this._delegate,(e=>t(new Bg(this,e))))}batch(){return Ff(this._delegate),new jg(new sg(this._delegate,(t=>wg(this._delegate,t))))}loadBundle(t){return zf(this._delegate,t)}namedQuery(t){return Wf(this._delegate,t).then((t=>t?new Qg(this,t):null))}}class Vg extends eg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Og(new Yf(t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return $g.forKey(e,this.firestore,null)}}function Ug(t){Kr(t)}class Bg{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new Vg(t)}get(t){const e=Zg(t);return this._delegate.get(e).then((t=>new Wg(this._firestore,new kp(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter))))}set(t,e,n){const r=Zg(t);return n?(Dg("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const s=Zg(t);return 2===arguments.length?this._delegate.update(s,e):this._delegate.update(s,e,n,...r),this}delete(t){const e=Zg(t);return this._delegate.delete(e),this}}class jg{constructor(t){this._delegate=t}set(t,e,n){const r=Zg(t);return n?(Dg("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const s=Zg(t);return 2===arguments.length?this._delegate.update(s,e):this._delegate.update(s,e,n,...r),this}delete(t){const e=Zg(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class qg{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new Dp(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new Hg(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=qg.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let s=r.get(e);return s||(s=new qg(t,new Vg(t),e),r.set(e,s)),s}}qg.INSTANCES=new WeakMap;class $g{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Vg(t)}static forPath(t,e,n){if(t.length%2!==0)throw new es("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new $g(e,new Tf(e._delegate,n,new js(t)))}static forKey(t,e,n){return new $g(e,new Tf(e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new Xg(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new Xg(this.firestore,xf(this._delegate,t))}catch(e){throw Gg(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=(0,c.m9)(t),t instanceof Tf&&Df(this._delegate,t)}set(t,e){e=Dg("DocumentReference.set",e);try{return e?fg(this._delegate,t,e):fg(this._delegate,t)}catch(n){throw Gg(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?pg(this._delegate,t):pg(this._delegate,t,e,...n)}catch(r){throw Gg(r,"updateDoc()","DocumentReference.update()")}}delete(){return gg(this._delegate)}onSnapshot(...t){const e=Kg(t),n=zg(t,(t=>new Wg(this.firestore,new kp(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))));return yg(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?cg(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?ug(this._delegate):og(this._delegate),e.then((t=>new Wg(this.firestore,new kp(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))))}withConverter(t){return new $g(this.firestore,t?this._delegate.withConverter(qg.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function Gg(t,e,n){return t.message=t.message.replace(e,n),t}function Kg(t){for(const e of t)if("object"===typeof e&&!Mg(e))return e;return{}}function zg(t,e){var n,r;let s;return s=Mg(t[0])?t[0]:Mg(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{s.next&&s.next(e(t))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class Wg{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new $g(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Op(this._delegate,t._delegate)}}class Hg extends Wg{data(t){const e=this._delegate.data(t);return Xr(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class Qg{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Vg(t)}where(t,e,n){try{return new Qg(this.firestore,Pp(this._delegate,Vp(t,e,n)))}catch(r){throw Gg(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new Qg(this.firestore,Pp(this._delegate,Bp(t,e)))}catch(n){throw Gg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new Qg(this.firestore,Pp(this._delegate,qp(t)))}catch(e){throw Gg(e,"limit()","Query.limit()")}}limitToLast(t){try{return new Qg(this.firestore,Pp(this._delegate,$p(t)))}catch(e){throw Gg(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new Qg(this.firestore,Pp(this._delegate,Kp(...t)))}catch(e){throw Gg(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new Qg(this.firestore,Pp(this._delegate,zp(...t)))}catch(e){throw Gg(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new Qg(this.firestore,Pp(this._delegate,Hp(...t)))}catch(e){throw Gg(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new Qg(this.firestore,Pp(this._delegate,Qp(...t)))}catch(e){throw Gg(e,"endAt()","Query.endAt()")}}isEqual(t){return Nf(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?hg(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?dg(this._delegate):lg(this._delegate),e.then((t=>new Jg(this.firestore,new Np(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))))}onSnapshot(...t){const e=Kg(t),n=zg(t,(t=>new Jg(this.firestore,new Np(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))));return yg(this._delegate,e,n)}withConverter(t){return new Qg(this.firestore,t?this._delegate.withConverter(qg.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class Yg{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new Hg(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Jg{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new Qg(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((t=>new Hg(this._firestore,t)))}docChanges(t){return this._delegate.docChanges(t).map((t=>new Yg(this._firestore,t)))}forEach(t,e){this._delegate.forEach((n=>{t.call(e,new Hg(this._firestore,n))}))}isEqual(t){return Op(this._delegate,t._delegate)}}class Xg extends Qg{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new $g(this.firestore,t):null}doc(t){try{return new $g(this.firestore,void 0===t?kf(this._delegate):kf(this._delegate,t))}catch(e){throw Gg(e,"doc()","CollectionReference.doc()")}}add(t){return mg(this._delegate,t).then((t=>new $g(this.firestore,t)))}isEqual(t){return Df(this._delegate,t._delegate)}withConverter(t){return new Xg(this.firestore,t?this._delegate.withConverter(qg.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function Zg(t){return wf(t,Tf)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(...t){this._delegate=new Qf(...t)}static documentId(){return new tm(Ss.keyField().canonicalString())}isEqual(t){return t=(0,c.m9)(t),t instanceof Qf&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t){this._delegate=t}static serverTimestamp(){const t=Tg();return t._methodName="FieldValue.serverTimestamp",new em(t)}static delete(){const t=Ig();return t._methodName="FieldValue.delete",new em(t)}static arrayUnion(...t){const e=Sg(...t);return e._methodName="FieldValue.arrayUnion",new em(e)}static arrayRemove(...t){const e=Ag(...t);return e._methodName="FieldValue.arrayRemove",new em(e)}static increment(t){const e=xg(t);return e._methodName="FieldValue.increment",new em(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm={Firestore:Fg,GeoPoint:Xf,Timestamp:ys,Blob:Og,Transaction:Bg,WriteBatch:jg,DocumentReference:$g,DocumentSnapshot:Wg,Query:Qg,QueryDocumentSnapshot:Hg,QuerySnapshot:Jg,CollectionReference:Xg,FieldPath:tm,FieldValue:em,setLogLevel:Ug,CACHE_SIZE_UNLIMITED:Lf};function rm(t,e){t.INTERNAL.registerComponent(new o.wA("firestore-compat",(t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(n,r)}),"PUBLIC").setServiceProps(Object.assign({},nm)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){rm(t,((t,e)=>new Fg(t,e,new Pg))),t.registerVersion(Cg,kg)}sm(s.Z)},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},678:function(t,e,n){"use strict";n.d(e,{PO:function(){return K},p7:function(){return ee}});n(6699),n(1703);var r=n(3396),s=n(4870);
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>i?Symbol(t):"_vr_"+t,a=o("rvlm"),c=o("rvd"),u=o("r"),l=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const p=Object.assign;function g(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const m=()=>{};const y=/\/$/,v=t=>t.replace(y,"");function w(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=x(null!=r?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function E(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&I(e.matched[r],n.matched[s])&&T(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function I(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!S(t[n],e[n]))return!1;return!0}function S(t,e){return Array.isArray(t)?A(t,e):Array.isArray(e)?A(e,t):t===e}function A(t,e){return Array.isArray(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function x(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],1!==o&&"."!==i){if(".."!==i)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var C,k;(function(t){t["pop"]="pop",t["push"]="push"})(C||(C={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(k||(k={}));function D(t){if(!t)if(d){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),v(t)}const N=/^[^#]+#/;function R(t,e){return t.replace(N,"#")+e}function O(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const M=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=O(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function P(t,e){const n=history.state?history.state.position-e:-1;return n+t}const F=new Map;function V(t,e){F.set(t,e)}function U(t){const e=F.get(t);return F.delete(t),e}let B=()=>location.protocol+"//"+location.host;function j(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let e=s.includes(t.slice(i))?t.slice(i).length:1,n=s.slice(e);return"/"!==n[0]&&(n="/"+n),_(n,"")}const o=_(n,t);return o+r+s}function q(t,e,n,r){let s=[],i=[],o=null;const a=({state:i})=>{const a=j(t,location),c=n.value,u=e.value;let l=0;if(i){if(n.value=a,e.value=i,o&&o===c)return void(o=null);l=u?i.position-u.position:0}else r(a);s.forEach((t=>{t(n.value,c,{delta:l,type:C.pop,direction:l?l>0?k.forward:k.back:k.unknown})}))};function c(){o=n.value}function u(t){s.push(t);const e=()=>{const e=s.indexOf(t);e>-1&&s.splice(e,1)};return i.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(p({},t.state,{scroll:M()}),"")}function h(){for(const t of i)t();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function $(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?M():null}}function G(t){const{history:e,location:n}=window,r={value:j(t,n)},s={value:e.state};function i(r,i,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:B()+t+r;try{e[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=p({},e.state,$(s.value.back,t,s.value.forward,!0),n,{position:s.value.position});i(t,o,!0),r.value=t}function a(t,n){const o=p({},s.value,e.state,{forward:t,scroll:M()});i(o.current,o,!0);const a=p({},$(r.value,t,null),{position:o.position+1},n);i(t,a,!1),r.value=t}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:a,replace:o}}function K(t){t=D(t);const e=G(t),n=q(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const s=p({location:"",base:t,go:r,createHref:R.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function z(t){return"string"===typeof t||t&&"object"===typeof t}function W(t){return"string"===typeof t||"symbol"===typeof t}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q=o("nf");var Y;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(Y||(Y={}));function J(t,e){return p(new Error,{type:t,[Q]:!0},e)}function X(t,e){return t instanceof Error&&Q in t&&(null==e||!!(t.type&e))}const Z="[^/]+?",tt={sensitive:!1,strict:!1,start:!0,end:!0},et=/[.+*?^${}()[\]/\\]/g;function nt(t,e){const n=p({},tt,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(s+="/"),s+=r.value.replace(et,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;i.push({name:t,repeatable:n,optional:a});const h=c||Z;if(h!==Z){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),s+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",s=i[r-1];n[s.name]=t&&s.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const s of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const i of s)if(0===i.type)n+=i.value;else if(1===i.type){const{value:o,repeatable:a,optional:c}=i,u=o in e?e[o]:"";if(Array.isArray(u)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(u)?u.join("/"):u;if(!l){if(!c)throw new Error(`Missing required param "${o}"`);s.length<2&&t.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:o,score:r,keys:i,parse:a,stringify:c}}function rt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function st(t,e){let n=0;const r=t.score,s=e.score;while(n<r.length&&n<s.length){const t=rt(r[n],s[n]);if(t)return t;n++}return s.length-r.length}const it={type:0,value:""},ot=/[a-zA-Z0-9_]/;function at(t){if(!t)return[[]];if("/"===t)return[[it]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,u="",l="";function h(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ot.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function ct(t,e,n){const r=nt(at(t.path),n);const s=p(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf===!e.record.aliasOf&&e.children.push(s),s}function ut(t,e){const n=[],r=new Map;function s(t){return r.get(t)}function i(t,n,r){const s=!r,a=ht(t);a.aliasOf=r&&r.record;const u=gt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(p({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,d;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=ct(e,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),s&&t.name&&!ft(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)i(t[e],h,r&&r.children[e])}r=r||h,c(h)}return d?()=>{o(d)}:m}function o(t){if(W(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&st(t,n[e])>=0&&(t.record.path!==n[e].record.path||!mt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let s,i,o,a={};if("name"in t&&t.name){if(s=r.get(t.name),!s)throw J(1,{location:t});o=s.record.name,a=p(lt(e.params,s.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),i=s.stringify(a)}else if("path"in t)i=t.path,s=n.find((t=>t.re.test(i))),s&&(a=s.parse(i),o=s.record.name);else{if(s=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!s)throw J(1,{location:t,currentLocation:e});o=s.record.name,a=p({},e.params,t.params),i=s.stringify(a)}const c=[];let u=s;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:i,params:a,matched:c,meta:pt(c)}}return e=gt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>i(t))),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function lt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ht(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function dt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pt(t){return t.reduce(((t,e)=>p(t,e.meta)),{})}function gt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function mt(t,e){return e.children.some((e=>e===t||mt(t,e)))}const yt=/#/g,vt=/&/g,wt=/\//g,bt=/=/g,_t=/\?/g,Et=/\+/g,It=/%5B/g,Tt=/%5D/g,St=/%5E/g,At=/%60/g,xt=/%7B/g,Ct=/%7C/g,kt=/%7D/g,Dt=/%20/g;function Nt(t){return encodeURI(""+t).replace(Ct,"|").replace(It,"[").replace(Tt,"]")}function Rt(t){return Nt(t).replace(xt,"{").replace(kt,"}").replace(St,"^")}function Ot(t){return Nt(t).replace(Et,"%2B").replace(Dt,"+").replace(yt,"%23").replace(vt,"%26").replace(At,"`").replace(xt,"{").replace(kt,"}").replace(St,"^")}function Mt(t){return Ot(t).replace(bt,"%3D")}function Lt(t){return Nt(t).replace(yt,"%23").replace(_t,"%3F")}function Pt(t){return null==t?"":Lt(t).replace(wt,"%2F")}function Ft(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Vt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const t=r[s].replace(Et," "),n=t.indexOf("="),i=Ft(n<0?t:t.slice(0,n)),o=n<0?null:Ft(t.slice(n+1));if(i in e){let t=e[i];Array.isArray(t)||(t=e[i]=[t]),t.push(o)}else e[i]=o}return e}function Ut(t){let e="";for(let n in t){const r=t[n];if(n=Mt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const s=Array.isArray(r)?r.map((t=>t&&Ot(t))):[r&&Ot(r)];s.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Bt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}function jt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(J(4,{from:n,to:e})):t instanceof Error?a(t):z(t)?a(J(2,{from:e,to:t})):(i&&r.enterCallbacks[s]===i&&"function"===typeof t&&i.push(t),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function $t(t,e,n,r){const s=[];for(const i of t)for(const t in i.components){let o=i.components[t];if("beforeRouteEnter"===e||i.instances[t])if(Gt(o)){const a=o.__vccOpts||o,c=a[e];c&&s.push(qt(c,n,r,i,t))}else{let a=o();0,s.push((()=>a.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${i.path}"`));const o=f(s)?s.default:s;i.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&qt(c,n,r,i,t)()}))))}}return s}function Gt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Kt(t){const e=(0,r.f3)(u),n=(0,r.f3)(l),i=(0,r.Fl)((()=>e.resolve((0,s.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(I.bind(null,r));if(o>-1)return o;const a=Yt(t[e-2]);return e>1&&Yt(r)===a&&s[s.length-1].path!==a?s.findIndex(I.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qt(n.params,i.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&T(n.params,i.value.params)));function h(n={}){return Ht(n)?e[(0,s.SU)(t.replace)?"replace":"push"]((0,s.SU)(t.to)).catch(m):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:h}}const zt=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kt,setup(t,{slots:e}){const n=(0,s.qj)(Kt(t)),{options:i}=(0,r.f3)(u),o=(0,r.Fl)((()=>({[Jt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Jt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=e.default&&e.default(n);return t.custom?s:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Wt=zt;function Ht(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qt(t,e){for(const n in e){const r=e[n],s=t[n];if("string"===typeof r){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some(((t,e)=>t!==s[e])))return!1}return!0}function Yt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=(0,r.f3)(h),o=(0,r.Fl)((()=>t.route||i.value)),u=(0,r.f3)(c,0),l=(0,r.Fl)((()=>o.value.matched[u]));(0,r.JJ)(c,u+1),(0,r.JJ)(a,l),(0,r.JJ)(h,o);const d=(0,s.iH)();return(0,r.YP)((()=>[d.value,l.value,t.name]),(([t,e,n],[r,s,i])=>{e&&(e.instances[n]=t,s&&s!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=s.leaveGuards),e.updateGuards.size||(e.updateGuards=s.updateGuards))),!t||!e||s&&I(e,s)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const s=o.value,i=l.value,a=i&&i.components[t.name],c=t.name;if(!a)return Zt(n.default,{Component:a,route:s});const u=i.props[t.name],h=u?!0===u?s.params:"function"===typeof u?u(s):u:null,f=t=>{t.component.isUnmounted&&(i.instances[c]=null)},g=(0,r.h)(a,p({},h,e,{onVnodeUnmounted:f,ref:d}));return Zt(n.default,{Component:g,route:s})||g}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Xt;function ee(t){const e=ut(t.routes,t),n=t.parseQuery||Vt,i=t.stringifyQuery||Ut,o=t.history;const a=jt(),c=jt(),f=jt(),y=(0,s.XI)(H);let v=H;d&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=g.bind(null,(t=>""+t)),I=g.bind(null,Pt),T=g.bind(null,Ft);function S(t,n){let r,s;return W(t)?(r=e.getRecordMatcher(t),s=n):s=t,e.addRoute(s,r)}function A(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function x(){return e.getRoutes().map((t=>t.record))}function k(t){return!!e.getRecordMatcher(t)}function D(t,r){if(r=p({},r||y.value),"string"===typeof t){const s=w(n,t,r.path),i=e.resolve({path:s.path},r),a=o.createHref(s.fullPath);return p(s,i,{params:T(i.params),hash:Ft(s.hash),redirectedFrom:void 0,href:a})}let s;if("path"in t)s=p({},t,{path:w(n,t.path,r.path).path});else{const e=p({},t.params);for(const t in e)null==e[t]&&delete e[t];s=p({},t,{params:I(t.params)}),r.params=I(r.params)}const a=e.resolve(s,r),c=t.hash||"";a.params=_(T(a.params));const u=b(i,p({},t,{hash:Rt(c),path:a.path})),l=o.createHref(u);return p({fullPath:u,hash:c,query:i===Ut?Bt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function N(t){return"string"===typeof t?w(n,t,y.value.path):p({},t)}function R(t,e){if(v!==t)return J(8,{from:e,to:t})}function O(t){return j(t)}function F(t){return O(p(N(t),{replace:!0}))}function B(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=N(r):{path:r},r.params={}),p({query:t.query,hash:t.hash,params:t.params},r)}}function j(t,e){const n=v=D(t),r=y.value,s=t.state,o=t.force,a=!0===t.replace,c=B(n);if(c)return j(p(N(c),{state:s,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&E(i,r,n)&&(l=J(16,{to:u,from:r}),st(r,r,!0,!1)),(l?Promise.resolve(l):$(u,r)).catch((t=>X(t)?X(t,2)?t:rt(t):et(t,u,r))).then((t=>{if(t){if(X(t,2))return j(p(N(t.to),{state:s,force:o,replace:a}),e||u)}else t=K(u,r,!0,a,s);return G(u,r,t),t}))}function q(t,e){const n=R(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t,e){let n;const[r,s,i]=re(t,e);n=$t(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qt(r,t,e))}));const o=q.bind(null,t,e);return n.push(o),ne(n).then((()=>{n=[];for(const r of a.list())n.push(qt(r,t,e));return n.push(o),ne(n)})).then((()=>{n=$t(s,"beforeRouteUpdate",t,e);for(const r of s)r.updateGuards.forEach((r=>{n.push(qt(r,t,e))}));return n.push(o),ne(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const s of r.beforeEnter)n.push(qt(s,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(o),ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=$t(i,"beforeRouteEnter",t,e),n.push(o),ne(n)))).then((()=>{n=[];for(const r of c.list())n.push(qt(r,t,e));return n.push(o),ne(n)})).catch((t=>X(t,8)?t:Promise.reject(t)))}function G(t,e,n){for(const r of f.list())r(t,e,n)}function K(t,e,n,r,s){const i=R(t,e);if(i)return i;const a=e===H,c=d?history.state:{};n&&(r||a?o.replace(t.fullPath,p({scroll:a&&c&&c.scroll},s)):o.push(t.fullPath,s)),y.value=t,st(t,e,n,a),rt()}let z;function Q(){z||(z=o.listen(((t,e,n)=>{const r=D(t),s=B(r);if(s)return void j(p(s,{replace:!0}),r).catch(m);v=r;const i=y.value;d&&V(P(i.fullPath,n.delta),M()),$(r,i).catch((t=>X(t,12)?t:X(t,2)?(j(t.to,r).then((t=>{X(t,20)&&!n.delta&&n.type===C.pop&&o.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&o.go(-n.delta,!1),et(t,r,i)))).then((t=>{t=t||K(r,i,!1),t&&(n.delta?o.go(-n.delta,!1):n.type===C.pop&&X(t,20)&&o.go(-1,!1)),G(r,i,t)})).catch(m)})))}let Y,Z=jt(),tt=jt();function et(t,e,n){rt(t);const r=tt.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function nt(){return Y&&y.value!==H?Promise.resolve():new Promise(((t,e)=>{Z.add([t,e])}))}function rt(t){return Y||(Y=!t,Q(),Z.list().forEach((([e,n])=>t?n(t):e())),Z.reset()),t}function st(e,n,s,i){const{scrollBehavior:o}=t;if(!d||!o)return Promise.resolve();const a=!s&&U(P(e.fullPath,0))||(i||!s)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(e,n,a))).then((t=>t&&L(t))).catch((t=>et(t,e,n)))}const it=t=>o.go(t);let ot;const at=new Set,ct={currentRoute:y,addRoute:S,removeRoute:A,hasRoute:k,getRoutes:x,resolve:D,options:t,push:O,replace:F,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:tt.add,isReady:nt,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(y)}),d&&!ot&&y.value===H&&(ot=!0,O(o.location).catch((t=>{0})));const n={};for(const s in H)n[s]=(0,r.Fl)((()=>y.value[s]));t.provide(u,e),t.provide(l,(0,s.qj)(n)),t.provide(h,y);const i=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(v=H,z&&z(),z=null,y.value=H,ot=!1,Y=!1),i()}}};return ct}function ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function re(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const i=e.matched[o];i&&(t.matched.find((t=>I(t,i)))?r.push(i):n.push(i));const a=t.matched[o];a&&(e.matched.find((t=>I(t,a)))||s.push(a))}return[n,r,s]}},2415:function(t,e,n){"use strict";n(1703);var r=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===s}(t)}(t)},s="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(t,e){return!1!==e.clone&&e.isMergeableObject(t)?u(Array.isArray(t)?[]:{},t,e):t}function o(t,e,n){return t.concat(e).map((function(t){return i(t,n)}))}function a(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function c(t,e){try{return e in t}catch(t){return!1}}function u(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||o,n.isMergeableObject=n.isMergeableObject||r,n.cloneUnlessOtherwiseSpecified=i;var s=Array.isArray(e);return s===Array.isArray(t)?s?n.arrayMerge(t,e,n):function(t,e,n){var r={};return n.isMergeableObject(t)&&a(t).forEach((function(e){r[e]=i(t[e],n)})),a(e).forEach((function(s){(function(t,e){return c(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,s)||(r[s]=c(t,s)&&n.isMergeableObject(e[s])?function(t,e){if(!e.customMerge)return u;var n=e.customMerge(t);return"function"==typeof n?n:u}(s,n)(t[s],e[s],n):i(e[s],n))})),r}(t,e,n):i(e,n)}u.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return u(t,n,e)}),{})};var l=u;function h(t){var e=(t=t||{}).storage||window&&window.localStorage,n=t.key||"vuex";function r(t,e){var n=e.getItem(t);try{return"string"==typeof n?JSON.parse(n):"object"==typeof n?n:void 0}catch(t){}}function s(){return!0}function i(t,e,n){return n.setItem(t,JSON.stringify(e))}function o(t,e){return Array.isArray(e)?e.reduce((function(e,n){return function(t,e,n,r){return!/^(__proto__|constructor|prototype)$/.test(e)&&((e=e.split?e.split("."):e.slice(0)).slice(0,-1).reduce((function(t,e){return t[e]=t[e]||{}}),t)[e.pop()]=n),t}(e,n,(r=t,void 0===(r=((s=n).split?s.split("."):s).reduce((function(t,e){return t&&t[e]}),r))?void 0:r));var r,s}),{}):t}function a(t){return function(e){return t.subscribe(e)}}(t.assertStorage||function(){e.setItem("@@",1),e.removeItem("@@")})(e);var c,u=function(){return(t.getState||r)(n,e)};return t.fetchBeforeUse&&(c=u()),function(r){t.fetchBeforeUse||(c=u()),"object"==typeof c&&null!==c&&(r.replaceState(t.overwrite?c:l(r.state,c,{arrayMerge:t.arrayMerger||function(t,e){return e},clone:!1})),(t.rehydrated||function(){})(r)),(t.subscriber||a)(r)((function(r,a){(t.filter||s)(r)&&(t.setState||i)(n,(t.reducer||o)(a,t.paths),e)}))}}e["Z"]=h},65:function(t,e,n){"use strict";n.d(e,{MT:function(){return tt}});n(1703),n(6699);var r=n(3396),s=n(4870);function i(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,h;function d(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,h=n.g.perf_hooks.performance):l=!1),l}function f(){return d()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(s,e)}catch(i){}this.fallbacks={getSettings(){return s},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(i){}s=t},now(){return f()}},e&&e.on(u,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function g(t,e){const n=t,r=o(),s=i(),u=a&&n.enableEarlyProxy;if(!s||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const t=u?new p(n,s):null,i=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else s.emit(c,t,e)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var m="store";function y(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function v(t){return null!==t&&"object"===typeof t}function w(t){return t&&"function"===typeof t.then}function b(t,e){return function(){return t(e)}}function _(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function E(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),I(t,n,e)}function I(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};y(i,(function(e,n){o[n]=b(e,t),Object.defineProperty(t.getters,n,{get:function(){return o[n]()},enumerable:!0})})),t._state=(0,s.qj)({data:e}),t.strict&&D(t),r&&n&&t._withCommit((function(){r.data=null}))}function T(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=N(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var u=r.context=S(t,o,n);r.forEachMutation((function(e,n){var r=o+n;x(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,s=e.handler||e;C(t,r,s,u)})),r.forEachGetter((function(e,n){var r=o+n;k(t,r,e,u)})),r.forEachChild((function(r,i){T(t,e,n.concat(i),r,s)}))}function S(t,e,n){var r=""===e,s={dispatch:r?t.dispatch:function(n,r,s){var i=R(n,r,s),o=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,s){var i=R(n,r,s),o=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return A(t,e)}},state:{get:function(){return N(t.state,n)}}}),s}function A(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function x(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push((function(e){n.call(t,r.state,e)}))}function C(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push((function(e){var s=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return w(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):s}))}function k(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function D(t){(0,r.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function N(t,e){return e.reduce((function(t,e){return t[e]}),t)}function R(t,e,n){return v(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var O="vuex bindings",M="vuex:mutations",L="vuex:actions",P="vuex",F=0;function V(t,e){g({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[O]},(function(n){n.addTimelineLayer({id:M,label:"Vuex Mutations",color:U}),n.addTimelineLayer({id:L,label:"Vuex Actions",color:U}),n.addInspector({id:P,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===P)if(n.filter){var r=[];K(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[G(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===P){var r=n.nodeId;A(e,r),n.state=z(H(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===P){var r=n.nodeId,s=n.path;"root"!==r&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit((function(){n.set(e._state.data,s,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(P),n.sendInspectorState(P),n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=F++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:L,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},s=Date.now()-t._time;r.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var U=8702998,B=6710886,j=16777215,q={label:"namespaced",textColor:j,backgroundColor:B};function $(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function G(t,e){return{id:e||"root",label:$(e),tags:t.namespaced?[q]:[],children:Object.keys(t._children).map((function(n){return G(t._children[n],e+n+"/")}))}}function K(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[q]:[]}),Object.keys(e._children).forEach((function(s){K(t,e._children[s],n,r+s+"/")}))}function z(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var i=W(e);s.getters=Object.keys(i).map((function(t){return{key:t.endsWith("/")?$(t):t,editable:!1,value:Q((function(){return i[t]}))}}))}return s}function W(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach((function(t){s[t]||(s[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),s=s[t]._custom.value})),s[i]=Q((function(){return t[n]}))}else e[n]=Q((function(){return t[n]}))})),e}function H(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,s){var i=t[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===n.length-1?i:i._children}),"root"===e?t:t.root._children)}function Q(t){try{return t()}catch(e){return e}}var Y=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(t,e){this._children[t]=e},Y.prototype.removeChild=function(t){delete this._children[t]},Y.prototype.getChild=function(t){return this._children[t]},Y.prototype.hasChild=function(t){return t in this._children},Y.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},Y.prototype.forEachChild=function(t){y(this._children,t)},Y.prototype.forEachGetter=function(t){this._rawModule.getters&&y(this._rawModule.getters,t)},Y.prototype.forEachAction=function(t){this._rawModule.actions&&y(this._rawModule.actions,t)},Y.prototype.forEachMutation=function(t){this._rawModule.mutations&&y(this._rawModule.mutations,t)},Object.defineProperties(Y.prototype,J);var X=function(t){this.register([],t,!1)};function Z(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;Z(t.concat(r),e.getChild(r),n.modules[r])}}X.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},X.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},X.prototype.update=function(t){Z([],this.root,t)},X.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var s=new Y(e,n);if(0===t.length)this.root=s;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],s)}e.modules&&y(e.modules,(function(e,s){r.register(t.concat(s),e,n)}))},X.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},X.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function tt(t){return new et(t)}var et=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),I(this,u),n.forEach((function(t){return t(e)}))},nt={state:{configurable:!0}};et.prototype.install=function(t,e){t.provide(e||m,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&V(t,this)},nt.state.get=function(){return this._state.data},nt.state.set=function(t){0},et.prototype.commit=function(t,e,n){var r=this,s=R(t,e,n),i=s.type,o=s.payload,a=(s.options,{type:i,payload:o}),c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},et.prototype.dispatch=function(t,e){var n=this,r=R(t,e),s=r.type,i=r.payload,o={type:s,payload:i},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(i)}))):a[0](i);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},et.prototype.subscribe=function(t,e){return _(t,this._subscribers,e)},et.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return _(n,this._actionSubscribers,e)},et.prototype.watch=function(t,e,n){var s=this;return(0,r.YP)((function(){return t(s.state,s.getters)}),e,Object.assign({},n))},et.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},et.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),I(this,this.state)},et.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=N(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),E(this)},et.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},et.prototype.hotUpdate=function(t){this._modules.update(t),E(this,!0)},et.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(et.prototype,nt);it((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=ot(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof s?s.call(this,e,n):e[s]},n[r].vuex=!0})),n})),it((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=ot(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof s?s.apply(this,[r].concat(e)):r.apply(this.$store,[s].concat(e))}})),n})),it((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,s=e.val;s=t+s,n[r]=function(){if(!t||ot(this.$store,"mapGetters",t))return this.$store.getters[s]},n[r].vuex=!0})),n})),it((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=ot(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof s?s.apply(this,[r].concat(e)):r.apply(this.$store,[s].concat(e))}})),n}));function rt(t){return st(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function st(t){return Array.isArray(t)||v(t)}function it(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function ot(t,e,n){var r=t._modulesNamespaceMap[n];return r}},2661:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var r=n(223),s=n(7142),i=n(7077),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,(0,i._addComponent)(t,new s.wA("app-compat",(()=>this),"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,i.deleteApp)(this._delegate))))}_getService(t,e=i._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=i._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){(0,i._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){(0,i._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:i.registerVersion,setLogLevel:i.setLogLevel,onLog:i.onLog,apps:null,SDK_VERSION:i.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:s,useAsService:h,modularAPIs:i}};function s(t){delete e[t]}function o(t){if(t=t||i._DEFAULT_ENTRY_NAME,!(0,r.r3)(e,t))throw u.create("no-app",{appName:t});return e[t]}function a(s,o={}){const a=i.initializeApp(s,o);if((0,r.r3)(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map((t=>e[t]))}function l(e){const s=e.name,a=s.replace("-compat","");if(i._registerComponent(e)&&"PUBLIC"===e.type){const i=(t=o())=>{if("function"!==typeof t[a])throw u.create("invalid-app-argument",{appName:s});return t[a]()};void 0!==e.serviceProps&&(0,r.ZB)(i,e.serviceProps),n[a]=i,t.prototype[a]=function(...t){const n=this._getService.bind(this,s);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const t=l(a);function e(e){(0,r.ZB)(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),t}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",g="0.1.26";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(t){(0,i.registerVersion)(p,g,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;m()},7077:function(t,e,n){"use strict";n.r(e),n.d(e,{FirebaseError:function(){return i.ZR},SDK_VERSION:function(){return vt},_DEFAULT_ENTRY_NAME:function(){return it},_addComponent:function(){return ut},_addOrOverwriteComponent:function(){return lt},_apps:function(){return at},_clearComponents:function(){return pt},_components:function(){return ct},_getProvider:function(){return dt},_registerComponent:function(){return ht},_removeServiceInstance:function(){return ft},deleteApp:function(){return Et},getApp:function(){return bt},getApps:function(){return _t},initializeApp:function(){return wt},onLog:function(){return Tt},registerVersion:function(){return It},setLogLevel:function(){return St}});var r=n(7142),s=n(5168),i=n(223);n(6699),n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(E(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(I(this),e),E(h.get(this))}:function(...e){return E(t.apply(I(this),e))}:function(e,...n){const r=t.call(I(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const I=t=>g.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],x=new Map;function C(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(x.get(e))return x.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return x.set(e,i),i}w((t=>({...t,get:(e,n,r)=>C(e,n)||t.get(e,n,r),has:(e,n)=>!!C(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(D(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function D(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",R="0.7.25",O=new s.Yd("@firebase/app"),M="@firebase/app-compat",L="@firebase/analytics-compat",P="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",G="@firebase/functions-compat",K="@firebase/installations",z="@firebase/installations-compat",W="@firebase/messaging",H="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",st="9.8.2",it="[DEFAULT]",ot={[N]:"fire-core",[M]:"fire-core-compat",[P]:"fire-analytics",[L]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[G]:"fire-fn-compat",[K]:"fire-iid",[z]:"fire-iid-compat",[W]:"fire-fcm",[H]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t,e){t.container.addOrOverwriteComponent(e)}function ht(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ft(t,e,n=it){dt(t,e).clearInstance(n)}function pt(){ct.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},mt=new i.LL("app","Firebase",gt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=st;function wt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!==typeof s||!s)throw mt.create("bad-app-name",{appName:String(s)});const o=at.get(s);if(o){if((0,i.vZ)(t,o.options)&&(0,i.vZ)(n,o.config))return o;throw mt.create("duplicate-app",{appName:s})}const a=new r.H0(s);for(const r of ct.values())a.addComponent(r);const c=new yt(t,n,a);return at.set(s,c),c}function bt(t=it){const e=at.get(t);if(!e)throw mt.create("no-app",{appName:t});return e}function _t(){return Array.from(at.values())}async function Et(t){const e=t.name;at.has(e)&&(at.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function It(t,e,n){var s;let i=null!==(s=ot[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}ht(new r.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}function Tt(t,e){if(null!==t&&"function"!==typeof t)throw mt.create("invalid-log-argument");(0,s.Am)(t,e)}function St(t){(0,s.Ub)(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="firebase-heartbeat-database",xt=1,Ct="firebase-heartbeat-store";let kt=null;function Dt(){return kt||(kt=T(At,xt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ct)}}}).catch((t=>{throw mt.create("storage-open",{originalErrorMessage:t.message})}))),kt}async function Nt(t){try{const e=await Dt();return e.transaction(Ct).objectStore(Ct).get(Ot(t))}catch(e){throw mt.create("storage-get",{originalErrorMessage:e.message})}}async function Rt(t,e){try{const n=await Dt(),r=n.transaction(Ct,"readwrite"),s=r.objectStore(Ct);return await s.put(e,Ot(t)),r.done}catch(n){throw mt.create("storage-set",{originalErrorMessage:n.message})}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=1024,Lt=2592e6;class Pt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ut(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ft();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Lt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ft(),{heartbeatsToSend:e,unsentEntries:n}=Vt(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ft(){const t=new Date;return t.toISOString().substring(0,10)}function Vt(t,e=Mt){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Bt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ut{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Nt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Bt(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){ht(new r.wA("platform-logger",(t=>new k(t)),"PRIVATE")),ht(new r.wA("heartbeat",(t=>new Pt(t)),"PRIVATE")),It(N,R,t),It(N,R,"esm2017"),It("fire-js","")}jt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return s}});n(1703);var r=n(223);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return s}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}function l(t){r.forEach((e=>{e.setLogLevel(t)}))}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=i[e.level]),n.userLogHandler=null===t?null:(e,n,...i)=>{const o=i.map((t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((t=>t)).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:s[n].toLowerCase(),message:o,args:i,type:e.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.bcfbf7d6.js.map