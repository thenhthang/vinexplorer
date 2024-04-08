import{d as G,Y as K,O as Q,L as U,a2 as X,x as Z,$ as tt,b as _,v as et,a1 as O,r as st,o as p,c as v,e as t,f as x,g as i,I as y,t as o,al as at,n as g,F as ot,i as nt,B as w,l as it,P as rt}from"./index-5aefa7d6.js";import{b as F}from"./route-block-83d24a4e.js";const lt={class:"bg-base-100 rounded-lg grid sm:grid-cols-1 md:grid-cols-4 p-4"},ct={class:"flex"},dt={class:"relative w-9 h-9 rounded overflow-hidden flex items-center justify-center mr-2"},ut=t("div",{class:"absolute top-0 left-0 bottom-0 right-0 opacity-20 bg-success"},null,-1),ht={class:"font-bold"},pt={class:"text-xs"},_t={class:"flex"},vt={class:"relative w-9 h-9 rounded overflow-hidden flex items-center justify-center mr-2"},gt=t("div",{class:"absolute top-0 left-0 bottom-0 right-0 opacity-20 bg-primary"},null,-1),mt={class:"font-bold"},ft={class:"text-xs"},bt={class:"flex"},xt={class:"relative w-9 h-9 rounded overflow-hidden flex items-center justify-center mr-2"},yt=t("div",{class:"absolute top-0 left-0 bottom-0 right-0 opacity-20 bg-error"},null,-1),kt={class:"font-bold"},wt={class:"text-xs"},$t={class:"flex"},Ct={class:"relative w-9 h-9 rounded overflow-hidden flex items-center justify-center mr-2"},St=t("div",{class:"absolute top-0 left-0 bottom-0 right-0 opacity-20 bg-error"},null,-1),jt={class:"font-bold"},Nt={class:"text-xs"},zt={class:"flex items-center justify-between py-1"},Bt={class:"tabs tabs-boxed bg-transparent"},It={class:"text-lg font-semibold"},Lt={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},Pt={class:"overflow-x-auto"},Vt={class:"table staking-table w-full"},Et={scope:"col",class:"uppercase",style:{width:"3rem",position:"relative"}},Ot={scope:"col",class:"uppercase"},Ft={scope:"col",class:"text-right uppercase"},Rt={scope:"col",class:"text-right uppercase"},Tt={scope:"col",class:"text-right uppercase"},At={scope:"col",class:"text-center uppercase"},Dt={class:"flex items-center overflow-hidden",style:{"max-width":"300px"}},Jt={class:"avatar mr-4 relative w-8 h-8 rounded-full overflow-hidden"},Mt=t("div",{class:"w-8 h-8 rounded-full bg-gray-400 absolute opacity-10"},null,-1),Wt={class:"w-8 h-8 rounded-full"},Ht=["src"],Yt={class:"flex flex-col"},qt={class:"text-sm text-primary dark:invert whitespace-nowrap overflow-hidden"},Gt={class:"text-xs"},Kt={class:"text-right"},Qt={class:"flex flex-col"},Ut={class:"text-sm font-weight-medium whitespace-nowrap"},Xt={class:"text-xs"},Zt={class:"text-right text-xs"},te={class:"text-center"},ee={key:0,class:"badge badge-error gap-2 text-white"},se=["onClick"],ae=t("div",{class:"divider"},null,-1),oe={class:"flex flex-row items-center"},ne={class:"text-xs truncate relative py-2 px-4 rounded-md w-fit text-error mr-2"},ie=t("span",{class:"inset-x-0 inset-y-0 opacity-10 absolute bg-error"},null,-1),re={class:"text-xs truncate relative py-2 px-4 rounded-md w-fit text-warning"},le=t("span",{class:"inset-x-0 inset-y-0 opacity-10 absolute bg-warning"},null,-1),ce={class:"text-xs hidden md:!block pl-2"},de=G({__name:"index",setup(ue){const c=K(),$=Q(),h=U(),R=X(),z=Z(),T=tt(),A=JSON.parse(localStorage.getItem("avatars")||"{}"),m=_(A||{}),C=_({}),B=_({}),u=_("active"),I=_([]),S=_({});et(()=>{c.fetchInacitveValdiators().then(e=>{I.value=e}),z.rpc.getSlashingParams().then(e=>{S.value=e.params})});async function D(){var r,n,a;let e=0,s=Number(((a=(n=(r=$.latest)==null?void 0:r.block)==null?void 0:n.header)==null?void 0:a.height)||0);for(s>14400?s-=14400:s=1;e<c.validators.length&&s>0;)await $.fetchValidatorByHeight(s,e).then(l=>{l.validators.forEach(d=>{B.value[d.pub_key.key]=Number(d.voting_power)})}),e+=100;for(e=0;e<c.validators.length;)await $.fetchLatestValidators(e).then(l=>{l.validators.forEach(d=>{C.value[d.pub_key.key]=Number(d.voting_power)})}),e+=100}const J=O(()=>{const e={};return Object.keys(C.value).forEach(s=>{const r=C.value[s]||0,n=B.value[s]||0;e[s]=r-n}),e}),L=e=>{const s=e.key;return J.value[s]},M=e=>{if(!e)return"";const s=L(e);return s&&s!==0?h.showChanges(s):""},W=e=>{if(!e)return"";const s=L(e);if(s>0)return"text-success";if(s<0)return"text-error"},H=function(e){var n;let s=0;for(let a=0;a<e;a++)s+=Number((n=c.validators[a])==null?void 0:n.delegator_shares);const r=s/c.totalPower;switch(!0){case(u.value==="active"&&r<.33):return"error";case(u.value==="active"&&r<.67):return"warning";default:return"primary"}};function Y(e,s){return!e||!s?!1:e.findIndex(r=>{var n,a,l;return s.website&&((a=s.website)==null?void 0:a.substring(0,(n=s.website)==null?void 0:n.lastIndexOf(".")).endsWith(r))||((l=s==null?void 0:s.moniker)==null?void 0:l.toLowerCase().search(r.toLowerCase()))>-1})>-1}const P=O(()=>{var e,s,r;if(u.value==="active")return c.validators.map((n,a)=>({v:n,rank:H(a),logo:j(n.description.identity)}));if(u.value==="featured"){const n=(r=(s=(e=z.current)==null?void 0:e.endpoints)==null?void 0:s.rest)==null?void 0:r.map(a=>a.provider);return n?(n.push("ping"),c.validators.filter(a=>Y(n,a.description)).map((a,l)=>({v:a,rank:"primary",logo:j(a.description.identity)}))):[]}return I.value.map((n,a)=>({v:n,rank:"primary",logo:j(n.description.identity)}))}),q=()=>{let e=Promise.resolve();c.validators.forEach(s=>{e=e.then(()=>new Promise(r=>{var a;const n=(a=s.description)==null?void 0:a.identity;n&&!m.value[n]?c.keybase(n).then(l=>{var d,k,f;if(Array.isArray(l.them)&&l.them.length>0){const b=String((f=(k=(d=l.them[0])==null?void 0:d.pictures)==null?void 0:k.primary)==null?void 0:f.url).replace("https://s3.amazonaws.com/keybase_processed_uploads/","");b&&(m.value[n]=b,localStorage.setItem("avatars",JSON.stringify(m.value)))}r()}):r()}))})},j=e=>{if(!e||!m.value[e])return"";const s=m.value[e]||"";return s.startsWith("http")?s:`https://s3.amazonaws.com/keybase_processed_uploads/${s}`};return D(),q(),(e,s)=>{var n;const r=st("RouterLink");return p(),v("div",null,[t("div",lt,[t("div",ct,[t("span",null,[t("div",dt,[x(i(y),{class:"text-success",icon:"mdi:trending-up",size:"32"}),ut])]),t("span",null,[t("div",ht,o(i(h).percent(i(T).inflation)),1),t("div",pt,o(e.$t("staking.inflation")),1)])]),t("div",_t,[t("span",null,[t("div",vt,[x(i(y),{class:"text-primary",icon:"mdi:lock-open-outline",size:"32"}),gt])]),t("span",null,[t("div",mt,o(i(at)((n=i(c).params)==null?void 0:n.unbonding_time)),1),t("div",ft,o(e.$t("staking.unbonding_time")),1)])]),t("div",bt,[t("span",null,[t("div",xt,[x(i(y),{class:"text-error",icon:"mdi:alert-octagon-outline",size:"32"}),yt])]),t("span",null,[t("div",kt,o(i(h).percent(S.value.slash_fraction_double_sign)),1),t("div",wt,o(e.$t("staking.double_sign_slashing")),1)])]),t("div",$t,[t("span",null,[t("div",Ct,[x(i(y),{class:"text-error",icon:"mdi:pause",size:"32"}),St])]),t("span",null,[t("div",jt,o(i(h).percent(S.value.slash_fraction_downtime)),1),t("div",Nt,o(e.$t("staking.downtime_slashing")),1)])])]),t("div",null,[t("div",zt,[t("div",Bt,[t("a",{class:g(["tab text-gray-400",{"tab-active":u.value==="featured"}]),onClick:s[0]||(s[0]=a=>u.value="featured")},o(e.$t("staking.popular")),3),t("a",{class:g(["tab text-gray-400",{"tab-active":u.value==="active"}]),onClick:s[1]||(s[1]=a=>u.value="active")},o(e.$t("staking.active")),3),t("a",{class:g(["tab text-gray-400",{"tab-active":u.value==="inactive"}]),onClick:s[2]||(s[2]=a=>u.value="inactive")},o(e.$t("staking.inactive")),3)]),t("div",It,o(i(P).length)+"/"+o(i(c).params.max_validators),1)]),t("div",Lt,[t("div",Pt,[t("table",Vt,[t("thead",null,[t("tr",null,[t("th",Et,o(e.$t("staking.rank")),1),t("th",Ot,o(e.$t("staking.validator")),1),t("th",Ft,o(e.$t("staking.voting_power")),1),t("th",Rt,o(e.$t("staking.24h_changes")),1),t("th",Tt,o(e.$t("staking.commission")),1),t("th",At,o(e.$t("staking.actions")),1)])]),t("tbody",null,[(p(!0),v(ot,null,nt(i(P),({v:a,rank:l,logo:d},k)=>{var f,b,V,E;return p(),v("tr",{key:a.operator_address,class:"hover:bg-gray-100 dark:hover:bg-[#384059]"},[t("td",null,[t("div",{class:g(["text-xs truncate relative px-2 py-1 rounded-full w-fit",`text-${l}`])},[t("span",{class:g(["inset-x-0 inset-y-0 opacity-10 absolute",`bg-${l}`])},null,2),w(" "+o(k+1),1)],2)]),t("td",null,[t("div",Dt,[t("div",Jt,[Mt,t("div",Wt,[d?(p(),v("img",{key:0,src:d,class:"object-contain"},null,8,Ht)):(p(),it(i(y),{key:1,class:"text-4xl",icon:"mdi-help-circle-outline"}))])]),t("div",Yt,[t("span",qt,[x(r,{to:{name:"chain-staking-validator",params:{validator:a.operator_address}},class:"font-weight-medium"},{default:rt(()=>{var N;return[w(o((N=a.description)==null?void 0:N.moniker),1)]}),_:2},1032,["to"])]),t("span",Gt,o(((f=a.description)==null?void 0:f.website)||((b=a.description)==null?void 0:b.identity)||"-"),1)])])]),t("td",Kt,[t("div",Qt,[t("h6",Ut,o(i(h).formatToken({amount:parseInt(a.tokens).toString(),denom:i(c).params.bond_denom},!0,"0,0")),1),t("span",Xt,o(i(h).calculatePercent(a.delegator_shares,i(c).totalPower)),1)])]),t("td",{class:g(["text-right text-xs",W(a.consensus_pubkey)])},o(M(a.consensus_pubkey)),3),t("td",Zt,o(i(h).formatCommissionRate((E=(V=a.commission)==null?void 0:V.commission_rates)==null?void 0:E.rate)),1),t("td",te,[a.jailed?(p(),v("div",ee,o(e.$t("staking.jailed")),1)):(p(),v("label",{key:1,for:"delegate",class:"btn btn-xs btn-primary rounded-sm capitalize",onClick:N=>i(R).open("delegate",{validator_address:a.operator_address})},o(e.$t("account.btn_delegate")),9,se))])])}),128))])])]),ae,t("div",oe,[t("div",ne,[ie,w(" "+o(e.$t("staking.top"))+" 33% ",1)]),t("div",re,[le,w(" "+o(e.$t("staking.top"))+" 67% ",1)]),t("div",ce,o(e.$t("staking.description")),1)])])])])}}});typeof F=="function"&&F(de);export{de as default};
