import{d as u,b as l,u as b,w as r,c,e as t,f as p,g as o,F as _,i as h,n as d,o as i,I as x,t as L}from"./index-20da1e43.js";const w={tabindex:"0",class:"btn btn-ghost btn-circle btn-sm mx-1"},f={tabindex:"0",class:"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"},k=["onClick"],B=u({__name:"NavBarI18n",setup(v){const g=[{label:"English",i18nLang:"en"},{label:"中文",i18nLang:"cn"},{label:"Indonesian",i18nLang:"id"}];let s=l(b({useScope:"global"}).locale);r(s,e=>{document.documentElement.setAttribute("lang",e)});let n=l(localStorage.getItem("lang")||"en");r(n,e=>{document.documentElement.setAttribute("lang",e)});const m=e=>{s.value=e,n.value=e,localStorage.setItem("lang",e)};return(e,I)=>(i(),c("div",{class:d(["dropdown",o(n)==="ar"?"dropdown-right":"dropdown-bottom dropdown-end"])},[t("label",w,[p(o(x),{icon:"mdi-translate",class:"text-2xl text-gray-500 dark:text-gray-400"})]),t("ul",f,[(i(),c(_,null,h(g,a=>t("li",{key:a.i18nLang},[t("a",{class:d(["hover:bg-gray-100 dark:hover:bg-[#373f59]",{"text-primary":o(n)===a.i18nLang}]),onClick:y=>m(a.i18nLang)},L(a.label),11,k)])),64))])],2))}});export{B as default};
