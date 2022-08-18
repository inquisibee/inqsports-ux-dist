(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{573:function(e,t,r){"use strict";var n=r(1),c=(r(49),r(24),r(184),r(7),r(105),r(9),r(8),r(11),r(12),r(4)),o=r(78),l=r(88);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(c.a)(o.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},649:function(e,t,r){"use strict";r.r(t);var n=r(186),c=r(548),o=r(377),l=r(561),d=r(566),f=r(635),m=r(634),h=r(573),v=r(560),k=r(87),w=(r(185),r(22),r(9),r(8),r(7),r(11),r(12),r(1)),y=r(5),D=(r(37),r(42)),O=r(2),_=r.n(O);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(w.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P={name:"WeekListing",layout:"admin",data:function(){return{valid:!0,search:"",headers:[{text:"Name",value:"name"},{text:"Start",value:"startDate"},{text:"End",value:"endDate"},{text:"Picks Due",value:"picksDueDate"},{text:"",value:"action"}],week:{},editing:!1,gamesForWeek:[],startMenu:!1,endMenu:!1,picksDueDateMenu:!1,isDate:[function(e){return!!e||"This field is required"},function(e){return e&&19===e.length||"This field should be 19 characters in this format: yyyy-mm-dd HH:mm:ss"},function(e){return e&&_()(e).isValid()||"Please check your date -- it looks like it might not be a valid date/time"}]}},fetch:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.listAllWeeks();case 2:case"end":return t.stop()}}),t)})))()},computed:x(x({},Object(D.c)("admin",["weeks"])),Object(D.c)(["currentSeason"])),methods:x(x(x({},Object(D.b)("snackbar",["snack"])),Object(D.b)("admin",["listAllWeeks"])),{},{edit:function(e){var t=this;return Object(y.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.id){r.next=5;break}return r.next=3,t.$listGamesForWeek(e.id);case 3:(n=r.sent).data&&(t.gamesForWeek=n.data);case 5:t.week=e,t.editing=!0;case 7:case"end":return r.stop()}}),r)})))()},save:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$saveWeek(x(x({},e.week),{},{seasonId:e.currentSeason.id}));case 3:if(200!==t.sent.status){t.next=12;break}return e.snack({message:e.week.name+" saved successfully."}),e.editing=!1,e.week={},t.next=10,e.listAllWeeks();case 10:t.next=13;break;case 12:e.error();case 13:t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0),e.error();case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()},cancel:function(){this.week={},this.editing=!1},doDelete:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$deleteWeek(e.week.id);case 2:if(200!==(r=t.sent).status){t.next=8;break}return t.next=6,e.listAllWeeks();case 6:e.editing=!1,e.snack({message:"Week saved successfully."});case 8:console.log(r);case 9:case"end":return t.stop()}}),t)})))()},error:function(){this.snack({message:"There was an error saving the week. Please reload and try again.",color:"error"})},clarifyFormat:function(e){return _()(e,"YYYY-MM-DD HH:mm:ss").format("ddd MMM D @ h:mm A")}})},H=r(51),component=Object(H.a)(P,(function(){var e=this,t=e._self._c;return t(d.a,[t(v.a,[t(l.a,{staticClass:"md-6"},[t("h1",[e._v("Weeks")])]),e._v(" "),t(l.a,{staticClass:"md-6 text-right"},[t(n.a,{attrs:{color:"primary",small:""},on:{click:e.edit}},[e._v("Add")])],1)],1),e._v(" "),e.editing?t(c.a,[t(d.a,[t(h.a,{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(k.a,{attrs:{label:"Name"},model:{value:e.week.name,callback:function(t){e.$set(e.week,"name",t)},expression:"week.name"}}),e._v(" "),t(v.a,[t(l.a,{attrs:{md:"12",lg:"8"}},[t(v.a,[t(l.a,{attrs:{cols:"12"}},[t(k.a,{attrs:{label:"Start Date/Time (PT)",placeholder:"yyyy-mm-dd HH:mm:ss",rules:e.isDate,hint:" => ".concat(e.clarifyFormat(e.week.startDate)," PT "),"persistent-hint":""},model:{value:e.week.startDate,callback:function(t){e.$set(e.week,"startDate",t)},expression:"week.startDate"}})],1)],1),e._v(" "),t(v.a,[t(l.a,{attrs:{cols:"8"}},[t(k.a,{attrs:{label:"End Date/Time (PT)",placeholder:"yyyy-mm-dd HH:mm:ss",rules:e.isDate,hint:" => ".concat(e.clarifyFormat(e.week.endDate)," PT "),"persistent-hint":""},model:{value:e.week.endDate,callback:function(t){e.$set(e.week,"endDate",t)},expression:"week.endDate"}})],1),e._v(" "),t(l.a,{attrs:{cols:"4"}})],1),e._v(" "),t(v.a,[t(l.a,{attrs:{cols:"8"}},[t(k.a,{attrs:{label:"Picks Due Date/Time (PT)",placeholder:"yyyy-mm-dd HH:mm:ss",rules:e.isDate,hint:" => ".concat(e.clarifyFormat(e.week.picksDueDate)," PT "),"persistent-hint":""},model:{value:e.week.picksDueDate,callback:function(t){e.$set(e.week,"picksDueDate",t)},expression:"week.picksDueDate"}})],1),e._v(" "),t(l.a,{attrs:{cols:"4"}})],1)],1),e._v(" "),t(l.a,{staticClass:"hidden-md-and-down text-right",attrs:{cols:"4"}},[t(m.a,{attrs:{readonly:"","no-title":""}})],1)],1),e._v(" "),t(v.a,{attrs:{justify:"end"}},[t(l.a,{attrs:{cols:"6"}},[e.week.id?t(n.a,{attrs:{color:"error",small:""},on:{click:e.doDelete}},[e._v("Delete")]):e._e()],1),e._v(" "),t(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[t(n.a,{staticClass:"mr-2",attrs:{small:""},on:{click:e.cancel}},[e._v("Cancel")]),t(n.a,{attrs:{color:"primary",disabled:!e.valid,small:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)],1):t(c.a,[t(o.b,[t(k.a,{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),t(f.a,{attrs:{headers:e.headers,items:e.weeks,search:e.search,"items-per-page":20,loading:"true"},scopedSlots:e._u([{key:"item.action",fn:function(r){var c=r.item;return[t("td",[t("nuxt-link",{attrs:{to:{path:"/admin/game-list",query:{id:c.id}}}},[e._v("Games")]),e._v(" "),t(n.a,{staticClass:"ml-2",attrs:{color:"primary",small:""},on:{click:function(t){return e.edit(c)}}},[e._v("Edit")])],1)]}},{key:"item.startDate",fn:function(r){var n=r.item;return[t("td",[e._v(e._s(e._f("formatDate")(n.startDate,"YYYY-MM-DD HH:mm:ss")))])]}},{key:"item.endDate",fn:function(r){var n=r.item;return[t("td",[e._v(e._s(e._f("formatDate")(n.endDate,"YYYY-MM-DD HH:mm:ss")))])]}},{key:"item.picksDueDate",fn:function(r){var n=r.item;return[t("td",[e._v(e._s(e._f("formatDate")(n.picksDueDate,"YYYY-MM-DD HH:mm:ss")))])]}}],null,!0)})],1)],1)}),[],!1,null,"0bb6b806",null);t.default=component.exports}}]);