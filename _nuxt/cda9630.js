(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{574:function(t,r,e){"use strict";var n=e(1),o=(e(49),e(24),e(184),e(7),e(105),e(9),e(8),e(11),e(12),e(4)),c=e(78),l=e(88);function d(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}r.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var r=Object.values(t).includes(!0);this.$emit("input",!r)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,r=function(input){return input.$watch("hasError",(function(r){t.$set(t.errorBag,input._uid,r)}),{immediate:!0})},e={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?e.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(e.valid=r(input)))})):e.valid=r(input),e},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var r=this.watchers.find((function(i){return i._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var r=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return r.$emit("submit",t)}}},this.$slots.default)}})},639:function(t,r,e){"use strict";e.r(r);var n=e(186),o=e(561),c=e(566),l=e(574),d=e(560),f=e(87),h=(e(9),e(8),e(7),e(11),e(12),e(1)),m=e(42);function v(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(r){Object(h.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var O={name:"Register",auth:!1,layout:"singlePanel",data:function(){var t=this;return{valid:!1,saving:!1,registration:{firstName:"",lastName:"",email:"",password:""},passwordConfirmation:"",isRequired:[function(t){return!!t||"Required"}],passwordRules:[function(t){return!!t||"Password is required"}],confirmRules:[function(t){return!!t||"Confirm password is required"},function(r){return r===t.registration.password||"Password and confirm password do not match."}]}},computed:w({},Object(m.c)(["currentSeason"])),methods:w(w({},Object(m.b)("snackbar",["snack"])),{},{register:function(){var t=this;this.saving=!0,this.$axios.post("/userRegistration",w(w({},this.registration),{},{seasonId:this.currentSeason.id})).then((function(r){r.data.id?(t.snack({message:"You have successfully created an account, please login to continue."}),t.$router.push("/login")):t.registrationError(r.data)})).catch((function(r){t.registrationError(r.data)}))},registrationError:function(data){this.saving=!1,this.snack({message:"Sorry, something has gone wrong with your registration. Please try again.",color:"error"})}})},y=e(51),component=Object(y.a)(O,(function(){var t=this,r=t._self._c;return r(c.a,[r(l.a,{model:{value:t.valid,callback:function(r){t.valid=r},expression:"valid"}},[r("h1",[t._v("Register")]),t._v(" "),r(d.a,[r(o.a,[r(f.a,{attrs:{placeholder:"First Name",rules:t.isRequired},model:{value:t.registration.firstName,callback:function(r){t.$set(t.registration,"firstName",r)},expression:"registration.firstName"}})],1)],1),t._v(" "),r(d.a,[r(o.a,[r(f.a,{attrs:{placeholder:"Last Name",rules:t.isRequired},model:{value:t.registration.lastName,callback:function(r){t.$set(t.registration,"lastName",r)},expression:"registration.lastName"}})],1)],1),t._v(" "),r(d.a,[r(o.a,[r(f.a,{attrs:{placeholder:"Email",rules:t.isRequired},model:{value:t.registration.email,callback:function(r){t.$set(t.registration,"email",r)},expression:"registration.email"}})],1)],1),t._v(" "),r(d.a,[r(o.a,[r(f.a,{attrs:{placeholder:"Password",type:"password",rules:t.passwordRules},model:{value:t.registration.password,callback:function(r){t.$set(t.registration,"password",r)},expression:"registration.password"}})],1)],1),t._v(" "),r(d.a,[r(o.a,[r(f.a,{attrs:{placeholder:"Password Confirm",rules:t.confirmRules,type:"password"},model:{value:t.passwordConfirmation,callback:function(r){t.passwordConfirmation=r},expression:"passwordConfirmation"}})],1)],1),t._v(" "),r(d.a,[r(o.a,{staticClass:"text-right"},[r(n.a,{staticClass:"mr-2",attrs:{nuxt:"",to:{name:"index"},small:""}},[t._v("Cancel")]),r(n.a,{attrs:{color:"primary",disabled:t.saving||!t.valid,small:""},on:{click:t.register}},[t._v("Register")])],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);