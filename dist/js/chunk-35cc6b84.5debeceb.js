(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35cc6b84"],{"16db":function(t,s,a){},"610c":function(t,s,a){"use strict";a("b2d3")},7716:function(t,s,a){"use strict";a("16db")},"97f7":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"d-flex flex-row"},[a("div",{staticClass:"flex-row-auto offcanvas-mobile w-300px w-xl-350px",attrs:{id:"kt_profile_aside"}},[a("div",{staticClass:"card card-custom"},[a("div",{staticClass:"card-body pt-15"},[a("div",{staticClass:"text-center mb-10"},[a("div",{staticClass:"symbol symbol-60 symbol-circle symbol-xl-90"},[a("div",{staticClass:"symbol-label",style:{backgroundImage:"url('"+t.currentUserPhoto+"')"}}),a("i",{staticClass:"symbol-badge symbol-badge-bottom bg-success"})]),a("h4",{staticClass:"font-weight-bold my-2"},[t._v(" "+t._s(t.currentUserPersonalInfo.user.name)+" ")]),a("div",{staticClass:"text-muted mb-2"},[t._v(" "+t._s(t.currentUserPersonalInfo.user.role)+" ")]),a("span",{staticClass:"\n              label label-light-warning label-inline\n              font-weight-bold\n              label-lg\n            "},[t._v("Active")])]),t._m(0),a("div",{staticClass:"navi navi-bold navi-hover navi-active navi-link-rounded",attrs:{role:"tablist"}},[a("div",{staticClass:"navi-item mb-2"},[a("a",{staticClass:"\n                btn btn-hover-light-primary\n                font-weight-bold\n                py-3\n                px-6\n                mb-2\n                text-center\n                btn-block\n              ",staticStyle:{cursor:"pointer"},attrs:{"data-tab":"1","data-toggle":"tab",role:"tab"},on:{click:t.setActiveTab}},[t._v(" Personal info ")]),a("a",{staticClass:"\n                btn btn-hover-light-primary\n                font-weight-bold\n                py-3\n                px-6\n                mb-2\n                text-center\n                btn-block\n              ",staticStyle:{cursor:"pointer"},attrs:{"data-tab":"3","data-toggle":"tab",role:"tab"},on:{click:t.setActiveTab}},[t._v(" Change Passwort ")])])])])])]),a("div",{staticClass:"flex-row-fluid ml-lg-8"},[a("b-tabs",{staticClass:"hide-tabs thanhthanh",model:{value:t.tabIndex,callback:function(s){t.tabIndex=s},expression:"tabIndex"}},[a("b-tab",{attrs:{active:""}}),a("b-tab",[a("KTPersonalInformation")],1),a("b-tab",[a("KTChangePassword")],1)],1)],1)])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mb-10 text-center"},[a("a",{staticClass:"btn btn-icon btn-circle btn-light-facebook mr-2",attrs:{href:"#"}},[a("i",{staticClass:"socicon-facebook"})]),a("a",{staticClass:"btn btn-icon btn-circle btn-light-twitter mr-2",attrs:{href:"#"}},[a("i",{staticClass:"socicon-twitter"})]),a("a",{staticClass:"btn btn-icon btn-circle btn-light-google",attrs:{href:"#"}},[a("i",{staticClass:"socicon-google"})])])}],o=a("5530"),l=a("2f62"),n=a("25a6"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card card-custom"},[a("div",{staticClass:"card-header py-3"},[t._m(0),a("div",{staticClass:"card-toolbar"},[a("button",{ref:"kt_save_changes",staticClass:"btn btn-success mr-2",attrs:{type:"reset"},on:{click:function(s){return t.save()}}},[t._v(" Save Changes ")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"reset"},on:{click:function(s){return t.cancel()}}},[t._v(" Cancel ")])])]),a("form",{staticClass:"form"},[a("div",{staticClass:"card-body"},[t._m(1),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-xl-3 col-lg-3 col-form-label text-right"},[t._v("Avatar")]),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("div",{staticClass:"image-input image-input-outline",attrs:{id:"kt_profile_avatar"}},[a("div",{staticClass:"image-input-wrapper",style:{backgroundImage:"url("+t.photo+")"}}),a("label",{staticClass:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",attrs:{"data-action":"change","data-toggle":"tooltip",title:"","data-original-title":"Change avatar"}},[a("i",{staticClass:"fa fa-pen icon-sm text-muted"}),a("input",{attrs:{type:"file",name:"profile_avatar",accept:".png, .jpg, .jpeg"},on:{change:function(s){return t.onFileChange(s)}}}),a("input",{attrs:{type:"hidden",name:"profile_avatar_remove"}})]),t._m(2),a("span",{staticClass:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",attrs:{"data-action":"remove","data-toggle":"tooltip",title:"Remove avatar"},on:{click:function(s){t.current_photo=null}}},[a("i",{staticClass:"ki ki-bold-close icon-xs text-muted"})])]),a("span",{staticClass:"form-text text-muted"},[t._v("Allowed file types: png, jpg, jpeg.")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-xl-3 col-lg-3 col-form-label text-right"},[t._v("Name")]),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("input",{ref:"name",staticClass:"form-control form-control-lg form-control-solid",attrs:{type:"text"},domProps:{value:t.currentUserPersonalInfo.name}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-xl-3 col-lg-3 col-form-label text-right"},[t._v("Last Name")]),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("input",{ref:"surname",staticClass:"form-control form-control-lg form-control-solid",attrs:{type:"text"},domProps:{value:t.currentUserPersonalInfo.surname}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-xl-3 col-lg-3 col-form-label text-right"},[t._v("Company Name")]),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("input",{ref:"company_name",staticClass:"form-control form-control-lg form-control-solid",attrs:{type:"text"},domProps:{value:t.currentUserPersonalInfo.company_name}}),a("span",{staticClass:"form-text text-muted"},[t._v("If you want your invoices addressed to a company. Leave blank to use your full name.")])])]),t._m(3),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-xl-3 col-lg-3 col-form-label text-right"},[t._v("Contact Phone")]),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("div",{staticClass:"input-group input-group-lg input-group-solid"},[t._m(4),a("input",{ref:"phone",staticClass:"form-control form-control-lg form-control-solid",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.currentUserPersonalInfo.phone}})]),a("span",{staticClass:"form-text text-muted"},[t._v("We'll never share your email with anyone else.")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-xl-3 col-lg-3 col-form-label text-right"},[t._v("Email Address")]),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("div",{staticClass:"input-group input-group-lg input-group-solid"},[t._m(5),a("input",{ref:"email",staticClass:"form-control form-control-lg form-control-solid",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.currentUserPersonalInfo.email}})])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-xl-3 col-lg-3 col-form-label text-right"},[t._v("Company Site")]),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("div",{staticClass:"input-group input-group-lg input-group-solid"},[a("input",{ref:"company_site",staticClass:"form-control form-control-lg form-control-solid",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.currentUserPersonalInfo.company_site}}),t._m(6)])])])])])])},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-title align-items-start flex-column"},[a("h3",{staticClass:"card-label font-weight-bolder text-dark"},[t._v(" Personal Information ")]),a("span",{staticClass:"text-muted font-weight-bold font-size-sm mt-1"},[t._v("Update your personal informaiton")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("label",{staticClass:"col-xl-3"}),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("h5",{staticClass:"font-weight-bold mb-6"},[t._v("Customer Info")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow",attrs:{"data-action":"cancel","data-toggle":"tooltip",title:"Cancel avatar"}},[a("i",{staticClass:"ki ki-bold-close icon-xs text-muted"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("label",{staticClass:"col-xl-3"}),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("h5",{staticClass:"font-weight-bold mt-10 mb-6"},[t._v("Contact Info")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"la la-phone"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"la la-at"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[t._v(".com")])])}],d=(a("b0c0"),{name:"PersonalInformation",data:function(){return{default_photo:"media/users/blank.png",current_photo:null,avatar:{objFile:null,base64URL:""}}},created:function(){this["storeqlda/checkLogin"]()},mounted:function(){this.current_photo=this.currentUserPersonalInfo.photo},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["storeqlda/updateProfile","storeqlda/getUrlAvatar","storeqlda/checkLogin"])),{},{save:function(){var t=this,s=this.$refs.name.value,a=this.$refs["kt_save_changes"];a.classList.add("spinner","spinner-light","spinner-right"),setTimeout((function(){var e={name:s};t.avatar.objFile&&(e.objFile=t.avatar.objFile),t["storeqlda/updateProfile"](e).then((function(t){t.ok?alert("Update thông tin Profile thành công!"):alert(t.error)})).then((function(){t["storeqlda/getUrlAvatar"](t.currentUserPersonalInfo.user.id)})),a.classList.remove("spinner","spinner-light","spinner-right")}),2e3)},cancel:function(){this.$refs.name.value=this.currentUserPersonalInfo.name,this.$refs.surname.value=this.currentUserPersonalInfo.surname,this.$refs.company_name.value=this.currentUserPersonalInfo.company_name,this.$refs.phone.value=this.currentUserPersonalInfo.phone,this.$refs.email.value=this.currentUserPersonalInfo.email,this.$refs.company_site.value=this.currentUserPersonalInfo.company_site,this.current_photo=this.currentUserPersonalInfo.photo},onFileChange:function(t){var s=this,a=t.target.files[0];if("function"===typeof FileReader){var e=new FileReader;e.onload=function(t){s.current_photo=t.target.result,s.avatar.objFile=a},e.readAsDataURL(a)}else alert("Sorry, FileReader API not supported")}}),computed:Object(o["a"])(Object(o["a"])({},Object(l["c"])(["currentUserPersonalInfo","getcurrentUserAccountInfo"])),{},{photo:function(){return null==this.current_photo?this.default_photo:this.current_photo}})}),u=d,f=(a("610c"),a("2877")),p=Object(f["a"])(u,i,c,!1,null,"617f83e2",null),m=p.exports,v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card card-custom"},[a("div",{staticClass:"card-header py-3"},[t._m(0),a("div",{staticClass:"card-toolbar"},[a("button",{ref:"kt_save_changes",staticClass:"btn btn-success mr-2",attrs:{type:"submit"},on:{click:function(s){return t.save()}}},[t._v(" Save Changes ")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"reset"},on:{click:function(s){return t.cancel()}}},[t._v(" Cancel ")])])]),a("form",{staticClass:"form",attrs:{id:"kt_password_change_form"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"alert alert-custom alert-light-danger fade show mb-10",attrs:{role:"alert"}},[a("div",{staticClass:"alert-icon"},[a("span",{staticClass:"svg-icon svg-icon-3x svg-icon-danger"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"}},[a("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("rect",{attrs:{x:"0",y:"0",width:"24",height:"24"}}),a("circle",{attrs:{fill:"#000000",opacity:"0.3",cx:"12",cy:"12",r:"10"}}),a("rect",{attrs:{fill:"#000000",x:"11",y:"10",width:"2",height:"7",rx:"1"}}),a("rect",{attrs:{fill:"#000000",x:"11",y:"7",width:"2",height:"2",rx:"1"}})])])])]),t._m(1),t._m(2)]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-xl-3 col-lg-3 col-form-label text-alert"},[t._v("Current Password")]),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("input",{ref:"current_password",staticClass:"form-control form-control-lg form-control-solid mb-2",attrs:{type:"password",value:"",placeholder:"Current password",name:"current_password"}}),a("router-link",{staticClass:"text-sm font-weight-bold",attrs:{to:"/login",href:"#"}},[t._v("Forgot password ?")])],1)]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-xl-3 col-lg-3 col-form-label text-alert"},[t._v("New Password")]),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("input",{ref:"new_password",staticClass:"form-control form-control-lg form-control-solid",attrs:{type:"password",value:"",placeholder:"New password",name:"new_password"}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-xl-3 col-lg-3 col-form-label text-alert"},[t._v("Verify Password")]),a("div",{staticClass:"col-lg-9 col-xl-6"},[a("input",{ref:"verify_password",staticClass:"form-control form-control-lg form-control-solid",attrs:{type:"password",value:"",placeholder:"Verify password",name:"verify_password"}})])])])])])},b=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-title align-items-start flex-column"},[a("h3",{staticClass:"card-label font-weight-bolder text-dark"},[t._v("Change Password")]),a("span",{staticClass:"text-muted font-weight-bold font-size-sm mt-1"},[t._v("Change your account password")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"alert-text font-weight-bold"},[t._v(" Configure user passwords to expire periodically. Users will need warning that their passwords are going to expire, "),a("br"),t._v("or they might inadvertently get locked out of the system! ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"alert-close"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"ki ki-close"})])])])}],h=a("ae1f"),g=a("1f99"),C=a("34aa"),_=a("5feb"),w=a("e682"),x=a("3d20"),y=a.n(x),P={name:"ChangePassword",data:function(){return{password:"",status:"",valid:!0}},mounted:function(){var t=h["a"].getById("kt_password_change_form");this.fv=Object(g["a"])(t,{fields:{current_password:{validators:{notEmpty:{message:"Current password is required"}}},new_password:{validators:{notEmpty:{message:"New password is required"}}},verify_password:{validators:{notEmpty:{message:"Confirm password is required"},identical:{compare:function(){return t.querySelector('[name="new_password"]').value},message:"The password and its confirm are not the same"}}}},plugins:{trigger:new C["a"],bootstrap:new _["a"],submitButton:new w["a"]}})},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["storeqlda/changPassUser"])),{},{save:function(){var t=this;this.fv.validate();var s=this.$refs.current_password.value,a=this.$refs.new_password.value,e=this.$refs.verify_password.value,r={current_password:s,new_password:a,verify_password:e},o=this.$refs["kt_save_changes"];o.classList.add("spinner","spinner-light","spinner-right"),setTimeout((function(){t["storeqlda/changPassUser"](r).then((function(t){console.log("changepass",t),!0===t.data.success?alert(t.data.message):alert(t.data.error)})),o.classList.remove("spinner","spinner-light","spinner-right")}),2e3),this.fv.on("core.form.invalid",(function(){y.a.fire({title:"",text:"Please, provide correct data!",icon:"error",confirmButtonClass:"btn btn-secondary"})}))},cancel:function(){this.fv.resetForm(),this.$refs.current_password.value="",this.$refs.new_password.value="",this.$refs.verify_password.value=""}}),computed:Object(o["a"])({},Object(l["c"])(["currentUser"]))},k=P,I=(a("7716"),Object(f["a"])(k,v,b,!1,null,"4f9d58be",null)),U=I.exports,$={name:"Profile-2",data:function(){return{tabIndex:0}},components:{KTPersonalInformation:m,KTChangePassword:U},created:function(){var t=this;this["storeqlda/checkLogin"]().then((function(){t["storeqlda/getUrlAvatar"](t.currentUserPersonalInfo.user.id)}))},mounted:function(){this.$store.dispatch(n["a"],[{title:"Profile 2"}])},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["storeqlda/getUrlAvatar","storeqlda/checkLogin"])),{},{setActiveTab:function(t){for(var s=t.target,a=s.closest('[role="tablist"]'),e=a.querySelectorAll('[data-toggle="tab"]'),r=0;r<e.length;r++)e[r].classList.remove("active");this.tabIndex=parseInt(s.getAttribute("data-tab")),s.classList.add("active")}}),computed:Object(o["a"])({},Object(l["c"])(["currentUserPersonalInfo","currentUserPhoto"]))},j=$,O=(a("bafb"),Object(f["a"])(j,e,r,!1,null,"2f0461bc",null));s["default"]=O.exports},ac7c:function(t,s,a){},b2d3:function(t,s,a){},bafb:function(t,s,a){"use strict";a("ac7c")}}]);
//# sourceMappingURL=chunk-35cc6b84.5debeceb.js.map