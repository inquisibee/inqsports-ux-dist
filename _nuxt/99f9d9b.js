(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{512:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(514),c=r(1),l=Object(c.j)("v-card__actions"),o=Object(c.j)("v-card__subtitle"),m=Object(c.j)("v-card__text"),d=Object(c.j)("v-card__title");n.a},676:function(e,t,r){"use strict";r.r(t);var n=r(175),c=r(514),l=r(512),o=r(527),m=r(530),d=r(660),v=r(140),f=r(526),y=r(559),h=r(560),O=(r(176),r(27),r(7),r(8),r(6),r(10),r(11),r(2)),_=r(4),j=(r(28),r(37));function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(O.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T={name:"TeamListing",layout:"admin",fetch:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.listAllTeams();case 2:case"end":return t.stop()}}),t)})))()},computed:k({},Object(j.c)("admin",["teams"])),data:function(){return{search:"",headers:[{text:"Location",value:"name"},{text:"Mascot",value:"mascot"},{text:"Type",value:"type"},{text:"",value:"action"}],team:{},editing:!1,teamType:[{display:"NCAA",value:1},{display:"NFL",value:2}],gamesForTeam:[]}},methods:k(k(k({},Object(j.b)("snackbar",["snack"])),Object(j.b)("admin",["listAllTeams"])),{},{edit:function(e){var t=this;return Object(_.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=6;break}return r.next=3,t.$listGamesForTeam(e.id);case 3:(n=r.sent).data&&(t.gamesForTeam=n.data),t.team=k(k({},e),{},{teamType:e.type});case 6:t.editing=!0;case 7:case"end":return r.stop()}}),r)})))()},save:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$saveTeam(k(k({},e.team),{},{type:e.team.teamType}));case 2:if(200!==t.sent.status){t.next=9;break}return e.snack({message:e.team.name+" saved successfully."}),e.editing=!1,e.team={},t.next=9,e.listAllTeams();case 9:case"end":return t.stop()}}),t)})))()},cancel:function(){this.team={},this.editing=!1},doDelete:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$deleteTeam(e.team.id);case 2:if(200!==(r=t.sent).status){t.next=7;break}return t.next=6,e.listAllTeams();case 6:e.editing=!1;case 7:console.log(r);case 8:case"end":return t.stop()}}),t)})))()}})},w=r(45),component=Object(w.a)(T,(function(){var e=this,t=e._self._c;return t(m.a,[t(f.a,[t(o.a,{staticClass:"md-6"},[t("h1",[e._v("Teams")])]),e._v(" "),t(o.a,{staticClass:"md-6 text-right"},[t(n.a,{attrs:{color:"primary",small:""},on:{click:e.edit}},[e._v("Add")])],1)],1),e._v(" "),e.editing?t(c.a,[t(m.a,[t(h.a,{attrs:{label:"Name"},model:{value:e.team.name,callback:function(t){e.$set(e.team,"name",t)},expression:"team.name"}}),e._v(" "),t(h.a,{attrs:{label:"Mascot"},model:{value:e.team.mascot,callback:function(t){e.$set(e.team,"mascot",t)},expression:"team.mascot"}}),e._v(" "),t(h.a,{attrs:{label:"Alternate 1"},model:{value:e.team.name2,callback:function(t){e.$set(e.team,"name2",t)},expression:"team.name2"}}),e._v(" "),t(h.a,{attrs:{label:"Alternate 2"},model:{value:e.team.name3,callback:function(t){e.$set(e.team,"name3",t)},expression:"team.name3"}}),e._v(" "),t(h.a,{attrs:{label:"Api ID"},model:{value:e.team.apiId,callback:function(t){e.$set(e.team,"apiId",t)},expression:"team.apiId"}}),e._v(" "),t(y.a,{attrs:{items:e.teamType,"item-text":"display","item-value":"value",placeholder:"Type (NFL/NCAA)",label:"Type"},model:{value:e.team.teamType,callback:function(t){e.$set(e.team,"teamType",t)},expression:"team.teamType"}}),e._v(" "),t(f.a,{attrs:{justify:"end"}},[t(o.a,{attrs:{cols:"8"}},[e.gamesForTeam.length?e._e():t(n.a,{attrs:{color:"error",small:""},on:{click:e.doDelete}},[e._v("Delete")])],1),e._v(" "),t(o.a,{staticClass:"text-right",attrs:{cols:"4"}},[t(n.a,{staticClass:"mr-2",attrs:{small:""},on:{click:e.cancel}},[e._v("Cancel")]),t(n.a,{attrs:{color:"primary",small:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1):t(c.a,[t(l.b,[t(h.a,{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),t(d.a,{attrs:{headers:e.headers,items:e.teams,search:e.search,"items-per-page":20,loading:"true"},scopedSlots:e._u([{key:"item.type",fn:function(r){var n=r.item;return[t("td",[e._v(e._s(1===n.type?"NCAA":"NFL"))])]}},{key:"item.action",fn:function(r){var c=r.item;return[t("td",[t(n.a,{attrs:{color:"primary",icon:"",small:""},on:{click:function(t){return e.edit(c)}}},[t(v.a,[e._v("mdi-pencil")])],1)],1)]}}],null,!0)})],1)],1)}),[],!1,null,"2deb283d",null);t.default=component.exports}}]);