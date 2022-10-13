(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{673:function(e,t,r){"use strict";r.r(t);var n=r(586),o=r(174),c=r(513),l=r(648),m=r(526),d=r(529),v=r(560),f=r(139),k=r(525),T=r(545),h=r(543),x=r(546),_=(r(8),r(7),r(10),r(11),r(2)),y=r(4),S=(r(6),r(49),r(27),r(28),r(36)),w=r(0),G=r.n(w),O=r(633);function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I={name:"GameListing",components:{draggable:r.n(O).a},layout:"admin",data:function(){return{loading:!1,valid:!0,search:"",headers:[{text:"",value:"move"},{text:"Home",value:"homeTeam"},{text:"Spread",value:"spread"},{text:"",value:"spreadFavor"},{text:"Away",value:"awayTeam"},{text:"Start",value:"start"},{text:"Tie Break",value:"tiebreak"},{text:"",value:"action"}],editing:!1,gamesForWeek:[],gameToSave:{},isDate:[function(e){return!!e||"This field is required"},function(e){return e&&19===e.length||"This field should be 19 characters in this format: yyyy-mm-dd HH:mm:ss"},function(e){return e&&G()(e).isValid()||"Please check your date -- it looks like it might not be a valid date/time"}],mustBeNumber:[function(e){return!!e&&"number"==typeof parseFloat(e)&&parseFloat(e)>0||"Spread must be a number greater than 0"}],spreadFavor:[{text:"Home",value:"home"},{text:"Away",value:"away"}]}},fetch:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.query.id){t.next=5;break}return t.next=3,e.getWeek(e.$route.query.id);case 3:t.next=7;break;case 5:return t.next=7,e.getCurrentWeek();case 7:return t.next=9,e.listAllTeams();case 9:return t.next=11,e.listGamesForWeek();case 11:return t.next=13,e.listAvailableGamesForCurrentWeek();case 13:case"end":return t.stop()}}),t)})))()},computed:j(j(j({},Object(S.c)(["currentSeason","currentGames","currentWeek"])),Object(S.c)("admin",["teams","availableGames"])),{},{filteredAvailableGames:function(){var e=this;return this.availableGames.filter((function(t){return 0===e.currentGames.filter((function(e){return t.homeTeamId===e.homeTeamId})).length}))},tiebreakersUsed:function(){return this.currentGames.map((function(e){return e.tieBreak}))}}),methods:j(j(j(j({},Object(S.b)("snackbar",["snack"])),Object(S.b)(["getCurrentWeek","listGamesForWeek","getWeek"])),Object(S.b)("admin",["listAllTeams","listAvailableGamesForCurrentWeek"])),{},{edit:function(e){this.gameToSave=e,this.editing=!0},save:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$saveGame(j(j({},e.gameToSave),{},{weekId:e.currentWeek.id,apiId:"",order:"number"==typeof e.gameToSave.order?e.gameToSave.order:e.currentGames.length,status:e.gameToSave.isFinal?"final":e.gameToSave.status}));case 3:if(200!==t.sent.status){t.next=12;break}return e.editing=!1,e.gameToSave={},t.next=9,e.listGamesForWeek();case 9:e.snack({message:"Game saved successfully."}),t.next=13;break;case 12:e.error();case 13:t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0),e.error();case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()},saveScores:function(e){this.gameToSave=e,this.save()},cancel:function(){this.gameToSave={},this.editing=!1},doDelete:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$deleteGame(e.gameToSave.id);case 2:if(200!==(r=t.sent).status){t.next=8;break}return t.next=6,e.listGamesForWeek();case 6:e.editing=!1,e.snack({message:"Game saved successfully."});case 8:console.log(r);case 9:case"end":return t.stop()}}),t)})))()},error:function(){this.snack({message:"There was an error saving the game. Please reload and try again.",color:"error"})},getItemText:function(e){return"".concat(e.name," ").concat(e.mascot)},getAvailableGameText:function(e){return"".concat(e.awayTeamName," @ ").concat(e.homeTeamName)},clarifyFormat:function(e){return G()(e,"YYYY-MM-DD HH:mm:ss").format("ddd MMM D @ h:mm A")},reordered:function(e){var t=this;return Object(y.a)(regeneratorRuntime.mark((function r(){var n,i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.currentGames.filter((function(t){return parseInt(t.order)===e.oldIndex}))[0],!(e.oldIndex>e.newIndex)){r.next=12;break}i=e.newIndex;case 3:if(!(i<e.oldIndex)){r.next=10;break}return t.gameToSave=j(j({},t.currentGames[i]),{},{order:i+1}),r.next=7,t.save();case 7:i++,r.next=3;break;case 10:r.next=20;break;case 12:o=e.oldIndex+1;case 13:if(!(o<=e.newIndex)){r.next=20;break}return t.gameToSave=j(j({},t.currentGames[o]),{},{order:o-1}),r.next=17,t.save();case 17:o++,r.next=13;break;case 20:return t.gameToSave=j(j({},n),{},{order:e.newIndex}),r.next=23,t.save();case 23:return t.gameToSave={},r.next=26,t.listGamesForWeek();case 26:t.snack({message:"Game order updated successfully."});case 27:case"end":return r.stop()}}),r)})))()},populateGame:function(e){e.homeTeamId&&(this.gameToSave=e)},notifyPicksReady:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!confirm("Are you sure you want to send out picks ready email?")){t.next=12;break}return t.prev=1,t.next=4,e.$notifyPicksReady(e.currentWeek.id);case 4:return e.snack("Picks ready email sent"),t.next=7,e.getCurrentWeek();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.snack({message:"There was an error sending out picks ready email",color:"error"});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}})},F=r(45),component=Object(F.a)(I,(function(){var e=this,t=e._self._c;return t(d.a,[t(k.a,[t(m.a,{staticClass:"md-6"},[t("h1",[e._v("Games")])]),e._v(" "),t(m.a,{staticClass:"md-6 text-right"},[t(o.a,{attrs:{color:"primary",small:""},on:{click:e.edit}},[e._v("Add")])],1)],1),e._v(" "),e.currentWeek.picksReady?e._e():t(k.a,{staticClass:"mb-2"},[t(m.a,{staticClass:"md-6"},[t(o.a,{attrs:{color:"default"},on:{click:e.notifyPicksReady}},[e._v("Send 'picks ready' notification")])],1)],1),e._v(" "),e.editing?e.editing?t(c.a,[t(d.a,[t(v.a,{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(n.a,{staticClass:"mb-10",attrs:{items:e.filteredAvailableGames,"item-text":e.getAvailableGameText,color:"success",placeholder:"Available Games",flat:"","hide-details":"","hide-no-data":"","hide-selected":"","return-object":""},on:{change:e.populateGame}}),e._v(" "),t(n.a,{attrs:{items:e.teams,label:"Home Team","item-text":e.getItemText,"item-value":"id",flat:"","hide-no-data":"","hide-detail":"",required:""},model:{value:e.gameToSave.homeTeamId,callback:function(t){e.$set(e.gameToSave,"homeTeamId",t)},expression:"gameToSave.homeTeamId"}}),e._v(" "),t(x.a,{attrs:{label:"Home team ranking"},model:{value:e.gameToSave.homeTeamRanking,callback:function(t){e.$set(e.gameToSave,"homeTeamRanking",t)},expression:"gameToSave.homeTeamRanking"}}),e._v(" "),t(x.a,{attrs:{label:"Home team record"},model:{value:e.gameToSave.homeTeamRecord,callback:function(t){e.$set(e.gameToSave,"homeTeamRecord",t)},expression:"gameToSave.homeTeamRecord"}}),e._v(" "),t(n.a,{attrs:{items:e.teams,label:"Away Team","item-text":e.getItemText,"item-value":"id",flat:"","hide-no-data":"","hide-detail":"",required:""},model:{value:e.gameToSave.awayTeamId,callback:function(t){e.$set(e.gameToSave,"awayTeamId",t)},expression:"gameToSave.awayTeamId"}}),e._v(" "),t(x.a,{attrs:{label:"Away team ranking"},model:{value:e.gameToSave.awayTeamRanking,callback:function(t){e.$set(e.gameToSave,"awayTeamRanking",t)},expression:"gameToSave.awayTeamRanking"}}),e._v(" "),t(x.a,{attrs:{label:"Away team record"},model:{value:e.gameToSave.awayTeamRecord,callback:function(t){e.$set(e.gameToSave,"awayTeamRecord",t)},expression:"gameToSave.awayTeamRecord"}}),e._v(" "),t(x.a,{attrs:{label:"spread",rules:e.mustBeNumber,required:""},model:{value:e.gameToSave.spread,callback:function(t){e.$set(e.gameToSave,"spread",t)},expression:"gameToSave.spread"}}),e._v(" "),t(T.a,{attrs:{label:"spread favor",items:e.spreadFavor,required:""},model:{value:e.gameToSave.spreadFavor,callback:function(t){e.$set(e.gameToSave,"spreadFavor",t)},expression:"gameToSave.spreadFavor"}}),e._v(" "),t(x.a,{attrs:{label:"Game Date/Time (PT)",placeholder:"yyyy-mm-dd HH:mm:ss",rules:e.isDate,"persistent-hint":"",required:""},model:{value:e.gameToSave.start,callback:function(t){e.$set(e.gameToSave,"start",t)},expression:"gameToSave.start"}}),e._v(" "),t(x.a,{attrs:{label:"Tiebreaker",rules:e.mustBeNumber,required:""},model:{value:e.gameToSave.tieBreak,callback:function(t){e.$set(e.gameToSave,"tieBreak",t)},expression:"gameToSave.tieBreak"}}),e._v(" "),t("small",[e._v("Tiebreaks already used: "+e._s(e.tiebreakersUsed))]),e._v(" "),t(l.a,{attrs:{label:"Cancelled"},model:{value:e.gameToSave.cancelled,callback:function(t){e.$set(e.gameToSave,"cancelled",t)},expression:"gameToSave.cancelled"}}),e._v(" "),t(k.a,{attrs:{justify:"end"}},[t(m.a,{attrs:{cols:"6"}},[e.gameToSave.id?t(o.a,{attrs:{color:"error",small:""},on:{click:e.doDelete}},[e._v("Delete")]):e._e()],1),e._v(" "),t(m.a,{staticClass:"text-right",attrs:{cols:"6"}},[t(o.a,{staticClass:"mr-2",attrs:{small:""},on:{click:e.cancel}},[e._v("Cancel")]),t(o.a,{attrs:{color:"primary",disabled:!e.valid,small:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)],1):e._e():t(c.a,[t(h.a,[e.$fetchState.pending?t("tr",[t("td",[e._v("Loading games ...")])]):e.currentGames.length?[t("draggable",{ref:"rows",attrs:{tag:"tbody",handle:".page__grab-icon"},on:{end:e.reordered}},e._l(e.currentGames,(function(r){return t("tr",{key:r.id},[r.started?[t("td",[t(f.a,{staticClass:"page__grab-icon",attrs:{small:""}},[e._v(" mdi-arrow-all ")])],1),e._v(" "),t("td",[e._v(e._s(r.tieBreak))]),e._v(" "),t("td",[e._v(e._s(r.homeTeamName+" "+r.homeTeamMascot))]),e._v(" "),t("td",[t(x.a,{attrs:{label:"Home Score"},model:{value:r.homeScore,callback:function(t){e.$set(r,"homeScore",t)},expression:"game.homeScore"}})],1),e._v(" "),t("td",[e._v(e._s(r.awayTeamName+" "+r.awayTeamMascot))]),e._v(" "),t("td",[t(x.a,{attrs:{label:"Away Score"},model:{value:r.awayScore,callback:function(t){e.$set(r,"awayScore",t)},expression:"game.awayScore"}})],1),e._v(" "),t("td",[t(x.a,{attrs:{label:"Status"},model:{value:r.status,callback:function(t){e.$set(r,"status",t)},expression:"game.status"}})],1),e._v(" "),t("td",[t(l.a,{attrs:{label:"Is Final"},model:{value:r.isFinal,callback:function(t){e.$set(r,"isFinal",t)},expression:"game.isFinal"}})],1),e._v(" "),t("td",[t(o.a,{attrs:{color:"info",small:""},on:{click:function(t){return e.saveScores(r)}}},[e._v("Save")]),t(o.a,{staticClass:"ml-2",attrs:{color:"primary",icon:"",small:""},on:{click:function(t){return e.edit(r)}}},[t(f.a,[e._v("mdi-pencil")])],1)],1)]:[t("td",[t(f.a,{staticClass:"page__grab-icon",attrs:{small:""}},[e._v(" mdi-arrow-all ")])],1),e._v(" "),t("td",[e._v(e._s(r.tieBreak))]),e._v(" "),t("td",[e._v(e._s(r.homeTeamName+" "+r.homeTeamMascot))]),e._v(" "),t("td",[e._v(e._s(r.spread))]),e._v(" "),t("td",[e._v(e._s(r.spreadFavor))]),e._v(" "),t("td",[e._v(e._s(r.awayTeamName+" "+r.awayTeamMascot))]),e._v(" "),t("td",[e._v("\n                "+e._s(e._f("formatDate")(r.start,"YYYY-MM-DD HH:mm:ss"))+"\n              ")]),e._v(" "),t("td",[t(o.a,{staticClass:"ml-2",attrs:{color:"primary",icon:"",small:""},on:{click:function(t){return e.edit(r)}}},[t(f.a,[e._v("mdi-pencil")])],1)],1)]],2)})),0)]:t("tr",[t("td",[e._v("No games entered")])])],2)],1)],1)}),[],!1,null,"8b74441a",null);t.default=component.exports}}]);