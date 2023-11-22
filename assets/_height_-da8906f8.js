import{d as U,a1 as p,L as E,x as K,r as H,o as i,c as r,g as o,e as t,F as O,i as P,f as u,P as j,B as I,t as s,a9 as q,R as M,aa as G,O as J,b as k,ab as Q,y as W,D as X,K as B,I as S}from"./index-0d0367be.js";import{a as T}from"./index-cb22a0b7.js";import{_ as Y}from"./Countdown.vue_vue_type_style_index_0_lang-ee385bc1.js";import"./index-b2a15caa.js";const Z={class:"overflow-x-auto mt-4"},tt={key:0,class:"table w-full",density:"compact"},et=t("thead",null,[t("tr",null,[t("th",{style:{position:"relative","z-index":"2"}},"Hash"),t("th",null,"Msgs"),t("th",null,"Memo")])],-1),st={class:"text-sm"},ot={key:1,class:"text-center"},lt=U({__name:"TxsElement",props:{value:{type:Array}},setup(g){const m=g,a=p(()=>{var c;return((c=m.value)==null?void 0:c.map(b=>({hash:q(M.fromBase64(b)),tx:G.decodeTxRaw(M.fromBase64(b))})))||[]}),x=E(),n=K();return(c,b)=>{const y=H("RouterLink");return i(),r("div",Z,[o(a).length>0?(i(),r("table",tt,[et,t("tbody",st,[(i(!0),r(O,null,P(o(a),h=>(i(),r("tr",null,[t("td",null,[u(y,{to:`/${o(n).chainName}/tx/${h.hash}`,class:"text-primary dark:invert"},{default:j(()=>[I(s(h.hash),1)]),_:2},1032,["to"])]),t("td",null,s(o(x).messages(h.tx.body.messages.map(v=>({"@type":v.typeUrl})))),1),t("td",null,s(h.tx.body.memo),1)]))),256))])])):(i(),r("div",ot,"No Transactions"))])}}}),at={key:0,class:"text-center"},nt={key:0},ct={class:"text-primary font-bold text-lg my-10"},it={class:"my-5"},rt={class:"text-xl font-bold"},dt={class:"pt-10 flex justify-center"},ut={class:"table w-max rounded-lg bg-base-100"},ht={class:"text-right"},_t={class:"md:!ml-40"},mt={key:0},bt={colspan:"2",class:"text-center"},pt={class:"text-lg font-bold"},vt={class:"py-4"},ft={class:"join"},kt={class:"text-right"},gt={class:"text-right"},xt={class:"text-right"},yt={key:1},wt={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},$t={class:"card-title flex flex-row justify-between"},Nt={class:""},Bt={key:0,class:"flex"},Tt={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},jt={class:"card-title flex flex-row justify-between"},Dt={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},Ft={class:"card-title flex flex-row justify-between"},Lt={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},Rt={class:"card-title flex flex-row justify-between"},Ut=U({__name:"[height]",props:["height","chain"],setup(g){const m=g,a=J(),x=E(),n=k({}),c=k(Number(m.height||0)),b=p(()=>{var e,l;return Number(((l=(e=n.value.block)==null?void 0:e.header)==null?void 0:l.height)||m.height||0)}),y=p({get:()=>{var d,_;const e=(_=(d=a.latest)==null?void 0:d.block)==null?void 0:_.header.height,l=e?c.value>Number(e):!0;return!l&&!n.value.block_id&&a.fetchBlock(c.value).then(f=>n.value=f),l},set:e=>{console.log(e)}}),h=p(()=>{var l,d;const e=(d=(l=a.latest)==null?void 0:l.block)==null?void 0:d.header.height;return e?Number(c.value)-Number(e):0}),v=p(()=>h.value*Number((a.blocktime/1e3).toFixed())*1e3),z=p(()=>new Date(new Date().getTime()+v.value)),w=k(!1),$=k(m.height);function A(){c.value=Number($.value),console.log(c.value)}return Q(async(e,l,d)=>{l.path!==e.path&&(a.fetchBlock(String(e.params.height)).then(_=>n.value=_),d())}),(e,l)=>{var _,f,D,F,L,R,C,V;const d=H("RouterLink");return i(),r("div",null,[o(y)?(i(),r("div",at,[o(h)>0?(i(),r("div",nt,[t("div",ct,"#"+s(c.value),1),u(Y,{time:o(v),css:"md:!text-5xl font-sans md:mx-5"},null,8,["time"]),t("div",it,[I(s(e.$t("block.estimated_time"))+": ",1),t("span",rt,s(o(x).toLocaleDate(o(z))),1)]),t("div",dt,[t("table",ut,[t("tbody",null,[t("tr",{class:"hover cursor-pointer",onClick:l[0]||(l[0]=N=>w.value=!w.value)},[t("td",null,s(e.$t("block.countdown_for_block"))+":",1),t("td",ht,[t("span",_t,s(c.value),1)])]),w.value?(i(),r("tr",mt,[t("td",bt,[t("h3",pt,s(e.$t("block.countdown_for_block_input")),1),t("p",vt,[t("div",ft,[W(t("input",{class:"input input-bordered join-item","onUpdate:modelValue":l[1]||(l[1]=N=>$.value=N),type:"number"},null,512),[[X,$.value]]),t("button",{class:"btn btn-primary join-item",onClick:l[2]||(l[2]=N=>A())},s(e.$t("block.btn_update")),1)])])])])):B("",!0),t("tr",null,[t("td",null,s(e.$t("block.current_height"))+":",1),t("td",kt,"#"+s((f=(_=o(a).latest)==null?void 0:_.block)==null?void 0:f.header.height),1)]),t("tr",null,[t("td",null,s(e.$t("block.remaining_blocks"))+":",1),t("td",gt,s(o(h)),1)]),t("tr",null,[t("td",null,s(e.$t("block.average_block_time"))+":",1),t("td",xt,s((o(a).blocktime/1e3).toFixed(1))+"s",1)])])])])])):B("",!0)])):(i(),r("div",yt,[t("div",wt,[t("h2",$t,[t("p",Nt,"#"+s((F=(D=n.value.block)==null?void 0:D.header)==null?void 0:F.height),1),m.height?(i(),r("div",Bt,[u(d,{to:`/${o(a).blockchain.chainName}/block/${o(b)-1}`,class:"btn btn-primary btn-sm p-1 text-2xl mr-2"},{default:j(()=>[u(o(S),{icon:"mdi-arrow-left",class:"w-full h-full"})]),_:1},8,["to"]),u(d,{to:`/${o(a).blockchain.chainName}/block/${o(b)+1}`,class:"btn btn-primary btn-sm p-1 text-2xl"},{default:j(()=>[u(o(S),{icon:"mdi-arrow-right",class:"w-full h-full"})]),_:1},8,["to"])])):B("",!0)]),t("div",null,[u(T,{value:n.value.block_id},null,8,["value"])])]),t("div",Tt,[t("h2",jt,s(e.$t("block.block_header")),1),u(T,{value:(L=n.value.block)==null?void 0:L.header},null,8,["value"])]),t("div",Dt,[t("h2",Ft,s(e.$t("account.transactions")),1),u(lt,{value:(C=(R=n.value.block)==null?void 0:R.data)==null?void 0:C.txs},null,8,["value"])]),t("div",Lt,[t("h2",Rt,s(e.$t("block.last_commit")),1),u(T,{value:(V=n.value.block)==null?void 0:V.last_commit},null,8,["value"])])]))])}}});export{Ut as default};
