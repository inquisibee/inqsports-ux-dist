(window.webpackJsonp=window.webpackJsonp||[]).push([[23,10],{510:function(e,t,r){"use strict";var n=r(172);t.a=n.a},536:function(e,t,r){"use strict";r.r(t);var n=r(172),o=r(524),l=r(527),c=r(641),d=r(565),m=r(523),v=r(556),f=r(557),E=(r(8),r(7),r(6),r(10),r(11),r(4)),h=r(3),F=(r(28),r(36));function P(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k={name:"TheUser",props:{user:{},editingSelf:!1},data:function(){return{saving:!1,timezones:[{text:"Eastern",value:"America/New_York"},{text:"Central",value:"America/Chicago"},{text:"Mountain",value:"America/Boise"},{text:"Pacific",value:"America/Los_Angeles"}],paymentTypes:[{text:"Venmo",value:"Venmo"},{text:"PayPal",value:"PayPal"},{text:"CashApp",value:"CashApp"},{text:"Cash",value:"Cash"},{text:"Check",value:"Check"},{text:"Other",value:"Other"}],autoPickTypes:[{text:"Home",value:"Home"},{text:"Away",value:"Away"},{text:"Favorite",value:"Favorite"},{text:"Underdog",value:"Underdog"},{text:"Random",value:"Random"}],startMenu:!1,userForEdit:this.user}},computed:x({},Object(F.c)(["isAdmin","isUser","currentSeason"])),methods:x(x(x({},Object(F.b)("snackbar",["snack"])),Object(F.b)("admin",["startEditingUser","listAllUsers"])),{},{save:function(){var e=this;return Object(E.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.saving=!0,t.prev=1,!e.isAdmin){t.next=7;break}return t.next=5,e.$saveUserSeason({datePaid:e.userForEdit.userSeason.datePaid,amountPaid:e.userForEdit.userSeason.amountPaid,paidUsing:e.userForEdit.userSeason.paidUsing,seasonId:e.currentSeason.id,userId:e.userForEdit.id});case 5:200!==t.sent.status&&e.error();case 7:return t.next=9,e.$saveUser(e.userForEdit);case 9:if(200!==t.sent.status){t.next=19;break}if(e.editingSelf){t.next=14;break}return t.next=14,e.listAllUsers();case 14:e.snack({message:"User saved successfully"}),e.startEditingUser(!1),e.saving=!1,t.next=20;break;case 19:e.error();case 20:t.next=26;break;case 22:t.prev=22,t.t0=t.catch(1),console.log(t.t0),e.error();case 26:case"end":return t.stop()}}),t,null,[[1,22]])})))()},cancel:function(){this.editingSelf?this.$router.push("/"):this.startEditingUser(!1)},error:function(){this.snack({message:"There was an error saving, please refresh and try again",color:"error"}),this.saving=!1,this.startEditingUser(!1)},removeUserFromSeason:function(){var e=this;return Object(E.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!confirm("Are you sure you want to remove "+e.userForEdit.firstName+" "+e.userForEdit.lastName+" from the current season?")){t.next=8;break}return e.saving=!0,t.next=4,e.$removeUserFromSeason({seasonId:e.currentSeason.id,userId:e.userForEdit.id});case 4:200===t.sent.status&&e.snack({message:e.userForEdit.firstName+" "+e.userForEdit.lastName+" has been removed from this season"}),e.startEditingUser(!1),e.listAllUsers();case 8:case"end":return t.stop()}}),t)})))()}})},S=r(45),component=Object(S.a)(k,(function(){var e=this,t=e._self._c;return t(l.a,[t(m.a,[t(o.a,[t(f.a,{attrs:{value:e.user.firstName,label:"First Name"},model:{value:e.userForEdit.firstName,callback:function(t){e.$set(e.userForEdit,"firstName",t)},expression:"userForEdit.firstName"}})],1)],1),e._v(" "),t(m.a,[t(o.a,[t(f.a,{attrs:{value:e.userForEdit.lastName,label:"Last Name"},model:{value:e.userForEdit.lastName,callback:function(t){e.$set(e.userForEdit,"lastName",t)},expression:"userForEdit.lastName"}})],1)],1),e._v(" "),t(m.a,[t(o.a,[t(v.a,{attrs:{items:e.timezones,value:e.userForEdit.timezone,label:"Timezone"},model:{value:e.userForEdit.timezone,callback:function(t){e.$set(e.userForEdit,"timezone",t)},expression:"userForEdit.timezone"}})],1)],1),e._v(" "),t(m.a,[t(o.a,[t(v.a,{attrs:{items:e.autoPickTypes,label:"Auto Pick"},model:{value:e.userForEdit.autoPick,callback:function(t){e.$set(e.userForEdit,"autoPick",t)},expression:"userForEdit.autoPick"}})],1)],1),e._v(" "),e.isAdmin&&!e.editingSelf?[t(m.a,[t(o.a,[t(d.a,{ref:"datePaidMenu",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t(f.a,e._g(e._b({attrs:{label:"Date Paid","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.userForEdit.userSeason.datePaid,callback:function(t){e.$set(e.userForEdit.userSeason,"datePaid",t)},expression:"userForEdit.userSeason.datePaid"}},"v-text-field",o,!1),n))]}}],null,!1,3605650048),model:{value:e.startMenu,callback:function(t){e.startMenu=t},expression:"startMenu"}},[e._v(" "),t(c.a,{attrs:{label:"Date Paid"},on:{input:function(t){e.datePaidMenu=!1}},model:{value:e.userForEdit.userSeason.datePaid,callback:function(t){e.$set(e.userForEdit.userSeason,"datePaid",t)},expression:"userForEdit.userSeason.datePaid"}})],1)],1)],1),e._v(" "),t(m.a,[t(o.a,[t(f.a,{attrs:{label:"Amount Paid"},model:{value:e.userForEdit.userSeason.amountPaid,callback:function(t){e.$set(e.userForEdit.userSeason,"amountPaid",t)},expression:"userForEdit.userSeason.amountPaid"}})],1)],1),e._v(" "),t(m.a,[t(o.a,[t(v.a,{attrs:{items:e.paymentTypes,label:"Paid With"},model:{value:e.userForEdit.userSeason.paidUsing,callback:function(t){e.$set(e.userForEdit.userSeason,"paidUsing",t)},expression:"userForEdit.userSeason.paidUsing"}})],1)],1)]:[t(m.a,[t(o.a,[t(f.a,{attrs:{label:"Paid date",value:e.userForEdit.userSeason.datePaid?e.userForEdit.userSeason.datePaid:"Not Paid",readonly:""}})],1)],1)],e._v(" "),t(m.a,[t(o.a,{attrs:{cols:"4"}},[e.isAdmin&&!e.editingSelf?t(n.a,{attrs:{color:"error",disabled:e.saving,small:""},on:{click:e.removeUserFromSeason}},[e._v("Remove from season")]):e._e()],1),e._v(" "),t(o.a,{staticClass:"text-right",attrs:{cols:"8"}},[t(n.a,{attrs:{disabled:e.saving,small:""},on:{click:e.cancel}},[e._v("Cancel")]),e._v(" "),t(n.a,{staticClass:"ml-2",attrs:{color:"primary",disabled:e.saving,small:""},on:{click:e.save}},[e._v("Save")])],1)],1)],2)}),[],!1,null,null,null);t.default=component.exports},647:function(e,t,r){"use strict";r.r(t);var n=r(524),o=r(527),l=r(523),c=r(4),d=(r(28),{name:"MyProfile",layout:"singlePanel",data:function(){return{me:{}}},fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$getMe();case 2:r=t.sent,e.me=r.data.user;case 4:case"end":return t.stop()}}),t)})))()}}),m=r(45),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t(o.a,[t("h1",[e._v("My Profile")]),e._v(" "),t(l.a,[t(n.a,{attrs:{cols:"12"}},[e.$fetchState.pending?[e._v(" Loading profile ... ")]:t("the-user",{attrs:{user:e.me,"editing-self":"true"}})],2)],1)],1)}),[],!1,null,"1f8cff00",null);t.default=component.exports;installComponents(component,{TheUser:r(536).default})}}]);