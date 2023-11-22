import{d as P,L as z,b as r,M as F,C as R,s as i,O as G,r as H,o as p,c as f,e as t,B as j,y as K,z as Q,t as u,g as d,n as U,f as D,K as A,F as J,i as W,P as X,Q as Y}from"./index-55fa4279.js";import{_ as Z}from"./DonutChart.vue_vue_type_script_setup_true_lang-f9302d09.js";import{A as ee}from"./vue3-apexcharts.common-3212d68b.js";import{g as te}from"./apexChartConfig-797ff790.js";const se={class:"overflow-x-auto w-full rounded-md"},ae={class:"flex flex-wrap justify-between bg-base-100 p-5"},oe={class:"min-w-0"},ne=t("h2",{class:"text-2xl font-bold leading-7 sm:!truncate sm:!text-3xl sm:!tracking-tight"}," Portfolio ",-1),le={class:"flex items-center text-sm"},ce=t("option",null,"usd",-1),re=t("option",null,"cny",-1),ie=t("option",null,"eur",-1),ue=t("option",null,"hkd",-1),de=t("option",null,"jpy",-1),_e=t("option",null,"sgd",-1),ve=t("option",null,"krw",-1),he=t("option",null,"btc",-1),me=t("option",null,"eth",-1),pe=[ce,re,ie,ue,de,_e,ve,he,me],fe={class:"text-right"},ge=t("div",null,"Total Value",-1),be={class:"text-success font-bold"},ke={class:"bg-base-100"},ye={key:0,class:"grid grid-cols-1 md:grid-cols-3"},Ce={class:"md:col-span-2"},we={class:"overflow-x-auto mt-4"},je={class:"table w-full"},De=t("thead",{class:"bg-base-200"},[t("tr",null,[t("th",null,"Token"),t("th",{class:"text-right"},"Value"),t("th",{class:"text-right"},"Percent")])],-1),Ne={class:"flex gap-1 text-xs items-center"},xe={class:"avatar"},Oe={class:"mask mask-squircle w-6 h-6 mr-2"},Ee=["src","alt"],Se={class:"uppercase font-bold text-lg"},Ie={class:"capitalize"},Ve={class:"text-right"},qe={class:"text-right"},Be={key:1,class:"p-4 text-center"},Ae={class:"text-center my-5 bg-base-200"},ze=P({__name:"portfolio",setup($e){const c=z(),$=r(JSON.parse(localStorage.getItem("imported-addresses")||"{}")),N=r({}),x=r({}),g=r({}),O=r(!1),m=r(localStorage.getItem("currency")||"usd"),b=r([]),k=r(0),E=r(0);F(()=>{k.value>0&&k.value===E.value&&(O.value||(O.value=!0,I()))}),Object.values($.value).forEach(a=>{a&&a.forEach(e=>{if(e.endpoint&&e.address){k.value+=1;const o=R.newDefault(e.endpoint);o.getBankBalances(e.address).then(s=>{const n=s.balances.filter(l=>l.denom.length<10);n&&(N.value[e.address||""]=n),n.forEach(l=>{g.value[l.denom]=e})}).finally(()=>{E.value+=1}),o.getStakingDelegations(e.address).then(s=>{s&&s.delegation_responses&&(x.value[e.address||""]=s.delegation_responses),s.delegation_responses.forEach(n=>{g.value[n.balance.denom]=e})})}})});const _=i(()=>{const a={};return Object.values(N.value).forEach(e=>{e.forEach(o=>{var n;const s=c.tokenDisplayNumber(o);s&&(a[o.denom]?a[o.denom].qty+=s:a[o.denom]={qty:s,coinId:((n=c.findGlobalAssetConfig(o.denom))==null?void 0:n.coingecko_id)||""})})}),Object.values(x.value).forEach(e=>{e.forEach(o=>{var n;const s=c.tokenDisplayNumber(o.balance);s&&(a[o.balance.denom]?a[o.balance.denom].qty+=s:a[o.balance.denom]={qty:s,coinId:((n=c.findGlobalAssetConfig(o.balance.denom))==null?void 0:n.coingecko_id)||""})})}),a}),v=i(()=>{const a={};return Object.keys(_.value).forEach(e=>{const o=_.value[e],s=b.value.find(n=>n.id===o.coinId);a[e]=s?o.qty*s.current_price:0}),a}),S=i(()=>Object.values(v.value).reduce((a,e)=>a+e,0)),y=i(()=>{const a=[];return Object.keys(v.value).map(e=>{var o,s;a.push({denom:e,value:v.value[e],chainName:(o=g.value[e])==null?void 0:o.chainName,logo:(s=g.value[e])==null?void 0:s.logo,percentage:v.value[e]/S.value})}),a.filter(e=>e.value>0).sort((e,o)=>o.value-e.value)});function I(){localStorage.setItem("currency",m.value);const a=Object.values(_.value).map(e=>e.coinId).join(",");Y(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${m.value}&ids=${a}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=14d&locale=en`).then(e=>{b.value=e})}const C=i(()=>Object.values(_.value).map(a=>{const e=b.value.find(o=>o.id===a.coinId);return e?a.qty*(e.price_change_24h||0):0}).reduce((a,e)=>a+e,0)),T=i(()=>{var s,n;const a=Object.keys(_.value).map(l=>{var B;const h=_.value[l],q=b.value.find(w=>w.id===h.coinId);return q?(B=q.sparkline_in_7d)==null?void 0:B.price.map(w=>w*h.qty):[]}).filter(l=>l.length>0),e=((s=a.at(0))==null?void 0:s.length)||0,o=new Array(e).fill(0);for(let l=0;l<e;l++)for(let h=0;h<a.length;h++)o[l]+=((n=a.at(h))==null?void 0:n.at(l))||0;return[{name:"value",data:o}]}),L=G(),M=i(()=>{const a=L.theme,e=[],o=new Date().getTime();for(let s=0;s<168;s++)e.unshift(o-s*2*60*60*1e3);return te(a,e)}),V=i(()=>{switch(m.value){case"usd":return"$";case"cny":return"¥";case"eur":return"€";case"hkd":return"HK$";case"jpy":return"¥";case"sdg":return"S$";case"krw":return"₩";case"btc":return"BTC";case"eth":return"ETH"}return"$"});return(a,e)=>{const o=H("RouterLink");return p(),f("div",se,[t("div",ae,[t("div",oe,[ne,t("div",null,[t("div",le,[j(" Currency: "),K(t("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>m.value=s),onChange:I,class:"ml-1 uppercase"},pe,544),[[Q,m.value]])])])]),t("div",fe,[ge,t("div",be,u(V.value)+" "+u(d(c).formatNumber(S.value,"0,0.[00]")),1),t("div",{class:U(["text-xs",{"text-success":C.value>0,"text-error":C.value<0}])},u(d(c).formatNumber(C.value,"+0,0.[00]")),3)])]),t("div",ke,[y.value?(p(),f("div",ye,[t("div",null,[D(Z,{height:"280",series:Object.values(v.value),labels:Object.keys(v.value).map(s=>{var n;return(n=d(c).tokenDisplayDenom(s))==null?void 0:n.toUpperCase()})},null,8,["series","labels"])]),t("div",Ce,[D(d(ee),{type:"area",height:"280",options:M.value,series:T.value},null,8,["options","series"])])])):A("",!0),t("div",we,[t("table",je,[De,t("tbody",null,[(p(!0),f(J,null,W(y.value,(s,n)=>(p(),f("tr",{key:n},[t("td",null,[t("div",Ne,[t("div",xe,[t("div",Oe,[t("img",{src:s.logo,alt:s.chainName},null,8,Ee)])]),t("span",Se,u(d(c).tokenDisplayDenom(s.denom)),1),j(" @ "),t("span",Ie,u(s.chainName),1)])]),t("td",Ve,u(V.value)+u(d(c).formatNumber(s.value,"0,0.[00]")),1),t("td",qe,u(d(c).percent(s.percentage)),1)]))),128))])])]),y.value.length===0?(p(),f("div",Be," No Data ")):A("",!0)]),t("div",Ae,[D(o,{to:"./accounts",class:"btn btn-link"},{default:X(()=>[j("Add More Asset")]),_:1})])])}}});export{ze as default};
