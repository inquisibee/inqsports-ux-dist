(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{645:function(e,t,r){"use strict";r.r(t);var n=r(172),o=r(524),c=r(527),l=r(523),f=r(557),d=(r(8),r(7),r(6),r(10),r(11),r(4)),m=r(3),O=(r(28),r(36));function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={name:"ForgotPasswordVue",auth:!1,layout:"singlePanel",data:function(){return{email:"",saving:!1}},methods:v(v({},Object(O.b)("snackbar",["snack"])),{},{requestResetPasswordToken:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.saving=!0,t.prev=1,t.next=4,e.$requestResetPasswordToken(e.email);case 4:200===(r=t.sent).status?(e.snack({message:r.data.message,timeout:4e4}),setTimeout((function(){e.$router.push("/login")}),4e3)):e.error(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.error();case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},error:function(){this.saving=!1,this.snack({message:"An error occurred, please check your email and try again",timeout:4e3,color:"error"})}})},w=r(45),component=Object(w.a)(y,(function(){var e=this,t=e._self._c;return t(c.a,[t("h1",[e._v("Forgot Password")]),e._v(" "),t(l.a,[t(o.a,{attrs:{cols:"12"}},[t(f.a,{attrs:{label:"Email"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.requestResetPasswordToken.apply(null,arguments)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),e._v(" "),t(l.a,[t(o.a,{staticClass:"text-right",attrs:{cols:"12"}},[t(n.a,{attrs:{color:"primary",disabled:e.saving,small:""},on:{click:e.requestResetPasswordToken}},[e._v("Send")])],1)],1)],1)}),[],!1,null,"22d51d68",null);t.default=component.exports}}]);