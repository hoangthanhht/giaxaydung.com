(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-377fbbbf"],{d2fe:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[l("div",{staticClass:"alert-icon"},[l("span",{staticClass:"svg-icon svg-icon-lg"},[l("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),l("div",{staticClass:"alert-text"},[l("b",[e._v("Form File Input")]),e._v(" Customized, cross-browser consistent, file input control that supports single file, multiple files, and directory upload (for browsers that support directory mode) "),l("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/form-file",target:"_blank"}},[e._v(" See documentation. ")])])]),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("KTCodePreview",{attrs:{title:"Form File Input"},scopedSlots:e._u([{key:"preview",fn:function(){return[l("div",[l("b-form-file",{attrs:{state:Boolean(e.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),l("div",{staticClass:"mt-3"},[e._v("Selected file: "+e._s(e.file?e.file.name:""))]),l("b-form-file",{staticClass:"mt-3",attrs:{plain:""},model:{value:e.file2,callback:function(t){e.file2=t},expression:"file2"}}),l("div",{staticClass:"mt-3"},[e._v(" Selected file: "+e._s(e.file2?e.file2.name:"")+" ")])],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.html1)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.js1)+" ")]},proxy:!0}])}),l("KTCodePreview",{attrs:{title:"File name formatting via scoped slot"},scopedSlots:e._u([{key:"preview",fn:function(){return[l("p",[e._v(" Alternatively, you can use the scoped slot "),l("code",[e._v("file-name")]),e._v(" to render the file names. The scoped slot will receive the following properties: ")]),l("b-form-file",{attrs:{multiple:""},scopedSlots:e._u([{key:"file-name",fn:function(t){var a=t.names;return[l("b-badge",{attrs:{variant:"dark"}},[e._v(e._s(a[0]))]),a.length>1?l("b-badge",{staticClass:"ml-1",attrs:{variant:"dark"}},[e._v(" + "+e._s(a.length-1)+" More files ")]):e._e()]}}])})]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.html3)+" ")]},proxy:!0}])})],1),l("div",{staticClass:"col-md-6"},[l("KTCodePreview",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"preview",fn:function(){return[l("p",[e._v(" Use the "),l("code",[e._v("size")]),e._v(" prop to control the visual size of the input. The default size is considered "),l("code",[e._v("md")]),e._v(" (medium). Optional sizes are "),l("code",[e._v("lg")]),e._v(" (large) and "),l("code",[e._v("sm")]),e._v(" (small). These sizes line up with the sizes available on other form controls. ")]),l("div",[l("b-form-group",{attrs:{label:"Small:","label-for":"file-small","label-cols-sm":"2","label-size":"sm"}},[l("b-form-file",{attrs:{id:"file-small",size:"sm"}})],1),l("b-form-group",{attrs:{label:"Default:","label-for":"file-default","label-cols-sm":"2"}},[l("b-form-file",{attrs:{id:"file-default"}})],1),l("b-form-group",{attrs:{label:"Large:","label-for":"file-large","label-cols-sm":"2","label-size":"lg"}},[l("b-form-file",{attrs:{id:"file-large",size:"lg"}})],1)],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.html2)+" ")]},proxy:!0}])})],1)])],1)},s=[],i=l("d968"),o=l("25a6"),r={data:function(){return{html1:'<div>\n    \x3c!-- Styled --\x3e\n    <b-form-file\n      v-model="file"\n      :state="Boolean(file)"\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n    ></b-form-file>\n    <div class="mt-3">Selected file: {{ file ? file.name : \'\' }}</div>\n\n    \x3c!-- Plain mode --\x3e\n    <b-form-file v-model="file2" class="mt-3" plain></b-form-file>\n    <div class="mt-3">Selected file: {{ file2 ? file2.name : \'\' }}</div>\n  </div>',js1:"export default {\n    data() {\n      return {\n        file: null,\n        file2: null\n      }\n    }",file:null,file2:null,html2:'<div>\n  <b-form-group label="Small:" label-for="file-small" label-cols-sm="2" label-size="sm">\n    <b-form-file id="file-small" size="sm"></b-form-file>\n  </b-form-group>\n\n  <b-form-group label="Default:" label-for="file-default" label-cols-sm="2">\n    <b-form-file id="file-default"></b-form-file>\n  </b-form-group>\n\n  <b-form-group label="Large:" label-for="file-large" label-cols-sm="2" label-size="lg">\n    <b-form-file id="file-large" size="lg"></b-form-file>\n  </b-form-group>\n</div>',html3:'<b-form-file multiple>\n   <template slot="file-name" slot-scope="{ names }">\n     <b-badge variant="dark">{{ names[0] }}</b-badge>\n     <b-badge v-if="names.length > 1" variant="dark" class="ml-1">\n       + {{ names.length - 1 }} More files\n     </b-badge>\n   </template>\n  </b-form-file>'}},components:{KTCodePreview:i["a"]},mounted:function(){this.$store.dispatch(o["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Form File"}])}},n=r,c=l("2877"),d=Object(c["a"])(n,a,s,!1,null,null,null);t["default"]=d.exports},d968:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("KTCard",{ref:"preview",attrs:{title:e.title,example:!0},scopedSlots:e._u([e.hasTitleSlot?{key:"title",fn:function(){return[l("h3",{staticClass:"card-title"},[e._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[l("div",{staticClass:"example-tools justify-content-center"},[l("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),l("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[l("div",{staticClass:"example-code mb-5"},[e.hasGeneralCode||e.hasSingleCodeType?e._e():l("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[e.hasHtmlCode?l("li",{staticClass:"nav-item"},[l("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:e.setActiveTab}},[e._v(" HTML ")])]):e._e(),e.hasJsCode?l("li",{staticClass:"nav-item"},[l("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:e.setActiveTab}},[e._v(" JS ")])]):e._e(),e.hasScssCode?l("li",{staticClass:"nav-item"},[l("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:e.setActiveTab}},[e._v(" SCSS ")])]):e._e()]),e.hasGeneralCode?l("div",[e._t("code")],2):e._e(),e.hasGeneralCode||e.hasSingleCodeType?e._e():l("div",[l("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[l("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[l("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[e._t("html")],2)],1),l("b-tab",{staticClass:"example-highlight"},[l("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[e._t("js")],2)],1),l("b-tab",{staticClass:"example-highlight"},[l("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[e._t("scss")],2)],1)],1)],1),e.hasSingleCodeType?l("div",{staticClass:"example-highlight"},[e.hasHtmlCode?l("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[e._t("html")],2):e._e(),e.hasJsCode?l("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[e._t("js")],2):e._e(),e.hasScssCode?l("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[e._t("scss")],2):e._e()],1):e._e()]),e._t("preview")]},proxy:!0}],null,!0)})},s=[],i=(l("159b"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"card card-custom gutter-b",class:e.classes},[e.hasTitleSlot||e.title?l("div",{staticClass:"card-header",class:e.headClass},[l("div",{staticClass:"card-title"},[e.hasTitleSlot?e._t("title"):e._e(),e.hasTitleSlot?e._e():l("h3",{staticClass:"card-label"},[e._v(" "+e._s(e.title)+" ")])],2),l("div",{staticClass:"card-toolbar"},[e._t("toolbar")],2)]):e._e(),l("div",{staticClass:"card-body",class:{bodyClass:e.bodyClass,"body-fit":e.bodyFit,"body-fluid":e.bodyFluid}},[e._t("body")],2),e.hasFootSlot?l("div",{staticClass:"card-footer"},[e._t("foot")],2):e._e()])}),o=[],r={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var e={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return e[this.headSizeClass]=this.headSizeClass,this.cardClass&&(e[this.cardClass]=!0),e},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},n=r,c=l("2877"),d=Object(c["a"])(n,i,o,!1,null,null,null),f=d.exports,h=l("b2e9"),u={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:f},mounted:function(){var e=this;this.$nextTick((function(){h["a"].init([e.$el]);var t=e.$el.querySelectorAll(".hljs");t.forEach((function(e){e.classList.add("language-".concat(e.classList[1])),e.classList.remove("hljs")}))}))},methods:{setActiveTab:function(e){for(var t=e.target.closest('[role="tablist"]'),l=t.querySelectorAll('[data-toggle="tab"]'),a=0;a<l.length;a++)l[a].classList.remove("active");e.target.classList.add("active"),this.tabIndex=parseInt(e.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var e=this,t=0;return["html","js","scss"].forEach((function(l){e.$slots.hasOwnProperty(l)&&t++})),1===t},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},m=u,b=Object(c["a"])(m,a,s,!1,null,null,null);t["a"]=b.exports}}]);
//# sourceMappingURL=chunk-377fbbbf.13794641.js.map