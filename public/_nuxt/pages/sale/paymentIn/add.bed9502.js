(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{507:function(t,e,r){var content=r(514);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("7fd56a46",content,!0,{sourceMap:!1})},508:function(t,e,r){var content=r(516);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("4e15c4d2",content,!0,{sourceMap:!1})},509:function(t,e,r){var content=r(518);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("f65596ce",content,!0,{sourceMap:!1})},510:function(t,e,r){var content=r(520);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("13aa003d",content,!0,{sourceMap:!1})},511:function(t,e,r){"use strict";r.d(e,"g",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"f",(function(){return c})),r.d(e,"e",(function(){return l})),r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return m})),r.d(e,"b",(function(){return f}));var n=function(t){return!!t||"Please provide some value"},o=function(t){return+t>0||"You have entered an invalid price"},c=function(t){return+t>0||"You have entered an invalid quantity"},l=function(t){return+t>=0||"You have entered an invalid number"};function d(t){return!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.exec(t)||"Enter valid email"}function m(t){return void 0!==t&&t.length>=12&&t.length<=15||"Enter valid phone"}function f(t){return t.length>=8||"Enter at least 8 characters"}},513:function(t,e,r){"use strict";var n=r(507);r.n(n).a},514:function(t,e,r){(e=r(11)(!1)).push([t.i,".card[data-v-3f1472ea]{padding:20px!important}",""]),t.exports=e},515:function(t,e,r){"use strict";var n=r(508);r.n(n).a},516:function(t,e,r){(e=r(11)(!1)).push([t.i,".loading-dialog[data-v-5f9945f6]{padding:20px!important}.loading-dialog__message[data-v-5f9945f6]{font-size:18px!important;padding-left:15px!important;display:inline-block!important;font-family:google-sans,sans-serif!important}",""]),t.exports=e},517:function(t,e,r){"use strict";var n=r(509);r.n(n).a},518:function(t,e,r){(e=r(11)(!1)).push([t.i,".form{width:550px}.form__body{grid-template-columns:calc(50% - 10px) calc(50% - 10px)}@media(max-width:525px){.form__body{display:flex!important;flex-direction:column}}.span-2{grid-column:1/3!important}",""]),t.exports=e},519:function(t,e,r){"use strict";var n=r(510);r.n(n).a},520:function(t,e,r){(e=r(11)(!1)).push([t.i,".form[data-v-464b7779]{overflow:hidden!important;background:#fff!important;position:relative!important;border-radius:8px!important;padding:40px 40px 36px!important;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}@media(max-width:525px){.form[data-v-464b7779]{box-shadow:none!important}}.form__loading[data-v-464b7779]{top:0!important;left:0!important;z-index:5!important;width:100%!important;height:100%!important;position:absolute!important;background:hsla(0,0%,100%,.8)!important}.form__header[data-v-464b7779]{color:#202124!important;text-align:center!important}.form__title[data-v-464b7779]{display:block!important;font-size:24px!important;line-height:32px!important;font-weight:400!important;padding-bottom:8px!important;font-family:google-sans,sans-serif!important}.form__message[data-v-464b7779]{display:block!important;font-size:16px!important;line-height:24px!important;letter-spacing:.1px!important;padding:0 70px 24px!important;font-family:Roboto,sans-serif!important}.form__body[data-v-464b7779]{display:grid;grid-column-gap:20px!important}.form__actions[data-v-464b7779]{display:flex!important;justify-content:flex-end!important}",""]),t.exports=e},521:function(t,e,r){"use strict";r(13),r(9),r(8),r(5),r(10),r(52);var n=r(4),o=r(14),c=r(159),l=Object(c.b)({name:"ErrorDialog",props:{error:{type:[Error,Object],default:null}},setup:function(t,e){var r=Object(c.e)(null);return Object(c.g)((function(){return t.error}),(function(){r.value=t.error})),Object(c.g)(r,(function(){null===r.value&&e.emit("close",!1)})),{localError:r}}}),d=(r(513),r(51)),m=r(68),f=r.n(m),v=r(522),h=r(770),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"400"},model:{value:t.localError,callback:function(e){t.localError=e},expression:"localError"}},[r("v-card",{staticClass:"card",attrs:{width:"400"}},[t._v("\n    "+t._s(t.error)+"\n  ")])],1)}),[],!1,null,"3f1472ea",null),y=component.exports;f()(component,{VCard:v.a,VDialog:h.a});var x=Object(c.b)({name:"LoadingDialog",model:{prop:"loading",event:"loading"},props:{loading:{type:Boolean,default:!1},message:{type:String,default:"Loading ..."}}}),_=(r(515),r(148)),w=Object(d.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-dialog",{attrs:{width:"400",persistent:""}},[e("v-card",{staticClass:"loading-dialog",attrs:{width:"400"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}),this._v(" "),e("span",{staticClass:"loading-dialog__message"},[this._v(this._s(this.message))])],1)],1)}),[],!1,null,"5f9945f6",null),O=w.exports;function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}f()(w,{VCard:v.a,VDialog:h.a,VProgressCircular:_.a});var I=Object(c.b)({name:"SimpleForm",components:{ErrorDialog:y,LoadingDialog:O},props:{title:{type:String,default:"Form Title"},message:{type:String,required:!1},method:{type:String,default:"post"},data:{type:[Object,Function],required:!0},endpoint:{type:String,required:!0},return:{type:Boolean,default:!1},clear:{type:Boolean,default:!0},showError:{type:Boolean,default:!0}},setup:function(t,e){var r=Object(c.e)(null),n=Object(c.d)({error:null,valid:!1,loading:!1});function l(){return(l=Object(o.a)(regeneratorRuntime.mark((function o(){var data,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n.loading=!0,o.prev=1,!(t.data instanceof Function)){o.next=8;break}return o.next=5,t.data();case 5:data=o.sent,o.next=9;break;case 8:data=t.data;case 9:if(null!==data){o.next=12;break}return t.showError&&(n.error="Provide valid data 'null' was provided",this.valid=!0),o.abrupt("return");case 12:c=null,o.t0=t.method.toLowerCase(),o.next="post"===o.t0?16:"patch"===o.t0?27:38;break;case 16:if(this.valid=!1,!(data instanceof FormData)){o.next=23;break}return o.next=20,e.root.$axios.post(t.endpoint,data,{headers:{"content-type":"multipart/form-data;"}});case 20:c=o.sent,o.next=26;break;case 23:return o.next=25,e.root.$axios.post(t.endpoint,data);case 25:c=o.sent;case 26:return o.abrupt("break",41);case 27:if(this.valid=!1,!(data instanceof FormData)){o.next=34;break}return o.next=31,e.root.$axios.patch(t.endpoint,data,{headers:{"content-type":"multipart/form-data;"}});case 31:c=o.sent,o.next=37;break;case 34:return o.next=36,e.root.$axios.patch(t.endpoint,data);case 36:c=o.sent;case 37:return o.abrupt("break",41);case 38:return n.error="Unknown METHOD was specified.",this.valid=!1,o.abrupt("return");case 41:c&&e.emit("response",c),t.return?e.root.$router.back():(e.emit("reset"),this.clear&&r.value.reset()),o.next=49;break;case 45:o.prev=45,o.t1=o.catch(1),this.valid=!0,n.error=o.t1;case 49:return o.prev=49,this.valid=!0,n.loading=!1,o.finish(49);case 53:case"end":return o.stop()}}),o,this,[[1,45,49,53]])})))).apply(this,arguments)}return j(j({myForm:r},Object(c.f)(n)),{},{trigger:function(){return l.apply(this,arguments)}})}}),S=(r(517),r(519),r(499)),C=r(531),$=Object(d.a)(I,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{height:"fit-content",margin:"0 0"}},[r("v-form",{ref:"myForm",staticClass:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._t("header",[r("header",{staticClass:"form__header"},[t._t("logo"),t._v(" "),r("span",{staticClass:"form__title"},[t._v(t._s(t.title))]),t._v(" "),r("span",{staticClass:"form__message"},[t._v(t._s(t.message))])],2)]),t._v(" "),r("main",{staticClass:"form__body"},[t._t("default")],2),t._v(" "),t._t("actions",[r("footer",{staticClass:"form__actions"},[r("v-btn",{attrs:{color:"primary",elevation:"0",disabled:!t.valid},on:{click:t.trigger}},[t._v("\n          Submit\n        ")])],1)]),t._v(" "),r("error-dialog",{attrs:{error:t.error}}),t._v(" "),r("v-dialog",{attrs:{width:"400",persistent:""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-card",{staticClass:"loading-dialog",staticStyle:{padding:"20px"},attrs:{width:"400"}},[r("v-progress-circular",{staticStyle:{"margin-right":"20px"},attrs:{indeterminate:"",color:"primary"}}),t._v(" "),r("span",{staticClass:"loading-dialog__message"},[t._v("Loading...")])],1)],1)],2)],1)}),[],!1,null,"464b7779",null);e.a=$.exports;f()($,{VBtn:S.a,VCard:v.a,VDialog:h.a,VForm:C.a,VProgressCircular:_.a})},569:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(20),o=function t(){Object(n.a)(this,t),this.customer_id=void 0,this.branch_id=void 0,this.receipt_id=void 0,this.receipt_date=void 0,this.received=void 0,this.description=void 0}},573:function(t,e,r){var content=r(647);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("5c99042a",content,!0,{sourceMap:!1})},646:function(t,e,r){"use strict";var n=r(573);r.n(n).a},647:function(t,e,r){(e=r(11)(!1)).push([t.i,".form{width:850px!important}.sale-order-main{height:100%;display:flex;justify-content:center;align-items:center}.sale-order-customer{display:flex}.sale-order-customer-form{width:50%;padding:20px}.sale-order-customer-invoice{width:50%;padding:20px;margin:0 20px 0 0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}input[type=number]{-moz-appearance:textfield}",""]),t.exports=e},661:function(t,e,r){"use strict";r(52);var n=r(14),o=r(511),c=r(521),l=r(569),d={name:"PaymentInForm",components:{SimpleForm:c.a},props:{title:{type:String,default:"Add Payment In"},paymentIn:{type:[Object,l.a],default:function(){return new l.a}},isUpdate:{type:Boolean,default:!1}},data:function(){return{branches:[],customers:[]}},mounted:function(){this.getCustomers(),this.getBranches(),"Sub Admin"===this.$auth.user.type&&(this.paymentIn.branch_id=this.$auth.user.branch_id),this.isUpdate||this.getReceiptId()},methods:{required:o.g,getCustomers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("customer");case 2:t.customers=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getBranches:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("branch");case 2:t.branches=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getReceiptId:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/paymentIn/getReceipt");case 2:t.paymentIn.receipt_id=e.sent;case 3:case"end":return e.stop()}}),e)})))()},formData:function(){return this.paymentIn}}},m=(r(646),r(51)),f=r(68),v=r.n(f),h=r(548),y=r(505),x=r(496),_=r(556),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sale-order-main"},[r("SimpleForm",{attrs:{title:t.title,data:t.formData,return:"",endpoint:t.isUpdate?"/paymentIn/update/"+t.paymentIn.id:"/paymentIn/store"}},[r("div",{staticClass:"span-2",staticStyle:{display:"flex"}},[r("div",{staticClass:"sale-order-customer-form"},[r("div",{staticClass:"sale-order-customer-name"},[r("v-autocomplete",{attrs:{outlined:"",dense:"",flat:"",rules:[t.required],label:"Customer *",items:t.customers,"item-text":"name","persistent-hint":"","item-value":function(t){return t.id},readonly:t.isUpdate},model:{value:t.paymentIn.customer_id,callback:function(e){t.$set(t.paymentIn,"customer_id",e)},expression:"paymentIn.customer_id"}}),t._v(" "),r("v-autocomplete",{attrs:{outlined:"",dense:"",flat:"",rules:[t.required],label:"Branch *",items:t.branches,"item-text":"name","persistent-hint":"","item-value":function(t){return t.id},readonly:t.isUpdate||"Sub Admin"===t.$auth.user.type},model:{value:t.paymentIn.branch_id,callback:function(e){t.$set(t.paymentIn,"branch_id",e)},expression:"paymentIn.branch_id"}})],1),t._v(" "),r("div",{staticClass:"sale-order-customer-address"},[r("v-textarea",{attrs:{label:"Description","hide-details":"",rows:"3",dense:"",outlined:""},model:{value:t.paymentIn.description,callback:function(e){t.$set(t.paymentIn,"description",e)},expression:"paymentIn.description"}})],1)]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"sale-order-customer-invoice"},[r("div",{staticStyle:{display:"flex"}},[r("label",{staticStyle:{width:"50%"}},[t._v("Receipt Number")]),t._v(" "),r("v-text-field",{staticStyle:{margin:"0"},attrs:{readonly:"",dense:""},model:{value:t.paymentIn.receipt_id,callback:function(e){t.$set(t.paymentIn,"receipt_id",e)},expression:"paymentIn.receipt_id"}})],1),t._v(" "),r("div",{staticStyle:{display:"flex"}},[r("label",{staticStyle:{width:"50%"}},[t._v("Receipt Date")]),t._v(" "),r("v-text-field",{staticStyle:{margin:"0"},attrs:{readonly:t.isUpdate,rules:[t.required],dense:"",type:"date"},model:{value:t.paymentIn.receipt_date,callback:function(e){t.$set(t.paymentIn,"receipt_date",e)},expression:"paymentIn.receipt_date"}})],1),t._v(" "),r("div",{staticStyle:{display:"flex"}},[r("label",{staticStyle:{width:"50%"}},[t._v("Received")]),t._v(" "),r("v-text-field",{staticStyle:{margin:"0"},attrs:{rules:[t.required],dense:"",outlined:"",type:"number"},model:{value:t.paymentIn.received,callback:function(e){t.$set(t.paymentIn,"received",e)},expression:"paymentIn.received"}})],1)])],1)])],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VAutocomplete:h.a,VSpacer:y.a,VTextField:x.a,VTextarea:_.a})},818:function(t,e,r){"use strict";r.r(e);var n={name:"AddPaymentIn",components:{Form:r(661).a}},o=r(51),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("Form")}),[],!1,null,"41e79e00",null);e.default=component.exports}}]);