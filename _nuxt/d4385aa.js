(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{560:function(t,e,r){"use strict";var n=r(2),o=(r(56),r(39),r(176),r(6),r(137),r(8),r(7),r(10),r(11),r(9)),c=r(81),l=r(111);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},669:function(t,e,r){"use strict";r.r(e);var n=r(174),o=r(526),c=r(529),l=r(560),d=r(525),f=r(546),h=(r(8),r(7),r(6),r(10),r(11),r(4)),m=r(2),v=(r(28),r(36));function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"Register",auth:!1,layout:"singlePanel",data:function(){var t=this;return{valid:!1,saving:!1,emailIsUnique:!1,registration:{firstName:"",lastName:"",email:"",password:""},passwordConfirmation:"",isRequired:[function(t){return!!t||"Required"}],passwordRules:[function(t){return!!t||"Password is required"}],confirmRules:[function(t){return!!t||"Confirm password is required"},function(e){return e===t.registration.password||"Password and confirm password do not match."}],isEmailUnique:[function(e){return t.emailIsUnique||"The email address you entered is already in use"}]}},computed:O({},Object(v.c)(["currentSeason"])),methods:O(O({},Object(v.b)("snackbar",["snack"])),{},{register:function(){var t=this;this.saving=!0,this.$axios.post("/userRegistration",O(O({},this.registration),{},{seasonId:this.currentSeason.id})).then((function(e){e.data.id?(t.snack({message:"You have successfully created an account, please login to continue."}),t.$router.push("/login")):t.registrationError(e.data)})).catch((function(e){t.registrationError(e.data)}))},registrationError:function(data){this.saving=!1,this.snack({message:"Sorry, something has gone wrong with your registration. Please try again.",color:"error"})},checkEmail:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$checkEmail(t.registration.email);case 2:r=e.sent,console.log(r),t.emailIsUnique=r.data;case 5:case"end":return e.stop()}}),e)})))()}})},j=r(45),component=Object(j.a)(y,(function(){var t=this,e=t._self._c;return e(c.a,[e(l.a,{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("h1",[t._v("Register")]),t._v(" "),e(d.a,[e(o.a,[e(f.a,{attrs:{placeholder:"First Name",rules:t.isRequired},model:{value:t.registration.firstName,callback:function(e){t.$set(t.registration,"firstName",e)},expression:"registration.firstName"}})],1)],1),t._v(" "),e(d.a,[e(o.a,[e(f.a,{attrs:{placeholder:"Last Name",rules:t.isRequired},model:{value:t.registration.lastName,callback:function(e){t.$set(t.registration,"lastName",e)},expression:"registration.lastName"}})],1)],1),t._v(" "),e(d.a,[e(o.a,[e(f.a,{attrs:{placeholder:"Email",rules:t.isRequired},on:{input:function(e){return t.checkEmail()}},model:{value:t.registration.email,callback:function(e){t.$set(t.registration,"email",e)},expression:"registration.email"}})],1)],1),t._v(" "),e(d.a,[e(o.a,[e(f.a,{attrs:{placeholder:"Password",type:"password",rules:t.passwordRules},model:{value:t.registration.password,callback:function(e){t.$set(t.registration,"password",e)},expression:"registration.password"}})],1)],1),t._v(" "),e(d.a,[e(o.a,[e(f.a,{attrs:{placeholder:"Password Confirm",rules:t.confirmRules,type:"password"},model:{value:t.passwordConfirmation,callback:function(e){t.passwordConfirmation=e},expression:"passwordConfirmation"}})],1)],1),t._v(" "),e(d.a,[e(o.a,{staticClass:"text-right"},[e(n.a,{staticClass:"mr-2",attrs:{nuxt:"",to:{name:"index"},small:""}},[t._v("Cancel")]),e(n.a,{attrs:{color:"primary",disabled:t.saving||!t.valid,small:""},on:{click:t.register}},[t._v("Register")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);