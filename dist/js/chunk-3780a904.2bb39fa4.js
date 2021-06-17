(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3780a904"],{d968:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("KTCard",{ref:"preview",attrs:{title:e.title,example:!0},scopedSlots:e._u([e.hasTitleSlot?{key:"title",fn:function(){return[o("h3",{staticClass:"card-title"},[e._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[o("div",{staticClass:"example-tools justify-content-center"},[o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[o("div",{staticClass:"example-code mb-5"},[e.hasGeneralCode||e.hasSingleCodeType?e._e():o("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[e.hasHtmlCode?o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:e.setActiveTab}},[e._v(" HTML ")])]):e._e(),e.hasJsCode?o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:e.setActiveTab}},[e._v(" JS ")])]):e._e(),e.hasScssCode?o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:e.setActiveTab}},[e._v(" SCSS ")])]):e._e()]),e.hasGeneralCode?o("div",[e._t("code")],2):e._e(),e.hasGeneralCode||e.hasSingleCodeType?e._e():o("div",[o("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[o("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[o("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[e._t("html")],2)],1),o("b-tab",{staticClass:"example-highlight"},[o("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[e._t("js")],2)],1),o("b-tab",{staticClass:"example-highlight"},[o("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[e._t("scss")],2)],1)],1)],1),e.hasSingleCodeType?o("div",{staticClass:"example-highlight"},[e.hasHtmlCode?o("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[e._t("html")],2):e._e(),e.hasJsCode?o("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[e._t("js")],2):e._e(),e.hasScssCode?o("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[e._t("scss")],2):e._e()],1):e._e()]),e._t("preview")]},proxy:!0}],null,!0)})},s=[],i=(o("159b"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card card-custom gutter-b",class:e.classes},[e.hasTitleSlot||e.title?o("div",{staticClass:"card-header",class:e.headClass},[o("div",{staticClass:"card-title"},[e.hasTitleSlot?e._t("title"):e._e(),e.hasTitleSlot?e._e():o("h3",{staticClass:"card-label"},[e._v(" "+e._s(e.title)+" ")])],2),o("div",{staticClass:"card-toolbar"},[e._t("toolbar")],2)]):e._e(),o("div",{staticClass:"card-body",class:{bodyClass:e.bodyClass,"body-fit":e.bodyFit,"body-fluid":e.bodyFluid}},[e._t("body")],2),e.hasFootSlot?o("div",{staticClass:"card-footer"},[e._t("foot")],2):e._e()])}),r=[],n={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var e={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return e[this.headSizeClass]=this.headSizeClass,this.cardClass&&(e[this.cardClass]=!0),e},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},d=n,l=o("2877"),c=Object(l["a"])(d,i,r,!1,null,null,null),u=c.exports,v=o("b2e9"),m={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:u},mounted:function(){var e=this;this.$nextTick((function(){v["a"].init([e.$el]);var t=e.$el.querySelectorAll(".hljs");t.forEach((function(e){e.classList.add("language-".concat(e.classList[1])),e.classList.remove("hljs")}))}))},methods:{setActiveTab:function(e){for(var t=e.target.closest('[role="tablist"]'),o=t.querySelectorAll('[data-toggle="tab"]'),a=0;a<o.length;a++)o[a].classList.remove("active");e.target.classList.add("active"),this.tabIndex=parseInt(e.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var e=this,t=0;return["html","js","scss"].forEach((function(o){e.$slots.hasOwnProperty(o)&&t++})),1===t},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},p=m,b=Object(l["a"])(p,a,s,!1,null,null,null);t["a"]=b.exports},f503:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[o("div",{staticClass:"alert-icon"},[o("span",{staticClass:"svg-icon svg-icon-lg"},[o("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),o("div",{staticClass:"alert-text"},[o("b",[e._v("Form Radio Inputs")]),e._v(" For cross browser consistency, <b-form-radio-group> and <b-form-radio> uses Bootstrap's custom radio input to replace the browser default radio input. It is built on top of semantic and accessible markup, so it is a solid replacement for the default radio input. "),o("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/form-radio",target:"_blank"}},[e._v(" See documentation. ")])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("KTCodePreview",{attrs:{title:"Individual radios"},scopedSlots:e._u([{key:"preview",fn:function(){return[o("div",[o("b-form-group",{attrs:{label:"Individual radios"}},[o("b-form-radio",{attrs:{name:"some-radios",value:"A"},model:{value:e.code1.selected,callback:function(t){e.$set(e.code1,"selected",t)},expression:"code1.selected"}},[e._v(" Option A ")]),o("b-form-radio",{attrs:{name:"some-radios",value:"B"},model:{value:e.code1.selected,callback:function(t){e.$set(e.code1,"selected",t)},expression:"code1.selected"}},[e._v(" Option B ")])],1),o("div",{staticClass:"mt-3"},[e._v(" Selected: "),o("strong",[e._v(e._s(e.code1.selected))])])],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code1.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code1.js)+" ")]},proxy:!0}])}),o("KTCodePreview",{attrs:{title:"Grouped radios"},scopedSlots:e._u([{key:"preview",fn:function(){return[o("p",[e._v(" The individual radio inputs in "),o("code",[e._v("<b-form-radio-group>")]),e._v(" can be specified via the options prop, or via manual placement of the "),o("code",[e._v("<b-form-radio>")]),e._v(" sub component. When using manually placed "),o("code",[e._v("<b-form-radio>")]),e._v(" components within a "),o("code",[e._v("<b-form-radio-group>")]),e._v(", they will inherit most props and the v-model from the "),o("code",[e._v("<b-form-radio-group>")])]),o("div",[o("b-form-group",{attrs:{label:"Radios using options"}},[o("b-form-radio-group",{attrs:{id:"radio-group-1",options:e.code2.options,name:"radio-options"},model:{value:e.code2.selected1,callback:function(t){e.$set(e.code2,"selected1",t)},expression:"code2.selected1"}})],1),o("div",{staticClass:"mt-3 mb-6"},[e._v(" Selected: "),o("strong",[e._v(e._s(e.code2.selected1))])]),o("b-form-group",{attrs:{label:"Radios using sub-components"}},[o("b-form-radio-group",{attrs:{id:"radio-group-2",name:"radio-sub-component"},model:{value:e.code2.selected2,callback:function(t){e.$set(e.code2,"selected2",t)},expression:"code2.selected2"}},[o("b-form-radio",{attrs:{value:"first"}},[e._v(" Toggle this custom radio ")]),o("b-form-radio",{attrs:{value:"second"}},[e._v(" Or toggle this other custom radio ")]),o("b-form-radio",{attrs:{value:"third",disabled:""}},[e._v(" This one is Disabled ")]),o("b-form-radio",{attrs:{value:{fourth:4}}},[e._v(" This is the (fourth: 4) object radio ")])],1)],1),o("div",{staticClass:"mt-3"},[e._v(" Selected: "),o("strong",[e._v(e._s(e.code2.selected2))])])],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code2.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code2.js)+" ")]},proxy:!0}])}),o("KTCodePreview",{attrs:{title:"Inline or stacked radios"},scopedSlots:e._u([{key:"preview",fn:function(){return[o("p",[e._v(" By default "),o("code",[e._v("<b-form-radio-group>")]),e._v(" generates inline radio inputs, while "),o("code",[e._v("<b-form-radio>")]),e._v(" generates stacked radios. Set the prop "),o("code",[e._v("stacked")]),e._v(" on "),o("code",[e._v("<b-form-radio-group>")]),e._v(" to make the radios appear one over the other, or when using radios not in a group, set the "),o("code",[e._v("inline")]),e._v(" prop on "),o("code",[e._v("b-form-radio")]),e._v(" to true to render them inline ")]),o("div",[o("b-form-group",{attrs:{label:"Inline radios (default)"}},[o("b-form-radio-group",{attrs:{options:e.code3.options,name:"radio-inline"},model:{value:e.code3.selected1,callback:function(t){e.$set(e.code3,"selected1",t)},expression:"code3.selected1"}})],1),o("div",{staticClass:"mt-3 mb-6"},[e._v(" Selected: "),o("strong",[e._v(e._s(e.code3.selected1))])]),o("b-form-group",{attrs:{label:"Stacked radios"}},[o("b-form-radio-group",{attrs:{options:e.code3.options,name:"radios-stacked",stacked:""},model:{value:e.code3.selected2,callback:function(t){e.$set(e.code3,"selected2",t)},expression:"code3.selected2"}})],1),o("div",{staticClass:"mt-3"},[e._v(" Selected: "),o("strong",[e._v(e._s(e.code3.selected2))])])],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code3.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code3.js)+" ")]},proxy:!0}])})],1),o("div",{staticClass:"col-md-6"},[o("KTCodePreview",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"preview",fn:function(){return[o("p",[e._v(" Use the "),o("code",[e._v("size")]),e._v(" prop to control the size of the radio. The default size is medium. Supported size values are "),o("code",[e._v("sm")]),e._v(" (small) and "),o("code",[e._v("lg")]),e._v(" (large). ")]),o("div",[o("b-form-radio",{attrs:{name:"radio-size",size:"sm"}},[e._v("Small")]),o("b-form-radio",{attrs:{name:"radio-size"}},[e._v("Default")]),o("b-form-radio",{attrs:{name:"radio-size",size:"lg"}},[e._v("Large")])],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code4.html)+" ")]},proxy:!0}])}),o("KTCodePreview",{attrs:{title:"Button style radios"},scopedSlots:e._u([{key:"preview",fn:function(){return[o("p",[e._v(" Render radios with the look of buttons by setting the prop "),o("code",[e._v("buttons")]),e._v(" to "),o("code",[e._v("true")]),e._v(" on "),o("code",[e._v("<b-form-radio-group>")]),e._v(". Set the button variant by setting the "),o("code",[e._v("button-variant")]),e._v(" prop to one of the standard Bootstrap button variants (see "),o("code",[e._v("<b-button>")]),e._v(" for supported variants). The default "),o("code",[e._v("button-variant")]),e._v(" is "),o("code",[e._v("secondary")]),e._v(". ")]),o("div",[o("b-form-group",{attrs:{label:"Button style radios"}},[o("b-form-radio-group",{attrs:{id:"btn-radios-1",options:e.code5.options,buttons:"",name:"radios-btn-default"},model:{value:e.code5.selected1,callback:function(t){e.$set(e.code5,"selected1",t)},expression:"code5.selected1"}})],1),o("b-form-group",{attrs:{label:"Button style radios with outline-primary variant and size lg"}},[o("b-form-radio-group",{attrs:{id:"btn-radios-2",options:e.code5.options,buttons:"","button-variant":"outline-primary",size:"lg",name:"radio-btn-outline"},model:{value:e.code5.selected2,callback:function(t){e.$set(e.code5,"selected2",t)},expression:"code5.selected2"}})],1),o("b-form-group",{attrs:{label:"Stacked button style radios"}},[o("b-form-radio-group",{attrs:{id:"btn-radios-3",options:e.code5.options,buttons:"",stacked:"",name:"radio-btn-stacked"},model:{value:e.code5.selected3,callback:function(t){e.$set(e.code5,"selected3",t)},expression:"code5.selected3"}})],1)],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code5.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code5.js)+" ")]},proxy:!0}])})],1)])],1)},s=[],i=o("d968"),r=o("25a6"),n={data:function(){return{code1:{html:'<div>\n  <b-form-group label="Individual radios">\n    <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>\n    <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>\n  </b-form-group>\n\n  <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>\n</div>',js:"export default {\n  data() {\n    return {\n      selected: ''\n    }\n  }\n}",selected:""},code2:{html:'<div>\n  <b-form-group label="Radios using options">\n    <b-form-radio-group\n      id="radio-group-1"\n      v-model="selected"\n      :options="options"\n      name="radio-options"\n    ></b-form-radio-group>\n  </b-form-group>\n\n  <b-form-group label="Radios using sub-components">\n    <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">\n      <b-form-radio value="first">Toggle this custom radio</b-form-radio>\n      <b-form-radio value="second">Or toggle this other custom radio</b-form-radio>\n      <b-form-radio value="third" disabled>This one is Disabled</b-form-radio>\n      <b-form-radio :value="{ fourth: 4 }">This is the (fourth: 4) object radio</b-form-radio>\n    </b-form-radio-group>\n  </b-form-group>\n\n  <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>\n</div>',js:"export default {\n  data() {\n    return {\n      selected: 'first',\n      options: [\n        { text: 'Toggle this custom radio', value: 'first' },\n        { text: 'Or toggle this other custom radio', value: 'second' },\n        { text: 'This one is Disabled', value: 'third', disabled: true },\n        { text: 'This is the (fourth: 4) object radio', value: { fourth: 4 } }\n      ]\n    }\n  }\n}",selected1:"first",selected2:"first",options:[{text:"Toggle this custom radio",value:"first"},{text:"Or toggle this other custom radio",value:"second"},{text:"This one is Disabled",value:"third",disabled:!0},{text:"This is the (fourth: 4) object radio",value:{fourth:4}}]},code3:{html3:'<div>\n  <b-form-group label="Inline radios (default)">\n    <b-form-radio-group\n      v-model="selected"\n      :options="options"\n      name="radio-inline"\n    ></b-form-radio-group>\n  </b-form-group>\n\n  <b-form-group label="Stacked radios">\n    <b-form-radio-group\n      v-model="selected"\n      :options="options"\n      name="radios-stacked"\n      stacked\n    ></b-form-radio-group>\n  </b-form-group>\n\n  <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>\n</div>',js3:"export default {\n    data() {\n      return {\n        selected: 'first',\n        options: [\n          { text: 'First radio', value: 'first' },\n          { text: 'Second radio', value: 'second' },\n          { text: 'Third radio', value: 'third' }\n        ]\n      }\n    }\n  }",selected1:"first",selected2:"first",options:[{text:"First radio",value:"first"},{text:"Second radio",value:"second"},{text:"Third radio",value:"third"}]},code4:{html:'<div>\n  <b-form-radio name="radio-size" size="sm">Small</b-form-radio>\n  <b-form-radio name="radio-size">Default</b-form-radio>\n  <b-form-radio name="radio-size" size="lg">Large</b-form-radio>\n</div>'},code5:{html5:'<div>\n  <b-form-group label="Button style radios">\n    <b-form-radio-group\n      id="btn-radios-1"\n      v-model="selected"\n      :options="options"\n      buttons\n      name="radios-btn-default"\n    ></b-form-radio-group>\n  </b-form-group>\n\n  <b-form-group label="Button style radios with outline-primary variant and size lg">\n    <b-form-radio-group\n      id="btn-radios-2"\n      v-model="selected"\n      :options="options"\n      buttons\n      button-variant="outline-primary"\n      size="lg"\n      name="radio-btn-outline"\n    ></b-form-radio-group>\n  </b-form-group>\n\n  <b-form-group label="Stacked button style radios">\n    <b-form-radio-group\n      id="btn-radios-3"\n      v-model="selected"\n      :options="options"\n      buttons\n      stacked\n      name="radio-btn-stacked"\n    ></b-form-radio-group>\n  </b-form-group>\n</div>',js5:"export default {\n    data() {\n      return {\n        selected: 'radio1',\n        options: [\n          { text: 'Radio 1', value: 'radio1' },\n          { text: 'Radio 3', value: 'radio2' },\n          { text: 'Radio 3 (disabled)', value: 'radio3', disabled: true },\n          { text: 'Radio 4', value: 'radio4' }\n        ]\n      }\n    }\n  }",selected1:"radio1",selected2:"radio1",selected3:"radio1",options:[{text:"Radio 1",value:"radio1"},{text:"Radio 3",value:"radio2"},{text:"Radio 3 (disabled)",value:"radio3",disabled:!0},{text:"Radio 4",value:"radio4"}]}}},components:{KTCodePreview:i["a"]},mounted:function(){this.$store.dispatch(r["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Form Radio"}])}},d=n,l=o("2877"),c=Object(l["a"])(d,a,s,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3780a904.2bb39fa4.js.map