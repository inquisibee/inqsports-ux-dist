(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{645:function(e,t,r){"use strict";r.r(t);var n=r(633),o=r(186),c=r(548),l=r(624),m=r(561),d=r(566),v=r(573),f=r(142),k=r(560),_=r(550),x=r(584),h=r(87),y=(r(9),r(8),r(11),r(12),r(1)),w=r(5),T=(r(22),r(7),r(37),r(42)),O=r(2),j=r.n(O),I=r(599);function F(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S={name:"GameListing",components:{draggable:r.n(I).a},layout:"admin",data:function(){return{loading:!1,valid:!0,search:"",headers:[{text:"",value:"move"},{text:"Home",value:"homeTeam"},{text:"Spread",value:"spread"},{text:"",value:"spreadFavor"},{text:"Away",value:"awayTeam"},{text:"Start",value:"start"},{text:"Tie Break",value:"tiebreak"},{text:"",value:"action"}],editing:!1,gamesForWeek:[],game:{},isDate:[function(e){return!!e||"This field is required"},function(e){return e&&19===e.length||"This field should be 19 characters in this format: yyyy-mm-dd HH:mm:ss"},function(e){return e&&j()(e).isValid()||"Please check your date -- it looks like it might not be a valid date/time"}],mustBeNumber:[function(e){return!!e&&"number"==typeof parseFloat(e)&&parseFloat(e)>0||"Spread must be a number greater than 0"}],spreadFavor:[{text:"Home",value:"home"},{text:"Away",value:"away"}]}},fetch:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.query.id){t.next=5;break}return t.next=3,e.getWeek(e.$route.query.id);case 3:t.next=7;break;case 5:return t.next=7,e.getCurrentWeek();case 7:return t.next=9,e.listAllTeams();case 9:return t.next=11,e.listGamesForWeek();case 11:case"end":return t.stop()}}),t)})))()},computed:G(G({},Object(T.c)(["seasonId","currentGames","currentWeek"])),Object(T.c)("admin",["teams"])),methods:G(G(G(G({},Object(T.b)("snackbar",["snack"])),Object(T.b)(["getCurrentWeek","listGamesForWeek","getWeek"])),Object(T.b)("admin",["listAllTeams"])),{},{edit:function(e){this.game=e,this.editing=!0},save:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$saveGame(G(G({},e.game),{},{weekId:e.currentWeek.id,apiId:"",order:"number"==typeof e.game.order?e.game.order:e.currentGames.length,status:e.game.isFinal?"final":e.game.status}));case 3:if(200!==t.sent.status){t.next=12;break}return e.editing=!1,e.game={},t.next=9,e.listGamesForWeek();case 9:e.snack({message:"Game saved successfully."}),t.next=13;break;case 12:e.error();case 13:t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0),e.error();case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()},saveScores:function(e){this.game=e,this.save()},cancel:function(){this.game={},this.editing=!1},doDelete:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$deleteGame(e.game.id);case 2:if(200!==(r=t.sent).status){t.next=8;break}return t.next=6,e.listGamesForWeek();case 6:e.editing=!1,e.snack({message:"Game saved successfully."});case 8:console.log(r);case 9:case"end":return t.stop()}}),t)})))()},error:function(){this.snack({message:"There was an error saving the game. Please reload and try again.",color:"error"})},getItemText:function(e){return"".concat(e.name," ").concat(e.mascot)},clarifyFormat:function(e){return j()(e,"YYYY-MM-DD HH:mm:ss").format("ddd MMM D @ h:mm A")},reordered:function(e){var t=this;return Object(w.a)(regeneratorRuntime.mark((function r(){var n,i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.currentGames.filter((function(t){return parseInt(t.order)===e.oldIndex}))[0],!(e.oldIndex>e.newIndex)){r.next=12;break}i=e.newIndex;case 3:if(!(i<e.oldIndex)){r.next=10;break}return t.game=G(G({},t.currentGames[i]),{},{order:i+1}),r.next=7,t.save();case 7:i++,r.next=3;break;case 10:r.next=20;break;case 12:o=e.oldIndex+1;case 13:if(!(o<=e.newIndex)){r.next=20;break}return t.game=G(G({},t.currentGames[o]),{},{order:o-1}),r.next=17,t.save();case 17:o++,r.next=13;break;case 20:return t.game=G(G({},n),{},{order:e.newIndex}),r.next=23,t.save();case 23:t.game={},t.listGamesForWeek(),t.snack({message:"Game order updated successfully."});case 26:case"end":return r.stop()}}),r)})))()}})},D=r(51),component=Object(D.a)(S,(function(){var e=this,t=e._self._c;return t(d.a,[t(k.a,[t(m.a,{staticClass:"md-6"},[t("h1",[e._v("Games")])]),e._v(" "),t(m.a,{staticClass:"md-6 text-right"},[t(o.a,{attrs:{color:"primary",small:""},on:{click:e.edit}},[e._v("Add")])],1)],1),e._v(" "),e.editing?e.editing?t(c.a,[t(d.a,[t(v.a,{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(n.a,{attrs:{items:e.teams,label:"Home Team","item-text":e.getItemText,"item-value":"id",flat:"","hide-no-data":"","hide-detail":"",required:""},model:{value:e.game.homeTeamId,callback:function(t){e.$set(e.game,"homeTeamId",t)},expression:"game.homeTeamId"}}),e._v(" "),t(n.a,{attrs:{items:e.teams,label:"Away Team","item-text":e.getItemText,"item-value":"id",flat:"","hide-no-data":"","hide-detail":"",required:""},model:{value:e.game.awayTeamId,callback:function(t){e.$set(e.game,"awayTeamId",t)},expression:"game.awayTeamId"}}),e._v(" "),t(h.a,{attrs:{label:"spread",rules:e.mustBeNumber,required:""},model:{value:e.game.spread,callback:function(t){e.$set(e.game,"spread",t)},expression:"game.spread"}}),e._v(" "),t(_.a,{attrs:{label:"spread favor",items:e.spreadFavor,required:""},model:{value:e.game.spreadFavor,callback:function(t){e.$set(e.game,"spreadFavor",t)},expression:"game.spreadFavor"}}),e._v(" "),t(h.a,{attrs:{label:"Game Date/Time (PT)",placeholder:"yyyy-mm-dd HH:mm:ss",rules:e.isDate,"persistent-hint":"",required:""},model:{value:e.game.start,callback:function(t){e.$set(e.game,"start",t)},expression:"game.start"}}),e._v(" "),t(h.a,{attrs:{label:"Tiebreaker",rules:e.mustBeNumber,required:""},model:{value:e.game.tieBreak,callback:function(t){e.$set(e.game,"tieBreak",t)},expression:"game.tieBreak"}}),e._v(" "),t(l.a,{attrs:{label:"Cancelled"},model:{value:e.game.cancelled,callback:function(t){e.$set(e.game,"cancelled",t)},expression:"game.cancelled"}}),e._v(" "),t(k.a,{attrs:{justify:"end"}},[t(m.a,{attrs:{cols:"6"}},[e.game.id?t(o.a,{attrs:{color:"error",small:""},on:{click:e.doDelete}},[e._v("Delete")]):e._e()],1),e._v(" "),t(m.a,{staticClass:"text-right",attrs:{cols:"6"}},[t(o.a,{staticClass:"mr-2",attrs:{small:""},on:{click:e.cancel}},[e._v("Cancel")]),t(o.a,{attrs:{color:"primary",disabled:!e.valid,small:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)],1):e._e():t(c.a,[t(x.a,[[e.$fetchState.pending?t("tr",[t("td",[e._v("Loading games ...")])]):e.currentGames.length?e._e():t("tr",[t("td",[e._v("No games entered")])]),e._v(" "),t("draggable",{ref:"rows",attrs:{tag:"tbody"},on:{end:e.reordered}},e._l(e.currentGames,(function(r){return t("tr",{key:r.id},[r.started?[t("td",[t(f.a,{staticClass:"page__grab-icon",attrs:{small:""}},[e._v(" mdi-arrow-all ")])],1),e._v(" "),t("td",[e._v(e._s(r.homeTeamName+" "+r.homeTeamMascot))]),e._v(" "),t("td",[t(h.a,{attrs:{label:"Home Score"},model:{value:r.homeScore,callback:function(t){e.$set(r,"homeScore",t)},expression:"game.homeScore"}})],1),e._v(" "),t("td",[e._v(e._s(r.awayTeamName+" "+r.awayTeamMascot))]),e._v(" "),t("td",[t(h.a,{attrs:{label:"Away Score"},model:{value:r.awayScore,callback:function(t){e.$set(r,"awayScore",t)},expression:"game.awayScore"}})],1),e._v(" "),t("td",[t(h.a,{attrs:{label:"Status"},model:{value:r.status,callback:function(t){e.$set(r,"status",t)},expression:"game.status"}})],1),e._v(" "),t("td",[t(l.a,{attrs:{label:"Is Final"},model:{value:r.isFinal,callback:function(t){e.$set(r,"isFinal",t)},expression:"game.isFinal"}})],1),e._v(" "),t("td",[e._v("\n                "+e._s(e._f("formatDate")(r.start,"YYYY-MM-DD HH:mm:ss"))+"\n              ")]),e._v(" "),t("td",[t(o.a,{staticClass:"ml-2",attrs:{color:"info",small:""},on:{click:function(t){return e.saveScores(r)}}},[e._v("Save Score")])],1)]:[t("td",[t(f.a,{staticClass:"page__grab-icon",attrs:{small:""}},[e._v(" mdi-arrow-all ")])],1),e._v(" "),t("td",[e._v(e._s(r.homeTeamName+" "+r.homeTeamMascot))]),e._v(" "),t("td",[e._v(e._s(r.spread))]),e._v(" "),t("td",[e._v(e._s(r.spreadFavor))]),e._v(" "),t("td",[e._v(e._s(r.awayTeamName+" "+r.awayTeamMascot))]),e._v(" "),t("td",[e._v("\n                "+e._s(e._f("formatDate")(r.start,"YYYY-MM-DD HH:mm:ss"))+"\n              ")]),e._v(" "),t("td",[e._v(e._s(r.tieBreak))]),e._v(" "),t("td",[t(o.a,{staticClass:"ml-2",attrs:{color:"primary",small:""},on:{click:function(t){return e.edit(r)}}},[e._v("Edit")])],1)]],2)})),0)]],2)],1)],1)}),[],!1,null,"00174e50",null);t.default=component.exports}}]);