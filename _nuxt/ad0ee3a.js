(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{512:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return v}));var n=r(514),o=r(1),l=Object(o.j)("v-card__actions"),c=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),v=Object(o.j)("v-card__title");n.a},562:function(t,e,r){"use strict";r(7),r(8),r(6),r(10),r(11);var n=r(2),o=(r(563),r(22));function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},563:function(t,e,r){var content=r(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("7132a15d",content,!0,{sourceMap:!1})},564:function(t,e,r){var n=r(14)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},665:function(t,e,r){"use strict";r.r(e);var n=r(514),o=r(512),l=r(562),c=r(168),d=r(105),v=r(33),h={name:"Email",layout:"admin",data:function(){return{items:[{title:"week",description:"Weeks - add, edit and delete weeks for this season",to:"week-list"},{title:"games",description:"Games - manage this weeks games",to:"game-list"},{title:"users",description:"Users - manage this seasons users",to:"user-list"},{title:"email",description:"Email Users - Email all or select users registered for the current season",to:"email"},{title:"teams",description:"Teams - manage the available list of teams",to:"team-list"}]}},methods:{go:function(t){this.$router.push("/admin/"+t)}}},m=r(45),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{tile:""}},[e(o.b,[t._v("Administrator")]),t._v(" "),e(o.a,[e(c.a,{attrs:{outlined:"",shaped:""}},t._l(t.items,(function(r){return e(d.a,{key:r.title,staticClass:"mb-2",attrs:{link:""}},[e(v.b,{on:{click:function(e){return t.go(r.to)}}},[t._v(t._s(r.description))]),t._v(" "),e(l.a,{attrs:{inset:""}})],1)})),1)],1)],1)}),[],!1,null,"561dc54a",null);e.default=component.exports}}]);