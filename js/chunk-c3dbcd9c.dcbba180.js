(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3dbcd9c"],{"43f3":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"ordering"},[s("div",{staticClass:"heading"},[t._v("店铺设置")]),s("div",{staticClass:"set-up-view"},[s("div",{staticClass:"button-view-set"},[s("el-button",{attrs:{type:"success",size:"medium"},on:{click:function(e){return t.setCl()}}},[t._v("修改")])],1),t._l(t.setdata,(function(e,i){return s("div",{key:i},[s("div",{staticClass:"set-name"},[s("div",[t._v("店铺名称:")]),s("div",[t._v(t._s(e.name))])]),s("div",{staticClass:"set-name"},[s("div",[t._v("店铺地址:")]),s("div",[t._v(t._s(e.address))])]),s("div",{staticClass:"set-up-image"},[s("div",[t._v("店铺logo:")]),s("div",{staticClass:"set-image"},t._l(e.logo,(function(t,e){return s("div",{key:e},[s("img",{attrs:{src:t.url}})])})),0)])])}))],2)])},a=[],n=(s("96cf"),s("3b8d")),r={data:function(){return{loading:!0,setdata:[]}},methods:{setCl:function(){this.$router.push({name:"modify-infor",params:{data:this.setdata[0]}})},obtainshop:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new this.Request(this.Urls.m().obtainshop).modeget();case 3:e=t.sent,this.setdata=e.data.data,this.loading=!1,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),new this.mytitle(this.$message,"error","服务器发生错误,请重试").funtitle();case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.obtainshop()}},c=r,o=(s("c73c"),s("2877")),d=Object(o["a"])(c,i,a,!1,null,"a6e8807c",null);e["default"]=d.exports},7891:function(t,e,s){},c73c:function(t,e,s){"use strict";s("7891")}}]);
//# sourceMappingURL=chunk-c3dbcd9c.dcbba180.js.map