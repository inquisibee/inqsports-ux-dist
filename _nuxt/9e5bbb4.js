(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{511:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var r=n(513),c=n(1),o=Object(c.j)("v-card__actions"),l=Object(c.j)("v-card__subtitle"),h=Object(c.j)("v-card__text"),d=Object(c.j)("v-card__title");r.a},553:function(e,t,n){var content=n(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("50788f08",content,!0,{sourceMap:!1})},554:function(e,t,n){var r=n(13)(!1);r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),e.exports=r},569:function(e,t,n){var content=n(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("65cdf9c2",content,!0,{sourceMap:!1})},586:function(e,t,n){"use strict";n(8),n(7),n(10),n(11);var r=n(2),c=(n(49),n(6),n(137),n(138),n(56),n(39),n(553),n(545)),o=n(546),l=n(51),h=n(1);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=f(f({},c.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=c.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:c.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},c.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(h.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=c.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),f(f({},m),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=c.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===h.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===h.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==h.y.backspace&&e!==h.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,c.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(l.a)(input.data,{attrs:{"aria-activedescendant":Object(h.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(h.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=c.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?c.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[h.y.home,h.y.end].includes(t)||c.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){c.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){c.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){c.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],c=this.getText(r);null==(t=e.clipboardData)||t.setData("text/plain",c),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",c),e.preventDefault()}}}})},607:function(e,t,n){"use strict";n(569)},608:function(e,t,n){var r=n(13)(!1);r.push([e.i,".pick-info[data-v-5f3ad700]{border:1px solid #39c0ed;margin-top:2px}.pick-success[data-v-5f3ad700]{border:1px solid #00b74a;margin-top:2px}.pick-warning[data-v-5f3ad700]{border:1px solid #ffa900;margin-top:2px}.pick-error[data-v-5f3ad700]{border:1px solid #f93154;margin-top:2px}",""]),e.exports=r},663:function(e,t,n){"use strict";n.r(t);var r=n(586),c=n(174),o=n(513),l=n(511),h=n(526),d=n(529),f=n(139),m=n(169),v=n(525),I=(n(27),n(8),n(7),n(10),n(11),n(2)),x=n(4),y=(n(6),n(28),n(36));function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(I.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={name:"Compare",data:function(){return{otherUserId:this.$route.query.otherUserId}},fetch:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.listAllUsers();case 2:return t.next=4,e.findUserById(e.otherUserId);case 4:return t.next=6,e.getCurrentWeek();case 6:return t.next=8,e.comparePicks({otherUserId:e.otherUserId,weekId:e.currentWeek.id});case 8:console.log(e.comparisons);case 9:case"end":return t.stop()}}),t)})))()},computed:O(O(O(O({},Object(y.c)(["loggedInUser","currentWeek","user"])),Object(y.c)("picks",["comparisons"])),Object(y.c)("admin",["users"])),{},{yourWins:function(){return this.comparisons.filter((function(e){return e.currentUserPickWin&&e.isFinal})).length},theirWins:function(){return this.comparisons.filter((function(e){return e.otherUserPickWin&&e.isFinal})).length}}),methods:O(O(O(O({},Object(y.b)(["getCurrentWeek","findUserById"])),Object(y.b)("picks",["comparePicks"])),Object(y.b)("admin",["listAllUsers"])),{},{border:function(e,t,n){return t&&n?"pick-success":e&&!n?"pick-info":e||n?"pick-error":"pick-warning"},back:function(){this.$router.push("/standings")},getItemText:function(e){return"".concat(e.firstName," ").concat(e.lastName)},compare:function(e){var t=this;return Object(x.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.comparePicks({otherUserId:e,weekId:t.currentWeek.id});case 2:case"end":return n.stop()}}),n)})))()}})},k=(n(607),n(45)),component=Object(k.a)(_,(function(){var e=this,t=e._self._c;return t(d.a,[t(v.a,[t(h.a,{staticClass:"mb-0 pb-0",attrs:{cols:"11"}},[t("h1",[e._v(e._s(e.currentWeek.name))])]),e._v(" "),t(h.a,{staticClass:"d-flex align-center",attrs:{cols:"1"}},[t(c.a,{attrs:{color:"default",small:"",icon:""},on:{click:function(t){return e.back()}}},[t(f.a,[e._v("mdi-page-previous-outline")])],1)],1)],1),e._v(" "),t(v.a,[t(h.a,{staticClass:"mb-0 pb-0",attrs:{cols:"6",offset:"6"}},[t(r.a,{attrs:{items:e.users,label:"Compare","item-text":e.getItemText,"item-value":"id",flat:"","hide-no-data":"","hide-detail":"",loading:"$fetchState.pending"},on:{change:e.compare},model:{value:e.otherUserId,callback:function(t){e.otherUserId=t},expression:"otherUserId"}})],1)],1),e._v(" "),t(v.a,{staticClass:"mt-0 pt-0"},[t(h.a,{attrs:{cols:"6"}},[t(c.a,{attrs:{color:"default",block:"",outlined:"",small:""}},[e._v("Your wins: "+e._s(e.yourWins))])],1),e._v(" "),t(h.a,{attrs:{cols:"6"}},[t(c.a,{attrs:{color:"default",block:"",outlined:"",small:""}},[e._v("Their wins: "+e._s(e.theirWins))])],1)],1),e._v(" "),e.$fetchState.pending?t(v.a,[t(h.a,{attrs:{cols:"1"}},[t(m.a,{attrs:{size:"20",indeterminate:""}})],1),e._v(" "),t(h.a,{attrs:{cols:"10"}},[e._v("Loading games...")])],1):e._l(e.comparisons,(function(n){return t(v.a,{key:n.gameId,staticClass:"mt-2"},[t(h.a,{attrs:{cols:"6"}},[t(o.a,[t(l.a,{class:e.border(n.currentUserPickWinning,n.currentUserPickWin,n.isFinal)},[e._v("\n          "+e._s(n.currentUserPick)+"\n        ")])],1)],1),e._v(" "),t(h.a,{attrs:{cols:"6"}},[t(o.a,{class:e.border(n.otherUserPickWinning,n.otherUserPickWin,n.isFinal)},[t(l.a,[e._v(e._s(n.otherUserPick))])],1)],1)],1)}))],2)}),[],!1,null,"5f3ad700",null);t.default=component.exports}}]);