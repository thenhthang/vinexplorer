import{h as g,r as U,o as N,c as A,n as O,e as y,bB as ve,K as R,f as L,B as J,t as E,d as ye,x as me,L as ge,b as be,a1 as xe,g as j,P as je,F as _e,i as Te}from"./index-d9f5ae92.js";import{a as Ee}from"./index-a85e638e.js";import"./index-4b03c56f.js";function z(n){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(n)}var Ce=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/,K={name:"JsonString",props:{jsonValue:{type:String,required:!0}},data:function(){return{expand:!0,canExtend:!1}},mounted:function(){this.$refs.itemRef.offsetHeight>this.$refs.holderRef.offsetHeight&&(this.canExtend=!0)},methods:{toggle:function(){this.expand=!this.expand}},render:function(){var e=this.jsonValue,o=Ce.test(e),i;return this.expand?(i={class:{"jv-item":!0,"jv-string":!0},ref:"itemRef"},o?(e='<a href="'.concat(e,'" target="_blank" class="jv-link">').concat(e,"</a>"),i.innerHTML='"'.concat(e.toString(),'"')):i.innerText='"'.concat(e.toString(),'"')):i={class:{"jv-ellipsis":!0},onClick:this.toggle,innerText:"..."},g("span",{},[this.canExtend&&g("span",{class:{"jv-toggle":!0,open:this.expand},onClick:this.toggle}),g("span",{class:{"jv-holder-node":!0},ref:"holderRef"}),g("span",i)])}};K.__file="src/Components/types/json-string.vue";var Z={name:"JsonUndefined",functional:!0,props:{jsonValue:{type:Object,default:null}},render:function(){return g("span",{class:{"jv-item":!0,"jv-undefined":!0},innerText:this.jsonValue===null?"null":"undefined"})}};Z.__file="src/Components/types/json-undefined.vue";var G={name:"JsonNumber",functional:!0,props:{jsonValue:{type:Number,required:!0}},render:function(){var e=Number.isInteger(this.jsonValue);return g("span",{class:{"jv-item":!0,"jv-number":!0,"jv-number-integer":e,"jv-number-float":!e},innerText:this.jsonValue.toString()})}};G.__file="src/Components/types/json-number.vue";var Y={name:"JsonBoolean",functional:!0,props:{jsonValue:Boolean},render:function(){return g("span",{class:{"jv-item":!0,"jv-boolean":!0},innerText:this.jsonValue.toString()})}};Y.__file="src/Components/types/json-boolean.vue";var X={name:"JsonObject",props:{jsonValue:{type:Object,required:!0},keyName:{type:String,default:""},depth:{type:Number,default:0},expand:Boolean,sort:Boolean,previewMode:Boolean},data:function(){return{value:{}}},computed:{ordered:function(){var e=this;if(!this.sort)return this.value;var o={};return Object.keys(this.value).sort().forEach(function(i){o[i]=e.value[i]}),o}},watch:{jsonValue:function(e){this.setValue(e)}},mounted:function(){this.setValue(this.jsonValue)},methods:{setValue:function(e){var o=this;setTimeout(function(){o.value=e},0)},toggle:function(){this.$emit("update:expand",!this.expand),this.dispatchEvent()},dispatchEvent:function(){try{this.$el.dispatchEvent(new Event("resized"))}catch{var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render:function(){var e=[];if(!this.previewMode&&!this.keyName&&e.push(g("span",{class:{"jv-toggle":!0,open:!!this.expand},onClick:this.toggle})),e.push(g("span",{class:{"jv-item":!0,"jv-object":!0},innerText:"{"})),this.expand){for(var o in this.ordered)if(this.ordered.hasOwnProperty(o)){var i=this.ordered[o];e.push(g(D,{key:o,style:{display:this.expand?void 0:"none"},sort:this.sort,keyName:o,depth:this.depth+1,value:i,previewMode:this.previewMode}))}}return!this.expand&&Object.keys(this.value).length&&e.push(g("span",{style:{display:this.expand?"none":void 0},class:{"jv-ellipsis":!0},onClick:this.toggle,title:"click to reveal object content (keys: ".concat(Object.keys(this.ordered).join(", "),")"),innerText:"..."})),e.push(g("span",{class:{"jv-item":!0,"jv-object":!0},innerText:"}"})),g("span",e)}};X.__file="src/Components/types/json-object.vue";var Q={name:"JsonArray",props:{jsonValue:{type:Array,required:!0},keyName:{type:String,default:""},depth:{type:Number,default:0},sort:Boolean,expand:Boolean,previewMode:Boolean},data:function(){return{value:[]}},watch:{jsonValue:function(e){this.setValue(e)}},mounted:function(){this.setValue(this.jsonValue)},methods:{setValue:function(e){var o=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;i===0&&(this.value=[]),setTimeout(function(){e.length>i&&(o.value.push(e[i]),o.setValue(e,i+1))},0)},toggle:function(){this.$emit("update:expand",!this.expand);try{this.$el.dispatchEvent(new Event("resized"))}catch{var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render:function(){var e=this,o=[];return!this.previewMode&&!this.keyName&&o.push(g("span",{class:{"jv-toggle":!0,open:!!this.expand},onClick:this.toggle})),o.push(g("span",{class:{"jv-item":!0,"jv-array":!0},innerText:"["})),this.expand&&this.value.forEach(function(i,a){o.push(g(D,{key:a,style:{display:e.expand?void 0:"none"},sort:e.sort,depth:e.depth+1,value:i,previewMode:e.previewMode}))}),!this.expand&&this.value.length&&o.push(g("span",{style:{display:void 0},class:{"jv-ellipsis":!0},onClick:this.toggle,title:"click to reveal ".concat(this.value.length," hidden items"),innerText:"..."})),o.push(g("span",{class:{"jv-item":!0,"jv-array":!0},innerText:"]"})),g("span",o)}};Q.__file="src/Components/types/json-array.vue";var W={name:"JsonFunction",functional:!0,props:{jsonValue:{type:Function,required:!0}},render:function(){return g("span",{class:{"jv-item":!0,"jv-function":!0},attrs:{title:this.jsonValue.toString()},innerHTML:"&lt;function&gt;"})}};W.__file="src/Components/types/json-function.vue";var ee={name:"JsonDate",inject:["timeformat"],functional:!0,props:{jsonValue:{type:Date,required:!0}},render:function(){var e=this.jsonValue,o=this.timeformat;return g("span",{class:{"jv-item":!0,"jv-string":!0},innerText:'"'.concat(o(e),'"')})}};ee.__file="src/Components/types/json-date.vue";var we=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/,te={name:"JsonString",props:{jsonValue:{type:RegExp,required:!0}},data:function(){return{expand:!0,canExtend:!1}},mounted:function(){this.$refs.itemRef.offsetHeight>this.$refs.holderRef.offsetHeight&&(this.canExtend=!0)},methods:{toggle:function(){this.expand=!this.expand}},render:function(){var e=this.jsonValue,o=we.test(e),i;return this.expand?(i={class:{"jv-item":!0,"jv-string":!0},ref:"itemRef"},o?(e='<a href="'.concat(e,'" target="_blank" class="jv-link">').concat(e,"</a>"),i.innerHTML="".concat(e.toString())):i.innerText="".concat(e.toString())):i={class:{"jv-ellipsis":!0},onClick:this.toggle,innerText:"..."},g("span",{},[this.canExtend&&g("span",{class:{"jv-toggle":!0,open:this.expand},onClick:this.toggle}),g("span",{class:{"jv-holder-node":!0},ref:"holderRef"}),g("span",i)])}};te.__file="src/Components/types/json-regexp.vue";var D={name:"JsonBox",inject:["expandDepth","keyClick"],props:{value:{type:[Object,Array,String,Number,Boolean,Function,Date],default:null},keyName:{type:String,default:""},sort:Boolean,depth:{type:Number,default:0},previewMode:Boolean},data:function(){return{expand:!0}},mounted:function(){this.expand=this.previewMode||!(this.depth>=this.expandDepth)},methods:{toggle:function(){this.expand=!this.expand;try{this.$el.dispatchEvent(new Event("resized"))}catch{var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render:function(){var e=this,o=[],i;this.value===null||this.value===void 0?i=Z:Array.isArray(this.value)?i=Q:Object.prototype.toString.call(this.value)==="[object Date]"?i=ee:this.value.constructor===RegExp?i=te:z(this.value)==="object"?i=X:typeof this.value=="number"?i=G:typeof this.value=="string"?i=K:typeof this.value=="boolean"?i=Y:typeof this.value=="function"&&(i=W);var a=this.keyName&&this.value&&(Array.isArray(this.value)||z(this.value)==="object"&&Object.prototype.toString.call(this.value)!=="[object Date]");return!this.previewMode&&a&&o.push(g("span",{class:{"jv-toggle":!0,open:!!this.expand},onClick:this.toggle})),this.keyName&&o.push(g("span",{class:{"jv-key":!0},onClick:function(){e.keyClick(e.keyName)},innerText:"".concat(this.keyName,":")})),o.push(g(i,{class:{"jv-push":!0},jsonValue:this.value,keyName:this.keyName,sort:this.sort,depth:this.depth,expand:this.expand,previewMode:this.previewMode,"onUpdate:expand":function(r){e.expand=r}})),g("div",{class:{"jv-node":!0,"jv-key-node":!!this.keyName&&!a,toggle:!this.previewMode&&a}},o)}};D.__file="src/Components/json-box.vue";var ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Se(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ne={exports:{}};(function(n,e){(function(i,a){n.exports=a()})(ke,function(){return function(){var o={686:function(l,r,t){t.d(r,{default:function(){return he}});var p=t(279),h=t.n(p),m=t(370),T=t.n(m),_=t(817),w=t.n(_);function b(d){try{return document.execCommand(d)}catch{return!1}}var C=function(u){var s=w()(u);return b("cut"),s},x=C;function S(d){var u=document.documentElement.getAttribute("dir")==="rtl",s=document.createElement("textarea");s.style.fontSize="12pt",s.style.border="0",s.style.padding="0",s.style.margin="0",s.style.position="absolute",s.style[u?"right":"left"]="-9999px";var f=window.pageYOffset||document.documentElement.scrollTop;return s.style.top="".concat(f,"px"),s.setAttribute("readonly",""),s.value=d,s}var oe=function(u){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},f="";if(typeof u=="string"){var c=S(u);s.container.appendChild(c),f=w()(c),b("copy"),c.remove()}else f=w()(u),b("copy");return f},P=oe;function $(d){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$=function(s){return typeof s}:$=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},$(d)}var re=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=u.action,f=s===void 0?"copy":s,c=u.container,v=u.target,k=u.text;if(f!=="copy"&&f!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(v!==void 0)if(v&&$(v)==="object"&&v.nodeType===1){if(f==="copy"&&v.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(f==="cut"&&(v.hasAttribute("readonly")||v.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(k)return P(k,{container:c});if(v)return f==="cut"?x(v):P(v,{container:c})},ie=re;function V(d){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?V=function(s){return typeof s}:V=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},V(d)}function se(d,u){if(!(d instanceof u))throw new TypeError("Cannot call a class as a function")}function q(d,u){for(var s=0;s<u.length;s++){var f=u[s];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(d,f.key,f)}}function ae(d,u,s){return u&&q(d.prototype,u),s&&q(d,s),d}function ue(d,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");d.prototype=Object.create(u&&u.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),u&&H(d,u)}function H(d,u){return H=Object.setPrototypeOf||function(f,c){return f.__proto__=c,f},H(d,u)}function le(d){var u=fe();return function(){var f=M(d),c;if(u){var v=M(this).constructor;c=Reflect.construct(f,arguments,v)}else c=f.apply(this,arguments);return ce(this,c)}}function ce(d,u){return u&&(V(u)==="object"||typeof u=="function")?u:de(d)}function de(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function fe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function M(d){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)},M(d)}function F(d,u){var s="data-clipboard-".concat(d);if(u.hasAttribute(s))return u.getAttribute(s)}var pe=function(d){ue(s,d);var u=le(s);function s(f,c){var v;return se(this,s),v=u.call(this),v.resolveOptions(c),v.listenClick(f),v}return ae(s,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=V(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var v=this;this.listener=T()(c,"click",function(k){return v.onClick(k)})}},{key:"onClick",value:function(c){var v=c.delegateTarget||c.currentTarget,k=this.action(v)||"copy",B=ie({action:k,container:this.container,target:this.target(v),text:this.text(v)});this.emit(B?"success":"error",{action:k,text:B,trigger:v,clearSelection:function(){v&&v.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(c){return F("action",c)}},{key:"defaultTarget",value:function(c){var v=F("target",c);if(v)return document.querySelector(v)}},{key:"defaultText",value:function(c){return F("text",c)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(c){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return P(c,v)}},{key:"cut",value:function(c){return x(c)}},{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof c=="string"?[c]:c,k=!!document.queryCommandSupported;return v.forEach(function(B){k=k&&!!document.queryCommandSupported(B)}),k}}]),s}(h()),he=pe},828:function(l){var r=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function p(h,m){for(;h&&h.nodeType!==r;){if(typeof h.matches=="function"&&h.matches(m))return h;h=h.parentNode}}l.exports=p},438:function(l,r,t){var p=t(828);function h(_,w,b,C,x){var S=T.apply(this,arguments);return _.addEventListener(b,S,x),{destroy:function(){_.removeEventListener(b,S,x)}}}function m(_,w,b,C,x){return typeof _.addEventListener=="function"?h.apply(null,arguments):typeof b=="function"?h.bind(null,document).apply(null,arguments):(typeof _=="string"&&(_=document.querySelectorAll(_)),Array.prototype.map.call(_,function(S){return h(S,w,b,C,x)}))}function T(_,w,b,C){return function(x){x.delegateTarget=p(x.target,w),x.delegateTarget&&C.call(_,x)}}l.exports=m},879:function(l,r){r.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},r.nodeList=function(t){var p=Object.prototype.toString.call(t);return t!==void 0&&(p==="[object NodeList]"||p==="[object HTMLCollection]")&&"length"in t&&(t.length===0||r.node(t[0]))},r.string=function(t){return typeof t=="string"||t instanceof String},r.fn=function(t){var p=Object.prototype.toString.call(t);return p==="[object Function]"}},370:function(l,r,t){var p=t(879),h=t(438);function m(b,C,x){if(!b&&!C&&!x)throw new Error("Missing required arguments");if(!p.string(C))throw new TypeError("Second argument must be a String");if(!p.fn(x))throw new TypeError("Third argument must be a Function");if(p.node(b))return T(b,C,x);if(p.nodeList(b))return _(b,C,x);if(p.string(b))return w(b,C,x);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function T(b,C,x){return b.addEventListener(C,x),{destroy:function(){b.removeEventListener(C,x)}}}function _(b,C,x){return Array.prototype.forEach.call(b,function(S){S.addEventListener(C,x)}),{destroy:function(){Array.prototype.forEach.call(b,function(S){S.removeEventListener(C,x)})}}}function w(b,C,x){return h(document.body,b,C,x)}l.exports=m},817:function(l){function r(t){var p;if(t.nodeName==="SELECT")t.focus(),p=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var h=t.hasAttribute("readonly");h||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),h||t.removeAttribute("readonly"),p=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var m=window.getSelection(),T=document.createRange();T.selectNodeContents(t),m.removeAllRanges(),m.addRange(T),p=m.toString()}return p}l.exports=r},279:function(l){function r(){}r.prototype={on:function(t,p,h){var m=this.e||(this.e={});return(m[t]||(m[t]=[])).push({fn:p,ctx:h}),this},once:function(t,p,h){var m=this;function T(){m.off(t,T),p.apply(h,arguments)}return T._=p,this.on(t,T,h)},emit:function(t){var p=[].slice.call(arguments,1),h=((this.e||(this.e={}))[t]||[]).slice(),m=0,T=h.length;for(m;m<T;m++)h[m].fn.apply(h[m].ctx,p);return this},off:function(t,p){var h=this.e||(this.e={}),m=h[t],T=[];if(m&&p)for(var _=0,w=m.length;_<w;_++)m[_].fn!==p&&m[_].fn._!==p&&T.push(m[_]);return T.length?h[t]=T:delete h[t],this}},l.exports=r,l.exports.TinyEmitter=r}},i={};function a(l){if(i[l])return i[l].exports;var r=i[l]={exports:{}};return o[l](r,r.exports,a),r.exports}return function(){a.n=function(l){var r=l&&l.__esModule?function(){return l.default}:function(){return l};return a.d(r,{a:r}),r}}(),function(){a.d=function(l,r){for(var t in r)a.o(r,t)&&!a.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:r[t]})}}(),function(){a.o=function(l,r){return Object.prototype.hasOwnProperty.call(l,r)}}(),a(686)}().default})})(ne);var Ne=Se(ne.exports),Ae=function(e,o){var i=Date.now(),a;return function(){for(var l=arguments.length,r=new Array(l),t=0;t<l;t++)r[t]=arguments[t];Date.now()-i<o&&a&&clearTimeout(a),a=setTimeout(function(){e.apply(void 0,r)},o),i=Date.now()}},I={name:"JsonViewer",components:{JsonBox:D},props:{value:{type:[Object,Array,String,Number,Boolean,Function],required:!0},expanded:{type:Boolean,default:!1},expandDepth:{type:Number,default:1},copyable:{type:[Boolean,Object],default:!1},sort:{type:Boolean,default:!1},boxed:{type:Boolean,default:!1},theme:{type:String,default:"light"},timeformat:{type:Function,default:function(e){return e.toLocaleString()}},previewMode:{type:Boolean,default:!1}},provide:function(){return{expandDepth:this.expandDepth,timeformat:this.timeformat,keyClick:this.keyClick}},data:function(){return{copied:!1,expandableCode:!1,expandCode:this.expanded}},emits:["onKeyClick"],computed:{jvClass:function(){return"jv-container jv-"+this.theme+(this.boxed?" boxed":"")},copyText:function(){var e=this.copyable,o=e.copyText,i=e.copiedText,a=e.timeout,l=e.align;return{copyText:o||"copy",copiedText:i||"copied!",timeout:a||2e3,align:l}}},watch:{value:function(){this.onResized()}},mounted:function(){var e=this;if(this.debounceResized=Ae(this.debResized.bind(this),200),this.boxed&&this.$refs.jsonBox&&(this.onResized(),this.$refs.jsonBox.$el.addEventListener("resized",this.onResized,!0)),this.copyable){var o=new Ne(this.$refs.clip,{text:function(){return JSON.stringify(e.value,null,2)}});o.on("success",function(i){e.onCopied(i)})}},methods:{onResized:function(){this.debounceResized()},debResized:function(){var e=this;this.$nextTick(function(){e.$refs.jsonBox&&(e.$refs.jsonBox.$el.clientHeight>=250?e.expandableCode=!0:e.expandableCode=!1)})},keyClick:function(e){this.$emit("onKeyClick",e)},onCopied:function(e){var o=this;this.copied||(this.copied=!0,setTimeout(function(){o.copied=!1},this.copyText.timeout),this.$emit("copied",e))},toggleExpandCode:function(){this.expandCode=!this.expandCode}}};function Oe(n,e,o,i,a,l){var r=U("json-box");return N(),A("div",{class:O(l.jvClass)},[o.copyable?(N(),A("div",{key:0,class:O("jv-tooltip ".concat(l.copyText.align||"right"))},[y("span",{ref:"clip",class:O(["jv-button",{copied:a.copied}])},[ve(n.$slots,"copy",{copied:a.copied},function(){return[J(E(a.copied?l.copyText.copiedText:l.copyText.copyText),1)]})],2)],2)):R("v-if",!0),y("div",{class:O(["jv-code",{open:a.expandCode,boxed:o.boxed}])},[L(r,{ref:"jsonBox",value:o.value,sort:o.sort,"preview-mode":o.previewMode},null,8,["value","sort","preview-mode"])],2),a.expandableCode&&o.boxed?(N(),A("div",{key:1,class:"jv-more",onClick:e[0]||(e[0]=function(){return l.toggleExpandCode&&l.toggleExpandCode.apply(l,arguments)})},[y("span",{class:O(["jv-toggle",{open:!!a.expandCode}])},null,2)])):R("v-if",!0)],2)}I.render=Oe;I.__file="src/Components/json-viewer.vue";const Re={key:0,class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow mb-4"},Ve={class:"card-title truncate mb-2"},$e={class:"overflow-auto-x"},Me={class:"table text-sm"},Be={key:1,class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow mb-4"},Le={class:"card-title truncate mb-2"},ze={class:"border border-slate-400 rounded-md mt-4"},De={key:0},Pe={key:2,class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},He=y("h2",{class:"card-title truncate mb-2"},"JSON",-1),Ue=ye({__name:"[hash]",props:["hash","chain"],setup(n){const e=n,o=me(),i=ge(),a=be({});e.hash&&o.rpc.getTx(e.hash).then(r=>a.value=r);const l=xe(()=>{var r,t;return((t=(r=a.value.tx)==null?void 0:r.body)==null?void 0:t.messages)||[]});return(r,t)=>{var h,m,T;const p=U("RouterLink");return N(),A("div",null,[j(a).tx_response?(N(),A("div",Re,[y("h2",Ve,E(r.$t("tx.title")),1),y("div",$e,[y("table",Me,[y("tbody",null,[y("tr",null,[y("td",null,E(r.$t("tx.tx_hash")),1),y("td",null,E(j(a).tx_response.txhash),1)]),y("tr",null,[y("td",null,E(r.$t("account.height")),1),y("td",null,[L(p,{to:`/${e.chain}/block/${j(a).tx_response.height}`,class:"text-primary dark:invert"},{default:je(()=>[J(E(j(a).tx_response.height),1)]),_:1},8,["to"])])]),y("tr",null,[y("td",null,E(r.$t("staking.status")),1),y("td",null,[y("div",{class:O(["text-xs truncate relative py-2 px-4 w-fit mr-2 rounded",`text-${j(a).tx_response.code===0?"success":"error"}`])},[y("span",{class:O(["inset-x-0 inset-y-0 opacity-10 absolute",`bg-${j(a).tx_response.code===0?"success":"error"}`])},null,2),J(" "+E(j(a).tx_response.code===0?"Success":"Failed"),1)],2)])]),y("tr",null,[y("td",null,E(r.$t("account.time")),1),y("td",null,E(j(i).toLocaleDate(j(a).tx_response.timestamp))+" ("+E(j(i).toDay(j(a).tx_response.timestamp,"from"))+") ",1)]),y("tr",null,[y("td",null,E(r.$t("tx.gas")),1),y("td",null,E(j(a).tx_response.gas_used)+" / "+E(j(a).tx_response.gas_wanted),1)]),y("tr",null,[y("td",null,E(r.$t("tx.fee")),1),y("td",null,E(j(i).formatTokens((T=(m=(h=j(a).tx)==null?void 0:h.auth_info)==null?void 0:m.fee)==null?void 0:T.amount,!0,"0,0.[00]")),1)]),y("tr",null,[y("td",null,E(r.$t("tx.memo")),1),y("td",null,E(j(a).tx.body.memo),1)])])])])])):R("",!0),j(a).tx_response?(N(),A("div",Be,[y("h2",Le,E(r.$t("account.messages"))+": ("+E(j(l).length)+") ",1),(N(!0),A(_e,null,Te(j(l),(_,w)=>(N(),A("div",null,[y("div",ze,[L(Ee,{value:_},null,8,["value"])])]))),256)),j(l).length===0?(N(),A("div",De,E(r.$t("tx.no_messages")),1)):R("",!0)])):R("",!0),j(a).tx_response?(N(),A("div",Pe,[He,L(j(I),{value:j(a),copyable:"",boxed:"",sort:"","expand-depth":"5"},null,8,["value"])])):R("",!0)])}}});export{Ue as default};
