(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{125:function(t,e,r){"use strict";r.r(e);r(13);var o,n=r(1),m=(r(20),r(14),r(26)),l=r.n(m),c=r(17),f={scrollToTop:!1,head:function(){return{title:this.$t("settings")}},data:function(){return{form:new l.a({name:"",email:""})}},computed:Object(c.b)({user:"auth/user"}),created:function(){var t=this;this.form.keys().forEach(function(e){t.form[e]=t.user[e]})},methods:{update:(o=Object(n.a)(regeneratorRuntime.mark(function t(){var e,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.patch("/settings/profile");case 2:e=t.sent,data=e.data,this.$store.dispatch("auth/updateUser",{user:data});case 5:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})}},d=r(3),component=Object(d.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card",{attrs:{title:t.$t("your_info")}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)},keydown:function(e){return t.form.onKeydown(e)}}},[r("alert-success",{attrs:{form:t.form,message:t.$t("info_updated")}}),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("name")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-9 ml-md-auto"},[r("v-button",{attrs:{loading:t.form.busy,type:"success"}},[t._v("\n          "+t._s(t.$t("update"))+"\n        ")])],1)])],1)])},[],!1,null,null,null);e.default=component.exports}}]);