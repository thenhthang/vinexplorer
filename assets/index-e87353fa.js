import{d as Y,Y as q,O as G,L as K,a2 as Q,x as U,$ as X,b as _,v as Z,a1 as V,o as p,c as v,e as t,f as k,g as i,I as y,t as o,al as tt,n as g,F as et,i as st,B as j,l as at}from"./index-6a4d1c9f.js";import{b as E}from"./route-block-83d24a4e.js";const ot={class:"bg-base-100 rounded-lg grid sm:grid-cols-1 md:grid-cols-4 p-4"},nt={class:"flex"},it={class:"relative w-9 h-9 rounded overflow-hidden flex items-center justify-center mr-2"},lt=t("div",{class:"absolute top-0 left-0 bottom-0 right-0 opacity-20 bg-success"},null,-1),rt={class:"font-bold"},ct={class:"text-xs"},dt={class:"flex"},ut={class:"relative w-9 h-9 rounded overflow-hidden flex items-center justify-center mr-2"},ht=t("div",{class:"absolute top-0 left-0 bottom-0 right-0 opacity-20 bg-primary"},null,-1),pt={class:"font-bold"},_t={class:"text-xs"},vt={class:"flex"},gt={class:"relative w-9 h-9 rounded overflow-hidden flex items-center justify-center mr-2"},mt=t("div",{class:"absolute top-0 left-0 bottom-0 right-0 opacity-20 bg-error"},null,-1),ft={class:"font-bold"},bt={class:"text-xs"},xt={class:"flex"},yt={class:"relative w-9 h-9 rounded overflow-hidden flex items-center justify-center mr-2"},kt=t("div",{class:"absolute top-0 left-0 bottom-0 right-0 opacity-20 bg-error"},null,-1),wt={class:"font-bold"},$t={class:"text-xs"},St={class:"flex items-center justify-between py-1"},Ct={class:"tabs tabs-boxed bg-transparent"},jt={class:"text-lg font-semibold"},Nt={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},zt={class:"overflow-x-auto"},Bt={class:"table staking-table w-full"},It={scope:"col",class:"uppercase",style:{width:"3rem",position:"relative"}},Lt={scope:"col",class:"uppercase"},Pt={scope:"col",class:"text-right uppercase"},Vt={scope:"col",class:"text-right uppercase"},Et={scope:"col",class:"text-right uppercase"},Ot={scope:"col",class:"text-center uppercase"},Ft={class:"flex items-center overflow-hidden",style:{"max-width":"300px"}},Tt={class:"avatar mr-4 relative w-8 h-8 rounded-full overflow-hidden"},At=t("div",{class:"w-8 h-8 rounded-full bg-gray-400 absolute opacity-10"},null,-1),Dt={class:"w-8 h-8 rounded-full"},Jt=["src"],Mt={class:"flex flex-col"},Rt=t("span",{class:"text-sm text-primary dark:invert whitespace-nowrap overflow-hidden"},null,-1),Wt={class:"text-xs"},Ht={class:"text-right"},Yt={class:"flex flex-col"},qt={class:"text-sm font-weight-medium whitespace-nowrap"},Gt={class:"text-xs"},Kt={class:"text-right text-xs"},Qt={class:"text-center"},Ut={key:0,class:"badge badge-error gap-2 text-white"},Xt=["onClick"],Zt=t("div",{class:"divider"},null,-1),te={class:"flex flex-row items-center"},ee={class:"text-xs truncate relative py-2 px-4 rounded-md w-fit text-error mr-2"},se=t("span",{class:"inset-x-0 inset-y-0 opacity-10 absolute bg-error"},null,-1),ae={class:"text-xs truncate relative py-2 px-4 rounded-md w-fit text-warning"},oe=t("span",{class:"inset-x-0 inset-y-0 opacity-10 absolute bg-warning"},null,-1),ne={class:"text-xs hidden md:!block pl-2"},ie=Y({__name:"index",setup(le){const c=q(),w=G(),h=K(),O=Q(),N=U(),F=X(),T=JSON.parse(localStorage.getItem("avatars")||"{}"),m=_(T||{}),$=_({}),z=_({}),d=_("active"),B=_([]),S=_({});Z(()=>{c.fetchInacitveValdiators().then(e=>{B.value=e}),N.rpc.getSlashingParams().then(e=>{S.value=e.params})});async function A(){var l,a,n;let e=0,s=Number(((n=(a=(l=w.latest)==null?void 0:l.block)==null?void 0:a.header)==null?void 0:n.height)||0);for(s>14400?s-=14400:s=1;e<c.validators.length&&s>0;)await w.fetchValidatorByHeight(s,e).then(r=>{r.validators.forEach(u=>{z.value[u.pub_key.key]=Number(u.voting_power)})}),e+=100;for(e=0;e<c.validators.length;)await w.fetchLatestValidators(e).then(r=>{r.validators.forEach(u=>{$.value[u.pub_key.key]=Number(u.voting_power)})}),e+=100}const D=V(()=>{const e={};return Object.keys($.value).forEach(s=>{const l=$.value[s]||0,a=z.value[s]||0;e[s]=l-a}),e}),I=e=>{const s=e.key;return D.value[s]},J=e=>{if(!e)return"";const s=I(e);return s&&s!==0?h.showChanges(s):""},M=e=>{if(!e)return"";const s=I(e);if(s>0)return"text-success";if(s<0)return"text-error"},R=function(e){var a;let s=0;for(let n=0;n<e;n++)s+=Number((a=c.validators[n])==null?void 0:a.delegator_shares);const l=s/c.totalPower;switch(!0){case(d.value==="active"&&l<.33):return"error";case(d.value==="active"&&l<.67):return"warning";default:return"primary"}};function W(e,s){return!e||!s?!1:e.findIndex(l=>{var a,n,r;return s.website&&((n=s.website)==null?void 0:n.substring(0,(a=s.website)==null?void 0:a.lastIndexOf(".")).endsWith(l))||((r=s==null?void 0:s.moniker)==null?void 0:r.toLowerCase().search(l.toLowerCase()))>-1})>-1}const L=V(()=>{var e,s,l;if(d.value==="active")return c.validators.map((a,n)=>({v:a,rank:R(n),logo:C(a.description.identity)}));if(d.value==="featured"){const a=(l=(s=(e=N.current)==null?void 0:e.endpoints)==null?void 0:s.rest)==null?void 0:l.map(n=>n.provider);return a?(a.push("ping"),c.validators.filter(n=>W(a,n.description)).map((n,r)=>({v:n,rank:"primary",logo:C(n.description.identity)}))):[]}return B.value.map((a,n)=>({v:a,rank:"primary",logo:C(a.description.identity)}))}),H=()=>{let e=Promise.resolve();c.validators.forEach(s=>{e=e.then(()=>new Promise(l=>{var n;const a=(n=s.description)==null?void 0:n.identity;a&&!m.value[a]?c.keybase(a).then(r=>{var u,f,b;if(Array.isArray(r.them)&&r.them.length>0){const x=String((b=(f=(u=r.them[0])==null?void 0:u.pictures)==null?void 0:f.primary)==null?void 0:b.url).replace("https://s3.amazonaws.com/keybase_processed_uploads/","");x&&(m.value[a]=x,localStorage.setItem("avatars",JSON.stringify(m.value)))}l()}):l()}))})},C=e=>{if(!e||!m.value[e])return"";const s=m.value[e]||"";return s.startsWith("http")?s:`https://s3.amazonaws.com/keybase_processed_uploads/${s}`};return A(),H(),(e,s)=>{var l;return p(),v("div",null,[t("div",ot,[t("div",nt,[t("span",null,[t("div",it,[k(i(y),{class:"text-success",icon:"mdi:trending-up",size:"32"}),lt])]),t("span",null,[t("div",rt,o(i(h).percent(i(F).inflation)),1),t("div",ct,o(e.$t("staking.inflation")),1)])]),t("div",dt,[t("span",null,[t("div",ut,[k(i(y),{class:"text-primary",icon:"mdi:lock-open-outline",size:"32"}),ht])]),t("span",null,[t("div",pt,o(i(tt)((l=i(c).params)==null?void 0:l.unbonding_time)),1),t("div",_t,o(e.$t("staking.unbonding_time")),1)])]),t("div",vt,[t("span",null,[t("div",gt,[k(i(y),{class:"text-error",icon:"mdi:alert-octagon-outline",size:"32"}),mt])]),t("span",null,[t("div",ft,o(i(h).percent(S.value.slash_fraction_double_sign)),1),t("div",bt,o(e.$t("staking.double_sign_slashing")),1)])]),t("div",xt,[t("span",null,[t("div",yt,[k(i(y),{class:"text-error",icon:"mdi:pause",size:"32"}),kt])]),t("span",null,[t("div",wt,o(i(h).percent(S.value.slash_fraction_downtime)),1),t("div",$t,o(e.$t("staking.downtime_slashing")),1)])])]),t("div",null,[t("div",St,[t("div",Ct,[t("a",{class:g(["tab text-gray-400",{"tab-active":d.value==="featured"}]),onClick:s[0]||(s[0]=a=>d.value="featured")},o(e.$t("staking.popular")),3),t("a",{class:g(["tab text-gray-400",{"tab-active":d.value==="active"}]),onClick:s[1]||(s[1]=a=>d.value="active")},o(e.$t("staking.active")),3),t("a",{class:g(["tab text-gray-400",{"tab-active":d.value==="inactive"}]),onClick:s[2]||(s[2]=a=>d.value="inactive")},o(e.$t("staking.inactive")),3)]),t("div",jt,o(i(L).length)+"/"+o(i(c).params.max_validators),1)]),t("div",Nt,[t("div",zt,[t("table",Bt,[t("thead",null,[t("tr",null,[t("th",It,o(e.$t("staking.rank")),1),t("th",Lt,o(e.$t("staking.validator")),1),t("th",Pt,o(e.$t("staking.voting_power")),1),t("th",Vt,o(e.$t("staking.24h_changes")),1),t("th",Et,o(e.$t("staking.commission")),1),t("th",Ot,o(e.$t("staking.actions")),1)])]),t("tbody",null,[(p(!0),v(et,null,st(i(L),({v:a,rank:n,logo:r},u)=>{var f,b,x,P;return p(),v("tr",{key:a.operator_address,class:"hover:bg-gray-100 dark:hover:bg-[#384059]"},[t("td",null,[t("div",{class:g(["text-xs truncate relative px-2 py-1 rounded-full w-fit",`text-${n}`])},[t("span",{class:g(["inset-x-0 inset-y-0 opacity-10 absolute",`bg-${n}`])},null,2),j(" "+o(u+1),1)],2)]),t("td",null,[t("div",Ft,[t("div",Tt,[At,t("div",Dt,[r?(p(),v("img",{key:0,src:r,class:"object-contain"},null,8,Jt)):(p(),at(i(y),{key:1,class:"text-4xl",icon:"mdi-help-circle-outline"}))])]),t("div",Mt,[Rt,t("span",Wt,o(((f=a.description)==null?void 0:f.website)||((b=a.description)==null?void 0:b.identity)||"-"),1)])])]),t("td",Ht,[t("div",Yt,[t("h6",qt,o(i(h).formatToken({amount:parseInt(a.tokens).toString(),denom:i(c).params.bond_denom},!0,"0,0")),1),t("span",Gt,o(i(h).calculatePercent(a.delegator_shares,i(c).totalPower)),1)])]),t("td",{class:g(["text-right text-xs",M(a.consensus_pubkey)])},o(J(a.consensus_pubkey)),3),t("td",Kt,o(i(h).formatCommissionRate((P=(x=a.commission)==null?void 0:x.commission_rates)==null?void 0:P.rate)),1),t("td",Qt,[a.jailed?(p(),v("div",Ut,o(e.$t("staking.jailed")),1)):(p(),v("label",{key:1,for:"delegate",class:"btn btn-xs btn-primary rounded-sm capitalize",onClick:re=>i(O).open("delegate",{validator_address:a.operator_address})},o(e.$t("account.btn_delegate")),9,Xt))])])}),128))])])]),Zt,t("div",te,[t("div",ee,[se,j(" "+o(e.$t("staking.top"))+" 33% ",1)]),t("div",ae,[oe,j(" "+o(e.$t("staking.top"))+" 67% ",1)]),t("div",ne,o(e.$t("staking.description")),1)])])])])}}});typeof E=="function"&&E(ie);export{ie as default};
