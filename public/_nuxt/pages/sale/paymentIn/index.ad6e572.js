(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{506:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(522),o=n(1),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),f=Object(o.h)("v-card__title");r.a},511:function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return h}));var r=function(t){return!!t||"Please provide some value"},o=function(t){return+t>0||"You have entered an invalid price"},c=function(t){return+t>0||"You have entered an invalid quantity"},l=function(t){return+t>=0||"You have entered an invalid number"};function d(t){return!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.exec(t)||"Enter valid email"}function f(t){return void 0!==t&&t.length>=12&&t.length<=15||"Enter valid phone"}function h(t){return t.length>=8||"Enter at least 8 characters"}},531:function(t,e,n){"use strict";n(13),n(9),n(10);var r=n(4),o=(n(99),n(8),n(5),n(128),n(34),n(37),n(6)),c=n(53),l=n(69);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},792:function(t,e,n){"use strict";n.r(e);n(52);var r=n(14),o={name:"PaymentIn",data:function(){return{to:null,from:null,data:[],error:null,showError:!1,dataColumns:[{text:"Date",value:"receipt_date"},{text:"Ref No.",value:"receipt_id"},{text:"Name",value:"customer.name"},{text:"Branch",value:"branch.name"},{text:"Received",value:"received"},{text:"Description",value:"description"},{text:"",value:"actions"}]}},computed:{total:function(){return this.unpaid+this.paid}},mounted:function(){this.getPaymentIn()},methods:{required:n(511).g,filterData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=13;break}if((data={}).to=t.to,data.from=t.from,"Sub Admin"!==t.$auth.user.type){e.next=10;break}return e.next=7,t.$axios.$post("/paymentIn/filter/"+t.$auth.user.branch_id,data);case 7:t.data=e.sent,e.next=13;break;case 10:return e.next=12,t.$axios.$post("/paymentIn/filter/-1",data);case 12:t.data=e.sent;case 13:case"end":return e.stop()}}),e)})))()},getPaymentIn:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Sub Admin"!==t.$auth.user.type){e.next=6;break}return e.next=3,t.$axios.$get("/paymentIn/branch/"+t.$auth.user.branch_id);case 3:t.data=e.sent,e.next=9;break;case 6:return e.next=8,t.$axios.$get("/paymentIn/branch/-1");case 8:t.data=e.sent;case 9:case"end":return e.stop()}}),e)})))()},handleCreateEvent:function(){this.$router.push("/sale/paymentIn/add")},handleUpdateEvent:function(t){this.$router.push("/sale/paymentIn/edit/"+t.id)},removeItem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(window.console.log(t),!confirm("Are you sure?")){n.next=12;break}return n.next=4,e.$axios.$delete("/paymentIn/delete/"+t.id);case 4:if(!(r=n.sent).error){n.next=10;break}e.showError=!0,e.error=r.error,n.next=12;break;case 10:return n.next=12,e.getPaymentIn();case 12:case"end":return n.stop()}}),n)})))()}}},c=n(51),l=n(68),d=n.n(l),f=n(499),h=n(522),v=n(506),m=n(775),y=n(770),_=n(531),x=n(129),w=n(505),O=n(496),$=n(46),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"20px"}},[n("div",[n("v-data-table",{staticClass:"elevation-1",attrs:{height:"63vh",items:t.data,headers:t.dataColumns,"disable-pagination":"","hide-default-footer":"",dense:""},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-form",{ref:"form"},[n("div",{staticStyle:{display:"grid","grid-template-columns":"1fr 1fr",width:"60%","grid-column-gap":"15px",padding:"10px 20px"}},[n("v-text-field",{attrs:{dense:"",rules:[t.required],type:"date",outlined:"",label:"From"},on:{change:t.filterData},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),t._v(" "),n("v-text-field",{attrs:{rules:[t.required],dense:"",type:"date",outlined:"",label:"To"},on:{change:t.filterData},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)]),t._v(" "),n("v-toolbar",{attrs:{dense:"",flat:""}},[n("p",{staticStyle:{margin:"0"}},[t._v("Transactions")])]),t._v(" "),n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("div",{staticStyle:{width:"250px"}},[n("v-text-field",{attrs:{placeholder:"Search","prepend-inner-icon":"mdi-magnify","aria-hidden":"true",outlined:"","hide-details":"",dense:"",clearable:""}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"mb-2",staticStyle:{"margin-bottom":"0 !important"},attrs:{color:"primary",dark:"",elevation:"0"},on:{click:t.handleCreateEvent}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("New Payment In")],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{color:"green",small:""},on:{click:function(e){return t.handleUpdateEvent(r)}}},[t._v("\n          mdi-pencil\n        ")]),t._v(" "),n("v-icon",{attrs:{color:"red",small:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.removeItem(r)}}},[t._v("\n          mdi-delete\n        ")])]}},{key:"item.action_type",fn:function(e){var r=e.item;return[n("p",{staticStyle:{margin:"0"}},[t._v("\n          "+t._s(t.getType(r.action_type))+"\n        ")])]}},{key:"item.received",fn:function(e){var r=e.item;return[n("p",{staticStyle:{margin:"0"}},[t._v("Rs. "+t._s(r.received))])]}}])})],1),t._v(" "),n("v-dialog",{model:{value:t.showError,callback:function(e){t.showError=e},expression:"showError"}},[n("v-card",[n("v-card-title",[t._v(" Error: "+t._s(t.error)+" ")])],1)],1)],1)}),[],!1,null,"58cf4286",null),k=component.exports;d()(component,{VBtn:f.a,VCard:h.a,VCardTitle:v.a,VDataTable:m.a,VDialog:y.a,VForm:_.a,VIcon:x.a,VSpacer:w.a,VTextField:O.a,VToolbar:$.a});var j={name:"Index",components:{PaymentIn:k}},E=Object(c.a)(j,(function(){var t=this.$createElement;return(this._self._c||t)("PaymentIn")}),[],!1,null,"0167b9bc",null);e.default=E.exports}}]);