(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{644:function(e,t,r){"use strict";r.r(t);var n=r(186),c=r(548),l=r(377),o=r(624),m=r(561),d=r(566),f=r(630),v=r(632),h=r(631),j=r(629),k=r(142),O=r(560),E=r(87),y=r(628),_=(r(9),r(8),r(11),r(12),r(1)),w=r(5),x=(r(20),r(63),r(64),r(44),r(7),r(37),r(42));function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P={name:"Email",layout:"admin",data:function(){return{copied:!1,saving:!1,usersToEmail:[],usersForEmail:[],allChecked:!0,subject:"",email:""}},fetch:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.listAllUsers();case 2:e.mapUsers(),e.usersForEmail=e.users;case 4:case"end":return t.stop()}}),t)})))()},computed:T(T({},Object(x.c)("admin",["users"])),{},{allEmailAddresses:function(){return this.users.map((function(e){return e.email})).toString()}}),methods:T(T(T({},Object(x.b)("admin",["listAllUsers"])),Object(x.b)("snackbar",["snack"])),{},{all:function(){this.allChecked?this.mapUsers():this.usersToEmail=[]},mapUsers:function(){this.usersToEmail=this.users.map((function(e){return e.id}))},doCopy:function(){var e=this;this.copied=!0,this.$refs.emails.focus(),document.execCommand("copy"),setTimeout((function(){e.copied=!1}),3e3)},sendEmail:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.saving=!0,t.next=3,e.$sendEmail(e.usersToEmail.reduce((function(t,r){return t.push(e.usersForEmail.filter((function(e){return e.id===r}))[0].email),t}),[]).toString(),e.subject,e.email);case 3:200===t.sent.status&&(e.snack({message:"Your message was successfully sent to "+e.usersToEmail.length+" users."}),e.subject=null,e.email=null,e.saving=!1);case 5:case"end":return t.stop()}}),t)})))()}})},S=r(51),component=Object(S.a)(P,(function(){var e=this,t=e._self._c;return t(d.a,[t(c.a,[t(l.b,[t("h3",[e._v("Email")])]),e._v(" "),t(l.a,[t(E.a,{attrs:{placeholder:"Subject",outlined:"",label:"Subject"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}}),e._v(" "),t(y.a,{attrs:{cols:"12",md:"6",placeholder:"Email",outlined:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),e._v(" "),t(O.a,[t(m.a,{attrs:{cols:"4"}},[t(E.a,{ref:"emails",attrs:{value:e.allEmailAddresses,readonly:""},on:{focus:function(e){return e.target.select()}}})],1),e._v(" "),t(m.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[t(n.a,{on:{click:e.doCopy}},[t(k.a,[e._v("mdi-content-copy")])],1)],1),e.copied?t(m.a,{staticClass:"d-flex align-center ma-0 pa-0",attrs:{cols:"2"}},[e._v("Copied!")]):e._e()],1),e._v(" "),t(j.a,{attrs:{accordion:""}},[t(f.a,[t(h.a,[e._v("\n        Users ("+e._s(e.usersToEmail.length)+")\n      ")]),e._v(" "),t(v.a,[t(o.a,{attrs:{label:"Check/Uncheck All"},on:{click:e.all},model:{value:e.allChecked,callback:function(t){e.allChecked=t},expression:"allChecked"}}),e._v(" "),t(d.a,{staticClass:"d-flex justify-center flex-wrap"},e._l(e.usersForEmail,(function(r){return t(m.a,{key:r.id,staticClass:"lg-3 xs-12"},[t(o.a,{attrs:{id:r.id,label:"".concat(r.firstName," ").concat(r.lastName),value:r.id},model:{value:e.usersToEmail,callback:function(t){e.usersToEmail=t},expression:"usersToEmail"}})],1)})),1)],1)],1)],1),e._v(" "),t(m.a,{staticClass:"text-right",attrs:{cols:"12"}},[t("NuxtLink",{staticClass:"mr-2",attrs:{to:"/forgotPassword"}},[e._v("Cancel")]),e._v(" "),t(n.a,{attrs:{color:"primary",disabled:e.saving,small:""},on:{click:e.sendEmail}},[e._v("Send")])],1)],1)}),[],!1,null,"56dca312",null);t.default=component.exports}}]);