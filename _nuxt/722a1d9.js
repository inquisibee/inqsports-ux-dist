(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{563:function(e,t,n){var content=n(626);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("a035da6c",content,!0,{sourceMap:!1})},625:function(e,t,n){"use strict";n(563)},626:function(e,t,n){var r=n(13)(!1);r.push([e.i,".hidden{display:none}",""]),e.exports=r},661:function(e,t,n){"use strict";n.r(t);var r=n(527),o=n(645),c=(n(8),n(7),n(10),n(11),n(110)),d=n(3),l=n(4),f=(n(19),n(40),n(176),n(43),n(53),n(6),n(27),n(171),n(56),n(38),n(57),n(28),n(36));function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"Home",fetch:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCurrentWeek();case 2:return t.next=4,e.listStandings();case 4:e.transform();case 5:case"end":return t.stop()}}),t)})))()},computed:h({},Object(f.c)(["isAuthenticated","loggedInUser","standings","currentWeek"])),data:function(){return{headers:[],standingsTransformed:[]}},methods:h(h({},Object(f.b)(["listStandings","getCurrentWeek"])),{},{transform:function(){var e=this,t=[{text:"",value:"name"},{text:"overall",value:"overall"}],n=[];Object(c.a)(new Map(this.standings.map((function(e){return[e.weekId,e]}))).values()).forEach((function(r){t=[].concat(Object(c.a)(t),[{text:r.weekName,value:r.weekId}]);var o=e.standings.filter((function(e){return e.weekId===r.weekId}));n=o.reduce((function(e,data){if(e.filter((function(e){return e.userId&&e.userId===data.userId})).length){var t,n=e.findIndex((function(e){return e.userId===data.userId}));e[n]=h(h({},e[n]),{},(t={},Object(d.a)(t,data.weekId,data.wins),Object(d.a)(t,"overall",parseInt(e[n].overall)+parseInt(data.wins)),t))}else{var r;e=[].concat(Object(c.a)(e),[(r={userId:data.userId,name:data.name},Object(d.a)(r,data.weekId,data.wins),Object(d.a)(r,"overall",data.wins),r)])}return e}),n)})),this.headers=t,this.standingsTransformed=n,console.log(n)},columnText:function(data){return"string"==typeof data&&data.includes("|")?data.split("|")[0]:data},hideColumn:function(data){return"string"==typeof data&&data.includes("-")}})},w=(n(625),n(45)),component=Object(w.a)(m,(function(){var e=this,t=e._self._c;return t(r.a,[t(o.a,{attrs:{headers:e.headers,items:e.standingsTransformed,"items-per-page":e.standingsTransformed.length,"mobile-breakpoint":"10","fixed-header":"","hide-default-footer":"",dense:""}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);