(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{511:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return v}));var n=r(513),o=r(1),l=Object(o.j)("v-card__actions"),c=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),v=Object(o.j)("v-card__title");n.a},550:function(t,e,r){"use strict";r(8),r(7),r(6),r(10),r(11);var n=r(2),o=(r(551),r(22));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},551:function(t,e,r){var content=r(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("7132a15d",content,!0,{sourceMap:!1})},552:function(t,e,r){var n=r(13)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},662:function(t,e,r){"use strict";r.r(e);var n=r(513),o=r(511),l=r(550),c=r(167),d=r(105),v=r(34),h={name:"Email",layout:"admin",data:function(){return{items:[{title:"week",description:"Weeks - add, edit and delete weeks for this season",to:"week-list"},{title:"games",description:"Games - manage this weeks games",to:"game-list"},{title:"users",description:"Users - manage this seasons users",to:"user-list"},{title:"email",description:"Email Users - Email all or select users registered for the current season",to:"email"},{title:"teams",description:"Teams - manage the available list of teams",to:"team-list"}]}},methods:{go:function(t){this.$router.push("/admin/"+t)}}},m=r(45),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{tile:""}},[e(o.b,[t._v("Administrator")]),t._v(" "),e(o.a,[e(c.a,{attrs:{outlined:"",shaped:""}},t._l(t.items,(function(r){return e(d.a,{key:r.title,staticClass:"mb-2",attrs:{link:""}},[e(v.b,{on:{click:function(e){return t.go(r.to)}}},[t._v(t._s(r.description))]),t._v(" "),e(l.a,{attrs:{inset:""}})],1)})),1)],1)],1)}),[],!1,null,"561dc54a",null);e.default=component.exports}}]);