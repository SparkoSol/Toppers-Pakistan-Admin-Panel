(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{511:function(t,e,r){"use strict";r.d(e,"g",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"f",(function(){return c})),r.d(e,"e",(function(){return d})),r.d(e,"a",(function(){return l})),r.d(e,"c",(function(){return h})),r.d(e,"b",(function(){return v}));var n=function(t){return!!t||"Please provide some value"},o=function(t){return+t>0||"You have entered an invalid price"},c=function(t){return+t>0||"You have entered an invalid quantity"},d=function(t){return+t>=0||"You have entered an invalid number"};function l(t){return!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.exec(t)||"Enter valid email"}function h(t){return void 0!==t&&t.length>=12&&t.length<=15||"Enter valid phone"}function v(t){return t.length>=8||"Enter at least 8 characters"}},522:function(t,e,r){"use strict";r(13),r(9),r(8),r(5),r(10);var n=r(4),o=(r(18),r(532),r(162)),c=r(161),d=r(64),l=r(6);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,d.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},531:function(t,e,r){"use strict";r(13),r(9),r(10);var n=r(4),o=(r(99),r(8),r(5),r(128),r(34),r(37),r(6)),c=r(53),d=r(69);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},532:function(t,e,r){var content=r(533);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("e23b7040",content,!0,{sourceMap:!1})},533:function(t,e,r){(e=r(11)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},534:function(t,e,r){"use strict";r(18);var n=r(2);e.a=n.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var r=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){r.isActive={open:!0,close:!1}[t]},n)}}})},545:function(t,e,r){"use strict";r(26),r(8),r(5),r(10);var n=r(16),o=(r(34),r(37),r(534)),c=r(41),d=r(6),l=r(1),h=r(7),v=Object(d.a)(o.a,c.a);e.a=v.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(n.a)(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(l.s)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(h.b)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var r=e[t];this.getActivator().addEventListener(r,this.listeners[r])}}},genActivator:function(){var t=Object(l.r)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var r=t.getActivator(e);r&&r.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var r=this.internalActivator?this.$el:document;e="string"==typeof this.activator?r.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var n=this.activatorNode[0].componentInstance;e=n&&n.$options.mixins&&n.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?n.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(l.r)(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var r=e[t];this.activatorElement.removeEventListener(r,this.listeners[r])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},547:function(t,e,r){"use strict";var n=r(4),o=r(16),c=r(163),d=r(1),l=r(6),h=r(7);e.a=Object(l.a)(c.a).extend({name:"detachable",props:{attach:{default:!1,validator:function(t){var e=Object(o.a)(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){t.activatorNode&&(Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode]).forEach((function(e){if(e.elm&&t.$el.parentNode){var r=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,r)}}))}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode)(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}catch(t){console.log(t)}},methods:{getScopeIdAttrs:function(){var t=Object(d.o)(this.$vnode,"context.$options._scopeId");return t&&Object(n.a)({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||((t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(h.c)("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},549:function(t,e,r){"use strict";r(34),r(37);var n=r(100),o=r(2),c=r(1);e.a=o.a.extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0;var content=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[content])+2:Object(c.t)(content);return null==t?t:parseInt(t)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],base=this.$el,e=[this.stackMinZIndex,Object(c.t)(base)],r=[].concat(Object(n.a)(document.getElementsByClassName("v-menu__content--active")),Object(n.a)(document.getElementsByClassName("v-dialog__content--active"))),o=0;o<r.length;o++)t.includes(r[o])||e.push(Object(c.t)(r[o]));return Math.max.apply(Math,e)}}})},550:function(t,e,r){"use strict";var n=r(2);e.a=n.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},555:function(t,e,r){"use strict";r(99);var n=r(15);e.a=n.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},635:function(t,e,r){var content=r(741);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("99a7cb6c",content,!0,{sourceMap:!1})},740:function(t,e,r){"use strict";var n=r(635);r.n(n).a},741:function(t,e,r){(e=r(11)(!1)).push([t.i,".my-range-picker[data-v-58a23f77]{display:grid;grid-template-columns:1fr 1fr;width:70%;grid-column-gap:15px}.my-range-picker-date[data-v-58a23f77]{display:flex;grid-column-gap:15px}.cards-payment[data-v-58a23f77]{display:grid;grid-template-columns:1fr 1fr 1fr;width:70%;grid-column-gap:15px}@media (max-width:799px){.cards-payment[data-v-58a23f77],.my-range-picker[data-v-58a23f77]{width:100%}}",""]),t.exports=e},790:function(t,e,r){"use strict";r.r(e);r(52);var n=r(14),o=r(0),c=r.n(o),d={name:"PurchaseReport",data:function(){return{error:null,showError:!1,showDetail:!1,detail:null,detailItems:null,dates:{from:null,to:null},paid:0,unpaid:0,type:"All",search:"",data:[],items:["All","This Month","Last Month","This Quarter","This Year","Custom"],filters:{status:[]},dataColumns:[{text:"Date",value:"invoice_date"},{text:"Invoice No.",value:"invoice_id"},{text:"Customer Name",value:"customer.name"},{text:"Branch",value:"branch.name"},{text:"Origin",value:"origin"},{text:"Payment Type",value:"payment_type"},{text:"Amount",value:"amount"},{text:"Discount",value:"discount"},{text:"Balance Due",value:"balance_due"},{text:"Status",value:"status"},{text:"Delivery Status",value:"delivery_status"}],detailColumns:[{text:"Name",value:"product.name"},{text:"Quantity",value:"qty"},{text:"Unit",value:"product.unit.name"},{text:"Total",value:"total"}]}},computed:{total:function(){return this.unpaid+this.paid}},mounted:function(){this.getData(),this.getSummary()},methods:{required:r(511).g,getDetail:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.showDetail=!0,e.detail=t,r.next=4,e.$axios.$get("/purchaseOrderItems/purchaseOrder/"+t.id);case 4:e.detailItems=r.sent;case 5:case"end":return r.stop()}}),r)})))()},getSummary:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=4,"All"===t.type?r=4:"This Month"===t.type?r=0:"Last Month"===t.type?r=1:"This Quarter"===t.type?r=2:"This Year"===t.type&&(r=3),"Sub Admin"!==t.$auth.user.type){e.next=8;break}return e.next=5,t.$axios.$get("/purchaseOrder/summary/"+r+"/"+t.$auth.user.branch_id);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,t.$axios.$get("/purchaseOrder/summary/"+r+"/-1");case 10:n=e.sent;case 11:t.paid=n.paid,t.unpaid=n.unpaid;case 13:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=4,"All"===t.type?r=4:"This Month"===t.type?r=0:"Last Month"===t.type?r=1:"This Quarter"===t.type?r=2:"This Year"===t.type&&(r=3),"Sub Admin"!==t.$auth.user.type){e.next=8;break}return e.next=5,t.$axios.$get("purchaseOrder/filter/"+r+"/"+t.$auth.user.branch_id);case 5:t.data=e.sent,e.next=11;break;case 8:return e.next=10,t.$axios.$get("purchaseOrder/filter/"+r+"/-1");case 10:t.data=e.sent;case 11:return e.next=13,t.getSummary();case 13:case"end":return e.stop()}}),e)})))()},getCustom:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=10;break}if("Sub Admin"!==t.$auth.user.type){e.next=7;break}return e.next=4,t.$axios.$post("purchaseOrder/filter/"+t.$auth.user.branch_id,t.dates);case 4:t.data=e.sent,e.next=10;break;case 7:return e.next=9,t.$axios.$post("purchaseOrder/filter/-1",t.dates);case 9:t.data=e.sent;case 10:if("Sub Admin"!==t.$auth.user.type){e.next=16;break}return e.next=13,t.$axios.$post("/purchaseOrder/summary/"+t.$auth.user.branch_id,t.dates);case 13:r=e.sent,e.next=19;break;case 16:return e.next=18,t.$axios.$post("/purchaseOrder/summary/-1",t.dates);case 18:r=e.sent;case 19:t.paid=r.paid,t.unpaid=r.unpaid;case 21:case"end":return e.stop()}}),e)})))()},date:function(t){return c()(t).format("MM/DD/YY")},getStatus:function(t,e){return e?e===t?"Unpaid":"0"===e?"Paid":e<0?"Extra":"Partial":"Paid"},printReport:function(){var t=4;"All"===this.type?t=4:"This Month"===this.type?t=0:"Last Month"===this.type?t=1:"This Quarter"===this.type?t=2:"This Year"===this.type?t=3:"Custom"===this.type&&(t=5),console.log(t),"Sub Admin"===this.$auth.user.type?5===t&&this.dates.from&&this.dates.to?window.open(this.$axios.defaults.baseURL+"purchaseOrder/printReport/"+t+"/"+this.$auth.user.branch.id+"?from="+this.dates.from+"$to="+this.dates.to):window.open(this.$axios.defaults.baseURL+"purchaseOrder/printReport/"+t+"/"+this.$auth.user.branch.id):5===t&&this.dates.from&&this.dates.to?window.open(this.$axios.defaults.baseURL+"purchaseOrder/printReport/"+t+"/-1?from="+this.dates.from+"&to="+this.dates.to):window.open(this.$axios.defaults.baseURL+"purchaseOrder/printReport/"+t+"/-1")}}},l=(r(740),r(51)),h=r(68),v=r.n(h),f=r(499),m=r(522),x=r(775),y=r(531),_=r(129),O=r(542),w=r(505),$=r(496),k=r(46),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{padding:"20px"}},[r("div",{staticClass:"elevation-1",staticStyle:{padding:"20px","margin-bottom":"10px"}},[r("div",{staticClass:"my-range-picker"},[r("v-select",{attrs:{items:t.items,"aria-hidden":"true",dense:"",outlined:""},on:{change:t.getData},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),r("v-form",{ref:"form",staticClass:"my-range-picker-date"},["Custom"===t.type?r("v-text-field",{attrs:{rules:[t.required],dense:"",type:"date","aria-hidden":"true",outlined:"",label:"From"},on:{change:t.getCustom},model:{value:t.dates.from,callback:function(e){t.$set(t.dates,"from",e)},expression:"dates.from"}}):t._e(),t._v(" "),"Custom"===t.type?r("v-text-field",{attrs:{rules:[t.required],"aria-hidden":"true",dense:"",type:"date",outlined:"",label:"To"},on:{change:t.getCustom},model:{value:t.dates.to,callback:function(e){t.$set(t.dates,"to",e)},expression:"dates.to"}},[t._v("\n          To\n        ")]):t._e()],1)],1),t._v(" "),r("div",{staticClass:"cards-payment"},[r("div",{staticStyle:{display:"flex"}},[r("v-card",{staticStyle:{padding:"0 10px",width:"90%"}},[r("p",{staticStyle:{margin:"0"}},[t._v("Paid")]),t._v(" "),r("h2",[t._v("Rs "+t._s(t.paid))])]),t._v(" "),r("v-icon",{attrs:{"aria-hidden":"true",right:""}},[t._v("mdi-plus")])],1),t._v(" "),r("div",{staticStyle:{display:"flex"}},[r("v-card",{staticStyle:{padding:"0 10px",width:"90%"}},[r("p",{staticStyle:{margin:"0"}},[t._v("Unpaid")]),t._v(" "),r("h2",[t._v("Rs "+t._s(t.unpaid))])]),t._v(" "),r("v-icon",{attrs:{"aria-hidden":"true",right:""}},[t._v("mdi-equal")])],1),t._v(" "),r("v-card",{staticStyle:{padding:"0 10px",width:"90%"}},[r("p",{staticStyle:{margin:"0"}},[t._v("Total")]),t._v(" "),r("h2",[t._v("Rs "+t._s(t.total))])])],1)]),t._v(" "),r("div",[r("v-data-table",{staticClass:"elevation-1",attrs:{height:"40vh",headers:t.dataColumns,items:t.data,search:t.search,"disable-pagination":"","hide-default-footer":"",dense:""},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{dense:"",flat:""}},[r("p",{staticStyle:{margin:"0"}},[t._v("Transactions")])]),t._v(" "),r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("div",{staticStyle:{width:"250px"}},[r("v-text-field",{attrs:{placeholder:"Search","aria-hidden":"true","prepend-inner-icon":"mdi-magnify",outlined:"","hide-details":"",dense:"",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-spacer"),t._v(" "),t.data.length>0?r("v-btn",{staticClass:"mb-2",staticStyle:{"margin-bottom":"0 !important"},attrs:{color:"primary",dark:"",elevation:"0","aria-hidden":"true"},on:{click:t.printReport}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-printer")]),t._v("Print")],1):t._e()],1)]},proxy:!0},{key:"item.amount",fn:function(e){var n=e.item;return[r("p",{staticStyle:{margin:"0"}},[t._v("Rs. "+t._s(n.amount))])]}},{key:"item.balance_due",fn:function(e){var n=e.item;return[r("p",{staticStyle:{margin:"0"}},[t._v("\n          Rs. "+t._s(n.balance_due?n.balance_due:"0.0")+"\n        ")])]}},{key:"item.delivery_status",fn:function(e){var n=e.item;return[n.delivery>0?r("p",{staticStyle:{margin:"0"}},[t._v("\n          "+t._s(n.delivery_status)+"\n        ")]):t._e()]}},{key:"item.status",fn:function(e){var n=e.item;return[r("p",{staticStyle:{margin:"0"}},[t._v("\n          "+t._s(t.getStatus(n.amount,n.balance_due))+"\n        ")])]}},{key:"item.invoice_date",fn:function(e){var r=e.item;return[t._t("invoice_date",null,{item:r}),t._v("\n        "+t._s(t.date(r.invoice_date))+"\n      ")]}}],null,!0)})],1)])}),[],!1,null,"58a23f77",null),A=component.exports;v()(component,{VBtn:f.a,VCard:m.a,VDataTable:x.a,VForm:y.a,VIcon:_.a,VSelect:O.a,VSpacer:w.a,VTextField:$.a,VToolbar:k.a});var j={name:"Purchase",middleware:"isAdmin",components:{PurchaseReport:A}},S=Object(l.a)(j,(function(){var t=this.$createElement;return(this._self._c||t)("PurchaseReport")}),[],!1,null,"990dc8aa",null);e.default=S.exports}}]);