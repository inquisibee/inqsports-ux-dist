(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{378:function(e,t,n){"use strict";var r=n(186);t.a=r.a},645:function(e,t,n){"use strict";n.r(t);var r=n(186),c=n(548),o=n(377),l=n(561),m=n(566),d=n(632),v=n(560),f=n(550),h=n(87),y=(n(185),n(22),n(9),n(8),n(7),n(11),n(12),n(5)),O=n(1),k=(n(37),n(42));function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(O.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={name:"TeamListing",layout:"admin",data:function(){return{search:"",headers:[{text:"Location",value:"name"},{text:"Mascot",value:"mascot"},{text:"Type",value:"type"},{text:"",value:"action"}],team:{},editing:!1,teamType:[{display:"NCAA",value:"1"},{display:"NFL",value:"2"}],gamesForTeam:[]}},methods:j(j(j({},Object(k.b)("snackbar",["snack"])),Object(k.b)("admin",["listAllTeams"])),{},{edit:function(e){var t=this;return Object(y.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$listGamesForTeam(e.id);case 2:(r=n.sent).data&&(t.gamesForTeam=r.data),t.team=e,t.editing=!0;case 6:case"end":return n.stop()}}),n)})))()},save:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$saveTeam(e.team);case 2:t.sent.data.id===e.team.id&&(e.snack({message:e.team.name+" saved successfully."}),e.editing=!1,e.team={});case 4:case"end":return t.stop()}}),t)})))()},cancel:function(){this.team={},this.editing=!1},doDelete:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$deleteTeam(e.team.id);case 2:if(200!==(n=t.sent).status){t.next=7;break}return t.next=6,e.listAllTeams();case 6:e.editing=!1;case 7:console.log(n);case 8:case"end":return t.stop()}}),t)})))()}}),computed:j({},Object(k.c)("admin",["teams"])),fetch:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.listAllTeams();case 2:case"end":return t.stop()}}),t)})))()}},_=n(51),component=Object(_.a)(w,(function(){var e=this,t=e._self._c;return t(m.a,[t("h1",[e._v("Teams")]),e._v(" "),e.editing?t(c.a,[t(m.a,[t(h.a,{attrs:{label:"Name"},model:{value:e.team.name,callback:function(t){e.$set(e.team,"name",t)},expression:"team.name"}}),e._v(" "),t(h.a,{attrs:{label:"Mascot"},model:{value:e.team.mascot,callback:function(t){e.$set(e.team,"mascot",t)},expression:"team.mascot"}}),e._v(" "),t(h.a,{attrs:{label:"Alternate 1"},model:{value:e.team.name2,callback:function(t){e.$set(e.team,"name2",t)},expression:"team.name2"}}),e._v(" "),t(h.a,{attrs:{label:"Alternate 2"},model:{value:e.team.name3,callback:function(t){e.$set(e.team,"name3",t)},expression:"team.name3"}}),e._v(" "),t(h.a,{attrs:{label:"Api ID"},model:{value:e.team.apiId,callback:function(t){e.$set(e.team,"apiId",t)},expression:"team.apiId"}}),e._v(" "),t(f.a,{attrs:{items:e.teamType,"item-text":"display","item-value":"value",placeholder:"Type (NFL/NCAA)",label:"Type"},model:{value:e.team.type,callback:function(t){e.$set(e.team,"type",t)},expression:"team.type"}}),e._v(" "),t(v.a,{attrs:{justify:"end"}},[t(l.a,{attrs:{cols:"8"}},[e.gamesForTeam.length?e._e():t(r.a,{attrs:{color:"error",small:""},on:{click:e.doDelete}},[e._v("Delete")])],1),e._v(" "),t(l.a,{staticClass:"text-right",attrs:{cols:"4"}},[t(r.a,{staticClass:"mr-2",attrs:{small:""},on:{click:e.cancel}},[e._v("Cancel")]),t(r.a,{attrs:{color:"primary",small:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1):t(c.a,[t(o.b,[t(h.a,{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),t(d.a,{attrs:{headers:e.headers,items:e.teams,search:e.search,"items-per-page":20,loading:"true"},scopedSlots:e._u([{key:"item.type",fn:function(n){var r=n.item;return[t("td",[e._v(e._s("1"===r.type?"NCAA":"NFL"))])]}},{key:"item.action",fn:function(n){var c=n.item;return[t("td",[t(r.a,{attrs:{color:"primary",small:""},on:{click:function(t){return e.edit(c)}}},[e._v("Edit")])],1)]}}],null,!0)})],1)],1)}),[],!1,null,"12330a1b",null);t.default=component.exports}}]);