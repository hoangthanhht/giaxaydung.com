(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20f67ecf"],{d9f7:function(t,o,n){"use strict";n.d(o,"a",(function(){return c})),n.d(o,"d",(function(){return v})),n.d(o,"b",(function(){return p})),n.d(o,"c",(function(){return d}));var e=n("5530"),a=n("3835"),s=n("b85c"),r=(n("ac1f"),n("1276"),n("498a"),n("b64b"),n("99af"),n("80d2")),i={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function l(t){var o,n={},e=Object(s["a"])(t.split(i.styleList));try{for(e.s();!(o=e.n()).done;){var l=o.value,c=l.split(i.styleProp),v=Object(a["a"])(c,2),p=v[0],d=v[1];p=p.trim(),p&&("string"===typeof d&&(d=d.trim()),n[Object(r["d"])(p)]=d)}}catch(u){e.e(u)}finally{e.f()}return n}function c(){var t,o={},n=arguments.length;while(n--)for(var a=0,s=Object.keys(arguments[n]);a<s.length;a++)switch(t=s[a],t){case"class":case"directives":arguments[n][t]&&(o[t]=p(o[t],arguments[n][t]));break;case"style":arguments[n][t]&&(o[t]=v(o[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===o[t]&&(o[t]=""),o[t]&&(o[t]+=" "),o[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(o[t]=d(o[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;o[t]||(o[t]={}),o[t]=Object(e["a"])(Object(e["a"])({},arguments[n][t]),o[t]);break;default:o[t]||(o[t]=arguments[n][t])}return o}function v(t,o){return t?o?(t=Object(r["I"])("string"===typeof t?l(t):t),t.concat("string"===typeof o?l(o):o)):t:o}function p(t,o){return o?t&&t?Object(r["I"])(t).concat(o):o:t}function d(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},o=2;o--;){var n=o<0||arguments.length<=o?void 0:arguments[o];for(var e in n)n[e]&&(t[e]?t[e]=[].concat(n[e],t[e]):t[e]=n[e])}return t}},e5ea:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[n("div",{staticClass:"alert-icon"},[n("span",{staticClass:"svg-icon svg-icon-lg"},[n("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),n("div",{staticClass:"alert-text"},[n("b",[t._v("Tooltips")]),t._v(" The "),n("code",[t._v("v-tooltip")]),t._v(" component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a "),n("code",[t._v("v-model")]),t._v(". When activated, tooltips display a text label identifying an element, such as a description of its function. "),n("a",{staticClass:"font-weight-bold",attrs:{href:"https://vuetifyjs.com/en/components/tooltips",target:"_blank"}},[t._v(" See documentation. ")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("KTCodePreview",{attrs:{title:"Alignment"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" A tooltip can be aligned to any of the four sides of the activator element ")]),n("div",{staticClass:"text-center"},[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("v-btn",t._g({staticClass:"mr-4",attrs:{color:"primary",dark:""}},e),[t._v("Left")])]}}])},[n("span",[t._v("Left tooltip")])]),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("v-btn",t._g({staticClass:"mr-4",attrs:{color:"primary",dark:""}},e),[t._v("Top")])]}}])},[n("span",[t._v("Top tooltip")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("v-btn",t._g({staticClass:"mr-4",attrs:{color:"primary",dark:""}},e),[t._v("Bottom")])]}}])},[n("span",[t._v("Bottom tooltip")])]),n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("v-btn",t._g({staticClass:"mr-4",attrs:{color:"primary",dark:""}},e),[t._v("Right")])]}}])},[n("span",[t._v("Right tooltip")])])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])})],1),n("div",{staticClass:"col-md-6"},[n("KTCodePreview",{attrs:{title:"Visibility"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" Tooltip visibility can be programmatically changed using "),n("code",[t._v("v-model")]),t._v(". ")]),n("v-container",{staticClass:"text-center",attrs:{fluid:""}},[n("v-row",{staticClass:"flex",attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{on:{click:function(o){t.show=!t.show}}},[t._v("toggle")])],1),n("v-col",{staticClass:"mt-12",attrs:{cols:"12"}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("v-btn",t._g({attrs:{icon:""}},e),[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-cart")])],1)]}}]),model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[n("span",[t._v("Programmatic tooltip")])])],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code2.js)+" ")]},proxy:!0}])})],1)])],1)},a=[],s=n("d968"),r=n("25a6"),i={data:function(){return{code1:{html:' <div class="text-center">\n  <v-tooltip left>\n    <template v-slot:activator="{ on }">\n      <v-btn color="primary" dark v-on="on">Left</v-btn>\n    </template>\n    <span>Left tooltip</span>\n  </v-tooltip>\n\n  <v-tooltip top>\n    <template v-slot:activator="{ on }">\n      <v-btn color="primary" dark v-on="on">Top</v-btn>\n    </template>\n    <span>Top tooltip</span>\n  </v-tooltip>\n\n  <v-tooltip bottom>\n    <template v-slot:activator="{ on }">\n      <v-btn color="primary" dark v-on="on">Bottom</v-btn>\n    </template>\n    <span>Bottom tooltip</span>\n  </v-tooltip>\n\n  <v-tooltip right>\n    <template v-slot:activator="{ on }">\n      <v-btn color="primary" dark v-on="on">Right</v-btn>\n    </template>\n    <span>Right tooltip</span>\n  </v-tooltip>\n</div>'},code2:{html:'<v-container fluid class="text-center">\n  <v-row\n    class="flex"\n    justify="space-between"\n  >\n    <v-col cols="12">\n      <v-btn @click="show = !show">toggle</v-btn>\n    </v-col>\n\n    <v-col cols="12" class="mt-12">\n      <v-tooltip v-model="show" top>\n        <template v-slot:activator="{ on }">\n          <v-btn icon v-on="on">\n            <v-icon color="grey lighten-1">mdi-cart</v-icon>\n          </v-btn>\n        </template>\n        <span>Programmatic tooltip</span>\n      </v-tooltip>\n    </v-col>\n  </v-row>\n</v-container>',js:"export default {\n  data () {\n    return {\n      show: false,\n    }\n  },\n}"},show:!1}},components:{KTCodePreview:s["a"]},mounted:function(){this.$store.dispatch(r["a"],[{title:"Vuetify",route:"alerts"},{title:"Tooltips"}])}},l=i,c=n("2877"),v=n("6544"),p=n.n(v),d=n("8336"),u=n("62ad"),f=n("a523"),m=n("132d"),h=n("0fd9"),b=n("3a2f"),g=Object(c["a"])(l,e,a,!1,null,null,null);o["default"]=g.exports;p()(g,{VBtn:d["a"],VCol:u["a"],VContainer:f["a"],VIcon:m["a"],VRow:h["a"],VTooltip:b["a"]})}}]);
//# sourceMappingURL=chunk-20f67ecf.ad241e9a.js.map