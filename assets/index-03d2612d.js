import{d as y,L as N,o as i,c as d,e as s,t as o,F as V,i as $,K as S,al as B,a3 as C,b as F,v as P,f as n,g as a}from"./index-2cfd5dd5.js";import{_ as v}from"./index-e82e15c2.js";import{b as I}from"./route-block-83d24a4e.js";import"./index-f2379701.js";const w={key:0,class:"bg-base-100 px-4 pt-3 pb-4 rounded mt-5"},A={class:"text-base mb-3 text-main"},D={class:"grid grid-cols-2 md:!grid-cols-4 lg:!grid-cols-5 2xl:!grid-cols-6 gap-4"},L={class:"text-xs mb-2 text-secondary capitalize"},T={class:"text-base text-main"},_=y({__name:"CardParameter",props:{cardItem:{type:Object}},setup(g){const t=g,p=N();function x(e){if(Array.isArray(e))return e[0]&&e[0].amount||"-";if(String(e).search(/^\d+s$/g)>-1)return B(e);const r=Number(e);return`${r}`=="NaN"||typeof e=="boolean"?e:r<1&&r>0?p.formatDecimalToPercent(e):r}function f(e){return e?e.replace(/_/g," "):""}return(e,r)=>{var l,m,u,b,h;return(l=t.cardItem)!=null&&l.items&&((u=(m=t.cardItem)==null?void 0:m.items)==null?void 0:u.length)>0?(i(),d("div",w,[s("div",A,o((b=t.cardItem)==null?void 0:b.title),1),s("div",D,[(i(!0),d(V,null,$((h=t.cardItem)==null?void 0:h.items,(c,k)=>(i(),d("div",{key:k,class:"rounded-sm bg-active px-4 py-2"},[s("div",L,o(f(c==null?void 0:c.subtitle)),1),s("div",T,o(x(c==null?void 0:c.value)),1)]))),128))])])):S("",!0)}}}),j={class:"overflow-hidden"},z={class:"bg-base-100 px-4 pt-3 pb-4 rounded"},E={class:"text-base mb-3 text-main"},K={class:"grid grid-cols-2 md:!grid-cols-4 lg:!grid-cols-5 2xl:!grid-cols-6 gap-4"},M={class:"text-xs mb-2 text-secondary"},O={class:"text-base text-main"},q={class:"bg-base-100 px-4 pt-3 pb-4 rounded-sm mt-6"},G={class:"text-base mb-3 text-main"},H={class:"bg-base-100 px-4 pt-3 pb-4 rounded-sm mt-6"},J={class:"text-base mb-3 text-main"},Q=y({__name:"index",setup(g){const t=C(),p=F(t.chain);return P(()=>{t.initial()}),(x,f)=>{var e,r,l,m;return i(),d("div",j,[s("div",z,[s("div",E,o(p.value.title),1),s("div",K,[(i(!0),d(V,null,$(p.value.items,(u,b)=>(i(),d("div",{key:b,class:"rounded-sm bg-active px-4 py-2"},[s("div",M,o(u.subtitle),1),s("div",O,o(u.value),1)]))),128))])]),n(_,{cardItem:a(t).mint},null,8,["cardItem"]),n(_,{cardItem:a(t).staking},null,8,["cardItem"]),n(_,{cardItem:a(t).gov},null,8,["cardItem"]),n(_,{cardItem:a(t).distribution},null,8,["cardItem"]),n(_,{cardItem:a(t).slashing},null,8,["cardItem"]),s("div",q,[s("div",G,o((e=a(t).appVersion)==null?void 0:e.title),1),n(v,{value:(r=a(t).appVersion)==null?void 0:r.items,thead:!1},null,8,["value"])]),s("div",H,[s("div",J,o((l=a(t).nodeVersion)==null?void 0:l.title),1),n(v,{value:(m=a(t).nodeVersion)==null?void 0:m.items,thead:!1},null,8,["value"])])])}}});typeof I=="function"&&I(Q);export{Q as default};
