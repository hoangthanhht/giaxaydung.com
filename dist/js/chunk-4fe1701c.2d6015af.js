(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fe1701c"],{"0531":function(t,e,a){},"2a3e":function(t,e,a){"use strict";a("c8ae")},"4e9a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Giavattu")],1)},l=[],i=a("5530"),u=a("2f62"),s=a("25a6"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-custom card-stretch gutter-b"},[a("div",{staticClass:"control_bao_gia"},[a("div",{staticClass:"select-cbb"},[a("div",[a("b-form-select",{attrs:{options:t.tinh},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Chọn tỉnh thành --")])]},proxy:!0}]),model:{value:t.selectedTinh,callback:function(e){t.selectedTinh=e},expression:"selectedTinh"}})],1),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedKhuVuc,expression:"selectedKhuVuc"}],staticClass:"form-control user_email",attrs:{type:"text",placeholder:"-- Chọn khu vực --"},domProps:{value:t.selectedKhuVuc},on:{input:function(e){e.target.composing||(t.selectedKhuVuc=e.target.value)}}})]),a("div",[a("b-form-select",{attrs:{options:t.thang,disabled:t.isMonthDisabled},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[t._v("-- Báo giá theo tháng--")])]},proxy:!0}]),model:{value:t.selectedThang,callback:function(e){t.selectedThang=e},expression:"selectedThang"}})],1),a("div",[a("b-form-select",{attrs:{options:t.quy,disabled:t.isQuyDisabled},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[t._v("-- Báo giá theo quý--")])]},proxy:!0}]),model:{value:t.selectedQuy,callback:function(e){t.selectedQuy=e},expression:"selectedQuy"}})],1),a("div",[a("form",{attrs:{action:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedDay,expression:"selectedDay"}],staticStyle:{height:"34px"},attrs:{type:"date",id:"birthday",name:"birthday",disabled:t.isDayDisabled},domProps:{value:t.selectedDay},on:{input:function(e){e.target.composing||(t.selectedDay=e.target.value)}}})])]),a("div",[a("b-form-select",{attrs:{options:t.loaibg},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Chọn loại báo giá --")])]},proxy:!0}]),model:{value:t.selectedLoaiBg,callback:function(e){t.selectedLoaiBg=e},expression:"selectedLoaiBg"}})],1)]),a("div",{staticClass:"import_excel_bao_gia"},[a("div",[a("b-button",{staticClass:"mb-2 add-cv icon-tvgs",attrs:{size:"sm"},on:{click:t.importExcelBaoGia}},[t._v(" Thêm báo giá ")])],1),a("div",[a("b-form-file",{staticClass:"mt-3",attrs:{plain:""},on:{change:t.handleChange}})],1),a("div",[a("b-button",{staticClass:"mb-2 add-cv icon-tvgs",attrs:{size:"sm"}},[t._v(" Xem báo giá ")])],1)])]),t.stringSearch?a("div",{staticClass:"card-body pt-0 pb-3"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"\n              table\n              table-head-custom\n              table-vertical-center\n              table-head-bg\n              table-borderless\n            "},[t._m(0),0!==t.dataArrBaoGiaSerch.length?a("tbody",[t._l(t.dataArrBaoGiaSerch,(function(e,n){return[a("tr",{key:n,staticClass:"row_table_note"},[a("td",{staticStyle:{display:"none"}},[a("span",{staticClass:"id_vat_tu text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickMaDM}},[t._v(t._s(null!==e.id?e.id:"null"))])]),a("td",[a("span",{staticClass:"ma_vat_tu text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickMaDM}},[t._v(t._s(null!==e.maVatTu?e.maVatTu:"null"))])]),a("td",[a("span",{staticClass:"ten_vat_tu text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.tenVatTu?e.tenVatTu:"null"))])]),a("td",[a("span",{staticClass:"don_vi text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.donVi?e.donVi:"null"))])]),a("td",[a("span",{staticClass:"gia_vat_tu text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.giaVatTu?e.giaVatTu:"null"))])]),a("td",[a("span",{staticClass:"nguon text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.nguon?e.nguon:"null"))])]),e.ghiChu?a("td",[a("span",{staticClass:"ghi_chu text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.ghiChu?e.ghiChu:"null"))])]):t._e(),a("td",[a("span",{staticClass:"tinh text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.tinh?e.tinh:"null"))])]),a("td",[a("span",{staticClass:"tac_gia text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.tacGia?e.tacGia:"null"))])])])]}))],2):t._e()])])])]):a("div",{staticClass:"card-body pt-0 pb-3"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"\n              table\n              table-head-custom\n              table-vertical-center\n              table-head-bg\n              table-borderless\n            "},[t._m(1),0!==t.dataArr.length?a("tbody",[t._l(t.dataArrBaoGia,(function(e,n){return[a("tr",{key:n,staticClass:"row_table_note"},[a("td",{staticStyle:{display:"none"}},[a("span",{staticClass:"id_vat_tu text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickMaDM}},[t._v(t._s(null!==e.id?e.id:"null"))])]),a("td",[a("span",{staticClass:"ma_vat_tu text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickMaDM}},[t._v(t._s(null!==e.maVatTu?e.maVatTu:"null"))])]),a("td",[a("span",{staticClass:"ten_vat_tu text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.tenVatTu?e.tenVatTu:"null"))])]),a("td",[a("span",{staticClass:"don_vi text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.donVi?e.donVi:"null"))])]),a("td",[a("span",{staticClass:"gia_vat_tu text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.giaVatTu?e.giaVatTu:"null"))])]),a("td",[a("span",{staticClass:"nguon text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.nguon?e.nguon:"null"))])]),a("td",[a("span",{staticClass:"ghi_chu text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.ghiChu?e.ghiChu:"null"))])]),a("td",[a("span",{staticClass:"tinh text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.tinh?e.tinh:"null"))])]),a("td",[a("span",{staticClass:"tac_gia text-muted font-weight-bold",on:{blur:function(e){return t.handleSave(e)},click:t.hadleClickTenMaDM}},[t._v(t._s(null!==e.tacGia?e.tacGia:"null"))])])])]}))],2):t._e()])])])]),a("b-pagination",{attrs:{align:"right",pills:"",perPage:"20","total-rows":t.rows,size:"lg"},on:{"page-click":function(e){return t.dataArr(t.currentPage)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"text-left"},[a("th",{staticStyle:{display:"none"}},[t._v("Id")]),a("th",[t._v("mã vật tư")]),a("th",[t._v("tên vật tư")]),a("th",[t._v("đơn vị")]),a("th",[t._v("giá")]),a("th",[t._v("nguồn")]),a("th",[t._v("ghi chú")]),a("th",[t._v("tỉnh")]),a("th",[t._v("người đăng")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"text-left"},[a("th",{staticStyle:{display:"none"}},[t._v("Id")]),a("th",[t._v("mã vật tư")]),a("th",[t._v("tên vật tư")]),a("th",[t._v("đơn vị")]),a("th",[t._v("giá")]),a("th",[t._v("nguồn")]),a("th",[t._v("ghi chú")]),a("th",[t._v("tỉnh")]),a("th",[t._v("người đăng")])])])}],r=(a("4de4"),a("d3b7"),a("ddb0"),a("d81d"),a("ac1f"),a("5319"),a("99af"),a("b64b"),a("caad"),a("2532"),a("e8ae")),d=a.n(r),h=a("3019"),v={name:"gia_vat_tu",components:{},data:function(){return{rows:100,currentPage:1,isMonthDisabled:!1,isQuyDisabled:!1,isDayDisabled:!1,selectedTinh:null,tinh:[{value:"Chọn tỉnh thành",text:"Chọn tỉnh thành"},{text:"An Giang",value:"AG"},{text:"Bà Rịa – Vũng Tàu",value:"BV"},{text:"Bạc Liêu",value:"BL"},{text:"Bắc Kạn",value:"BK"},{text:"Bắc Giang",value:"BG"},{text:"Bắc Ninh",value:"BN"},{text:"Bến Tre",value:"BT"},{text:"Bình Dương",value:"BD"},{text:"Bình Định",value:"BĐ"},{text:"Bình Phước",value:"BP"},{text:"Bình Thuận",value:"BTh"},{text:"Cà Mau",value:"CM"},{text:"Cao Bằng",value:"CB"},{text:"Cần Thơ",value:"CT"},{text:"Đà Nẵng",value:"ĐNa"},{text:"Đắk Lắk",value:"ĐL"},{text:"Đắk Nông",value:"ĐNo"},{text:"Điện Biên",value:"ĐB"},{text:"Đồng Nai",value:"ĐN"},{text:"Đồng Tháp",value:"ĐT"},{text:"Gia Lai",value:"GL"},{text:"Hà Giang",value:"HG"},{text:"Hà Nam",value:"HNa"},{text:"Hà Nội",value:"HN"},{text:"Hà Tĩnh",value:"HT"},{text:"Hải Dương",value:"HD"},{text:"Hải Phòng",value:"HP"},{text:"Hậu Giang",value:"HGi"},{text:"Hòa Bình",value:"HB"},{text:"Thành phố Hồ Chí Minh",value:"SG"},{text:"Hưng Yên",value:"HY"},{text:"Khánh Hoà",value:"KH"},{text:"Kiên Giang",value:"KG"},{text:"Kon Tum",value:"KT"},{text:"Lai Châu",value:"LC"},{text:"Lạng Sơn",value:"LS"},{text:"Lào Cai",value:"LCa"},{text:"Lâm Đồng",value:"LĐ"},{text:"Long An",value:"LA"},{text:"Nam Định",value:"NĐ"},{text:"Nghệ An",value:"NA"},{text:"Ninh Bình",value:"NB"},{text:"Ninh Thuận",value:"NT"},{text:"Phú Thọ",value:"PT"},{text:"Phú Yên",value:"PY"},{text:"Quảng Bình",value:"QB"},{text:"Quảng Nam",value:"QNa"},{text:"Quảng Ngãi",value:"QNg"},{text:"Quảng Ninh",value:"QN"},{text:"Quảng Trị",value:"QT"},{text:"Sóc Trăng",value:"ST"},{text:"Sơn La",value:"SL"},{text:"Tây Ninh",value:"TN"},{text:"Thái Bình",value:"TB"},{text:"Thái Nguyên",value:"TNg"},{text:"Thanh Hóa",value:"TH"},{text:"Thừa Thiên Huế",value:"TTH"},{text:"Tiền Giang",value:"TG"},{text:"Trà Vinh",value:"TV"},{text:"Tuyên Quang",value:"TQ"},{text:"Vĩnh Long",value:"VL"},{text:"Vĩnh Phúc",value:"VP"},{text:"Yên Bái",value:"YB"}],selectedKhuVuc:"",selectedLoaiBg:null,loaibg:[{value:"Báo giá vật tư",text:"Báo giá vật tư"}],selectedDay:null,selectedThang:null,thang:[{value:"Thang1",text:"Thang 1"},{value:"Thang2",text:"Thang 2"},{value:"Thang3",text:"Thang 3"},{value:"Thang4",text:"Thang 4"},{value:"Thang5",text:"Thang 5"},{value:"Thang6",text:"Thang 6"},{value:"Thang7",text:"Thang 7"},{value:"Thang8",text:"Thang 8"},{value:"Thang9",text:"Thang 9"},{value:"Thang10",text:"Thang 10"},{value:"Thang11",text:"Thang 11"},{value:"Thang12",text:"Thang 12"}],selectedQuy:null,quy:[{value:"QuyI",text:"Quy 1"},{value:"QuyII",text:"Quy 2"},{value:"QuyIII",text:"Quy 3"},{value:"QuyIV",text:"Quy 4"}],dataArrBaoGia:[]}},created:function(){this["storeqlda/getAllListDataBaoGia"]()},mounted:function(){this.dataArr(this.currentPage)},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(u["d"])({stringSearch:function(t){return t.storeqlda.stringSearch}})),Object(u["c"])(["storeqlda/getListDataBGia","storeqlda/arrBaoGiaSearch","currentUserPersonalInfo","storeqlda/currentUser"])),{},{dataArrBaoGiaSerch:function(){return this["storeqlda/arrBaoGiaSearch"]}}),watch:{dataArr:function(){},selectedThang:function(){this.selectedThang?(this.isQuyDisabled=!0,this.isDayDisabled=!0):(this.isQuyDisabled=!1,this.isDayDisabled=!1)},selectedQuy:function(){this.selectedQuy?(this.isMonthDisabled=!0,this.isDayDisabled=!0):(this.isMonthDisabled=!1,this.isDayDisabled=!1)},selectedDay:function(){this.selectedDay?(this.isQuyDisabled=!0,this.isMonthDisabled=!0):(this.isQuyDisabled=!1,this.isMonthDisabled=!1)},selectedTinh:function(){}},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["storeqlda/getAllListDataBaoGia","storeqlda/getListDataBaoGiaHasPaging","storeqlda/createBaoGia","storeqlda/updateDataGiaVatTuWithId"])),{},{dataArr:function(t){var e=this;this["storeqlda/getListDataBaoGiaHasPaging"](t).then((function(t){e.dataArrBaoGia=t.data.data,e.pagination=t.data,e.rows=t.data.total}))},handleChange:function(t){this.selectedFile=t.target.files[0]},importExcelBaoGia:function(){var t=this;if(this.selectedFile&&this.selectedTinh&&this.selectedKhuVuc&&(this.selectedDay||this.selectedThang||this.selectedQuy)){var e=new d.a.Workbook,a=[],n=new FileReader;n.readAsBinaryString(this.selectedFile),n.onload=function(){var l=n.result;e.xlsx.load(l).then((function(){var n=e.getWorksheet(1);n.eachRow((function(t){var e=t.values.filter((function(t){return void 0!=t}));a.push(e)}));var l=0,i="",u="",s="",c=a[0];c=c.map((function(t){return Object(h["a"])(t).replace(/ /g,"").toLowerCase()}));var o=["mavattu","tenvattu","donvi","giavattu","nguon","ghichu","tinh","tacgia"];n.eachRow((function(e){var a="";e.eachCell({includeEmpty:!0},(function(e,n){n<=c.length&&("giavattu"===c[l]?(t.isMonthDisabled||(a=t.selectedThang),t.isQuyDisabled||(a=t.selectedQuy),t.isDayDisabled||(a=t.selectedDay),i='"'.concat(c[l],'":"').concat(a,",").concat(t.selectedKhuVuc,":").concat(e.value,'",'),u+=i,l++,a=""):(i='"'.concat(c[l],'":"').concat(null!==e.value&&"number"!==typeof e.value?e.value.replace(/\\/g,"").replace(/"/g,"''"):e.value,'",'),u+=i,l++,a=""))})),t.isMonthDisabled||(a=t.selectedThang),t.isQuyDisabled||(a=t.selectedQuy),t.isDayDisabled||(a=t.selectedDay),i='"tinh":"'.concat(t.selectedTinh,'",'),u+=i,i='"vote_mark":"'.concat(a,",").concat(t.selectedKhuVuc,",vote:0|mark:").concat(t.markCost,'"'),u+=i,u="{".concat(u,"},"),s+=u,u="",l=0})),s=s.substring(0,s.length-1),s="[".concat(s,"]");var r=JSON.parse(s);for(var d in r.shift(),r){var v=Object.keys(r[d]);for(var g in o)v.includes(o[g])||(r[d][o[g]]=null)}s=JSON.stringify(r);var b={tempFinalRs:s,idUserImport:t.currentUserPersonalInfo.user.id};t["storeqlda/createBaoGia"](b).then((function(e){!1===e.ok?alert(e.error):!0===e.data.exist?confirm("Báo giá này đã có trong cơ sở dữ liêu. Bạn có muốn ghi đè các dữ liệu này không?")?(b={tempFinalRs:s,idUserImport:t.currentUserPersonalInfo.user.id,agreeOverride:1},t["storeqlda/createBaoGia"](b).then((function(t){return alert(t.data.message)}))):(b={tempFinalRs:s,idUserImport:t.currentUserPersonalInfo.user.id,agreeOverride:2},t["storeqlda/createBaoGia"](b)):alert(e.data.message)}))})).catch((function(t){console.log(t)}))}}else alert("Bạn chưa chọn file import dữ liệu, hoặc bạn chưa chọn tỉnh hoặc khu vực hoặc báo giá theo tháng quý hoặc ngày")},getParentSelect:function(t,e){while(t.parentElement){var a=t.parentElement;if(a.matches(e))return a;t=a}},hadleClickMaDM:function(t){t.target.setAttribute("contenteditable","true")},hadleClickTenMaDM:function(t){t.target.setAttribute("contenteditable","true")},handleSave:function(t){var e=this,a=this.getParentSelect(t.target,".row_table_note"),n=a.querySelector(".ma_vat_tu").innerText,l=a.querySelector(".ten_vat_tu").innerText,i=a.querySelector(".don_vi").innerText,u=a.querySelector(".gia_vat_tu").innerText,s=a.querySelector(".nguon").innerText,c=a.querySelector(".ghi_chu").innerText,o=a.querySelector(".tinh").innerText,r=a.querySelector(".tac_gia").innerText,d=a.querySelector(".id_vat_tu").innerText,h=this["storeqlda/currentUser"].id,v={maVatTu:n,tenVatTu:l,donVi:i,giaVatTu:u,ghiChu:c,nguon:s,tinh:o,tacGia:r,idVatTu:d,idUser:h};this["storeqlda/updateDataGiaVatTuWithId"](v).then((function(t){!1===t.ok&&alert(t.error),e["storeqlda/getAllListDataBaoGia"]()}))}})},g=v,b=(a("e48c"),a("2877")),f=Object(b["a"])(g,c,o,!1,null,"33a4beff",null),x=f.exports,_={name:"giavattu",components:{Giavattu:x},data:function(){return{tabIndex:0}},computed:Object(i["a"])(Object(i["a"])({},Object(u["c"])(["layoutConfig"])),{},{config:function(){return this.layoutConfig()}}),mounted:function(){this.$store.dispatch(s["a"],[{title:"Bảng giá vật tư"}])},destroyed:function(){localStorage.removeItem("builderTab")},methods:{reset:function(t){t.preventDefault(),localStorage.removeItem("config"),window.location.reload()},submit:function(t){t.preventDefault(),localStorage.setItem("config",JSON.stringify(this.config)),window.location.reload()}}},T=_,m=(a("2a3e"),Object(b["a"])(T,n,l,!1,null,"1be6709a",null));e["default"]=m.exports},c8ae:function(t,e,a){},e48c:function(t,e,a){"use strict";a("0531")}}]);
//# sourceMappingURL=chunk-4fe1701c.2d6015af.js.map