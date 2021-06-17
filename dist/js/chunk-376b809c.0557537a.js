(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-376b809c"],{"6b42":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[s("div",{staticClass:"alert-icon"},[s("span",{staticClass:"svg-icon svg-icon-lg"},[s("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),s("div",{staticClass:"alert-text"},[s("b",[t._v("Form")]),t._v(" BootstrapVue form component and helper components that optionally support inline form styles and validation states. Pair them up with other BootstrapVue form control components for an easy customized, and responsive, layout with a consistent look and feel. "),s("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/form",target:"_blank"}},[t._v(" See documentation. ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("KTCodePreview",{attrs:{title:"Introduction to forms and controls"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v(" Be sure to use an appropriate "),s("code",[t._v("type")]),t._v(" on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like "),s("code",[t._v("email")]),t._v(" verification, "),s("code",[t._v("number")]),t._v(" selection, and more. ")]),s("div",[t.show?s("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[s("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[s("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),s("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[s("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),s("b-form-group",{attrs:{id:"input-group-3",label:"Food:","label-for":"input-3"}},[s("b-form-select",{attrs:{id:"input-3",options:t.foods,required:""},model:{value:t.form.food,callback:function(e){t.$set(t.form,"food",e)},expression:"form.food"}})],1),s("b-form-group",{attrs:{id:"input-group-4"}},[s("b-form-checkbox-group",{attrs:{id:"checkboxes-4"},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[s("b-form-checkbox",{attrs:{value:"me"}},[t._v("Check me out")]),s("b-form-checkbox",{attrs:{value:"that"}},[t._v(" Check that out ")])],1)],1),s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),s("b-button",{staticClass:"ml-2",attrs:{type:"reset",variant:"danger"}},[t._v(" Reset ")])],1):t._e(),s("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[s("pre",{staticClass:"m-0"},[t._v(t._s(t.form))])])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.html1)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.js1)+" ")]},proxy:!0}])}),s("KTCodePreview",{attrs:{title:"Inline form"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("p",[t._v(" Use the "),s("code",[t._v("inline")]),t._v(" prop on "),s("code",[t._v("<b-form>")]),t._v(" to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states. ")]),s("div",[s("b-form",{attrs:{inline:""}},[s("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-name"}},[t._v("Name")]),s("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inline-form-input-name",placeholder:"Jane Doe"}}),s("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-username"}},[t._v("Username")]),s("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"@"}},[s("b-input",{attrs:{id:"inline-form-input-username",placeholder:"Username"}})],1),s("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[t._v("Remember me ")]),s("b-button",{attrs:{variant:"primary"}},[t._v("Save")])],1)],1)]},proxy:!0},{key:"code",fn:function(){return[s("highlight-code",{attrs:{lang:"html"}},[t._v(" "+t._s(t.html2)+" ")])]},proxy:!0}])}),s("KTCodePreview",{attrs:{title:"Custom form controls and selects"},scopedSlots:t._u([{key:"preview",fn:function(){return[s("div",[s("b-form",{attrs:{inline:""}},[s("label",{staticClass:"mr-sm-2",attrs:{for:"inline-form-custom-select-pref"}},[t._v(" Preference ")]),s("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{value:null,options:{1:"One",2:"Two",3:"Three"},id:"inline-form-custom-select-pref"},scopedSlots:t._u([{key:"first",fn:function(){return[s("option",{domProps:{value:null}},[t._v("Choose...")])]},proxy:!0}])}),s("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[t._v(" Remember my preference ")]),s("b-button",{attrs:{variant:"primary"}},[t._v("Save")])],1)],1)]},proxy:!0},{key:"code",fn:function(){return[s("highlight-code",{attrs:{lang:"html"}},[t._v(" "+t._s(t.html3)+" ")])]},proxy:!0}])})],1)])],1)},o=[],n=(s("b0c0"),s("d968")),r=s("25a6"),i={data:function(){return{html1:'<div>\n    <b-form @submit="onSubmit" @reset="onReset" v-if="show">\n      <b-form-group\n        id="input-group-1"\n        label="Email address:"\n        label-for="input-1"\n        description="We\'ll never share your email with anyone else."\n      >\n        <b-form-input\n          id="input-1"\n          v-model="form.email"\n          type="email"\n          required\n          placeholder="Enter email"\n        ></b-form-input>\n      </b-form-group>\n\n      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">\n        <b-form-input\n          id="input-2"\n          v-model="form.name"\n          required\n          placeholder="Enter name"\n        ></b-form-input>\n      </b-form-group>\n\n      <b-form-group id="input-group-3" label="Food:" label-for="input-3">\n        <b-form-select\n          id="input-3"\n          v-model="form.food"\n          :options="foods"\n          required\n        ></b-form-select>\n      </b-form-group>\n\n      <b-form-group id="input-group-4">\n        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">\n          <b-form-checkbox value="me">Check me out</b-form-checkbox>\n          <b-form-checkbox value="that">Check that out</b-form-checkbox>\n        </b-form-checkbox-group>\n      </b-form-group>\n\n      <b-button type="submit" variant="primary">Submit</b-button>\n      <b-button type="reset" variant="danger">Reset</b-button>\n    </b-form>\n    <b-card class="mt-3" header="Form Data Result">\n      <pre class="m-0">{{ form }}</pre>\n    </b-card>\n  </div>',js1:"\n  export default {\n    data() {\n      return {\n        form: {\n          email: '',\n          name: '',\n          food: null,\n          checked: []\n        },\n        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],\n        show: true\n      }\n    },\n    methods: {\n      onSubmit(evt) {\n        evt.preventDefault()\n        alert(JSON.stringify(this.form))\n      },\n      onReset(evt) {\n        evt.preventDefault()\n        // Reset our form values\n        this.form.email = ''\n        this.form.name = ''\n        this.form.food = null\n        this.form.checked = []\n        // Trick to reset/clear native browser form validation state\n        this.show = false\n        this.$nextTick(() => {\n          this.show = true\n        })\n      }\n    }\n  }",form:{email:"",name:"",food:null,checked:[]},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"],show:!0,html2:'<div>\n  <b-form inline>\n    <label class="sr-only" for="inline-form-input-name">Name</label>\n    <b-input\n      id="inline-form-input-name"\n      class="mb-2 mr-sm-2 mb-sm-0"\n      placeholder="Jane Doe"\n    ></b-input>\n\n    <label class="sr-only" for="inline-form-input-username">Username</label>\n    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">\n      <b-input id="inline-form-input-username" placeholder="Username"></b-input>\n    </b-input-group>\n\n    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>\n\n    <b-button variant="primary">Save</b-button>\n  </b-form>\n</div>',html3:'<div>\n  <b-form inline>\n    <label class="mr-sm-2" for="inline-form-custom-select-pref">Preference</label>\n    <b-form-select\n      class="mb-2 mr-sm-2 mb-sm-0"\n      :value="null"\n      :options="{ \'1\': \'One\', \'2\': \'Two\', \'3\': \'Three\' }"\n      id="inline-form-custom-select-pref"\n    >\n      <template v-slot:first>\n        <option :value="null">Choose...</option>\n      </template>\n    </b-form-select>\n\n    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember my preference</b-form-checkbox>\n\n    <b-button variant="primary">Save</b-button>\n  </b-form>\n</div>'}},components:{KTCodePreview:n["a"]},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick((function(){e.show=!0}))}},mounted:function(){this.$store.dispatch(r["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Form"}])}},l=i,c=s("2877"),m=Object(c["a"])(l,a,o,!1,null,null,null);e["default"]=m.exports},d968:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[s("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[s("div",{staticClass:"example-tools justify-content-center"},[s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():s("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?s("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():s("div",[s("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[s("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[s("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),s("b-tab",{staticClass:"example-highlight"},[s("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),s("b-tab",{staticClass:"example-highlight"},[s("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?s("div",{staticClass:"example-highlight"},[t.hasHtmlCode?s("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?s("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?s("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},o=[],n=(s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?s("div",{staticClass:"card-header",class:t.headClass},[s("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():s("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),s("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),s("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?s("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),r=[],i={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},l=i,c=s("2877"),m=Object(c["a"])(l,n,r,!1,null,null,null),u=m.exports,d=s("b2e9"),h={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:u},mounted:function(){var t=this;this.$nextTick((function(){d["a"].init([t.$el]);var e=t.$el.querySelectorAll(".hljs");e.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),s=e.querySelectorAll('[data-toggle="tab"]'),a=0;a<s.length;a++)s[a].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(s){t.$slots.hasOwnProperty(s)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},b=h,f=Object(c["a"])(b,a,o,!1,null,null,null);e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-376b809c.0557537a.js.map