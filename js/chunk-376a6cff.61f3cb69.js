(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-376a6cff"],{"56e1":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[n("div",{staticClass:"alert-icon"},[n("span",{staticClass:"svg-icon svg-icon-lg"},[n("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),n("div",{staticClass:"alert-text"},[n("b",[t._v("Input Groups")]),t._v(" Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs. "),n("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/form-textarea",target:"_blank"}},[t._v(" See documentation. ")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("KTCodePreview",{attrs:{title:"Input Groups"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("div",[n("b-input-group",{attrs:{size:"lg",prepend:"$",append:".00"}},[n("b-form-input")],1),n("b-input-group",{staticClass:"mt-3",scopedSlots:t._u([{key:"append",fn:function(){return[n("b-input-group-text",[n("strong",{staticClass:"text-danger"},[t._v("!")])])]},proxy:!0}])},[n("b-form-input")],1),n("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Username"}},[n("b-form-input"),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-success"}},[t._v("Button")]),n("b-button",{attrs:{variant:"info"}},[t._v("Button")])],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])}),n("KTCodePreview",{attrs:{title:"Using prepend and append props"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" Values will be internally wrapped by a "),n("code",[t._v("<b-input-group-text>")]),t._v(" to display correctly. ")]),n("div",[n("b-input-group",{attrs:{prepend:"$",append:".00"}},[n("b-form-input")],1),n("b-input-group",{staticClass:"mt-3",attrs:{prepend:"0",append:"100"}},[n("b-form-input",{attrs:{type:"range",min:"0",max:"100"}})],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0}])})],1),n("div",{staticClass:"col-md-6"},[n("KTCodePreview",{attrs:{title:"Using named slots"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" if you want better control over addons, you can use "),n("code",[t._v("prepend")]),t._v(" and "),n("code",[t._v("append")]),t._v(" slots instead. ")]),n("div",[n("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[n("b-input-group-text",[t._v("Username")])]},proxy:!0},{key:"append",fn:function(){return[n("b-dropdown",{attrs:{text:"Dropdown",variant:"success"}},[n("b-dropdown-item",[t._v("Action A")]),n("b-dropdown-item",[t._v("Action B")])],1)]},proxy:!0}])},[n("b-form-input")],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0}])}),n("KTCodePreview",{attrs:{title:"Using sub-components"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" Use the "),n("code",[t._v("<b-input-group-prepend>")]),t._v(" or "),n("code",[t._v("<b-input-group-append>")]),t._v(" to add arbitrary addons wherever you like, and use these components to group buttons in your input group. Single buttons must always be wrapped in these components for proper styling. ")]),n("div",[n("b-input-group",[n("b-input-group-prepend",[n("b-button",{attrs:{variant:"outline-info"}},[t._v("Button")])],1),n("b-form-input",{attrs:{type:"number",min:"0.00"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-secondary"}},[t._v("Button")]),n("b-button",{attrs:{variant:"outline-secondary"}},[t._v("Button")])],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code4.html)+" ")]},proxy:!0}])}),n("KTCodePreview",{attrs:{title:"Custom radio, checkbox, and switch addons"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" Using "),n("code",[t._v("<b-form-checkbox>")]),t._v(" and "),n("code",[t._v("<b-form-radio>")]),t._v(" components as addons, using Bootstrap "),n("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/reference/utility-classes",target:"_blank"}},[t._v("utility classes")]),t._v(" for additional styling to get them to "),n("code",[t._v('"fit"')]),t._v(" in the addon: ")]),n("div",[n("b-input-group",{staticClass:"mb-2"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-form-checkbox",{staticClass:"mr-n2"},[n("span",{staticClass:"sr-only"},[t._v(" Checkbox for following text input ")])])],1),n("b-form-input",{attrs:{"aria-label":"Text input with checkbox"}})],1),n("b-input-group",{staticClass:"mb-2"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-form-radio",{staticClass:"mr-n2"},[n("span",{staticClass:"sr-only"},[t._v("Radio for following text input")])])],1),n("b-form-input",{attrs:{"aria-label":"Text input with radio input"}})],1),n("b-input-group",[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("b-form-checkbox",{staticClass:"mr-n2",attrs:{switch:""}},[n("span",{staticClass:"sr-only"},[t._v("Switch for following text input")])])],1),n("b-form-input",{attrs:{"aria-label":"Text input with switch"}})],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code5.html)+" ")]},proxy:!0}])})],1)])],1)},a=[],o=n("d968"),i=n("25a6"),r={data:function(){return{code1:{html:'<div>\n  \x3c!-- Using props --\x3e\n  <b-input-group size="lg" prepend="$" append=".00">\n    <b-form-input></b-form-input>\n  </b-input-group>\n\n  \x3c!-- Using slots --\x3e\n  <b-input-group class="mt-3">\n    <template v-slot:append>\n      <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>\n    </template>\n    <b-form-input></b-form-input>\n  </b-input-group>\n\n  \x3c!-- Using components --\x3e\n  <b-input-group prepend="Username" class="mt-3">\n    <b-form-input></b-form-input>\n    <b-input-group-append>\n      <b-button variant="outline-success">Button</b-button>\n      <b-button variant="info">Button</b-button>\n    </b-input-group-append>\n  </b-input-group>\n</div>'},code2:{html:'<div>\n  <b-input-group prepend="$" append=".00">\n    <b-form-input></b-form-input>\n  </b-input-group>\n\n  <b-input-group prepend="0" append="100" class="mt-3">\n    <b-form-input type="range" min="0" max="100"></b-form-input>\n  </b-input-group>\n</div>'},code3:{html:'<div>\n  <b-input-group>\n    <template v-slot:prepend>\n      <b-input-group-text >Username</b-input-group-text>\n    </template>\n    <b-form-input></b-form-input>\n\n    <template v-slot:append>\n      <b-dropdown text="Dropdown" variant="success">\n        <b-dropdown-item>Action A</b-dropdown-item>\n        <b-dropdown-item>Action B</b-dropdown-item>\n      </b-dropdown>\n    </template>\n  </b-input-group>\n</div>'},code4:{html:'<div>\n  <b-input-group>\n    <b-input-group-prepend>\n      <b-button variant="outline-info">Button</b-button>\n    </b-input-group-prepend>\n\n    <b-form-input type="number" min="0.00"></b-form-input>\n\n    <b-input-group-append>\n      <b-button variant="outline-secondary">Button</b-button>\n      <b-button variant="outline-secondary">Button</b-button>\n    </b-input-group-append>\n  </b-input-group>\n</div>'},code5:{html:'<div>\n  <b-input-group class="mb-2">\n    <b-input-group-prepend is-text>\n      <b-form-checkbox class="mr-n2">\n        <span class="sr-only">Checkbox for following text input</span>\n      </b-form-checkbox>\n    </b-input-group-prepend>\n    <b-form-input aria-label="Text input with checkbox"></b-form-input>\n  </b-input-group>\n\n  <b-input-group class="mb-2">\n    <b-input-group-prepend is-text>\n      <b-form-radio class="mr-n2">\n        <span class="sr-only">Radio for following text input</span>\n      </b-form-radio>\n    </b-input-group-prepend>\n    <b-form-input aria-label="Text input with radio input"></b-form-input>\n  </b-input-group>\n\n  <b-input-group>\n    <b-input-group-prepend is-text>\n      <b-form-checkbox switch class="mr-n2">\n        <span class="sr-only">Switch for following text input</span>\n      </b-form-checkbox>\n    </b-input-group-prepend>\n    <b-form-input aria-label="Text input with switch"></b-form-input>\n  </b-input-group>\n</div>'}}},components:{KTCodePreview:o["a"]},mounted:function(){this.$store.dispatch(i["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Input Groups"}])}},l=r,p=n("2877"),u=Object(p["a"])(l,s,a,!1,null,null,null);e["default"]=u.exports},d968:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[n("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[n("div",{staticClass:"example-tools justify-content-center"},[n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():n("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?n("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():n("div",[n("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[n("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[n("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),n("b-tab",{staticClass:"example-highlight"},[n("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),n("b-tab",{staticClass:"example-highlight"},[n("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?n("div",{staticClass:"example-highlight"},[t.hasHtmlCode?n("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?n("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?n("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},a=[],o=(n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?n("div",{staticClass:"card-header",class:t.headClass},[n("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():n("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),n("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),n("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?n("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),i=[],r={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},l=r,p=n("2877"),u=Object(p["a"])(l,o,i,!1,null,null,null),c=u.exports,d=n("b2e9"),b={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:c},mounted:function(){var t=this;this.$nextTick((function(){d["a"].init([t.$el]);var e=t.$el.querySelectorAll(".hljs");e.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),n=e.querySelectorAll('[data-toggle="tab"]'),s=0;s<n.length;s++)n[s].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(n){t.$slots.hasOwnProperty(n)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},h=b,g=Object(p["a"])(h,s,a,!1,null,null,null);e["a"]=g.exports}}]);
//# sourceMappingURL=chunk-376a6cff.61f3cb69.js.map