(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4bca484"],{"10eb":function(t,e,a){"use strict";a("3889")},3889:function(t,e,a){},"503b":function(t,e,a){},"717b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("MaterialCostForGuest")],1)},n=[],s=a("5530"),l=a("2f62"),u=a("25a6"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-custom card-stretch gutter-b"},[a("div",{staticClass:"control_bao_gia"},[a("div",[a("div",{staticClass:"select-cbb"},[a("div",[a("b-form-select",{attrs:{options:t.tinh},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Chọn tỉnh thành --")])]},proxy:!0}]),model:{value:t.selectedTinh,callback:function(e){t.selectedTinh=e},expression:"selectedTinh"}})],1),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedKhuVuc,expression:"selectedKhuVuc"}],staticClass:"form-control user_email",attrs:{type:"text",placeholder:"- Nhập khu vực up giá -"},domProps:{value:t.selectedKhuVuc},on:{input:function(e){e.target.composing||(t.selectedKhuVuc=e.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.markCost,expression:"markCost"}],staticStyle:{height:"34px",border:"0.3px solid"},attrs:{type:"text",placeholder:"Nhập điểm báo giá",name:"birthday"},domProps:{value:t.markCost},on:{input:function(e){e.target.composing||(t.markCost=e.target.value)}}})]),a("div",[a("b-form-select",{attrs:{options:t.loaibg},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Chọn loại báo giá --")])]},proxy:!0}]),model:{value:t.selectedLoaiBg,callback:function(e){t.selectedLoaiBg=e},expression:"selectedLoaiBg"}})],1)]),a("div",{staticClass:"select-cbb pt-5"},[a("div",[a("b-form-select",{attrs:{options:t.thang,disabled:t.isMonthDisabled},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[t._v("-- Báo giá theo tháng--")])]},proxy:!0}]),model:{value:t.selectedThang,callback:function(e){t.selectedThang=e},expression:"selectedThang"}})],1),a("div",[a("b-form-select",{attrs:{options:t.quy,disabled:t.isQuyDisabled},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[t._v("-- Báo giá theo quý--")])]},proxy:!0}]),model:{value:t.selectedQuy,callback:function(e){t.selectedQuy=e},expression:"selectedQuy"}})],1),a("div",[a("form",{attrs:{action:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedDay,expression:"selectedDay"}],staticStyle:{height:"34px",border:"0.3px solid"},attrs:{type:"date",id:"birthday",name:"birthday",placeholder:"Nhập ngày up giá",disabled:t.isDayDisabled},domProps:{value:t.selectedDay},on:{input:function(e){e.target.composing||(t.selectedDay=e.target.value)}}})])]),a("div",[a("b-form-select",{attrs:{options:t.khuvucView},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[t._v("-- Chọn khu vực xem bao giá --")])]},proxy:!0}]),model:{value:t.selectedKhuVucView,callback:function(e){t.selectedKhuVucView=e},expression:"selectedKhuVucView"}})],1)]),a("div",{staticClass:"select-cbb pt-5"},[a("div",[a("b-form-select",{attrs:{options:t.thangView,disabled:t.isMonthDisabledView},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[t._v("-- Chọn tháng xem báo giá --")])]},proxy:!0}]),model:{value:t.selectedThangView,callback:function(e){t.selectedThangView=e},expression:"selectedThangView"}})],1),a("div",[a("b-form-select",{attrs:{options:t.quyView,disabled:t.isQuyDisabledView},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[t._v("-- Chọn quý xem bao giá--")])]},proxy:!0}]),model:{value:t.selectedQuyView,callback:function(e){t.selectedQuyView=e},expression:"selectedQuyView"}})],1),a("div",[a("b-form-select",{attrs:{options:t.dayView,disabled:t.isDayDisabledView},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[t._v("-- Chọn ngày xem báo giá --")])]},proxy:!0}]),model:{value:t.selectedDayView,callback:function(e){t.selectedDayView=e},expression:"selectedDayView"}})],1),a("div",[a("b-form-select",{attrs:{options:t.tinhView},scopedSlots:t._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Chọn tỉnh xem báo giá --")])]},proxy:!0}]),model:{value:t.selectedTinhView,callback:function(e){t.selectedTinhView=e},expression:"selectedTinhView"}})],1)])]),a("div",{staticClass:"import_excel_bao_gia"},[a("div",[a("b-button",{staticClass:"mb-2 add-cv icon-tvgs",attrs:{size:"sm"},on:{click:t.importExcelBaoGia}},[t._v(" Up báo giá ")])],1),a("div",[a("b-form-file",{staticClass:"mt-3",attrs:{plain:""},on:{change:t.handleChange}})],1),a("div",[a("b-button",{staticClass:"mb-2 add-cv icon-tvgs",attrs:{size:"sm"},on:{click:t.handleXemBG}},[t._v(" Xem báo giá ")])],1)])]),t.stringSearch?a("div",{staticClass:"card-body pt-0 pb-3"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"\n              table\n              table-head-custom\n              table-vertical-center\n              table-head-bg\n              table-borderless\n            "},[t._m(0),0!==t.dataArrBaoGiaSerch.length?a("tbody",[t._l(t.dataArrBaoGiaSerch,(function(e,i){return[a("tr",{key:i,staticClass:"row_table_note"},[a("td",{staticStyle:{display:"none"}},[a("span",{staticClass:"id_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.id?e.id:"null"))])]),a("td",[a("span",{staticClass:"ma_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.maVatTu?e.maVatTu:"null"))])]),a("td",[a("span",{staticClass:"ten_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.tenVatTu?e.tenVatTu:"null"))])]),a("td",[a("span",{staticClass:"don_vi text-muted font-weight-bold"},[t._v(t._s(null!==e.donVi?e.donVi:"null"))])]),a("td",[a("span",{staticClass:"gia_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.giaVatTu?e.giaVatTu:"null"))])]),a("td",[a("span",{staticClass:"khu_vuc text-muted font-weight-bold"},[t._v(t._s(null!==e.khuVuc?e.khuVuc:"null"))])]),a("td",[a("span",{staticClass:"thoi_diem text-muted font-weight-bold"},[t._v(t._s(null!==e.thoiDiem?e.thoiDiem:"null"))])]),a("td",[a("span",{staticClass:"nguon text-muted font-weight-bold"},[t._v(t._s(null!==e.nguon?e.nguon:"null"))])]),a("td",[a("span",{staticClass:"ghi_chu text-muted font-weight-bold"},[t._v(t._s(null!==e.ghiChu?e.ghiChu:"null"))])]),a("td",[a("span",{staticClass:"tinh text-muted font-weight-bold"},[t._v(t._s(null!==e.tinh?e.tinh:"null"))])]),a("td",[a("span",{staticClass:"tac_gia text-muted font-weight-bold"},[t._v(t._s(null!==e.tacGia?e.tacGia:"null"))])])])]}))],2):t._e()])])])]):a("div",{staticClass:"card-body pt-0 pb-3"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"\n              table\n              table-head-custom\n              table-vertical-center\n              table-head-bg\n              table-borderless\n            "},[t._m(1),0!==t.dataArr.length?a("tbody",[t._l(t.dataArrBaoGia,(function(e,i){return[a("tr",{key:i,staticClass:"row_table_note"},[a("td",{staticStyle:{display:"none"}},[a("span",{staticClass:"id_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.id?e.id:"null"))])]),a("td",[a("span",{staticClass:"ma_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.maVatTu?e.maVatTu:"null"))])]),a("td",[a("span",{staticClass:"ten_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.tenVatTu?e.tenVatTu:"null"))])]),a("td",[a("span",{staticClass:"don_vi text-muted font-weight-bold"},[t._v(t._s(null!==e.donVi?e.donVi:"null"))])]),a("td",[a("span",{staticClass:"gia_vat_tu text-muted font-weight-bold"},[t._v(t._s(null!==e.giaVatTu?e.giaVatTu:"null"))])]),a("td",[a("span",{staticClass:"khu_vuc text-muted font-weight-bold"},[t._v(t._s(null!==e.khuVuc?e.khuVuc:"null"))])]),a("td",[a("span",{staticClass:"thoi_diem text-muted font-weight-bold"},[t._v(t._s(null!==e.thoiDiem?e.thoiDiem:"null"))])]),a("td",[a("span",{staticClass:"nguon text-muted font-weight-bold"},[t._v(t._s(null!==e.nguon?e.nguon:"null"))])]),a("td",[a("span",{staticClass:"ghi_chu text-muted font-weight-bold"},[t._v(t._s(null!==e.ghiChu?e.ghiChu:"null"))])]),a("td",[a("span",{staticClass:"tinh text-muted font-weight-bold"},[t._v(t._s(null!==e.tinh?e.tinh:"null"))])]),a("td",[a("span",{staticClass:"tac_gia text-muted font-weight-bold"},[t._v(t._s(null!==e.tacGia?e.tacGia:"null"))])])])]}))],2):t._e()])])])]),a("b-pagination",{attrs:{align:"right",pills:"",perPage:"20","total-rows":t.rows,size:"lg"},on:{"page-click":function(e){return t.dataArr(t.currentPage)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"text-left"},[a("th",{staticStyle:{display:"none"}},[t._v("Id")]),a("th",[t._v("mã vật tư")]),a("th",[t._v("tên vật tư")]),a("th",[t._v("đơn vị")]),a("th",[t._v("giá")]),a("th",[t._v("khu vực")]),a("th",[t._v("thời điểm")]),a("th",[t._v("nguồn")]),a("th",[t._v("ghi chú")]),a("th",[t._v("tỉnh")]),a("th",[t._v("người đăng")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"text-left"},[a("th",{staticStyle:{display:"none"}},[t._v("Id")]),a("th",[t._v("mã vật tư")]),a("th",[t._v("tên vật tư")]),a("th",[t._v("đơn vị")]),a("th",[t._v("giá")]),a("th",[t._v("khu vực")]),a("th",[t._v("thời điểm")]),a("th",[t._v("nguồn")]),a("th",[t._v("ghi chú")]),a("th",[t._v("tỉnh")]),a("th",[t._v("người đăng")])])])}],r=(a("ac1f"),a("841c"),a("4de4"),a("d3b7"),a("ddb0"),a("d81d"),a("5319"),a("99af"),a("b64b"),a("caad"),a("2532"),a("e8ae")),h=a.n(r),d=a("3019"),v={name:"Material_cost_for_guest",components:{},data:function(){return{rows:100,currentPage:1,isMonthDisabled:!1,isQuyDisabled:!1,isDayDisabled:!1,isMonthDisabledView:!1,isQuyDisabledView:!1,isDayDisabledView:!1,selectedTinh:null,tinh:[{text:"An Giang",value:"AG"},{text:"Bà Rịa – Vũng Tàu",value:"BV"},{text:"Bạc Liêu",value:"BL"},{text:"Bắc Kạn",value:"BK"},{text:"Bắc Giang",value:"BG"},{text:"Bắc Ninh",value:"BN"},{text:"Bến Tre",value:"BT"},{text:"Bình Dương",value:"BD"},{text:"Bình Định",value:"BĐ"},{text:"Bình Phước",value:"BP"},{text:"Bình Thuận",value:"BTh"},{text:"Cà Mau",value:"CM"},{text:"Cao Bằng",value:"CB"},{text:"Cần Thơ",value:"CT"},{text:"Đà Nẵng",value:"ĐNa"},{text:"Đắk Lắk",value:"ĐL"},{text:"Đắk Nông",value:"ĐNo"},{text:"Điện Biên",value:"ĐB"},{text:"Đồng Nai",value:"ĐN"},{text:"Đồng Tháp",value:"ĐT"},{text:"Gia Lai",value:"GL"},{text:"Hà Giang",value:"HG"},{text:"Hà Nam",value:"HNa"},{text:"Hà Nội",value:"HN"},{text:"Hà Tĩnh",value:"HT"},{text:"Hải Dương",value:"HD"},{text:"Hải Phòng",value:"HP"},{text:"Hậu Giang",value:"HGi"},{text:"Hòa Bình",value:"HB"},{text:"Thành phố Hồ Chí Minh",value:"SG"},{text:"Hưng Yên",value:"HY"},{text:"Khánh Hoà",value:"KH"},{text:"Kiên Giang",value:"KG"},{text:"Kon Tum",value:"KT"},{text:"Lai Châu",value:"LC"},{text:"Lạng Sơn",value:"LS"},{text:"Lào Cai",value:"LCa"},{text:"Lâm Đồng",value:"LĐ"},{text:"Long An",value:"LA"},{text:"Nam Định",value:"NĐ"},{text:"Nghệ An",value:"NA"},{text:"Ninh Bình",value:"NB"},{text:"Ninh Thuận",value:"NT"},{text:"Phú Thọ",value:"PT"},{text:"Phú Yên",value:"PY"},{text:"Quảng Bình",value:"QB"},{text:"Quảng Nam",value:"QNa"},{text:"Quảng Ngãi",value:"QNg"},{text:"Quảng Ninh",value:"QN"},{text:"Quảng Trị",value:"QT"},{text:"Sóc Trăng",value:"ST"},{text:"Sơn La",value:"SL"},{text:"Tây Ninh",value:"TN"},{text:"Thái Bình",value:"TB"},{text:"Thái Nguyên",value:"TNg"},{text:"Thanh Hóa",value:"TH"},{text:"Thừa Thiên Huế",value:"TTH"},{text:"Tiền Giang",value:"TG"},{text:"Trà Vinh",value:"TV"},{text:"Tuyên Quang",value:"TQ"},{text:"Vĩnh Long",value:"VL"},{text:"Vĩnh Phúc",value:"VP"},{text:"Yên Bái",value:"YB"}],selectedTinhView:null,tinhView:[{value:"",text:""}],selectedKhuVuc:"",selectedKhuVucView:null,khuvucView:[{value:"",text:""}],markCost:null,selectedLoaiBg:null,loaibg:[{value:"Báo giá vật tư",text:"Báo giá vật tư"}],selectedDay:null,selectedDayView:null,dayView:[],selectedThang:null,thang:[{value:"Thang1",text:"Thang 1"},{value:"Thang2",text:"Thang 2"},{value:"Thang3",text:"Thang 3"},{value:"Thang4",text:"Thang 4"},{value:"Thang5",text:"Thang 5"},{value:"Thang6",text:"Thang 6"},{value:"Thang7",text:"Thang 7"},{value:"Thang8",text:"Thang 8"},{value:"Thang9",text:"Thang 9"},{value:"Thang10",text:"Thang 10"},{value:"Thang11",text:"Thang 11"},{value:"Thang12",text:"Thang 12"}],selectedThangView:null,thangView:[{value:"",text:""}],selectedQuy:null,quy:[{value:"Quy I",text:"Quy I"},{value:"Quy II",text:"Quy II"},{value:"Quy III",text:"Quy III"},{value:"Quy IV",text:"Quy IV"}],selectedQuyView:null,quyView:[{value:"",text:""}],dataArrBaoGia:[]}},created:function(){var t=this,e={check:0,idUserImport:this.currentUserPersonalInfo.user.id};this["storeqlda/getInfoTinhBaoGiaOfUserGuest"](e).then((function(e){t.tinhView=e.data.tinh}))},mounted:function(){},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(l["d"])({stringSearch:function(t){return t.storeqlda.stringSearch}})),Object(l["c"])(["storeqlda/getListDataBGia","storeqlda/arrBaoGiaSearchGuestSelfView","currentUserPersonalInfo","storeqlda/currentUser"])),{},{dataArrBaoGiaSerch:function(){return this["storeqlda/arrBaoGiaSearchGuestSelfView"]}}),watch:{selectedKhuVucView:function(){var t=this,e={check:0,idUserImport:this.currentUserPersonalInfo.user.id,tinh:this.selectedTinhView,khuvuc:this.selectedKhuVucView};this["storeqlda/getThoiDiemBaoGiaOfUserGuest"](e).then((function(e){for(var a in t.thangView=[],t.quyView=[],t.dayView=[],e.data.thoidiem)e.data.thoidiem[a].value.search("Thang")>=0?t.thangView.push(e.data.thoidiem[a]):e.data.thoidiem[a].value.search("Quy")>=0?t.quyView.push(e.data.thoidiem[a]):t.dayView.push(e.data.thoidiem[a])}))},selectedThang:function(){this.selectedThang?(this.isQuyDisabled=!0,this.isDayDisabled=!0):(this.isQuyDisabled=!1,this.isDayDisabled=!1)},selectedQuy:function(){this.selectedQuy?(this.isMonthDisabled=!0,this.isDayDisabled=!0):(this.isMonthDisabled=!1,this.isDayDisabled=!1)},selectedDay:function(){this.selectedDay?(this.isQuyDisabled=!0,this.isMonthDisabled=!0):(this.isQuyDisabled=!1,this.isMonthDisabled=!1)},selectedThangView:function(){this.selectedThangView?(this.isQuyDisabledView=!0,this.isDayDisabledView=!0):(this.isQuyDisabledView=!1,this.isDayDisabledView=!1)},selectedQuyView:function(){this.selectedQuyView?(this.isMonthDisabledView=!0,this.isDayDisabledView=!0):(this.isMonthDisabledView=!1,this.isDayDisabledView=!1)},selectedDayView:function(){this.selectedDayView?(this.isQuyDisabledView=!0,this.isMonthDisabledView=!0):(this.isQuyDisabledView=!1,this.isMonthDisabledView=!1)},selectedTinhView:function(){var t=this,e={check:0,idUserImport:this.currentUserPersonalInfo.user.id,tinh:this.selectedTinhView};this["storeqlda/getInfoBaoGiaOfUserGuest"](e).then((function(e){t.khuvucView=e.data.khuvuc}))}},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["storeqlda/guestCreateBaoGia","storeqlda/getAllListDataBaoGiaGuest","storeqlda/updateDataGiaVatTuGuestUp","storeqlda/approveGiaVtGuest","storeqlda/getUserGuestUpBgia","storeqlda/getInfoBaoGiaOfUserGuest","storeqlda/getInfoTinhBaoGiaOfUserGuest","storeqlda/viewBaoGiaWithSelecttionOfGuest","storeqlda/getThoiDiemBaoGiaOfUserGuest"])),{},{dataArr:function(t){var e=this,a="";this.isMonthDisabledView||(a=this.selectedThangView),this.isQuyDisabledView||(a=this.selectedQuyView),this.isDayDisabledView||(a=this.selectedDayView);var i={check:0,user_id:this.currentUserPersonalInfo.user.id,tinh:this.selectedTinhView,khuvuc:this.selectedKhuVucView,thoidiem:a,page:t};this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](i).then((function(t){e.dataArrBaoGia=t.data.pagi.data,e.pagination=t.data.pagi,e.rows=t.data.pagi.total}))},handleChange:function(t){this.selectedFile=t.target.files[0]},handleXemBG:function(){var t=this,e="";this.isMonthDisabledView||(e=this.selectedThangView),this.isQuyDisabledView||(e=this.selectedQuyView),this.isDayDisabledView||(e=this.selectedDayView);var a={check:0,user_id:this.currentUserPersonalInfo.user.id,idUserView:this.currentUserPersonalInfo.user.id,tinh:this.selectedTinhView,khuvuc:this.selectedKhuVucView,thoidiem:e};this.selectedTinhView&&this.selectedKhuVucView&&(this.selectedDayView||this.selectedThangView||this.selectedQuyView)?this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](a).then((function(e){t.dataArrBaoGia=e.data.pagi.data,t.pagination=e.data.pagi,t.rows=e.data.pagi.total})):alert("Bạn chưa chọn người up báo giá hoặc chưa chọn tỉnh hoặc khu vực hoặc báo giá theo tháng quý hoặc ngày")},importExcelBaoGia:function(){var t=this;if(confirm("Bạn có chắc chắn muốn up dữ liệu này không?"))if(this.selectedFile&&this.selectedTinh&&this.selectedKhuVuc&&(this.selectedDay||this.selectedThang||this.selectedQuy)){var e=new h.a.Workbook,a=[],i=new FileReader;i.readAsBinaryString(this.selectedFile),i.onload=function(){var n=i.result;e.xlsx.load(n).then((function(){var i=e.getWorksheet(1);i.eachRow((function(t){var e=t.values.filter((function(t){return void 0!=t}));a.push(e)}));var n=0,s="",l="",u="",o=a[0];o=o.map((function(t){return Object(d["a"])(t).replace(/ /g,"").toLowerCase()}));var c=["mavattu","tenvattu","donvi","giavattu","nguon","ghichu","tinh","tacgia"];i.eachRow((function(e){var a="";e.eachCell({includeEmpty:!0},(function(e,i){i<=o.length&&("giavattu"===o[n]?(t.isMonthDisabled||(a=t.selectedThang),t.isQuyDisabled||(a=t.selectedQuy),t.isDayDisabled||(a=t.selectedDay),s='"'.concat(o[n],'":"').concat(a,",").concat(t.selectedKhuVuc,":").concat(e.value,'",'),l+=s,n++,a=""):(s='"'.concat(o[n],'":"').concat(null!==e.value&&"number"!==typeof e.value?e.value.replace(/\\/g,"").replace(/"/g,"''"):e.value,'",'),l+=s,n++))})),t.isMonthDisabled||(a=t.selectedThang),t.isQuyDisabled||(a=t.selectedQuy),t.isDayDisabled||(a=t.selectedDay),s='"tinh":"'.concat(t.selectedTinh,'",'),l+=s,s='"vote_mark":"'.concat(a,",").concat(t.selectedKhuVuc,",vote:0|mark:").concat(t.markCost,'"'),l+=s,l="{".concat(l,"},"),u+=l,l="",n=0})),u=u.substring(0,u.length-1),u="[".concat(u,"]");var r=JSON.parse(u);for(var h in r.shift(),r){var v=Object.keys(r[h]);for(var g in c)v.includes(c[g])||(r[h][c[g]]=null)}u=JSON.stringify(r);var f={tempFinalRs:u,idUserImport:t.currentUserPersonalInfo.user.id};t["storeqlda/guestCreateBaoGia"](f).then((function(e){if(!1===e.ok)alert(e.error);else if(!0===e.data.exist)confirm("Báo giá này đã có trong cơ sở dữ liêu. Bạn có muốn ghi đè các dữ liệu này không?")?(f={tempFinalRs:u,idUserImport:t.currentUserPersonalInfo.user.id,agreeOverride:1},t["storeqlda/guestCreateBaoGia"](f).then((function(t){return alert(t.data.message)})).then((function(){var e={check:0,idUserImport:t.currentUserPersonalInfo.user.id};t["storeqlda/getInfoTinhBaoGiaOfUserGuest"](e).then((function(e){t.tinhView=e.data.tinh}))}))):(f={tempFinalRs:u,idUserImport:t.currentUserPersonalInfo.user.id,agreeOverride:2},t["storeqlda/guestCreateBaoGia"](f).then((function(){var e={check:0,idUserImport:t.currentUserPersonalInfo.user.id};t["storeqlda/getInfoTinhBaoGiaOfUserGuest"](e).then((function(e){t.tinhView=e.data.tinh}))})));else{alert(e.data.message);var a={check:0,idUserImport:t.currentUserPersonalInfo.user.id};t["storeqlda/getInfoTinhBaoGiaOfUserGuest"](a).then((function(e){t.tinhView=e.data.tinh}))}})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))}}else alert("Bạn chưa chọn file import dữ liệu, hoặc bạn chưa chọn tỉnh hoặc khu vực hoặc báo giá theo tháng quý hoặc ngày")},getParentSelect:function(t,e){while(t.parentElement){var a=t.parentElement;if(a.matches(e))return a;t=a}},hadleClickMaDM:function(t){t.target.setAttribute("contenteditable","true")},hadleClickTenMaDM:function(t){t.target.setAttribute("contenteditable","true")},handleSave:function(t){var e=this,a=this.getParentSelect(t.target,".row_table_note"),i=a.querySelector(".ma_vat_tu").innerText,n=a.querySelector(".ten_vat_tu").innerText,s=a.querySelector(".don_vi").innerText,l=a.querySelector(".gia_vat_tu").innerText,u=a.querySelector(".nguon").innerText,o=a.querySelector(".ghi_chu").innerText,c=a.querySelector(".tinh").innerText,r=a.querySelector(".tac_gia").innerText,h=a.querySelector(".id_vat_tu").innerText,d=this["storeqlda/currentUser"].id,v={maVatTu:i,tenVatTu:n,donVi:s,giaVatTu:l,ghiChu:o,nguon:u,tinh:c,tacGia:r,idVatTu:h,idUser:d};this["storeqlda/updateDataGiaVatTuWithId"](v).then((function(t){!1===t.ok&&alert(t.error),e["storeqlda/getAllListDataBaoGia"]()}))}})},g=v,f=(a("e37d"),a("2877")),b=Object(f["a"])(g,o,c,!1,null,"44037b36",null),m=b.exports,p={name:"giavattu",components:{MaterialCostForGuest:m},data:function(){return{tabIndex:0}},computed:Object(s["a"])(Object(s["a"])({},Object(l["c"])(["layoutConfig"])),{},{config:function(){return this.layoutConfig()}}),mounted:function(){this.$store.dispatch(u["a"],[{title:"Bảng giá vật tư"}])},destroyed:function(){localStorage.removeItem("builderTab")},methods:{reset:function(t){t.preventDefault(),localStorage.removeItem("config"),window.location.reload()},submit:function(t){t.preventDefault(),localStorage.setItem("config",JSON.stringify(this.config)),window.location.reload()}}},x=p,y=(a("10eb"),Object(f["a"])(x,i,n,!1,null,"6a587dbc",null));e["default"]=y.exports},e37d:function(t,e,a){"use strict";a("503b")}}]);
//# sourceMappingURL=chunk-f4bca484.4608f0db.js.map