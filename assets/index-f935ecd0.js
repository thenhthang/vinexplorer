import{d as w,x,O as y,b as k,s as c,o as r,c as l,e,t as s,y as $,z as B,F as C,i as N,g as S}from"./index-20da1e43.js";import{b as v}from"./route-block-83d24a4e.js";const T={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},D={class:"card-title"},F={class:"my-4 grid grid-flow-col auto-cols-max overflow-auto"},P={class:"form-control"},U={class:"input-group"},V={disabled:"",selected:""},j=["value"],z={class:"text-base"},E=e("div",{class:"mockup-code bg-base-200 my-2"},[e("pre",{"data-prefix":"1"},[e("code",{class:"text-gray-800 dark:invert"},'<script type="module" src="https://unpkg.com/ping-widget@latest/dist/ping-widget.js">')])],-1),I={class:"bg-base-100 my-5 px-4 pt-3 pb-4 rounded shadow"},L={class:"card-title"},M={class:"mt-4"},O={class:"text-base"},q={class:"mockup-code bg-base-200 my-2"},A=e("pre",{"data-prefix":">"},[e("code",{class:"text-green-400"},"<!-- This widget is optional. --> ")],-1),G={"data-prefix":">"},H={class:"text-gray-800 dark:invert"},J={class:"text-base"},K={class:"mockup-code bg-base-200 my-2"},Q={"data-prefix":">"},R={class:"text-gray-800 dark:invert"},W={"data-prefix":">"},X={class:"text-gray-800 dark:invert"},Y=w({__name:"index",props:["chain"],setup(Z){var u,h,g,m;const o=x(),b=y(),i=k((m=(g=(h=(u=o.current)==null?void 0:u.endpoints)==null?void 0:h.rest)==null?void 0:g.at(0))==null?void 0:m.address),f=c(()=>{var t,a,d;return((d=(a=(t=b.latest)==null?void 0:t.block)==null?void 0:a.header)==null?void 0:d.chain_id)||""}),p=c(()=>{var t;return((t=o==null?void 0:o.current)==null?void 0:t.prettyName)||""}),_=c(()=>{var t;return`m/44'/${(t=o.current)==null?void 0:t.coinType}/0'/0/0`});return(t,a)=>{var d;return r(),l("div",null,[e("div",T,[e("h2",D,s(t.$t("widget.title")),1),e("div",F,[e("div",P,[e("div",U,[e("span",null,s(t.$t("widget.endpoint")),1),$(e("select",{"onUpdate:modelValue":a[0]||(a[0]=n=>i.value=n),class:"select select-bordered w-fit"},[e("option",V,s(t.$t("widget.select_endpoint")),1),(r(!0),l(C,null,N((d=S(o).current)==null?void 0:d.endpoints.rest,n=>(r(),l("option",{value:n.address},s(n.address),9,j))),256))],512),[[B,i.value]])])])]),e("span",z,s(t.$t("widget.text_1")),1),E]),e("div",I,[e("h2",L,s(t.$t("module.widget")),1),e("div",M,[e("span",O," 1. "+s(t.$t("widget.text_2")),1),e("div",q,[A,e("pre",G,[e("code",H,'<ping-connect-wallet chain-id="'+s(f.value)+'" hd-path="'+s(_.value)+'"/>',1)])]),e("span",J," 2. "+s(t.$t("widget.text_3")),1),e("div",K,[e("pre",Q,[e("code",R,'<ping-token-convert chain-name="'+s(p.value)+'" endpoint="'+s(i.value)+'" hd-path="'+s(_.value)+'"/>',1)]),e("pre",W,[e("code",X,'<label for="PingTokenConvert" class="btn btn-sm">Buy '+s(p.value.toUpperCase())+"</label>",1)])])])])])}}});typeof v=="function"&&v(Y);export{Y as default};
