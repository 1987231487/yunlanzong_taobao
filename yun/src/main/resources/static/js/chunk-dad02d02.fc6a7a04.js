(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dad02d02"],{4067:function(r,t,e){},c217:function(r,t,e){"use strict";var s=e("4067"),o=e.n(s);o.a},cf2a:function(r,t,e){"use strict";e.r(t);var s=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"order"},[r._m(0),null!==r.orders?e("div",{staticClass:"order-content"},r._l(r.orders,(function(t,s){return e("div",{key:s,staticClass:"content"},[e("ul",[e("li",{staticClass:"order-info"},[e("div",{staticClass:"order-id"},[r._v("订单编号: "+r._s(r.orders[s].orderItemId))]),e("div",{staticClass:"order-time"},[r._v("订单时间: "+r._s(r._f("dateFormat")(r.orders[s].createTime)))])]),r._m(1,!0),e("li",{staticClass:"product-list"},[e("div",{staticClass:"pro-img"},[e("router-link",{attrs:{to:{path:"/goods/details",query:{productID:r.orders[s].goodsId}}}},[e("img",{attrs:{src:r.orders[s].goodsCoverImg}})])],1),e("div",{staticClass:"pro-name"},[e("router-link",{attrs:{to:{path:"/goods/details",query:{productID:r.orders[s].goodsId}}}},[r._v(r._s(r.orders[s].goodsName))])],1),e("div",{staticClass:"pro-price"},[r._v(r._s(r.orders[s].sellingPrice)+"元")]),e("div",{staticClass:"pro-num"},[r._v(r._s(r.orders[s].goodsCount))]),e("div",{staticClass:"pro-total pro-total-in"},[r._v(r._s(r.orders[s].sellingPrice*r.orders[s].goodsCount)+"元")]),e("div",{staticClass:"pro-operate"},[e("el-button",{directives:[{name:"show",rawName:"v-show",value:0==r.orders[s].orderStatus,expression:"orders[index].orderStatus == 0"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return r.delOrder(r.orders[s].orderItemId)}}},[r._v("删除")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:0==r.orders[s].orderStatus,expression:"orders[index].orderStatus == 0"}],attrs:{type:"success",size:"mini"},on:{click:function(t){return r.undateOrder(r.orders[s].orderItemId,1)}}},[r._v("支付")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:1==r.orders[s].orderStatus,expression:"orders[index].orderStatus == 1"}],attrs:{type:"warning",size:"mini"},on:{click:function(t){return r.undateOrder(r.orders[s].orderItemId,0)}}},[r._v("退款")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:2==r.orders[s].orderStatus,expression:"orders[index].orderStatus == 2"}],attrs:{type:"danger",size:"mini"},on:{click:function(t){return r.undateOrder(r.orders[s].orderItemId,3)}}},[r._v("确认签收")]),e("p",{directives:[{name:"show",rawName:"v-show",value:3==r.orders[s].orderStatus,expression:"orders[index].orderStatus == 3"}]},[r._v("订单完成")])],1)])]),e("div",{staticClass:"order-bar"},[e("div",{staticClass:"order-bar-right"},[e("span",[e("span",{staticClass:"total-price-title"},[r._v("状态：")]),e("span",{staticClass:"total-price"},[r._v(r._s(r.orderst[r.orders[s].orderStatus])+" ")])]),e("br")])])])})),0):r._e(),e("div",{staticStyle:{"margin-top":"-40px"}})])},o=[function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"order-header"},[e("div",{staticClass:"order-header-content"},[e("p",[e("i",{staticClass:"el-icon-s-order",staticStyle:{"font-size":"30px",color:"#ff6700"}}),r._v(" 我的订单 ")])])])},function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("li",{staticClass:"header"},[e("div",{staticClass:"pro-img"}),e("div",{staticClass:"pro-name"},[r._v("商品名称")]),e("div",{staticClass:"pro-price"},[r._v("单价")]),e("div",{staticClass:"pro-num"},[r._v("数量")]),e("div",{staticClass:"pro-total"},[r._v("小计")]),e("div",{staticClass:"pro-operate"},[r._v("操作")])])}],a=(e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("d3b7"),e("159b"),e("ade3")),i=e("2f62");function d(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,s)}return e}function n(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){Object(a["a"])(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var c={computed:n({},Object(i["c"])(["getOrder"])),data:function(){return{orderst:["待支付","已支付","已发货","已签收"],forPay:!0,orders:[],total:[]}},activated:function(){},created:function(){this.indexorder()},watch:{},methods:{undateOrder:function(r,t){var e=this;this.$axios({url:this.$target+"/updateOrder",method:"post",params:{orderItemId:r,status:t}}).then((function(r){r.data.flag?e.notifySucceed(r.data.msg):e.notifyError("更新订单失败",r.data.msg)})).catch((function(r){return Promise.reject(r)})),this.$router.go(0)},delOrder:function(r){var t=this,e=this.$store.getters.getUserId;this.$axios({url:this.$target+"/delOrder",method:"psot",params:{orderItemId:r,userId:e}}).then((function(r){r.data.flag?(console.log(t.orders),t.notifySucceed(r.data.msg)):t.notifyError("删除失败",r.data.msg)})).catch((function(r){return Promise.reject(r)})),this.$router.go(0)},indexorder:function(){var r=this,t=this.$store.getters.getUserId;this.$axios({url:this.$target+"/orders",method:"get",params:{userId:t}}).then((function(t){t.data.flag?(r.orders=t.data.data,console.log(r.orders)):r.notifyError("获取购物车的所有商品",t.data.msg)})).catch((function(r){return Promise.reject(r)}))}}},u=c,l=(e("c217"),e("2877")),v=Object(l["a"])(u,s,o,!1,null,"0910cca8",null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-dad02d02.fc6a7a04.js.map