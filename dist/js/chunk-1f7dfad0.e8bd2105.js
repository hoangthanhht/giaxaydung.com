(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f7dfad0"],{"10eb":function(e,t,a){"use strict";a("3889")},"18ec":function(e,t,a){},3889:function(e,t,a){},"717b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("MaterialCostForGuest")],1)},n=[],s=a("5530"),l=a("2f62"),u=a("25a6"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card card-custom card-stretch gutter-b"},[a("div",{staticClass:"control_bao_gia"},[a("div",[a("div",{staticClass:"select-cbb"},[a("div",[a("b-form-select",{attrs:{options:e.tinh},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[e._v("-- Chọn tỉnh thành --")])]},proxy:!0}]),model:{value:e.selectedTinh,callback:function(t){e.selectedTinh=t},expression:"selectedTinh"}})],1),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedKhuVuc,expression:"selectedKhuVuc"}],staticClass:"form-control user_email",attrs:{type:"text",placeholder:"- Nhập khu vực up giá -"},domProps:{value:e.selectedKhuVuc},on:{input:function(t){t.target.composing||(e.selectedKhuVuc=t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.markCost,expression:"markCost"}],staticStyle:{height:"34px",border:"0.3px solid"},attrs:{type:"text",placeholder:"Nhập điểm báo giá",name:"birthday"},domProps:{value:e.markCost},on:{input:function(t){t.target.composing||(e.markCost=t.target.value)}}})]),a("div",[a("b-form-select",{attrs:{options:e.loaibg},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[e._v("-- Chọn loại báo giá --")])]},proxy:!0}]),model:{value:e.selectedLoaiBg,callback:function(t){e.selectedLoaiBg=t},expression:"selectedLoaiBg"}})],1)]),a("div",{staticClass:"select-cbb pt-5"},[a("div",[a("b-form-select",{attrs:{options:e.thang,disabled:e.isMonthDisabled},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[e._v("-- Báo giá theo tháng--")])]},proxy:!0}]),model:{value:e.selectedThang,callback:function(t){e.selectedThang=t},expression:"selectedThang"}})],1),a("div",[a("b-form-select",{attrs:{options:e.quy,disabled:e.isQuyDisabled},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[e._v("-- Báo giá theo quý--")])]},proxy:!0}]),model:{value:e.selectedQuy,callback:function(t){e.selectedQuy=t},expression:"selectedQuy"}})],1),a("div",[a("form",{attrs:{action:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedDay,expression:"selectedDay"}],staticStyle:{height:"34px",border:"0.3px solid"},attrs:{type:"date",id:"birthday",name:"birthday",placeholder:"Nhập ngày up giá",disabled:e.isDayDisabled},domProps:{value:e.selectedDay},on:{input:function(t){t.target.composing||(e.selectedDay=t.target.value)}}})])]),a("div",[a("b-form-select",{attrs:{options:e.khuvucView},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[e._v("-- Chọn khu vực xem bao giá --")])]},proxy:!0}]),model:{value:e.selectedKhuVucView,callback:function(t){e.selectedKhuVucView=t},expression:"selectedKhuVucView"}})],1)]),a("div",{staticClass:"select-cbb pt-5"},[a("div",[a("b-form-select",{attrs:{options:e.thangView,disabled:e.isMonthDisabledView},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[e._v("-- Chọn tháng xem báo giá --")])]},proxy:!0}]),model:{value:e.selectedThangView,callback:function(t){e.selectedThangView=t},expression:"selectedThangView"}})],1),a("div",[a("b-form-select",{attrs:{options:e.quyView,disabled:e.isQuyDisabledView},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[e._v("-- Chọn quý xem bao giá--")])]},proxy:!0}]),model:{value:e.selectedQuyView,callback:function(t){e.selectedQuyView=t},expression:"selectedQuyView"}})],1),a("div",[a("b-form-select",{attrs:{options:e.dayView,disabled:e.isDayDisabledView},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[e._v("-- Chọn ngày xem báo giá --")])]},proxy:!0}]),model:{value:e.selectedDayView,callback:function(t){e.selectedDayView=t},expression:"selectedDayView"}})],1),a("div",[a("b-form-select",{attrs:{options:e.tinhView},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[e._v("-- Chọn tỉnh xem báo giá --")])]},proxy:!0}]),model:{value:e.selectedTinhView,callback:function(t){e.selectedTinhView=t},expression:"selectedTinhView"}})],1)])]),a("div",{staticClass:"import_excel_bao_gia"},[a("div",[a("b-button",{staticClass:"mb-2 add-cv icon-tvgs",attrs:{size:"sm"},on:{click:e.importExcelBaoGia}},[e._v(" Up báo giá ")])],1),a("div",[a("b-form-file",{staticClass:"mt-3",attrs:{plain:""},on:{change:e.handleChange}})],1),a("div",[a("b-button",{staticClass:"mb-2 add-cv icon-tvgs",attrs:{size:"sm"},on:{click:e.handleXemBG}},[e._v(" Xem báo giá ")])],1)])]),e.stringSearch?a("div",{staticClass:"card-body pt-0 pb-3"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"\n              table\n              table-head-custom\n              table-vertical-center\n              table-head-bg\n              table-borderless\n            "},[e._m(0),0!==e.dataArrBaoGiaSerch.length?a("tbody",[e._l(e.dataArrBaoGiaSerch,(function(t,i){return[a("tr",{key:i,staticClass:"row_table_note"},[a("td",[a("span",{staticClass:"ma_vat_tu text-muted font-weight-bold"},[e._v(e._s(null!==t.maVatTu?t.maVatTu:"null"))])]),a("td",[a("span",{staticClass:"ten_vat_tu text-muted font-weight-bold"},[e._v(e._s(null!==t.tenVatTu?t.tenVatTu:"null"))])]),a("td",[a("span",{staticClass:"don_vi text-muted font-weight-bold"},[e._v(e._s(null!==t.donVi?t.donVi:"null"))])]),a("td",[a("span",{staticClass:"gia_vat_tu text-muted font-weight-bold"},[e._v(e._s(null!==t.giaVatTu?t.giaVatTu:"null"))])]),a("td",[a("span",{staticClass:"khu_vuc text-muted font-weight-bold"},[e._v(e._s(null!==t.khuVuc?t.khuVuc:"null"))])]),a("td",[a("span",{staticClass:"thoi_diem text-muted font-weight-bold"},[e._v(e._s(null!==t.thoiDiem?t.thoiDiem:"null"))])]),a("td",[a("span",{staticClass:"nguon text-muted font-weight-bold"},[e._v(e._s(null!==t.nguon?t.nguon:"null"))])]),a("td",[a("span",{staticClass:"ghi_chu text-muted font-weight-bold"},[e._v(e._s(null!==t.ghiChu?t.ghiChu:"null"))])]),a("td",[a("span",{staticClass:"tinh text-muted font-weight-bold"},[e._v(e._s(null!==t.tinh?t.tinh:"null"))])]),a("td",[a("span",{staticClass:"tac_gia text-muted font-weight-bold"},[e._v(e._s(null!==t.tacGia?t.tacGia:"null"))])])])]}))],2):e._e()])])])]):a("div",{staticClass:"card-body pt-0 pb-3"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"\n              table\n              table-head-custom\n              table-vertical-center\n              table-head-bg\n              table-borderless\n            "},[e._m(1),0!==e.dataArr.length?a("tbody",[e._l(e.dataArrBaoGia,(function(t,i){return[a("tr",{key:i,staticClass:"row_table_note"},[a("td",[a("span",{staticClass:"ma_vat_tu text-muted font-weight-bold"},[e._v(e._s(null!==t.maVatTu?t.maVatTu:"null"))])]),a("td",[a("span",{staticClass:"ten_vat_tu text-muted font-weight-bold"},[e._v(e._s(null!==t.tenVatTu?t.tenVatTu:"null"))])]),a("td",[a("span",{staticClass:"don_vi text-muted font-weight-bold"},[e._v(e._s(null!==t.donVi?t.donVi:"null"))])]),a("td",[a("span",{staticClass:"gia_vat_tu text-muted font-weight-bold"},[e._v(e._s(null!==t.giaVatTu?t.giaVatTu:"null"))])]),a("td",[a("span",{staticClass:"khu_vuc text-muted font-weight-bold"},[e._v(e._s(null!==t.khuVuc?t.khuVuc:"null"))])]),a("td",[a("span",{staticClass:"thoi_diem text-muted font-weight-bold"},[e._v(e._s(null!==t.thoiDiem?t.thoiDiem:"null"))])]),a("td",[a("span",{staticClass:"nguon text-muted font-weight-bold"},[e._v(e._s(null!==t.nguon?t.nguon:"null"))])]),a("td",[a("span",{staticClass:"ghi_chu text-muted font-weight-bold"},[e._v(e._s(null!==t.ghiChu?t.ghiChu:"null"))])]),a("td",[a("span",{staticClass:"tinh text-muted font-weight-bold"},[e._v(e._s(null!==t.tinh?t.tinh:"null"))])]),a("td",[a("span",{staticClass:"tac_gia text-muted font-weight-bold"},[e._v(e._s(null!==t.tacGia?t.tacGia:"null"))])])])]}))],2):e._e()])])])]),a("b-pagination",{attrs:{align:"right",pills:"",perPage:"20","total-rows":e.rows,size:"lg"},on:{"page-click":function(t){return e.dataArr(e.currentPage)}},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",{staticClass:"text-left"},[a("th",[e._v("mã vật tư")]),a("th",[e._v("tên vật tư")]),a("th",[e._v("đơn vị")]),a("th",[e._v("giá")]),a("th",[e._v("khu vực")]),a("th",[e._v("thời điểm")]),a("th",[e._v("nguồn")]),a("th",[e._v("ghi chú")]),a("th",[e._v("tỉnh")]),a("th",[e._v("người đăng")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",{staticClass:"text-left"},[a("th",[e._v("mã vật tư")]),a("th",[e._v("tên vật tư")]),a("th",[e._v("đơn vị")]),a("th",[e._v("giá")]),a("th",[e._v("khu vực")]),a("th",[e._v("thời điểm")]),a("th",[e._v("nguồn")]),a("th",[e._v("ghi chú")]),a("th",[e._v("tỉnh")]),a("th",[e._v("người đăng")])])])}],r=(a("ac1f"),a("841c"),a("4de4"),a("d3b7"),a("ddb0"),a("d81d"),a("5319"),a("99af"),a("b64b"),a("caad"),a("2532"),a("e8ae")),h=a.n(r),d=a("3019"),v={name:"Material_cost_for_guest",components:{},data:function(){return{rows:100,currentPage:1,isMonthDisabled:!1,isQuyDisabled:!1,isDayDisabled:!1,isMonthDisabledView:!1,isQuyDisabledView:!1,isDayDisabledView:!1,selectedTinh:null,tinh:[{text:"An Giang",value:"AG"},{text:"Bà Rịa – Vũng Tàu",value:"BV"},{text:"Bạc Liêu",value:"BL"},{text:"Bắc Kạn",value:"BK"},{text:"Bắc Giang",value:"BG"},{text:"Bắc Ninh",value:"BN"},{text:"Bến Tre",value:"BT"},{text:"Bình Dương",value:"BD"},{text:"Bình Định",value:"BĐ"},{text:"Bình Phước",value:"BP"},{text:"Bình Thuận",value:"BTh"},{text:"Cà Mau",value:"CM"},{text:"Cao Bằng",value:"CB"},{text:"Cần Thơ",value:"CT"},{text:"Đà Nẵng",value:"ĐNa"},{text:"Đắk Lắk",value:"ĐL"},{text:"Đắk Nông",value:"ĐNo"},{text:"Điện Biên",value:"ĐB"},{text:"Đồng Nai",value:"ĐN"},{text:"Đồng Tháp",value:"ĐT"},{text:"Gia Lai",value:"GL"},{text:"Hà Giang",value:"HG"},{text:"Hà Nam",value:"HNa"},{text:"Hà Nội",value:"HN"},{text:"Hà Tĩnh",value:"HT"},{text:"Hải Dương",value:"HD"},{text:"Hải Phòng",value:"HP"},{text:"Hậu Giang",value:"HGi"},{text:"Hòa Bình",value:"HB"},{text:"Thành phố Hồ Chí Minh",value:"SG"},{text:"Hưng Yên",value:"HY"},{text:"Khánh Hoà",value:"KH"},{text:"Kiên Giang",value:"KG"},{text:"Kon Tum",value:"KT"},{text:"Lai Châu",value:"LC"},{text:"Lạng Sơn",value:"LS"},{text:"Lào Cai",value:"LCa"},{text:"Lâm Đồng",value:"LĐ"},{text:"Long An",value:"LA"},{text:"Nam Định",value:"NĐ"},{text:"Nghệ An",value:"NA"},{text:"Ninh Bình",value:"NB"},{text:"Ninh Thuận",value:"NT"},{text:"Phú Thọ",value:"PT"},{text:"Phú Yên",value:"PY"},{text:"Quảng Bình",value:"QB"},{text:"Quảng Nam",value:"QNa"},{text:"Quảng Ngãi",value:"QNg"},{text:"Quảng Ninh",value:"QN"},{text:"Quảng Trị",value:"QT"},{text:"Sóc Trăng",value:"ST"},{text:"Sơn La",value:"SL"},{text:"Tây Ninh",value:"TN"},{text:"Thái Bình",value:"TB"},{text:"Thái Nguyên",value:"TNg"},{text:"Thanh Hóa",value:"TH"},{text:"Thừa Thiên Huế",value:"TTH"},{text:"Tiền Giang",value:"TG"},{text:"Trà Vinh",value:"TV"},{text:"Tuyên Quang",value:"TQ"},{text:"Vĩnh Long",value:"VL"},{text:"Vĩnh Phúc",value:"VP"},{text:"Yên Bái",value:"YB"}],selectedTinhView:null,tinhView:[{value:"",text:""}],selectedKhuVuc:"",selectedKhuVucView:null,khuvucView:[{value:"",text:""}],markCost:null,selectedLoaiBg:null,loaibg:[{value:"Báo giá vật tư",text:"Báo giá vật tư"}],selectedDay:null,selectedDayView:null,dayView:[],selectedThang:null,thang:[{value:"Thang1",text:"Thang 1"},{value:"Thang2",text:"Thang 2"},{value:"Thang3",text:"Thang 3"},{value:"Thang4",text:"Thang 4"},{value:"Thang5",text:"Thang 5"},{value:"Thang6",text:"Thang 6"},{value:"Thang7",text:"Thang 7"},{value:"Thang8",text:"Thang 8"},{value:"Thang9",text:"Thang 9"},{value:"Thang10",text:"Thang 10"},{value:"Thang11",text:"Thang 11"},{value:"Thang12",text:"Thang 12"}],selectedThangView:null,thangView:[{value:"",text:""}],selectedQuy:null,quy:[{value:"Quy I",text:"Quy I"},{value:"Quy II",text:"Quy II"},{value:"Quy III",text:"Quy III"},{value:"Quy IV",text:"Quy IV"}],selectedQuyView:null,quyView:[{value:"",text:""}],dataArrBaoGia:[]}},created:function(){var e=this,t={check:0,idUserImport:this.currentUserPersonalInfo.user.id};this["storeqlda/getInfoTinhBaoGiaOfUserGuest"](t).then((function(t){e.tinhView=t.data.tinh}))},mounted:function(){},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(l["d"])({stringSearch:function(e){return e.storeqlda.stringSearch}})),Object(l["c"])(["storeqlda/getListDataBGia","storeqlda/arrBaoGiaSearchForApprove","currentUserPersonalInfo","storeqlda/currentUser"])),{},{dataArrBaoGiaSerch:function(){return this["storeqlda/arrBaoGiaSearchForApprove"]}}),watch:{selectedKhuVucView:function(){var e=this,t={check:0,idUserImport:this.currentUserPersonalInfo.user.id,tinh:this.selectedTinhView,khuvuc:this.selectedKhuVucView};this["storeqlda/getThoiDiemBaoGiaOfUserGuest"](t).then((function(t){for(var a in e.thangView=[],e.quyView=[],e.dayView=[],t.data.thoidiem)t.data.thoidiem[a].value.search("Thang")>=0?e.thangView.push(t.data.thoidiem[a]):t.data.thoidiem[a].value.search("Quy")>=0?e.quyView.push(t.data.thoidiem[a]):e.dayView.push(t.data.thoidiem[a])}))},selectedThang:function(){this.selectedThang?(this.isQuyDisabled=!0,this.isDayDisabled=!0):(this.isQuyDisabled=!1,this.isDayDisabled=!1)},selectedQuy:function(){this.selectedQuy?(this.isMonthDisabled=!0,this.isDayDisabled=!0):(this.isMonthDisabled=!1,this.isDayDisabled=!1)},selectedDay:function(){this.selectedDay?(this.isQuyDisabled=!0,this.isMonthDisabled=!0):(this.isQuyDisabled=!1,this.isMonthDisabled=!1)},selectedThangView:function(){this.selectedThangView?(this.isQuyDisabledView=!0,this.isDayDisabledView=!0):(this.isQuyDisabledView=!1,this.isDayDisabledView=!1)},selectedQuyView:function(){this.selectedQuyView?(this.isMonthDisabledView=!0,this.isDayDisabledView=!0):(this.isMonthDisabledView=!1,this.isDayDisabledView=!1)},selectedDayView:function(){this.selectedDayView?(this.isQuyDisabledView=!0,this.isMonthDisabledView=!0):(this.isQuyDisabledView=!1,this.isMonthDisabledView=!1)},selectedTinhView:function(){var e=this,t={check:0,idUserImport:this.currentUserPersonalInfo.user.id,tinh:this.selectedTinhView};this["storeqlda/getInfoBaoGiaOfUserGuest"](t).then((function(t){e.khuvucView=t.data.khuvuc}))}},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["storeqlda/guestCreateBaoGia","storeqlda/getAllListDataBaoGiaGuest","storeqlda/updateDataGiaVatTuGuestUp","storeqlda/approveGiaVtGuest","storeqlda/getUserGuestUpBgia","storeqlda/getInfoBaoGiaOfUserGuest","storeqlda/getInfoTinhBaoGiaOfUserGuest","storeqlda/viewBaoGiaWithSelecttionOfGuest","storeqlda/getThoiDiemBaoGiaOfUserGuest"])),{},{dataArr:function(e){var t=this,a="";this.isMonthDisabledView||(a=this.selectedThangView),this.isQuyDisabledView||(a=this.selectedQuyView),this.isDayDisabledView||(a=this.selectedDayView);var i={check:0,user_id:this.currentUserPersonalInfo.user.id,tinh:this.selectedTinhView,khuvuc:this.selectedKhuVucView,thoidiem:a,page:e};this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](i).then((function(e){t.dataArrBaoGia=e.data.data,t.pagination=e.data,t.rows=e.data.total}))},handleChange:function(e){this.selectedFile=e.target.files[0]},handleXemBG:function(){var e=this,t="";this.isMonthDisabledView||(t=this.selectedThangView),this.isQuyDisabledView||(t=this.selectedQuyView),this.isDayDisabledView||(t=this.selectedDayView);var a={check:0,user_id:this.currentUserPersonalInfo.user.id,idUserView:this.currentUserPersonalInfo.user.id,tinh:this.selectedTinhView,khuvuc:this.selectedKhuVucView,thoidiem:t};this.selectedTinhView&&this.selectedKhuVucView&&(this.selectedDayView||this.selectedThangView||this.selectedQuyView)?(this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](a).then((function(t){e.dataArrBaoGia=t.data.data,e.pagination=t.data,e.rows=t.data.total})),this["storeqlda/getAllListDataBaoGiaGuest"](a)):alert("Bạn chưa chọn người up báo giá hoặc chưa chọn tỉnh hoặc khu vực hoặc báo giá theo tháng quý hoặc ngày")},importExcelBaoGia:function(){var e=this;if(confirm("Bạn có chắc chắn muốn up dữ liệu này không?"))if(this.selectedFile&&this.selectedTinh&&this.selectedKhuVuc&&(this.selectedDay||this.selectedThang||this.selectedQuy)){var t=new h.a.Workbook,a=[],i=new FileReader;i.readAsBinaryString(this.selectedFile),i.onload=function(){var n=i.result;t.xlsx.load(n).then((function(){var i=t.getWorksheet(1);i.eachRow((function(e){var t=e.values.filter((function(e){return void 0!=e}));a.push(t)}));var n=0,s="",l="",u="",o=a[0];o=o.map((function(e){return Object(d["a"])(e).replace(/ /g,"").toLowerCase()}));var c=["mavattu","tenvattu","donvi","giavattu","nguon","ghichu","tinh","tacgia"];i.eachRow((function(t){var a="";t.eachCell({includeEmpty:!0},(function(t,i){i<=o.length&&("giavattu"===o[n]?(e.isMonthDisabled||(a=e.selectedThang),e.isQuyDisabled||(a=e.selectedQuy),e.isDayDisabled||(a=e.selectedDay),s='"'.concat(o[n],'":"').concat(a,",").concat(e.selectedKhuVuc,":").concat(t.value,'",'),l+=s,n++,a=""):(s='"'.concat(o[n],'":"').concat(null!==t.value&&"number"!==typeof t.value?t.value.replace(/\\/g,"").replace(/"/g,"''"):t.value,'",'),l+=s,n++))})),e.isMonthDisabled||(a=e.selectedThang),e.isQuyDisabled||(a=e.selectedQuy),e.isDayDisabled||(a=e.selectedDay),s='"tinh":"'.concat(e.selectedTinh,'",'),l+=s,s='"vote_mark":"'.concat(a,",").concat(e.selectedKhuVuc,",vote:0|mark:").concat(e.markCost,'"'),l+=s,l="{".concat(l,"},"),u+=l,l="",n=0})),u=u.substring(0,u.length-1),u="[".concat(u,"]");var r=JSON.parse(u);for(var h in r.shift(),r){var v=Object.keys(r[h]);for(var g in c)if(!v.includes(c[g])){r[h][c[g]]=null;break}}u=JSON.stringify(r);var f={tempFinalRs:u,idUserImport:e.currentUserPersonalInfo.user.id};e["storeqlda/guestCreateBaoGia"](f).then((function(t){if(console.log("data lan 1",1),!1===t.ok)alert(t.error);else if(!0===t.data.exist)confirm("Báo giá này đã có trong cơ sở dữ liêu. Bạn có muốn ghi đè các dữ liệu này không?")?(f={tempFinalRs:u,idUserImport:e.currentUserPersonalInfo.user.id,agreeOverride:1},e["storeqlda/guestCreateBaoGia"](f).then((function(e){return alert(e.data.message)})).then((function(){var t={check:0,idUserImport:e.currentUserPersonalInfo.user.id};e["storeqlda/getInfoTinhBaoGiaOfUserGuest"](t).then((function(t){e.tinhView=t.data.tinh}))}))):(f={tempFinalRs:u,idUserImport:e.currentUserPersonalInfo.user.id,agreeOverride:2},e["storeqlda/guestCreateBaoGia"](f).then((function(){var t={check:0,idUserImport:e.currentUserPersonalInfo.user.id};e["storeqlda/getInfoTinhBaoGiaOfUserGuest"](t).then((function(t){e.tinhView=t.data.tinh}))})));else{alert(t.data.message);var a={check:0,idUserImport:e.currentUserPersonalInfo.user.id};e["storeqlda/getInfoTinhBaoGiaOfUserGuest"](a).then((function(t){e.tinhView=t.data.tinh}))}})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}}else alert("Bạn chưa chọn file import dữ liệu, hoặc bạn chưa chọn tỉnh hoặc khu vực hoặc báo giá theo tháng quý hoặc ngày")},getParentSelect:function(e,t){while(e.parentElement){var a=e.parentElement;if(a.matches(t))return a;e=a}},hadleClickMaDM:function(e){e.target.setAttribute("contenteditable","true")},hadleClickTenMaDM:function(e){e.target.setAttribute("contenteditable","true")},handleSave:function(e,t){var a=this,i=this.getParentSelect(e.target,".row_table_note"),n=i.querySelector(".ma_vat_tu").innerText,s=i.querySelector(".ten_vat_tu").innerText,l=i.querySelector(".don_vi").innerText,u=i.querySelector(".gia_vat_tu").innerText,o=i.querySelector(".nguon").innerText,c=i.querySelector(".ghi_chu").innerText,r=i.querySelector(".tinh").innerText,h=i.querySelector(".tac_gia").innerText,d=this.dataArrBaoGia[t].id,v=this["storeqlda/currentUser"].id,g={maVatTu:n,tenVatTu:s,donVi:l,giaVatTu:u,ghiChu:c,nguon:o,tinh:r,tacGia:h,idVatTu:d,idUser:v};this["storeqlda/updateDataGiaVatTuWithId"](g).then((function(e){!1===e.ok&&alert(e.error),a["storeqlda/getAllListDataBaoGia"]()}))}})},g=v,f=(a("8c3b"),a("2877")),b=Object(f["a"])(g,o,c,!1,null,"18e53146",null),m=b.exports,p={name:"giavattu",components:{MaterialCostForGuest:m},data:function(){return{tabIndex:0}},computed:Object(s["a"])(Object(s["a"])({},Object(l["c"])(["layoutConfig"])),{},{config:function(){return this.layoutConfig()}}),mounted:function(){this.$store.dispatch(u["a"],[{title:"Bảng giá vật tư"}])},destroyed:function(){localStorage.removeItem("builderTab")},methods:{reset:function(e){e.preventDefault(),localStorage.removeItem("config"),window.location.reload()},submit:function(e){e.preventDefault(),localStorage.setItem("config",JSON.stringify(this.config)),window.location.reload()}}},x=p,y=(a("10eb"),Object(f["a"])(x,i,n,!1,null,"6a587dbc",null));t["default"]=y.exports},"8c3b":function(e,t,a){"use strict";a("18ec")}}]);
//# sourceMappingURL=chunk-1f7dfad0.e8bd2105.js.map