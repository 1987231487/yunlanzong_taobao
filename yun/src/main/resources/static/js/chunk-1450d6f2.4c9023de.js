(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1450d6f2"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),o=a("5899"),c="["+o+"]",i=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),n=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:n(1),end:n(2),trim:n(3)}},"60ce":function(t,e,a){"use strict";var r=a("999e"),o=a.n(r);o.a},7156:function(t,e,a){var r=a("861d"),o=a("d2bb");t.exports=function(t,e,a){var c,i;return o&&"function"==typeof(c=e.constructor)&&c!==a&&r(i=c.prototype)&&i!==a.prototype&&o(t,i),t}},8629:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods",attrs:{id:"goods",name:"goods"}},[a("div",{staticClass:"nav"},[a("div",{staticClass:"product-nav"},[a("div",{staticClass:"title"},[t._v("分类")]),a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.categoryList,(function(e){return a("el-tab-pane",{key:e.categoryId,attrs:{label:e.categoryName,name:""+e.categoryId},on:{click:function(a){return t.getKlassifiseer(e.categoryId)}}})})),1)],1)]),a("div",{staticClass:"main"},[a("div",{staticClass:"list"},[t.product.length>0?a("MyList",{attrs:{list:t.product}}):a("div",{staticClass:"none-product"},[t._v("抱歉没有找到相关的商品，请看看其他的商品")])],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.total},on:{"current-change":t.currentChange}})],1)])])},o=[],c=(a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("841c"),a("bc3a")),i=a.n(c),s={data:function(){return{categoryList:[],categoryID:[],product:"",productList:"",total:0,pageSize:15,currentPage:1,activeName:"0",search:""}},created:function(){this.getCategory(),console.log("sdsd")},activated:function(){return this.activeName="-1",this.total=0,this.currentPage=1,console.log("路由没有传递参数",this.$route.query),0==Object.keys(this.$route.query).length?(this.categoryID=[],this.activeName="0",void console.log("如果路由没有传递参数，默认为显示全部商品")):void 0!=this.$route.query.categoryID?(this.categoryID=this.$route.query.categoryID,void(1==this.categoryID.length&&(this.activeName=""+this.categoryID[0]))):(void 0!=this.$route.query.search&&(this.search=this.$route.query.search),void console.log("初始化商品",this.activeName))},watch:{activeName:function(t){0==t&&(this.categoryID=[]),t>0&&(this.categoryID=[Number(t)]),this.total=0,this.currentPage=1,this.$router.push({path:"/goods",query:{categoryID:this.categoryID[0]}})},search:function(t){""!=t&&this.getProductBySearch(t)},categoryID:function(){console.log("当前分类ID",this.categoryID),this.getData(),this.search=""},$route:function(t){"/goods"==t.path&&void 0!=t.query.search&&(this.activeName="-1",this.currentPage=1,this.total=0,this.search=t.query.search)}},methods:{backtop:function(){var t=setInterval((function(){var e=document.documentElement.scrollTop||document.body.scrollTop,a=Math.floor(-e/5);document.documentElement.scrollTop=document.body.scrollTop=e+a,0===e&&clearInterval(t)}),20)},currentChange:function(t){this.currentPage=t,""!=this.search?this.getProductBySearch():this.getData(),this.backtop()},getCategory:function(){var t=this;i()({method:"get",url:this.$target+"/categories"}).then((function(e){var a={categoryId:0,categoryName:"全部"},r=e.data.data;r.unshift(a),t.categoryList=r,console.log("分类表",t.categoryList)})).catch((function(t){return Promise.reject(t)}))},getData:function(){var t=this,e=0==this.categoryID.length?"/goods":"/goodsByCategoryId";i()({url:this.$target+e,method:"get",params:{goodsCategoryId:this.categoryID[0],currentPage:this.currentPage,pageSize:this.pageSize}}).then((function(e){console.log(t.categoryID),t.product=e.data.data})).catch((function(t){return Promise.reject(t)}))},getProductBySearch:function(){var t=this;this.$axios.get(this.$target+"/goodsByName",{goods_name:this.search}).then((function(e){t.product=e.data.data;var a={categoryId:t.categoryList.length+1,categoryName:t.search};t.categoryList.push(a)})).catch((function(t){return Promise.reject(t)}))}}},n=s,u=(a("60ce"),a("2877")),g=Object(u["a"])(n,r,o,!1,null,"dc4693b6",null);e["default"]=g.exports},"999e":function(t,e,a){},a9e3:function(t,e,a){"use strict";var r=a("83ab"),o=a("da84"),c=a("94ca"),i=a("6eeb"),s=a("5135"),n=a("c6b6"),u=a("7156"),g=a("c04e"),h=a("d039"),l=a("7c73"),d=a("241c").f,f=a("06cf").f,y=a("9bf2").f,p=a("58a8").trim,v="Number",I=o[v],m=I.prototype,N=n(l(m))==v,b=function(t){var e,a,r,o,c,i,s,n,u=g(t,!1);if("string"==typeof u&&u.length>2)if(u=p(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(c=u.slice(2),i=c.length,s=0;s<i;s++)if(n=c.charCodeAt(s),n<48||n>o)return NaN;return parseInt(c,r)}return+u};if(c(v,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var D,C=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof C&&(N?h((function(){m.valueOf.call(a)})):n(a)!=v)?u(new I(b(e)),a,C):b(e)},E=r?d(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;E.length>P;P++)s(I,D=E[P])&&!s(C,D)&&y(C,D,f(I,D));C.prototype=m,m.constructor=C,i(o,v,C)}}}]);
//# sourceMappingURL=chunk-1450d6f2.4c9023de.js.map