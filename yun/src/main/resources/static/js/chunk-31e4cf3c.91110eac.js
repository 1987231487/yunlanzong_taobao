(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31e4cf3c"],{"0b6c":function(t,e,s){},"214a":function(t,e,s){"use strict";var c=s("0b6c"),r=s.n(c);r.a},"8c6e":function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shoppingCart"},[t._m(0),null!==t.probuctcart.length&&t.probuctcart.length>0?s("div",{staticClass:"content"},[s("ul",[s("li",{staticClass:"header"},[s("div",{staticClass:"pro-check"},[s("el-checkbox",{on:{change:function(e){return t.checkAll(e)}}},[t._v("全选")])],1),s("div",{staticClass:"pro-img"}),s("div",{staticClass:"pro-name"},[t._v("商品名称")]),s("div",{staticClass:"pro-price"},[t._v("单价")]),s("div",{staticClass:"pro-num"},[t._v("数量")]),s("div",{staticClass:"pro-total"},[t._v("小计")]),s("div",{staticClass:"pro-action"},[t._v("操作")])]),t._l(t.probuctcart,(function(e,c){return s("li",{key:e.goodsId,staticClass:"product-list"},[s("div",{staticClass:"pro-check"},[s("el-checkbox",{on:{change:function(e){return t.checkChange(e,c)}},model:{value:t.checklist[c],callback:function(e){t.$set(t.checklist,c,e)},expression:"checklist[index]"}})],1),s("div",{staticClass:"pro-img"},[s("router-link",{attrs:{to:{path:"/goods/details",query:{productID:e.category_id}}}})],1),s("div",{staticClass:"pro-name"},[s("router-link",{attrs:{to:{path:"/goods/details",query:{productID:e.category_id}}}},[t._v(t._s(e.goodsName))])],1),s("div",{staticClass:"pro-price"},[t._v(t._s(e.sellingPrice)+"元")]),s("div",{staticClass:"pro-num"},[s("el-input-number",{attrs:{size:"small",value:e.goodsCount,min:1,max:e.stockNum},on:{change:function(s){return t.handleChange(s,c,e.goodsCount)}}})],1),s("div",{staticClass:"pro-total pro-total-in"},[t._v(t._s(e.sellingPrice*e.goodsCount)+"元")]),s("div",{staticClass:"pro-action"},[s("el-popover",{attrs:{placement:"right"}},[s("p",[t._v("确定删除吗？")]),s("div",{staticStyle:{"text-align":"right",margin:"10px 0 0"}},[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(s){return t.deleteItem(s,e.cartid,c)}}},[t._v("确定")])],1),s("i",{staticClass:"el-icon-error",staticStyle:{"font-size":"18px"},attrs:{slot:"reference"},slot:"reference"})])],1)])}))],2),s("div",{staticStyle:{height:"20px","background-color":"#f5f5f5"}}),s("div",{staticClass:"cart-bar"},[s("div",{staticClass:"cart-bar-left"},[s("span",[s("router-link",{attrs:{to:"/goods"}},[t._v("继续购物")])],1),s("span",{staticClass:"sep"},[t._v("|")]),s("span",{staticClass:"cart-total"})]),s("div",{staticClass:"cart-bar-right"},[s("div",{staticClass:"btn-primary",on:{click:t.addOrder}},[t._v(" 提交订单")])])])]):s("div",{staticClass:"cart-empty"},[t._m(1)])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-header"},[s("div",{staticClass:"cart-header-content"},[s("p",[s("i",{staticClass:"el-icon-shopping-cart-full",staticStyle:{color:"#ff6700","font-weight":"600"}}),t._v(" 我的购物车 ")]),s("span",[t._v("温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"empty"},[s("h2",[t._v("您的购物车还是空的！")]),s("p",[t._v("快去购物吧！")])])}],i=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("159b"),s("ade3")),a=s("2f62");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,c)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l={data:function(){return{probuctcart:[],checklist:[],num:1,TotalPrice:0,checknum:0,thisorderid:0}},created:function(){this.shoppingIndex()},methods:n({},Object(a["b"])(["updateShoppingCart","deleteShoppingCart","unshiftCollent"]),{},Object(a["c"])(["getUserId"]),{shoppingIndex:function(){var t=this,e=this.$store.getters.getUserId;console.log(e),this.$axios({url:this.$target+"/shoppingCart",method:"get",params:{userId:e}}).then((function(e){if(e.data.flag){for(var s in t.probuctcart=e.data.data,t.probuctcart)console.log(s),t.checklist.push(!1),console.log("this.checklist");console.log("this.checklist",t.checklist)}else t.notifyError("获取购物车的所有商品",e.data.msg)})).catch((function(t){return Promise.reject(t)}))},handleChange:function(t,e,s){console.log(s,"我日",this.probuctcart);var c=this.$store.getters.getUserId;console.log(c),console.log(this.probuctcart),this.probuctcart[e]["goodsCount"]=t,this.checkChange(!0,e)},checkChange:function(t,e){this.checklist[e]=t,console.log("更新vuex中购物车商品是否勾选的状态",this.checklist)},addOrder:function(){console.log("asadda");var t=this.$store.getters.getUserId;for(var e in this.probuctcart)this.checklist[e]&&this.$axios({url:this.$target+"/addOrders",method:"post",params:{userId:t,cartItemId:this.probuctcart[e]["cartItemId"]}}).then((function(t){console.log(t.data.msg)})).catch((function(t){return Promise.reject(t)})),this.$router.push({path:"/order"}),this.thisorderid="",this.notifySucceed("添加成功")},deleteItem:function(t,e,s){var c=this;console.log("向后端发起删除购物车的数据库信息请求"),this.$axios({url:this.$target+"/shoppingCart/delGood",method:"post",params:{cartItemId:this.probuctcart[s]["cartItemId"]}}).then((function(t){c.notifySucceed(t.data.msg)})).catch((function(t){return Promise.reject(t)})),this.$router.go(0)},checkAll:function(t){for(var e in this.checklist)this.checklist[e]=t}}),computed:n({},Object(a["c"])([]))},d=l,h=(s("214a"),s("2877")),u=Object(h["a"])(d,c,r,!1,null,"0370d351",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-31e4cf3c.91110eac.js.map