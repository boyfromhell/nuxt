(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{126:function(e,t,n){"use strict";n.r(t);n(13);var r,l=n(1),c=n(12),o=n.n(c),v={data:function(){return{users:null,meta:null,links:{first:null,last:null,next:null,prev:null},error:null}},created:(r=Object(l.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/users");case 2:t=e.sent,this.users=t.data.data,this.meta=t.data.meta,this.links=t.data.links;case 6:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})},_=n(3),component=Object(_.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"users"},[e.error?n("div",{staticClass:"error"},[n("p",[e._v(e._s(e.error))])]):e._e(),e._v(" "),e.users?n("ul",e._l(e.users,function(t){t.id;var r=t.name,l=t.email;return n("li",[n("strong",[e._v("Name:")]),e._v(" "+e._s(r)+",\n                "),n("strong",[e._v("Email:")]),e._v(" "+e._s(l)+"\n            ")])}),0):e._e(),e._v(" "),n("div",{staticClass:"pagination"},[e._v("\n            "+e._s(e.meta)+"\n")])])},[],!1,null,null,null);t.default=component.exports}}]);