(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f8a12a0"],{"6af2":function(t,e,a){"use strict";a("709b")},"709b":function(t,e,a){},c1c8:function(t,e,a){},edd9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",[a("CompTitle"),a("b-row",[a("CompForm")],1),a("UserTable")],1)],1)},l=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card panel-success"},[a("table",{staticClass:"table table-hover "},[t._m(0),0!==t.listRole.length?a("tbody",t._l(t.listRole,(function(t,e){return a("RoleListItem",{key:t.id,attrs:{role:t,index:e+1,roleId:t.id}})})),1):a("tbody",[t._m(1)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center",staticStyle:{width:"10%"}},[t._v("#")]),a("th",[t._v("Tên")]),a("th",{staticClass:"text-center",staticStyle:{width:"20%"}},[t._v("Mô tả vai trò")]),a("th",{staticStyle:{width:"160px"}},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{colspan:"4"}},[a("h6",{staticClass:"text-center"},[t._v("List Empty")])])])}],n=a("5530"),i=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"text-center"},[t._v(t._s(t.index))]),a("td",[t._v(t._s(t.role.slug))]),a("td",{staticClass:"text-center"},[a("span",{staticClass:"badge"},[t._v(t._s(t.role.name))])]),a("td",[a("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.handleEdit}},[t._v(" Edit ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.handleDelete}},[t._v(" Delete ")])])])},d=[],u=(a("a9e3"),a("b0c0"),{name:"user-list-item",props:{role:{type:Object,default:null},index:Number,roleId:Number},computed:{},data:function(){return{}},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["storeqlda/handleEditRole","storeqlda/handleDeleteRoleById","storeqlda/getListDataUser"])),{},{handleEdit:function(){this["storeqlda/handleEditRole"](this.role)},handleDelete:function(){var t=this;console.log("this.roleId",this.roleId),confirm("Bạn có muốn xóa role có tên là "+this.role.name)&&this["storeqlda/handleDeleteRoleById"](this.roleId).then((function(){return t["storeqlda/getListDataUser"]()}))}})}),h=u,m=a("2877"),b=Object(m["a"])(h,c,d,!1,null,null,null),f=b.exports,p={name:"user-list-table",components:{RoleListItem:f},data:function(){return{}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])(["storeqlda/getListDataRoleGTer"])),{},{listRole:function(){return this["storeqlda/getListDataRoleGTer"]}}),created:function(){this["storeqlda/getListDataUser"]()},methods:Object(n["a"])({},Object(i["b"])(["storeqlda/getListDataUser"]))},v=p,g=Object(m["a"])(v,r,o,!1,null,null,null),_=g.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h1",[t._v("Bảng danh sách vai trò")]),a("hr",{staticClass:"my-4"})])}],y={name:"comp-title",data:function(){return{}}},j=y,R=Object(m["a"])(j,C,O,!1,null,null,null),q=R.exports,w=a("25a6"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-col",{attrs:{cols:"12",lg:"6"}},[a("form-add"),t.isShowForm?a("form",{staticClass:"form-inline justify-content-between",attrs:{action:"",method:"POST"}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:""}},[t._v("label")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rolename,expression:"rolename"}],staticClass:"form-control user_name",attrs:{type:"text",placeholder:"Tên vai trò"},domProps:{value:t.rolename},on:{input:function(e){e.target.composing||(t.rolename=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:""}},[t._v("label")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.roledescrip,expression:"roledescrip"}],staticClass:"form-control user_email",attrs:{type:"text",placeholder:"Mô tả vai trò"},domProps:{value:t.roledescrip},on:{input:function(e){e.target.composing||(t.roledescrip=e.target.value)}}})]),null===t.roleSelected?a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.handleAddNew}},[t._v(" Submit ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.handleEditTask}},[t._v(" Update ")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.handleCancel}},[t._v(" Cancel ")])]):t._e(),t.isShowForm?a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:""}},[t._v("label")])]):t._e()],1)},D=[],F=(a("498a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group add-task"},[t.isShowForm?a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:t.toggleForm}},[t._v("Close Form")]):a("button",{staticClass:"btn btn-info btn-block",attrs:{type:"button"},on:{click:t.toggleForm}},[t._v("Add Role")])])}),x=[],k={name:"form-add",data:function(){return{}},computed:Object(n["a"])({},Object(i["d"])({isShowForm:function(t){return t.storeqlda.isShowForm}})),methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["storeqlda/toggleForm"])),{},{toggleForm:function(){return this["storeqlda/toggleForm"]()}})},I=k,S=Object(m["a"])(I,F,x,!1,null,null,null),L=S.exports,U={name:"comp-form",components:{FormAdd:L},data:function(){return{rolename:"",roledescrip:"",roleId:Number}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])(["storeqlda/getListDataRoleGTer","storeqlda/getListDataRoleOfAllUserGTer"])),Object(i["d"])({isShowForm:function(t){return t.storeqlda.isShowForm},roleSelected:function(t){return t.storeqlda.roleSelected}})),watch:{roleSelected:function(t){null!==t&&(this.rolename=t.slug,this.roledescrip=t.name,this.roleId=t.id)}},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["storeqlda/toggleForm","storeqlda/handleAddNewRole","storeqlda/handleEditRoleById","storeqlda/getListDataUser"])),{},{getRoleOfUserForEdit:function(){console.log("getRoleOfUserForEdit");var t=this["storeqlda/getListDataRoleOfAllUserGTer"];console.log("getRoleOfUserForEdit",t);var e=t,a=!1;for(var s in e){for(var l in e[s])if(e[s].hasOwnProperty(l)&&parseInt(l)===this.userId){t=e[s][l],a=!0;break}if(!0===a)break}for(var r in this.select=[],t)for(var o in this.listRole)this.listRole[o]["slug"]===t[r]&&this.select.push(this.listRole[o])},handleEditTask:function(){var t=this,e={slug:this.rolename,name:this.roledescrip,role_id:this.roleId};this["storeqlda/handleEditRoleById"](e).then((function(){t["storeqlda/getListDataUser"]()})),this.handleResetData()},handleAddNew:function(){var t=this;if(this.roledescrip.trim()&&this.rolename.trim()){var e={name:this.roledescrip,slug:this.rolename};this["storeqlda/handleAddNewRole"](e).then((function(){return t["storeqlda/getListDataUser"]()})),this.handleCancel()}else alert("Vui lòng nhập đầy đủ các trường")},handleCancel:function(){this["storeqlda/toggleForm"](),this.handleResetData()},handleResetData:function(){this.rolename="",this.roledescrip=""}})},T=U,$=(a("6af2"),Object(m["a"])(T,E,D,!1,null,null,null)),A=$.exports,N={components:{CompForm:A,CompTitle:q,UserTable:_},mounted:function(){this.$store.dispatch(w["a"],[{title:"Danh sách vai trò"}])}},B=N,G=(a("f6e1"),Object(m["a"])(B,s,l,!1,null,"736f6fc9",null));e["default"]=G.exports},f6e1:function(t,e,a){"use strict";a("c1c8")}}]);
//# sourceMappingURL=chunk-6f8a12a0.c5e6c7fd.js.map