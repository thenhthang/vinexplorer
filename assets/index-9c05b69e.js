import{d as q,x as B,b as r,a8 as R,v,r as N,o as c,c as i,e,t as o,F as P,i as C,f as b,P as F,B as L,g as d}from"./index-a1c1611d.js";import{_ as S}from"./PaginationBar.vue_vue_type_script_setup_true_lang-d4bae8b0.js";const V={class:"overflow-x-auto"},T={class:"table table-compact"},D=q({__name:"index",props:["chain"],setup(g){const y=B(),p=r([]),l=r(new R),f=r({});v(()=>{m(1)});function m(t){l.value.setPage(t),y.rpc.getAuthAccounts(l.value).then(a=>{p.value=a.accounts,f.value=a.pagination})}function k(t){return t.replace("/cosmos.auth.v1beta1.","")}function u(t,a){if(!t||Array.isArray(t)||typeof t=="string")return null;const s=Object.keys(t);if(s.includes(a))return t[a];for(let n=0;n<s.length;n++){const _=u(t[s[n]],a);if(_)return _}}function h(t){return u(t,"address")}function w(t){return u(t,"account_number")}function $(t){return u(t,"sequence")}function A(t){return u(t,"pub_key")}return(t,a)=>{const s=N("RouterLink");return c(),i("div",V,[e("table",T,[e("thead",null,[e("tr",null,[e("td",null,o(t.$t("account.type")),1),e("td",null,o(t.$t("account.address")),1),e("td",null,o(t.$t("account.acc_num")),1),e("td",null,o(t.$t("account.sequence")),1),e("td",null,o(t.$t("account.pub_key")),1)])]),(c(!0),i(P,null,C(d(p),n=>(c(),i("tr",null,[e("td",null,o(k(n["@type"])),1),e("td",null,[b(s,{to:`/${g.chain}/account/${h(n)}`},{default:F(()=>[L(o(h(n)),1)]),_:2},1032,["to"])]),e("td",null,o(w(n)),1),e("td",null,o($(n)),1),e("td",null,o(A(n)),1)]))),256))]),b(S,{limit:d(l).limit,total:d(f).total,callback:m},null,8,["limit","total"])])}}});export{D as default};
