(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{664:function(e,t,r){"use strict";r.r(t);var n=r(174),o=r(526),l=r(529),c=r(525),d=r(546),f=(r(8),r(7),r(6),r(10),r(11),r(4)),v=r(2),w=(r(28),r(36));function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={name:"Login",layout:"singlePanel",auth:!1,data:function(){return{saving:!1,login:{email:null,password:null}}},methods:m(m({},Object(w.b)("snackbar",["snack"])),{},{handleLogin:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.saving=!0,t.prev=1,t.next=4,e.$auth.loginWith("local",{data:{email:e.login.email,password:e.login.password}});case 4:(r=t.sent).data.token?e.$router.push("/standings"):e.errorLoggingIn(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.errorLoggingIn(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},errorLoggingIn:function(data){this.saving=!1,console.log(data),this.snack({message:"Sorry, there was an error logging in -- please try again.",color:"error"})}})},O=r(45),component=Object(O.a)(y,(function(){var e=this,t=e._self._c;return t(l.a,[t("h1",[e._v("Login")]),e._v(" "),t(c.a,[t(o.a,{attrs:{cols:"12"}},[t(d.a,{attrs:{label:"E-mail"},model:{value:e.login.email,callback:function(t){e.$set(e.login,"email",t)},expression:"login.email"}}),e._v(" "),t(d.a,{attrs:{label:"Password",type:"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}})],1)],1),e._v(" "),t(c.a,[t(o.a,{staticClass:"text-right",attrs:{cols:"12"}},[t("NuxtLink",{staticClass:"mr-2",attrs:{to:"/forgotPassword"}},[e._v("Forgot Password")]),e._v(" "),t(n.a,{attrs:{color:"primary",disabled:e.saving,small:""},on:{click:e.handleLogin}},[e._v("Login")])],1)],1),e._v(" "),t(c.a,[t(o.a,{staticClass:"text-right",attrs:{cols:"12"}},[t("NuxtLink",{attrs:{to:"/register"}},[e._v("Not a member? Register")])],1)],1)],1)}),[],!1,null,"dc9a73d8",null);t.default=component.exports}}]);