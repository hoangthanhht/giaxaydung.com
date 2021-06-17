(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3780ed6d"],{d968:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[e("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[e("div",{staticClass:"example-tools justify-content-center"},[e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[e("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():e("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?e("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():e("div",[e("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(a){t.tabIndex=a},expression:"tabIndex"}},[e("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[e("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),e("b-tab",{staticClass:"example-highlight"},[e("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),e("b-tab",{staticClass:"example-highlight"},[e("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?e("div",{staticClass:"example-highlight"},[t.hasHtmlCode?e("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?e("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?e("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},i=[],l=(e("159b"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?e("div",{staticClass:"card-header",class:t.headClass},[e("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():e("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),e("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),e("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?e("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),o=[],n={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},r=n,c=e("2877"),m=Object(c["a"])(r,l,o,!1,null,null,null),g=m.exports,h=e("b2e9"),d={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:g},mounted:function(){var t=this;this.$nextTick((function(){h["a"].init([t.$el]);var a=t.$el.querySelectorAll(".hljs");a.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var a=t.target.closest('[role="tablist"]'),e=a.querySelectorAll('[data-toggle="tab"]'),s=0;s<e.length;s++)e[s].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,a=0;return["html","js","scss"].forEach((function(e){t.$slots.hasOwnProperty(e)&&a++})),1===a},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},p=d,u=Object(c["a"])(p,s,i,!1,null,null,null);a["a"]=u.exports},ef71:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[e("div",{staticClass:"alert-icon"},[e("span",{staticClass:"svg-icon svg-icon-lg"},[e("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),e("div",{staticClass:"alert-text"},[e("b",[t._v("Images")]),t._v(" Documentation and examples for opting images (via <b-img> component) into responsive behavior (so they never become larger than their parent elements), optionally adding lightweight styles to them — all via props. "),e("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/form-textarea",target:"_blank"}},[t._v(" See documentation. ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("KTCodePreview",{attrs:{title:"Responsive images"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" Images in BootstrapVue can be made responsive with the "),e("code",[t._v("fluid")]),t._v(" prop (which sets "),e("code",[t._v("max-width: 100%; height: auto;")]),t._v(" via CSS classes) so that it scales with the parent element - up to the maximum native width of the image. ")]),e("div",[e("b-img",{attrs:{src:"https://picsum.photos/1024/400/?image=41",fluid:"",alt:"Responsive image"}})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])}),e("KTCodePreview",{attrs:{title:"Fluid grow"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" To make a fluid image that will grow to fill the width of its container, use the "),e("code",[t._v("fluid-grow")]),t._v(" prop. Note this may cause blurring on small bitmap images. ")]),e("div",[e("h5",[t._v("Small image with "),e("code",[t._v("fluid")]),t._v(":")]),e("b-img",{attrs:{src:"https://picsum.photos/300/150/?image=41",fluid:"",alt:"Fluid image"}}),e("h5",{staticClass:"my-3"},[t._v("Small image with "),e("code",[t._v("fluid-grow")]),t._v(":")]),e("b-img",{attrs:{src:"https://picsum.photos/300/150/?image=41","fluid-grow":"",alt:"Fluid-grow image"}})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0}])}),e("KTCodePreview",{attrs:{title:"Image thumbnails"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" You can use prop "),e("code",[t._v("thumbnail")]),t._v(" to give an image a rounded light border appearance. ")]),e("b-container",{staticClass:"p-4 bg-dark",attrs:{fluid:""}},[e("b-row",[e("b-col",[e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://picsum.photos/250/250/?image=54",alt:"Image 1"}})],1),e("b-col",[e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://picsum.photos/250/250/?image=58",alt:"Image 2"}})],1),e("b-col",[e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://picsum.photos/250/250/?image=59",alt:"Image 3"}})],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0}])}),e("KTCodePreview",{attrs:{title:"Aligning images"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" Align images with the boolean props "),e("code",[t._v("left")]),t._v(" (floats left) "),e("code",[t._v("right")]),t._v(" (floats right), and "),e("code",[t._v("center")]),t._v(" (auto left+right margins). You can also center images by placing them in a container that has the class "),e("code",[t._v("text-center")]),t._v(". ")]),e("div",{staticClass:"clearfix"},[e("b-img",{attrs:{left:"",src:"https://picsum.photos/125/125/?image=58",alt:"Left image"}}),e("b-img",{attrs:{right:"",src:"https://picsum.photos/125/125/?image=58",alt:"Right image"}})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code4.html)+" ")]},proxy:!0}])}),e("KTCodePreview",{attrs:{title:"Lazy loaded images"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" Use our complementary "),e("code",[t._v("<b-img-lazy>")]),t._v(" image component (based on "),e("code",[t._v(" <b-img>")]),t._v(") to lazy load images as they are scrolled into view (or within "),e("code",[t._v("offset")]),t._v(" pixels of the viewport). ")]),e("div",[e("b-img-lazy",t._b({attrs:{src:t.getImageUrl(80),alt:"Image 1"}},"b-img-lazy",t.mainProps,!1)),e("b-img-lazy",t._b({attrs:{src:t.getImageUrl(82),alt:"Image 2"}},"b-img-lazy",t.mainProps,!1)),e("b-img-lazy",t._b({attrs:{src:t.getImageUrl(84),alt:"Image 3"}},"b-img-lazy",t.mainProps,!1)),e("b-img-lazy",t._b({attrs:{src:t.getImageUrl(85),alt:"Image 4"}},"b-img-lazy",t.mainProps,!1)),e("b-img-lazy",t._b({attrs:{src:t.getImageUrl(88),alt:"Image 5"}},"b-img-lazy",t.mainProps,!1)),e("b-img-lazy",t._b({attrs:{src:t.getImageUrl(90),alt:"Image 6"}},"b-img-lazy",t.mainProps,!1)),e("b-img-lazy",t._b({attrs:{src:t.getImageUrl(92),alt:"Image 7"}},"b-img-lazy",t.mainProps,!1)),e("b-img-lazy",t._b({attrs:{src:t.getImageUrl(94),alt:"Image 8"}},"b-img-lazy",t.mainProps,!1))],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code5.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code5.js)+" ")]},proxy:!0}])})],1)])],1)},i=[],l=(e("99af"),e("d968")),o=e("25a6"),n={data:function(){return{code1:{html:'<div>\n  <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>\n</div>'},code2:{html:'<div>\n  <h5>Small image with <code>fluid</code>:</h5>\n  <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>\n\n  <h5 class="my-3">Small image with <code>fluid-grow</code>:</h5>\n  <b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-grow image"></b-img>\n</div>'},code3:{html:'<b-container fluid class="p-4 bg-dark">\n  <b-row>\n    <b-col>\n      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>\n    </b-col>\n    <b-col>\n      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>\n    </b-col>\n    <b-col>\n      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>\n    </b-col>\n  </b-row>\n</b-container>'},code4:{html:'<div class="clearfix">\n  <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>\n  <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image"></b-img>\n</div>'},code5:{html:'<div>\n    <b-img-lazy v-bind="mainProps" :src="getImageUrl(80)" alt="Image 1"></b-img-lazy>\n    <b-img-lazy v-bind="mainProps" :src="getImageUrl(82)" alt="Image 2"></b-img-lazy>\n    <b-img-lazy v-bind="mainProps" :src="getImageUrl(84)" alt="Image 3"></b-img-lazy>\n    <b-img-lazy v-bind="mainProps" :src="getImageUrl(85)" alt="Image 4"></b-img-lazy>\n    <b-img-lazy v-bind="mainProps" :src="getImageUrl(88)" alt="Image 5"></b-img-lazy>\n    <b-img-lazy v-bind="mainProps" :src="getImageUrl(90)" alt="Image 6"></b-img-lazy>\n    <b-img-lazy v-bind="mainProps" :src="getImageUrl(92)" alt="Image 7"></b-img-lazy>\n    <b-img-lazy v-bind="mainProps" :src="getImageUrl(94)" alt="Image 8"></b-img-lazy>\n  </div>',js:"export default {\n    data() {\n      return {\n        mainProps: {\n          center: true,\n          fluidGrow: true,\n          blank: true,\n          blankColor: '#bbb',\n          width: 600,\n          height: 400,\n          class: 'my-5'\n        }\n      }\n    },\n    methods: {\n      getImageUrl(imageId) {\n        const { width, height } = this.mainProps\n        return `https://picsum.photos/${width}/${height}/?image=${imageId}`\n      }\n    }\n  }"},mainProps:{center:!0,fluidGrow:!0,blank:!0,blankColor:"#bbb",width:600,height:400,class:"my-5"}}},components:{KTCodePreview:l["a"]},methods:{getImageUrl:function(t){var a=this.mainProps,e=a.width,s=a.height;return"https://picsum.photos/".concat(e,"/").concat(s,"/?image=").concat(t)}},mounted:function(){this.$store.dispatch(o["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Images"}])}},r=n,c=e("2877"),m=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-3780ed6d.f516264b.js.map