(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{658:function(e,t,r){"use strict";r.r(t);var n=r(527),c=r(642),o=(r(8),r(7),r(10),r(11),r(110)),d=r(3),f=r(4),l=(r(19),r(40),r(176),r(43),r(53),r(6),r(27),r(171),r(28),r(36));function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"Home",fetch:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.listStandings();case 2:e.transform();case 3:case"end":return t.stop()}}),t)})))()},computed:w({},Object(l.c)(["isAuthenticated","loggedInUser","standings"])),data:function(){return{headers:[],standingsTransformed:[]}},methods:w(w({},Object(l.b)(["listStandings"])),{},{transform:function(){var e=this,t=[{text:"",value:"name"},{text:"overall",value:"overall"}],r=[];Object(o.a)(new Map(this.standings.map((function(e){return[e.weekId,e]}))).values()).forEach((function(n){t=[].concat(Object(o.a)(t),[{text:n.weekName,value:n.weekId}]);var c=e.standings.filter((function(e){return e.weekId===n.weekId}));r=c.reduce((function(e,data){if(e.filter((function(e){return e.userId&&e.userId===data.userId})).length){var t,r=e.findIndex((function(e){return e.userId===data.userId}));e[r]=w(w({},e[r]),{},(t={},Object(d.a)(t,data.weekId,data.wins),Object(d.a)(t,"overall",parseInt(e[r].overall)+parseInt(data.wins)),t))}else{var n;e=[].concat(Object(o.a)(e),[(n={userId:data.userId,name:data.name},Object(d.a)(n,data.weekId,data.wins),Object(d.a)(n,"overall",data.wins),n)])}return e}),r)})),this.headers=t,this.standingsTransformed=r}})},j=r(45),component=Object(j.a)(h,(function(){var e=this,t=e._self._c;return t(n.a,[t(c.a,{attrs:{headers:e.headers,items:e.standingsTransformed,"items-per-page":e.standingsTransformed.length,"fixed-header":"","hide-default-footer":"",dense:""}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);