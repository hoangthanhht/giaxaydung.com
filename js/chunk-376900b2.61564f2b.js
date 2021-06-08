(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-376900b2"],{"22bb":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[a("div",{staticClass:"alert-icon"},[a("span",{staticClass:"svg-icon svg-icon-lg"},[a("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),a("div",{staticClass:"alert-text"},[a("b",[t._v("Buttons")]),t._v(" Use Bootstrap's custom b-button component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more. "),a("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/button",target:"_blank"}},[t._v(" See documentation. ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("KTCodePreview",{attrs:{title:"Buttons"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("div",[a("b-button",{staticClass:"mr-3"},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{variant:"danger"}},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{variant:"success"}},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{variant:"outline-primary"}},[t._v("Button")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html1)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Element type"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("div",[a("b-button",{staticClass:"mr-3"},[t._v("I am a Button")]),a("b-button",{staticClass:"mr-3",attrs:{href:"#"}},[t._v("I am a Link")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html2)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Sizing"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" Fancy larger or smaller buttons? Specify "),a("code",[t._v("lg")]),t._v(" or "),a("code",[t._v("sm")]),t._v(" via the "),a("code",[t._v("size")]),t._v(" prop. ")]),a("b-row",[a("b-col",{staticClass:"pb-2",attrs:{lg:"4"}},[a("b-button",{attrs:{size:"sm"}},[t._v("Small Button")])],1),a("b-col",{staticClass:"pb-2",attrs:{lg:"4"}},[a("b-button",[t._v("Default Button")])],1),a("b-col",{staticClass:"pb-2",attrs:{lg:"4"}},[a("b-button",{attrs:{size:"lg"}},[t._v("Large Button")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html3)+" ")]},proxy:!0}])})],1),a("div",{staticClass:"col-md-6"},[a("KTCodePreview",{attrs:{title:"Pill style"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" Prefer buttons with a more rounded-pill style? Just set the prop "),a("code",[t._v("pill")]),t._v(" to true. ")]),a("div",[a("b-button",{staticClass:"mr-3",attrs:{pill:""}},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{pill:"",variant:"primary"}},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{pill:"",variant:"outline-secondary"}},[t._v(" Button ")]),a("b-button",{staticClass:"mr-3",attrs:{pill:"",variant:"success"}},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{pill:"",variant:"outline-danger"}},[t._v(" Button ")]),a("b-button",{staticClass:"mr-3",attrs:{pill:"",variant:"info"}},[t._v("Button")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html4)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Squared style"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" Prefer buttons with a more square corner style? Just set the prop "),a("code",[t._v("squared")]),t._v(" to true. ")]),a("div",[a("b-button",{staticClass:"mr-3",attrs:{squared:""}},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{squared:"",variant:"primary"}},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{squared:"",variant:"outline-secondary"}},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{squared:"",variant:"success"}},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{squared:"",variant:"outline-danger"}},[t._v("Button")]),a("b-button",{staticClass:"mr-3",attrs:{squared:"",variant:"info"}},[t._v("Button")])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html5)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Pressed state and toggling"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" Buttons will appear pressed (with a darker background, darker border, and inset shadow) when the prop "),a("code",[t._v("pressed")]),t._v(" is set to true. ")]),a("div",[a("h5",[t._v("Pressed and un-pressed state")]),a("b-button",{staticClass:"mr-3",attrs:{pressed:!0,variant:"success"}},[t._v("Always Pressed")]),a("b-button",{staticClass:"mr-3",attrs:{pressed:!1,variant:"success"}},[t._v("Not Pressed")]),a("h5",{staticClass:"mt-3"},[t._v("Toggleable Button")]),a("b-button",{staticClass:"mr-3",attrs:{pressed:t.myToggle,variant:"primary"},on:{"update:pressed":function(s){t.myToggle=s}}},[t._v("Toggle Me")]),a("p",{staticClass:"mt-3"},[t._v(" Pressed State: "),a("strong",[t._v(t._s(t.myToggle))])]),a("h5",[t._v("In a button group")]),a("b-button-group",{attrs:{size:"sm"}},t._l(t.buttons,(function(s,e){return a("b-button",{key:e,staticClass:"mr-3",attrs:{pressed:s.state,variant:"primary"},on:{"update:pressed":function(a){return t.$set(s,"state",a)}}},[t._v(" "+t._s(s.caption)+" ")])})),1),a("p",{staticClass:"mt-3"},[t._v(" Pressed States: "),a("strong",[t._v(t._s(t.btnStates))])])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html6)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.js6)+" ")]},proxy:!0}])})],1)])],1)},n=[],o=(a("d81d"),a("d968")),r=a("25a6"),i={data:function(){return{html1:'<div>\n    <b-button>Button</b-button>\n    <b-button variant="danger">Button</b-button>\n    <b-button variant="success">Button</b-button>\n    <b-button variant="outline-primary">Button</b-button>\n</div>',html2:'<div>\n    <b-button>I am a Button</b-button>\n    <b-button href="#">I am a Link</b-button>\n</div>',html3:'<b-row>\n    <b-col lg="4" class="pb-2">\n        <b-button size="sm">Small Button</b-button>\n    </b-col>\n    <b-col lg="4" class="pb-2">\n        <b-button>Default Button</b-button>\n    </b-col>\n    <b-col lg="4" class="pb-2">\n        <b-button size="lg">Large Button</b-button>\n    </b-col>\n</b-row>',html4:'<div>\n    <b-button pill>Button</b-button>\n    <b-button pill variant="primary">Button</b-button>\n    <b-button pill variant="outline-secondary">Button</b-button>\n    <b-button pill variant="success">Button</b-button>\n    <b-button pill variant="outline-danger">Button</b-button>\n    <b-button pill variant="info">Button</b-button>\n</div>',html5:'<div>\n    <b-button squared>Button</b-button>\n    <b-button squared variant="primary">Button</b-button>\n    <b-button squared variant="outline-secondary">Button</b-button>\n    <b-button squared variant="success">Button</b-button>\n    <b-button squared variant="outline-danger">Button</b-button>\n    <b-button squared variant="info">Button</b-button>\n</div>',html6:'<div>\n    <h5>Pressed and un-pressed state</h5>\n    <b-button :pressed="true" variant="success">Always Pressed</b-button>\n    <b-button :pressed="false" variant="success">Not Pressed</b-button>\n\n    <h5 class="mt-3">Toggleable Button</h5>\n    <b-button :pressed.sync="myToggle" variant="primary">Toggle Me</b-button>\n    <p>Pressed State: <strong>{{ myToggle }}</strong></p>\n\n    <h5>In a button group</h5>\n    <b-button-group size="sm">\n        <b-button\n                v-for="(btn, idx) in buttons"\n                :key="idx"\n                :pressed.sync="btn.state"\n                variant="primary"\n        >\n            {{ btn.caption }}\n        </b-button>\n    </b-button-group>\n    <p>Pressed States: <strong>{{ btnStates }}</strong></p>\n</div>',js6:"export default {\n    data() {\n      return {\n        myToggle: false,\n        buttons: [\n          { caption: 'Toggle 1', state: true },\n          { caption: 'Toggle 2', state: false },\n          { caption: 'Toggle 3', state: true },\n          { caption: 'Toggle 4', state: false }\n        ]\n      }\n    },\n    computed: {\n      btnStates() {\n        return this.buttons.map(btn => btn.state)\n      }\n    }\n  }",myToggle:!1,buttons:[{caption:"Toggle 1",state:!0},{caption:"Toggle 2",state:!1},{caption:"Toggle 3",state:!0},{caption:"Toggle 4",state:!1}]}},components:{KTCodePreview:o["a"]},mounted:function(){this.$store.dispatch(r["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Buttons"}])},computed:{btnStates:function(){return this.buttons.map((function(t){return t.state}))}}},l=i,u=a("2877"),c=Object(u["a"])(l,e,n,!1,null,null,null);s["default"]=c.exports},d968:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[a("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[a("div",{staticClass:"example-tools justify-content-center"},[a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():a("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?a("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():a("div",[a("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(s){t.tabIndex=s},expression:"tabIndex"}},[a("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[a("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),a("b-tab",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),a("b-tab",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?a("div",{staticClass:"example-highlight"},[t.hasHtmlCode?a("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?a("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?a("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},n=[],o=(a("159b"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?a("div",{staticClass:"card-header",class:t.headClass},[a("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():a("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),a("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),a("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?a("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),r=[],i={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},l=i,u=a("2877"),c=Object(u["a"])(l,o,r,!1,null,null,null),b=c.exports,d=a("b2e9"),v={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:b},mounted:function(){var t=this;this.$nextTick((function(){d["a"].init([t.$el]);var s=t.$el.querySelectorAll(".hljs");s.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var s=t.target.closest('[role="tablist"]'),a=s.querySelectorAll('[data-toggle="tab"]'),e=0;e<a.length;e++)a[e].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,s=0;return["html","js","scss"].forEach((function(a){t.$slots.hasOwnProperty(a)&&s++})),1===s},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},p=v,h=Object(u["a"])(p,e,n,!1,null,null,null);s["a"]=h.exports}}]);
//# sourceMappingURL=chunk-376900b2.61564f2b.js.map