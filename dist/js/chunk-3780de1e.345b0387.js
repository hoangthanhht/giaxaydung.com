(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3780de1e"],{d968:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[s("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[s("div",{staticClass:"example-tools justify-content-center"},[s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():s("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?s("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():s("div",[s("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[s("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[s("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),s("b-tab",{staticClass:"example-highlight"},[s("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),s("b-tab",{staticClass:"example-highlight"},[s("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?s("div",{staticClass:"example-highlight"},[t.hasHtmlCode?s("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?s("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?s("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},l=[],i=(s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?s("div",{staticClass:"card-header",class:t.headClass},[s("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():s("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),s("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),s("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?s("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),o=[],n={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},r=n,c=s("2877"),d=Object(c["a"])(r,i,o,!1,null,null,null),h=d.exports,u=s("b2e9"),v={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:h},mounted:function(){var t=this;this.$nextTick((function(){u["a"].init([t.$el]);var e=t.$el.querySelectorAll(".hljs");e.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),s=e.querySelectorAll('[data-toggle="tab"]'),a=0;a<s.length;a++)s[a].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(s){t.$slots.hasOwnProperty(s)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},b=v,g=Object(c["a"])(b,a,l,!1,null,null,null);e["a"]=g.exports},eb3b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[s("div",{staticClass:"alert-icon"},[s("span",{staticClass:"svg-icon svg-icon-lg"},[s("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),s("div",{staticClass:"alert-text"},[s("b",[t._v("Links")]),t._v(" Use BootstrapVue's custom b-link component for generating a standard <a> link or <router-link>. <b-link> supports the disabled state and click event propagation. "),s("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/link",target:"_blank"}},[t._v(" See documentation. ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("KTCodePreview",{attrs:{title:"Link"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[s("code",[t._v("<b-link>")]),t._v(" is the building block for most BootstrapVue components that offer link functionality. ")]),s("div",[s("b-link",{attrs:{href:"#foo"}},[t._v("Link")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])})],1),s("div",{staticClass:"col-md-6"},[s("KTCodePreview",{attrs:{title:"Link disabled state"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v(" Disable link functionality by setting the "),s("code",[t._v("disabled")]),t._v(" prop to true. ")]),s("div",[s("b-link",{attrs:{href:"#foo",disabled:""}},[t._v("Disabled Link")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0}])})],1)])],1)},l=[],i=s("d968"),o=s("25a6"),n={data:function(){return{code1:{html:'<div>\n  <b-link href="#foo">Link</b-link>\n</div>'},code2:{html:'<div>\n  <b-link href="#foo" disabled>Disabled Link</b-link>\n</div>'}}},components:{KTCodePreview:i["a"]},mounted:function(){this.$store.dispatch(o["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Links"}])}},r=n,c=s("2877"),d=Object(c["a"])(r,a,l,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3780de1e.345b0387.js.map