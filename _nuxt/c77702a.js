(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{670:function(e,t,n){"use strict";n.r(t);var l=n(172),r=n(524),m=n(527),c=n(523),o=n(557),v=n(558),d=(n(27),n(4)),f=(n(28),{name:"TheTeam",props:{theTeam:{}},data:function(){return{team:this.theTeam,teamType:[{display:"NCAA",value:"1"},{display:"NFL",value:"2"}],gamesForTeam:[]}},methods:{save:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$saveTeam(e.team);case 2:t.sent.data.name===e.team.name&&(e.snack({message:e.team.name+" saved successfully."}),e.editing=!1,e.team={});case 4:case"end":return t.stop()}}),t)})))()},doDelete:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$deleteTeam(e.team.id);case 2:if(200!==(n=t.sent).status){t.next=7;break}return t.next=6,e.listAllTeams();case 6:e.editing=!1;case 7:console.log(n);case 8:case"end":return t.stop()}}),t)})))()},cancel:function(){this.team={},this.editing=!1}}}),h=n(45),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t(m.a,[t(v.a,{attrs:{label:"Name"},model:{value:e.team.name,callback:function(t){e.$set(e.team,"name",t)},expression:"team.name"}}),e._v(" "),t(v.a,{attrs:{label:"Mascot"},model:{value:e.team.mascot,callback:function(t){e.$set(e.team,"mascot",t)},expression:"team.mascot"}}),e._v(" "),t(v.a,{attrs:{label:"Alternate 1"},model:{value:e.team.name2,callback:function(t){e.$set(e.team,"name2",t)},expression:"team.name2"}}),e._v(" "),t(v.a,{attrs:{label:"Alternate 2"},model:{value:e.team.name3,callback:function(t){e.$set(e.team,"name3",t)},expression:"team.name3"}}),e._v(" "),t(v.a,{attrs:{label:"Api ID"},model:{value:e.team.apiId,callback:function(t){e.$set(e.team,"apiId",t)},expression:"team.apiId"}}),e._v(" "),t(o.a,{attrs:{items:e.teamType,"item-text":"display","item-value":"value",placeholder:"Type (NFL/NCAA)",label:"Type"},model:{value:e.team.type,callback:function(t){e.$set(e.team,"type",t)},expression:"team.type"}}),e._v(" "),t(c.a,{attrs:{justify:"end"}},[t(r.a,{attrs:{cols:"8"}},[e.gamesForTeam.length?e._e():t(l.a,{attrs:{color:"error",small:""},on:{click:e.doDelete}},[e._v("Delete")])],1),e._v(" "),t(r.a,{staticClass:"text-right",attrs:{cols:"4"}},[t(l.a,{staticClass:"mr-2",attrs:{small:""},on:{click:e.cancel}},[e._v("Cancel")]),t(l.a,{attrs:{color:"primary",small:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);