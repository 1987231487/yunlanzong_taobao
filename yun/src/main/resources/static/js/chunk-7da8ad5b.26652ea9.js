(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7da8ad5b"],{5936:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"login-demo"},[a("div",{staticClass:"login-wrap"},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-form",{ref:"loginForm",attrs:{rules:e.formRules,model:e.user,"status-icon":"","label-width":"70px"}},[a("el-tabs",{attrs:{stretch:!0},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(s){e.activeName=s},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"登录",name:"login"}},[a("el-form-item",{attrs:{prop:"username",label:"用户名"}},[a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.user.username,callback:function(s){e.$set(e.user,"username",s)},expression:"user.username"}})],1),a("el-form-item",{attrs:{prop:"password",label:"密码"}},[a("el-input",{attrs:{"show-password":"",placeholder:"请输入密码"},model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}},[a("template",{slot:"prepend"})],2)],1),a("br"),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(s){return e.doLogin("loginForm")}}},[e._v("登 录")])],1)],1)],1)],1)],1)],1)])},r=[],n=a("bc3a"),o=a.n(n),i={name:"login",data:function(){return{activeName:"login",checked:!1,user:{username:"",password:""},formRules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{type:"string",min:6,message:"密码不能小于6位",trigger:"blur"}],email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}]}}},created:function(){},methods:{doLogin:function(e){var s=this;this.$refs[e].validate((function(e){if(!e)return!1;s.$router.push({path:"/backhome"})}))},doRegister:function(e){var s=this;this.$refs[e].validate((function(e){if(!e)return!1;console.log(e),o.a.post("/submitRegister/",{name:s.user.username,email:s.user.email,password:s.user.password}).then((function(e){200===e.data.status?(s.$message.success(e.data.msg),s.activeName="login"):s.$message.error(e.data.msg)}))}))},handleClick:function(e,s){console.log(e,s)}}},l=i,u=(a("8385"),a("2877")),c=Object(u["a"])(l,t,r,!1,null,"dbe1e83a",null);s["default"]=c.exports},8385:function(e,s,a){"use strict";var t=a("c323"),r=a.n(t);r.a},c323:function(e,s,a){}}]);
//# sourceMappingURL=chunk-7da8ad5b.26652ea9.js.map