import{d as f,L as g,x as h,b as n,a8 as b,v as k,o,c as s,e as t,F as v,i as B,t as d,g as l,f as y}from"./index-d6a0bcdd.js";import{_ as x}from"./PaginationBar.vue_vue_type_script_setup_true_lang-98e74e4d.js";import{b as m}from"./route-block-83d24a4e.js";const F={class:"overflow-auto"},R={class:"table table-compact"},S=t("thead",null,[t("tr",null,[t("td",null,"Token"),t("td",null,"Amount")])],-1),q=f({__name:"index",props:["chain"],setup(w){g();const _=h(),c=n([]),e=n(new b),r=n({});k(()=>{u(1)});function u(i){e.value.setPage(i),_.rpc.getBankSupply(e.value).then(a=>{c.value=a.supply,r.value=a.pagination})}return(i,a)=>(o(),s("div",F,[t("table",R,[S,(o(!0),s(v,null,B(l(c),p=>(o(),s("tr",null,[t("td",null,d(p.denom),1),t("td",null,d(p.amount),1)]))),256))]),y(x,{limit:l(e).limit,total:l(r).total,callback:u},null,8,["limit","total"])]))}});typeof m=="function"&&m(q);export{q as default};
