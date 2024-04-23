import{d as D,b as F,O as R,L as V,a1 as I,r as M,o as c,c as u,e as t,n as B,g as o,t as s,f as _,P as b,B as g,y as C,S as j,F as z,i as L,l as P}from"./index-68079b1d.js";import{b as N}from"./route-block-83d24a4e.js";const T={class:"tabs tabs-boxed bg-transparent mb-4"},E={class:"grid xl:!grid-cols-6 md:!grid-cols-4 grid-cols-1 gap-3"},O={class:"flex justify-between"},q={class:"text-md font-bold sm:!text-lg"},A={class:"rounded text-xs whitespace-nowrap font-medium text-green-600"},G={class:"flex justify-between tooltip","data-tip":"Block Proposor"},H={class:"mt-2 hidden text-sm sm:!block truncate"},J={class:"text-right mt-1 whitespace-nowrap"},K={class:"bg-base-100 rounded overflow-x-auto"},Q={class:"table w-full table-compact"},U={class:"bg-base-200"},W={style:{position:"relative","z-index":"2"}},X={style:{position:"relative","z-index":"2"}},Y=["index"],Z={class:"text-sm text-primary"},tt={class:"truncate text-primary",width:"50%"},st={class:"p-4"},et={class:"alert relative bg-transparent"},ot=t("div",{class:"alert absolute inset-x-0 inset-y-0 w-full h-full bg-info opacity-10"},null,-1),at={class:"text-info flex gap-2"},nt=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"stroke-current flex-shrink-0 w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),lt=D({__name:"index",props:["chain"],setup(p){const k=p,n=F("blocks"),f=R(),r=V(),S=I(()=>f.recents);return(a,i)=>{var x,m;const d=M("RouterLink");return c(),u("div",null,[t("div",T,[t("a",{class:B(["tab text-gray-400 uppercase",{"tab-active":o(n)==="blocks"}]),onClick:i[0]||(i[0]=e=>n.value="blocks")},s(a.$t("block.recent")),3),_(d,{class:"tab text-gray-400 uppercase",to:`/${p.chain}/block/${Number(((m=(x=o(f).latest)==null?void 0:x.block)==null?void 0:m.header.height)||0)+1e4}`},{default:b(()=>[g(s(a.$t("block.future")),1)]),_:1},8,["to"]),t("a",{class:B(["tab text-gray-400 uppercase",{"tab-active":o(n)==="transactions"}]),onClick:i[1]||(i[1]=e=>n.value="transactions")},s(a.$t("account.transactions")),3)]),C(t("div",E,[(c(!0),u(z,null,L(o(S),e=>(c(),P(d,{class:"flex flex-col justify-between rounded p-4 shadow bg-base-100",to:`/${p.chain}/block/${e.block.header.height}`},{default:b(()=>{var h,l,v,w,y,$;return[t("div",O,[t("h3",q,s(e.block.header.height),1),t("span",A,s(o(r).toDay((l=(h=e.block)==null?void 0:h.header)==null?void 0:l.time,"from")),1)]),t("div",G,[t("div",H,[t("span",null,s(o(r).validator((w=(v=e.block)==null?void 0:v.header)==null?void 0:w.proposer_address)),1)]),t("span",J,s(($=(y=e.block)==null?void 0:y.data)==null?void 0:$.txs.length)+" txs ",1)])]}),_:2},1032,["to"]))),256))],512),[[j,o(n)==="blocks"]]),C(t("div",K,[t("table",Q,[t("thead",U,[t("tr",null,[t("th",W,s(a.$t("account.height")),1),t("th",X,s(a.$t("account.hash")),1),t("th",null,s(a.$t("account.messages")),1),t("th",null,s(a.$t("block.fees")),1)])]),t("tbody",null,[(c(!0),u(z,null,L(o(f).txsInRecents,(e,h)=>{var l;return c(),u("tr",{index:h,class:"hover"},[t("td",Z,[_(d,{to:`/${k.chain}/block/${e.height}`},{default:b(()=>[g(s(e.height),1)]),_:2},1032,["to"])]),t("td",tt,[_(d,{to:`/${k.chain}/tx/${e.hash}`},{default:b(()=>[g(s(e.hash),1)]),_:2},1032,["to"])]),t("td",null,s(o(r).messages(e.tx.body.messages)),1),t("td",null,s(o(r).formatTokens((l=e.tx.authInfo.fee)==null?void 0:l.amount)),1)],8,Y)}),256))])]),t("div",st,[t("div",et,[ot,t("div",at,[nt,t("span",null,s(a.$t("block.only_tx")),1)])])])],512),[[j,o(n)==="transactions"]])])}}});typeof N=="function"&&N(lt);export{lt as default};
