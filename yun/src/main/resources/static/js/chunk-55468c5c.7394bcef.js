(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55468c5c"],{"0fa5":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods",attrs:{id:"goods",name:"goods"}},[t.IsShop?e("div",[e("div",{staticClass:"about",attrs:{id:"about",name:"about"}},[e("div",{staticClass:"about-header"},[e("div",{staticClass:"about-title"},[e("i",{staticClass:"el-icon-goods",staticStyle:{color:"#ff6700"}}),t._v(" "+t._s(t.shopName)+" ")])])]),e("div",{staticClass:"nav"},[e("div",{staticClass:"product-nav"},[e("el-tabs",{attrs:{value:"first"},on:{"tab-click":t.handleClick}},[e("el-tab-pane",{attrs:{label:"店铺商品",name:"first"}}),e("el-tab-pane",{attrs:{label:"店铺订单",name:"second"}}),e("el-tab-pane",{attrs:{label:"店铺详情",name:"third"}})],1)],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"main"},[e("div",{staticClass:"list"},[t.product.length>0?e("MyList",{attrs:{list:t.product}}):e("div",{staticClass:"none-product"},[t._v("抱歉没有找到相关的商品，请看看其他的商品")])],1),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.total},on:{"current-change":t.currentChange}})],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.ordershow,expression:"ordershow"}],staticClass:"main"},[e("div",{staticClass:"order"},[null!==t.orders?e("div",{staticClass:"order-content"},t._l(t.orders,(function(s,a){return e("div",{key:a,staticClass:"content"},[e("ul",[e("li",{staticClass:"order-info"},[e("div",{staticClass:"order-id"},[t._v("订单编号: "+t._s(t.orders[a].order_id))]),e("div",{staticClass:"order-time"},[t._v("订单时间: "+t._s(t._f("dateFormat")(t.orders[a].createTime)))])]),t._m(0,!0),e("li",{staticClass:"product-list"},[e("div",{staticClass:"pro-img"},[e("router-link",{attrs:{to:{path:"/goods/details",query:{productID:t.orders[a].goodsId}}}},[e("img",{attrs:{src:t.orders.goodsCoverImg}})])],1),e("div",{staticClass:"pro-name"},[e("router-link",{attrs:{to:{path:"/goods/details",query:{productID:t.orders[a].goodsId}}}},[t._v(t._s(t.orders[a].goodsName))])],1),e("div",{staticClass:"pro-price"},[t._v(t._s(t.orders[a].sellingPrice)+"元")]),e("div",{staticClass:"pro-num"},[t._v(t._s(t.orders[a].goodsCount))]),e("div",{staticClass:"pro-total pro-total-in"},[t._v(t._s(t.orders[a].sellingPrice*t.orders[a].goodsCount)+"元")]),e("div",{staticClass:"pro-operate"},[e("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.orders[a].orderStatus,expression:"orders[index].orderStatus == 0"}],attrs:{type:"primary",size:"mini"}},[t._v("拒绝")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:1==t.orders[a].orderStatus,expression:"orders[index].orderStatus == 1"}],attrs:{type:"success",size:"mini"}},[t._v("退款")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:1==t.orders[a].orderStatus,expression:"orders[index].orderStatus == 1"}],attrs:{type:"warning",size:"mini"}},[t._v("发货")]),e("p",{directives:[{name:"show",rawName:"v-show",value:2==t.orders[a].orderStatus,expression:"orders[index].orderStatus == 2"}]},[t._v("等待签收")]),e("p",{directives:[{name:"show",rawName:"v-show",value:3==t.orders[a].orderStatus,expression:"orders[index].orderStatus == 3"}]},[t._v("订单完成")])],1)])]),e("div",{staticClass:"order-bar"},[e("div",{staticClass:"order-bar-right"},[e("span",[e("span",{staticClass:"total-price-title"},[t._v("状态：")]),e("span",{staticClass:"total-price"},[t._v(t._s(t.orderst[t.orders[a].orderStatus])+" ")])])])])])})),0):t._e()])])]):e("div",{staticClass:"order-empty"},[e("div",{staticClass:"empty"},[e("h2",[t._v("您还没有店铺")]),e("p",[t._v("快去开通店铺叭！")]),e("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.formLabelAlign}},[e("el-form-item",{attrs:{label:"名称"}},[e("el-input",{model:{value:t.formLabelAlign.name,callback:function(s){t.$set(t.formLabelAlign,"name",s)},expression:"formLabelAlign.name"}})],1),e("el-form-item",{attrs:{label:"店铺介绍"}},[e("el-input",{model:{value:t.formLabelAlign.region,callback:function(s){t.$set(t.formLabelAlign,"region",s)},expression:"formLabelAlign.region"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.onCreatshop}},[t._v("立即创建")])],1)],1)],1)])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"header"},[e("div",{staticClass:"pro-img"}),e("div",{staticClass:"pro-name"},[t._v("商品名称")]),e("div",{staticClass:"pro-price"},[t._v("单价")]),e("div",{staticClass:"pro-num"},[t._v("数量")]),e("div",{staticClass:"pro-total"},[t._v("小计")]),e("div",{staticClass:"pro-operate"},[t._v("操作")])])}],o=(e("b0c0"),e("d3b7"),e("e05f"),{components:{},data:function(){return{labelPosition:"right",formLabelAlign:{name:"",region:"",type:""},shopName:"",shopId:"",shopIntroduce:"",IsShop:!1,pageSize:15,total:0,currentPage:0,isshow:!0,ordershow:!1,orderst:["待支付","已支付","已发货","已签收"],orders:"",product:""}},created:function(){this.isShop()},watch:{IsShop:function(t){t&&this.getData()}},methods:{onCreatshop:function(){var t=this;this.shopName=this.formLabelAlign.name,this.shopIntroduce=this.formLabelAlign.region;var s=this.$store.getters.getUserId;this.$axios({url:"http://localhost:3000/cart",method:"post",params:{userId:s,storeName:this.formLabelAlign.name,introduceSign:this.formLabelAlign.region}}).then((function(s){t.IsShop=s.data.flag,s.data.flag?(t.shopId=s.data.data.storeId,t.notifySucceed(s.data.msg)):t.notifyError(s.data.msg)})).catch((function(t){return Promise.reject(t)}))},currentChange:function(t){this.currentPage=t},isShop:function(){var t=this,s=this.$store.getters.getUserId;this.$axios({url:this.$target+"/store/isStore",method:"get",params:{userId:s}}).then((function(s){console.log("res.data.data",s.data.data),t.IsShop=s.data.flag,s.data.flag?(t.shopName=s.data.data.storeName,t.shopId=s.data.data.storeId,t.shopIntroduce=s.data.data.introduceSign,t.notifySucceed(s.data.msg)):t.notifyError(s.data.msg)})).catch((function(t){return Promise.reject(t)}))},handleClick:function(t,s){console.log(t,s),console.log(t.index),0==t.index?(this.isshow=!0,this.ordershow=!1):1==t.index?(this.isshow=!1,this.ordershow=!0,console.log("返回给"),this.indexorder()):console.log("error"),console.log("this.isshow",this.isshow),console.log(" isshow",this.orders)},getData:function(){var t=this,s="/store/allGoods";this.$axios({url:this.$target+s,method:"get",params:{StoreId:this.shopId}}).then((function(s){t.product=s.data.data})).catch((function(t){return Promise.reject(t)}))},indexorder:function(){var t=this;this.$axios({url:this.$target+"/store/allOrders",method:"get",params:{StoreId:this.shopId}}).then((function(s){s.data.flag?t.orders=s.data.data:t.notifyError("获取所有订单",s.data.msg)})).catch((function(t){return Promise.reject(t)}))}}}),i=o,n=(e("8513"),e("2877")),d=Object(n["a"])(i,a,r,!1,null,"2fd815ba",null);s["default"]=d.exports},8513:function(t,s,e){"use strict";var a=e("f336"),r=e.n(a);r.a},e05f:function(t,s,e){},f336:function(t,s,e){}}]);
//# sourceMappingURL=chunk-55468c5c.7394bcef.js.map