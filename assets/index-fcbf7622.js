import{d as k,b as m,Z as P,a8 as _,v as y,o as C,c as h,e as o,n as r,t as p,f as b,g}from"./index-fb04f637.js";import{_ as B}from"./ProposalListItem.vue_vue_type_script_setup_true_lang-ea696603.js";import{_ as q}from"./PaginationBar.vue_vue_type_script_setup_true_lang-aada6e1b.js";import{b as d}from"./route-block-83d24a4e.js";import"./index-8ec219cd.js";import"./index-1b8b0989.js";const N={class:"tabs tabs-boxed bg-transparent mb-4 text-center"},R=k({__name:"index",setup(S){const t=m("2"),s=P(),l=m(new _);y(()=>{s.fetchProposals("2").then(a=>{var e;((e=a==null?void 0:a.proposals)==null?void 0:e.length)===0&&(t.value="3",s.fetchProposals("3")),s.fetchProposals("3"),s.fetchProposals("4")})});const n=a=>{t.value=a};function $(a){l.value.setPage(a),s.fetchProposals(t.value,l.value)}return(a,e)=>{var i,c,u,v;return C(),h("div",null,[o("div",N,[o("a",{class:r(["tab text-gray-400 uppercase",{"tab-active":t.value==="2"}]),onClick:e[0]||(e[0]=f=>n("2"))},p(a.$t("gov.voting")),3),o("a",{class:r(["tab text-gray-400 uppercase",{"tab-active":t.value==="3"}]),onClick:e[1]||(e[1]=f=>n("3"))},p(a.$t("gov.passed")),3),o("a",{class:r(["tab text-gray-400 uppercase",{"tab-active":t.value==="4"}]),onClick:e[2]||(e[2]=f=>n("4"))},p(a.$t("gov.rejected")),3)]),b(B,{proposals:(i=g(s))==null?void 0:i.proposals[t.value]},null,8,["proposals"]),b(q,{total:(v=(u=(c=g(s))==null?void 0:c.proposals[t.value])==null?void 0:u.pagination)==null?void 0:v.total,limit:l.value.limit,callback:$},null,8,["total","limit"])])}}});typeof d=="function"&&d(R);export{R as default};
